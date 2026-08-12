import React from 'react';
import { ACCELERATORS } from '../data/mockData';
import { ShieldCheck, Award } from 'lucide-react';

export const SocialProofMarquee: React.FC = () => {
  return (
    <section className="py-10 border-y border-white/10 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-widest text-slate-400 uppercase">
          <ShieldCheck className="w-4 h-4 text-[#FBE618]" />
          <span>Builders from world-class ecosystems</span>
        </div>
      </div>

      <div className="relative w-full overflow-hidden flex items-center">
        {/* Gradient Fades on Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#FBE618]/10 to-transparent pointer-events-none blur-sm" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#FBE618]/10 to-transparent pointer-events-none blur-sm" />

        {/* Marquee Track */}
        <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
          {[...ACCELERATORS, ...ACCELERATORS, ...ACCELERATORS].map((item, idx) => (
            <div
              key={`${item.name}-${idx}`}
              className="glass-panel px-5 py-2.5 rounded-2xl border border-white/10 flex items-center gap-3 group hover:border-[#FBE618]/40 transition-colors"
            >
              <Award className="w-4 h-4 text-[#FBE618] group-hover:scale-110 transition-transform" />
              <div className="flex flex-col">
                <span className="text-sm font-bold text-slate-200 group-hover:text-white transition-colors">
                  {item.name}
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
