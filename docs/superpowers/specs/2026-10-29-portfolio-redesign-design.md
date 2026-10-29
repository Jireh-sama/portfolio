# Portfolio redesign — "Changelog" (design spec)

Date: 2026-10-29 · Branch: `feat/redesign`

## Intent

The site itself should be the portfolio piece: a visitor should conclude "this person is good at
front-end" before reading a word. Audience is still people evaluating Jireh for a **remote
full-stack role**, so the craft must never get in the way of reading the content.

Decisions made with Jireh during brainstorming:

| Question | Decision |
|---|---|
| Goal | Show off front-end skill |
| Kind of craft | Scroll storytelling |
| Story spine | The journey (2019 → now), not the project list |
| Visual direction | **B · Changelog** — career told as a git history; dark, Geist + Geist Mono, lime accent |
| Metaphor intensity | **Balanced** — git shapes the *structure* (tags, `+`/`-` diff lines, side branch, deps); headlines and sentences stay plain English |
| Scroll mechanic | **Pinned stage** — section pins, a playhead walks the commit graph, one release on stage at a time; phones / reduced motion fall back to a **rail** layout |
| Theme | Dark only (light theme + toggle removed) |
| Structure | Everything goes into the journey; a skimmable **HEAD / now** summary after it; then contact |
| Animation stack | GSAP + ScrollTrigger (already in use), native scrolling, `gsap.matchMedia()` for mode switching |
| Page-flow mockup | Approved (hero · journey · HEAD/now · contact) |

Jireh asked for the rest to be built without further check-ins; the decisions below were made
autonomously on that basis.

## Page flow (home `/`)

1. **Nav** — sticky top bar, monospace: `❯ jireh` (home) · journey · now · contact · résumé ↓.
   Replaces the floating pill nav. Links scroll to section ids; from other routes they go to `/#id`.
2. **Hero** (`#top`) — status pill "open to remote full-stack roles", huge "Jireh",
   "Full-stack developer. / Shipping since 2022.", CTAs (email, GitHub, LinkedIn). Right half: a
   `git log --graph --oneline` of the whole journey, generated from the journey data. It types
   itself out on load; every commit line is a button that scrolls to that stop; the HEAD line
   scrolls to `#now`.
3. **Journey** (`#journey`) — 7 stops (below). Desktop: the stage pins; scroll scrubs a master
   timeline that moves the playhead node-to-node, fills the commit line, lights the freelance
   branch, and swaps the release panel; snaps to stops; counter `05 / 07`. Project stops show the
   screenshot, which links to the project page.
4. **HEAD / now** (`#now`) — "Open to remote full-stack roles.", facts list (last commit,
   location, education, projects → `/projects`, résumé), and a tabbed file viewer: `package.json` (tech stack as
   `dependencies`, tools as `devDependencies`, values are each tool's role) and `CONTRIBUTING.md`
   (the four principles as "how I work").
5. **Contact** (`#contact`) — "Let's build something. Remote, full-stack." + email / GitHub /
   LinkedIn / résumé + copy-email button.
6. **Footer** — `© year Jireh · built with React + GSAP` and `deployed from <short hash>` — the
   **real** commit hash injected at build time (`__COMMIT_HASH__`, linked to the GitHub commit).

## Journey content (7 stops)

Tags use semver as narrative: pre-1.0 while learning, **v1.0.0 = thesis + graduation**.

| # | tag | graph label | lane | kind | release |
|---|---|---|---|---|---|
| 1 | v0.1.0 | 2019 | main | init | TVL ICT at AMA (Java, networking, web basics; high honors) |
| 2 | v0.2.0 | 2022 | main | feat | HTML, CSS & JS, then React in 2023 (`- "it's just curiosity"`) |
| 3 | v0.3.0 | 2024 | branch | branch | Freelance web developer — incl. EnrollEase (project) |
| 4 | v0.4.0 | Apr 2025 | main | feat | IT intern at APSTII (Apr–Jun 2025) |
| 5 | v1.0.0 | 2025 | main | release | City of Bacoor Chatbot (thesis, project) + BS IT cum laude |
| 6 | v1.1.0 | Dec 2025 | main | merge | Full-stack developer at Nerve Technologies (Dec 2025 – Feb 2026) — freelance branch merges back |
| 7 | v1.2.0 | Feb 2026 | main | feat | Junior software engineer at iFort (Feb – Jul 2026) |
| — | HEAD | now | main | — | open to remote full-stack roles |

Facts to confirm with Jireh: thesis year (assumed 2025, alongside graduation).
Graph labels carry months where several stops share a year, so no two nodes read the same.
Commit hashes in the hero log are derived deterministically from each stop's id (decorative).

## Other routes

- `/projects` — project cards (screenshot, tag from the journey, title, description, stack, links).
- `/projects/:id` — **release notes**: tag + meta, title, about, screenshot, "What it is",
  "Shipped" (features as `+` lines), "Fixes" (problem → solution pairs), sidebar stack + links.
- `*` — 404 in git voice: `fatal: '<path>' did not match any page`; back to main.

## Architecture

- **Data** (`PortfolioData.tsx`): `journeyData: ReleaseI[]`, `nowData`, `projectsData` (unchanged
  shape), `techStackData` / `devToolsData` (`{ name, role }`), `principlesData`.
  `workExperienceData` / `educationData` are folded into the journey and removed.
- **Pure helpers** (`src/lib/`): `git.ts` (short hash, `git log --graph` line builder for a single
  side branch), `journey.ts` (media queries, trigger id, anchor ids, `scrollToRelease`, cumulative
  stack).
- **Components**: `SiteNav`, `HeroSection` + `GitLog`, `JourneySection` + `JourneyGraph` +
  `ReleasePanel`, `NowSection` + `FileViewer`, `ContactSection` + `CopyEmailButton`,
  `FooterSection`; restyled `Projects`, `ProjectItem`, `ProjectDetails`, `ItemNotFound`,
  `BackButton`; new `NotFound`.
- **Removed**: refs context (nav uses section ids), floating nav, theme toggle, blob background,
  screen-size indicator, old sections/items/dividers, aurora/marquee/ripple primitives, unused
  icons.
- **Theme**: one dark token set in `:root` (OKLCH), `class="dark"` on `<html>`, extra tokens
  `add` / `del` / `hash` / `key` / `line` / `dim` for the git styling. Custom Tailwind variant
  `stage:` = the pinned-mode media query, shared with `gsap.matchMedia()`.

## Motion, accessibility, performance

- Stage mode: `(min-width: 64rem) and (min-height: 40rem) and (prefers-reduced-motion: no-preference)`.
- Rail mode (everything else): normal flow, rail line; with motion allowed, the rail fill is
  scrubbed and panels fade up on enter; with reduced motion, nothing animates.
- Hero typing and the cursor blink are skipped under reduced motion; scrolls use `behavior: auto`.
- Inactive stage panels are `visibility: hidden` (GSAP `autoAlpha`) so screen readers and tab order
  only see the current release; in rail mode everything is in the reading order.
- File viewer tabs follow the WAI-ARIA tabs pattern (roving tabindex, arrow keys).
- Body text contrast ≥ 4.5:1; the dimmest grey is only used for decoration.

## Verification

No test suite exists. Gate: `npm run build` (tsc + vite) and `npm run lint` (no new errors beyond
the documented pre-existing ones). Then drive the site in Chrome: desktop stage scrubbing, snapping,
hero log jumps, tabs, copy button, project pages, 404, mobile rail layout, reduced-motion mode.
