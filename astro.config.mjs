import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://brunodonadio.github.io',
  base: '/',
  output: 'static',
  vite: {
    preview: {
      allowedHosts: ['vps-5778375-x.dattaweb.com'],
    },
  },
});
