# Anderson Allen — Portfolio

Personal portfolio site, live at **https://daa729.github.io**.

Built with [Next.js](https://nextjs.org/) (App Router, static export) and Tailwind CSS, and deployed to GitHub Pages by
[`.github/workflows/nextjs.yml`](.github/workflows/nextjs.yml) on every push to `main`.

## Editing content

Most content lives in plain data files, so updates don't require touching layout code:

| What | Where |
| --- | --- |
| Work experience | `src/data/experience.ts` |
| Client work, research projects & featured GitHub repos | `src/data/projects.ts` |
| Esports page (stats, programs, current work) | `src/data/esports.ts` |
| Home page bio, highlight stats & skills | `src/app/page.tsx` |
| Games (itch.io embeds) | `src/app/games/page.tsx` |
| Photos and logos | `public/` |

## Local development

Requires Node.js 20.9+ (22 recommended).

```bash
npm ci
npm run dev     # http://localhost:3000
npm run lint
npm run build   # static site written to ./out
```

The Projects page fetches language stats for the featured repos from the GitHub API at build time. It works without a
token; set `GITHUB_TOKEN` locally if you hit the unauthenticated rate limit. In CI the workflow's built-in, short-lived
`GITHUB_TOKEN` is used — no personal access token or repository secret is needed, and the token never reaches the browser.

## Design

Colors and fonts are defined once in `tailwind.config.ts` (ink background, Gator-orange accent) and
`src/app/layout.tsx` (Barlow / Barlow Condensed). Pages are built from the shared components in `src/components/`
(`PageShell`, `Entry`, `Facts`), so new content picks up the same styling automatically.

## Fonts

The animated page titles use freeware display fonts from FontSpace (licenses in `src/fonts/*/info.txt`).
Note that Dia Clone asks for a donation for commercial use.
