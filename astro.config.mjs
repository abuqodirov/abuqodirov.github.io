// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const publicDir = fileURLToPath(new URL('./public', import.meta.url));

/*
 * The dev server serves files out of public/, but it does not resolve a
 * directory to its index.html — so /minirv/en/ 404s in `npm run dev` even
 * though the built site and GitHub Pages both serve it correctly.
 *
 * This makes the dev server behave like GitHub Pages: a directory holding
 * an index.html is served, and the address without the trailing slash
 * redirects to the one with it (which is how the LinkedIn link resolves).
 *
 * Dev only. `apply: 'serve'` keeps it out of the build entirely.
 */
function publicDirectoryIndex() {
  return {
    name: 'public-directory-index',
    apply: /** @type {const} */ ('serve'),
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const [pathname = '', query = ''] = (req.url || '').split('?');
        if (!pathname.startsWith('/') || pathname.includes('..')) return next();

        const withSlash = pathname.endsWith('/') ? pathname : `${pathname}/`;
        const index = path.join(publicDir, withSlash, 'index.html');
        if (!fs.existsSync(index)) return next();

        const suffix = query ? `?${query}` : '';
        if (!pathname.endsWith('/')) {
          res.statusCode = 301;
          res.setHeader('Location', withSlash + suffix);
          return res.end();
        }

        req.url = `${withSlash}index.html${suffix}`;
        next();
      });
    },
  };
}

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
  vite: { plugins: [publicDirectoryIndex()] },
});
