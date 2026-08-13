import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Alex M.",
    role: "Startup CEO",
    text: "Found my technical co-founder in exactly 4 days. The signal-to-noise ratio here is absolutely unmatched compared to LinkedIn or other startup platforms.",
    date: "August 10, 2026"
  },
  {
    name: "David K.",
    role: "Product Lead",
    text: "Exactly what the startup ecosystem needed. No recruiters, no spam, just serious builders ready to execute. The UI is also incredibly polished.",
    date: "July 22, 2026"
  },
  {
    name: "Elena R.",
    role: "Full-Stack Engineer",
    text: "The AI matching is scary accurate. It paired me with a business co-founder who perfectly complemented my technical stack and vision.",
    date: "August 02, 2026"
  }
];

export const Reviews: React.FC = () => {
  return (
    <section className="py-24 relative z-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight mb-8"
          >
            Loved by <span className="text-[#FBE618]">Builders</span>
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center justify-center gap-6 glass-panel px-8 py-4 rounded-3xl"
          >
            <div className="text-5xl font-bold text-white tracking-tighter">4.9</div>
            <div className="flex flex-col items-start border-l border-white/10 pl-6">
              <div className="flex text-[#FBE618] gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <div className="flex items-center gap-2 text-slate-300 text-sm font-medium">
                <svg viewBox="0 0 512 512" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#4CAF50" d="M19.1 11L332.9 324.9c4.2-3.1 7.1-8 7.1-13.6V200.7c0-5.6-2.9-10.5-7.1-13.6L19.1 11z"/>
                  <path fill="#FFC107" d="M340 311.3l98.5 98.5c10.3 10.3 27 10.3 37.3 0l11.7-11.7c10.3-10.3 10.3-27 0-37.3L340 311.3z"/>
                  <path fill="#F44336" d="M340 200.7L487.5 53.2c10.3-10.3 10.3-27 0-37.3L475.8 4.2c-10.3-10.3-27-10.3-37.3 0L340 200.7z"/>
                  <path fill="#2196F3" d="M332.9 187.1L19.1 501c-6.8 6.8-19.1 2-19.1-7.6V18.6C0 9 12.3 4.2 19.1 11l313.8 313.9c-4.2-3.1-7.1-8-7.1-13.6v-110.6c0-5.6 2.9-10.5 7.1-13.6z"/>
                </svg>
                Average rating on Google Play
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-panel p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors flex flex-col"
            >
              <div className="flex text-[#FBE618] gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              
              <p className="text-slate-300 leading-relaxed mb-8 flex-1 text-[15px]">
                "{review.text}"
              </p>
              
              <div className="flex items-center justify-between border-t border-white/5 pt-6 mt-auto">
                <div>
                  <h4 className="text-white font-semibold text-sm">{review.name}</h4>
                  <p className="text-slate-400 text-xs mt-0.5">{review.role}</p>
                </div>
                <div className="text-slate-500 text-xs">
                  {review.date}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
