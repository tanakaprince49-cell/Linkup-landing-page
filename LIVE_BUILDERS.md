# Real LINKUP members on the marketing site

`BuilderDirectory` fetches public members from the same-origin `/app/api/publicSeo?mode=members` feed in the LINKUP repository. The marketing project does not download private Firestore documents, need Firebase service-account credentials, or embed a static list of members at build time.

- Real fields: name, profile photo (or initials), occupation, company, coarse location, bio, skills and collaboration interests.
- Direct individual profile links: `/app/p/{uid}`.
- No invented match percentage, REP score, experience, verified badge, or stock-photo replacement.
- Public eligibility and privacy are checked server-side against current source accounts, including stale discovery-index rows.
- Load 40 discovery candidates at a time, show 12 matching cards at a time, then fetch the next cursor. Search is explicitly scoped to loaded profiles, not advertised as global server-side search.
- Re-fetch on mount and return to the tab. Do not persist profile data in browser storage or substitute demo members during outages.
- Loading skeletons, empty results, retry/error messaging, timeout/cancellation, deduplication and broken-photo fallback are included.

The old `MOCK_BUILDERS` fixture and obsolete fake-score builder type were removed. Other marketing feature/testimonial fixtures were not changed by this request.

Deploy the LINKUP feed first, verify JSON response/privacy headers, then deploy this marketing build. Existing app/payment proxy rules remain unchanged.

Checks: `npm run lint`, `npm run test:routing`, `npm run test:builders`, `npm run build`. Browser acceptance should compare rendered `data-member-id` cards with the live feed, test search/filters/load-more and an individual profile link, then check that a simulated feed outage displays an error rather than sample people.
