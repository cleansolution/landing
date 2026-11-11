// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { sitemapExclusions } from './src/config/indexing.mjs';

// Read .env when present (Node >= 20.12). Cloudflare Pages injects variables directly.
try {
  process.loadEnvFile();
} catch {}

// Final production origin. Change SITE_URL in .env / Cloudflare Pages when the domain is confirmed.
const SITE_URL = process.env.SITE_URL || 'https://cleansolutionsva.com';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  // CSS is ~6 kB gzipped: inlining it removes the only render-blocking request.
  build: { format: 'directory', inlineStylesheets: 'always' },
  compressHTML: true,
  prefetch: { prefetchAll: false, defaultStrategy: 'hover' },
  image: { responsiveStyles: true },
  integrations: [
    sitemap({
      // Only approved, indexable URLs go in the sitemap (see src/config/indexing.mjs).
      filter: (page) => !sitemapExclusions.some((path) => new URL(page).pathname === path),
    }),
  ],
});
