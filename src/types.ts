export interface FeatureItem {
  id: string;
  iconName: string;
  title: string;
  badge?: string;
  href?: string;
  category: 'ai' | 'discovery' | 'communication' | 'reputation';
  description: string;
  details: string[];
  highlightColor: 'yellow' | 'cyan' | 'violet';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  category: 'Tech' | 'AI' | 'Growth' | 'Design';
  metric: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  priceMonthly: number;
  priceAnnual: number;
  description: string;
  popular?: boolean;
  badge?: string;
  features: string[];
  ctaText: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
