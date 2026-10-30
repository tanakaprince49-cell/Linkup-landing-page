import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Per-route search metadata for the SPA: every crawlable page gets its own
// title, description and canonical, duplicates point at their canonical twin,
// and unknown URLs are genuine noindex 404s instead of duplicate homepages.
const SITE = 'https://www.linkupbuild.com';
const HOME_TITLE = 'LINKUP | Co-Founder Matchmaking App — Founded by Tanaka Gaadzikwa';
const HOME_DESC = 'LINKUP is the AI-driven co-founder matchmaking platform: Linky AI companion, Builder League leaderboard, Momentum build streaks, Pitch Perfect battles, Daily Five picks, campaigns with real rewards, builder groups and startup radar.';
const INDEX_ROBOTS = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

type RouteMeta = { title: string; description: string; canonical: string };
const ROUTES: Record<string, RouteMeta> = {
  '/': { title: HOME_TITLE, description: HOME_DESC, canonical: SITE + '/' },
  '/index.html': { title: HOME_TITLE, description: HOME_DESC, canonical: SITE + '/' },
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
  '/campaigns': {
    title: 'LINKUP Campaigns — Builder Quests With Real Rewards',
    description: 'Complete builder quests and campaigns on LINKUP to earn real rewards. Missions for every level, tracked progress and community competition.',
    canonical: SITE + '/campaigns',
  },
  '/faq': {
    title: 'LINKUP FAQ — Co-Founder Matching Questions Answered',
    description: 'How does LINKUP match co-founders? How does verification work? Answers about AI matchmaking, REP scores, messaging and building part-time.',
    canonical: SITE + '/faq',
  },
};

export function SeoRoute() {
  const { pathname } = useLocation();
  useEffect(() => {
    const path = pathname.replace(/\/+$/, '') || '/';
    const meta = ROUTES[path] || null;
    document.title = meta ? meta.title : 'Page not found | LINKUP';
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', meta ? meta.description : 'This LINKUP page does not exist. Find a co-founder, browse builders or explore LINKUP features instead.');
    const canon = document.querySelector('link[rel="canonical"]');
    if (canon) canon.setAttribute('href', meta ? meta.canonical : SITE + '/');
    let robots = document.querySelector('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement('meta');
      robots.setAttribute('name', 'robots');
      document.head.appendChild(robots);
    }
    robots.setAttribute('content', meta ? INDEX_ROBOTS : 'noindex, nofollow');
  }, [pathname]);
  return null;
}
