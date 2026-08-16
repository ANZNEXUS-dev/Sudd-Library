# Sudd Library

A free, open-access library of lesson notes, schemes of work, past papers,
and holiday packages for South Sudanese schools — organized around the
national curriculum (NCDC) and national exams (SSNEC).

No accounts. No login. Every resource is a direct download, and the site
works offline once a page has been visited.

See [DISCLAIMER.md](DISCLAIMER.md) for terms of use and [NOTICE.md](NOTICE.md)
for the trademark terms covering the project name and marks.

## Stack

- [Astro](https://astro.build) — static site generation
- [Pagefind](https://pagefind.app) — client-side search, no server
- Cloudflare Pages — hosting
- Cloudflare R2 — file storage for PDFs

See `docs/PROJECT-KNOWLEDGE.md` for the full reasoning behind these choices.

## Running locally

```
npm install
npm run dev
```

## Adding a resource

See `docs/ADDING-CONTENT.md` — it's a five-minute process, no code
required.

## Deploying

See `docs/DEPLOYMENT.md`.

## License

Code is intended to be licensed under AGPLv3 (see `LICENSE` — pending
final text). Uploaded PDF resources retain whatever rights their original
authors or issuing bodies hold. The project name and logos are reserved
separately — see `NOTICE.md`.
