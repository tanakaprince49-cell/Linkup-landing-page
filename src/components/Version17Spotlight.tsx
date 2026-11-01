import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Search,
  LayoutGrid,
  BellRing,
  ArrowUpRight,
  Smartphone,
  Mail,
  Clock,
  CheckCircle2,
} from 'lucide-react';

interface LinkyMoodItem {
  id: string;
  label: string;
  badge: string;
  image: string;
  trigger: string;
  feeling: string;
  accent: string;
}

const LINKY_MOODS: LinkyMoodItem[] = [
  {
    id: 'default',
    label: 'Plugged In',
    badge: 'Active Today',
    image: '/images/moods/default.webp',
    trigger: 'Shown immediately whenever you open LINKUP and plug into the builder network.',
    feeling: 'Linky is bright yellow, energized, and ready to help you ship or find a co-founder.',
    accent: '#FBE618',
  },
  {
    id: 'angry_1d',
    label: 'Missed 1 Day',
    badge: '24h Away',
    image: '/images/moods/angry-1d.webp',
    trigger: 'Turns fiery red automatically on your home screen & browser tab if you skip a full day.',
    feeling: 'Linky noticed you missed yesterday and refuses to let one skipped day turn into a dead week.',
    accent: '#EF4444',
  },
  {
    id: 'streak_fire',
    label: 'Streak on Fire',
    badge: 'Evening Guard',
    image: '/images/moods/streak-fire.webp',
    trigger: 'Activates in the evening when you have an active streak and have not logged today’s ship yet.',
    feeling: 'Linky holds a blazing ethernet plug by the socket so your streak stays alive before midnight.',
    accent: '#FF6B00',
  },
  {
    id: 'on_fire_shipped',
    label: 'Shipped Today',
    badge: 'Proof Logged',
    image: '/images/moods/on-fire-shipped.webp',
    trigger: 'Unlocks the moment you record today’s progress in your Ship Log.',
    feeling: 'Sunglasses on — today’s build is on the board and visible to co-founders in your lane.',
    accent: '#22C55E',
  },
  {
    id: 'champion_crown',
    label: 'League Crown',
    badge: 'Top 3 Podium',
    image: '/images/moods/champion-crown.webp',
    trigger: 'Awarded when you hold a Top 3 spot or win the weekly Builder League.',
    feeling: 'Linky wears the gold crown while builders across your city and globally chase your rank.',
    accent: '#FBE618',
  },
  {
    id: 'unread_urgent',
    label: 'Waiting Signal',
    badge: 'Warm Intro',
    image: '/images/moods/unread-urgent.webp',
    trigger: 'Appears when a compatible founder sends a match request, double opt-in intro, or message.',
    feeling: 'Incoming signal waves alert you while a warm co-founder intro is still live.',
    accent: '#00C2FF',
  },
  {
    id: 'milestone_party',
    label: 'Milestone Party',
    badge: 'Day 7 / 14 / 30+',
    image: '/images/moods/milestone-party.webp',
    trigger: 'Celebrates major consistency milestones at 7, 14, 30, 50, and 100 build days.',
    feeling: 'Linky throws confetti to mark real, verified shipping consistency.',
    accent: '#FBE618',
  },
  {
    id: 'sad_inactive',
    label: 'Missing You',
    badge: '3–6 Days Away',
    image: '/images/moods/sad-inactive.webp',
    trigger: 'Appears when you step away from LINKUP for 3 to 6 days.',
    feeling: 'Linky sits beside an unplugged wall socket in the rain waiting for your next update.',
    accent: '#60A5FA',
  },
  {
    id: 'ghost_abandoned',
    label: 'Cobweb Desk',
    badge: '7+ Days Away',
    image: '/images/moods/ghost-abandoned.webp',
    trigger: 'Takes over after a full week away until you jump back in.',
    feeling: 'Cobwebs gather around the socket — open LINKUP once and Linky snaps right back to yellow.',
    accent: '#94A3B8',
  },
  {
    id: 'night_owl',
    label: 'Night Owl',
    badge: 'Late Session',
    image: '/images/moods/night-owl.webp',
    trigger: 'Glows during late-night builder sessions after 10 PM local time.',
    feeling: 'Quiet hours are when technical founders ship their sharpest work.',
    accent: '#A78BFA',
  },
  {
    id: 'weekend_chill',
    label: 'Weekend Chill',
    badge: 'Protected Rest',
    image: '/images/moods/weekend-chill.webp',
    trigger: 'Activates on protected rest days and calm weekend mornings.',
    feeling: 'Warm mug in paw — recharge without losing the rhythm you worked all week to build.',
    accent: '#FBBF24',
  },
];

