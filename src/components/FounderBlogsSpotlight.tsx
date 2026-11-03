import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Newspaper,
  Globe,
  BarChart3,
  Crop,
  Link2,
  BadgeCheck,
  Eye,
  MousePointerClick,
  ArrowUpRight,
  CheckCircle2,
  Lock,
  Image as ImageIcon,
  Rss,
  PenSquare,
} from 'lucide-react';

type SpotlightTab = 'seo' | 'studio' | 'analytics';

export const FounderBlogsSpotlight: React.FC = () => {
  const [activeTab, setActiveTab] = useState<SpotlightTab>('seo');

  return (
    <section
      id="founder-blogs"
      className="py-20 relative overflow-hidden bg-transparent scroll-mt-24"
    >
      {/* Ambient Glows */}
      <div className="absolute top-12 left-1/4 w-[460px] h-[460px] bg-[#FBE618]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-8 right-1/4 w-[440px] h-[440px] bg-[#00C2FF]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hype Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-[#FBE618]/40 bg-[#FBE618]/10 text-xs font-mono font-extrabold text-[#FBE618] uppercase tracking-wider">
            <Newspaper className="w-3.5 h-3.5" /> New • Founder Blogs + Google News Engine
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            Write Once on LINKUP.{' '}
            <span className="bg-gradient-to-r from-[#FBE618] via-[#00C2FF] to-white bg-clip-text text-transparent">
              Rank on Google Search, News &amp; Images.
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Passive external news feeds are gone. Now every builder on LINKUP gets a full-stack publishing studio — complete with interactive 16:9 cover cropping, highlight-to-link rich formatting, Verified Author ticks, automatic Google Search &amp; Google News indexing, Super-SEO cover pictures, and private author-only Views &amp; Clicks analytics.
          </p>
        </div>

        {/* Main Interactive Showcase Card */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#FBE618]/25 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Interactive 3-Mode Live Product Preview */}
            <div className="lg:col-span-7 space-y-5">
              {/* Interactive Tab Switcher */}
              <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-white/[0.04] border border-white/10">
                {[
                  {
                    id: 'seo' as const,
                    label: 'Google Search, News & Image SEO',
                    icon: Globe,
                  },
                  {
                    id: 'studio' as const,
                    label: '16:9 Cropper & Highlight-to-Link',
                    icon: PenSquare,
                  },
                  {
                    id: 'analytics' as const,
                    label: 'Private Author Views & Clicks',
                    icon: BarChart3,
                  },
                ].map((tab) => {
                  const Icon = tab.icon;
                  const active = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex-1 min-w-[170px] flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        active
                          ? 'bg-[#FBE618] text-black shadow-[0_0_24px_rgba(251,230,24,0.3)]'
                          : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Animated Interactive Panel */}
              <AnimatePresence mode="wait">
                {activeTab === 'seo' && (
                  <motion.div
                    key="seo"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="rounded-2xl bg-[#0B0F1A] border border-white/10 p-5 sm:p-6 space-y-5"
                  >
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-[11px] font-mono font-bold">
                        <Globe className="w-3.5 h-3.5" /> Server-Rendered HTML • Zero Login Required
                      </span>
                      <span className="text-[11px] font-mono text-slate-400">
                        NewsArticle + BlogPosting JSON-LD
                      </span>
                    </div>

                    {/* Simulated Google News / Search Rich Result Card */}
                    <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4 sm:p-5 space-y-3">
                      <div className="flex items-center gap-2 text-xs text-slate-300">
                        <img
                          src="/images/logo.webp"
                          alt="LINKUP Publisher Logo"
                          width={20}
                          height={20}
                          loading="lazy"
                          decoding="async"
                          className="w-5 h-5 rounded-md object-cover"
                        />
                        <span className="font-bold text-white">LINKUP</span>
                        <span className="text-slate-500">•</span>
                        <span className="text-[#00C2FF] font-mono text-[11px] truncate">
                          linkupbuild.com/app/blogs/...
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                        <div className="sm:col-span-8 space-y-1.5">
                          <h4 className="text-base sm:text-lg font-display font-bold text-[#FBE618] leading-snug">
                            How We Scaled Our AI Startup to 10,000 Verified Builders
                          </h4>
                          <p className="text-xs text-slate-300 leading-relaxed">
                            Server-rendered article with Verified Author entity markup, semantic headings, inline citations, and instant Google News discovery...
                          </p>
                          <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] text-slate-400">
                            <span className="inline-flex items-center gap-1 text-sky-400 font-semibold">
                              <BadgeCheck className="w-3.5 h-3.5" /> Verified Author
                            </span>
                            <span>•</span>
                            <span>5 min read</span>
                            <span>•</span>
                            <span>Top Stories &amp; Google Discover Ready</span>
                          </div>
                        </div>

                        <div className="sm:col-span-4">
                          <div className="aspect-video rounded-xl bg-gradient-to-br from-[#FBE618]/25 via-[#00C2FF]/20 to-purple-500/20 border border-[#FBE618]/30 flex flex-col items-center justify-center p-3 text-center">
                            <ImageIcon className="w-6 h-6 text-[#FBE618] mb-1" />
                            <span className="text-[10px] font-mono font-bold text-white">
                              1280×720 HD Cover
                            </span>
                            <span className="text-[9px] font-mono text-slate-300">
                              16:9 + 4:3 + 1:1 Schema
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Super Picture SEO + Google News Tech Pills */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                      <div className="rounded-xl bg-white/[0.03] border border-white/10 p-3">
                        <div className="font-mono font-bold text-[#FBE618] mb-1">Google News XML</div>
                        <p className="text-slate-400 text-[11px] leading-relaxed">
                          Live <code className="text-slate-200">sitemap-google-news.xml</code> + Media RSS 2.0 feed for real-time news pickup.
                        </p>
                      </div>
                      <div className="rounded-xl bg-white/[0.03] border border-white/10 p-3">
                        <div className="font-mono font-bold text-[#00C2FF] mb-1">Super Picture SEO</div>
                        <p className="text-slate-400 text-[11px] leading-relaxed">
                          Auto-generates 16:9, 4:3 &amp; 1:1 HD <code className="text-slate-200">ImageObject</code> URLs + XML Image Sitemap captions.
                        </p>
                      </div>
                      <div className="rounded-xl bg-white/[0.03] border border-white/10 p-3">
                        <div className="font-mono font-bold text-emerald-400 mb-1">Large Preview Flag</div>
                        <p className="text-slate-400 text-[11px] leading-relaxed">
                          Ships <code className="text-slate-200">max-image-preview:large</code> + <code className="text-slate-200">summary_large_image</code> cards everywhere.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'studio' && (
                  <motion.div
                    key="studio"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="rounded-2xl bg-[#0B0F1A] border border-white/10 p-5 sm:p-6 space-y-4"
                  >
                    {/* 16:9 Cover Cropper Mock */}
                    <div className="rounded-xl bg-white/[0.04] border border-white/10 p-4 space-y-3">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-white">
                          <Crop className="w-4 h-4 text-[#FBE618]" /> Interactive 16:9 Cover Cropper
                        </span>
                        <div className="flex items-center gap-1.5 text-[10px] font-mono">
                          <span className="px-2.5 py-1 rounded-full bg-[#FBE618] text-black font-extrabold">
                            Crop to Fill 16:9
                          </span>
                          <span className="px-2.5 py-1 rounded-full bg-white/10 text-slate-300">
                            Fit Full Picture
                          </span>
                        </div>
                      </div>
                      <p className="text-xs text-slate-300">
                        Drag to pan, zoom from <span className="text-white font-semibold">1.0× to 3.0×</span> with a rule-of-thirds grid so faces and product screenshots never get awkwardly cut off — plus custom <span className="text-[#FBE618] font-semibold">Google Images Alt / Caption</span> input.
                      </p>
                    </div>

                    {/* Highlight Word -> Insert Link Demo */}
                    <div className="rounded-xl bg-white/[0.04] border border-white/10 p-4 space-y-3">
                      <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono text-slate-300 border-b border-white/10 pb-2.5">
                        <span className="px-2 py-0.5 rounded bg-white/10 font-bold text-white">B</span>
                        <span className="px-2 py-0.5 rounded bg-white/10 italic text-white">I</span>
                        <span className="px-2 py-0.5 rounded bg-white/10 underline text-white">U</span>
                        <span className="px-2 py-0.5 rounded bg-[#FBE618]/25 text-[#FBE618] font-bold">Highlight</span>
                        <span className="px-2 py-0.5 rounded bg-white/10 text-white">H1</span>
                        <span className="px-2 py-0.5 rounded bg-white/10 text-white">H2</span>
                        <span className="px-2 py-0.5 rounded bg-white/10 text-white">Quote</span>
                        <span className="px-2 py-0.5 rounded bg-white/10 text-white">1. List</span>
                        <span className="px-2 py-0.5 rounded bg-white/10 text-white">{'{ } Code'}</span>
                      </div>

                      <p className="text-sm text-slate-200 leading-relaxed">
                        We shipped our MVP in 11 days — read our{' '}
                        <span className="px-1.5 py-0.5 rounded bg-[#00C2FF]/30 border border-[#00C2FF] text-white font-semibold">
                          launch architecture
                        </span>{' '}
                        and meet verified builders in your lane.
                      </p>

                      {/* Contextual Selection Bar */}
                      <div className="flex items-center justify-between flex-wrap gap-2 px-3 py-2 rounded-xl bg-[#141A29] border border-[#FBE618]/50">
                        <span className="text-xs font-mono text-[#FBE618] font-bold">
                          Selected: “launch architecture”
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#FBE618] text-black text-xs font-extrabold">
                          <Link2 className="w-3.5 h-3.5" /> Insert Link (⌘K)
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'analytics' && (
                  <motion.div
                    key="analytics"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="rounded-2xl bg-[#0B0F1A] border border-white/10 p-5 sm:p-6 space-y-4"
                  >
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FBE618]">
                        <Lock className="w-3.5 h-3.5" /> Author Analytics (Visible Only to You)
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-slate-300">
                        Self-views &amp; bots excluded
                      </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {[
                        { label: 'Blog Views', val: '1,482', accent: 'text-white' },
                        { label: 'Unique Readers', val: '1,190', accent: 'text-[#00C2FF]' },
                        { label: 'Total Clicks', val: '384', accent: 'text-[#FBE618]' },
                        { label: 'Link Clicks', val: '219', accent: 'text-emerald-400' },
                      ].map((stat) => (
                        <div
                          key={stat.label}
                          className="rounded-xl bg-white/[0.04] border border-white/10 p-3.5"
                        >
                          <div className={`text-xl font-display font-extrabold ${stat.accent}`}>
                            {stat.val}
                          </div>
                          <div className="text-[11px] text-slate-400 font-medium mt-0.5">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="rounded-xl bg-white/[0.03] border border-white/10 p-3.5 space-y-2">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                        Clicked Links Inside Your Blog
                      </div>
                      <div className="flex items-center justify-between text-xs py-1.5 border-b border-white/5">
                        <span className="inline-flex items-center gap-1.5 text-slate-200 font-medium truncate">
                          <Link2 className="w-3.5 h-3.5 text-[#FBE618]" /> launch architecture (inline word link)
                        </span>
                        <span className="font-mono font-bold text-[#FBE618]">146 clicks</span>
                      </div>
                      <div className="flex items-center justify-between text-xs pt-1">
                        <span className="inline-flex items-center gap-1.5 text-slate-200 font-medium truncate">
                          <Link2 className="w-3.5 h-3.5 text-[#00C2FF]" /> Live Product Demo (referenced link)
                        </span>
                        <span className="font-mono font-bold text-[#00C2FF]">73 clicks</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Right: 6 Core Capabilities + Live CTAs */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-display font-bold text-white leading-snug">
                  Turn your founder insights into compounding Google traffic &amp; warm inbound leads.
                </h3>

                <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#FBE618] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">Google Search &amp; Google News Ready:</strong> Dedicated SSR article URLs, <code className="text-slate-200">NewsArticle</code> schema, Google News XML sitemap &amp; Media RSS feed.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00C2FF] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">Super SEO for Blog Pictures:</strong> Automatic 16:9, 4:3 &amp; 1:1 HD <code className="text-slate-200">ImageObject</code> variants, custom alt captions, and XML Image Sitemap indexing.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Eye className="w-4 h-4 text-[#FBE618] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">Private Author-Only Views &amp; Clicks:</strong> See total views, unique readers, card opens, and exact link clicks — strictly hidden from every other user.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <MousePointerClick className="w-4 h-4 text-[#00C2FF] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">Highlight Word &rarr; Insert Link:</strong> Select any word in your essay to attach clickable inline links, headings, quotes, code blocks, and custom categories.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <BadgeCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">Verified Author Ticks &amp; Full Control:</strong> Displays your profile photo and verification badge on every blog, with live preview before publishing and one-tap delete anytime.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="/app/news-feed"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-[#FBE618] hover:bg-[#fff056] text-black font-extrabold text-sm shadow-lg shadow-[#FBE618]/20 transition-all hover:scale-[1.02]"
                >
                  <PenSquare className="w-4 h-4" />
                  <span>Write a Blog on LINKUP</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href="/app/blogs"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-white font-bold text-sm transition-all"
                >
                  <Globe className="w-4 h-4 text-[#00C2FF]" />
                  <span>Browse Indexed Blogs</span>
                </a>

                <a
                  href="/app/blogs/rss.xml"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-mono text-slate-300 hover:text-[#FBE618] transition-colors"
                >
                  <Rss className="w-3.5 h-3.5 text-[#FBE618]" />
                  <span>Google News RSS</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
