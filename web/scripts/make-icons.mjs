#!/usr/bin/env node
// Generates favicon PNGs, apple-touch-icon, logo-512 and the 1200×630 OG image with sharp.
// Run: node scripts/make-icons.mjs
import sharp from 'sharp';
import { readFileSync } from 'node:fs';

const root = new URL('../', import.meta.url);
import { fileURLToPath } from 'node:url';
const p = (rel) => fileURLToPath(new URL(rel, root));
const logo = readFileSync(p('src/assets/logo.svg'));
const whiteLogo = readFileSync(p('src/assets/white-logo.svg'));
const fav = readFileSync(p('public/favicon.svg'));

const square = async (size, out, bg = '#ffffff', pad = 0.12) => {
  const inner = Math.round(size * (1 - pad * 2));
  const img = await sharp(fav, { density: 512 }).resize(inner, inner, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
  await sharp({ create: { width: size, height: size, channels: 4, background: bg } })
    .composite([{ input: img, gravity: 'center' }])
    .png()
    .toFile(p(out));
};
await square(32, 'public/favicon-32.png', { r: 0, g: 0, b: 0, alpha: 0 }, 0);
await square(180, 'public/apple-touch-icon.png');
await square(192, 'public/icon-192.png');
await square(512, 'public/icon-512.png');

const logoPng = await sharp(logo, { density: 600 }).resize(900, null).png().toBuffer();
await sharp({ create: { width: 1024, height: 512, channels: 4, background: '#ffffff' } })
  .composite([{ input: await sharp(logoPng).resize(860, 440, { fit: 'contain', background: '#ffffff' }).toBuffer(), gravity: 'center' }])
  .png()
  .toFile(p('public/logo-512.png'));

// OG image: navy, white logo, owners cut-out, headline.
const owners = await sharp(p('src/assets/img/owners.png')).resize(null, 560).png().toBuffer();
const wl = await sharp(whiteLogo, { density: 600 }).resize(340, null).png().toBuffer();
const text = Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs><radialGradient id="g" cx="80%" cy="20%" r="70%"><stop offset="0" stop-color="#00adef" stop-opacity=".45"/><stop offset="1" stop-color="#0f2f5c" stop-opacity="0"/></radialGradient></defs>
  <rect width="1200" height="630" fill="#0f2f5c"/><rect width="1200" height="630" fill="url(#g)"/>
  <ellipse cx="930" cy="760" rx="300" ry="420" fill="#00adef" opacity=".9"/>
  <text x="70" y="300" font-family="Segoe UI, Arial, sans-serif" font-weight="800" font-size="54" fill="#ffffff">House &amp; Commercial</text>
  <text x="70" y="364" font-family="Segoe UI, Arial, sans-serif" font-weight="800" font-size="54" fill="#ffffff">Cleaning in Chesapeake, VA</text>
  <rect x="70" y="392" width="300" height="10" rx="5" fill="#00adef"/>
  <text x="70" y="470" font-family="Segoe UI, Arial, sans-serif" font-weight="600" font-size="30" fill="#cfe3f5">Free quote · (757) 305-8237</text>
</svg>`);
await sharp(text)
  .composite([
    { input: wl, top: 70, left: 70 },
    { input: owners, top: 70, left: 1200 - 440 - 30 },
  ])
  .jpeg({ quality: 84 })
  .toFile(p('public/og-default.jpg'));
console.log('icons ok');
