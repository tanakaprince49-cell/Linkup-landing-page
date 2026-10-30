import { useEffect, useState } from 'react';
import { fetchBuilderCount, type BuilderCount } from './publicBuilders';

const KEY = 'linkup-builder-count-v1';
const TTL_MS = 5 * 60 * 1000; // a new signup shows up within minutes
type State = { count: number | null; complete: boolean };

// One cached number (not profile data) shared across components and tabs.
function readCache(): (State & { at: number }) | null {
  try {
    const raw = sessionStorage.getItem(KEY);
    if (!raw) return null;
    const cached = JSON.parse(raw);
    if (typeof cached?.count === 'number' && typeof cached?.at === 'number' && Date.now() - cached.at < TTL_MS) return cached;
  } catch { /* corrupted cache: refetch below */ }
  return null;
}

// Single in-flight walk shared by every mounted counter.
let inflight: Promise<BuilderCount> | null = null;
function loadShared(): Promise<BuilderCount> {
  if (!inflight) {
    const started = fetchBuilderCount().then(result => {
      try { sessionStorage.setItem(KEY, JSON.stringify({ count: result.count, complete: result.complete, at: Date.now() })); } catch { /* private mode */ }
      return result;
    });
    inflight = started;
    const clear = () => { if (inflight === started) inflight = null; };
    void started.then(clear, clear);
  }
  return inflight;
}

export function useBuilderCount(): State {
  const [state, setState] = useState<State>(() => {
    const cached = readCache();
    return cached ? { count: cached.count, complete: !!cached.complete } : { count: null, complete: true };
  });
  useEffect(() => {
    let alive = true;
    if (readCache()) { const cached = readCache(); if (cached && alive) setState({ count: cached.count, complete: !!cached.complete }); }
    else void loadShared().then(result => { if (alive) setState({ count: result.count, complete: result.complete }); }, () => { /* keep loading dots, never invent */ });
    const refresh = () => { if (document.visibilityState === 'visible') void loadShared().then(result => { if (alive) setState({ count: result.count, complete: result.complete }); }, () => {}); };
    document.addEventListener('visibilitychange', refresh);
    return () => { alive = false; document.removeEventListener('visibilitychange', refresh); };
  }, []);
  return state;
}
