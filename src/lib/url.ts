// Prefix any internal link/asset path with the configured base path so links
// work both in local dev and when served from a GitHub Pages sub-path.
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export function withBase(path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${BASE}${clean}` || '/';
}
