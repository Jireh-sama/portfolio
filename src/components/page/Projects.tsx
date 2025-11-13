import { useEffect } from "react";
import ProjectItem from "../items/ProjectItem";
import SectionHeader from "../layout/SectionHeader";
import BackButton from "../controls/BackButton";
import { projectsData } from "../PortfolioData";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <BackButton />
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
