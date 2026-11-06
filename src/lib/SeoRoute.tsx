import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { LANDING_BLOGS, LANDING_BLOG_INDEX_META } from '../data/landingBlogs';

// Per-route search metadata for the SPA: every crawlable page gets its own
// title, description and canonical, duplicates point at their canonical twin,
// and unknown URLs are genuine noindex 404s instead of duplicate homepages.
const SITE = 'https://www.linkupbuild.com';
const HOME_TITLE = 'LINKUP | Co-Founder Matchmaking App — Founded by Tanaka Gaadzikwa';
const HOME_DESC = 'LINKUP is the AI-driven co-founder matchmaking platform: Linky AI companion, Builder League leaderboard, Momentum build streaks, Pitch Perfect battles, Daily Five picks, campaigns with real rewards, builder groups and startup radar.';
const INDEX_ROBOTS = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

type RouteMeta = { title: string; description: string; canonical: string; ogImage?: string; ogType?: string };
const BLOG_ROUTES: Record<string, RouteMeta> = Object.fromEntries(
  LANDING_BLOGS.map((post) => [
    post.path,
    {
      title: post.seoTitle,
      description: post.seoDescription,
      canonical: SITE + post.path,
      ogImage: SITE + post.coverImage,
      ogType: 'article',
    },
  ]),
);

const ROUTES: Record<string, RouteMeta> = {
  '/': { title: HOME_TITLE, description: HOME_DESC, canonical: SITE + '/' },
  '/index.html': { title: HOME_TITLE, description: HOME_DESC, canonical: SITE + '/' },
  '/blog': {
    title: LANDING_BLOG_INDEX_META.title,
    description: LANDING_BLOG_INDEX_META.description,
    canonical: SITE + '/blog',
    ogImage: SITE + '/images/landingblog/burnout.webp',
  },
  ...BLOG_ROUTES,
  '/features': {
    title: 'LINKUP Features — Linky AI, Builder League, Momentum Streaks & More',
    description: 'Every LINKUP capability: Linky AI companion, Builder League leaderboard, Momentum build streaks, Pitch Perfect battles, Daily Five picks, campaigns with real rewards and startup radar.',
    canonical: SITE + '/features',
  },
  '/builders': {
    title: 'Browse Builders — Verified Founders & Co-Founders on LINKUP',
    description: 'Meet real builders on LINKUP: founders, engineers, designers and operators open to co-founding. Live public profiles, skills and collaboration interests.',
    canonical: SITE + '/builders',
  },
  '/directory': {
    title: 'Browse Builders — Verified Founders & Co-Founders on LINKUP',
    description: 'Meet real builders on LINKUP: founders, engineers, designers and operators open to co-founding. Live public profiles, skills and collaboration interests.',
    canonical: SITE + '/builders',
  },
  '/founder': {
    title: 'About Tanaka Gaadzikwa — Founder & CEO of LINKUP',
    description: 'Tanaka Gaadzikwa (Tanaka Prince Gaadzikwa, born November 20, 2010) is the Young founder and CEO of LINKUP in Harare, Zimbabwe — the Startup Cupid and Minister of AI.',
    canonical: SITE + '/founder',
  },
  '/about': {
    title: 'About Tanaka Gaadzikwa — Founder & CEO of LINKUP',
    description: 'Tanaka Gaadzikwa (Tanaka Prince Gaadzikwa, born November 20, 2010) is the Young founder and CEO of LINKUP in Harare, Zimbabwe — the Startup Cupid and Minister of AI.',
    canonical: SITE + '/founder',
  },
  '/faq': {
    title: 'LINKUP FAQ — Co-Founder Matching Questions Answered',
    description: 'How does LINKUP match co-founders? How does verification work? Answers about AI matchmaking, REP scores, messaging and building part-time.',
    canonical: SITE + '/faq',
  },
};

function setMetaTag(attr: 'name' | 'property', key: string, value: string) {
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', value);
}

export function SeoRoute() {
  const { pathname } = useLocation();
  useEffect(() => {
    const path = pathname.replace(/\/+$/, '') || '/';
    const meta = ROUTES[path] || null;
    const title = meta ? meta.title : 'Page not found | LINKUP';
    const description = meta
      ? meta.description
      : 'This LINKUP page does not exist. Find a co-founder, browse builders or explore LINKUP features instead.';
    const canonical = meta ? meta.canonical : SITE + '/';

    document.title = title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', description);
    const canon = document.querySelector('link[rel="canonical"]');
    if (canon) canon.setAttribute('href', canonical);
    let robots = document.querySelector('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement('meta');
      robots.setAttribute('name', 'robots');
      document.head.appendChild(robots);
    }
    robots.setAttribute('content', meta ? INDEX_ROBOTS : 'noindex, nofollow');

    if (meta) {
      setMetaTag('property', 'og:title', title);
      setMetaTag('property', 'og:description', description);
      setMetaTag('property', 'og:url', canonical);
      setMetaTag('property', 'og:type', meta.ogType || 'website');
      setMetaTag('property', 'og:image', meta.ogImage || `${SITE}/images/logo.png`);
      setMetaTag('property', 'twitter:title', title);
      setMetaTag('property', 'twitter:description', description);
      setMetaTag('property', 'twitter:url', canonical);
      setMetaTag('property', 'twitter:image', meta.ogImage || `${SITE}/images/logo.png`);
    }

    const blogPost = LANDING_BLOGS.find((b) => b.path === path);
    const existingLd = document.getElementById('linkup-dynamic-blog-ld');
    if (blogPost) {
      const wordCount = blogPost.sections
        .flatMap((s) => s.paragraphs)
        .join(' ')
        .split(/\s+/).length;
      const ldPayload = {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'BlogPosting',
            '@id': `${SITE}${blogPost.path}#article`,
            mainEntityOfPage: `${SITE}${blogPost.path}`,
            headline: blogPost.title,
            description: blogPost.seoDescription,
            articleSection: blogPost.category,
            inLanguage: 'en',
            wordCount,
            datePublished: '2026-11-05',
            dateModified: '2026-11-05',
            keywords: blogPost.keywords.join(', '),
            image: {
              '@type': 'ImageObject',
              url: `${SITE}${blogPost.coverImage}`,
              contentUrl: `${SITE}${blogPost.coverImage}`,
              width: 1200,
              height: 675,
              caption: blogPost.imageCaption,
            },
            author: {
              '@type': 'Person',
              '@id': `${SITE}/#tanaka-gaadzikwa`,
              name: blogPost.author,
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
              { '@type': 'ListItem', position: 3, name: blogPost.title, item: `${SITE}${blogPost.path}` },
            ],
          },
          {
            '@type': 'FAQPage',
            mainEntity: blogPost.faqs.map((f) => ({
              '@type': 'Question',
              name: f.question,
              acceptedAnswer: { '@type': 'Answer', text: f.answer },
            })),
          },
        ],
      };
      const script = existingLd || document.createElement('script');
      script.id = 'linkup-dynamic-blog-ld';
      script.setAttribute('type', 'application/ld+json');
      script.textContent = JSON.stringify(ldPayload);
      if (!existingLd) document.head.appendChild(script);
    } else if (existingLd) {
      existingLd.remove();
    }
  }, [pathname]);
  return null;
}
