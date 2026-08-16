# Project Knowledge

Name: **Sudd Library**
Built by: **ANZ NEXUS**
Status: built, pending final LICENSE text and a few real-world content entries

---

## 1. What this is

A free, open-source resource hub for South Sudanese teachers and students —
lesson notes, schemes of work, past papers, and holiday packages, organized
around the national curriculum (NCDC) and national exams (SSNEC).

## 2. Who it's for, and what that demands

- Most users are on Android phones, on metered or expensive mobile data.
- Many users are in areas with unreliable connectivity.
- No accounts, no login, no signup — anywhere. Every resource is a direct link.
- Every page is reachable in a handful of taps, with file size shown before
  download.
- Once opened, a page stays usable offline.

## 3. Content architecture

```
Primary (P1–P8)
 └─ Subject → Lesson Notes / Schemes of Work / Past Papers / Holiday Packages

Secondary (S1–S4)
 └─ Subject → Subject Notes / Schemes of Work / Past Papers / Holiday Packages

AES — Alternative Education System (ALP, Adult Literacy & Vocational)
 └─ Same four resource types as above
```

CRE and IRE are separate subjects, not combined. Past papers can carry an
optional second marking-scheme download alongside the paper itself.

Priority subjects: Citizenship Education, English, Mathematics, General
Science, CRE, Agriculture, Social Studies — heaviest demand for exam prep.

## 4. Tech stack

| Layer | Choice | Why |
|---|---|---|
| Site generator | Astro | Generates every page from `src/data/curriculum.ts` — no hand-written HTML per resource |
| Hosting | Cloudflare Pages | No bandwidth ceiling, free, fast CDN |
| Code + version control | GitHub (`ANZNEXUS-dev/sudd-library`) | Free, standard for open source |
| File storage | Cloudflare R2 | 10GB free, zero egress fees |
| Search | Pagefind | Static full-text index, no server |
| Offline support | PWA (manifest + service worker) | Caches visited pages for offline reuse |

Total recurring cost: $0.

## 5. Design system

- **Palette:** blue `#0F4788` (primary), gold `#F2C411` (star/accent), red
  `#CA2820` and green `#148540` (used sparingly — ribbon accent, subject
  group), paper `#F3F6FA` (background), ink `#10182A` (text)
- **Type:** Sora (display/headings), Work Sans (body), IBM Plex Mono
  (metadata — file sizes, dates, breadcrumbs)
- **Logo:** gold star above an open book, hand-drawn as SVG. This is
  Sudd Library's own mark — separate from the ANZ NEXUS Y-shaped mark,
  which appears only in the footer as the site's owner credit.
- **Signature element:** past-paper downloads are styled as a stamped
  ticket — perforated stub, gold seal — echoing that these are official
  exam documents.
- **Subject color-coding:** dot color encodes subject group (blue = STEM,
  gold = languages, green = humanities).

## 6. Branding

Every page carries a footer bar with its own independent dark green
background (`#10201C`), decoupled from the rest of the site's blue theme —
so it reads as ANZ NEXUS's own credit, not part of Sudd Library's palette.
Contains: the Y-mark, "ANZ NEXUS," GitHub link, disclaimer link, WhatsApp
contact and report-a-broken-link links.

## 7. Contact

- WhatsApp: `+211 924 480 992`
- Email: `anznexus00@gmail.com`

## 8. House style — no AI giveaways

Applies to design, copy, and code, without exception: no templated visual
defaults, no AI-marketing copy tics, no comments explaining self-evident
code, no boilerplate README sections, no AI/generator references anywhere.
Copy stays minimal throughout the app — no over-explaining.

## 9. License

AGPLv3 for the code (pending final LICENSE file text) — chosen specifically
because it prevents a fork from being quietly turned into a closed,
paywalled service without also publishing those changes. Project name and
both logos are reserved separately in `NOTICE.md`, since a code license
doesn't cover trademarks. See `DISCLAIMER.md` for non-affiliation,
no-warranty terms, and the takedown contact path.
