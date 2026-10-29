# CLAUDE.md

Guidance for working in this repo. Personal portfolio site: a single-page scrolling story ("career told as a git history") plus dedicated project pages. Design spec: [docs/superpowers/specs/2026-10-29-portfolio-redesign-design.md](docs/superpowers/specs/2026-10-29-portfolio-redesign-design.md).

## Commands

```bash
npm run dev      # Vite dev server
npm run build    # tsc -b (typecheck all project refs) then vite build
npm run lint     # eslint .
npm run preview  # preview the production build
```

There is no test setup. `npm run build` runs the typecheck (`tsc -b`), so it is the closest thing to a full verification gate. For anything visual or scroll-related, also drive the site in a browser at desktop (pinned stage), phone width (rail) and with reduced motion.

## Stack

- **React 19** + **TypeScript** + **Vite 7**. The **React Compiler** is enabled (`babel-plugin-react-compiler` in [vite.config.ts](vite.config.ts)) — do not add manual `useMemo`/`useCallback`/`React.memo` for performance; the compiler handles memoization.
- **React Router 7** (`react-router`, not `react-router-dom`) via `createBrowserRouter` in [src/route.tsx](src/route.tsx).
- **Tailwind CSS v4** — CSS-first config, no `tailwind.config.js`. Theme tokens, custom variants and keyframes live in [src/index.css](src/index.css). **Dark only**: one OKLCH token set in `:root`, `class="dark"` on `<html>`. Extra tokens for the git styling: `add`, `del`, `hash`, `key`, `line`, `dim` (decoration only, below 4.5:1), `prose`.
- Fonts: **Geist** (`font-sans`) and **Geist Mono** (`font-mono`) from Google Fonts.
- **shadcn/ui** (new-york style, zinc base) — see [components.json](components.json). Primitives go in [src/components/ui/](src/components/ui/).
- **GSAP** (`gsap` + `@gsap/react` `useGSAP`, with `ScrollTrigger`) for all animation. Always wrap in `gsap.matchMedia()` so reduced motion is respected. (`motion` is installed but unused.)
- **react-icons** — `Lu*` (lucide) for UI icons.
- Path alias: `@/` → `src/` (configured in both [vite.config.ts](vite.config.ts) and [tsconfig.json](tsconfig.json)).
- `__COMMIT_HASH__` is injected at build time by [vite.config.ts](vite.config.ts) (env `VERCEL_GIT_COMMIT_SHA`/`COMMIT_SHA`, else `git rev-parse`, else `"dev"`) and shown in the footer.

## Architecture

**Content is data, not markup.** All content lives in [src/components/PortfolioData.tsx](src/components/PortfolioData.tsx): `journeyData` (the 7 releases, oldest first), `nowData`, `projectsData`, `techStackData` / `devToolsData` (`{ name, role }`, rendered as `package.json`), `principlesData` (rendered as `CONTRIBUTING.md`). To change what the site *says*, edit that file. Interfaces are in [src/lib/types.ts](src/lib/types.ts), suffixed with `I` (e.g. `ReleaseI`, `ProjectItemI`). A release links to a project via `projectId`.

**Routing** ([src/route.tsx](src/route.tsx)), all inside [Layout](src/components/layout/Layout.tsx) (sticky `SiteNav`, `<Outlet />`, footer, `ScrollRestoration`):
- `/` → `Home`: Hero → Journey → HEAD/now → Contact.
- `/projects` → `Projects` grid; `/projects/:projectId` → `ProjectDetails` ("release notes"), `ItemNotFound` if no match.
- `*` → `ItemNotFound` (404 in git voice).

