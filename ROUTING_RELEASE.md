# App proxy and SEO integration — 16 October 2026

## Routing contract

- Both `/app` and `/app/` explicitly proxy to `https://linkup-muqu.vercel.app/index.html` before the wildcard rule. Using an upstream `/` target previously served the marketing SPA at the trailing-slash entrance.
- All other `/app/:path*` requests still strip `/app` once and proxy to the same live app project. This includes authenticated screens, JS chunks, APIs, PWA files, profile HTML and sitemaps.
- No app deployment is copied into this marketing repository. Each successful LINKUP app production deployment is picked up through the proxy; this repository remains a separate marketing deployment.
- The marketing root, assets, forms, canonical domain, DNS and other route policies are not moved or replaced.
- `public/_redirects` is kept consistent for documentation/alternate-host use, but Vercel uses `vercel.json`.

## SEO discovery

The root robots file now advertises both the existing marketing sitemap and `https://www.linkupbuild.com/app/sitemap.xml`. The footer links to `/app/builders`, and that directory is included in the existing sitemap copies. Google Search Console ownership/submission is separate and was not performed by these source changes.

## Payments

Keep Payonify's existing registered webhook at `https://linkup-muqu.vercel.app/api/payonifyWebhook`; no provider credentials or registrations are changed. `/app/api/payonifyWebhook` remains a proxy alias. In the LINKUP app repository, checkout guards reject cross-origin and marketing-root return overrides so pending payment references/Firebase sessions stay on the initiating origin. Signed provider delivery and completed checkout fulfillment require a separate end-to-end test.

## Checks

```sh
npm ci --no-audit --no-fund
npm run lint
npm run build # includes routing regressions before Vite export
```

After deployment inspect actual response HTML, not just HTTP 200, for `/app`, `/app/`, `/app/landing` and `/app/login`. All must include the same `/app/_expo/` entry scripts and app build marker as the original app origin; they must not return the marketing `/assets/index-*.js` entry. Confirm `/` still returns the marketing page. Check API handlers using safe unauthenticated requests only (GET webhook -> 405; unauthenticated checkout/status POST -> 401), PWA files and sitemap response types.
