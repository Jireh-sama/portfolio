import type { ProjectItemI } from "@/lib/types";
import ProjectItem from "../ProjectItem";
import { forwardRef } from "react";

interface ProjectSectionProps {
  projectList: ProjectItemI[]
}

const ProjectSection = forwardRef<HTMLDivElement, ProjectSectionProps>(({ projectList }, ref) => {
  return (
    <section ref={ref} className="scroll-mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectList.map((project) => (
          <ProjectItem key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
});

export default ProjectSection;
