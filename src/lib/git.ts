import type { ReleaseI } from "./types";

/** Deterministic, decorative 7-char "commit hash" for a string (FNV-1a). */
export function shortHash(seed: string): string {
  let hash = 0x811c9dc5;
  for (let i = 0; i < seed.length; i++) {
    hash ^= seed.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193);
  }
  return (hash >>> 0).toString(16).padStart(8, "0").slice(0, 7);
}

export type GraphLogLine =
  | { type: "commit"; graph: string; release: ReleaseI; index: number }
  | { type: "edge"; graph: string };

/**
 * Builds `git log --graph --oneline` lines, newest first, for a history with at
 * most one side branch: it forks off main before the first "branch" release and
 * is merged back by the first "merge" release after it.
 */
export function buildGraphLog(releases: ReleaseI[]): GraphLogLine[] {
  const firstBranch = releases.findIndex((r) => r.lane === "branch");
  const merge = releases.findIndex((r, i) => r.kind === "merge" && i > firstBranch);
  const hasBranch = firstBranch !== -1 && merge !== -1;

  const lines: GraphLogLine[] = [];
  for (let i = releases.length - 1; i >= 0; i--) {
    const release = releases[i];
    const open = hasBranch && i < merge && i >= firstBranch;

    if (hasBranch && i === firstBranch - 1) lines.push({ type: "edge", graph: "|/" });

    let graph = "*";
    if (open) graph = release.lane === "branch" ? "| *" : "* |";
    lines.push({ type: "commit", graph, release, index: i });

    if (hasBranch && i === merge) lines.push({ type: "edge", graph: "|\\" });
  }
  return lines;
}
