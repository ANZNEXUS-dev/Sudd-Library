# Project Knowledge

Name: **Sudd Library**
Built by: **ANZ NEXUS**
Live at: https://sudd-library.anznexus.workers.dev/
Status: live, populated with real content, actively being extended

---

## 1. What this is

A free, open-access resource hub for South Sudanese teachers and students —
official textbooks, past papers, schemes of work, lesson notes, and holiday
packages, organized around the national curriculum (NCDC) and national exams
(SSNEC).

## 2. Who it's for, and what that demands

- Most users are on Android phones, on metered or expensive mobile data.
- No accounts, no login, no signup — anywhere. Every resource is a direct link.
- Every page is reachable in a handful of taps, with breadcrumbs throughout.
- Pages stay usable offline once visited (service worker page caching).
- Downloaded files live on the device via the browser's own download —
  no separate "my downloads" feature was built; it would duplicate what
  the phone's file manager already does, for real added complexity.

## 3. Content architecture

```
Primary (P1–P8)
 └─ Subject → Textbooks / Lesson Notes / Schemes of Work / Past Papers / Holiday Packages

Secondary (S1–S4)
 └─ Subject → same five resource types

AES — Alternative Education System (ALP, Adult Literacy & Vocational)
 └─ Same five types
```

CRE and IRE are separate subjects. Past papers can carry an optional
second "Marking Scheme" link. Every ticket now offers **View** (opens in
the phone's own browser PDF viewer — fast, no ads, no app handoff) and
**Download** (forces a saved copy) as separate actions.

**Known gap, not yet resolved:** AES's real-world structure (ALP Levels
1–4, separate CGS grades, a Youth track) doesn't match the simplified
two-class model currently built. Needs its own decision before AES
content gets added at scale.

## 4. Real content currently in the library

79 official NCDC textbooks (Primary Math/English/Science/Social
Studies/CRE for P1–P8; Secondary Math/English/Biology/Chemistry/
Physics/Geography/History/Citizenship/CRE/ICT for S1–S4), linked
directly to `cdc.gov.ss` rather than re-hosted — their content is
copyrighted ("All Rights Reserved"), so linking rather than mirroring
is the correct approach, and it costs nothing to host.

Plus manually added past papers, sourced and verified individually
(e.g. S4 Mathematics final exam, via Cloudflare R2).

Content gaps, not oversights: Primary IRE/Citizenship/Agriculture/ICT
and Secondary Kiswahili/Commerce/Agriculture/Entrepreneurship have no
official textbook available from NCDC. Physics S3 textbook wasn't found
either.

## 5. Tech stack

| Layer | Choice | Why |
|---|---|---|
| Site generator | Astro | Every page generated from `src/data/curriculum.ts` |
| Hosting | Cloudflare Pages | No bandwidth ceiling, free, fast CDN |
| Code + version control | GitHub (`ANZNEXUS-dev/sudd-library`) | Free, standard for open source |
| File storage | Cloudflare R2 (public bucket) + direct NCDC links | Zero egress fees; textbooks cost nothing to host at all |
| Search | Pagefind | Static full-text index, no server |
| Offline support | PWA (manifest + service worker) | Caches visited pages for offline reuse |

Total recurring cost: $0. Only a custom domain (~$10–15/yr, optional,
not yet purchased) would add cost.

## 6. Design system

- **Palette:** blue `#0F4788` (primary), gold `#F2C411` (star/accent),
  red `#CA2820` and green `#148540` (ribbon accent, subject grouping),
  paper `#F3F6FA`, ink `#10182A`
- **Type:** Sora (headings), Work Sans (body), IBM Plex Mono (metadata)
- **Logo:** gold star above an open book — hand-drawn SVG, verified by
  rendering before shipping. Sudd Library's own mark, separate from the
  ANZ NEXUS Y-shaped mark, which appears only in the footer.
- **Signature element:** past-paper downloads styled as a stamped
  ticket — perforated stub, gold seal.
- **Accessibility:** contrast ratios actually measured, not assumed.
  One real failure was caught and fixed — a label color at 2.2:1 was
  raised to 4.5:1 (AA). Small interactive elements (tabs, buttons,
  search input) given a 40–44px minimum tap height.

## 7. Pages

Home, `/{level}/`, `/{level}/{class}/`, `/{level}/{class}/{subject}/`,
`/search/`, `/about/` (a few sentences, not an essay), `/disclaimer/`
(renders `DISCLAIMER.md` directly via Astro's native markdown import —
one source of truth, never duplicated), `/404/`.

## 8. Contact & branding

- WhatsApp: `+211 924 480 992` — in the footer (prioritized, listed
  first) and as a persistent floating button (WhatsApp's own green,
  `#25D366`, bottom-right, every page) since contact was made a
  priority over GitHub visibility
- Email: `anznexus00@gmail.com`
- GitHub link still present but de-emphasized into the footer's fine
  print — open-source transparency without competing for attention
- Open Graph tags + a real rendered PNG banner (`/og-banner.png`, not
  SVG — WhatsApp/social crawlers don't render SVG previews reliably)
  so shared links show a proper preview card instead of a bare URL

## 9. House style — no AI giveaways

Applies to design, copy, and code, without exception. This was tested
directly: several unsolicited "make it grant-ready" documents proposed
fake usage statistics, a role-selector popup, and an analytics backend
requiring server infrastructure. All rejected — fabricated numbers,
intrusive prompts, and a paid backend all contradict the project's own
stated principles (free, simple, no backend, honest about content that
doesn't exist yet).

## 10. License

AGPLv3 intended for the code — chosen specifically to prevent a fork
from being quietly turned into a closed, paywalled service. **Still
pending: the actual LICENSE file still contains the original MIT text**
— the AGPLv3 text was handed over in chat but not yet pasted in.
Project name and both logos are reserved separately in `NOTICE.md`.
See `DISCLAIMER.md` for non-affiliation, no-warranty terms, and the
takedown contact path.

## 11. Still open / deferred

- LICENSE swap to AGPLv3 (text already provided, not yet applied)
- AES structural mismatch (see §3)
- Kiswahili as a subject (found in NCDC's own content, not yet added)
- Custom domain (optional, no rush)
- Decap CMS (only worth it once manual JSON editing feels slow)
- Real PNG app icons for iOS "Add to Home Screen" (SVG-only works on Android)
- Cloudflare Web Analytics (optional, privacy-friendly, no backend needed)
- Link verification for the 79 textbook entries (taken verbatim from
  NCDC's site, not individually confirmed to all resolve)
