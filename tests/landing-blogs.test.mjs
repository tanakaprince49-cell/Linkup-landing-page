import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { LANDING_BLOGS, LANDING_BLOG_INDEX_META } from '../src/data/landingBlogs.ts';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = (p) => fs.readFileSync(path.join(root, p), 'utf8');
const DASH_RX = /[-–—‒―−]/;

test('exactly 5 solo-building danger blogs are published on the landing page with zero dashes anywhere', () => {
  assert.equal(LANDING_BLOGS.length, 5);

  const checkNoDashes = (val, loc) => {
    if (typeof val === 'string') {
      assert.doesNotMatch(val, DASH_RX, `forbidden dash found in ${loc}: ${val}`);
      assert.doesNotMatch(val, /&mdash;|&ndash;|&#8212;|&#8211;/i, `forbidden HTML dash entity in ${loc}`);
      assert.doesNotMatch(val, /Sparkle|✨|duolingo/i, `forbidden token in ${loc}`);
    } else if (Array.isArray(val)) {
      val.forEach((item, idx) => checkNoDashes(item, `${loc}[${idx}]`));
    } else if (val && typeof val === 'object') {
      for (const [k, v] of Object.entries(val)) {
        checkNoDashes(v, `${loc}.${k}`);
      }
    }
  };

  checkNoDashes(LANDING_BLOG_INDEX_META, 'LANDING_BLOG_INDEX_META');
  checkNoDashes(LANDING_BLOGS, 'LANDING_BLOGS');

  for (const post of LANDING_BLOGS) {
    assert.ok(post.path.startsWith('/blog/'), `must stay on landing page /blog/*: ${post.path}`);
    assert.doesNotMatch(post.path, /^\/app\//, 'must NOT live under /app/');
    const words = post.sections.flatMap((s) => s.paragraphs).join(' ').split(/\s+/).length;
    assert.ok(words >= 420, `expected long-form SEO essay (>=420 words), got ${words} for ${post.slug}`);
    assert.ok(post.sections.length >= 4);
    assert.ok(post.keyTakeaways.length >= 4);
    assert.ok(post.faqs.length >= 3);
  }
});

test('all 5 blog cover images are self-hosted 1200x675 WebP for Google Discover & Google Images', async () => {
  for (const post of LANDING_BLOGS) {
    const imgPath = path.join(root, 'public', post.coverImage);
    assert.ok(fs.existsSync(imgPath), `missing cover ${post.coverImage}`);
    const meta = await sharp(imgPath).metadata();
    assert.equal(meta.format, 'webp');
    assert.equal(meta.width, 1200);
    assert.equal(meta.height, 675);
  }
});

test('sitemaps, robots.txt, RSS, vercel rewrites, and prerendered HTML make all 5 blogs super indexable by Google', () => {
  const robots = read('public/robots.txt');
  assert.ok(robots.includes('Sitemap: https://www.linkupbuild.com/blog/sitemap.xml'));

  const blogSitemap = read('public/blog/sitemap.xml');
  const rss = read('public/blog/rss.xml');
  const rootSitemap = read('sitemap.xml');
  const pubSitemap = read('public/sitemap.xml');
  const vercel = JSON.parse(read('vercel.json'));

  for (const post of LANDING_BLOGS) {
    const fullUrl = `https://www.linkupbuild.com${post.path}`;
    const fullImg = `https://www.linkupbuild.com${post.coverImage}`;
    assert.ok(blogSitemap.includes(`<loc>${fullUrl}</loc>`), `blog/sitemap.xml missing ${fullUrl}`);
    assert.ok(blogSitemap.includes(`<image:loc>${fullImg}</image:loc>`), `blog/sitemap.xml missing image ${fullImg}`);
    assert.ok(blogSitemap.includes('<news:news>'), 'Google News tag present');
    assert.ok(rss.includes(`<link>${fullUrl}</link>`), `rss.xml missing ${fullUrl}`);
    assert.ok(rootSitemap.includes(`<loc>${fullUrl}</loc>`), `sitemap.xml missing ${fullUrl}`);
    assert.ok(pubSitemap.includes(`<loc>${fullUrl}</loc>`), `public/sitemap.xml missing ${fullUrl}`);

    const rule = vercel.rewrites.find((r) => r.source === post.path);
    assert.ok(rule, `vercel rewrite missing for ${post.path}`);
    assert.equal(rule.destination, `${post.path}/index.html`);
    assert.ok(!rule.destination.includes('linkup-muqu.vercel.app'), 'must remain landing-page only');
  }

  for (const comp of ['src/components/LandingBlogsSection.tsx', 'src/components/LandingBlogPages.tsx']) {
    assert.doesNotMatch(read(comp), /Sparkle|✨|duolingo|&mdash;|&ndash;/i, `clean copy in ${comp}`);
  }

  // Verify prerendered dist/blog/<slug>/index.html when dist exists
  if (fs.existsSync(path.join(root, 'dist', 'blog', 'index.html'))) {
    for (const post of LANDING_BLOGS) {
      const distHtml = read(`dist/blog/${post.slug}/index.html`);
      assert.ok(distHtml.includes(`<title>${post.seoTitle}</title>`));
      assert.ok(distHtml.includes(`<link rel="canonical" href="https://www.linkupbuild.com${post.path}" />`));
      assert.ok(distHtml.includes('"@type":"BlogPosting"'));
      assert.ok(distHtml.includes('"@type":"FAQPage"'));
      assert.ok(distHtml.includes('"@type":"BreadcrumbList"'));
      assert.ok(distHtml.includes(`<h1 itemProp="headline">${post.title}</h1>`));

      // Extract visible text inside <article ...>...</article> and verify ZERO dashes!
      const articleMatch = distHtml.match(/<article[\s\S]*?<\/article>/);
      assert.ok(articleMatch, `prerendered <article> present for ${post.slug}`);
      const visibleText = articleMatch[0].replace(/<[^>]+>/g, ' ');
      assert.doesNotMatch(visibleText, DASH_RX, `prerendered visible article text must have zero dashes in ${post.slug}`);
    }
  }
});
