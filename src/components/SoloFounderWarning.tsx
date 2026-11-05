import React from 'react';
import { motion } from 'framer-motion';
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Clock,
  Flame,
  TrendingDown,
  XCircle,
} from 'lucide-react';

const SOLO_TRAPS = [
  {
    step: 'TRAP 01',
    icon: Flame,
    title: 'The 2:00 AM Breaking Point',
    body: 'When production breaks, users churn, and your bank balance drops in the same week, nobody is in the foxhole with you. Solo founders quit at the exact moment a co-founder would have pulled them through.',
  },
  {
    step: 'TRAP 02',
    icon: TrendingDown,
    title: 'Shipped Code, Zero Distribution',
    body: 'One human cannot write 12 hours of deep code AND run 20 customer calls, GTM campaigns, founder blogs, and investor outreach every day. Building alone guarantees half your startup is starving.',
  },
  {
    step: 'TRAP 03',
    icon: AlertTriangle,
    title: 'Investors Quietly Pass on Solo Risk',
    body: 'Seed funds and accelerators see a solo founder as a single point of failure—one burnout week, one blind spot, or one unchallenged bad assumption away from total shutdown.',
  },
  {
    step: 'TRAP 04',
    icon: Clock,
    title: 'A Two-Founder Duo Is Taking Your Market Right Now',
    body: 'While you tell yourself "I will look for a co-founder after I finish the MVP," a technical + growth duo in your exact category is shipping AND closing your early customers simultaneously.',
  },
];

export const SoloFounderWarning: React.FC = () => {
  return (
    <section
      id="solo-graveyard"
      className="py-20 lg:py-28 relative overflow-hidden border-y border-red-500/20 bg-gradient-to-b from-[#0D0608] via-[#070910] to-[#05070D]"
    >
      {/* Ambient danger + resolution glows */}
      <div className="absolute top-12 left-1/4 w-[460px] h-[460px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-8 right-1/4 w-[420px] h-[420px] bg-[#FBE618]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-14">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-500/40 bg-red-500/10 text-red-300 text-xs sm:text-sm font-bold tracking-wide uppercase">
            <AlertTriangle className="w-4 h-4 text-red-400" />
            <span>The Silent Startup Killer Nobody Warned You About</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.08]">
            Why Every Week Without a Co-Founder{' '}
            <span className="bg-gradient-to-r from-red-400 via-[#FBE618] to-white bg-clip-text text-transparent">
              Should Scare You.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Solo startups rarely die in an explosion—they bleed out quietly. First you pause distribution to fix bugs. Then you freeze engineering to chase users. Six months later, you are burned out, isolated, and watching a two-founder squad win the market you saw first.
          </p>
        </div>

        {/* 4 Solo Traps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SOLO_TRAPS.map((trap, idx) => {
            const Icon = trap.icon;
            return (
              <motion.div
                key={trap.step}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.07 }}
                className="glass-panel rounded-3xl p-6 sm:p-8 border border-red-500/20 bg-white/[0.02] hover:border-red-400/40 transition-colors space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold tracking-widest text-red-400 uppercase px-2.5 py-1 rounded-md bg-red-500/10 border border-red-500/25">
                    {trap.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-red-500/15 border border-red-500/30 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-red-400" />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                  {trap.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {trap.body}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Side-by-side Fork in the Road */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
          {/* Left: Building Alone */}
          <div className="rounded-3xl p-7 sm:p-9 border border-red-500/30 bg-gradient-to-br from-red-950/35 to-black/60 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-extrabold uppercase tracking-wider text-red-300">
              <XCircle className="w-4 h-4 text-red-400" />
              <span>6 Months From Now — Still Building Alone</span>
            </div>
            <h3 className="text-2xl font-display font-extrabold text-white">
              Carrying 100% of the Company on One Pair of Shoulders
            </h3>
            <ul className="space-y-3 text-sm sm:text-base text-slate-300">
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span>Debugging alone at 2:00 AM with zero warm customer pipeline</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span>Echo-chamber decisions—nobody challenging weak pricing or roadmap traps</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span>Investors replying: &ldquo;Love the product—come back when you have a co-founder&rdquo;</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span>Watching a funded two-person team out-ship and out-sell you every single week</span>
              </li>
            </ul>
          </div>

          {/* Right: Matched on LINKUP */}
          <div className="rounded-3xl p-7 sm:p-9 border border-[#FBE618]/45 bg-gradient-to-br from-[#FBE618]/10 via-[#00C2FF]/5 to-black/60 space-y-5 shadow-[0_0_50px_rgba(251,230,24,0.08)]">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-extrabold uppercase tracking-wider text-[#FBE618]">
              <CheckCircle2 className="w-4 h-4 text-[#FBE618]" />
              <span>Starting Today on LINKUP — Matched With Your Missing Half</span>
            </div>
            <h3 className="text-2xl font-display font-extrabold text-white">
              Two Obsessed Founders Splitting Code &amp; Distribution
            </h3>
            <ul className="space-y-3 text-sm sm:text-base text-slate-200">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#FBE618] shrink-0 mt-0.5" />
                <span>Linky inspects your stack &amp; goals to splice you with the exact role you lack</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#FBE618] shrink-0 mt-0.5" />
                <span>One founder ships product daily while the other closes users, revenue, and GTM</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#FBE618] shrink-0 mt-0.5" />
                <span>Verified GitHub commit streaks prove real execution before you ever hop on a call</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#FBE618] shrink-0 mt-0.5" />
                <span>Double opt-in introductions—zero tire-kickers, zero cold spam, pure conviction</span>
              </li>
            </ul>

            <div className="pt-3">
              <a
                href="/app/landing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-[#FBE618] hover:bg-[#ffe938] text-black font-extrabold text-sm sm:text-base transition-transform hover:scale-[1.02] shadow-lg"
              >
                <span>Find My Co-Founder Before I Burn Out Alone</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
