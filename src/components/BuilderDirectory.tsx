import React, { useState, useMemo, useEffect, useCallback, useRef } from 'react';
import { Search, MapPin, ArrowUpRight, Users, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { fetchMemberPage, mergeBuilders, matchesBuilder, initials, type PublicBuilder } from '../lib/publicBuilders';

const roleCategories = ['All', 'AI / ML', 'Engineering', 'Product / CEO', 'Design', 'Fintech / BioTech'];

export const BuilderDirectory: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState('All');
  const [builders, setBuilders] = useState<PublicBuilder[]>([]);
  const [nextCursor, setNextCursor] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(12);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const activeRequest = useRef<AbortController | null>(null);

  const loadPage = useCallback(async (cursor = '', append = false) => {
    activeRequest.current?.abort();
    const controller = new AbortController();
    activeRequest.current = controller;
    setLoading(true);
    setError('');
    if (!append) { setBuilders([]); setNextCursor(null); }
    try {
      const page = await fetchMemberPage(cursor, controller.signal);
      if (controller.signal.aborted || activeRequest.current !== controller) return;
      setBuilders(previous => mergeBuilders(append ? previous : [], page.profiles));
      setNextCursor(page.nextCursor);
      setVisibleCount(previous => append ? previous + 12 : 12);
    } catch {
      if (!controller.signal.aborted && activeRequest.current === controller) {
        setError('We couldn’t load public profiles right now. Please try again, or browse the public directory.');
      }
    } finally {
      if (!controller.signal.aborted && activeRequest.current === controller) setLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadPage();
    // Recheck visibility when a visitor returns; never persist profile data
    // in localStorage or fall back to sample people when the API is offline.
    const refresh = () => { if (document.visibilityState === 'visible') void loadPage(); };
    window.addEventListener('focus', refresh);
    document.addEventListener('visibilitychange', refresh);
    return () => {
      activeRequest.current?.abort();
      window.removeEventListener('focus', refresh);
      document.removeEventListener('visibilitychange', refresh);
    };
  }, [loadPage]);
  useEffect(() => { setVisibleCount(12); }, [searchQuery, selectedRole]);

  const filteredBuilders = useMemo(() => builders.filter(p => matchesBuilder(p, searchQuery, selectedRole)), [builders, searchQuery, selectedRole]);
  const visibleBuilders = filteredBuilders.slice(0, visibleCount);
  const hasMore = visibleCount < filteredBuilders.length || !!nextCursor;
  const showMore = () => {
    if (visibleCount < filteredBuilders.length) setVisibleCount(count => count + 12);
    else if (nextCursor) void loadPage(nextCursor, true);
  };

  return (
    <section id="builders" aria-labelledby="builders-heading" itemScope itemType="https://schema.org/ItemList"
      className="py-24 relative overflow-hidden z-20 border-t border-white/5">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#00C2FF]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#FBE618]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00C2FF]/10 border border-[#00C2FF]/30 text-[#00C2FF] text-xs font-mono font-bold tracking-wider uppercase">
            <Users className="w-3.5 h-3.5" /><span>People building on LINKUP</span>
          </div>
          <h2 id="builders-heading" itemProp="name" className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            Meet the Builders on <span className="text-[#FBE618]">LINKUP</span>
          </h2>
          <p itemProp="description" className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Real public profiles from the LINKUP community. Explore their skills, see what they’re building, and find your next collaborator.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-10 space-y-4">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input type="search" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} aria-label="Search loaded builders"
              placeholder="Search loaded builders by name, skill, role, company, or location..."
              className="w-full bg-[#0d121f]/90 border border-white/10 rounded-2xl pl-12 pr-16 py-3.5 text-white placeholder-slate-400 focus:outline-none focus:border-[#FBE618]/60 focus:ring-1 focus:ring-[#FBE618]/40 transition-all text-sm font-medium shadow-xl" />
            {searchQuery && <button onClick={() => setSearchQuery('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-400 hover:text-white">Clear</button>}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1" aria-label="Filter by role">
            {roleCategories.map(role => <button key={role} onClick={() => setSelectedRole(role)} aria-pressed={selectedRole === role}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${selectedRole === role ? 'bg-[#FBE618] text-black shadow-[0_0_15px_rgba(251,230,24,0.3)]' : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/10'}`}>
              {role}
            </button>)}
          </div>
          <p className="text-xs text-slate-400 text-center" role="status" aria-live="polite">
            {loading ? 'Loading public LINKUP profiles…' : `Showing ${visibleBuilders.length} of ${filteredBuilders.length} matching loaded profiles.`}
            {!loading && nextCursor ? ' Load more to explore additional members.' : ''}
          </p>
        </div>

        {error && <div role="alert" className="max-w-3xl mx-auto mb-8 p-5 rounded-2xl border border-amber-300/20 bg-amber-300/5 text-sm text-slate-200 text-center">
          <p>{error}</p>
          <button onClick={() => void loadPage()} className="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-xl text-black bg-[#FBE618] font-semibold"><RefreshCw className="w-4 h-4" />Try again</button>
          <a href="/app/builders" className="inline-block ml-4 underline">Browse public directory</a>
        </div>}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" aria-busy={loading}>
          {loading && builders.length === 0 && Array.from({ length: 8 }, (_, i) => <div key={`loading-${i}`} aria-hidden="true" className="rounded-3xl border border-white/10 p-5 bg-white/[0.03] animate-pulse h-72"><div className="h-14 w-14 bg-white/10 rounded-2xl mb-6" /><div className="h-4 bg-white/10 rounded w-3/4 mb-3" /><div className="h-3 bg-white/5 rounded w-full" /></div>)}
          <AnimatePresence>
            {visibleBuilders.map((builder, idx) => <motion.article key={builder.uid} data-member-id={builder.uid} layout
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.3, delay: Math.min(idx, 5) * 0.04 }}
              itemProp="itemListElement" itemScope itemType="https://schema.org/Person"
              className="glass-panel rounded-3xl border border-white/10 p-5 bg-[#0a0e1a]/80 hover:border-[#FBE618]/40 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between group shadow-xl">
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="relative w-14 h-14 rounded-2xl border border-white/10 bg-[#FBE618]/10 text-[#FBE618] flex items-center justify-center font-bold text-xl overflow-hidden shrink-0">
                    <span aria-hidden="true">{initials(builder.name)}</span>
                    {builder.image && <img src={builder.image} alt={builder.name} itemProp="image" width="56" height="56" loading="lazy" referrerPolicy="no-referrer"
                      onError={event => { event.currentTarget.style.display = 'none'; }} className="absolute inset-0 w-full h-full object-cover" />}
                  </div>
                  <span className="text-[10px] font-mono text-[#00C2FF] bg-[#00C2FF]/10 border border-[#00C2FF]/20 px-2 py-1 rounded-full">LINKUP member</span>
                </div>
                <div className="space-y-1 mb-3">
                  <h3 itemProp="name" className="text-lg font-bold text-white font-display group-hover:text-[#FBE618] transition-colors">
                    <a itemProp="url" href={builder.url}>{builder.name}</a>
                  </h3>
                  {builder.occupation && <p itemProp="jobTitle" className="text-xs font-semibold text-[#00C2FF] line-clamp-2">{builder.occupation}</p>}
                  {builder.company && <p className="text-xs text-slate-300 line-clamp-1">{builder.company}</p>}
                  {builder.location && <div className="flex items-center gap-1 text-[11px] text-slate-400"><MapPin className="w-3 h-3 text-red-400 shrink-0" /><span>{builder.location}</span></div>}
                </div>
                {builder.bio && <p itemProp="description" className="text-xs text-slate-300 leading-relaxed line-clamp-3 mb-3">{builder.bio}</p>}
                {builder.lookingFor.length > 0 && <div className="mb-4 pt-2 border-t border-white/5"><span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#FBE618] block mb-1">Looking for</span><p className="text-[11px] text-slate-200 line-clamp-2">{builder.lookingFor.join(', ')}</p></div>}
                <div className="flex flex-wrap gap-1.5 mb-4">{builder.skills.slice(0, 6).map(tag => <span key={tag} itemProp="knowsAbout" className="text-[10px] font-mono bg-white/5 border border-white/10 px-2 py-0.5 rounded-md text-slate-300">{tag}</span>)}</div>
              </div>
              <a href={builder.url} className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-[#FBE618] hover:text-black text-white font-bold text-xs transition-all flex items-center justify-center gap-1.5 border border-white/10 hover:border-transparent group/btn shadow-md">
                <span>View LINKUP profile</span><ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
              </a>
            </motion.article>)}
          </AnimatePresence>
        </div>

        {!loading && !error && visibleBuilders.length === 0 && <p className="text-center text-slate-300 py-10">
          {builders.length ? 'No loaded profiles match those filters. Try another name or skill, or load more builders.' : 'No public profiles are available on this page yet.'}
        </p>}
        {hasMore && <div className="mt-9 text-center"><button onClick={showMore} disabled={loading} className="px-6 py-3 rounded-2xl border border-white/20 text-white hover:border-[#FBE618]/60 disabled:opacity-50 font-semibold text-sm">{loading ? 'Loading…' : 'Show more builders'}</button></div>}

        <div className="mt-14 p-6 sm:p-8 rounded-3xl glass-panel border border-white/10 bg-gradient-to-r from-[#FBE618]/10 via-[#00C2FF]/10 to-transparent flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl font-bold text-white font-display">Building something? Meet your next collaborator.</h3>
            <p className="text-xs sm:text-sm text-slate-300">Create a LINKUP profile and turn on Public Discovery to join the public directory.</p>
            <a href="/app/builders" className="inline-block text-xs text-[#FBE618] underline mt-2">Browse all public builder pages</a>
          </div>
          <a href="/app/landing" className="shrink-0 px-6 py-3.5 rounded-2xl bg-[#FBE618] hover:bg-[#fff056] text-black font-bold text-sm shadow-[0_0_25px_rgba(251,230,24,0.3)] transition-all hover:-translate-y-0.5">Create Your Builder Profile</a>
        </div>
      </div>
    </section>
  );
};
