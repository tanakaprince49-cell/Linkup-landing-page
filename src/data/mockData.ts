import { FeatureItem, Testimonial, PricingPlan, FaqItem } from '../types';

export const FEATURES: FeatureItem[] = [
  {
    id: 'linky',
    iconName: 'Bot',
    title: 'Linky, Your AI Matchmaker',
    badge: 'Your Personal Cupid',
    category: 'ai',
    description: 'Tell Linky who is missing from your startup life. Get an AI-ranked shortlist of builders who fit, plus an intro that saves you from the dreaded “hey, hope you are well.”',
    details: [
      'Ask for your person in plain words',
      'Meet builders who actually fit',
      'Intros that do not feel like cold DMs'
    ],
    highlightColor: 'yellow',
  },
  {
    id: 'match',
    iconName: 'Search',
    title: 'Chemistry, Backed by AI',
    badge: 'No Randoms',
    category: 'ai',
    description: 'LINKUP compares your skills, goals, industry, work style, commitment, and availability to find the person who complements you—not another almost-match you will ghost by Tuesday.',
    details: [
      'Your strengths meet their missing piece',
      'Goals and commitment that actually align',
      'Ranked matches worth getting excited about'
    ],
    highlightColor: 'cyan',
  },
  {
    id: 'league',
    iconName: 'Trophy',
    title: 'Builder League',
    badge: 'Make Them Notice You',
    category: 'reputation',
    description: 'Ship, climb, and let your future co-founder see you doing what you do best. Earn 10 points per build day plus bonuses for helping others \u2014 then take the crown, locally and globally.',
    details: [
      'Week, month & all-time bragging rights',
      '10 pts per build day, #1 takes the crown',
      'Local leagues where your person can spot you'
    ],
    highlightColor: 'yellow',
    href: '/app/builder-league',
  },
  {
    id: 'momentum',
    iconName: 'Flame',
    title: 'Momentum & Ship Log',
    badge: 'Proof You’re a Catch',
    category: 'reputation',
    description: 'Log what you shipped, grow your streak, and show your future partner you do more than say “we should build something.” Receipts included, naturally.',
    details: [
      'Daily proof you are partnership material',
      'A streak your future co-founder can admire',
      'Shareable cards for humble bragging'
    ],
    highlightColor: 'violet',
    href: '/app/momentum',
  },
  {
    id: 'swipe',
    iconName: 'Zap',
    title: 'Swipe. Match. Become a Duo.',
    badge: 'Your Next Favorite Person',
    category: 'discovery',
    description: 'Swipe through builders who might make your startup brain do a little victory dance. Like, skip, and get the good news when the interest is mutual.',
    details: [
      'A card stack full of possible partners',
      'Instant “they like you too” alerts',
      'Proof-of-work profiles, not empty charm'
    ],
    highlightColor: 'cyan',
  },
  {
    id: 'games',
    iconName: 'Gamepad2',
    title: 'Pitch Battles & Founder Games',
    badge: 'Play. Pitch. Click.',
    category: 'discovery',
    description: 'Show off your founder brain in Pitch Perfect battles, Founder Flip, match-the-pairs, achievements, and saved ideas. Impress your future partner before you even meet.',
    details: [
      '1v1 pitches with main-character energy',
      'Founder Flip & pair matching',
      'Achievements worth showing your future duo'
    ],
    highlightColor: 'yellow',
  },
  {
    id: 'groups',
    iconName: 'Users',
    title: 'Builder Groups',
    badge: 'Your People Are Here',
    category: 'communication',
    description: 'Join topic squads where the group chat gets your weird ideas. Share badges, browse profiles, and find the crew that makes solo building feel terribly overrated.',
    details: [
      'Squads built around your obsessions',
      'Group chats with future collaborators',
      'Shared badges, profiles & photos'
    ],
    highlightColor: 'violet',
  },
  {
    id: 'daily',
    iconName: 'CalendarCheck',
    title: 'Daily Five',
    badge: 'Five Fresh Chances',
    category: 'discovery',
    description: 'Five fresh builders, opportunities, and ideas every morning, matched to your goals and availability. One might make you delete your “happily solo” status. Retry anytime.',
    details: [
      '5 picks chosen around your goals',
      'People and ideas worth getting attached to',
      'Refine, retry, find your spark'
    ],
    highlightColor: 'cyan',
  },
  {
    id: 'campaigns',
    iconName: 'Target',
    title: 'Campaigns & Rewards',
    badge: 'Rewards Look Good on You',
    category: 'discovery',
    description: 'Complete builder quests and campaigns for real rewards. Meet people, make progress, and give your future co-founder something to be impressed about.',
    details: [
      'Quests with actual rewards',
      'Missions for your main-character arc',
      'Progress worth bragging to your partner about'
    ],
    highlightColor: 'yellow',
    href: '/campaigns',
  },
  {
    id: 'idea',
    iconName: 'TrendingUp',
    title: 'Idea Deck AI Analyzer',
    badge: 'Make Your Idea Irresistible',
    category: 'ai',
    description: 'Bring your brilliant, slightly unhinged startup concept. Get a 1-100 AI score, verdict, target customer, market potential, competitor map, monetization strategy, risks, and next steps to make it partner-worthy.',
    details: [
      'A 1-100 score and honest AI verdict',
      'Market potential worth scheming over',
      'Monetization, risks & your next power move'
    ],
    highlightColor: 'cyan',
  },
  {
    id: 'views',
    iconName: 'Eye',
    title: 'See Who’s Checking You Out',
    badge: 'Yes, They Noticed',
    category: 'reputation',
    description: 'See who viewed your profile and clicked through. If your future co-founder keeps lurking, consider this your permission to make the first move.',
    details: [
      'Every builder who checked you out',
      'Clicks that scream “I am interested”',
      'Perfect timing for your opening move'
    ],
    highlightColor: 'violet',
  },
  {
    id: 'radar',
    iconName: 'Newspaper',
    title: 'Founder Blogs & Google News SEO',
    badge: 'Google Indexed',
    category: 'discovery',
    description: 'Publish original startup essays, engineering deep-dives, and launch playbooks indexed automatically across Google Search, Google News, and Google Images \u2014 with 16:9 cover cropping, highlight-word-to-link rich formatting, custom categories, and Verified Author badges.',
    details: [
      'Google Search, Google News & Image Sitemap SEO',
      'Interactive 16:9 cover cropper & custom alt captions',
      'Highlight any word to insert links + Verified Author badge'
    ],
    highlightColor: 'yellow',
    href: '/app/blogs',
  },
  {
    id: 'blog-analytics',
    iconName: 'BarChart3',
    title: 'Private Author Blog Analytics',
    badge: 'Author Only',
    category: 'reputation',
    description: 'Track how every essay performs without exposing vanity counters to the public. Only the blog author sees total views, unique readers, card opens, and a per-link click breakdown across inline word links and referenced URLs.',
    details: [
      'Strictly private to the blog author',
      'Views, unique readers & card-open tracking',
      'Per-link click breakdown (self-views & bots excluded)'
    ],
    highlightColor: 'cyan',
    href: '/app/news-feed',
  },
  {
    id: 'venture-engine',
    iconName: 'Cpu',
    title: 'Automated Venture Factory & $50K Bridge',
    badge: 'From Duo to Startup',
    category: 'ai',
    description: 'You found your person. Now become that duo. Get codebase-aware diagnostics, GitHub push league scoring, Day-1 Venture Rooms, and one-click SHA-256 timestamped $50,000 SAFE term-sheet dispatch with partner VCs.',
    details: [
      'Linky diagnostics for your combined stack',
      'GitHub & Cursor push League scoring',
      'Venture Rooms & a $50K VC Deal Bridge'
    ],
    highlightColor: 'violet',
    href: '/app/lvlup',
  },
  {
    id: 'workspace',
    iconName: 'LayoutGrid',
    title: 'Dedicated Builder Workspace',
    badge: 'Your Duo Headquarters',
    category: 'reputation',
    description: 'Your one-tap command center for Ship Logs, weekly targets, protected rest days, private builder rooms, and Linky settings. Everything you need to keep becoming a duo worth envying.',
    details: [
      'Your bottom-bar builder headquarters',
      'A shipping rhythm you can share',
      'Private rooms for your future favorite people'
    ],
    highlightColor: 'cyan',
    href: '/app/builder',
  },
  {
    id: 'homesearch',
    iconName: 'Search',
    title: 'Instant Homescreen Search',
    badge: 'Your Person, One Search Away',
    category: 'discovery',
    description: 'Search verified builders, founders, engineers, designers, skills, roles, and cities right from your Homescreen. Your missing piece has nowhere left to hide.',
    details: [
      'Search pinned where your curiosity starts',
      'Find a name, @username, skill, or city',
      'Instant lookups, zero awkward wandering'
    ],
    highlightColor: 'yellow',
    href: '/app/feed',
  },
  {
    id: 'moods',
    iconName: 'BellRing',
    title: 'Expressive Linky Icons & Check-Ins',
    badge: 'Linky Misses You Already',
    category: 'ai',
    description: 'Linky has 11 moods and is not afraid to use them—from fiery red after one missed day to crowned on the League podium—plus randomly timed push and email check-ins when your streak needs a little love.',
    details: [
      '11 expressive Android, iOS & web moods',
      'Check-ins when your momentum goes quiet',
      'Max 1 dramatic Linky email per day'
    ],
    highlightColor: 'violet',
    href: '/app/builder?section=Settings',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Alex Rivera & Maya Lin',
    role: 'Co-Founders of Synthetix AI',
    company: 'Y Combinator W25 Batch',
    avatar: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=250',
    content: 'We met on LINKUP within 48 hours. Alex had the AI infrastructure background and I had the healthcare sales pipeline. We built our MVP in 3 weeks and got accepted into YC!',
    category: 'AI',
    metric: 'Matched in 48h • Raised $1.5M Seed',
  },
  {
    id: 't2',
    name: 'Vikram Patel',
    role: 'CTO @ Payload Data',
    company: 'Ex-Uber Staff Engineer',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=250',
    content: 'Finding a business co-founder through standard networking was exhausting and full of non-builders. LINKUP filtered out the noise completely. I found a CEO who matched my speed and vision.',
    category: 'Tech',
    metric: 'Scaled to $2.4M ARR in Year 1',
  },
  {
    id: 't3',
    name: 'Jessica Thorne',
    role: 'CEO @ Horizon Space',
    company: 'Forbes 30 Under 30',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=250',
    content: 'The AI compatibility analyzer is surprisingly accurate. It flagged our potential areas of disagreement on equity split before our first coffee chat, allowing us to align expectations early.',
    category: 'Growth',
    metric: 'Acquired 120k Users',
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter Builder',
    priceMonthly: 0,
    priceAnnual: 0,
    description: 'Perfect for exploring potential partners and creating your verified builder profile.',
    features: [
      '10 AI Matches per month',
      'Basic profile search & filters',
      'Verified REP Score generation',
      'Community Discord & event invites',
      'Standard messaging access'
    ],
    ctaText: 'Start Building Free',
  },
  {
    id: 'pro',
    name: 'Pro Founder',
    priceMonthly: 15,
    priceAnnual: 12,
    popular: true,
    badge: 'MOST POPULAR',
    description: 'For active founders looking to acquire a co-founder and launch within 30 days.',
    features: [
      'Unlimited AI Matches & Swipes',
      'Natural Language AI Database Search',
      'Priority Algorithmic Visibility (3x views)',
      'Startup Idea AI Analyzer & TAM Report',
      'Direct Unlimited DM & Video Intros',
      'Standard Co-Founder Legal Templates'
    ],
    ctaText: 'Get Pro Access',
  },
  {
    id: 'studio',
    name: 'Venture & Studio',
    priceMonthly: 49,
    priceAnnual: 39,
    badge: 'FOR ACCELERATORS',
    description: 'For venture studios, investors, and serial entrepreneurs building multiple teams.',
    features: [
      'Dedicated Talent Scout & Matching Assistant',
      'Custom Cohort & Portfolio Sourcing',
      'Deep Background Verification Reports',
      'Co-Founder Vesting & Equity Escrow setup',
      'Direct Warm Intro Concierge',
      'Custom API & Slack Community Integration'
    ],
    ctaText: 'Contact Studio Team',
  }
];

