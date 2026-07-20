import type { ProjectItemI } from "@/lib/types";
import { Badge } from "../ui/badge";
import { NavLink } from "react-router";
import { LuEye } from "react-icons/lu";
import { useState } from "react";

interface ProjectItemProps {
  project: ProjectItemI;
}

const VISIBLE_TECH_COUNT = 4;

const ProjectItem = ({ project }: ProjectItemProps) => {
  const [showAllTech, setShowAllTech] = useState(false);
  const hiddenCount = project.techStack.length - VISIBLE_TECH_COUNT;
  const visibleTech = showAllTech
    ? project.techStack
    : project.techStack.slice(0, VISIBLE_TECH_COUNT);

  return (
    <div className="relative overflow-hidden rounded-2xl bg-card border border-border/50 shadow-xs">
      <div className="relative aspect-video overflow-hidden bg-muted cursor-pointer group">
        <NavLink to={`/projects/${project.id}`}>
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-black shadow-lg">
              <LuEye className="size-4" />
              Click to view
            </span>
          </div>
        </NavLink>
      </div>

      <div className="relative p-6">
        <h3 className="mb-3 text-2xl font-bold text-foreground">
          {project.title}
        </h3>
        <p className="mb-4 text-muted-foreground leading-relaxed line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {visibleTech.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="px-3 py-1 text-xs font-medium backdrop-blur-sm animate-in fade-in zoom-in-95 duration-200"
            >
              {tech}
            </Badge>
          ))}
          {hiddenCount > 0 && (
            <button
              type="button"
              onClick={() => setShowAllTech((prev) => !prev)}
              aria-expanded={showAllTech}
              aria-label={
                showAllTech
                  ? "Show fewer technologies"
                  : `Show ${hiddenCount} more technologies`
              }
            >
              <Badge
                variant="secondary"
                className="px-3 py-1 text-xs font-medium cursor-pointer transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                {showAllTech ? "Show less" : `+${hiddenCount} more`}
              </Badge>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
