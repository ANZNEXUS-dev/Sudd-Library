# Adding a resource

Every resource on the site — a lesson note, a scheme of work, a past paper,
a holiday package — is one small JSON file in `src/content/resources/`.
There's no database and no admin panel to log into. Add a file, commit it,
and the site rebuilds with it included.

## The five-minute version

1. Upload the actual PDF somewhere it can be linked to directly — Cloudflare
   R2, or a `public/files/` folder in this repo for small libraries. You
   need a direct URL that ends in `.pdf` and opens without a login.
2. Copy `docs/templates/resource-template.json`.
3. Rename the copy and drop it into `src/content/resources/`. The filename
   doesn't matter, but a readable one helps — e.g.
   `p8-science-cpe-2023.json`.
4. Fill in the fields (see reference below).
5. Commit and push. Cloudflare Pages rebuilds automatically.

## Field reference

| Field | What it is | Example |
|---|---|---|
| `level` | `primary`, `secondary`, or `aes` | `"primary"` |
| `classSlug` | The class slug — see `src/data/curriculum.ts` for the full list | `"p8"` |
| `subjectSlug` | The subject slug — same file | `"science"` |
| `type` | `notes`, `schemes`, `past-papers`, or `holiday-packages` | `"past-papers"` |
| `title` | What shows on the resource card | `"CPE Science — 2023"` |
| `examBoard` | Optional. Only relevant for past papers | `"SSNEC"` |
| `year` | Optional | `2023` |
| `fileUrl` | Direct link to the PDF | `"https://files.suddlibrary.org/p8/science/cpe-2023.pdf"` |
| `fileSize` | Shown next to the download button | `"1.1 MB"` |
| `markingSchemeUrl` | Optional. Adds a second small "Marking Scheme" button on the same card | `"https://files.suddlibrary.org/p8/science/cpe-2023-marking.pdf"` |
| `markingSchemeSize` | Optional, shown alongside the marking scheme | `"400 KB"` |
| `dateAdded` | Powers the "Recently added" list on the homepage | `"2026-08-01"` |

## Example — a filled-in entry

```json
{
  "level": "primary",
  "classSlug": "p8",
  "subjectSlug": "science",
  "type": "past-papers",
  "title": "CPE Science — 2023",
  "examBoard": "SSNEC",
  "year": 2023,
  "fileUrl": "https://files.suddlibrary.org/p8/science/cpe-2023.pdf",
  "fileSize": "1.1 MB",
  "markingSchemeUrl": "https://files.suddlibrary.org/p8/science/cpe-2023-marking.pdf",
  "markingSchemeSize": "400 KB",
  "dateAdded": "2026-08-01"
}
```

## Valid `level` / `classSlug` / `subjectSlug` combinations

Open `src/data/curriculum.ts` — it's the single source of truth for every
level, class, and subject slug. If you type a slug that isn't in that file,
the resource simply won't have anywhere to appear (the build won't break,
it just won't be linked from any page).

Note: CRE and IRE are separate subjects (`cre` and `ire`), not combined.

## Adding a whole new subject or class

Also done in `src/data/curriculum.ts` — add an entry to the relevant
`subjects` array or `classes` array. Every page for it is generated
automatically; nothing else needs to change.

## Compressing PDFs before uploading

Keep files under ~2MB where possible — most people here are on mobile
data. Ghostscript (`gs -sDEVICE=pdfwrite -dPDFSETTINGS=/ebook ...`) or
ilovepdf.com both work well for this.
