import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { LANDING_BLOGS, LANDING_BLOG_INDEX_META } from '../data/landingBlogs';
import { TANAKA_GALLERY_IMAGES } from '../data/tanakaGallery';

// Per-route search metadata for the SPA: every crawlable page gets its own
// title, description and canonical, duplicates point at their canonical twin,
// and unknown URLs are genuine noindex 404s instead of duplicate homepages.
const SITE = 'https://www.linkupbuild.com';
const HOME_TITLE = 'LINKUP | Your Co-Founder Is Out There — Meet Them First';
const HOME_DESC = 'Your future co-founder is out there meeting builders. Rude. Tell Linky who you need, find your perfect partner, and become the startup duo everyone else envies.';
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
    title: 'LINKUP Features — Everything You Need To Meet Your Person',
    description: 'AI matchmaking, builder chemistry, daily picks, proof-of-work, private groups, and everything else you need to find a co-founder before someone else finds them first.',
    canonical: SITE + '/features',
  },
  '/builders': {
    title: 'Meet Your Future Favorite Builder on LINKUP',
    description: 'Spin the globe and meet founders, engineers, designers, and operators who might complete your startup life. Your person could be one search away.',
    canonical: SITE + '/builders',
  },
  '/directory': {
    title: 'Meet Your Future Favorite Builder on LINKUP',
    description: 'Spin the globe and meet founders, engineers, designers, and operators who might complete your startup life. Your person could be one search away.',
    canonical: SITE + '/builders',
  },
  '/founder': {
    title: 'About Tanaka Gaadzikwa — Founder & CEO of LINKUP',
    description: 'Meet Tanaka Gaadzikwa, the young Harare founder known as the Startup Cupid and Minister of AI. He built LINKUP so you can finally meet your co-founder.',
    canonical: SITE + '/founder',
    ogImage: 'https://i.ibb.co/pvvN63sV/20260526-181511.webp',
    ogType: 'profile',
  },
  '/about': {
    title: 'About Tanaka Gaadzikwa — Founder & CEO of LINKUP',
    description: 'Meet Tanaka Gaadzikwa, the young Harare founder known as the Startup Cupid and Minister of AI. He built LINKUP so you can finally meet your co-founder.',
    canonical: SITE + '/founder',
    ogImage: 'https://i.ibb.co/pvvN63sV/20260526-181511.webp',
    ogType: 'profile',
  },
  '/faq': {
    title: 'Before You Meet Your Person — LINKUP FAQ',
    description: 'How will you meet your co-founder? What happens when you match? Get answers about Linky, verification, messaging, pricing, privacy, and finding your person.',
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
      : 'This page ghosted you, but your future co-founder did not. Browse builders, explore LINKUP, or go meet your person instead.';
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

    const existingFounderLd = document.getElementById('linkup-dynamic-founder-ld');
    if (path === '/founder' || path === '/about') {
      const imageObjects = TANAKA_GALLERY_IMAGES.map((img) => ({
        '@type': 'ImageObject',
        '@id': `${SITE}/#${img.id}`,
        url: img.url,
        contentUrl: img.url,
        encodingFormat: 'image/jpeg',
        width: img.width,
        height: img.height,
        name: img.title,
        caption: img.caption,
        description: img.description,
        keywords: img.keywords.join(', '),
        creditText: 'Tanaka Gaadzikwa / LINKUP',
        creator: { '@id': `${SITE}/#tanaka-gaadzikwa` },
        copyrightHolder: { '@id': `${SITE}/#tanaka-gaadzikwa` },
        acquireLicensePage: `${SITE}/founder`,
        contentLocation: { '@type': 'Place', name: 'Harare, Zimbabwe' },
        about: { '@id': `${SITE}/#tanaka-gaadzikwa` },
        datePublished: '2026-11-09',
      }));
      const founderPayload = {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'ProfilePage',
            '@id': `${SITE}/founder#profile-entity`,
            url: `${SITE}/founder`,
            name: 'Tanaka Gaadzikwa — Founder & CEO of LINKUP',
            dateCreated: '2026-08-12T00:00:00Z',
            dateModified: '2026-11-09T20:30:00Z',
            mainEntity: { '@id': `${SITE}/#tanaka-gaadzikwa` },
            about: { '@id': `${SITE}/#tanaka-gaadzikwa` },
            primaryImageOfPage: { '@id': `${SITE}/#image-tanaka-1` },
            hasPart: { '@id': `${SITE}/founder#gallery` },
            inLanguage: 'en',
          },
          {
            '@type': 'ImageGallery',
            '@id': `${SITE}/founder#gallery`,
            name: 'Tanaka Gaadzikwa Official Press & Founder Image Gallery',
            description: 'Official photos, portraits, and startup press graphics of Tanaka Gaadzikwa (Tanaka Prince Gaadzikwa), Founder & CEO of LINKUP in Harare, Zimbabwe.',
            url: `${SITE}/founder`,
            about: { '@id': `${SITE}/#tanaka-gaadzikwa` },
            author: { '@id': `${SITE}/#tanaka-gaadzikwa` },
            image: imageObjects,
            associatedMedia: imageObjects.map((img) => ({ '@id': img['@id'] })),
          },
          {
            '@type': 'FAQPage',
            '@id': `${SITE}/founder#faq`,
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Who is Tanaka Gaadzikwa?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Tanaka Gaadzikwa (full name Tanaka Prince Gaadzikwa, born November 20, 2010) is a young Zimbabwean entrepreneur, software builder, and Founder & CEO of LINKUP based in Harare, Zimbabwe, widely known as the Startup Cupid and The Minister of AI.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is LINKUP?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'LINKUP is an AI-driven co-founder and collaborator matchmaking platform founded by Tanaka Gaadzikwa in Harare, Zimbabwe, featuring Linky AI, available on Google Play and at https://www.linkupbuild.com/.',
                },
              },
              {
                '@type': 'Question',
                name: 'Where is Tanaka Gaadzikwa based?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Tanaka Gaadzikwa is based in Harare, Zimbabwe.',
                },
              },
              {
                '@type': 'Question',
                name: 'How can I verify or contact Tanaka Gaadzikwa?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Official profiles for Tanaka Gaadzikwa include https://www.linkupbuild.com/founder, https://www.tanakagaadzikwa.com/, LinkedIn (tanaka-gaadzikwa-linkup), X (@TGaadzikwa), GitHub (tanakaprince49-cell), YouTube (@neverletbrocook0), Instagram (@talala2694), Telegram (@tanaka_93), and email tanakaprince49@gmail.com.',
                },
              },
            ],
          },
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
              { '@type': 'ListItem', position: 2, name: 'Tanaka Gaadzikwa', item: `${SITE}/founder` },
            ],
          },
        ],
      };
      const script = existingFounderLd || document.createElement('script');
      script.id = 'linkup-dynamic-founder-ld';
      script.setAttribute('type', 'application/ld+json');
      script.textContent = JSON.stringify(founderPayload);
      if (!existingFounderLd) document.head.appendChild(script);
    } else if (existingFounderLd) {
      existingFounderLd.remove();
    }
  }, [pathname]);
  return null;
}
