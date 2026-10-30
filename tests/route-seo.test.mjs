import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read = p => readFileSync(new URL('../' + p, import.meta.url), 'utf8');

test('every sitemap page has its own title, description and canonical', () => {
  const src = read('src/lib/SeoRoute.tsx');
  for (const path of ['/', '/features', '/builders', '/directory', '/founder', '/about', '/campaigns', '/faq', '/index.html']) assert.ok(src.includes(`'${path}':`), path);
  assert.ok(src.includes("canonical: SITE + '/builders'"), 'directory dedupes to builders');
  assert.ok(src.includes("canonical: SITE + '/founder'"), 'about dedupes to founder');
  assert.match(src, /noindex, nofollow/);
  assert.match(src, /Page not found \| LINKUP/);
});

test('unknown URLs render a noindex 404 with crawler-friendly links, never the homepage', () => {
  const app = read('src/App.tsx');
  assert.match(app, /path="\*" element=\{<NotFound \/>\}/);
  assert.match(app, /<SeoRoute \/>/);
  assert.doesNotMatch(app, /path="\*" element=\{<HomePage \/>\}/);
  const nf = read('src/components/NotFound.tsx');
  for (const to of [`to: '/'`, `to: '/features'`, `to: '/builders'`, `to: '/faq'`]) assert.ok(nf.includes(to), to);
  assert.match(nf, /<h1/);
});

test('main nav links the dedicated founder entity page', () => {
  const nav = read('src/components/Navbar.tsx');
  assert.doesNotMatch(nav, /path: '\/#founder'/);
  assert.ok((nav.match(/path: '\/founder'/g) || []).length >= 1);
});

test('home title and description match the served index.html defaults', () => {
  const html = read('index.html');
  const src = read('src/lib/SeoRoute.tsx');
  const title = html.match(/<title>([^<]+)<\/title>/)[1];
  const desc = html.match(/<meta name="description" content="([^"]+)"/)[1];
  assert.ok(src.includes(title), 'title drift');
  assert.ok(src.includes(desc), 'description drift');
});
