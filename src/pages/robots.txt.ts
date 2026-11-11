import type { APIRoute } from 'astro';
export const GET: APIRoute = ({ site }) => new Response(
  import.meta.env.PUBLIC_INDEXABLE === 'true'
    ? `User-agent: *\nAllow: /\nDisallow: /api/\nSitemap: ${new URL('/sitemap-index.xml', site)}\n`
    : 'User-agent: *\nAllow: /\nDisallow: /api/\n',
  { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
);
