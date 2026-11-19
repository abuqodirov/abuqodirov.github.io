import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/* Articles are the only thing that lives outside src/site.ts — one Markdown
   file each, because an article is a document, not a setting. */
const articles = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    /** Drafts stay off the built site. */
    draft: z.boolean().default(false),
    /** One or two lines, shown under the title in the article list. */
    summary: z.string().nullable().optional().default(''),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { articles };
