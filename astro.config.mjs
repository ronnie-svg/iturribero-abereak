import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://iturriberoabereak.com',
  integrations: [sitemap()],
  output: 'server',   // 🔥 MUY IMPORTANTE
  adapter: vercel(),  // 🔥 MUY IMPORTANTE
  vite: {
    plugins: [tailwindcss()],
  },
});