import React from 'react';
import { Globe } from 'lucide-react';

export const BottomCTA: React.FC = () => {
  return (
    <section className="py-24 relative z-20 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="glass-panel border border-white/10 rounded-[2.5rem] p-8 sm:p-16 text-center relative overflow-hidden group">
          
          {/* Intense hover glow effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#FBE618]/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-[#FBE618]/20 transition-colors duration-700" />

          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto">
              Ready to find your Co-Founder?
              <br />
              <span className="text-[#FBE618]">Join the network today.</span>
            </h2>
            
            <p className="text-slate-300 text-lg max-w-xl mx-auto">
              Stop scrolling LinkedIn. Start building with vetted founders who are as serious as you are.
            </p>

            <div className="flex flex-col items-center gap-4 pt-6">
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto justify-center">
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
                <a 
                  href="https://linkup-muqu.vercel.app/landing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#FBE618] hover:bg-[#fff056] text-black font-semibold px-8 py-4 sm:py-5 rounded-2xl shadow-[0_0_30px_rgba(251,230,24,0.3)] transition-all hover:-translate-y-1 w-full sm:w-auto"
                >
                  <Globe className="w-5 h-5" />
                  View Web Version
                </a>
              </div>
              <span className="text-[11px] text-[#00C2FF] font-medium flex items-center gap-1 justify-center">
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
                Super stable — Recommended for iOS users
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
