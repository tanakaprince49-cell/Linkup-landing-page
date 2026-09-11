import { BuilderProfile, FeatureItem, Testimonial, PricingPlan, FaqItem } from '../types';

export const MOCK_BUILDERS: BuilderProfile[] = [
  {
    id: 'b1',
    name: 'Sarah Chen',
    role: 'AI / ML Engineer',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250',
    matchScore: 98,
    location: 'San Francisco, CA',
    experience: 'Ex-Google Brain, Stanford MS CS',
    tags: ['PyTorch', 'LLMs', 'Distributed Systems', 'YC Alumni'],
    bio: 'Building autonomous AI agents. Looking for a high-velocity business/growth co-founder to lead GTM and fundraising.',
    lookingFor: 'CEO / Business Co-Founder with SaaS experience',
    verified: true,
    repScore: 940,
  },
  {
    id: 'b2',
    name: 'Marcus Vance',
    role: 'Growth & Product CEO',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=250',
    matchScore: 95,
    location: 'New York, NY',
    experience: 'Scaled B2B SaaS from 0 to $4M ARR',
    tags: ['B2B Sales', 'Fundraising', 'Product Strategy', 'Ex-Stripe'],
    bio: 'Experienced serial founder who sold first venture. Looking for a technical CTO to build next-gen Fintech infra.',
    lookingFor: 'Full-Stack / Systems CTO with Rust/Go expertise',
    verified: true,
    repScore: 915,
  },
  {
    id: 'b3',
    name: 'Elena Rostova',
    role: 'Principal Designer & Frontend Architect',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=250',
    matchScore: 93,
    location: 'Austin, TX',
    experience: 'Former Design Lead at Figma',
    tags: ['UI/UX', 'Design Systems', 'React', 'Design Engineering'],
    bio: 'Obsessed with micro-interactions and pixel-perfect design systems. Seeking a technical backend co-founder for a spatial workspace tool.',
    lookingFor: 'Backend / Infrastructure Specialist',
    verified: true,
    repScore: 890,
  },
  {
    id: 'b4',
    name: 'David Kim',
    role: 'Full-Stack & Distributed Systems',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=250',
    matchScore: 91,
    location: 'London / Remote',
    experience: 'Ex-Meta Infrastructure, 8 Open Source Repos',
    tags: ['Rust', 'PostgreSQL', 'WebSockets', 'Kubernetes'],
    bio: 'Building high-throughput real-time collaboration engines. Need a domain expert in healthcare / compliance.',
    lookingFor: 'Domain Lead / Enterprise Sales Co-Founder',
    verified: true,
    repScore: 875,
  }
];

export const FEATURES: FeatureItem[] = [
  {
    id: 'f1',
    iconName: 'Sparkles',
    title: 'AI Matchmaking',
    badge: 'Core AI',
    category: 'ai',
    description: 'Smart compatibility scoring powered by AI. LINKUP analyzes your skills, goals, industry, personality, and work style to rank and recommend the most compatible builders for you.',
    details: [
      'Deep skills & work style alignment',
      'Personality & goal compatibility scoring',
      'Automated co-founder rank recommendations'
    ],
    highlightColor: 'yellow',
  },
  {
    id: 'f2',
    iconName: 'Flame',
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
    id: 'f3',
    iconName: 'Search',
    title: 'Advanced People Search',
    badge: 'Smart Search',
    category: 'discovery',
    description: 'Search for founders, developers, designers, investors, and operators using filters like skills, industry, role, location, experience, funding stage, and availability with natural language queries like "fintech founder with SaaS experience".',
    details: [
      'Natural language semantic queries',
      'Multi-attribute filtering (skills, funding, role)',
      'Custom talent alerts & saved searches'
    ],
    highlightColor: 'violet',
  },
  {
    id: 'f4',
    iconName: 'LayoutDashboard',
    title: 'Discovery Dashboard',
    badge: 'Personalized Feed',
    category: 'discovery',
    description: 'Personalized home feed showing recommended matches, trending builders, active opportunities, and custom community insights.',
    details: [
      'Real-time match recommendations',
      'Trending ecosystem activity & insights',
      'Curated opportunities feed'
    ],
    highlightColor: 'cyan',
  },
  {
    id: 'f5',
    iconName: 'MessageSquareText',
    title: 'Real-Time Messaging',
    badge: 'Secured Chat',
    category: 'communication',
    description: 'Secured chat with matches featuring reply-to-message, AI warm intro generation, conversation pin/archive/mute, meeting scheduler, contact card sharing, and chat export.',
    details: [
      'AI warm intro & icebreaker generation',
      'Meeting scheduler & contact card exchange',
      'Conversation pin, archive, mute & export'
    ],
    highlightColor: 'yellow',
  },
  {
    id: 'f6',
    iconName: 'UserCheck',
    title: 'Business-Focused Profiles',
    badge: 'Builder ID',
    category: 'communication',
    description: 'Built for builders (not social media). Displays startup status, skills & tech stack, funding stage, availability, networking intent, REP metrics, and AI match insights.',
    details: [
      'Startup status & funding stage display',
      'Verified tech stack & networking intent',
      'AI compatibility overview & REP score'
    ],
    highlightColor: 'violet',
  },
  {
    id: 'f7',
    iconName: 'TrendingUp',
    title: 'AI Startup Analyzer',
    badge: 'AI Utility',
    category: 'ai',
    description: 'Enter a startup concept and get AI-generated score (1-100), verdict, target customer, market potential, competitor mapping, monetization strategy, key risks, and next validation steps.',
    details: [
      '1-100 concept score & AI verdict',
      'Market potential & competitor mapping',
      'Monetization strategy & key risk analysis'
    ],
    highlightColor: 'yellow',
  },
  {
    id: 'f8',
    iconName: 'Award',
    title: 'Reputation System (REP Score)',
    badge: 'Trust Layer',
    category: 'reputation',
    description: 'Proof-of-work REP score calculated from verified GitHub commit velocity, completed projects, activity signals, background credentials, and peer endorsements.',
    details: [
      'Verified GitHub commit velocity tracker',
      'Background credentials & peer endorsements',
      'Proof-of-work project history rating'
    ],
    highlightColor: 'violet',
  },
  {
    id: 'f9',
    iconName: 'Briefcase',
    title: 'Active Opportunities',
    badge: 'Co-Founder Board',
    category: 'discovery',
    description: 'Browse builders & startups actively seeking cofounders, developers, designers, marketers, investors, or mentors.',
    details: [
      'Role-based co-founder recruitment',
      'Filter by equity split & stage',
      'Direct fast-track application flow'
    ],
    highlightColor: 'cyan',
  },
  {
    id: 'f10',
    iconName: 'Users',
    title: 'Trending Builders',
    badge: 'Leaderboard',
    category: 'reputation',
    description: 'Discover top-ranked builders based on earned REP score, activity signals, technical skills, and community engagement.',
    details: [
      'Leaderboard ranked by earned REP score',
      'Live build activity & engagement signals',
      'Featured talent highlights in tech & growth'
    ],
    highlightColor: 'yellow',
  }
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
