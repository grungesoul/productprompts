// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

// ---------------------------------------------------------------------------
// Hosting config — deployed on Vercel as a static site.
//
//   SITE = the canonical production URL (used for absolute URLs / OG tags).
//   base = '/'  — Vercel serves from the root, so no sub-path gymnastics.
//
// If you later attach a custom domain (e.g. getproductprompts.com), just set
// SITE to that domain; base stays '/'.
// ---------------------------------------------------------------------------
const SITE = 'https://productprompts.vercel.app';

export default defineConfig({
  site: SITE,
  base: '/',
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});
