import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { TANAKA_GALLERY_IMAGES } from '../src/data/tanakaGallery.ts';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = (p) => fs.readFileSync(path.join(root, p), 'utf8');

test('all 18 hosted Tanaka images exist on disk and are NOT rendered visibly in site components', () => {
  assert.equal(TANAKA_GALLERY_IMAGES.length, 18);

  for (const img of TANAKA_GALLERY_IMAGES) {
    const filePath = path.join(root, 'public', 'images', 'tanaka', img.filename);
    assert.ok(fs.existsSync(filePath), `missing image file ${img.filename}`);
    assert.ok(img.title.toLowerCase().includes('tanaka'), `title includes Tanaka: ${img.filename}`);
    assert.ok(img.caption.length > 50, `caption long enough for Google Images: ${img.filename}`);
  }

  const componentFiles = [
    'src/App.tsx',
    ...fs.readdirSync(path.join(root, 'src', 'components')).map((f) => path.join('src', 'components', f)),
  ];
  for (const file of componentFiles) {
    const src = read(file);
    assert.doesNotMatch(src, /\/images\/tanaka\//, `${file} must NOT visibly render /images/tanaka/`);
  }
});

test('index.html exposes valid JSON-LD Person.image and ImageGallery for all 18 images', () => {
  const html = read('index.html');
  assert.match(html, /tanaka-images-sitemap\.xml/);

  const match = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  assert.ok(match, 'JSON-LD script present');
  const ld = JSON.parse(match[1]);

  const person = ld['@graph'].find((n) => n['@id'] === 'https://www.linkupbuild.com/#tanaka-gaadzikwa');
  assert.ok(person, 'Person node present');
  assert.equal(person.image.length, 26, '8 original + 18 hosted Tanaka images');

  const gallery = ld['@graph'].find((n) => n['@id'] === 'https://www.linkupbuild.com/founder#gallery');
  assert.ok(gallery, 'ImageGallery node present');
  assert.equal(gallery.image.length, 18);

  for (const img of TANAKA_GALLERY_IMAGES) {
    const found = person.image.find((node) => node.contentUrl === img.url);
    assert.ok(found, `Person.image includes ${img.url}`);
    assert.equal(found.width, img.width);
    assert.equal(found.height, img.height);
    assert.equal(found.encodingFormat, 'image/jpeg');
  }
});

test('sitemaps, robots.txt, and vercel.json index all 18 images cleanly', () => {
  const robots = read('public/robots.txt');
  assert.ok(robots.includes('Sitemap: https://www.linkupbuild.com/tanaka-images-sitemap.xml'));

  const tanakaSitemap = read('public/tanaka-images-sitemap.xml');
  const pubSitemap = read('public/sitemap.xml');
  const rootSitemap = read('sitemap.xml');
  assert.equal(pubSitemap, rootSitemap, 'public/sitemap.xml and sitemap.xml stay synced');

  for (const img of TANAKA_GALLERY_IMAGES) {
    assert.ok(tanakaSitemap.includes(`<image:loc>${img.url}</image:loc>`), `tanaka-images-sitemap missing ${img.filename}`);
    assert.ok(pubSitemap.includes(`<image:loc>${img.url}</image:loc>`), `sitemap.xml missing ${img.filename}`);
  }

  const vercel = JSON.parse(read('vercel.json'));
  const tanakaHeader = vercel.headers.find((h) => h.source === '/images/tanaka/(.*)');
  assert.ok(tanakaHeader, 'vercel header rule for /images/tanaka/(.*)');
  const xRobots = tanakaHeader.headers.find((h) => h.key === 'X-Robots-Tag');
  assert.ok(xRobots && xRobots.value.includes('index') && xRobots.value.includes('max-image-preview:large'));
});

test('Knowledge Graph Person, Organization, and ProfilePage entities are cleanly disambiguated and corroborated', () => {
  const html = read('index.html');
  const match = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  const ld = JSON.parse(match[1]);

  const person = ld['@graph'].find((n) => n['@id'] === 'https://www.linkupbuild.com/#tanaka-gaadzikwa');
  const org = ld['@graph'].find((n) => n['@id'] === 'https://www.linkupbuild.com/#organization');
  const profile = ld['@graph'].find((n) => n['@id'] === 'https://www.linkupbuild.com/founder#profile');

  assert.equal(person.founder, undefined, 'Person must not contain invalid founder property');
  assert.equal(person.url, 'https://www.linkupbuild.com/founder');
  assert.ok(person.sameAs.includes('https://www.tanakagaadzikwa.com/'));
  assert.ok(person.sameAs.includes('https://github.com/tanakaprince49-cell'));
  assert.ok(person.sameAs.includes('https://x.com/TGaadzikwa'));
  assert.ok(!org.sameAs.some((u) => u.includes('tanakagaadzikwa.com')), 'Organization.sameAs must not conflate personal site');
  assert.equal(profile.dateCreated, '2026-08-12T00:00:00Z');
  assert.ok(profile.dateModified);

  const about = read('src/components/AboutFounder.tsx');
  for (const url of ['https://x.com/TGaadzikwa', 'https://github.com/tanakaprince49-cell', 'https://youtube.com/@neverletbrocook0', 'https://instagram.com/talala2694']) {
    assert.ok(about.includes(url), `AboutFounder.tsx visibly links ${url}`);
  }
});
