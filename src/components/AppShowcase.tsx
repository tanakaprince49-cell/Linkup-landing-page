import React from 'react';
import { motion } from 'framer-motion';

import { SHOWCASE_SCREENSHOTS } from '../data/showcaseScreenshots';

export const AppShowcase: React.FC = () => {
  return (
    <section id="app-showcase" aria-label="Inside the LINKUP app" className="py-24 relative z-20 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FBE618]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight mb-4"
          >
            Inside The <span className="text-[#FBE618]">Network</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-300 text-lg max-w-2xl mx-auto"
          >
            Take a look at the elite experience waiting for you. Designed for speed, precision, and high-value connections.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {SHOWCASE_SCREENSHOTS.map((screenshot, index) => (
            <motion.div
              key={screenshot.src}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-2 sm:p-3 rounded-[2rem] sm:rounded-[2.5rem] border border-white/10 glass-panel bg-white/5 relative group"
            >
              <div className="relative rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl h-full w-full aspect-[24/43] bg-[#05070D]">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <img 
                  src={screenshot.src}
                  alt={screenshot.alt}
                  width={768}
                  height={1376}
                  decoding="async"
                  className="w-full h-full object-contain transform group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
