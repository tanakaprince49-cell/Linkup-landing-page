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
    title: 'The Night You Almost Quit',
    body: 'Production breaks. A user leaves. Your savings shrink. You sit there fixing everything alone, wondering why you wanted this in the first place. A co-founder does not erase hard nights, but they make sure you are not carrying every one of them by yourself.',
  },
  {
    step: 'TRAP 02',
    icon: TrendingDown,
    title: 'Your Product Gets Your Best. Your Market Gets What Is Left.',
    body: 'You cannot give your best to deep code, customer calls, distribution, and investor outreach in the same day. Something always waits. Usually, it is the person who would have loved your product—if you had time to reach them.',
  },
  {
    step: 'TRAP 03',
    icon: AlertTriangle,
    title: 'Investors See the Risk You Carry Alone',
    body: 'To an investor, one founder can mean one point of failure: one burnout week, one blind spot, one decision nobody challenged. You know your idea deserves belief. Give people a team that can carry that belief with you.',
  },
  {
    step: 'TRAP 04',
    icon: Clock,
    title: 'Someone Else’s Co-Founder Is Building With Them Today',
    body: 'While you promise to search after the MVP, another founder is already splitting the work with their person: one ships, one sells. They are not necessarily better than you. They simply stopped waiting. Yes, that should sting.',
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
            <span>The Silent Startup Killer: Carrying Everything Alone</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.08]">
            Every Week Without a Co-Founder{' '}
            <span className="bg-gradient-to-r from-red-400 via-[#FBE618] to-white bg-clip-text text-transparent">
              Is a Week You Cannot Get Back.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            You are not failing because you lack discipline or talent. You are doing the work of two people while someone with your missing strengths is out there hoping to meet you too. Every week you delay, another founder finds their person. Not because they deserve it more—because they started looking.
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
              <span>Six Months From Now — Still Just You</span>
            </div>
            <h3 className="text-2xl font-display font-extrabold text-white">
              Your Idea Deserves More Than One Exhausted Pair of Shoulders
            </h3>
            <ul className="space-y-3 text-sm sm:text-base text-slate-300">
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span>Still debugging at 2:00 AM, then waking up to be the entire sales team</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span>Making every hard call with nobody close enough to challenge your blind spots</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span>Hearing investors say: &ldquo;We like the product. We need to see the team.&rdquo;</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span>Watching another duo build momentum with the same customers you wanted</span>
              </li>
            </ul>
          </div>

          {/* Right: Matched on LINKUP */}
          <div className="rounded-3xl p-7 sm:p-9 border border-[#FBE618]/45 bg-gradient-to-br from-[#FBE618]/10 via-[#00C2FF]/5 to-black/60 space-y-5 shadow-[0_0_50px_rgba(251,230,24,0.08)]">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-extrabold uppercase tracking-wider text-[#FBE618]">
              <CheckCircle2 className="w-4 h-4 text-[#FBE618]" />
              <span>Starting Today on LINKUP — Meet Your Missing Person</span>
            </div>
            <h3 className="text-2xl font-display font-extrabold text-white">
              You Bring the Obsession. They Bring the Missing Strength.
            </h3>
            <ul className="space-y-3 text-sm sm:text-base text-slate-200">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#FBE618] shrink-0 mt-0.5" />
                <span>Tell Linky your stack, goals, and gaps so you can meet the person who complements you</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#FBE618] shrink-0 mt-0.5" />
                <span>One of you pushes product forward while the other builds customers, revenue, and distribution</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#FBE618] shrink-0 mt-0.5" />
                <span>See real execution through verified GitHub commit streaks before you invest in a call</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#FBE618] shrink-0 mt-0.5" />
                <span>Use double opt-in introductions so the interest is mutual before the conversation begins</span>
              </li>
            </ul>

            <div className="pt-3">
              <a
                href="/app/landing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-[#FBE618] hover:bg-[#ffe938] text-black font-extrabold text-sm sm:text-base transition-transform hover:scale-[1.02] shadow-lg"
              >
                <span>I’m Ready to Meet My Co-Founder</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
