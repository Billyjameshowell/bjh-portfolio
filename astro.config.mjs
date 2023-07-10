import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import UnoCSS from 'unocss/astro';

// https://astro.build/config
export default defineConfig({
  // used to generate images
  site: 'https://billyjameshowell.com/',
  trailingSlash: 'ignore',
  integrations: [sitemap(), UnoCSS({
    injectReset: true
  })]
});