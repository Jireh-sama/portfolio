import type { ProjectItemI } from "@/lib/types";
import { Badge } from "./ui/badge";
import { NavLink } from "react-router";

interface ProjectItemProps {
  project: ProjectItemI;
}

const ProjectItem = ({ project }: ProjectItemProps) => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-card border border-border/50 shadow-xs">
      <div className="relative aspect-video overflow-hidden bg-muted cursor-pointer group">
        <NavLink to={`/projects/${project.id}`}>
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
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
          {project.techStack.slice(0, 4).map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="px-3 py-1 text-xs font-medium backdrop-blur-sm"
            >
              {tech}
            </Badge>
          ))}
          {project.techStack.length > 4 && (
            <Badge
              variant="secondary"
              className="px-3 py-1 text-xs font-medium"
            >
              +{project.techStack.length - 4} more
            </Badge>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
