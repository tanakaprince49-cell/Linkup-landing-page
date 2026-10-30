import React from 'react';
import { MapPin, Award, Heart, MessageSquare, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { useBuilderCount } from '../lib/useBuilderCount';
import { formatBuilderCount } from '../lib/publicBuilders';

export const AboutFounder: React.FC = () => {
  const { count, complete } = useBuilderCount();
  const builderSuffix = count === null ? '' : ` \u2022 ${formatBuilderCount(count)}${complete ? '' : '+'} Builders`;
  const verifiedProfiles = [
    {
      name: 'LINKUP on Google Play',
      handle: 'com.tana.linkup',
      description: `Official Android App${builderSuffix}`,
      url: 'https://play.google.com/store/apps/details?id=com.tana.linkup',
      ctaText: 'Get on Google Play',
      badgeColor: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400',
      icon: (
        <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="none">
          <path d="M3.609 1.814L13.793 12 3.61 22.186c-.37-.367-.61-.884-.61-1.464V3.278c0-.58.24-1.097.609-1.464z" fill="#00C3FF" />
          <path d="M17.186 8.608L13.793 12l3.393 3.392 3.864-2.208c.75-.429.75-1.94 0-2.368l-3.864-2.208z" fill="#FFD400" />
          <path d="M13.793 12L3.61 1.814c.23-.228.537-.373.882-.373.377 0 .734.17 1.09.373l11.604 6.794L13.793 12z" fill="#00E266" />
          <path d="M13.793 12l3.393 3.392-11.604 6.794c-.356.203-.713.373-1.09.373-.345 0-.652-.145-.882-.373L13.793 12z" fill="#FF3333" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      handle: 'Tanaka Gaadzikwa',
      description: 'Founder & CEO profile updates & network',
      url: 'https://www.linkedin.com/in/tanaka-gaadzikwa-linkup/',
      ctaText: 'Connect on LinkedIn',
      badgeColor: 'border-[#0A66C2]/30 bg-[#0A66C2]/10 text-[#0A66C2]',
      icon: (
        <svg className="w-7 h-7 shrink-0 fill-[#0A66C2]" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    {
      name: 'WhatsApp',
      handle: '0780011810',
      description: 'Direct line • Fastest founder response',
      url: 'https://wa.me/263780011810',
      ctaText: 'Chat on WhatsApp',
      badgeColor: 'border-[#25D366]/30 bg-[#25D366]/10 text-[#25D366]',
      icon: (
        <svg className="w-7 h-7 shrink-0 fill-[#25D366]" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
        </svg>
      ),
    },
    {
      name: 'Telegram',
      handle: '@tanaka_93',
      description: 'Official direct Telegram handle',
      url: 'https://t.me/tanaka_93',
      ctaText: 'Open Telegram',
      badgeColor: 'border-[#229ED9]/30 bg-[#229ED9]/10 text-[#229ED9]',
      icon: (
        <svg className="w-7 h-7 shrink-0 fill-[#229ED9]" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.832.922z"/>
        </svg>
      ),
    },
    {
      name: 'Email',
      handle: 'tanakaprince49@gmail.com',
      description: 'Investor, press & partnership inquiries',
      url: 'mailto:tanakaprince49@gmail.com',
      ctaText: 'Send Email',
      badgeColor: 'border-red-500/30 bg-red-500/10 text-red-400',
      icon: (
        <img
          src="https://i.ibb.co/WwPnCND/IMG-20261014-WA0004.webp"
          alt="Tanaka Gaadzikwa"
          className="w-7 h-7 shrink-0 rounded-lg object-cover shadow-sm shadow-[#FBE618]/30"
        />
      ),
    },
    {
      name: 'Tanaka Gaadzikwa Web',
      handle: 'tanakagaadzikwa.com',
      description: 'Personal Founder & Portfolio Website',
      url: 'https://www.tanakagaadzikwa.com',
      ctaText: 'Visit tanakagaadzikwa.com',
      badgeColor: 'border-[#FBE618]/30 bg-[#FBE618]/10 text-[#FBE618]',
      icon: (
        <img
          src="https://i.ibb.co/pvvN63sV/20260526-181511.webp"
          alt="Tanaka Gaadzikwa"
          className="w-7 h-7 shrink-0 rounded-lg object-cover shadow-sm shadow-[#FBE618]/30"
        />
      ),
    },
    {
      name: 'LINKUP Website',
      handle: 'www.linkupbuild.com',
      description: 'Official Web Landing Page & Network',
      url: 'https://www.linkupbuild.com/',
      ctaText: 'Visit linkupbuild.com',
      badgeColor: 'border-[#FBE618]/30 bg-[#FBE618]/10 text-[#FBE618]',
      icon: (
        <img
          src="/images/logo.webp"
          alt="LINKUP Logo"
          className="w-7 h-7 shrink-0 rounded-lg object-cover shadow-sm shadow-[#FBE618]/30"
        />
      ),
    },
  ];

  return (
    <section
      id="founder"
      aria-labelledby="founder-section-heading"
      className="py-20 lg:py-28 relative overflow-hidden border-t border-white/10"
    >
      {/* Background glow highlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#FBE618]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-[#00C2FF]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#FBE618]/10 border border-[#FBE618]/30 text-[#FBE618] text-xs font-mono font-bold tracking-wider uppercase">
            <span>Meet The Founder & CEO</span>
          </div>

          <h2
            id="founder-section-heading"
            className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight"
          >
            About <span className="text-[#FBE618]">Tanaka Gaadzikwa</span> & LINKUP
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            The visionary behind LINKUP — revolutionizing co-founder matching and startup building with natural language artificial intelligence.
          </p>
        </div>

        {/* Founder Bio Card */}
        <div 
          className="glass-panel rounded-3xl border border-white/15 p-6 sm:p-10 mb-12 relative overflow-hidden bg-gradient-to-b from-white/[0.04] to-transparent shadow-2xl"
          itemScope 
          itemType="https://schema.org/Person" 
          itemID="https://www.linkupbuild.com/#tanaka-gaadzikwa"
        >
          <meta itemProp="additionalName" content="Prince" />
          <meta itemProp="birthDate" content="2010-11-20" />
          <meta itemProp="disambiguatingDescription" content="Young entrepreneur, tech founder, and CEO of LINKUP born November 20, 2010 in Harare, Zimbabwe. Known globally as the Startup Cupid and The Minister of AI." />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Avatar & Badges */}
            <div className="lg:col-span-4 flex flex-col items-center text-center space-y-4">
              <div className="relative">
                <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-3xl bg-gradient-to-br from-[#FBE618]/30 via-slate-800 to-black p-1 border-2 border-[#FBE618]/50 shadow-[0_0_40px_rgba(251,230,24,0.3)] flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://i.ibb.co/pvvN63sV/20260526-181511.webp" 
                    alt="Tanaka Gaadzikwa - Young Founder and CEO of LINKUP (The Startup Cupid & Minister of AI)" 
                    itemProp="image"
                    className="w-full h-full object-cover rounded-[22px] transform hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-[#25D366] text-black p-1.5 rounded-full border-2 border-[#05070D] shadow-lg" title="Verified Founder - Tanaka Gaadzikwa">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
              </div>

              <div>
                <h3 itemProp="name" className="text-2xl font-display font-bold text-white">
                  Tanaka Gaadzikwa
                </h3>
                <p itemProp="jobTitle" className="text-sm font-medium text-[#FBE618] mt-0.5">
                  Founder & Chief Executive Officer of LINKUP
                </p>
                <div className="flex items-center justify-center gap-1.5 text-xs text-slate-400 mt-2">
                  <MapPin className="w-3.5 h-3.5 text-red-400" />
                  <span itemProp="homeLocation">Harare, Zimbabwe</span>
                </div>
              </div>

              {/* Founder Badges & Monikers */}
              <div className="flex flex-wrap gap-2 justify-center pt-2">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#FBE618]/15 text-[#FBE618] border border-[#FBE618]/30 flex items-center gap-1.5">
                  <Heart className="w-3 h-3 text-[#FBE618]" />
                  The Startup Cupid
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#00C2FF]/15 text-[#00C2FF] border border-[#00C2FF]/30 flex items-center gap-1.5">
                  <Award className="w-3 h-3 text-[#00C2FF]" />
                  The Minister of AI
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                  15-Year-Old Entrepreneur
                </span>
              </div>
            </div>

            {/* Narrative & Mission */}
            <div className="lg:col-span-8 space-y-5 text-slate-200">
              <div className="space-y-3">
                <h4 className="text-lg font-bold text-white font-display flex items-center gap-2">
                  <span>Who is Tanaka Gaadzikwa?</span>
                </h4>
                <p className="text-sm sm:text-base leading-relaxed text-slate-300" itemProp="description">
                  <strong className="text-white font-semibold">Tanaka Gaadzikwa</strong> (full name <strong className="text-white font-semibold">Tanaka Prince Gaadzikwa</strong>, born November 20, 2010) is a Young entrepreneur, tech founder, and CEO of <strong className="text-[#FBE618] font-semibold">LINKUP</strong> living and building technology in <strong className="text-white font-semibold">Harare, Zimbabwe</strong>. Known globally as the <em className="text-[#FBE618] not-italic font-semibold">"Startup Cupid"</em> and <em className="text-[#00C2FF] not-italic font-semibold">"The Minister of AI"</em>.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1.5">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#FBE618]">
                    • Age & Role
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-normal">
                    <strong className="text-white">15-year-old founder and Chief Executive Officer of LINKUP</strong> (also widely recognized across the startup community as the <em className="text-[#FBE618] not-italic font-semibold">"startup Cupid"</em> and <em className="text-[#00C2FF] not-italic font-semibold">"the minister of AI"</em>).
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1.5">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#00C2FF]">
                    • What LINKUP Does
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-normal">
                    An <strong className="text-white">AI-driven platform</strong> featuring an assistant and chatbot named <strong className="text-white">Linky</strong> designed to help developers, designers, founders, and students find co-founders, collaborators, and early project partners.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-gradient-to-r from-[#FBE618]/10 via-[#00C2FF]/10 to-transparent border border-[#FBE618]/20 flex items-center justify-between flex-wrap gap-3">
                <div className="text-xs text-slate-300">
                  Looking to build a startup or partner with Tanaka? Reach out directly via any official channel below.
                </div>
                <a
                  href="https://wa.me/263780011810"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-black bg-[#FBE618] hover:bg-[#fff056] px-3.5 py-1.5 rounded-xl transition-all shadow-md"
                >
                  <span>Quick Message</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Real Links & Official Channels Grid */}
        <div className="space-y-4">
          <div className="text-center sm:text-left flex items-center justify-between flex-wrap gap-2">
            <h4 className="text-sm font-mono font-bold uppercase tracking-wider text-slate-400">
              Official Profiles & Verified Channels
            </h4>
            <span className="text-xs text-slate-500 font-mono">
              Direct verification links for Google & builders
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {verifiedProfiles.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target={item.url.startsWith('mailto:') ? undefined : '_blank'}
                rel={item.url.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                className="glass-panel p-5 rounded-2xl border border-white/10 hover:border-[#FBE618]/40 bg-[#070912]/80 hover:bg-white/[0.04] transition-all duration-300 group flex flex-col justify-between gap-4"
              >
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 group-hover:scale-105 transition-transform shrink-0">
                    {item.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-1">
                      <span className="font-bold text-white text-base group-hover:text-[#FBE618] transition-colors truncate">
                        {item.name}
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-[#FBE618] transition-colors shrink-0" />
                    </div>
                    <div className="text-xs font-mono font-medium text-[#FBE618] truncate mt-0.5">
                      {item.handle}
                    </div>
                    <div className="text-xs text-slate-400 mt-1 line-clamp-1">
                      {item.description}
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-slate-300 group-hover:text-white">
                  <span>{item.ctaText}</span>
                  <span className="text-[#FBE618] font-mono group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
