import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Update this if a custom domain is attached later — OG tags and canonical URLs read from this.
  site: 'https://sudd-library.pages.dev',
  output: 'static',
  integrations: [
    sitemap()
  ]
});
