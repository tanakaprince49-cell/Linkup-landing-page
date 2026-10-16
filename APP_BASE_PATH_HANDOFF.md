# APP_BASE_PATH_HANDOFF.md: Web App /app Subpath Integration

> **16 October 2026 update:** the app-side base-path work and profile SEO are now deployed. The blocker observations below are historical, not a current status report. See `ROUTING_RELEASE.md` for the trailing-slash fix, verification commands and current routing contract. Both `/app` and `/app/` must target the upstream **`/index.html`**, not `/`, to avoid upstream root normalization escaping the proxy into the marketing fallback.


> **Status:** **PREPARED (BLOCKED BY APP-SIDE CONTRACT)**  
> **Target Production Domain:** `https://www.linkupbuild.com`  
> **Landing Page Repo:** `https://github.com/tanakaprince49-cell/Linkup-landing-page`  
> **Web App Repo:** `https://github.com/tanakaprince49-cell/LINKUP` (`Expo / React Native Web`)  
> **Current Web App Upstream:** `https://linkup-muqu.vercel.app`  

---

## 1. Executive Summary & Routing Architecture

The landing page project (`linkupbuild.com`) has been configured with an external reverse proxy in `vercel.json` and `public/_redirects`:

```json
{
  "rewrites": [
    {
      "source": "/app",
      "destination": "https://linkup-muqu.vercel.app/"
    },
    {
      "source": "/app/:path*",
      "destination": "https://linkup-muqu.vercel.app/:path*"
    },
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### How the Proxy Works
1. Requests to `https://www.linkupbuild.com/app` are proxied to `https://linkup-muqu.vercel.app/`.
2. Requests to `https://www.linkupbuild.com/app/:path*` (e.g. `/app/landing`, `/app/login`, `/app/_expo/...`) strip `/app` and are proxied to `https://linkup-muqu.vercel.app/:path*`.
3. The custom domain `www.linkupbuild.com` remains visible in the browser address bar.
4. All marketing routes (`/`, `/features`, `/campaigns`, `/founder`, `/about`, `/faq`) fall through to the landing page SPA without interference.

---

## 2. Upstream Audit & Active Blockers

Direct HTTP inspection of the live upstream `https://linkup-muqu.vercel.app` revealed that the web app is **strictly root-deployed** and has not yet implemented base path awareness.

### 🔴 [BLOCKER 1] Hardcoded Root Asset & Script URLs in HTML
* **Inspection Finding:**
  When requesting `https://linkup-muqu.vercel.app/`, the HTML output contains root-absolute script and asset tags:
  ```html
  <link rel="icon" href="/favicon.ico?v=cat1"/>
  <link rel="manifest" href="/manifest.webmanifest" />
  <link rel="apple-touch-icon" href="/icons/icon-192.png?v=cat1" />
  <script src="/_expo/static/js/web/__expo-metro-runtime-...js"></script>
  <script src="/_expo/static/js/web/__common-...js"></script>
  <script src="/_expo/static/js/web/index-...js"></script>
  ```
* **Failure Impact:**
  When a user visits `https://www.linkupbuild.com/app`, their browser receives this HTML and attempts to load `https://www.linkupbuild.com/_expo/static/js/...`. Because `_expo` is at root (not `/app`), the request is caught by the landing page's catch-all `/(.*) -> /index.html`, returning HTML with HTTP 200 instead of JavaScript. The browser throws `SyntaxError: Unexpected token '<'` and displays a blank screen.
* **Required App Fix:**
  In the `LINKUP` Expo project (`app.json` or `metro.config.js`):
  ```json
  {
    "expo": {
      "experiments": {
        "baseUrl": "/app"
      }
    }
  }
  ```
  *(Or configure Metro `output.publicPath: "/app/"` for web exports).*
  This causes all generated HTML `<script>` and `<link>` tags to be emitted as `/app/_expo/...`, `/app/manifest.webmanifest`, etc. The proxy will then seamlessly match `/app/:path*` and route them to the upstream.

---

### 🔴 [BLOCKER 2] React Navigation Base Path & Internal Route Escaping
* **Inspection Finding:**
  The upstream JS bundle contains:
  ```js
  prefixes: [Linking.createURL('/'), 'linkup://']
  ```
* **Failure Impact:**
  React Navigation assumes the browser root `/` is the app base. Once loaded, any navigation action (e.g. going to `Login`, `Profile`, or `Chat`) pushes `/landing`, `/login`, or `/profile` to the browser history instead of `/app/landing`, `/app/login`, or `/app/profile`.
  If a user then refreshes the page at `www.linkupbuild.com/login`, the request hits the marketing landing page instead of the app.
