const fs = require('fs');

const content = `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqCategories = [
  {
    category: "General",
    questions: [
      { q: "What is LINKUP?", a: "LINKUP is a founder networking app that connects builders, founders, and early adopters. You can swipe to discover people, share ideas on Idea Deck, analyze startup ideas with AI, get warm introductions, and collaborate in real-time." },
      { q: "Is LINKUP free to use?", a: "Yes. LINKUP is free to download with core features included — swiping, matching, messaging, Idea Deck posts, and basic search. LINKUP Plus unlocks premium features like unlimited swipes, Who Viewed You, and advanced search." },
      { q: "Is LINKUP available on iOS?", a: "LINKUP is currently available on Android via the Google Play Store. iOS is coming soon." },
      { q: "Who is LINKUP for?", a: "Founders looking for co-founders, early team members, advisors, and investors. Also builders, indie hackers, and anyone working on or exploring startup ideas." }
    ]
  },
  {
    category: "LINKUP Plus",
    questions: [
      { q: "What is LINKUP Plus?", a: "LINKUP Plus is the premium subscription that unlocks unlimited swipes, Who Viewed You, advanced search with AI ranking, unlimited AI warm intros, Turbo Connect visibility boost, verified badge, and more." },
      { q: "How much does LINKUP Plus cost?", a: "Monthly: $19.99/mo\\nYearly: $149.99/yr (save $89.89)" },
      { q: "Is there a free trial?", a: "Yes. All new subscribers get a 7-day free trial. Cancel anytime during the trial and you won't be charged." },
      { q: "Can I cancel my subscription anytime?", a: "Yes. Cancel anytime from your Play Store subscription settings. You'll keep Plus features until the end of your billing period." },
      { q: "What happens when my trial ends?", a: "You'll be charged the subscription price (monthly or yearly depending on your choice) and Plus features remain active. Cancel before the trial ends to avoid being charged." }
    ]
  },
  {
    category: "Campaigns",
    questions: [
      { q: "What are Campaigns?", a: "Campaigns let you run sponsored placements across LINKUP — your card appears in Idea Deck, Discover, Search, Hub, and Linky Picks. It's how founders and brands get visibility among verified founders and early adopters." },
      { q: "How much does Campaigns cost?", a: "Monthly: $29.99/mo\\nYearly: $249.99/yr (save two months)" },
      { q: "Is there a free trial for Campaigns?", a: "Yes. 7-day free trial on both monthly and yearly plans. Cancel anytime." },
      { q: "How many campaigns can I run at once?", a: "Up to 3 active campaigns per subscription. Pause, resume, or swap creatives anytime." },
      { q: "What do I need to create a campaign?", a: "An image (your logo or creative), a headline, a short description, and a website URL. Campaigns are reviewed within 24 hours." },
      { q: "Where do my sponsored cards appear?", a: "Your campaign card shows up across five sections: Idea Deck, Discover, Search, Hub, and Linky Picks — blending naturally with organic content but labeled as \\"Sponsored.\\"" },
      { q: "Can I track how my campaign performs?", a: "Yes. Your dashboard shows live impressions, clicks, click-through rate (CTR), and a Share of Voice chart showing which sections drive the most traffic." },
      { q: "Can I edit my campaign after submitting?", a: "Yes. You can edit creatives even while your campaign is in review. Changes go live after re-review." }
    ]
  },
  {
    category: "Account & Privacy",
    questions: [
      { q: "How do I delete my account?", a: "Go to Profile → Settings → Delete Account. This permanently removes your data." },
      { q: "Is my data private?", a: "Yes. Your profile is only visible to logged-in LINKUP users. We don't sell your data to third parties." },
      { q: "Can I hide my profile?", a: "You can pause your account from settings, which hides your profile from discovery and search until you reactivate." }
    ]
  },
  {
    category: "Payments & Billing",
    questions: [
      { q: "What payment methods are accepted?", a: "All payments are processed through the Google Play Store — credit/debit cards, Google Pay, carrier billing, and other methods linked to your Play account." },
      { q: "Can I get a refund?", a: "Refunds are handled by Google Play. Contact Google Play support within 48 hours of purchase for a refund." },
      { q: "Do I need a credit card for the free trial?", a: "No. The 7-day trial requires no payment upfront. You'll only be charged after the trial ends if you don't cancel." },
      { q: "Will I be charged if I cancel during the trial?", a: "No. Cancel anytime during the trial and you pay nothing." }
    ]
  },
  {
    category: "Technical",
    questions: [
      { q: "Do I need an internet connection?", a: "Yes. LINKUP requires an internet connection for swiping, messaging, and browsing profiles." },
      { q: "How do I report a user?", a: "Tap the profile → tap the menu (three dots) → Report. Our team reviews every report within 24 hours." },
      { q: "I'm not getting notifications.", a: "Check your phone settings → Apps → LINKUP → Notifications and make sure they're enabled. Also check in-app notification settings." }
    ]
  }
];

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-24 relative z-20">
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
            LINKUP <span className="text-[#FBE618]">FAQ</span>
          </h2>
          <p className="text-slate-300 text-lg">
            Everything you need to know about joining the elite builder network.
          </p>
        </div>

        <div className="space-y-12">
          {faqCategories.map((group, groupIndex) => (
            <div key={groupIndex} className="space-y-6">
              <h3 className="text-2xl font-bold text-white border-b border-white/10 pb-2">{group.category}</h3>
              <div className="space-y-4">
                {group.questions.map((faq, index) => {
                  const id = \`\${groupIndex}-\${index}\`;
                  const isOpen = openId === id;
                  return (
                    <div 
                      key={index} 
                      className={\`glass-panel border rounded-2xl overflow-hidden transition-colors duration-300 \${
                        isOpen ? 'border-[#FBE618]/30 bg-white/5' : 'border-white/10 hover:border-white/20'
                      }\`}
                    >
                      <button
                        onClick={() => toggleFaq(id)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                      >
                        <span className="text-lg font-semibold text-white pr-8">{faq.q}</span>
                        <div className={\`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors \${
                          isOpen ? 'bg-[#FBE618] text-black' : 'bg-white/5 text-slate-400'
                        }\`}>
                          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                        </div>
                      </button>
                      
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          >
                            <div className="px-6 pb-6 pt-0 text-slate-300 leading-relaxed whitespace-pre-wrap">
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
`;

fs.writeFileSync('/app/applet/src/components/FAQ.tsx', content);
