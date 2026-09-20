 Sudd Library

A free, open-source educational resource platform for South Sudanese teachers and students. Official textbooks, past papers, schemes of work, lesson notes, and holiday packages, organized around the national curriculum (NCDC) and national exams (SSNEC).

Built after volunteering to teach in South Sudan and finding curriculum materials extremely hard to get hold of.

**Live:** https://sudd-library.anznexus.workers.dev/

## What's in it

Primary (P1–P8), Secondary (S1–S4), and AES, each broken down by subject, then by resource type:

- Textbooks
- Lesson notes
- Schemes of work
- Past papers (with marking schemes where available)
- Holiday packages

No accounts, no login, no signup. Every resource is a direct link, reachable in a handful of taps. Pages stay usable offline once visited.

## Tech stack

| Layer | Choice |
|---|---|
| Site generator | Astro |
| Hosting | Cloudflare Pages/Workers |
| File storage | Cloudflare R2 + direct links to `cdc.gov.ss` |
| Search | Pagefind |
| Content editing | Decap CMS (`/admin/`) |
| Offline support | PWA (manifest + service worker) |

Textbooks are linked directly to NCDC rather than re-hosted, since their content is copyrighted. Everything else is stored in a public Cloudflare R2 bucket.

Total recurring cost: $0.

## Running locally

```
npm install
npm run dev
```

Content lives as one JSON file per resource under `src/content/resources/`. Curriculum taxonomy (levels, classes, subjects) lives in `src/data/curriculum.ts`.

## Adding content

Content editors can add or update resources through Decap CMS at `/admin/`, which commits straight to GitHub. No local push required for content changes.

Local pushes are for code and design changes only.

## Contributing

Issues and pull requests are welcome — whether that's fixing a broken link, adding a missing resource, or improving the code. If you spot a broken link, use the "report a broken link" link in the site footer, or open an issue here.

## License

AGPLv3. See `LICENSE` for the full text.

"Sudd Library" and the ANZ NEXUS name/logos are reserved separately — see `NOTICE.md`. Non-affiliation and no-warranty terms are in `DISCLAIMER.md`.

## Contact

- WhatsApp: +211 924 480 992
- Email: anznexus00@gmail.com