* **Required App Fix:**
  In the app's `NavigationContainer` linking configuration:
  ```ts
  const linking = {
    prefixes: [
      'https://www.linkupbuild.com/app',
      'https://linkupbuild.com/app',
      'https://linkup-muqu.vercel.app',
      'linkup://',
    ],
    config: {
      // Ensure all screen path mappings are relative to the /app prefix
    },
  };
  ```

---

### 🔴 [BLOCKER 3] PWA Service Worker Scope Hijacking
* **Inspection Finding:**
  The live upstream registers `service-worker.js` with root scope:
  ```js
  // Current registration in HTML:
  navigator.serviceWorker.register('/service-worker.js')

  // Inside service-worker.js:
  const CORE_ASSETS = ['/', '/index.html', ...];
  if (request.mode === 'navigate') {
    // Intercepts all navigate requests on self.location.origin
  }
  ```
* **Failure Impact:**
  If registered from `www.linkupbuild.com`, a service worker with scope `/` intercepts navigation to `https://www.linkupbuild.com/`, caching the app's `/index.html` and taking over the marketing homepage.
* **Required App Fix:**
  1. Scope the service worker exclusively to `/app/`:
     ```js
     if ('serviceWorker' in navigator) {
       navigator.serviceWorker.register('/app/service-worker.js', { scope: '/app/' });
     }
     ```
  2. Inside `service-worker.js`, ensure fetch event navigation handlers only intercept requests under the `/app/` path:
     ```js
     if (request.mode === 'navigate' && url.pathname.startsWith('/app')) {
       // handle app offline fallback
     }
     ```

---

### 🔴 [BLOCKER 4] PWA Web Manifest Scope and start_url
* **Inspection Finding:**
  `https://linkup-muqu.vercel.app/manifest.webmanifest` returns:
  ```json
  {
    "id": "/",
    "start_url": "/",
    "scope": "/"
  }
  ```
* **Required App Fix:**
  Update the web manifest for web builds so that:
  ```json
  {
    "id": "/app/",
    "start_url": "/app/landing",
    "scope": "/app/"
  }
  ```

---

### 🔴 [BLOCKER 5] Firebase Authentication Authorized Domains
* **Inspection Finding:**
  The web app uses Firebase project `linkup-e0906.firebaseapp.com`.
* **Action Required in Firebase Console:**
  1. Open [Firebase Console](https://console.firebase.google.com/) → Select project `linkup-e0906`.
  2. Navigate to **Authentication** → **Settings** → **Authorized Domains**.
  3. Add:
     - `linkupbuild.com`
     - `www.linkupbuild.com`
  4. **Do NOT** change `authDomain` to include `/app`. It must remain `linkup-e0906.firebaseapp.com`.

---

## 3. Landing Page Production Safety & CTA Switch Plan

As instructed, **production CTAs on the landing page must not be switched to `/app/landing` until the app-side blockers above are deployed**, preventing real users from encountering a broken white-screen experience.

### Pre-switch (Current Safe State):
CTAs point to the verified working URL: `https://linkup-muqu.vercel.app/landing`.

### Post-verification Switch Patch:
Once the app repository deploys `baseUrl: "/app"`, apply this 4-line change across the landing page:

```diff
--- a/src/components/Hero.tsx
+++ b/src/components/Hero.tsx
@@ -86,3 +86,3 @@
-                  href="https://linkup-muqu.vercel.app/landing"
+                  href="/app/landing"

--- a/src/components/BottomCTA.tsx
+++ b/src/components/BottomCTA.tsx
@@ -39,3 +39,3 @@
-                  href="https://linkup-muqu.vercel.app/landing"
+                  href="/app/landing"

--- a/src/components/LinkupAgentFeature.tsx
+++ b/src/components/LinkupAgentFeature.tsx
@@ -340,3 +340,3 @@
-              href="https://linkup-muqu.vercel.app/landing"
+              href="/app/landing"
@@ -453,3 +453,3 @@
-                href="https://linkup-muqu.vercel.app/landing"
+                href="/app/landing"
```

---

## 4. Rollback Procedure

If at any point `/app` routing causes unintended behavior:
1. Revert `vercel.json` rewrites back to the single SPA catch-all:
   ```json
   {
     "rewrites": [
       {
         "source": "/(.*)",
         "destination": "/index.html"
       }
     ]
   }
   ```
2. Revert `public/_redirects`:
   ```
   /*    /index.html   200
   ```
3. Deploy to Vercel. Immediate propagation restores 100% landing-only routing.
