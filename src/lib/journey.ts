import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { ReleaseI } from "./types";

/** Pinned-stage mode. Keep in sync with the `stage` custom variant in src/index.css */
export const STAGE_QUERY =
  "(min-width: 64rem) and (min-height: 40rem) and (prefers-reduced-motion: no-preference)";
export const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
export const MOTION_QUERY = "(prefers-reduced-motion: no-preference)";

export const JOURNEY_TRIGGER_ID = "journey-stage";

export const releaseAnchorId = (id: string) => `release-${id}`;

export function scrollBehavior(): ScrollBehavior {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches ? "auto" : "smooth";
}

export function scrollToId(id: string) {
  // The pinned stage starts at "top top", not at the scroll-padding offset.
  const stage = id === "journey" ? ScrollTrigger.getById(JOURNEY_TRIGGER_ID) : undefined;
  if (stage) {
    window.scrollTo({ top: stage.start, behavior: scrollBehavior() });
    return;
  }
  document.getElementById(id)?.scrollIntoView({ behavior: scrollBehavior(), block: "start" });
}

/**
 * Scrolls so that release `index` is on stage. In pinned mode that is a point
 * inside the pin's scroll range; in rail mode it is the release's own element.
 */
export function scrollToRelease(index: number, releases: ReleaseI[]) {
  const stage = ScrollTrigger.getById(JOURNEY_TRIGGER_ID);
  if (stage) {
    const progress = releases.length > 1 ? index / (releases.length - 1) : 0;
    window.scrollTo({
      top: stage.start + (stage.end - stage.start) * progress,
      behavior: scrollBehavior(),
    });
    return;
  }
  scrollToId(releaseAnchorId(releases[index].id));
}

/** Commit-graph geometry in SVG user units, shared by the SVG and the GSAP timeline. */
export const GRAPH = { mainX: 14, branchX: 38, labelX: 58, top: 14, gap: 58, width: 116 };

export function graphLayout(releases: ReleaseI[]) {
  const nodes = releases.map((release, i) => ({
    x: release.lane === "branch" ? GRAPH.branchX : GRAPH.mainX,
    y: GRAPH.top + i * GRAPH.gap,
  }));
  const height = GRAPH.top * 2 + Math.max(releases.length - 1, 0) * GRAPH.gap;

  // One side branch: forks off the release before the first branch release,
  // runs down its own lane and curves back into the merge release.
  const firstBranch = releases.findIndex((r) => r.lane === "branch");
  const merge = releases.findIndex((r, i) => r.kind === "merge" && i > firstBranch);
  let branchPath: string | null = null;
  if (firstBranch > 0 && merge !== -1) {
    const fork = nodes[firstBranch - 1];
    const lane = GRAPH.branchX;
    const into = nodes[merge];
    const c = GRAPH.gap * 0.45;
    const firstY = nodes[firstBranch].y;
    const laneEnd = into.y - GRAPH.gap;
    branchPath =
      `M${fork.x} ${fork.y} C${fork.x} ${fork.y + c} ${lane} ${firstY - c} ${lane} ${firstY} ` +
      `L${lane} ${laneEnd} C${lane} ${laneEnd + c} ${into.x} ${into.y - c} ${into.x} ${into.y}`;
  }

  return { nodes, width: GRAPH.width, height, branchPath, firstBranch };
}

/** Tools installed before this release, and the ones it adds. */
export function stackAt(releases: ReleaseI[], index: number) {
  const installed = new Set(releases.slice(0, index).flatMap((r) => r.stack ?? []));
  const added = (releases[index].stack ?? []).filter((dep) => !installed.has(dep));
  return { installedCount: installed.size, added };
}
