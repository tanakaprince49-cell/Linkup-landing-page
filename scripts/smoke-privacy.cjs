// Browser regression against the production build with local Vercel-style rewrites.
// No Google sign-in, production writes, payment calls, or actual analytics calls.
const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const assert = require('node:assert/strict');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE_PATH || 'playwright');
const root = path.resolve(__dirname, '..');
const dist = path.join(root, 'dist');
const config = JSON.parse(fs.readFileSync(path.join(root, 'vercel.json'), 'utf8'));
const types = {'.html':'text/html', '.js':'application/javascript', '.css':'text/css', '.png':'image/png', '.jpg':'image/jpeg', '.svg':'image/svg+xml', '.ico':'image/x-icon', '.webp':'image/webp', '.woff2':'font/woff2'};
function fileAt(p) {
  const f = path.resolve(dist, '.' + p);
  return f.startsWith(dist + path.sep) && fs.existsSync(f) && fs.statSync(f).isFile() ? f : null;
}
const server = http.createServer((req, res) => {
  const url = new URL(req.url, 'http://test');
  if (url.pathname.startsWith('/app/api/')) {
    res.writeHead(200, {'Content-Type':'application/json'});
    res.end(JSON.stringify({members:[], profiles:[], nextCursor:null, hasMore:false})); return;
  }
  let file = fileAt(url.pathname);
  if (!file) {
    const rule = config.rewrites.find(r => r.source === url.pathname);
    file = fileAt(rule?.destination || '/index.html');
  }
  if (!file) { res.writeHead(404); res.end(); return; }
  res.writeHead(200, {'Content-Type': types[path.extname(file)] || 'application/octet-stream'});
  fs.createReadStream(file).pipe(res);
});
(async () => {
  let browser;
  try {
    await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
    const origin = `http://127.0.0.1:${server.address().port}`;
    browser = await chromium.launch({headless:true, args:['--no-sandbox']});
    for (const width of [1280, 390]) {
      const context = await browser.newContext({javaScriptEnabled:false, viewport:{width,height:900}});
      const page = await context.newPage();
      for (const route of ['/privacy','/privacy-policy','/privacy.html']) {
        const response = await page.goto(origin + route);
        assert.equal(response.status(), 200);
        assert.equal(await page.locator('h1').innerText(), 'Privacy Policy');
        assert.equal(await page.locator('section[id]').count(), 15);
        assert.equal(await page.locator('script, iframe').count(), 0);
        assert.equal(await page.locator('a[href="mailto:tanakaprince49@gmail.com"]').count(), 1);
        assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), `overflow at ${width}`);
      }
      await context.close();
      console.log(`PASS raw privacy HTML and aliases, no JavaScript, width ${width}`);
    }
    const context = await browser.newContext({viewport:{width:1280,height:900}});
    let analyticsRequests = 0;
    await context.route('**/*', route => {
      const u = new URL(route.request().url());
      if (u.pathname.includes('/_vercel/insights/')) {
        analyticsRequests++;
        return route.fulfill({status:200, contentType:'application/javascript',body:'window.__analyticsScriptLoaded = true;'});
      }
      if (u.origin !== origin) return route.abort();
      return route.continue();
    });
    const page = await context.newPage();
    await page.goto(origin + '/#privacy-choices');
    await page.getByRole('button', {name:'Decline analytics',exact:true}).click();
    assert.equal(await page.evaluate(() => localStorage.getItem('linkup_cookie_consent')), 'declined');
    assert.equal(analyticsRequests, 0);
    await page.getByRole('button', {name:'Privacy choices',exact:true}).click();
    await page.getByRole('button', {name:'Accept analytics',exact:true}).click();
    await page.waitForFunction(() => window.__analyticsScriptLoaded === true);
    assert.ok(analyticsRequests > 0);
    const requestsAfterAcceptance = analyticsRequests;
    await page.getByRole('button', {name:'Privacy choices',exact:true}).click();
    await Promise.all([
      page.waitForEvent('load'),
      page.getByRole('button', {name:'Decline analytics',exact:true}).click(),
    ]);
    assert.equal(await page.evaluate(() => localStorage.getItem('linkup_cookie_consent')), 'declined');
    assert.equal(await page.evaluate(() => window.__analyticsScriptLoaded), undefined);
    assert.equal(analyticsRequests, requestsAfterAcceptance);
    assert.equal(await page.getByRole('dialog').count(), 0);
    await page.getByRole('link', {name:'Privacy Policy',exact:true}).first().click();
    await page.waitForURL(origin + '/privacy');
    assert.equal(await page.locator('h1').innerText(), 'Privacy Policy');
    assert.equal(await page.locator('script').count(), 0);
    console.log('PASS actual footer navigation; optional analytics blocked until acceptance and removed on decline/reload');
    await context.close();
  } finally {
    if (browser) await browser.close();
    await new Promise(resolve => {server.close(resolve); server.closeAllConnections();});
  }
})().catch(error => {console.error(error); process.exitCode = 1;});
