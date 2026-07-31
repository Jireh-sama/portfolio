# CLAUDE.md

Guidance for working in this repo. Personal portfolio site — a single-page scrolling résumé plus dedicated project pages.

## Commands

```bash
npm run dev      # Vite dev server
npm run build    # tsc -b (typecheck all project refs) then vite build
npm run lint     # eslint .
npm run preview  # preview the production build
```

There is no test setup. `npm run build` runs the typecheck (`tsc -b`), so it is the closest thing to a full verification gate.

## Stack

- **React 19** + **TypeScript** + **Vite 7**. The **React Compiler** is enabled (`babel-plugin-react-compiler` in [vite.config.ts](vite.config.ts)) — do not add manual `useMemo`/`useCallback`/`React.memo` for performance; the compiler handles memoization.
- **React Router 7** (`react-router`, not `react-router-dom`) via `createBrowserRouter` in [src/route.tsx](src/route.tsx).
- **Tailwind CSS v4** — CSS-first config, no `tailwind.config.js`. All theme tokens, custom animations, and keyframes live in [src/index.css](src/index.css) under `@theme`/`@theme inline`. Colors are OKLCH CSS variables with light (`:root`) and dark (`.dark`) sets.
- **shadcn/ui** (new-york style, zinc base) — see [components.json](components.json). Primitives go in [src/components/ui/](src/components/ui/). Magic UI and Aceternity registries are configured for `npx shadcn add`.
- **GSAP** (`gsap` + `@gsap/react` `useGSAP`, with `ScrollTrigger`) is the primary scroll-animation tool. **Motion** (`motion`, the Framer Motion successor) is also available.
- **react-icons** for icons — `Si*` (simple-icons) for brand/tech logos, `Lu*` (lucide) for UI icons. Custom SVG icons live in [src/components/icon/](src/components/icon/).
- Path alias: `@/` → `src/` (configured in both [vite.config.ts](vite.config.ts) and [tsconfig.json](tsconfig.json)).

## Architecture

**Content is data, not markup.** All portfolio content (projects, work experience, education, tech stack, principles) is defined as typed arrays in [src/components/PortfolioData.tsx](src/components/PortfolioData.tsx). To change what the site *says*, edit that file — not the components. Note it is `.tsx` because some entries embed JSX (icon nodes). Interfaces for every data shape are in [src/lib/types.ts](src/lib/types.ts) and are suffixed with `I` (e.g. `ProjectItemI`, `WorkExperienceItemI`).

**Routing** ([src/route.tsx](src/route.tsx)):
- `/` → `Home` — the full scrolling one-pager (all sections stacked).
- `/projects` → `Projects` — grid of all projects.
- `/projects/:projectId` → `ProjectDetails` — looked up by `id` against `projectsData`; renders `ItemNotFound` if no match.
- All wrapped in [Layout](src/components/layout/Layout.tsx) (`<Outlet />`, floating nav, blob background, footer).

**Section scroll navigation via shared refs.** Section DOM refs live in a React context, [src/context/useRefs.tsx](src/context/useRefs.tsx) (`RefsProvider` wraps the app in [main.tsx](src/main.tsx)). [Home](src/components/page/Home.tsx) attaches these refs to each section; [FloatingNav](src/components/controls/FloatingNav.tsx) calls `scrollIntoView` on them and uses an `IntersectionObserver` (keyed on section `id`s) to highlight the active tab. When adding a navigable section: add a ref to the context, wire it in `Home`, and add a `navItems` entry (matching `id`) in `FloatingNav`.

**Data flows down as props.** Sections are presentational — they receive their data list as a prop from `Home` and take a `ref` via `forwardRef` (see [ProjectSection.tsx](src/components/section/ProjectSection.tsx)). They don't import `PortfolioData` themselves (the standalone `Projects`/`ProjectDetails` pages do, since they're not children of `Home`).

## Component organization

Under [src/components/](src/components/):
- `ui/` — shadcn/ui + Magic UI/Aceternity primitives (button, card, badge, marquee, aurora-text, etc.). Generated/vendored style; keep edits minimal.
- `page/` — route-level components (`Home`, `Projects`, `ProjectDetails`).
- `section/` — the large stacked sections of the one-pager (`HeroSection`, `AboutMeSection`, `ProjectSection`, …).
- `items/` — a single repeated card/row within a section (`ProjectItem`, `WorkExperienceItem`, `EducationItem`).
- `layout/` — structural/visual chrome (`Layout`, `SectionHeader`, dividers).
- `controls/` — interactive widgets (`FloatingNav`, buttons, CTAs).
- `icon/` — hand-authored SVG icon components.
- `feedback/` — empty/error states (`ItemNotFound`).

## Conventions

- **`cn()` for classnames** — merge Tailwind classes with `cn(...)` from [src/lib/utils.ts](src/lib/utils.ts) (clsx + tailwind-merge). Used everywhere for conditional styling.
- **Variant components** use `class-variance-authority` (`cva`) + `VariantProps`, forwarding a `ref` and supporting `asChild` via Radix `Slot` — see [button.tsx](src/components/ui/button.tsx) as the canonical pattern.
- **Styling is Tailwind utility classes** against the semantic token names (`bg-background`, `text-muted-foreground`, `text-primary`, `border`, …). Prefer these tokens over raw colors so light/dark both work; brand hex values appear only for tech-logo hover accents.
- Components are single default-export functions/`forwardRef`s, one per file, PascalCase filenames.
- Shared config constants (social links) live in [src/lib/constants.ts](src/lib/constants.ts).

## Notes / gotchas

- Several source **filenames contain typos** but are imported by that exact spelling — don't "fix" them without updating imports: `BlobkBackground.tsx`, `SimpleDIvider.tsx`, `ScreenSizeIndicaator.tsx`.
- `SimpleDIvider.tsx` is the divider `Home` renders. [SectionDivider.tsx](src/components/layout/SectionDivider.tsx) is unused dead code and assigns `centerLineRef` to two different elements, so it never worked correctly.
- [index.css](src/index.css) has a duplicated `@layer base { ... }` block — harmless but redundant.
- Project images are imported `.avif` assets from [src/assets/images/](src/assets/images/) and referenced by import in `PortfolioData`, not by public-path string. Note that files **under 4 KB get inlined as base64 data URIs** by Vite's default `assetsInlineLimit`, so small logos won't appear in `dist/assets/` — that's expected, not a broken build.
- `npm run lint` currently reports 4 pre-existing errors (`react-refresh/only-export-components` in `badge.tsx`/`button.tsx`/`useRefs.tsx`, one `no-explicit-any` in `background-ripple-effect.tsx`) plus an exhaustive-deps warning in `FloatingNav`. Don't mistake these for regressions from your change.
