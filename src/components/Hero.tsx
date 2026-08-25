import React from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden flex items-center justify-center hero-radial-grid">
      {/* Background Glowing Lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FBE618]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[#00C2FF]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        <div className="space-y-8 max-w-4xl mx-auto">
          
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white leading-[1.08]"
          >
            Join LINKUP & Find Your <br />
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-white via-[#FBE618] to-[#00C2FF] bg-clip-text text-transparent">
                Startup Co-Founder
              </span>
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#FBE618]/40" viewBox="0 0 100 12" preserveAspectRatio="none">
                <path d="M0,0 Q50,12 100,0" fill="none" stroke="currentColor" strokeWidth="4" />
              </svg>
            </span>{' '}
          </motion.h1>

          {/* Sub-copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed"
          >
            LINKUP is the elite AI-powered co-founder matchmaking network. Skip the noise and instantly connect with verified technical architects, growth leaders, and product visionaries ready to launch your next startup.
          </motion.p>

          {/* Action CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center justify-center gap-4 pt-4 pb-2"
          >
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <a 
                href="https://play.google.com/store/apps/details?id=com.tana.linkup"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 transition-transform"
              >
                <img 
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
                  alt="Get it on Google Play" 
                  className="h-20 sm:h-24 object-contain"
                />
              </a>
              <div className="flex flex-col items-center gap-2">
                <a 
                  href="https://linkup-muqu.vercel.app/landing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white font-semibold px-8 py-4 sm:py-5 rounded-2xl shadow-xl transition-all hover:-translate-y-1 w-full justify-center"
                >
                  <Globe className="w-5 h-5 text-[#FBE618]" />
                  View Web Version
                </a>
                <span className="text-[11px] text-[#00C2FF] font-medium flex items-center gap-1">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
                  Super stable — Recommended for iOS users
                </span>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-slate-400 text-sm font-medium glass-panel px-4 py-2 rounded-full mt-2">
              <svg viewBox="0 0 384 512" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
              </svg>
              <span>iOS Coming Soon</span>
            </div>
          </motion.div>

          {/* Micro Stats Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-8 border-t border-white/10 grid grid-cols-3 gap-6 max-w-lg mx-auto text-center"
          >
            <div>
              <div className="font-display font-bold text-2xl sm:text-3xl text-white">14.2k+</div>
              <div className="text-xs text-slate-400 font-medium mt-1">Active Builders</div>
            </div>
            <div>
              <div className="font-display font-bold text-2xl sm:text-3xl text-[#FBE618]">98.4%</div>
              <div className="text-xs text-slate-400 font-medium mt-1">AI Match Precision</div>
            </div>
            <div>
              <div className="font-display font-bold text-2xl sm:text-3xl text-[#00C2FF]">$42M+</div>
              <div className="text-xs text-slate-400 font-medium mt-1">Capital Raised</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center items-center gap-4 pt-6"
          >
            <a href="https://tools.launchllama.co?utm_source=badge&utm_medium=referral" target="_blank" rel="noopener noreferrer" className="inline-block hover:scale-105 transition-transform">
              <img src="https://tools.launchllama.co/featured-badge.png?v=2"
                alt="As seen on Launch Llama Newsletter"
                width="160" height="40" className="opacity-80 hover:opacity-100 transition-opacity" />
            </a>
            <a href="https://smollaunch.com" target="_blank" rel="noopener noreferrer" className="inline-block hover:scale-105 transition-transform">
              <img src="https://smollaunch.com/badges/featured.svg" alt="LINKUP — Featured on Smol Launch" loading="lazy" width="160" height="40" className="opacity-80 hover:opacity-100 transition-opacity" />
            </a>
            <a href="https://www.scrolllaunch.com/products/linkup?ref=badge" target="_blank" rel="noopener noreferrer" className="inline-block hover:scale-105 transition-transform">
              <img src="https://www.scrolllaunch.com/api/badge/linkup" alt="Featured on ScrollLaunch" width="176" height="38" loading="lazy" className="opacity-80 hover:opacity-100 transition-opacity" />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

