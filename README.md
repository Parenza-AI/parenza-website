# parenza-website

Marketing and trust site for **Parenza** — a parenting decision-support system.
Astro 5 + Tailwind 4, static output, no client framework and no analytics.

Parenza is an independent product that runs on **SHIP** platform infrastructure
(the same API, app and agent runtime). This site talks to that API for one thing
only: the early-access form.

## Commands

```bash
pnpm install
pnpm dev        # local dev server
pnpm check      # astro check (types + template diagnostics)
pnpm build      # static build into dist/
pnpm deploy     # build, then copy dist/ -> docs/ for GitHub Pages
```

## Configuration

Copy `.env.example` to `.env`:

| Variable | Purpose |
| --- | --- |
| `PUBLIC_PARENZA_API_URL` | Base URL of the Ship API. The early-access form posts `POST {base}/v1/waitlist`. Empty disables submission and the form shows the mailto fallback. |

Env vars are inlined at build time, so a production build must have this set.

### How the form maps onto `/v1/waitlist`

That endpoint has a fixed shape (`email`, `name`, `company`, `teamSize`). The two
Parenza-specific answers ride along in fields the backend already stores:

- `company` → `Parenza — {name}`, which becomes the record's name in the signup
  review queue.
- `teamSize` → `Parenza design partner · child: {age} · {why}`, stored verbatim as
  the signup's free-text intent.

Applications land in the platform's signup review queue (`waitlist` status) and
can be reviewed with the `list_design_partner_applications` MCP tool.

## Structure

```
src/
  consts.ts             site metadata, routes, verified facts, env
  data.ts               homepage copy (problem, steps, panel, MCP, forms)
  security-content.ts   /trust source: frameworks, controls, subprocessors, roadmap, FAQ
  components/           section components + the in-markup product screens
  layouts/              BaseLayout (head/SEO), PageLayout (inner pages)
  pages/                index, trust, about, privacy, terms, 404
```

## Content rules

- **No fabricated capability claims.** Agent roster, routines and knowledge-base
  structure in `data.ts` were verified against the running system. If something
  isn't live, it doesn't go on the site.
- **No fabricated compliance.** `security-content.ts` marks a control `in-place`
  only when it is implemented and verifiable today; everything else is
  `in-progress` or `planned`, with dates in the roadmap. Never add a
  certification badge the company does not hold.
- **No customer screenshots.** The product screens on the homepage are built in
  markup from the app's real structure, because the running app holds one
  family's private record.
- **No testimonials or user counts** until real ones exist.

`app_images/` holds reference screenshots of the live app used while building
these screens. They contain a real family's data and are gitignored — keep them
local.

## Domain

`CNAME` is set to `parenza.ai` and `SITE_URL` in `src/consts.ts` matches. Change
both together if the domain differs.
