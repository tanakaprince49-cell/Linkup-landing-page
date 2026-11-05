import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read = p => readFileSync(new URL('../' + p, import.meta.url), 'utf8');
const SHOTS = ['linky-ai-chat', 'real-time-messaging', 'startup-partners', 'missions-and-rewards', 'recommended-matches', 'trending-stories'];

test('showcase figures carry indexed captions and ImageObject microdata', () => {
  const src = read('src/components/AppShowcase.tsx');
  assert.match(src, /<motion\.figure/);
  assert.match(src, /itemType="https:\/\/schema\.org\/ImageObject"/);
  assert.match(src, /itemProp="contentUrl"/);
  assert.match(src, /itemProp="caption"/);
  assert.match(src, /title=\{screenshot\.alt\}/);
  assert.match(src, /screenshot\.caption/);
});

test('every showcase shot ships a long crawler caption', () => {
  const data = read('src/data/showcaseScreenshots.ts');
  assert.equal((data.match(/src: '\/images\/showcase\//g) || []).length, 6);
  const captions = [...data.matchAll(/caption: '([^']+)'/g)];
  assert.equal(captions.length, 6);
  for (const m of captions) assert.ok(m[1].length > 40, m[1]);
});

test('linkup agent section shows an indexed Linky figure', () => {
  const src = read('src/components/LinkupAgentFeature.tsx');
  assert.match(src, /<motion\.figure/);
  assert.match(src, /SHOWCASE_SCREENSHOTS\[0\]/);
  assert.match(src, /<figcaption/);
  assert.match(src, /itemProp="contentUrl"/);
});

test('member photos use descriptive namespaced alt text', () => {
  const src = read('src/components/BuilderDirectory.tsx');
  assert.match(src, /Photo of \$\{builder\.name\}/);
  assert.match(src, /on LINKUP/);
  assert.match(src, /decoding="async"/);
});

test('accelerator logos load lazily with hidden marquee duplicates', () => {
  const src = read('src/components/SocialProofMarquee.tsx');
  assert.match(src, /logo — \$\{item\.label\} on LINKUP/);
  assert.match(src, /loading="lazy"/);
  assert.match(src, /aria-hidden=\{idx >= ACCELERATORS\.length/);
});

test('founder portrait is the prioritized entity image with real dimensions', () => {
  const src = read('src/components/AboutFounder.tsx');
  assert.match(src, /fetchPriority="high"/);
  assert.match(src, /loading="eager"/);
  assert.match(src, /itemProp="contentUrl"/);
  assert.match(src, /width=\{1134\}[\s\S]*?height=\{2016\}/);
  assert.match(src, /itemProp="caption"/);
  assert.match(src, /noopener noreferrer me/);
});

test('image sitemaps cover all app screenshots on both sitemaps', () => {
  for (const f of ['sitemap.xml', 'public/sitemap.xml']) {
    const xml = read(f);
    for (const img of SHOTS) assert.ok(xml.includes(`/images/showcase/${img}.webp`), f + ' ' + img);
  }
});

test('software JSON-LD exposes screenshots, entity image and social alts', () => {
  const html = read('index.html');
  assert.match(html, /"screenshot": \[/);
  assert.ok((html.match(/\/images\/showcase\/[a-z-]+\.webp/g) || []).length >= 6);
  assert.match(html, /"subjectOf"/);
  assert.match(html, /og:image:alt/);
  assert.match(html, /twitter:image:alt/);
});

test('version 17 & founder blogs spotlights ship all 11 WebP mood icons, 17 indexed features, and zero sparkles', () => {
  const v17 = read('src/components/Version17Spotlight.tsx');
  const moods = [...v17.matchAll(/image: '(\/images\/moods\/[a-z0-9-]+\.webp)'/g)].map(m => m[1]);
  assert.equal(moods.length, 11);
  for (const m of moods) {
    const buf = readFileSync(new URL('../public' + m, import.meta.url));
    assert.ok(buf.length > 500, m);
  }
  const blogsSpotlight = read('src/components/FounderBlogsSpotlight.tsx');
  assert.match(blogsSpotlight, /\/app\/blogs/);
  assert.match(blogsSpotlight, /\/app\/blogs\/rss\.xml/);
  assert.match(blogsSpotlight, /Author Analytics \(Visible Only to You\)/);

  const html = read('index.html');
  assert.match(html, /"numberOfItems": 17/);
  assert.match(html, /#feature-radar/);
  assert.match(html, /#feature-blog-analytics/);
  assert.match(html, /#feature-venture-engine/);
  assert.match(html, /#feature-workspace/);
  assert.match(html, /#feature-homesearch/);
  assert.match(html, /#feature-moods/);
  for (const f of ['src/components/Hero.tsx', 'src/components/SoloFounderWarning.tsx', 'src/components/FounderBlogsSpotlight.tsx', 'src/components/Version17Spotlight.tsx', 'src/components/FeatureGrid.tsx', 'src/components/GooeyButtonGroup.tsx', 'src/components/NotFound.tsx', 'src/components/LinkupAgentFeature.tsx', 'src/data/mockData.ts']) {
    assert.doesNotMatch(read(f), /Sparkle|✨/i, `no sparkles allowed in ${f}`);
  }
  const heroSrc = read('src/components/Hero.tsx');
  assert.doesNotMatch(heroSrc, /\$42M\+|Capital Raised/i, 'removed $42M+ Capital Raised claim');
  assert.doesNotMatch(heroSrc, /Meet Linkup Agent|Private Views\/Clicks|#founder-blogs/i, 'removed cluttered hero announcement pills');
  assert.match(heroSrc, /Building Alone Kills Startups/);
  assert.match(read('src/components/SoloFounderWarning.tsx'), /Why Every Week Without a Co-Founder/);
});