export const FAQS: FaqItem[] = [
  {
    question: 'How does LINKUP match co-founders?',
    answer: 'LINKUP uses multi-modal AI models to analyze technical capabilities, past project commit signals, equity expectations, domain expertise, and working style preferences to compute an alignment score.'
  },
  {
    question: 'Is LINKUP only for technical co-founders?',
    answer: 'No! LINKUP connects technical architects (CTOs, AI Engineers, Full-Stack Developers) with business, growth, product, and domain expert co-founders (CEOs, GTM leads, Designers).'
  },
  {
    question: 'How does the REP verification system work?',
    answer: 'We verify GitHub commit activity, past employment history, LinkedIn credentials, and peer endorsements to assign a proof-of-work REP score, ensuring zero spam or fake profiles.'
  },
  {
    question: 'What happens after I match with a potential co-founder?',
    answer: 'You unlock direct end-to-end encrypted messaging, built-in AI icebreakers, video call tools, and customizable co-founder agreement templates (equity vesting, role division).'
  },
  {
    question: 'Can I use LINKUP if I am building part-time?',
    answer: 'Yes! You can filter matches by commitment level — whether you are looking for full-time immediate co-founders or part-time night/weekend collaborators.'
  }
];

export const ACCELERATORS = [
  { name: 'Y Combinator', label: 'YC Alumni', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Y_Combinator_logo.svg' },
  { name: 'Techstars', label: 'Techstars Network', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Techstars_logo.png' },
  { name: '500 Global', label: '500 Global Alumni', logoUrl: '' },
  { name: 'Stanford', label: 'Stanford CS', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Stanford_Cardinal_logo.svg' },
  { name: 'MIT', label: 'MIT AI Lab', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/MIT_logo_2003-2023.svg' },
  { name: 'OpenAI', label: 'OpenAI Builders', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/66/OpenAI_logo_2025_%28symbol%29.svg' },
  { name: 'Google', label: 'Google Alumni', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
  { name: 'Sequoia', label: 'Arc Founders', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Sequoia_Capital_logo.svg' },
  { name: 'Meta', label: 'Meta Alumni', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg' },
];
