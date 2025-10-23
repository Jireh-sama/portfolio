import type { ProjectItemI } from "@/lib/types";
import { Badge } from "./ui/badge";

interface ProjectItemProps {
  project: ProjectItemI;
}

const ProjectItem = ({ project }: ProjectItemProps) => {
  return (
    <div
      className="relative overflow-hidden rounded-2xl bg-card cursor-pointer border border-border/50"
    >

      <div className="relative aspect-video overflow-hidden bg-muted">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover"
        />
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
}

export default ProjectItem
