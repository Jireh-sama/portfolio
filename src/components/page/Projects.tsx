import ProjectItem from "../items/ProjectItem";
import BackButton from "../controls/BackButton";
import { journeyData, projectsData } from "../PortfolioData";

const Projects = () => {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <BackButton to="/#journey" label="back to the journey" />

      <header className="mt-12">
        <p className="font-mono text-sm text-muted-foreground">
          <span aria-hidden className="text-primary">$ </span>ls ~/projects
        </p>
        <h1 className="mt-3 text-5xl font-bold tracking-[-0.045em] sm:text-6xl">Projects</h1>
        <p className="mt-4 max-w-xl leading-relaxed text-prose">
          Things I've shipped along the way. Each one has release notes: what it is, what shipped,
          and what had to be fixed.
        </p>
      </header>

      <ul className="mt-12 grid gap-8 md:grid-cols-2">
        {projectsData.map((project) => (
          <li key={project.id}>
            <ProjectItem
              project={project}
              release={journeyData.find((release) => release.projectId === project.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
