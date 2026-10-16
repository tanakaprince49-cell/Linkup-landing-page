import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-transparent border-t border-white/10 text-slate-400 py-16 text-xs relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Brand Col */}
          <div className="md:col-span-4 space-y-4">
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
                src="https://i.ibb.co/HTfs8tdT/logo-idea-r2-A.webp" 
                alt="LinkUp Logo" 
                className="w-9 h-9 rounded-xl object-cover shadow-md shadow-[#FBE618]/20 group-hover:scale-105 transition-transform duration-300" 
              />
              <span className="font-display font-black text-2xl text-white tracking-tight">
                LINK<span className="text-[#FBE618] italic group-hover:text-[#fff056] transition-colors">UP</span>
              </span>
            </a>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              The elite AI-powered co-founder matchmaking network created by <strong className="text-white font-medium">Tanaka Gaadzikwa</strong>. Featuring Linky, our AI assistant connecting developers, designers, founders, and students with co-founders and project partners worldwide.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
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

          {/* Founder & CEO Col */}
          <div className="md:col-span-5 space-y-4">
            <h4 className="font-mono text-[11px] font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <span>About Founder & CEO</span>
              <span className="px-2 py-0.5 rounded-full bg-[#FBE618]/20 text-[#FBE618] text-[9px] font-bold border border-[#FBE618]/40">
                15-Yr Old Founder
              </span>
            </h4>
            
            <div className="flex items-center gap-3">
              <img 
                src="https://i.ibb.co/pvvN63sV/20260526-181511.webp" 
                alt="Tanaka Gaadzikwa - Founder and CEO of LINKUP" 
                className="w-12 h-12 rounded-2xl object-cover border border-[#FBE618]/40 shadow-lg shadow-[#FBE618]/10 shrink-0" 
              />
              <div className="min-w-0">
                <p className="font-bold text-white text-sm font-display truncate">Tanaka Gaadzikwa</p>
                <p className="text-[#FBE618] text-[11px] font-mono">Founder & CEO • Harare, Zimbabwe</p>
              </div>
            </div>
            
            <p className="text-slate-300 text-xs leading-relaxed">
              <strong className="text-white font-bold">Tanaka Gaadzikwa</strong> is a 15-year-old entrepreneur and tech founder based in <strong className="text-slate-200">Harare, Zimbabwe</strong>, known as the <em>"startup Cupid"</em> and <em>"the minister of AI"</em>. He built LINKUP to empower builders globally.
            </p>

            {/* Founder Links with Real Logos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
              {/* WhatsApp */}
              <a 
                href="https://wa.me/263780011810" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#25D366]/40 text-slate-200 hover:text-white transition-all group"
              >
                <svg className="w-4 h-4 fill-[#25D366] shrink-0" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                </svg>
                <div className="flex flex-col min-w-0">
                  <span className="font-semibold text-white text-[11px] truncate">WhatsApp</span>
                  <span className="text-[10px] text-slate-400 font-mono">0780011810</span>
                </div>
              </a>

              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/tanaka-gaadzikwa-linkup/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#0A66C2]/40 text-slate-200 hover:text-white transition-all group"
              >
                <svg className="w-4 h-4 fill-[#0A66C2] shrink-0" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <div className="flex flex-col min-w-0">
                  <span className="font-semibold text-white text-[11px] truncate">LinkedIn</span>
                  <span className="text-[10px] text-slate-400 font-mono truncate">tanaka-gaadzikwa</span>
                </div>
              </a>

              {/* Telegram */}
              <a 
                href="https://t.me/tanaka_93" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#229ED9]/40 text-slate-200 hover:text-white transition-all group"
              >
                <svg className="w-4 h-4 fill-[#229ED9] shrink-0" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.832.922z"/>
                </svg>
                <div className="flex flex-col min-w-0">
                  <span className="font-semibold text-white text-[11px] truncate">Telegram</span>
                  <span className="text-[10px] text-slate-400 font-mono">@tanaka_93</span>
                </div>
              </a>

              {/* Email */}
              <a 
                href="mailto:tanakaprince49@gmail.com"
                className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-red-400/40 text-slate-200 hover:text-white transition-all group"
              >
                <svg className="w-4 h-4 fill-red-400 shrink-0" viewBox="0 0 24 24">
                  <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/>
                </svg>
                <div className="flex flex-col min-w-0">
                  <span className="font-semibold text-white text-[11px] truncate">Email</span>
                  <span className="text-[10px] text-slate-400 font-mono truncate">tanakaprince49</span>
                </div>
              </a>
            </div>

            <div className="pt-1">
              <a 
                href="https://play.google.com/store/apps/details?id=com.tana.linkup"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-[#FBE618] hover:text-[#fff056] font-semibold"
              >
                <span>Get LINKUP on Google Play Store</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Nav Col - Legal & Quick Links */}
          <div className="md:col-span-3 space-y-4 md:text-right">
            <h4 className="font-mono text-[11px] font-bold text-white uppercase tracking-wider">Navigation & Legal</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="/#builders" className="hover:text-[#FBE618] transition-colors">Verified Builders Directory</a></li>
              <li><a href="/#founder" className="hover:text-[#FBE618] transition-colors">About Tanaka Gaadzikwa</a></li>
              <li><a href="/features" className="hover:text-[#FBE618] transition-colors">Platform Features</a></li>
              <li><a href="/campaigns" className="hover:text-[#FBE618] transition-colors">Founder Campaigns</a></li>
              <li><a href="/faq" className="hover:text-[#FBE618] transition-colors">Frequently Asked Questions</a></li>
              <li className="pt-2"><a href="https://docs.google.com/document/d/1FUTyaNfaBXzYGUiqbfhrKX73H6S6S809kpI00chyWRM/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-[#FBE618] transition-colors">Privacy Policy</a></li>
              <li><a href="https://docs.google.com/document/d/1SPu2VZchQfmWQT0gr2QuvmHbiuLpBZX-aFpmVd-ph2E/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-[#FBE618] transition-colors">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright & status row */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px]">
          <div>
            © 2026 LINKUP Network Inc. Founded by Tanaka Gaadzikwa (Harare, Zimbabwe). All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Linkup Network Live • linkupbuild.com</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
