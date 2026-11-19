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

/* A section can carry any combination of the three, and they come out in
   this order: paragraphs, then pairs, then rows. Leave out what you do
   not need. */
export type Section = {
  /** The small uppercase heading. Leave out for a run of plain paragraphs. */
  heading?: string;
  /** One string per paragraph. Prose. */
  body?: string[];
  /** Label on the left, text on the right. For skills, scores, grades. */
  pairs?: { label: string; value: string }[];
  /** Dated entries. For education, publications, awards. */
  rows?: {
    /** The first line, in full width. */
    name: string;
    /** The grey line under it. Optional. Prose. */
    detail?: string;
    /** The year, pinned to the right. Optional. */
    end?: string;
    /** A longer grey line below, in reading type. Optional. Prose. */
    note?: string;
    /** Makes the name a link. Optional. */
    url?: string;
  }[];
};

export type Elsewhere = {
  title: string;
  /** YYYY-MM-DD. Sorted together with the Markdown articles. */
  date: string;
  summary?: string;
  /** Where it actually lives. */
  url: string;
};

export type Link = {
  /** The small grey word in the left column. */
  label: string;
  /** What the link reads as on the page. */
  text: string;
  /** Where it goes. Use mailto: for an address. */
  url: string;
};

export const site = {
  /* ── Identity ─────────────────────────────────────────────────────────
     → top of the left rail, the browser tab title, and link previews. */
  name: 'abdushukur qodirov',
  role: 'engineering student · tashkent',

  /* ── Home page ────────────────────────────────────────────────────────
     → the paragraphs directly under your name.
     The first one is bigger than the rest, and is also the description
     search engines and Telegram show. Prose. */
  intro: [
    'I am a third-year engineering student at Turin Polytechnic University in Tashkent.',
    'I designed a RISC-V chip, and it has been accepted for fabrication — the chips are expected in early 2027. I design PCBs, write firmware, and build FPGA projects from scratch.',
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
      url: '/minirv/en/',
    },
    {
      name: 'cansat',
      role: 'electronics, telemetry',
      year: '2026',
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

  /* ── Writing that lives somewhere else ────────────────────────────────
     → listed under "writing" next to the Markdown articles and sorted by
     date with them, but the link goes to the real address instead of
     to /articles/….

     The minirv article is here because its address is already published
     in the university Telegram post and on LinkedIn, and must not move. */
  elsewhere: [
    {
      title: 'A RISC-V Microcontroller with a Custom PWM Engine',
      date: '2026-10-29',
      summary:
        'How we designed a RISC-V microcontroller with a custom PWM engine and submitted it for fabrication in a 55 nm process. Also in Uzbek.',
      url: '/minirv/en/',
    },
  ] satisfies Elsewhere[],

  /* ── About page ───────────────────────────────────────────────────────
     → /about. The intro sits above the first heading.

     Each section is a heading plus any of: `body` (paragraphs),
     `pairs` (label and value), `rows` (dated entries). They come out in
     the order you write the sections, so move a whole block by moving it
     in this list. To put one on its own page instead — a /cv, say — cut
     the section and paste it into a `pages` entry above. */
  about: {
    title: 'about',
    intro: [
      'Engineering student at Turin Polytechnic University in Tashkent. Born in Andijan, Uzbekistan, and graduated from the Presidential School there in 2025.',
    ],
    sections: [
      {
        heading: 'now',
        body: [
          'Working through 一生一芯 (One Student One Chip) — designing and taping out a RISC-V core. The design is finished and is now waiting for fabrication.',
        ],
      },
      {
        heading: 'education',
        rows: [
          {
            name: 'Turin Polytechnic University in Tashkent',
            detail: 'Engineering',
            end: '2025 —',
          },
          {
            name: 'Chip Design Bootcamp, Nazarbayev University',
            detail: 'Astana, Kazakhstan',
            end: '2026',
          },
          {
            name: 'Presidential School in Andijan',
            detail: 'A-Levels',
            end: '2025',
          },
        ],
      },
      {
        heading: 'results',
        pairs: [
          {
            label: 'a-levels',
            value: 'Computer Science A*, Pure Mathematics A*, Physics A',
          },
          { label: 'sat', value: '1510 — August 2024' },
          { label: 'ielts', value: '8.0' },
        ],
      },
      {
        heading: 'skills',
        pairs: [
          {
            label: 'hardware',
            value:
              'Custom PCB design (KiCad, EasyEDA, JLCPCB, LCSC) · microcontrollers (STM32, CH32) · embedded systems',
          },
          { label: 'software', value: 'C · C++ · Python · Linux · Git' },
        ],
      },
      {
        heading: 'publications',
        rows: [
          {
            name: 'Critical Review of LoRaWAN Security Architectures in Industrial IoT Applications',
            detail: 'Yangi Oʻzbekiston Ilmiy Tadqiqotlar Jurnali',
            // Add `url:` here when the paper has an address online.
            note: 'Co-authored. An analysis of the LoRaWAN protocol and its security architecture in industrial IoT.',
          },
        ],
      },
      {
        heading: 'hobbies',
        body: ['Football, movies, fiction and fantasy books, and eating plov.'],
      },
    ] satisfies Section[],
  },

  /* ── Contact page ─────────────────────────────────────────────────────
     → /contact, in this order. `label` is the grey word on the left,
     `text` is what the link reads as, `url` is where it actually goes.
     Delete a line and it is gone from the site. */
  contact: {
    title: 'contact',
    lede: '',
    links: [
      { label: 'telegram', text: '@abuqodirovv', url: 'https://t.me/abuqodirovv' },
      {
        label: 'email',
        text: 'qodirov.abdushukurpm@gmail.com',
        url: 'mailto:qodirov.abdushukurpm@gmail.com',
      },
      { label: 'github', text: '/abuqodirov', url: 'https://github.com/abuqodirov' },
      {
        label: 'linkedin',
        text: '/in/abdushukur',
        url: 'https://www.linkedin.com/in/abdushukur-qodirov/',
      },
    ] satisfies Link[],
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
    /** Shown on /contact when no links are set. */
    noContact: 'No contact details set.',
  },
};

export default site;
