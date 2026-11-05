import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { LANDING_BLOGS, LANDING_BLOG_INDEX_META } from '../src/data/landingBlogs.ts';

const SITE = 'https://www.linkupbuild.com';
const PUB_DATE_ISO = '2026-11-05';
const PUB_DATETIME_ISO = '2026-11-05T09:00:00Z';
const PUB_RFC2822 = 'Thu, 05 Nov 2026 09:00:00 GMT';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function escXml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function escHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// 1. Generate dedicated /public/blog/sitemap.xml (Standard + Image + Google News tags)
const publicBlogDir = path.join(root, 'public', 'blog');
fs.mkdirSync(publicBlogDir, { recursive: true });

const blogSitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
  <url>
    <loc>${SITE}/blog</loc>
    <lastmod>${PUB_DATE_ISO}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.95</priority>
  </url>
${LANDING_BLOGS.map(
  (post) => `  <url>
    <loc>${SITE}${post.path}</loc>
    <lastmod>${PUB_DATE_ISO}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.92</priority>
    <image:image>
      <image:loc>${SITE}${post.coverImage}</image:loc>
      <image:title>${escXml(post.title)}</image:title>
      <image:caption>${escXml(post.imageCaption)}</image:caption>
    </image:image>
    <news:news>
      <news:publication>
        <news:name>LINKUP Founder Journal</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>${PUB_DATETIME_ISO}</news:publication_date>
      <news:title>${escXml(post.title)}</news:title>
    </news:news>
  </url>`,
).join('\n')}
</urlset>
`;
fs.writeFileSync(path.join(publicBlogDir, 'sitemap.xml'), blogSitemapXml, 'utf8');

// 2. Generate /public/blog/rss.xml
const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escXml(LANDING_BLOG_INDEX_META.title)}</title>
    <link>${SITE}/blog</link>
    <description>${escXml(LANDING_BLOG_INDEX_META.description)}</description>
    <language>en</language>
    <lastBuildDate>${PUB_RFC2822}</lastBuildDate>
    <atom:link href="${SITE}/blog/rss.xml" rel="self" type="application/rss+xml"/>
${LANDING_BLOGS.map(
  (post) => `    <item>
      <title>${escXml(post.title)}</title>
      <link>${SITE}${post.path}</link>
      <guid isPermaLink="true">${SITE}${post.path}</guid>
      <pubDate>${PUB_RFC2822}</pubDate>
      <category>${escXml(post.category)}</category>
      <description>${escXml(post.seoDescription)}</description>
    </item>`,
).join('\n')}
  </channel>
</rss>
`;
fs.writeFileSync(path.join(publicBlogDir, 'rss.xml'), rssXml, 'utf8');

// 3. Ensure root sitemap.xml & public/sitemap.xml contain /blog and all 5 /blog/<slug> entries
const mainSitemapEntries = `  <url>
    <loc>${SITE}/blog</loc>
    <lastmod>${PUB_DATE_ISO}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.95</priority>
  </url>
${LANDING_BLOGS.map(
  (post) => `  <url>
    <loc>${SITE}${post.path}</loc>
    <lastmod>${PUB_DATE_ISO}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.92</priority>
    <image:image>
      <image:loc>${SITE}${post.coverImage}</image:loc>
      <image:title>${escXml(post.title)}</image:title>
      <image:caption>${escXml(post.imageCaption)}</image:caption>
    </image:image>
  </url>`,
).join('\n')}`;

for (const relPath of ['sitemap.xml', 'public/sitemap.xml']) {
  const full = path.join(root, relPath);
  if (!fs.existsSync(full)) continue;
  let xml = fs.readFileSync(full, 'utf8');
  // Strip any previous /blog entries so re-runs stay idempotent
  xml = xml.replace(/\s*<url>\s*<loc>https:\/\/www\.linkupbuild\.com\/blog(?:\/[a-z]+)?<\/loc>[\s\S]*?<\/url>/g, '');
  xml = xml.replace('</urlset>', `${mainSitemapEntries}\n</urlset>`);
  fs.writeFileSync(full, xml, 'utf8');
}

