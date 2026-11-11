import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: process.env.SITE_URL || (process.env.VERCEL_URL ? 'https://' + process.env.VERCEL_URL : 'http://localhost:4173'),
  adapter: vercel(),
  server: { port: 4173 },
  devToolbar: { enabled: false },
  integrations: [sitemap()],
  trailingSlash: 'always',
});
