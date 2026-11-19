/* ══════════════════════════════════════════════════════════════════════
   EVERY WORD ON THE SITE IS IN THIS FILE.

   The one exception is the articles themselves — one Markdown file each,
   in src/content/articles/. Nothing else anywhere in src/ contains a
   sentence you would want to rewrite.

   Each block below says where its text comes out on the page.
   Save the file and the browser reloads; nothing needs rebuilding.

   In any line marked "prose" you can use plain HTML:
   <a href="/articles">a link</a>, <b>bold</b>, <i>italic</i>.
   ══════════════════════════════════════════════════════════════════════ */

export type Project = {
  name: string;
  /** The middle column. What you did, in two or three words. */
  role: string;
  year: string;
  /** Where the name links to. Leave out, or '', for no link. */
  url?: string;
  /**
   * true = the project does not exist as far as the site is concerned.
   * No row, no name, no trace in the built HTML.
   *
   * NOTE: this hides it from the *site*, not from the *repository*.
   * If this repo is public, anyone can read this file, and git keeps
   * every version of it forever. For something genuinely confidential,
   * do not write it here at all.
   */
  classified?: boolean;
};

export type Page = {
  /** The URL. 'now' becomes /now. */
  slug: string;
  title: string;
  /** The grey line under the title. Optional. */
  lede?: string;
  sections: Section[];
};

export type Section = {
  /** The small uppercase heading. Leave out for a run of plain paragraphs. */
  heading?: string;
  /** One string per paragraph. Prose. */
  body: string[];
};

export const site = {
  /* ── Identity ─────────────────────────────────────────────────────────
     → top of the left rail, the browser tab title, and link previews. */
  name: 'abdushukur qodirov',
  role: 'electronics · pcb design · risc-v',

  /* ── Home page ────────────────────────────────────────────────────────
     → the paragraphs directly under your name.
     The first one is bigger than the rest, and is also the description
     search engines and Telegram show. Prose. */
  intro: [
    'I design boards, break them, and write down what went wrong.',
    'Currently working through 一生一芯 (One Student One Chip), taping out a RISC-V core. Before that: CanSat, a handful of four-layer boards, and a couple of chip design bootcamps.',
  ],

  /* ── Navigation ───────────────────────────────────────────────────────
     → the list in the left rail. Reorder, rename, or delete freely.
     Labels can be in any language; the paths underneath stay the same.
     Add a page below and it will not appear here until you add it. */
  nav: [
    { label: 'home', href: '/' },
    { label: 'articles', href: '/articles' },
    { label: 'about', href: '/about' },
    { label: 'contact', href: '/contact' },
  ],

  /* ── Section headings ─────────────────────────────────────────────────
     → the small uppercase labels on the home page, and the title of
     the /articles page. */
  headings: {
    projects: 'projects',
    articles: 'writing',
    /** The link at the right of the writing heading. */
    allArticles: 'all →',
  },

  /* ── Projects ─────────────────────────────────────────────────────────
     → the "projects" list on the home page. Newest first is automatic
     (sorted by year, descending).

     Set classified: true on anything that is not to be mentioned. */
  projects: [
    {
      name: '一生一芯',
      role: 'risc-v core, in progress',
      year: '2026',
      url: '',
    },
    {
      name: 'cansat',
      role: 'electronics, telemetry',
      year: '2024',
      url: '',
    },
  ] satisfies Project[],

  /* ── Extra pages ──────────────────────────────────────────────────────
     → each one becomes its own address. Add it to nav above if you want
     it in the rail; otherwise it exists quietly at its URL.

     Uncomment this to get a /now page: */
  pages: [
    // {
    //   slug: 'now',
    //   title: 'now',
    //   lede: 'What I am working on at the moment, updated when it changes.',
    //   sections: [
    //     { heading: 'building', body: ['A RISC-V core, through 一生一芯.'] },
    //     { heading: 'reading', body: ['Abdulla Qodiriy, <i>Mehrobdan chayon</i>.'] },
    //   ],
    // },
  ] satisfies Page[],

  /* ── About page ───────────────────────────────────────────────────────
     → /about. The intro sits above the first heading. Prose throughout. */
  about: {
    title: 'about',
    intro: [
      'Electronics student. I design PCBs, write a bit of RTL, and document the parts that went wrong, because those are the parts worth reading.',
    ],
    sections: [
      {
        heading: 'now',
        body: [
          'Working through 一生一芯 (One Student One Chip) — designing and taping out a RISC-V core. There is very little written about that program in English, so some of it ends up here.',
        ],
      },
      {
        heading: 'before',
        body: [
          'CanSat, a handful of four-layer boards, and a couple of chip design bootcamps. Three board revisions before the first one worked, which I am told is normal.',
        ],
      },
      {
        heading: 'elsewhere',
        body: [
          'Outside the bench: films, 17th-century painting, Vivaldi, and Uzbek literature that deserves more readers than it has.',
        ],
      },
    ] satisfies Section[],
  },

  /* ── Contact page ─────────────────────────────────────────────────────
     → /contact. Every link here also needs no mention anywhere else.
     Delete the email line if you would rather not publish it. */
  contact: {
    title: 'contact',
    lede: 'The fastest way to reach me is email. I read everything, and I reply to most of it.',
    email: 'qodirov.abdushukurpm@gmail.com',
    links: [{ label: 'github', url: 'https://github.com/abuqodirov' }],
  },

  /* ── Status bar ───────────────────────────────────────────────────────
     → the fixed strip along the bottom of every page.
     The clock shows YOUR local time to every visitor, wherever they are. */
  status: {
    city: 'tashkent',
    timezone: 'Asia/Tashkent',
    currently: 'reading: qodiriy, mehrobdan chayon',
  },

  /* ── Appearance ───────────────────────────────────────────────────────
     accent  one colour, used everywhere, in both themes.
     typeset 'mixed' = mono interface + serif reading text.
             'mono'  = mono everywhere, the classic terminal look. */
  appearance: {
    accent: '#e0563a',
    typeset: 'mixed' as 'mixed' | 'mono',
  },

  /* ── Interface strings ────────────────────────────────────────────────
     → the small bits of chrome. You will rarely touch these. */
  ui: {
    /** Hidden link for keyboard users; appears on the first Tab press. */
    skipToContent: 'Skip to content',
    /** The back link at the top of an article. The heading is appended. */
    backPrefix: '←',
    /** Shown on /articles when nothing is published yet. */
    noArticles: 'Nothing published yet.',
    /** Shown on the home page when there are no projects and no articles. */
    nothingYet: 'Nothing here yet.',
    /** Shown on /contact when no email and no links are set. */
    noContact: 'No contact details set.',
  },
};

export default site;
