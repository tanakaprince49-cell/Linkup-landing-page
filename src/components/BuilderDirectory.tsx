import React, { useState, useMemo, useEffect, useCallback, useRef } from 'react';
import { Search, Users, RefreshCw } from 'lucide-react';
import { fetchMemberPage, mergeBuilders, matchesBuilder, type PublicBuilder } from '../lib/publicBuilders';
const LazyInteractiveEarthSearch = React.lazy(() => import('./InteractiveEarthSearch').then(module => ({ default: module.InteractiveEarthSearch })));

const roleCategories = ['All', 'AI / ML', 'Engineering', 'Product / CEO', 'Design', 'Fintech / BioTech'];

export const BuilderDirectory: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState('All');
  const [builders, setBuilders] = useState<PublicBuilder[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const activeRequest = useRef<AbortController | null>(null);
  const earthAnchorRef = useRef<HTMLDivElement>(null);
  const [earthInView, setEarthInView] = useState(false);

  const loadBuilders = useCallback(async () => {
    activeRequest.current?.abort();
    const controller = new AbortController();
    activeRequest.current = controller;
    setLoading(true);
    setError('');
    setBuilders([]);
    try {
      const page = await fetchMemberPage('', controller.signal);
      if (controller.signal.aborted || activeRequest.current !== controller) return;
      setBuilders(mergeBuilders([], page.profiles));
    } catch {
      if (!controller.signal.aborted && activeRequest.current === controller) {
        setError('We couldn’t load public profiles right now. Please try again, or browse the public directory.');
      }
    } finally {
      if (!controller.signal.aborted && activeRequest.current === controller) setLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadBuilders();
    // Recheck visibility when a visitor returns; never persist profile data
    // in localStorage or fall back to sample people when the API is offline.
    const refresh = () => { if (document.visibilityState === 'visible') void loadBuilders(); };
    window.addEventListener('focus', refresh);
    document.addEventListener('visibilitychange', refresh);
    return () => {
      activeRequest.current?.abort();
      window.removeEventListener('focus', refresh);
      document.removeEventListener('visibilitychange', refresh);
    };
  }, [loadBuilders]);

  useEffect(() => {
    const node = earthAnchorRef.current;
    if (!node) return;
    if (!('IntersectionObserver' in window)) { setEarthInView(true); return; }
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        setEarthInView(true);
        observer.disconnect();
      }
    }, { rootMargin: '420px 0px' });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const filteredBuilders = useMemo(() => builders.filter(p => matchesBuilder(p, searchQuery, selectedRole)), [builders, searchQuery, selectedRole]);

  return (
    <section id="builders" aria-labelledby="builders-heading"
      className="py-24 relative overflow-hidden z-20 border-t border-white/5">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#00C2FF]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#FBE618]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00C2FF]/10 border border-[#00C2FF]/30 text-[#00C2FF] text-xs font-mono font-bold tracking-wider uppercase">
            <Users className="w-3.5 h-3.5" /><span>People building on LINKUP</span>
          </div>
          <h2 id="builders-heading" className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            Meet the Builders on <span className="text-[#FBE618]">LINKUP</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Search the LINKUP community on an interactive, real-world globe. Spin the Earth, zoom in, and open public builders by location.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-10 space-y-4">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input type="search" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} aria-label="Search loaded builders"
              placeholder="Search loaded builders by name, skill, role, company, or location..."
              className="w-full bg-[#0d121f]/90 border border-white/10 rounded-2xl pl-12 pr-16 py-3.5 text-white placeholder-slate-400 focus:outline-none focus:border-[#FBE618]/60 focus:ring-1 focus:ring-[#FBE618]/40 transition-all text-sm font-medium shadow-xl" />
            {searchQuery && <button onClick={() => setSearchQuery('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-400 hover:text-white no-water-btn">Clear</button>}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1" aria-label="Filter by role">
            {roleCategories.map(role => <button key={role} onClick={() => setSelectedRole(role)} aria-pressed={selectedRole === role}
              className={`tab-pill px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${selectedRole === role ? 'bg-white/20 text-white border border-white/40 shadow-[0_0_15px_rgba(255,255,255,0.2)]' : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/10'}`}>
              {role}
            </button>)}
          </div>
          <p className="text-xs text-slate-400 text-center" role="status" aria-live="polite">
            {loading ? 'Loading public LINKUP profiles…' : error ? 'Public profiles are currently unavailable.' : `Showing ${filteredBuilders.length} of ${builders.length} matching loaded profiles.`}
          </p>
        </div>

        {error && <div role="alert" className="max-w-3xl mx-auto mb-8 p-5 rounded-2xl border border-amber-300/20 bg-amber-300/5 text-sm text-slate-200 text-center">
          <p>{error}</p>
          <button onClick={() => void loadBuilders()} className="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-xl text-white water-btn font-semibold"><RefreshCw className="w-4 h-4" />Try again</button>
          <a href="/app/builders" className="inline-block ml-4 underline">Browse public directory</a>
        </div>}

        <div ref={earthAnchorRef}>
          {earthInView ? (
            <React.Suspense fallback={<div role="status" className="mx-auto grid min-h-[420px] place-items-center rounded-[30px] border border-white/10 bg-[#07111d] text-sm text-slate-300">Loading the real LINKUP member globe…</div>}>
              <LazyInteractiveEarthSearch members={filteredBuilders} />
            </React.Suspense>
          ) : (
            <div aria-hidden="true" className="mx-auto min-h-[390px] rounded-[30px] border border-white/10 bg-[radial-gradient(ellipse_at_50%_55%,#10283d_0%,#08111d_55%,#04070c_100%)]" />
          )}
        </div>
      </div>
    </section>
  );
};
