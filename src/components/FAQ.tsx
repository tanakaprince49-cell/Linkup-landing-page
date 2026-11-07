import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqCategories = [
  {
    category: "Founder & Leadership",
    questions: [
      { 
        q: "Who is the person determined to find your co-founder?",
        a: "Tanaka Gaadzikwa is a 15-year-old entrepreneur and tech founder in Harare, Zimbabwe, and the Founder and CEO of LINKUP. Known as the 'startup Cupid' and 'the minister of AI', he built this for the moment you finally meet someone and think, “Oh. Building together could actually work.”"
      },
      { 
        q: "So LINKUP finds your missing piece?",
        a: "Yes. LINKUP and its AI assistant, Linky, help developers, designers, founders, and students meet co-founders, technical partners, and collaborators who complement their skills. You bring the idea; we help you find the person who makes it stronger."
      },
      { 
        q: "Want to say hi to Tanaka or start something together?",
        a: "Go say hi. Reach Tanaka on WhatsApp at 0780011810 (+263780011810), LinkedIn at https://www.linkedin.com/in/tanaka-gaadzikwa-linkup/, Telegram at @tanaka_93, or email tanakaprince49@gmail.com. Great partnerships have started with less courage than that."
      },
      {
        q: "How does your future person discover you?",
        a: "Turn on Public Discovery and your name, bio, skills, location, and collaboration interests can appear in the public builder directory. Hidden, stealth, and deleted profiles stay excluded. Linky and the mobile and web apps give your future person even more ways to find you."
      }
    ]
  },
  {
    category: "Linkup Agent (Linky)",
    questions: [
      { q: "Can Linky really find your kind of builder?", a: "Yes. Tell Linky in plain English who keeps appearing in your “if only I had a partner” daydream—technical co-founders, senior mobile developers, or angel investors. Linky scans verified profiles, GitHub commits, and REP scores, then shows promising candidates with clear citations." },
      { q: "How do you know they want to build with you too?", a: "When someone catches your eye, send a double opt-in intro request. Private messaging opens only after both builders review each other's credentials and agree to connect. No cold DMs. Just two people choosing the same conversation." },
      { q: "Can Linky play matchmaker in your messaging apps?", a: "Linky is already matching builders inside the LINKUP mobile app and web version. Dedicated Telegram and WhatsApp bots are rolling out shortly, so your next favorite person can arrive between everyday chats." }
    ]
  },
  {
    category: "Founder Blogs, Google News SEO & Author Analytics",
    questions: [
      {
        q: "Do blogs published on LINKUP show up on Google Search, Google News, and Google Images?",
        a: "Yes. Every published community blog gets a dedicated server-rendered URL (/app/blogs/your-title) with NewsArticle and BlogPosting JSON-LD structured data, a live Google News XML sitemap, a Media RSS 2.0 feed, and multi-aspect 16:9, 4:3, and 1:1 high-resolution ImageObject cover metadata so your essays and cover pictures are indexed across Google Search, Google News, Google Discover, and Google Images without requiring readers to log in."
      },
      {
        q: "Who can see my blog's views and link clicks?",
        a: "Only you — the blog's author. Your private Author Analytics dashboard tracks total blog views, unique readers, feed card opens, and a per-link click breakdown across both highlighted inline word links and referenced links, while automatically excluding your own self-views and search engine bots."
      },
      {
        q: "How do the 16:9 Cover Cropper and Highlight-to-Insert-Link editor work?",
        a: "When you upload a blog cover photo, you control how it sits inside the 16:9 frame — drag to pan, zoom up to 3x, or switch to Fit Full Picture so nothing important gets cut off, and add a custom Google Images caption. In the body editor, simply highlight any word to summon the floating selection bar and tap Insert Link (or press Cmd/Ctrl+K) alongside headings, quotes, lists, highlights, and code blocks."
      }
    ]
  },
  {
    category: "Version 17 & Daily Momentum",
    questions: [
      { q: "Why does Linky have 11 moods about your momentum?", a: "Because Linky takes your little builder relationship seriously. In LINKUP 17.0, your Android/iOS launcher and browser tab reflect real momentum: bright yellow when plugged in, fiery red after 1 missed day, rainy after 3+ days away, cobwebs at 7+ days, blazing orange when a streak is open at night, crowned on the League podium, sunglasses after logging a build, and confetti for milestones. Pin a favorite or lock classic yellow in Workspace → Settings." },
      { q: "Where are Search and your duo headquarters hiding now?", a: "Search sits at the top of your Homescreen, ready whenever you wonder, “Where is my person?” Look up any founder, engineer, designer, @username, skill, or city. Workspace has its own bottom-bar tab for your Ship Log, weekly goals, and private builder groups." },
      { q: "How does Linky nudge you without becoming clingy?", a: "Linky cares, but knows boundaries. Email is limited to one expressive full-screen message per day at a random local time, with spaced mobile and browser push check-ins instead of robotic fixed-time alerts. Unsubscribe in one click or change notification toggles anytime." }
    ]
  },
  {
    category: "General",
    questions: [
      { q: "Is this where you meet your person?", a: "It could be. LINKUP connects builders, founders, and early adopters through discovery, Idea Deck, AI idea analysis, warm introductions, and real-time collaboration. Come for the startup tools; stay for the person who suddenly makes your roadmap feel possible." },
      { q: "Can you start looking for your person for free?", a: "Yes. Download LINKUP free and use swiping, matching, messaging, Idea Deck posts, and basic search. LINKUP Plus adds unlimited swipes, Who Viewed You, and advanced search when you are ready to stop leaving chemistry to chance." },
      { q: "Can you find your person on iOS?", a: "LINKUP is on Android through Google Play right now. iOS is coming soon, so your future person has one less place to hide." },
      { q: "Who might become your person on LINKUP?", a: "Founders seeking co-founders, early teammates, advisors, and investors. Builders, indie hackers, and anyone with a startup idea—or the skills to make someone else’s idea better. Basically, people who are done pretending solo is the dream." }
    ]
  },
  {
    category: "LINKUP Plus",
    questions: [
      { q: "Want more chances to meet your match?", a: "LINKUP Plus unlocks unlimited swipes, Who Viewed You, AI-ranked advanced search, unlimited AI warm intros, Turbo Connect visibility, a verified badge, and more ways for your future person to notice you." },
      { q: "How much is it to turn up the matchmaking?", a: "Monthly: $19.99/mo\nYearly: $149.99/yr (save $89.89)" },
      { q: "Can you try it before committing?", a: "Yes. All new subscribers get a 7-day free trial. Cancel anytime during the trial and you won't be charged." },
      { q: "Not feeling it? Can you cancel anytime?", a: "Yes. Cancel anytime from your Play Store subscription settings. You'll keep Plus features until the end of your billing period." },
      { q: "What happens when your little trial fling ends?", a: "You'll be charged the subscription price (monthly or yearly depending on your choice) and Plus features remain active. Cancel before the trial ends to avoid being charged." }
    ]
  },
  {
    category: "Campaigns",
    questions: [
      { q: "Want your idea to catch the right person’s eye?", a: "Campaigns put your sponsored card in Idea Deck, Discover, Search, Hub, and Linky Picks. It is how founders and brands get noticed by verified founders and early adopters instead of waiting quietly to be discovered." },
      { q: "How much to put your idea out there?", a: "Monthly: $29.99/mo\nYearly: $249.99/yr (save two months)" },
      { q: "Can you test the spotlight first?", a: "Yes. 7-day free trial on both monthly and yearly plans. Cancel anytime." },
      { q: "How many ideas can you show off at once?", a: "Up to 3 active campaigns per subscription. Pause, resume, or swap creatives whenever inspiration—or a promising new person—strikes." },
      { q: "What do you need to make builders look twice?", a: "Bring an image, a headline, a short description, and a website URL. Campaigns are reviewed within 24 hours. Your future collaborator could be the person who stops scrolling." },
      { q: "Where will your future person see you?", a: "Your campaign card shows up across five sections: Idea Deck, Discover, Search, Hub, and Linky Picks — blending naturally with organic content but labeled as \"Sponsored.\"" },
      { q: "Can you see who is giving your idea attention?", a: "Yes. Your dashboard shows live impressions, clicks, click-through rate (CTR), and a Share of Voice chart showing which sections drive the most traffic." },
      { q: "Want to tweak your pitch after shooting your shot?", a: "Yes. Edit your creative even while it is in review. Changes go live after re-review, because your best line sometimes arrives after you hit submit." }
    ]
  },
  {
    category: "Account & Privacy",
    questions: [
      { q: "Need to say goodbye to your account?", a: "Go to Profile → Settings → Delete Account. This permanently removes your data. No hard feelings." },
      { q: "Does LINKUP protect your personal business?", a: "Yes. Your profile is visible only to logged-in LINKUP users, and we do not sell your data to third parties. Your information is yours, not everybody else's business." },
      { q: "Can you hide while you are not looking for your person?", a: "Yes. Pause your account in settings to hide your profile from discovery and search until you return. Your future person will just have to miss you for a bit." }
    ]
  },
  {
    category: "Payments & Billing",
    questions: [
      { q: "How can you pay when you are ready for more?", a: "Payments run through Google Play—credit/debit cards, Google Pay, carrier billing, and other methods linked to your Play account. Simple, so you can get back to meeting builders." },
      { q: "Changed your mind about a purchase?", a: "Google Play handles refunds. Contact Google Play support within 48 hours of purchase for help." },
      { q: "Do you need a card to test the chemistry?", a: "No. The 7-day trial requires no payment upfront. You'll only be charged after the trial ends if you don't cancel." },
      { q: "If you cancel during the trial, do you pay anything?", a: "No. Cancel anytime during the trial and you pay nothing." }
    ]
  },
  {
    category: "Technical",
    questions: [
      { q: "Do you need internet to meet your person?", a: "Yes. Swiping, messaging, and browsing profiles need an internet connection. Great chemistry still needs a signal." },
      { q: "Someone ruining the vibe?", a: "Tap the profile → menu (three dots) → Report. Our team reviews every report within 24 hours and takes the community vibe seriously." },
      { q: "Worried your match message went unnoticed?", a: "Check Phone Settings → Apps → LINKUP → Notifications, then check your in-app notification settings. Your future person should not have to shout into the void." }
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
            Before You Meet <span className="text-[#FBE618]">Your Person</span>
          </h2>
          <p className="text-slate-300 text-lg">
            The practical stuff, the pricing stuff, and the “so how do I meet someone brilliant?” stuff. All answered before you make your move.
          </p>
        </div>

        <div className="space-y-12">
          {faqCategories.map((group, groupIndex) => (
            <div key={groupIndex} className="space-y-6">
              <h3 className="text-2xl font-bold text-white border-b border-white/10 pb-2">{group.category}</h3>
              <div className="space-y-4">
                {group.questions.map((faq, index) => {
                  const id = `${groupIndex}-${index}`;
                  const isOpen = openId === id;
                  return (
                    <div 
                      key={index} 
                      className={`glass-panel border rounded-2xl overflow-hidden transition-colors duration-300 ${
                        isOpen ? 'border-[#FBE618]/30 bg-white/5' : 'border-white/10 hover:border-white/20'
                      }`}
                    >
                      <button
                        onClick={() => toggleFaq(id)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none no-water-btn"
                      >
                        <span className="text-lg font-semibold text-white pr-8">{faq.q}</span>
                        <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                          isOpen ? 'bg-white/20 text-white border border-white/40' : 'bg-white/5 text-slate-400'
                        }`}>
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
