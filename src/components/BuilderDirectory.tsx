import React, { useState, useMemo } from 'react';
import { MOCK_BUILDERS } from '../data/mockData';
import { Search, ShieldCheck, Sparkles, MapPin, ArrowUpRight, Filter, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const BuilderDirectory: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState('All');

  const roleCategories = [
    'All',
    'AI / ML',
    'Engineering',
    'Product / CEO',
    'Design',
    'Fintech / BioTech'
  ];

  const filteredBuilders = useMemo(() => {
    return MOCK_BUILDERS.filter((builder) => {
      const matchesSearch =
        builder.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        builder.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        builder.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        builder.experience.toLowerCase().includes(searchQuery.toLowerCase()) ||
        builder.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      if (selectedRole === 'All') return matchesSearch;
      if (selectedRole === 'AI / ML') return matchesSearch && (builder.role.includes('AI') || builder.tags.includes('LLMs') || builder.tags.includes('PyTorch'));
      if (selectedRole === 'Engineering') return matchesSearch && (builder.role.includes('Full-Stack') || builder.role.includes('Systems') || builder.role.includes('Robotics'));
      if (selectedRole === 'Product / CEO') return matchesSearch && (builder.role.includes('CEO') || builder.role.includes('Growth') || builder.role.includes('GTM'));
      if (selectedRole === 'Design') return matchesSearch && (builder.role.includes('Design') || builder.role.includes('Frontend'));
      if (selectedRole === 'Fintech / BioTech') return matchesSearch && (builder.role.includes('Fintech') || builder.role.includes('BioTech') || builder.tags.includes('Fintech'));

      return matchesSearch;
    });
  }, [searchQuery, selectedRole]);

  return (
    <section 
      id="builders" 
      aria-labelledby="builders-heading"
      itemScope 
      itemType="https://schema.org/ItemList"
      className="py-24 relative overflow-hidden z-20 border-t border-white/5"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#00C2FF]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#FBE618]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00C2FF]/10 border border-[#00C2FF]/30 text-[#00C2FF] text-xs font-mono font-bold tracking-wider uppercase">
            <Users className="w-3.5 h-3.5" />
            <span>Verified Builder Directory & Co-Founders</span>
          </div>

          <h2
            id="builders-heading"
            itemProp="name"
            className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight"
          >
            Meet the Builders on <span className="text-[#FBE618]">LINKUP</span>
          </h2>

          <p itemProp="description" className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Index of verified founders, AI engineers, full-stack architects, and growth leaders looking for co-founders and early venture partners.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="max-w-4xl mx-auto mb-12 space-y-4">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search builders by skill (LLMs, Rust, Python), role (CTO, CEO), or company..."
              className="w-full bg-[#0d121f]/90 border border-white/10 rounded-2xl pl-12 pr-4 py-3.5 text-white placeholder-slate-400 focus:outline-none focus:border-[#FBE618]/60 focus:ring-1 focus:ring-[#FBE618]/40 transition-all text-sm font-medium shadow-xl"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Role Filter Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
            {roleCategories.map((role) => (
              <button
                key={role}
                onClick={() => setSelectedRole(role)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedRole === role
                    ? 'bg-[#FBE618] text-black shadow-[0_0_15px_rgba(251,230,24,0.3)]'
                    : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                {role}
              </button>
            ))}
          </div>
        </div>

        {/* Builder Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredBuilders.map((builder, idx) => (
              <motion.article
                key={builder.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/Person"
                className="glass-panel rounded-3xl border border-white/10 p-5 bg-[#0a0e1a]/80 hover:border-[#FBE618]/40 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  {/* Top Header: Avatar & Scores */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="relative">
                      <img
                        src={builder.avatar}
                        alt={`${builder.name} - ${builder.role} on LINKUP`}
                        itemProp="image"
                        className="w-14 h-14 rounded-2xl object-cover border border-white/10 shadow-md group-hover:scale-105 transition-transform"
                      />
                      {builder.verified && (
                        <div
                          className="absolute -bottom-1 -right-1 bg-[#FBE618] text-black p-0.5 rounded-full border border-black shadow"
                          title="Verified Builder on LINKUP"
                        >
                          <ShieldCheck className="w-3.5 h-3.5" />
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col items-end">
                      <span className="text-[11px] font-mono font-bold text-[#FBE618] bg-[#FBE618]/10 border border-[#FBE618]/30 px-2 py-0.5 rounded-full">
                        {builder.matchScore}% Match
                      </span>
                      <span className="text-[10px] font-mono text-slate-400 mt-1">
                        REP {builder.repScore}
                      </span>
                    </div>
                  </div>

                  {/* Name & Role */}
                  <div className="space-y-1 mb-3">
                    <h3 itemProp="name" className="text-lg font-bold text-white font-display group-hover:text-[#FBE618] transition-colors">
                      {builder.name}
                    </h3>
                    <p itemProp="jobTitle" className="text-xs font-semibold text-[#00C2FF] line-clamp-1">
                      {builder.role}
                    </p>
                    <div className="flex items-center gap-1 text-[11px] text-slate-400">
                      <MapPin className="w-3 h-3 text-red-400 shrink-0" />
                      <span itemProp="address">{builder.location}</span>
                    </div>
                  </div>

                  {/* Experience Badge */}
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 mb-3 text-[11px] text-slate-300 font-mono leading-tight">
                    {builder.experience}
                  </div>

                  {/* Bio */}
                  <p itemProp="description" className="text-xs text-slate-300 leading-relaxed line-clamp-3 mb-3">
                    {builder.bio}
                  </p>

                  {/* Looking For */}
                  <div className="mb-4 pt-2 border-t border-white/5">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#FBE618] block mb-1">
                      Looking For:
                    </span>
                    <p className="text-[11px] text-slate-200 line-clamp-2">
                      {builder.lookingFor}
                    </p>
                  </div>

                  {/* Skills / Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {builder.tags.map((tag) => (
                      <span
                        key={tag}
                        itemProp="knowsAbout"
                        className="text-[10px] font-mono bg-white/5 border border-white/10 px-2 py-0.5 rounded-md text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Connect CTA */}
                <a
                  href="/app/landing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-[#FBE618] hover:text-black text-white font-bold text-xs transition-all flex items-center justify-center gap-1.5 border border-white/10 hover:border-transparent group/btn shadow-md"
                >
                  <span>Connect on LINKUP</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </a>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Directory Footer CTA */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl glass-panel border border-white/10 bg-gradient-to-r from-[#FBE618]/10 via-[#00C2FF]/10 to-transparent flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl font-bold text-white font-display">
              Want to get your profile indexed & match with co-founders?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Join thousands of verified builders on LINKUP and get discovered by serious founders worldwide.
            </p>
          </div>
          <a
            href="/app/landing"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3.5 rounded-2xl bg-[#FBE618] hover:bg-[#fff056] text-black font-bold text-sm shadow-[0_0_25px_rgba(251,230,24,0.3)] transition-all hover:-translate-y-0.5"
          >
            Create Your Builder Profile
          </a>
        </div>

      </div>
    </section>
  );
};
