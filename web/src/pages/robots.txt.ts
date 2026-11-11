import type { APIRoute } from 'astro';

/**
 * robots.txt generated at build time.
 * - PUBLIC_ALLOW_INDEXING=true (Cloudflare Pages production only): allow crawling, AI search bots and sitemap.
 * - anything else (local, preview deployments): block all crawling.
 */
export const GET: APIRoute = ({ site }) => {
  const allow = import.meta.env.PUBLIC_ALLOW_INDEXING === 'true';
  const sitemap = new URL('/sitemap-index.xml', site).href;
  const aiBots = ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'PerplexityBot', 'ClaudeBot', 'Claude-SearchBot', 'Google-Extended', 'Applebot', 'Bingbot'];
  const body = allow
    ? `User-agent: *\nAllow: /\nDisallow: /thank-you/\nDisallow: /api/\n\n${aiBots.map((b) => `User-agent: ${b}\nAllow: /`).join('\n\n')}\n\nSitemap: ${sitemap}\n`
    : `# Non-production build: crawling disabled.\nUser-agent: *\nDisallow: /\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
