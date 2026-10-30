// Owner-supplied images, kept in the supplied order. Serve the original WebP
// bytes locally so the showcase does not depend on the external image host.
export const SHOWCASE_SCREENSHOTS = [
  { src: '/images/showcase/linky-ai-chat.webp', alt: 'LINKUP Linky AI chat — find and connect with builders through conversation', caption: 'Linky AI chat inside LINKUP — describe your ideal co-founder in plain English and get cited matches.' },
  { src: '/images/showcase/real-time-messaging.webp', alt: 'LINKUP real-time messaging — founder conversations and team threads', caption: 'Real-time messaging in LINKUP — founder conversations and team threads with every match.' },
  { src: '/images/showcase/startup-partners.webp', alt: 'LINKUP active opportunities — connect with startup partners', caption: 'Active opportunities in LINKUP — startups and builders looking for partners right now.' },
  { src: '/images/showcase/missions-and-rewards.webp', alt: 'LINKUP Play — complete missions and earn rewards', caption: 'LINKUP Play — complete builder missions and earn real rewards.' },
  { src: '/images/showcase/recommended-matches.webp', alt: 'LINKUP recommended matches — find your next professional collaborator', caption: 'Recommended matches in LINKUP — AI-ranked builders matched to your goals.' },
  { src: '/images/showcase/trending-stories.webp', alt: 'LINKUP news — discover trending startup and technology stories', caption: 'LINKUP news radar — trending startup and technology stories, updated daily.' },
] as const;
