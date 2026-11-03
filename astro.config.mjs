import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://iman-nasir.github.io',
  base: '/portfolio',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