// 4. Prerender static HTML into dist/blog/index.html and dist/blog/<slug>/index.html when dist/index.html exists
const distIndexPath = path.join(root, 'dist', 'index.html');
if (fs.existsSync(distIndexPath)) {
  const baseHtml = fs.readFileSync(distIndexPath, 'utf8');
  const distBlogDir = path.join(root, 'dist', 'blog');
  fs.mkdirSync(distBlogDir, { recursive: true });
  fs.copyFileSync(path.join(publicBlogDir, 'sitemap.xml'), path.join(distBlogDir, 'sitemap.xml'));
  fs.copyFileSync(path.join(publicBlogDir, 'rss.xml'), path.join(distBlogDir, 'rss.xml'));

  function buildHeadCustomizedHtml({
    title,
    description,
    keywords,
    canonicalUrl,
    ogType,
    ogImage,
    ogImageAlt,
    extraMeta = '',
    jsonLdObject,
    prerenderedRootHtml,
  }) {
    let html = baseHtml;
    html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escHtml(title)}</title>`);
    html = html.replace(
      /<meta name="description" content="[^"]*"\s*\/>/,
      `<meta name="description" content="${escHtml(description)}" />`,
    );
    html = html.replace(
      /<meta name="keywords" content="[^"]*"\s*\/>/,
      `<meta name="keywords" content="${escHtml(keywords)}" />`,
    );
    html = html.replace(
      /<link rel="canonical" href="[^"]*"\s*\/>/,
      `<link rel="canonical" href="${escHtml(canonicalUrl)}" />\n    <link rel="alternate" type="application/rss+xml" title="LINKUP Founder Journal" href="${SITE}/blog/rss.xml" />`,
    );
    html = html.replace(/<meta property="og:type" content="[^"]*"\s*\/>/, `<meta property="og:type" content="${escHtml(ogType)}" />`);
    html = html.replace(/<meta property="og:url" content="[^"]*"\s*\/>/, `<meta property="og:url" content="${escHtml(canonicalUrl)}" />`);
    html = html.replace(/<meta property="og:title" content="[^"]*"\s*\/>/, `<meta property="og:title" content="${escHtml(title)}" />`);
    html = html.replace(/<meta property="og:description" content="[^"]*"\s*\/>/, `<meta property="og:description" content="${escHtml(description)}" />`);
    html = html.replace(/<meta property="og:image" content="[^"]*"\s*\/>/, `<meta property="og:image" content="${escHtml(ogImage)}" />`);
    html = html.replace(/<meta property="og:image:alt" content="[^"]*"\s*\/>/, `<meta property="og:image:alt" content="${escHtml(ogImageAlt)}" />`);
    html = html.replace(/<meta property="og:image:width" content="[^"]*"\s*\/>/, `<meta property="og:image:width" content="1200" />`);
    html = html.replace(/<meta property="og:image:height" content="[^"]*"\s*\/>/, `<meta property="og:image:height" content="675" />`);

    html = html.replace(/<meta property="twitter:url" content="[^"]*"\s*\/>/, `<meta property="twitter:url" content="${escHtml(canonicalUrl)}" />`);
    html = html.replace(/<meta property="twitter:title" content="[^"]*"\s*\/>/, `<meta property="twitter:title" content="${escHtml(title)}" />`);
    html = html.replace(/<meta property="twitter:description" content="[^"]*"\s*\/>/, `<meta property="twitter:description" content="${escHtml(description)}" />`);
    html = html.replace(/<meta property="twitter:image" content="[^"]*"\s*\/>/, `<meta property="twitter:image" content="${escHtml(ogImage)}" />`);
    html = html.replace(/<meta name="twitter:image:alt" content="[^"]*"\s*\/>/, `<meta name="twitter:image:alt" content="${escHtml(ogImageAlt)}" />`);

    const ldScript = `\n    ${extraMeta}\n    <script id="linkup-prerender-blog-ld" type="application/ld+json">${JSON.stringify(jsonLdObject)}</script>\n  </head>`;
    html = html.replace(/\s*<\/head>/, ldScript);

    html = html.replace('<div id="root"></div>', `<div id="root">${prerenderedRootHtml}</div>`);
    return html;
  }

  // Prerender /blog hub
  const hubJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Blog',
        '@id': `${SITE}/blog#blog`,
        url: `${SITE}/blog`,
        name: LANDING_BLOG_INDEX_META.title,
        description: LANDING_BLOG_INDEX_META.description,
        inLanguage: 'en',
        publisher: { '@type': 'Organization', name: 'LINKUP', url: SITE },
        blogPost: LANDING_BLOGS.map((b) => ({
          '@type': 'BlogPosting',
          headline: b.title,
          url: `${SITE}${b.path}`,
          datePublished: PUB_DATE_ISO,
          image: `${SITE}${b.coverImage}`,
          author: { '@type': 'Person', name: b.author },
        })),
      },
      {
        '@type': 'ItemList',
        name: 'Five Reports Explaining Why Building Alone Is Dangerous',
        numberOfItems: LANDING_BLOGS.length,
        itemListElement: LANDING_BLOGS.map((b, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          url: `${SITE}${b.path}`,
          name: b.title,
        })),
      },
    ],
  };

  const hubRootHtml = `<main><section><h1>Why Building Alone Is Dangerous</h1><p>${escHtml(
    LANDING_BLOG_INDEX_META.description,
  )}</p>${LANDING_BLOGS.map(
    (b) =>
      `<article><h2><a href="${b.path}">${escHtml(b.title)}</a></h2><p>${escHtml(
        b.subtitle,
      )}</p><p>By ${escHtml(b.author)} • ${escHtml(b.publishedLabel)} • ${escHtml(b.readTime)}</p></article>`,
  ).join('')}</section></main>`;

  const hubHtml = buildHeadCustomizedHtml({
    title: LANDING_BLOG_INDEX_META.title,
    description: LANDING_BLOG_INDEX_META.description,
    keywords: 'why building alone is dangerous, solo founder burnout, startup cofounder, find a cofounder, LINKUP blog',
    canonicalUrl: `${SITE}/blog`,
    ogType: 'website',
    ogImage: `${SITE}/images/landingblog/burnout.webp`,
    ogImageAlt: LANDING_BLOGS[0].imageAlt,
    jsonLdObject: hubJsonLd,
    prerenderedRootHtml: hubRootHtml,
  });
  fs.writeFileSync(path.join(distBlogDir, 'index.html'), hubHtml, 'utf8');

  // Prerender each of the 5 blog essays
  for (const post of LANDING_BLOGS) {
    const fullText = post.sections.flatMap((s) => s.paragraphs).join('\n\n');
    const wordCount = fullText.split(/\s+/).filter(Boolean).length;
    const postJsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'BlogPosting',
          '@id': `${SITE}${post.path}#article`,
          mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE}${post.path}` },
          headline: post.title,
          description: post.seoDescription,
          articleSection: post.category,
          inLanguage: 'en',
          wordCount,
          datePublished: PUB_DATETIME_ISO,
          dateModified: PUB_DATETIME_ISO,
          keywords: post.keywords.join(', '),
          articleBody: fullText,
          image: {
            '@type': 'ImageObject',
            url: `${SITE}${post.coverImage}`,
            contentUrl: `${SITE}${post.coverImage}`,
            width: 1200,
            height: 675,
            caption: post.imageCaption,
          },
          author: {
            '@type': 'Person',
            '@id': `${SITE}/#tanaka-gaadzikwa`,
            name: post.author,
            jobTitle: post.authorRole,
            url: `${SITE}/founder`,
          },
          publisher: {
            '@type': 'Organization',
            name: 'LINKUP',
            url: SITE,
            logo: {
              '@type': 'ImageObject',
              url: `${SITE}/images/logo.png`,
            },
          },
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
            { '@type': 'ListItem', position: 2, name: 'Founder Journal', item: `${SITE}/blog` },
            { '@type': 'ListItem', position: 3, name: post.title, item: `${SITE}${post.path}` },
          ],
        },
        {
          '@type': 'FAQPage',
          mainEntity: post.faqs.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: { '@type': 'Answer', text: f.answer },
          })),
        },
      ],
    };

    const siblings = LANDING_BLOGS.filter((b) => b.slug !== post.slug);
    const articleRootHtml = `<main><article itemScope itemType="https://schema.org/BlogPosting"><header><p>${escHtml(
      post.reportNumber,
    )} • ${escHtml(post.category)} • ${escHtml(post.readTime)}</p><h1 itemProp="headline">${escHtml(
      post.title,
    )}</h1><p itemProp="description">${escHtml(post.subtitle)}</p><p>By <span itemProp="author">${escHtml(
      post.author,
    )}</span> • ${escHtml(post.authorRole)} • Published ${escHtml(post.publishedLabel)}</p></header><figure itemProp="image" itemScope itemType="https://schema.org/ImageObject"><img src="${escHtml(
      post.coverImage,
    )}" alt="${escHtml(post.imageAlt)}" width="1200" height="675" itemProp="contentUrl url" /><figcaption itemProp="caption">${escHtml(
      post.imageCaption,
    )}</figcaption></figure><aside><h2>Key Founder Takeaways</h2><ul>${post.keyTakeaways
      .map((t) => `<li>${escHtml(t)}</li>`)
      .join('')}</ul></aside><div itemProp="articleBody">${post.sections
      .map(
        (sec) =>
          `<section id="${escHtml(sec.id)}"><h2>${escHtml(sec.heading)}</h2>${sec.paragraphs
            .map((p) => `<p>${escHtml(p)}</p>`)
            .join('')}</section>`,
      )
      .join('')}</div><section><h2>Common Questions On Solo Startup Risk</h2>${post.faqs
      .map((f) => `<div><h3>${escHtml(f.question)}</h3><p>${escHtml(f.answer)}</p></div>`)
      .join('')}</section><nav aria-label="More founder reports"><h2>Continue Reading The Solo Risk Series</h2><ul>${siblings
      .map((s) => `<li><a href="${s.path}">${escHtml(s.title)}</a></li>`)
      .join('')}<li><a href="/blog">All 5 Solo Founder Risk Reports</a></li></ul></nav></article></main>`;

    const extraMeta = [
      `<meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />`,
      `<meta property="article:published_time" content="${PUB_DATETIME_ISO}" />`,
      `<meta property="article:modified_time" content="${PUB_DATETIME_ISO}" />`,
      `<meta property="article:author" content="${escHtml(post.author)}" />`,
      `<meta property="article:section" content="${escHtml(post.category)}" />`,
    ].join('\n    ');

    const postHtml = buildHeadCustomizedHtml({
      title: post.seoTitle,
      description: post.seoDescription,
      keywords: post.keywords.join(', '),
      canonicalUrl: `${SITE}${post.path}`,
      ogType: 'article',
      ogImage: `${SITE}${post.coverImage}`,
      ogImageAlt: post.imageAlt,
      extraMeta,
      jsonLdObject: postJsonLd,
      prerenderedRootHtml: articleRootHtml,
    });

    const postOutDir = path.join(distBlogDir, post.slug);
    fs.mkdirSync(postOutDir, { recursive: true });
    fs.writeFileSync(path.join(postOutDir, 'index.html'), postHtml, 'utf8');
  }
  console.log(`Prerendered /blog hub + ${LANDING_BLOGS.length} static SEO articles into dist/blog/`);
}