**The journey** ([JourneySection](src/components/section/JourneySection.tsx)) has two modes, chosen by one media query that must stay in sync in two places: `STAGE_QUERY` in [src/lib/journey.ts](src/lib/journey.ts) and the `stage:` custom variant in [src/index.css](src/index.css).
- **Stage** (wide + tall + motion allowed): the stage pins; one scrubbed timeline (labels `release-0…n`, snap to labels) swaps panels and moves `.graph-playhead` / `.graph-fill` in [JourneyGraph](src/components/layout/JourneyGraph.tsx). Graph geometry comes from `graphLayout()` so the SVG and the timeline agree.
- **Rail** (everything else): panels in normal flow beside a rail; with motion, the rail fill scrubs and panels fade up; with reduced motion, nothing animates.
- The `matchMedia` handler clears panel inline styles at the start of every mode, because reverting the previous mode can leave `autoAlpha` styles behind.

**Navigation by section id**, not refs: `journey`, `now`, `contact` (+ `top`). Use `scrollToId` / `scrollToRelease` from [src/lib/journey.ts](src/lib/journey.ts). They respect reduced motion, and in stage mode they scroll to the pin's real start or to a point inside it. Off the home page, nav links go to `/#id` and `Home` scrolls on arrival. To add a navigable section: give it an `id` and add a `navItems` entry in [SiteNav](src/components/controls/SiteNav.tsx).

**The hero git log** ([GitLog](src/components/controls/GitLog.tsx)) is generated from `journeyData` by `buildGraphLog()` in [src/lib/git.ts](src/lib/git.ts), which supports one side branch (the first `lane: "branch"` release forks off; the next `kind: "merge"` release merges it). Commit hashes are decorative, derived from release ids.

**Data flows down as props.** Home sections are presentational and receive data from `Home`; only the standalone pages (`Projects`, `ProjectDetails`) import `PortfolioData` directly.

## Component organization

Under [src/components/](src/components/):
- `ui/` — shadcn/ui primitives (button, badge, card). Generated/vendored; keep edits minimal.
- `page/` — route-level components (`Home`, `Projects`, `ProjectDetails`).
- `section/` — stacked sections of the home page (`HeroSection`, `JourneySection`, `NowSection`, `ContactSection`, `FooterSection`).
- `items/` — repeated blocks (`ReleasePanel`, `ProjectItem`, `DiffBlock`).
- `layout/` — structural/visual chrome (`Layout`, `JourneyGraph`, `BrowserFrame`).
- `controls/` — interactive widgets (`SiteNav`, `GitLog`, `FileViewer` tabs, `CopyEmailButton`, `BackButton`).
- `feedback/` — empty/error states (`ItemNotFound`).

Hooks in [src/hooks/](src/hooks/): `useReveal` (fade-up `[data-reveal]` children on scroll), `useActiveSection` (nav highlight).

## Conventions

- **`cn()` for classnames** — from [src/lib/utils.ts](src/lib/utils.ts) (clsx + tailwind-merge).
- **Variant components** use `class-variance-authority` (`cva`) + `VariantProps` with `asChild` via Radix `Slot` — see [button.tsx](src/components/ui/button.tsx).
- **Style with semantic tokens** (`bg-background`, `text-muted-foreground`, `text-primary`, `text-add`, `border`, …), never raw colors.
- **Balanced git voice**: git shapes the *structure* (tags, `+`/`-` lines, `kind:` prefixes, monospace meta); headlines and sentences stay plain English.
- Components are single default-export functions, one per file, PascalCase filenames. Small private sub-components inside a file are fine.
- Shared constants (social links, résumé path, mail link, repo URL) live in [src/lib/constants.ts](src/lib/constants.ts).

## Notes / gotchas

- Project images are imported `.avif` assets from [src/assets/images/](src/assets/images/) referenced by import in `PortfolioData`. Files under 4 KB get inlined as base64 by Vite's `assetsInlineLimit`, so they won't appear in `dist/assets/` — expected. The company-logo `.avif`s are currently unused.
- `npm run lint` reports 2 pre-existing errors (`react-refresh/only-export-components` in vendored `badge.tsx`/`button.tsx`). Don't mistake these for regressions.
- When testing scroll behavior with scripted jumps, wait for ScrollTrigger's debounced refresh after any viewport resize, or measurements will be stale.
