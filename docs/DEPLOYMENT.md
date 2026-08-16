# Deployment

You have a GitHub account but no repo yet. Here's the full path from that to
a live site.

## 1. Create the repo

1. On GitHub, create a new **public** repository (e.g. `sudd-library`).
   Don't initialize it with a README — this project already has one.
2. From this project folder, on your own machine:

```
git init
git add .
git commit -m "Initial scaffold"
git branch -M main
git remote add origin https://github.com/ANZNEXUS-dev/sudd-library.git
git push -u origin main
```

3. Update `repoUrl` in `src/data/site.ts` to match the real repo URL, and
   push that change too.

## 2. Connect Cloudflare Pages

1. Sign up for Cloudflare (free) if you haven't already.
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages →
   Connect to Git**.
3. Pick the `sudd-library` repo.
4. Build settings:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Output directory: `dist`
5. Deploy. Cloudflare gives you a free `*.pages.dev` URL immediately, and
   every push to `main` redeploys automatically.

## 3. Set up file storage (Cloudflare R2)

Needed once you have real PDFs to host — skip this while you're still
using placeholder/sample structure only.

1. In the Cloudflare dashboard: **R2 → Create bucket**.
2. Give it a public access URL (R2 → your bucket → Settings → enable
   public access, or connect a custom domain like `files.suddlibrary.org`
   for cleaner links).
3. Upload PDFs there, grab the direct URL for each, and use it as the
   `fileUrl` field when adding a resource (see `docs/ADDING-CONTENT.md`).

## 4. Custom domain (optional)

Not required — `sudd-library.pages.dev` works fine indefinitely. If you
later buy a domain, attach it in **Workers & Pages → your project →
Custom domains**, and update `site` in `astro.config.mjs` to match.

## 5. Search (Pagefind)

Already wired into `npm run build` (`astro build && pagefind --site dist`)
and the `/search/` page. No extra setup needed — it just needs real
content to index, so results will be empty until resources are added.

## 6. Editing without touching code (optional, later)

Decap CMS gives you a form-based editor that commits straight to this repo
— useful once someone other than you is adding content. Not set up in this
scaffold yet since it adds a few moving pieces (an OAuth app or Cloudflare
Access for login); worth doing once the manual JSON workflow starts to feel
slow rather than upfront.
