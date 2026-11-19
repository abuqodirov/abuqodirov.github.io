// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  // The address the site will finally live at. Used for canonical URLs and
  // link previews — change it when the domain is decided.
  site: 'https://abuqodirov.github.io',
  output: 'static',
  integrations: [mdx()],
  markdown: {
    shikiConfig: { theme: 'vitesse-dark', wrap: true },
  },
  devToolbar: { enabled: false },
});
