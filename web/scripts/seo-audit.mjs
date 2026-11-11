#!/usr/bin/env node
/**
 * Static SEO / integrity audit over the built site in dist/.
 * Run: npm run build && npm run audit:seo   (or: npm test)
 *
 * Checks every HTML page for: <title> (unique, length), meta description
 * (unique, length), exactly one <h1>, canonical (absolute, self-referencing),
 * meta robots, lang, viewport, valid JSON-LD, <img> alt attributes, heading
 * order, internal links that resolve to a built page/file, and sitemap vs.
 * noindex consistency. Exits 1 on errors; warnings don't fail the run.
 */
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const DIST = fileURLToPath(new URL('../dist/', import.meta.url));
if (!existsSync(DIST)) {
  console.error('dist/ not found. Run `npm run build` first.');
  process.exit(1);
}

const walk = (dir) =>
  readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });

const files = walk(DIST);
const htmlFiles = files.filter((f) => f.endsWith('.html'));
const urlPathOf = (file) => {
  const rel = relative(DIST, file).split(sep).join('/');
  if (rel === 'index.html') return '/';
  if (rel === '404.html') return '/404/';
  return '/' + rel.replace(/index\.html$/, '');
};
const builtPaths = new Set(htmlFiles.map(urlPathOf));
const builtFiles = new Set(files.map((f) => '/' + relative(DIST, f).split(sep).join('/')));

const sitemapXml = files.filter((f) => /sitemap-\d+\.xml$/.test(f)).map((f) => readFileSync(f, 'utf8')).join('');
const sitemapPaths = new Set([...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname));

const robotsTxt = existsSync(join(DIST, 'robots.txt')) ? readFileSync(join(DIST, 'robots.txt'), 'utf8') : '';
const productionMode = /^Allow: \//m.test(robotsTxt);
const indexState = [];

const errors = [];
const warnings = [];
const titles = new Map();
const descs = new Map();
const rows = [];

const attr = (tag, name) => {
  const m = tag.match(new RegExp(`\\s${name}=(?:"([^"]*)"|'([^']*)'|([^\\s>]+))`, 'i'));
  return m ? (m[1] ?? m[2] ?? m[3]) : null;
};
const decode = (s) =>
  s.replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#x27;/g, "'");
const strip = (s) => decode(s.replace(/<[^>]+>/g, '')).replace(/\s+/g, ' ').trim();

