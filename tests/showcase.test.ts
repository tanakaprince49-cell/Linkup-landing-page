import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import sharp from 'sharp';
import {SHOWCASE_SCREENSHOTS} from '../src/data/showcaseScreenshots';
const expected=[
  ['linky-ai-chat.webp','c36f16a56d30000746588e346170df965b3ffede77ecace9dbcc45d8457e8ebd'],
  ['real-time-messaging.webp','db524d5a48979ba3a66943a4e469263e27e74bafe16e707be93b2fd914e5afc6'],
  ['startup-partners.webp','06243a66c8e29991163b32cfb7910a3cb7379816a5955569790a3ed2bb929649'],
  ['missions-and-rewards.webp','74c9048419128be61d25b69010751d999789a5709eb8d76b3999ec5ca783b287'],
  ['recommended-matches.webp','e91e35efdfa8e3005fc679d5694010b1080e97e05c255adf090fdec27eb94c6e'],
  ['trending-stories.webp','95ea6dd2d1dd520e4725ee18d7c341a06a9f3d8b164e0abf05750e69b1e86243'],
];
test('six owner-supplied images are self-hosted in the requested order with original bytes',async()=>{
  assert.equal(SHOWCASE_SCREENSHOTS.length,6);
  for(const [i,image] of SHOWCASE_SCREENSHOTS.entries()){
    assert.equal(image.src,'/images/showcase/'+expected[i][0]);assert.ok(image.alt.length>20);
    const bytes=readFileSync(new URL('../public'+image.src,import.meta.url));
    assert.equal(createHash('sha256').update(bytes).digest('hex'),expected[i][1]);
    const metadata=await sharp(bytes).metadata();assert.equal(metadata.format,'webp');assert.equal(metadata.width,768);assert.equal(metadata.height,1376);
  }
});
test('showcase renders full poster proportions and no longer references the old demo image host URLs',()=>{
  const source=readFileSync(new URL('../src/components/AppShowcase.tsx',import.meta.url),'utf8');
  assert.match(source,/SHOWCASE_SCREENSHOTS\.map/);assert.match(source,/aspect-\[24\/43\]/);assert.match(source,/object-contain/);assert.match(source,/alt=\{screenshot\.alt\}/);
  assert.doesNotMatch(source,/screenshot-1\.webp|screenshot-2\.webp|i\.ibb\.co|aspect-\[9\/19\.5\]|object-cover/);
});
