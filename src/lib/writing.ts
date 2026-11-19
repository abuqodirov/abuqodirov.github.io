import { getCollection } from 'astro:content';
import site from '../site';

/* The "writing" list is two sources in one: the Markdown articles in
   src/content/articles/, and the `elsewhere` entries in src/site.ts that
   live at their own addresses. Both are sorted together by date. */
export type WritingEntry = {
  title: string;
  date: Date;
  summary: string;
  href: string;
};

export async function getWriting(): Promise<WritingEntry[]> {
  const articles = (await getCollection('articles'))
    .filter((a) => !a.data.draft)
    .map((a) => ({
      title: a.data.title,
      date: a.data.date,
      summary: a.data.summary || '',
      href: `/articles/${a.id}`,
    }));

  const elsewhere = site.elsewhere.map((e) => ({
    title: e.title,
    date: new Date(e.date),
    summary: e.summary || '',
    href: e.url,
  }));

  return [...articles, ...elsewhere].sort((a, b) => b.date.valueOf() - a.date.valueOf());
}

export const fmtDate = (d: Date) => d.toISOString().slice(0, 10);