for (const file of htmlFiles) {
  const path = urlPathOf(file);
  const html = readFileSync(file, 'utf8');
  const e = (msg) => errors.push(`${path}  ${msg}`);
  const w = (msg) => warnings.push(`${path}  ${msg}`);
  const is404 = path === '/404/';

  if (!/<html[^>]*\slang="en-US"/.test(html)) e('missing <html lang="en-US">');
  if (!/<meta name="viewport"/.test(html)) e('missing viewport meta');

  const title = strip(html.match(/<title>([\s\S]*?)<\/title>/)?.[1] ?? '');
  if (!title) e('missing <title>');
  else {
    if (title.length > 65) w(`title is ${title.length} chars (aim ≤ 60–65): "${title}"`);
    if (title.length < 25) w(`title is short (${title.length})`);
    titles.set(title, [...(titles.get(title) ?? []), path]);
  }

  const descTag = html.match(/<meta name="description"[^>]*>/)?.[0];
  const desc = descTag ? decode(attr(descTag, 'content') ?? '') : '';
  if (!desc) e('missing meta description');
  else {
    if (desc.length > 165) w(`description is ${desc.length} chars (aim ≤ 160)`);
    if (desc.length < 70 && !is404) w(`description is short (${desc.length})`);
    descs.set(desc, [...(descs.get(desc) ?? []), path]);
  }

  const h1s = [...html.matchAll(/<h1[\s>][\s\S]*?<\/h1>/g)];
  if (h1s.length !== 1) e(`expected 1 <h1>, found ${h1s.length}`);

  // heading order: no jumps of more than one level going down
  const levels = [...html.matchAll(/<h([1-6])[\s>]/g)].map((m) => Number(m[1]));
  for (let i = 1; i < levels.length; i++) {
    if (levels[i] > levels[i - 1] + 1) {
      w(`heading level jumps h${levels[i - 1]} → h${levels[i]}`);
      break;
    }
  }

  const canonTag = html.match(/<link rel="canonical"[^>]*>/)?.[0];
  const canonical = canonTag ? attr(canonTag, 'href') : null;
  if (!canonical) e('missing canonical');
  else {
    if (!/^https:\/\//.test(canonical)) e(`canonical not absolute https: ${canonical}`);
    else if (!is404 && new URL(canonical).pathname !== path) e(`canonical ${canonical} does not match path`);
  }

  const robotsTag = html.match(/<meta name="robots"[^>]*>/)?.[0];
  const robots = robotsTag ? attr(robotsTag, 'content') : '';
  if (!robots) e('missing meta robots');
  const noindex = /noindex/.test(robots ?? '');
  if (productionMode) {
    if (noindex && sitemapPaths.has(path)) e('noindex page is listed in the sitemap');
    if (!noindex && !sitemapPaths.has(path) && !is404) e('indexable page missing from sitemap');
  } else if (!noindex) {
    e('non-production build but page is indexable (preview would leak into search)');
  }
  indexState.push([path, noindex ? 'noindex' : 'index', sitemapPaths.has(path) ? 'in sitemap' : '-']);

  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      const data = JSON.parse(m[1]);
      const types = (data['@graph'] ?? [data]).map((n) => n['@type']);
      rows.push([path, types.join(', ')]);
      for (const bad of ['aggregateRating', 'review', 'openingHours', 'priceRange']) {
        if (m[1].includes(`"${bad}"`)) e(`JSON-LD contains unvalidated property "${bad}"`);
      }
    } catch (err) {
      e(`invalid JSON-LD: ${err.message}`);
    }
  }

  for (const m of html.matchAll(/<img\b[^>]*>/g)) {
    const alt = attr(m[0], 'alt') ?? (/\salt(\s|>|\/)/.test(m[0]) ? '' : null);
    if (alt === null) e(`<img> without alt: ${attr(m[0], 'src')}`);
    if (!attr(m[0], 'width') || !attr(m[0], 'height')) w(`<img> without width/height: ${attr(m[0], 'src')}`);
  }

  for (const m of html.matchAll(/<a\b[^>]*>/g)) {
    const href = attr(m[0], 'href');
    if (!href) {
      e('<a> without href');
      continue;
    }
    if (/^(https?:|mailto:|tel:|sms:|#)/.test(href)) continue;
    const clean = href.split('#')[0].split('?')[0];
    if (!clean) continue;
    if (!clean.endsWith('/') && !/\.[a-z0-9]+$/i.test(clean)) w(`link without trailing slash: ${href}`);
    if (!builtPaths.has(clean) && !builtFiles.has(clean)) e(`broken internal link: ${href}`);
  }

  for (const m of html.matchAll(/<a\b[^>]*href="tel:([^"]+)"/g)) {
    if (m[1] !== '+17573058237') e(`unexpected tel link: ${m[1]}`);
  }
}

for (const [t, paths] of titles) if (paths.length > 1) errors.push(`duplicate title "${t}" on ${paths.join(', ')}`);
for (const [d, paths] of descs) if (paths.length > 1) errors.push(`duplicate description on ${paths.join(', ')}`);

for (const p of sitemapPaths) if (!builtPaths.has(p)) errors.push(`sitemap lists unbuilt URL ${p}`);

if (!robotsTxt) errors.push('robots.txt missing');

console.log(`\nAudited ${htmlFiles.length} HTML pages · ${sitemapPaths.size} URLs in sitemap`);
console.log(`Build mode: ${productionMode ? 'PRODUCTION (indexing allowed)' : 'NON-PRODUCTION (robots.txt blocks all, every page noindex)'}\n`);
console.log('Indexing state per page:');
for (const [p, i, sm] of indexState) console.log(`  ${p.padEnd(44)} ${i.padEnd(8)} ${sm}`);
console.log('');
console.log('Structured data per page:');
for (const [p, t] of rows) console.log(`  ${p.padEnd(44)} ${t}`);
if (warnings.length) {
  console.log(`\n${warnings.length} warning(s):`);
  warnings.forEach((x) => console.log('  ⚠ ' + x));
}
if (errors.length) {
  console.log(`\n${errors.length} error(s):`);
  errors.forEach((x) => console.log('  ✖ ' + x));
  process.exit(1);
}
console.log('\n✔ No errors.');
