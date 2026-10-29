import { Link } from "react-router";
import { LuArrowRight } from "react-icons/lu";
import type { ProjectItemI, ReleaseI } from "@/lib/types";

interface ProjectItemProps {
  project: ProjectItemI;
  release?: ReleaseI;
}

const VISIBLE_TECH_COUNT = 5;

const ProjectItem = ({ project, release }: ProjectItemProps) => {
  const hiddenCount = project.techStack.length - VISIBLE_TECH_COUNT;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/40 has-[a:focus-visible]:ring-2 has-[a:focus-visible]:ring-ring">
      <div className="aspect-video overflow-hidden border-b border-border bg-muted">
        <img
          src={project.image}
          alt=""
          loading="lazy"
          decoding="async"
          className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        {release && (
          <p className="flex items-center gap-3 font-mono text-xs">
            <span className="rounded bg-primary px-2 py-0.5 font-medium text-primary-foreground">
              tag {release.tag}
            </span>
            <span className="text-muted-foreground">{release.year}</span>
          </p>
        )}
        <h2 className="mt-4 text-2xl font-semibold tracking-tight">
          {/* Stretched link: the whole card is clickable */}
          <Link to={`/projects/${project.id}`} className="after:absolute after:inset-0 focus-visible:outline-none">
            {project.title}
          </Link>
        </h2>
        <p className="mt-3 line-clamp-3 leading-relaxed text-prose">{project.description}</p>
        <p className="mt-5 font-mono text-xs text-muted-foreground">
          {project.techStack.slice(0, VISIBLE_TECH_COUNT).join(" · ")}
          {hiddenCount > 0 && ` · +${hiddenCount}`}
        </p>
        <p aria-hidden className="mt-auto inline-flex items-center gap-1.5 pt-6 font-mono text-sm text-primary">
          read the release notes
          <LuArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
        </p>
      </div>
    </article>
  );
};

export default ProjectItem;
