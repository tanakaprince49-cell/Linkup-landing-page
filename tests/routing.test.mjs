import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=p=>readFileSync(new URL('../'+p,import.meta.url),'utf8');
const config=JSON.parse(read('vercel.json'));
function route(pathname) {
  for(const rule of config.rewrites) {
    if(rule.source===pathname)return rule.destination;
    if(rule.source==='/app/:path*' && pathname.startsWith('/app/'))return rule.destination.replace(':path*',pathname.slice(5));
    if(rule.source==='/(.*)')return rule.destination.replace('$1',pathname.slice(1));
  }
}
test('both bare app entrances proxy directly to the upstream HTML, not its slash redirect',()=>{
  for(const path of ['/app','/app/'])assert.equal(route(path),'https://linkup-muqu.vercel.app/index.html');
  assert.ok(config.rewrites.findIndex(r=>r.source==='/app/')<config.rewrites.findIndex(r=>r.source==='/app/:path*'));
});
test('deep routes, assets, APIs, SEO and PWA stay under the existing app proxy',()=>{
  for(const path of ['landing','login','profile/member-1','api/payonifyWebhook','api/payonifyCheckout','api/payonifyStatus','api/linky','_expo/static/js/web/chunk.js','manifest.webmanifest','service-worker.js','icons/icon-192.png','p/member-1','builders','sitemap.xml','__/auth/handler'])assert.equal(route('/app/'+path),'https://linkup-muqu.vercel.app/'+path);
});
test('marketing homepage, assets, forms and similar prefixes are not proxied',()=>{
  for(const path of ['/','/features','/founder','/faq','/assets/index.js','/api/contact','/application','/app-other'])assert.equal(route(path),'/index.html');
  assert.ok(!config.redirects?.some(r=>r.destination?.includes('linkup-muqu.vercel.app')));
});
test('robots discovers both sitemaps and the footer links to the public member directory',()=>{
  const robots=read('public/robots.txt');assert.ok(robots.includes('Sitemap: https://www.linkupbuild.com/sitemap.xml'));assert.ok(robots.includes('Sitemap: https://www.linkupbuild.com/app/sitemap.xml'));
  assert.match(read('src/components/Footer.tsx'),/href="\/app\/builders"/);
  for(const file of ['public/sitemap.xml','sitemap.xml'])assert.match(read(file),/<loc>https:\/\/www.linkupbuild.com\/app\/builders<\/loc>/);
});
