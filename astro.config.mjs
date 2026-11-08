// @ts-check
import { defineConfig } from 'astro/config';

// Served at the custom domain root (public/CNAME), so no `base` path is needed.
export default defineConfig({
  site: 'https://michulee.com',
  trailingSlash: 'ignore',
  build: { format: 'directory' }, // /budget-pipeline/privacy/ -> privacy/index.html
});
