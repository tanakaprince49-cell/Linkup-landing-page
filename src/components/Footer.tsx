import React from 'react';
import { ShieldCheck, Heart, Github, Twitter, Linkedin, MessageSquare } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-transparent border-t border-white/10 text-slate-400 py-16 text-xs relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2.5 group cursor-pointer"
              title="LINKUP - Co-Founder Network"
            >
              <img 
                src="https://i.ibb.co/Hf2yQXqL/Gemini-Generated-Image-9afxh89afxh89afx.webp" 
                alt="LinkUp Logo" 
                className="w-9 h-9 rounded-xl object-cover shadow-md shadow-[#FBE618]/20 group-hover:scale-105 transition-transform duration-300" 
              />
              <span className="font-display font-black text-2xl text-white tracking-tight">
                LINK<span className="text-[#FBE618] italic group-hover:text-[#fff056] transition-colors">UP</span>
              </span>
            </a>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              The elite co-founder acquisition network. AI-powered matching connecting technical architects, growth leaders, and product visionaries to build high-impact ventures.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <a href="https://tools.launchllama.co?utm_source=badge&utm_medium=referral" target="_blank" rel="noopener noreferrer" className="inline-block hover:opacity-80 transition-opacity">
                <img src="https://tools.launchllama.co/featured-badge.png?v=2"
                  alt="As seen on Launch Llama Newsletter"
                  width="180" height="45" className="grayscale hover:grayscale-0 transition-all duration-300" />
              </a>
              <a href="https://smollaunch.com" target="_blank" rel="noopener noreferrer" className="inline-block hover:opacity-80 transition-opacity">
                <img src="https://smollaunch.com/badges/featured.svg" 
                  alt="LINKUP — Featured on Smol Launch" 
                  loading="lazy" 
                  width="180" height="45" className="grayscale hover:grayscale-0 transition-all duration-300" />
              </a>
              <a href="https://www.scrolllaunch.com/products/linkup?ref=badge" target="_blank" rel="noopener noreferrer" className="inline-block hover:opacity-80 transition-opacity">
                <img src="https://www.scrolllaunch.com/api/badge/linkup" 
                  alt="Featured on ScrollLaunch" 
                  width="198" height="43" 
                  loading="lazy" 
                  className="grayscale hover:grayscale-0 transition-all duration-300" />
              </a>
            </div>
          </div>

          {/* Nav Col 3 */}
          <div className="space-y-3">
            <h4 className="font-mono text-[11px] font-bold text-white uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2">
              <li><a href="https://docs.google.com/document/d/1FUTyaNfaBXzYGUiqbfhrKX73H6S6S809kpI00chyWRM/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:text-[#FBE618] transition-colors">Privacy Policy</a></li>
              <li><a href="https://docs.google.com/document/d/1SPu2VZchQfmWQT0gr2QuvmHbiuLpBZX-aFpmVd-ph2E/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:text-[#FBE618] transition-colors">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright & status row */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px]">
          <div>
            © 2026 LINKUP Network Inc. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};
