// Single source of truth for which URLs are NOT ready to be indexed.
// Shared by astro.config.mjs (sitemap) and the page <head> (meta robots).
// A path listed here is built and linked, but ships with noindex and is left
// out of the sitemap until the client confirms it.
export const pendingPaths = [];

// Utility pages that should never be indexed.
export const utilityPaths = ['/404/', '/thank-you/'];

export const sitemapExclusions = [...pendingPaths, ...utilityPaths];
