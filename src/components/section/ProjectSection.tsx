import type { ProjectItemI } from "@/lib/types";
import ProjectItem from "../ProjectItem";
import { forwardRef } from "react";
import SectionHeader from "../SectionHeader";
// import { Button } from "../ui/button";
// import { LuArrowRight } from "react-icons/lu";
// import { NavLink } from "react-router";

interface ProjectSectionProps {
  projectList: ProjectItemI[];
}

const ProjectSection = forwardRef<HTMLDivElement, ProjectSectionProps>(
  ({ projectList }, ref) => {
    return (
      <section ref={ref} className="scroll-mt-20">
        <article className="flex items-center justify-between">
          <SectionHeader
            title="My Projects"
            subtitle="Collection of projects that I've built throughout my web development journey"
          />
          {/* <NavLink to={"/projects"}>
            <Button className="p-6" variant={"outline"}>
              <span>View all projects</span>
              <LuArrowRight />
            </Button>
          </NavLink> */}
        </article>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectList.map((project) => (
            <ProjectItem
              key={project.title}
              project={project}
            />
          ))}
        </div>
      </section>
    );
  }
);

export default ProjectSection;
