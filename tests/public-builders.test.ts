import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {parseMemberPage, fetchMemberPage, matchesBuilder, mergeBuilders, publicImage, initials, MEMBER_FEED} from '../src/lib/publicBuilders';
const member={uid:'member-1',name:'A Real Member',occupation:'Full-stack developer',company:'A Real Company',location:'Harare, Zimbabwe',bio:'Building useful software',skills:['React','TypeScript','React'],lookingFor:['Cofounder'],image:'https://example.com/avatar.jpg'};
const builder=()=>parseMemberPage({profiles:[member],nextCursor:null}).profiles[0];
test('member response creates cards from real fields with trusted individual profile links',()=>{
  const result=builder();assert.equal(result.name,member.name);assert.equal(result.url,'/app/p/member-1');assert.deepEqual(result.skills,['React','TypeScript']);
  assert.equal('matchScore' in result,false);assert.equal('repScore' in result,false);assert.equal('verified' in result,false);
  const missing=parseMemberPage({profiles:[{uid:'no-photo',name:'No Photo'}]}).profiles[0];assert.equal(missing.image,'');assert.equal(missing.occupation,'');assert.deepEqual(missing.skills,[]);assert.equal(initials(missing.name),'NP');
});
test('malformed data, demo IDs, stock fallbacks and external profile links are not accepted',()=>{
  assert.throws(()=>parseMemberPage({profiles:'not a list'}));assert.throws(()=>parseMemberPage({profiles:[],nextCursor:'../x'}));
  assert.deepEqual(parseMemberPage({profiles:[null,{uid:'demo-person',name:'Demo'},{uid:'bot-person',name:'Bot'},{uid:'bad/id',name:'Bad'},{uid:'no-name'}]}).profiles,[]);
  const result=parseMemberPage({profiles:[{...member,url:'https://evil.test',image:'javascript:alert(1)'}]}).profiles[0];assert.equal(result.url,'/app/p/member-1');assert.equal(result.image,'');
  for(const url of ['http://example.com/a','data:image/png;base64,abc','javascript:alert(1)','https://user:pass@example.com/a'])assert.equal(publicImage(url),'');
});
test('case-insensitive search covers actual names, company, skills, location and collaboration interests',()=>{
  for(const query of ['REAL MEMBER','react','harare','cofounder','real company'])assert.equal(matchesBuilder(builder(),query,'All'),true,query);
  assert.equal(matchesBuilder(builder(),'not-present','All'),false);assert.equal(matchesBuilder(builder(),'react','Engineering'),true);assert.equal(matchesBuilder(builder(),'react','AI / ML'),false);assert.equal(matchesBuilder(builder(),'','Design'),false);
  for(const [role,occupation] of [['AI / ML','Machine learning engineer'],['Engineering','Backend developer'],['Product / CEO','Founder & CEO'],['Design','UX designer'],['Fintech / BioTech','Payments engineer']])assert.equal(matchesBuilder({...builder(),occupation},'',role),true);
});
test('pagination deduplicates repeated members and updates their current card fields',()=>{
  const first=builder();const merged=mergeBuilders([first],[{...first,bio:'Updated bio'},{...first,uid:'member-2'}]);assert.equal(merged.length,2);assert.equal(merged[0].bio,'Updated bio');
  assert.equal(parseMemberPage({profiles:Array.from({length:50},(_,i)=>({...member,uid:'id-'+i}))}).profiles.length,40);
});
test('feed uses the same-origin live API, disables caching and never replaces failures with sample people',async()=>{
  const previous=globalThis.fetch;
  try {
    let seenUrl='';let seenInit: RequestInit | undefined;
    globalThis.fetch=async(input,init)=>{seenUrl=String(input);seenInit=init;return new Response(JSON.stringify({profiles:[member],nextCursor:'member-2'}),{headers:{'content-type':'application/json'}});};
    const page=await fetchMemberPage('member-0');assert.equal(page.profiles[0].uid,'member-1');assert.equal(seenUrl,MEMBER_FEED+'&after=member-0');assert.equal(seenInit?.cache,'no-store');assert.ok(seenInit?.signal);
    globalThis.fetch=async()=>new Response('unavailable',{status:503});await assert.rejects(fetchMemberPage());
    globalThis.fetch=async()=>new Response('<html>SPA fallback</html>',{headers:{'content-type':'text/html'}});await assert.rejects(fetchMemberPage());
    globalThis.fetch=async()=>new Response(JSON.stringify({profiles:[],nextCursor:'member-0'}),{headers:{'content-type':'application/json'}});await assert.rejects(fetchMemberPage('member-0'));
  } finally {globalThis.fetch=previous;}
});
test('directory source has no mock imports, invented scores or fake verification claims',()=>{
  const source=readFileSync(new URL('../src/components/BuilderDirectory.tsx',import.meta.url),'utf8');
  assert.doesNotMatch(source,/MOCK_BUILDERS|matchScore|repScore|builder\.verified|ShieldCheck|Unsplash|thousands of verified/i);
  assert.match(source,/fetchMemberPage/);assert.match(source,/href=\{builder\.url\}/);assert.match(source,/role="alert"/);assert.match(source,/Show more builders/);
  assert.doesNotMatch(readFileSync(new URL('../src/data/mockData.ts',import.meta.url),'utf8'),/MOCK_BUILDERS/);
});
import {fetchBuilderCount, formatBuilderCount} from '../src/lib/publicBuilders';
test('builder counter walks the live feed and formats real totals only',async()=>{
  const previous=globalThis.fetch;
  try {
    globalThis.fetch=async(input)=>{const page2=String(input).includes('after=');return new Response(JSON.stringify(page2?{profiles:[{...member,uid:'member-2'}],nextCursor:null}:{profiles:[member],nextCursor:'member-2'}),{headers:{'content-type':'application/json'}});};
    assert.deepEqual(await fetchBuilderCount(),{count:2,complete:true});
    globalThis.fetch=async(input)=>{const m=/after=c(\d+)/.exec(String(input));const n=m?Number(m[1])+1:1;return new Response(JSON.stringify({profiles:[{...member,uid:'m-'+n}],nextCursor:'c'+n}),{headers:{'content-type':'application/json'}});};
    const capped=await fetchBuilderCount();assert.equal(capped.complete,false);assert.equal(capped.count,25);
    globalThis.fetch=async()=>new Response('down',{status:503});await assert.rejects(fetchBuilderCount());
    assert.equal(formatBuilderCount(64),'64');assert.equal(formatBuilderCount(1240),'1,240');assert.equal(formatBuilderCount(14200),'14.2k');assert.equal(formatBuilderCount(150000),'150k');
  } finally {globalThis.fetch=previous;}
});
