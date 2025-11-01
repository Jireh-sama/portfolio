import { useEffect } from "react";
import { projectsData } from "@/lib/constants";
import ProjectItem from "../ProjectItem";
import SectionHeader from "../SectionHeader";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SectionHeader
        title="My Projects"
        subtitle="Collection of projects that I've built throughout my web development journey"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project) => (
          <ProjectItem key={project.title} project={project} />
        ))}
      </div>
    </>
  );
};

export default Projects;
