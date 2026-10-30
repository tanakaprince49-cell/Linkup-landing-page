import React from 'react';
import { motion } from 'motion/react';
import { FEATURES } from '../data/mockData';
import { 
  Sparkles, 
  Flame, 
  Search, 
  TrendingUp, 
  Users, 
  CheckCircle2, 
  Zap,
  Trophy,
  Gamepad2,
  Eye,
  Newspaper,
  Target,
  CalendarCheck,
  ArrowUpRight
} from 'lucide-react';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Sparkles: ({ className }) => <Sparkles className={className} />,
  Flame: ({ className }) => <Flame className={className} />,
  Search: ({ className }) => <Search className={className} />,
  TrendingUp: ({ className }) => <TrendingUp className={className} />,
  Users: ({ className }) => <Users className={className} />,
  Zap: ({ className }) => <Zap className={className} />,
  Trophy: ({ className }) => <Trophy className={className} />,
  Gamepad2: ({ className }) => <Gamepad2 className={className} />,
  Eye: ({ className }) => <Eye className={className} />,
  Newspaper: ({ className }) => <Newspaper className={className} />,
  Target: ({ className }) => <Target className={className} />,
  CalendarCheck: ({ className }) => <CalendarCheck className={className} />,
};

export const FeatureGrid: React.FC = () => {
  return (
    <section id="features" className="py-20 relative overflow-hidden bg-transparent">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#FBE618]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[#00C2FF]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-[#FBE618]/30 text-xs font-mono font-semibold text-[#FBE618] uppercase">
            <Zap className="w-3.5 h-3.5" /> Full Platform Architecture
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            Everything You Need To Find The{' '}
            <span className="bg-gradient-to-r from-[#FBE618] via-[#00C2FF] to-white bg-clip-text text-transparent">
              Perfect Startup Partner.
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            A complete suite of tools to discover, verify, connect, and launch with top-tier co-founders.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, idx) => {
            const IconComponent = iconMap[feature.iconName] || Sparkles;

            return (
              <motion.article
                key={feature.id}
                id={`feature-${feature.id}`}
                aria-labelledby={`${feature.id}-title`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (idx % 6) * 0.06 }}
                className="glass-panel glass-card-hover p-6 sm:p-7 rounded-3xl transition-all duration-300 flex flex-col justify-between group scroll-mt-28"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="text-[#FBE618]">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    {feature.badge && (
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-white/5 border border-white/10 text-slate-300 group-hover:text-white transition-colors">
                        {feature.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Desc */}
                  <h3 id={`${feature.id}-title`} className="text-xl font-display font-bold text-white mb-2.5 group-hover:text-[#FBE618] transition-colors flex items-center gap-1.5">
                    {feature.title}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5">
                    {feature.description}
                  </p>

                  {/* Feature details bullets */}
                  <ul className="space-y-2 mb-2 text-xs text-slate-300 font-medium border-t border-white/5 pt-4">
                    {feature.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#FBE618] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  {feature.href && (
                    <a
                      href={feature.href}
                      className="inline-flex items-center gap-1 mt-4 text-xs font-bold text-[#FBE618] hover:gap-2 transition-all"
                    >
                      Open live <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
};

