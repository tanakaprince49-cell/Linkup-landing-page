import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Is it free to join the network?",
    answer: "Yes, joining the network and creating your profile is completely free. You can browse matches and receive connection requests at no cost. Premium features for advanced filtering and priority matching are available for power users."
  },
  {
    question: "How do you verify builders to keep spam out?",
    answer: "We use a combination of automated checks and manual review. Every profile requires a verified professional identity (like LinkedIn or GitHub) and goes through our approval pipeline to ensure only serious builders make it onto the platform."
  },
  {
    question: "Is this only for technical co-founders?",
    answer: "Not at all. While we have a massive pool of talented engineers, the network is built to create balanced teams. We have growth experts, product designers, sales leaders, and domain experts all looking for their complementary half."
  },
  {
    question: "How does the AI matching algorithm work?",
    answer: "Our algorithm analyzes multiple dimensions: complementary skill sets, stage of startup (idea vs. funded), time commitment, and industry focus. It learns from successful pairings to suggest people who not only have the skills you need, but share your working style."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 relative z-20">
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
            Frequently Asked <span className="text-[#FBE618]">Questions</span>
          </h2>
          <p className="text-slate-300 text-lg">
            Everything you need to know about joining the elite builder network.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`glass-panel border rounded-2xl overflow-hidden transition-colors duration-300 ${
                  isOpen ? 'border-[#FBE618]/30 bg-white/5' : 'border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="text-lg font-semibold text-white pr-8">{faq.question}</span>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                    isOpen ? 'bg-[#FBE618] text-black' : 'bg-white/5 text-slate-400'
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
                      <div className="px-6 pb-6 pt-0 text-slate-300 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
