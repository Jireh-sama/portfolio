import { Link } from "react-router";
import { LuArrowRight, LuArrowUpRight } from "react-icons/lu";
import DiffBlock from "./DiffBlock";
import BrowserFrame from "../layout/BrowserFrame";
import type { ProjectItemI, ReleaseI } from "@/lib/types";
import { cn } from "@/lib/utils";

interface ReleasePanelProps {
  release: ReleaseI;
  project?: ProjectItemI;
  installedCount: number;
  addedDeps: string[];
}

const frameLabel = (project: ProjectItemI) =>
  project.liveLink ? new URL(project.liveLink).host.replace(/^www\./, "") : project.title;

/** One release on the journey stage (or in the rail on small screens). */
const ReleasePanel = ({ release, project, installedCount, addedDeps }: ReleasePanelProps) => {
  return (
    <article
      className={cn(
        "grid w-full items-center gap-10",
        project && "stage:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] stage:gap-14"
      )}
    >
      <div className="min-w-0 max-w-2xl">
        <p className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs">
          <span className="rounded bg-primary px-2 py-0.5 font-medium text-primary-foreground">
            tag {release.tag}
          </span>
          <span className="text-muted-foreground stage:hidden">{release.year}</span>
        </p>

        <h3 className="mt-4 text-3xl leading-[1.05] font-semibold tracking-[-0.035em] text-balance sm:text-4xl">
          <span className="font-medium text-muted-foreground">{release.kind}:</span> {release.title}
        </h3>
        <p className="mt-3 font-mono text-xs leading-relaxed text-muted-foreground">{release.meta}</p>
        <p className="mt-4 max-w-xl leading-relaxed text-pretty text-prose">{release.summary}</p>

        <DiffBlock added={release.added} removed={release.removed} className="mt-5 max-w-xl" />

        <p className="mt-4 flex flex-wrap gap-x-2 font-mono text-xs text-muted-foreground">
          <span>stack</span>
          {installedCount > 0 && <span>· {installedCount} installed</span>}
          {addedDeps.length > 0 ? (
            addedDeps.map((dep) => (
              <span key={dep} className="text-add">
                +{dep}
              </span>
            ))
          ) : (
            <span>· up to date</span>
          )}
        </p>

        {(project || release.link) && (
          <p className="mt-5 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm">
            {project && (
              <Link
                to={`/projects/${project.id}`}
                className="group inline-flex items-center gap-1.5 rounded-sm text-primary underline-offset-4 hover:underline"
              >
                read the release notes
                <LuArrowRight aria-hidden className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            )}
            {release.link && (
              <a
                href={release.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
              >
                {release.link.label}
                <LuArrowUpRight aria-hidden className="size-3.5" />
              </a>
            )}
          </p>
        )}
      </div>

      {project && (
        <Link
          to={`/projects/${project.id}`}
          tabIndex={-1}
          aria-hidden
          className="group block min-w-0"
        >
          <BrowserFrame
            label={frameLabel(project)}
            className="transition-transform duration-500 ease-out stage:-rotate-[1.2deg] group-hover:rotate-0 group-hover:scale-[1.015]"
          >
            <img
              src={project.image}
              alt=""
              loading="lazy"
              decoding="async"
              className="aspect-[16/10] w-full object-cover"
            />
          </BrowserFrame>
        </Link>
      )}
    </article>
  );
};

export default ReleasePanel;
