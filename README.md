# Ritu Bera — Professional Portfolio

A premium, editorial personal portfolio for **Ritu Bera** — MBA student
(Marketing Major · Operations Minor), Lovely Professional University.

> Building Brands. Understanding People. Creating Business Impact.

Live site: **https://ritubera2004-blip.github.io/portfolio/**

---

## Tech stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS 4** + **shadcn/ui**
- **Framer Motion** for animation
- **Playfair Display** (serif) + **Inter** (sans)
- Deployed as a **static export** to **GitHub Pages** (no server / no backend)

## Sections

Home · About · Education · Featured Project (SILVAT case study) · Skills ·
Certifications · Career Interests · Professional Personality · Contact

## Contact form

The contact form uses **[FormSubmit](https://formsubmit.co)** — a free,
no-signup form service that delivers submissions directly to
`ritubera.work23@gmail.com`. It works on fully static hosting.

> **One-time activation:** the very first submission triggers a confirmation
> email from FormSubmit to `ritubera.work23@gmail.com`. Click the activation
> link inside it once — after that, every submission arrives in the inbox.

---

## Local development

```bash
bun install
bun run dev          # http://localhost:3000
bun run lint
```

## Build (static export)

```bash
bun run build        # outputs static HTML to ./out
```

The build reads two optional env vars:

| Var | Purpose | Example |
| --- | --- | --- |
| `NEXT_PUBLIC_BASE_PATH` | Repo subpath for GitHub Pages project sites | `/portfolio` |
| `NEXT_PUBLIC_SITE_ORIGIN` | Origin used for SEO / Open Graph URLs | `https://ritubera2004-blip.github.io` |

Both are set automatically by the GitHub Actions workflow.

## Regenerate the resume PDF

The downloadable resume lives at `public/ritu-bera-resume.pdf` and is
generated with ReportLab:

```bash
bun run resume        # runs scripts/gen_resume.py
```

---

## Updating content

All copy lives in **`src/lib/portfolio-data.ts`** — edit that single file to
update any section (hero, about, education, SILVAT project, skills,
certifications, career, personality, contact details).

SILVAT project images live in `public/silvat/`.
OG image: `public/og-image.png`. Favicon: `public/favicon.svg`.

---

## Deployment (GitHub Pages)

This repo includes a GitHub Actions workflow at
`.github/workflows/deploy.yml` that automatically builds and deploys the site
to GitHub Pages on every push to `main`.

### One-time setup (already done for this repo)

1. Repo → **Settings → Pages → Build and deployment → Source = GitHub Actions**.
2. Repo → **Settings → Actions → General → Workflow permissions = Read and write**.

### How it works

1. Push to `main`.
2. The workflow installs deps, runs `bun run build` with the correct
   `NEXT_PUBLIC_BASE_PATH`, and uploads `./out` as a Pages artifact.
3. GitHub Pages serves it at `https://<owner>.github.io/<repo>/`.

If you rename the repo or move it to a `<username>.github.io` repo, the
workflow auto-detects the correct base path — no code changes needed.

---

© Ritu Bera. All rights reserved.
