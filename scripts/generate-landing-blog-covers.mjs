import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(root, 'public', 'images', 'landingblog');
fs.mkdirSync(outDir, { recursive: true });

const COVERS = [
  {
    file: 'burnout.webp',
    badge: 'SOLO RISK REPORT 01',
    accent: '#EF4444',
    glow: '#991B1B',
    line1: 'WHY SOLO FOUNDER',
    line2: 'BURNOUT KILLS',
    line3: 'STARTUPS EARLY',
    footer: 'LINKUP EDITORIAL JOURNAL  •  FOUNDER PSYCHOLOGY',
  },
  {
    file: 'distribution.webp',
    badge: 'SOLO RISK REPORT 02',
    accent: '#FBE618',
    glow: '#854D0E',
    line1: 'GREAT CODE WITH',
    line2: 'ZERO DISTRIBUTION',
    line3: 'DIES IN SILENCE',
    footer: 'LINKUP EDITORIAL JOURNAL  •  GROWTH AND REVENUE',
  },
  {
    file: 'blindspots.webp',
    badge: 'SOLO RISK REPORT 03',
    accent: '#00C2FF',
    glow: '#075985',
    line1: 'THE SOLO ECHO',
    line2: 'CHAMBER TRAP',
    line3: 'NOBODY WARNS ABOUT',
    footer: 'LINKUP EDITORIAL JOURNAL  •  PRODUCT EXECUTION',
  },
  {
    file: 'investors.webp',
    badge: 'SOLO RISK REPORT 04',
    accent: '#F97316',
    glow: '#9A3412',
    line1: 'WHY INVESTORS',
    line2: 'FEAR SINGLE POINT',
    line3: 'OF FAILURE TEAMS',
    footer: 'LINKUP EDITORIAL JOURNAL  •  VENTURE CAPITAL',
  },
  {
    file: 'velocity.webp',
    badge: 'SOLO RISK REPORT 05',
    accent: '#10B981',
    glow: '#065F46',
    line1: 'TWO FOUNDERS SHIP',
    line2: 'TWICE AS FAST AND',
    line3: 'TAKE YOUR MARKET',
    footer: 'LINKUP EDITORIAL JOURNAL  •  STARTUP VELOCITY',
  },
];

for (const c of COVERS) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="675" viewBox="0 0 1200 675">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#05070D"/>
      <stop offset="55%" stop-color="#0B0F1C"/>
      <stop offset="100%" stop-color="#05070D"/>
    </linearGradient>
    <radialGradient id="orbA" cx="0.82" cy="0.24" r="0.48">
      <stop offset="0%" stop-color="${c.accent}" stop-opacity="0.32"/>
      <stop offset="60%" stop-color="${c.glow}" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#05070D" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="orbB" cx="0.14" cy="0.88" r="0.45">
      <stop offset="0%" stop-color="#FBE618" stop-opacity="0.16"/>
      <stop offset="100%" stop-color="#05070D" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
      <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#FFFFFF" stroke-opacity="0.045" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="1200" height="675" fill="url(#bg)"/>
  <rect width="1200" height="675" fill="url(#grid)"/>
  <rect width="1200" height="675" fill="url(#orbA)"/>
  <rect width="1200" height="675" fill="url(#orbB)"/>

  <rect x="44" y="40" width="1112" height="595" rx="28" fill="none" stroke="${c.accent}" stroke-opacity="0.35" stroke-width="2"/>

  <rect x="88" y="88" width="290" height="44" rx="22" fill="${c.accent}" fill-opacity="0.16" stroke="${c.accent}" stroke-opacity="0.65" stroke-width="1.5"/>
  <text x="233" y="116" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="16" letter-spacing="2" fill="#FFFFFF">${c.badge}</text>

  <text x="88" y="246" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="72" letter-spacing="-1" fill="#FFFFFF">${c.line1}</text>
  <text x="88" y="338" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="72" letter-spacing="-1" fill="${c.accent}">${c.line2}</text>
  <text x="88" y="430" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="72" letter-spacing="-1" fill="#FFFFFF">${c.line3}</text>

  <line x1="88" y1="510" x2="1112" y2="510" stroke="#FFFFFF" stroke-opacity="0.12" stroke-width="1.5"/>
  <rect x="88" y="542" width="118" height="38" rx="10" fill="#FBE618"/>
  <text x="147" y="568" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="20" fill="#05070D">LINKUP</text>
  <text x="228" y="567" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="17" letter-spacing="1.4" fill="#CBD5E1">${c.footer}</text>
</svg>`;

  const target = path.join(outDir, c.file);
  await sharp(Buffer.from(svg)).webp({ quality: 90 }).toFile(target);
  const meta = await sharp(target).metadata();
  console.log(`Generated ${c.file}: ${meta.width}x${meta.height} (${meta.format})`);
}
