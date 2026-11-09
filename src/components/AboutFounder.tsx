import React from 'react';
import { MapPin, Award, Heart, MessageSquare, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { useBuilderCount } from '../lib/useBuilderCount';
import { formatBuilderCount } from '../lib/publicBuilders';

type AboutFounderProps = {
  asPage?: boolean;
};

export const AboutFounder: React.FC<AboutFounderProps> = ({ asPage = false }) => {
  const { count, complete } = useBuilderCount();
  const builderSuffix = count === null ? '' : ` \u2022 ${formatBuilderCount(count)}${complete ? '' : '+'} Builders`;
  const HeadingTag = asPage ? 'h1' : 'h2';
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
      description: 'Founder updates, big ideas & startup matchmaking',
      url: 'https://www.linkedin.com/in/tanaka-gaadzikwa-linkup/',
      ctaText: 'Say hello on LinkedIn',
      badgeColor: 'border-[#0A66C2]/30 bg-[#0A66C2]/10 text-[#0A66C2]',
      icon: (
        <svg className="w-7 h-7 shrink-0 fill-[#0A66C2]" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    {
      name: 'GitHub',
      handle: '@tanakaprince49-cell',
      description: 'Open-source repositories, LINKUP & web builds',
      url: 'https://github.com/tanakaprince49-cell',
      ctaText: 'View GitHub profile',
      badgeColor: 'border-white/20 bg-white/10 text-white',
      icon: (
        <svg className="w-7 h-7 shrink-0 fill-white" viewBox="0 0 24 24">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>
      ),
    },
    {
      name: 'X (Twitter)',
      handle: '@TGaadzikwa',
      description: 'Daily thoughts on AI, founders & shipping',
      url: 'https://x.com/TGaadzikwa',
      ctaText: 'Follow on X',
      badgeColor: 'border-white/20 bg-white/10 text-white',
      icon: (
        <svg className="w-7 h-7 shrink-0 fill-white" viewBox="0 0 24 24">
          <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
        </svg>
      ),
    },
    {
      name: 'YouTube',
      handle: '@neverletbrocook0',
      description: 'Founder videos, product builds & updates',
      url: 'https://youtube.com/@neverletbrocook0',
      ctaText: 'Subscribe on YouTube',
      badgeColor: 'border-red-500/30 bg-red-500/10 text-red-400',
      icon: (
        <svg className="w-7 h-7 shrink-0 fill-[#FF0000]" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
    },
    {
      name: 'Instagram',
      handle: '@talala2694',
      description: 'Behind-the-scenes founder life & snapshots',
      url: 'https://instagram.com/talala2694',
      ctaText: 'Follow on Instagram',
      badgeColor: 'border-pink-500/30 bg-pink-500/10 text-pink-400',
      icon: (
        <svg className="w-7 h-7 shrink-0 fill-[#E4405F]" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
      ),
    },
    {
      name: 'WhatsApp',
      handle: '0780011810',
      description: 'Direct line • The fastest way to say hi',
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
      description: 'Your direct line to the Startup Cupid',
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
      description: 'Big ideas, press & partnerships start here',
      url: 'mailto:tanakaprince49@gmail.com',
      ctaText: 'Start a conversation',
      badgeColor: 'border-red-500/30 bg-red-500/10 text-red-400',
      icon: (
        <img
          src="https://i.ibb.co/WwPnCND/IMG-20261014-WA0004.webp"
          alt="Email Tanaka Gaadzikwa — investor and partnership inquiries"
          title="Email Tanaka Gaadzikwa"
          width={28}
          height={28}
          loading="lazy"
          decoding="async"
          className="w-7 h-7 shrink-0 rounded-lg object-cover shadow-sm shadow-[#FBE618]/30"
        />
      ),
    },
    {
      name: 'Tanaka Gaadzikwa Web',
      handle: 'tanakagaadzikwa.com',
      description: 'Meet the human behind your future match',
      url: 'https://www.tanakagaadzikwa.com',
      ctaText: 'Visit tanakagaadzikwa.com',
      badgeColor: 'border-[#FBE618]/30 bg-[#FBE618]/10 text-[#FBE618]',
      icon: (
        <img
          src="https://i.ibb.co/pvvN63sV/20260526-181511.webp"
          alt="Tanaka Gaadzikwa — tanakagaadzikwa.com founder website"
          title="tanakagaadzikwa.com"
          width={28}
          height={28}
          loading="lazy"
          decoding="async"
          className="w-7 h-7 shrink-0 rounded-lg object-cover shadow-sm shadow-[#FBE618]/30"
        />
      ),
    },
    {
      name: 'LINKUP Website',
      handle: 'www.linkupbuild.com',
      description: 'Where you stop solo and meet your person',
      url: 'https://www.linkupbuild.com/',
      ctaText: 'Go meet possible partners',
      badgeColor: 'border-[#FBE618]/30 bg-[#FBE618]/10 text-[#FBE618]',
      icon: (
        <img
          src="/images/logo.webp"
          alt="LINKUP logo — AI co-founder matchmaking"
          title="LINKUP"
          width={28}
          height={28}
          loading="lazy"
          decoding="async"
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
            <span>The Human Behind The Matchmaking</span>
          </div>

          <HeadingTag
            id="founder-section-heading"
            className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight"
          >
            Meet <span className="text-[#FBE618]">Tanaka Gaadzikwa</span>. He Built This For You.
          </HeadingTag>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            He got tired of watching brilliant builders wrestle entire startups alone. So he built LINKUP to help you find the person who makes you say, “Finally. Someone who gets it.”
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
          <meta itemProp="nationality" content="Zimbabwe" />
          <link itemProp="url" href="https://www.linkupbuild.com/founder" />
          <link itemProp="mainEntityOfPage" href="https://www.linkupbuild.com/founder" />
          <link itemProp="sameAs" href="https://www.tanakagaadzikwa.com/" />
          <link itemProp="sameAs" href="https://www.linkedin.com/in/tanaka-gaadzikwa-linkup/" />
          <link itemProp="sameAs" href="https://x.com/TGaadzikwa" />
          <link itemProp="sameAs" href="https://instagram.com/talala2694" />
          <link itemProp="sameAs" href="https://youtube.com/@neverletbrocook0" />
          <link itemProp="sameAs" href="https://github.com/tanakaprince49-cell" />
          <link itemProp="sameAs" href="https://t.me/tanaka_93" />
          <meta itemProp="disambiguatingDescription" content="Young entrepreneur, tech founder, and CEO of LINKUP born November 20, 2010 in Harare, Zimbabwe. Known globally as the Startup Cupid and The Minister of AI." />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Avatar & Badges */}
            <div className="lg:col-span-4 flex flex-col items-center text-center space-y-4">
              <div className="relative">
                <figure itemProp="image" itemScope itemType="https://schema.org/ImageObject" className="m-0 w-36 h-36 sm:w-44 sm:h-44 rounded-3xl bg-gradient-to-br from-[#FBE618]/30 via-slate-800 to-black p-1 border-2 border-[#FBE618]/50 shadow-[0_0_40px_rgba(251,230,24,0.3)] flex items-center justify-center overflow-hidden">
                    <img
                      src="https://i.ibb.co/pvvN63sV/20260526-181511.webp"
                      alt="Tanaka Gaadzikwa - Young Founder and CEO of LINKUP (The Startup Cupid & Minister of AI)"
                      title="Tanaka Gaadzikwa — Founder & CEO of LINKUP"
                      itemProp="contentUrl"
                      width={1134}
                      height={2016}
                      loading="eager"
                      fetchPriority="high"
                      decoding="async"
                      className="w-full h-full object-cover rounded-[22px] transform hover:scale-105 transition-transform duration-500"
                    />
                  <meta itemProp="caption" content="Portrait of Tanaka Gaadzikwa, Young founder and CEO of LINKUP (Startup Cupid, Minister of AI), Harare Zimbabwe." />
                </figure>
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
                  <span>Who Made It Their Mission To Find Your Person?</span>
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
                    An <strong className="text-white">AI-driven platform</strong> starring <strong className="text-white">Linky</strong>, built to help developers, designers, founders, and students meet the co-founder or collaborator who makes solo building feel like a bad ex.
                  </p>
                </div>
              </div>

              <dl className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/10 text-xs">
                <div>
                  <dt className="text-slate-400 font-mono uppercase text-[10px]">Full Name</dt>
                  <dd className="text-white font-semibold mt-0.5">Tanaka Prince Gaadzikwa</dd>
                </div>
                <div>
                  <dt className="text-slate-400 font-mono uppercase text-[10px]">Born</dt>
                  <dd className="text-white font-semibold mt-0.5">November 20, 2010</dd>
                </div>
                <div>
                  <dt className="text-slate-400 font-mono uppercase text-[10px]">Nationality</dt>
                  <dd className="text-white font-semibold mt-0.5">Zimbabwean</dd>
                </div>
                <div>
                  <dt className="text-slate-400 font-mono uppercase text-[10px]">Based In</dt>
                  <dd className="text-white font-semibold mt-0.5">Harare, Zimbabwe</dd>
                </div>
                <div>
                  <dt className="text-slate-400 font-mono uppercase text-[10px]">Organization</dt>
                  <dd className="text-white font-semibold mt-0.5" itemProp="worksFor" itemScope itemType="https://schema.org/Organization" itemID="https://www.linkupbuild.com/#organization">
                    <span itemProp="name">LINKUP</span>
                  </dd>
                </div>
                <div>
                  <dt className="text-slate-400 font-mono uppercase text-[10px]">Known As</dt>
                  <dd className="text-white font-semibold mt-0.5">
                    <span itemProp="alternateName">Startup Cupid</span> &middot; <span itemProp="alternateName">The Minister of AI</span>
                  </dd>
                </div>
              </dl>

              <div className="p-4 rounded-2xl bg-gradient-to-r from-[#FBE618]/10 via-[#00C2FF]/10 to-transparent border border-[#FBE618]/20 flex items-center justify-between flex-wrap gap-3">
                <div className="text-xs text-slate-300">
                  Want to build something or scheme with Tanaka? Say hi through any official channel below. Your next great partnership could start with one slightly nervous message.
                </div>
                <a
                  href="https://wa.me/263780011810"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-black bg-[#FBE618] hover:bg-[#fff056] px-3.5 py-1.5 rounded-xl transition-all shadow-md"
                >
                  <span>Say Hi To Tanaka</span>
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
              Where To Say Hi & Verify The Human
            </h4>
            <span className="text-xs text-slate-500 font-mono">
              Real links. No mysterious founder energy.
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {verifiedProfiles.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target={item.url.startsWith('mailto:') ? undefined : '_blank'}
                rel={item.url.startsWith('mailto:') ? undefined : 'noopener noreferrer me'}
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
