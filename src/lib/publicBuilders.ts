export type PublicBuilder = {
  uid: string;
  name: string;
  occupation: string;
  company: string;
  location: string;
  bio: string;
  skills: string[];
  lookingFor: string[];
  image: string;
  url: string;
};
export const MEMBER_FEED = '/app/api/publicSeo?mode=members';
const text = (v: unknown, cap = 700) => typeof v === 'string' ? v.trim().slice(0, cap) : '';
const list = (v: unknown, cap = 20): string[] => Array.isArray(v) ? [...new Set(v.slice(0, cap).map(s => text(s, 80)).filter(Boolean))] : [];
const validId = (v: unknown): v is string => typeof v === 'string' && /^[A-Za-z0-9_-]{1,128}$/.test(v);
export function publicImage(v: unknown): string {
  try { const url = new URL(text(v, 2048)); return url.protocol === 'https:' && !url.username && !url.password ? url.href : ''; } catch { return ''; }
}
export function parseMemberPage(data: unknown): { profiles: PublicBuilder[]; nextCursor: string | null } {
  if (!data || typeof data !== 'object' || !Array.isArray((data as any).profiles)) throw new Error('Invalid member response');
  const page = data as { profiles: unknown[]; nextCursor?: unknown };
  if (page.nextCursor != null && !validId(page.nextCursor)) throw new Error('Invalid member cursor');
  const profiles: PublicBuilder[] = [];
  for (const raw of page.profiles.slice(0, 40)) {
    if (!raw || typeof raw !== 'object') continue;
    const p = raw as Record<string, unknown>;
    if (!validId(p.uid) || /^(?:bot-|demo-)/.test(p.uid) || !text(p.name, 100)) continue;
    profiles.push({ uid: p.uid, name: text(p.name, 100), occupation: text(p.occupation, 100),
      company: text(p.company, 120), location: text(p.location, 180), bio: text(p.bio),
      skills: list(p.skills), lookingFor: list(p.lookingFor, 16), image: publicImage(p.image),
      // Build trusted internal links rather than accepting URLs from data.
      url: `/app/p/${encodeURIComponent(p.uid)}` });
  }
  return { profiles: mergeBuilders([], profiles), nextCursor: page.nextCursor as string || null };
}
export async function fetchMemberPage(cursor = '', signal?: AbortSignal) {
  if (cursor && !validId(cursor)) throw new Error('Invalid member cursor');
  const controller = new AbortController();
  const abort = () => controller.abort();
  signal?.addEventListener('abort', abort, { once: true });
  if (signal?.aborted) abort();
  const timeout = setTimeout(abort, 15000);
  try {
    const response = await fetch(MEMBER_FEED + (cursor ? `&after=${encodeURIComponent(cursor)}` : ''), {
      headers: { Accept: 'application/json' }, cache: 'no-store', signal: controller.signal,
    });
    if (!response.ok) throw new Error('Public profiles are temporarily unavailable');
    if (!(response.headers.get('content-type') || '').includes('application/json')) throw new Error('Invalid member response');
    const page = parseMemberPage(await response.json());
    if (cursor && page.nextCursor === cursor) throw new Error('Member cursor did not advance');
    return page;
  } finally {
    clearTimeout(timeout);
    signal?.removeEventListener('abort', abort);
  }
}
export function mergeBuilders(previous: PublicBuilder[], incoming: PublicBuilder[]) {
  const byId = new Map(previous.map(p => [p.uid, p]));
  for (const p of incoming) byId.set(p.uid, p);
  return [...byId.values()];
}
export function matchesBuilder(p: PublicBuilder, query: string, role: string) {
  const content = [p.name, p.occupation, p.company, p.location, p.bio, ...p.skills, ...p.lookingFor].join(' ').toLowerCase();
  if (!content.includes(query.trim().toLowerCase())) return false;
  const professional = [p.occupation, ...p.skills].join(' ').toLowerCase();
  if (role === 'AI / ML') return /\b(?:ai|ml|llms?|pytorch|tensorflow|machine learning|data scien)/i.test(professional);
  if (role === 'Engineering') return /engineer|develop|full.?stack|front.?end|back.?end|systems|robotics|software|react|python|rust|typescript/i.test(professional);
  if (role === 'Product / CEO') return /founder|ceo|product|growth|gtm|market|entrepreneur/i.test(professional);
  if (role === 'Design') return /design|\bux\b|\bui\b|figma/i.test(professional);
  if (role === 'Fintech / BioTech') return /fintech|biotech|finance|payment|banking|health|bioinformatics/i.test(professional);
  return true;
}
export function initials(name: string) {
  return name.trim().split(/\s+/).slice(0, 2).map(s => s[0] || '').join('').toUpperCase();
}