export const Version17Spotlight: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('angry_1d');
  const activeMood = LINKY_MOODS.find((m) => m.id === selectedId) || LINKY_MOODS[0];

  return (
    <section id="version-17" className="py-20 relative overflow-hidden bg-transparent scroll-mt-24">
      {/* Ambient Accent Glows */}
      <div className="absolute top-16 right-1/4 w-[420px] h-[420px] bg-[#FBE618]/8 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[420px] h-[420px] bg-[#00C2FF]/8 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-[#FBE618]/40 bg-[#FBE618]/10 text-xs font-mono font-bold text-[#FBE618] uppercase tracking-wider">
            New in LINKUP 17.0
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            Built For Daily Momentum —{' '}
            <span className="bg-gradient-to-r from-[#FBE618] via-[#00C2FF] to-white bg-clip-text text-transparent">
              Down To Your Home Screen.
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Version 17 upgrades how builders search, ship, and stay accountable every day — with instant Homescreen search, a dedicated bottom-bar Workspace, 11 reactive Linky icons, and smart randomly timed check-ins.
          </p>
        </div>

        {/* Interactive 11-Mood Linky Showcase + Live Preview */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/10 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Interactive Active Icon Preview */}
            <div className="lg:col-span-5 flex flex-col items-center text-center lg:text-left lg:items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300 mb-5">
                <Smartphone className="w-3.5 h-3.5 text-[#FBE618]" /> Interactive Launcher &amp; Tab Preview
              </div>

              <div className="w-full flex flex-col sm:flex-row lg:flex-col items-center lg:items-start gap-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeMood.id}
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.22 }}
                    className="relative shrink-0"
                  >
                    <div
                      className="w-40 h-40 sm:w-44 sm:h-44 rounded-[2.25rem] overflow-hidden border-2 shadow-2xl"
                      style={{
                        borderColor: activeMood.accent,
                        boxShadow: `0 0 42px -10px ${activeMood.accent}66`,
                      }}
                    >
                      <img
                        src={activeMood.image}
                        alt={`Linky ${activeMood.label} app icon on LINKUP — ${activeMood.feeling}`}
                        width={320}
                        height={320}
                        decoding="async"
                        className="w-full h-full object-cover block"
                      />
                    </div>
                    <span
                      className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1 rounded-full text-[11px] font-mono font-extrabold text-black shadow-lg"
                      style={{ backgroundColor: activeMood.accent }}
                    >
                      {activeMood.badge}
                    </span>
                  </motion.div>
                </AnimatePresence>

                <div className="space-y-2.5 pt-2">
                  <h3 className="text-2xl font-display font-extrabold text-white">
                    {activeMood.label}
                  </h3>
                  <p className="text-sm text-slate-200 font-medium leading-relaxed">
                    {activeMood.feeling}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    <span className="text-[#FBE618] font-semibold">Why it appears:</span> {activeMood.trigger}
                  </p>
                </div>
              </div>
            </div>

            {/* Right: 11 Selectable Occasion Variants */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Tap any Linky mood ({LINKY_MOODS.length} live states across Android, iOS &amp; Web)
                </span>
                <a
                  href="/app/builder?section=Settings"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#FBE618] hover:underline"
                >
                  Customize in Workspace <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                {LINKY_MOODS.map((mood) => {
                  const isSelected = mood.id === activeMood.id;
                  return (
                    <button
                      key={mood.id}
                      type="button"
                      onClick={() => setSelectedId(mood.id)}
                      className={`group p-2.5 rounded-2xl border text-left transition-all cursor-pointer flex items-center gap-2.5 ${
                        isSelected
                          ? 'bg-white/10 border-[#FBE618] shadow-[0_0_20px_rgba(251,230,24,0.18)]'
                          : 'bg-white/[0.03] border-white/10 hover:bg-white/[0.07] hover:border-white/25'
                      }`}
                    >
                      <img
                        src={mood.image}
                        alt={`Linky ${mood.label} mood icon`}
                        width={44}
                        height={44}
                        loading="lazy"
                        decoding="async"
                        className="w-10 h-10 rounded-xl object-cover shrink-0 border border-white/10"
                      />
                      <div className="min-w-0">
                        <div className={`text-xs font-bold truncate ${isSelected ? 'text-[#FBE618]' : 'text-white'}`}>
                          {mood.label}
                        </div>
                        <div className="text-[10px] text-slate-400 truncate font-mono">
                          {mood.badge}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              <p className="text-xs text-slate-400 pt-1">
                Prefer a single look? Pin any favorite Linky icon permanently or lock the classic yellow icon anytime in <span className="text-slate-200 font-semibold">Workspace &rarr; Settings</span>.
              </p>
            </div>
          </div>
        </div>

        {/* 3 Core v17 Experience Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pillar 1: Homescreen Search */}
          <div className="glass-panel glass-card-hover rounded-3xl p-6 sm:p-7 border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-2xl bg-[#FBE618]/15 border border-[#FBE618]/30 flex items-center justify-center text-[#FBE618]">
                  <Search className="w-5 h-5" />
                </div>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-white/5 border border-white/10 text-[#FBE618]">
                  Homescreen
                </span>
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-2.5">
                Instant Homescreen Search
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-5">
                Find anyone on LINKUP straight from the top of your Homescreen. Filter verified founders, engineers, designers, skills, or cities in a single tap.
              </p>
              <ul className="space-y-2 text-xs text-slate-300 border-t border-white/5 pt-4">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FBE618] shrink-0 mt-0.5" />
                  <span>Direct search bar right at the top of Home</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FBE618] shrink-0 mt-0.5" />
                  <span>Search by name, @handle, role, skill, or city</span>
                </li>
              </ul>
            </div>
            <a
              href="/app/feed"
              className="inline-flex items-center gap-1 mt-5 text-xs font-bold text-[#FBE618] hover:gap-2 transition-all"
            >
              Search builders live <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Pillar 2: Dedicated Bottom-Bar Workspace */}
          <div className="glass-panel glass-card-hover rounded-3xl p-6 sm:p-7 border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-2xl bg-[#00C2FF]/15 border border-[#00C2FF]/30 flex items-center justify-center text-[#00C2FF]">
                  <LayoutGrid className="w-5 h-5" />
                </div>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-white/5 border border-white/10 text-[#00C2FF]">
                  Bottom Nav
                </span>
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-2.5">
                One-Tap Builder Workspace
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-5">
                Your command center now lives right on the main navigation bar. Log daily ships, track weekly build goals, collaborate in private groups, and tune Linky’s appearance.
              </p>
              <ul className="space-y-2 text-xs text-slate-300 border-t border-white/5 pt-4">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00C2FF] shrink-0 mt-0.5" />
                  <span>Dedicated Workspace tab on mobile &amp; web</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00C2FF] shrink-0 mt-0.5" />
                  <span>Ship Log, weekly rhythm, groups &amp; icon settings</span>
                </li>
              </ul>
            </div>
            <a
              href="/app/builder"
              className="inline-flex items-center gap-1 mt-5 text-xs font-bold text-[#00C2FF] hover:gap-2 transition-all"
            >
              Open Workspace <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Pillar 3: Randomized Smart Check-Ins & Expressive Emails */}
          <div className="glass-panel glass-card-hover rounded-3xl p-6 sm:p-7 border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-2xl bg-[#FBE618]/15 border border-[#FBE618]/30 flex items-center justify-center text-[#FBE618]">
                  <BellRing className="w-5 h-5" />
                </div>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-white/5 border border-white/10 text-slate-200">
                  Smart Retention
                </span>
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-2.5">
                Smart Randomized Check-Ins
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-5">
                Stay accountable without inbox clutter. Linky sends at most one expressive full-screen email per day at a fresh random local time, paired with smart mobile &amp; browser push check-ins.
              </p>
              <ul className="space-y-2 text-xs text-slate-300 border-t border-white/5 pt-4">
                <li className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-[#FBE618] shrink-0 mt-0.5" />
                  <span>Max 1 email per day at a unique random local time</span>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="w-4 h-4 text-[#FBE618] shrink-0 mt-0.5" />
                  <span>Full-bleed Linky mood artwork + one-click controls</span>
                </li>
              </ul>
            </div>
            <a
              href="/app/ship"
              className="inline-flex items-center gap-1 mt-5 text-xs font-bold text-[#FBE618] hover:gap-2 transition-all"
            >
              Log today’s build <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
