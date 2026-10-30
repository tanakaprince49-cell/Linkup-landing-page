import { FeatureItem, Testimonial, PricingPlan, FaqItem } from '../types';

export const FEATURES: FeatureItem[] = [
  {
    id: 'linky',
    iconName: 'Sparkles',
    title: 'Linky AI Companion',
    badge: 'Flagship AI',
    category: 'ai',
    description: 'Your AI co-founder scout. Tell Linky who you need in plain words and get an AI-ranked shortlist of compatible builders \u2014 with drafted intros to break the ice.',
    details: [
      'Natural-language match requests',
      'AI-ranked builder shortlists',
      'Drafted intros & icebreakers'
    ],
    highlightColor: 'yellow',
  },
  {
    id: 'match',
    iconName: 'Search',
    title: 'AI Matchmaking',
    badge: 'Core AI',
    category: 'ai',
    description: 'Smart compatibility scoring powered by AI. LINKUP analyzes your skills, goals, industries, work style, commitment and availability to rank the most compatible builders for you.',
    details: [
      'Deep skills & work style alignment',
      'Goals, industry & commitment scoring',
      'Automated co-founder rank recommendations'
    ],
    highlightColor: 'cyan',
  },
  {
    id: 'league',
    iconName: 'Trophy',
    title: 'Builder League',
    badge: 'Weekly Crown',
    category: 'reputation',
    description: 'A weekly leaderboard for builders who ship. Earn 10 points per build day plus bonuses for helpful contributions \u2014 number one takes the crown, locally and globally.',
    details: [
      'Week, month & all-time boards',
      '10 pts per build day, #1 crowned',
      'Local leagues + public results page'
    ],
    highlightColor: 'yellow',
    href: '/app/builder-league',
  },
  {
    id: 'momentum',
    iconName: 'Flame',
    title: 'Momentum & Ship Log',
    badge: 'Build Streaks',
    category: 'reputation',
    description: 'Log what you shipped every day, grow your streak, and prove it with a contribution calendar plus shareable momentum cards.',
    details: [
      'Daily ship log with receipts',
      'Contribution calendar & streaks',
      'Shareable momentum cards'
    ],
    highlightColor: 'violet',
    href: '/app/momentum',
  },
  {
    id: 'swipe',
    iconName: 'Zap',
    title: 'Swipe Discovery',
    badge: 'Matching Engine',
    category: 'discovery',
    description: 'A card stack for professional matching. Swipe through builder profiles, like or skip, and get notified when it\'s a mutual match.',
    details: [
      'Interactive builder card stack',
      'Instant mutual match alerts',
      'High-signal proof-of-work profiles'
    ],
    highlightColor: 'cyan',
  },
  {
    id: 'games',
    iconName: 'Gamepad2',
    title: 'Pitch Battles & Founder Games',
    badge: 'Play to Learn',
    category: 'discovery',
    description: 'Sharpen founder skills by playing: head-to-head Pitch Perfect battles, Founder Flip, match-the-pairs, achievements and a saved-ideas box.',
    details: [
      '1v1 Pitch Perfect challenges',
      'Founder Flip & pair matching',
      'Achievements & saved ideas'
    ],
    highlightColor: 'yellow',
  },
  {
    id: 'groups',
    iconName: 'Users',
    title: 'Builder Groups',
    badge: 'Squad Up',
    category: 'communication',
    description: 'Join topic squads of builders. Group chat with shared badges, member profiles and photos \u2014 your crew before you even incorporate.',
    details: [
      'Topic-based squads',
      'Group chat + member profiles',
      'Shared badges & photos'
    ],
    highlightColor: 'violet',
  },
  {
    id: 'daily',
    iconName: 'CalendarCheck',
    title: 'Daily Five',
    badge: 'Fresh Every Morning',
    category: 'discovery',
    description: 'Five fresh picks every morning \u2014 builders, opportunities and ideas matched to your goals, needs and availability. Retry today\u2019s picks anytime.',
    details: [
      '5 picks matched to your goals',
      'Builders, opportunities & ideas',
      'Refine needs, retry anytime'
    ],
    highlightColor: 'cyan',
  },
  {
    id: 'campaigns',
    iconName: 'Target',
    title: 'Campaigns & Rewards',
    badge: 'Earn Real Rewards',
    category: 'discovery',
    description: 'Complete builder quests and campaigns to earn real rewards. Missions turn networking into a game you actually want to play.',
    details: [
      'Quests with real rewards',
      'Missions for every level',
      'Track progress & rewards'
    ],
    highlightColor: 'yellow',
    href: '/campaigns',
  },
  {
    id: 'idea',
    iconName: 'TrendingUp',
    title: 'Idea Deck AI Analyzer',
    badge: 'AI Utility',
    category: 'ai',
    description: 'Enter a startup concept and get an AI-generated score (1-100), verdict, target customer, market potential, competitor mapping, monetization strategy, key risks, and next validation steps.',
    details: [
      '1-100 concept score & AI verdict',
      'Market potential & competitor mapping',
      'Monetization strategy & key risk analysis'
    ],
    highlightColor: 'cyan',
  },
  {
    id: 'views',
    iconName: 'Eye',
    title: 'Profile Views & Clicks',
    badge: 'Know Your Fans',
    category: 'reputation',
    description: 'See exactly who viewed your profile and who clicked through. Know who is checking you out before you reach out.',
    details: [
      'Everyone who viewed you',
      'Profile click tracking',
      'Reach out at the right time'
    ],
    highlightColor: 'violet',
  },
  {
    id: 'radar',
    iconName: 'Newspaper',
    title: 'Startups & News Radar',
    badge: 'Stay Sharp',
    category: 'discovery',
    description: 'Browse the startup directory and a curated startup news feed \u2014 spot trends, study competitors and find your edge.',
    details: [
      'Searchable startup directory',
      'Curated startup news feed',
      'Trend & competitor signals'
    ],
    highlightColor: 'yellow',
    href: '/app/startups',
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
