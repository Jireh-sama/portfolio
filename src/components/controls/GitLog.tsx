import { buildGraphLog, shortHash } from "@/lib/git";
import { scrollToId, scrollToRelease } from "@/lib/journey";
import type { ReleaseI } from "@/lib/types";

interface GitLogProps {
  releases: ReleaseI[];
}

const GRAPH_WIDTH = 4;

const lineButtonClass =
  "group flex w-full items-baseline gap-2.5 rounded px-2 -mx-2 text-left whitespace-pre transition-colors hover:bg-primary/[0.07] focus-visible:bg-primary/[0.07] focus-visible:outline-1 focus-visible:outline-primary/60";

/** `git log --graph --oneline` of the journey. Each commit jumps to its stop on the stage. */
const GitLog = ({ releases }: GitLogProps) => {
  const lines = buildGraphLog(releases);

  return (
    <figure className="git-log min-w-0 overflow-hidden rounded-xl border border-border bg-card font-mono text-[11.5px] leading-[1.95] shadow-2xl shadow-black/40 sm:text-[13px]">
      <figcaption className="flex items-center gap-2 border-b border-border px-4 py-2.5 text-muted-foreground">
        <span aria-hidden className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-line" />
          <span className="size-2.5 rounded-full bg-line" />
          <span className="size-2.5 rounded-full bg-line" />
        </span>
        <span className="ml-2">~/jireh</span>
        <span className="sr-only">: career history, newest first. Select a commit to jump to it.</span>
      </figcaption>

      <div className="overflow-x-auto px-4 py-4 sm:px-5">
        <p className="git-log-line text-muted-foreground">
          <span className="text-primary">$</span> git log --graph --oneline
        </p>
        <ol>
          <li className="git-log-line">
            <button
              type="button"
              onClick={() => scrollToId("now")}
              aria-label="Now: open to remote full-stack roles"
              className={lineButtonClass}
            >
              <span className="text-primary">{"*".padEnd(GRAPH_WIDTH)}</span>
              <span className="text-hash">{shortHash("HEAD")}</span>
              <span>
                <span className="text-primary">(HEAD → main)</span> now: open to work
                <span aria-hidden className="ml-0.5 animate-blink text-primary motion-reduce:animate-none">
                  ▍
                </span>
              </span>
            </button>
          </li>
          {lines.map((line, i) =>
            line.type === "edge" ? (
              <li key={`edge-${i}`} aria-hidden className="git-log-line whitespace-pre text-primary">
                {line.graph}
              </li>
            ) : (
              <li key={line.release.id} className="git-log-line">
                <button
                  type="button"
                  onClick={() => scrollToRelease(line.index, releases)}
                  aria-label={`${line.release.year}: ${line.release.title}`}
                  className={lineButtonClass}
                >
                  <span className="text-primary">{line.graph.padEnd(GRAPH_WIDTH)}</span>
                  <span className="text-hash">{shortHash(line.release.id)}</span>
                  <span className="text-foreground/85 group-hover:text-foreground">{line.release.logLine}</span>
                  <span className="ml-auto pl-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                    {line.release.year} →
                  </span>
                </button>
              </li>
            )
          )}
        </ol>
      </div>
    </figure>
  );
};

export default GitLog;
