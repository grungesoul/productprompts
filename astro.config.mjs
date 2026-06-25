// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

// ---------------------------------------------------------------------------
// GitHub Pages config — EDIT THESE TWO LINES when you create the repo.
//
//   SITE  = https://<your-username>.github.io
//   BASE  = '/<repo-name>'   (the path the project page is served from)
//
// Configured for: repo "productprompts" under user "grungesoul".
//   → live at https://grungesoul.github.io/productprompts
//
// If you later attach a custom domain (e.g. productprompts.davidjordan.es),
// set SITE to that domain and BASE to '/'.
// ---------------------------------------------------------------------------
const SITE = 'https://grungesoul.github.io';
const BASE = '/productprompts';

// Apply the GitHub Pages sub-path only for production builds, so `astro dev`
// still serves cleanly from the root during local development.
const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  site: SITE,
  base: isProd ? BASE : '/',
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});
