import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Sparkles, Users, HelpCircle } from 'lucide-react';

const LINKS = [
  { to: '/', icon: Home, label: 'Homepage' },
  { to: '/features', icon: Sparkles, label: 'All features' },
  { to: '/builders', icon: Users, label: 'Browse builders' },
  { to: '/faq', icon: HelpCircle, label: 'FAQ' },
];

export const NotFound: React.FC = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden flex items-center justify-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FBE618]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-panel rounded-3xl border border-white/15 p-8 sm:p-12 space-y-6"
        >
          <p className="font-mono text-sm font-bold tracking-widest text-[#FBE618] uppercase">404 — Off the map</p>
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            This page doesn&apos;t exist
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            The link you followed is broken or the page moved. Your future co-founder is still out there — start here instead.
          </p>
          <nav aria-label="Popular pages" className="grid grid-cols-2 gap-3 pt-2">
            {LINKS.map(({ to, icon: Icon, label }) => (
              <Link
                key={to}
                to={to}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-sm font-bold text-white hover:border-[#FBE618]/50 hover:text-[#FBE618] transition-all"
              >
                <Icon className="w-4 h-4" />
                {label}
              </Link>
            ))}
          </nav>
        </motion.div>
      </div>
    </section>
  );
};
