import type { ReactNode } from "react";
import { useParams } from "react-router";
import { LuExternalLink, LuGithub } from "react-icons/lu";
import { journeyData, projectsData } from "../PortfolioData";
import { Button } from "@/components/ui/button";
import ItemNotFound from "../feedback/ItemNotFound";
import BackButton from "../controls/BackButton";
import BrowserFrame from "../layout/BrowserFrame";
import DiffBlock from "../items/DiffBlock";

const Heading = ({ id, children }: { id: string; children: ReactNode }) => (
  <h2 id={id} className="font-mono text-sm font-medium text-foreground">
    <span aria-hidden className="text-dim">## </span>
    {children}
  </h2>
);

const ProjectDetails = () => {
  const { projectId } = useParams();
  const project = projectsData.find((p) => p.id === projectId);

  if (!project) {
    return (
      <ItemNotFound
        title="Project not found"
        description="No release in the history matches this project."
        redirectLink="/projects"
        redirectLabel="all projects"
      />
    );
  }

  const release = journeyData.find((r) => r.projectId === project.id);

  return (
    <article className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <BackButton to="/projects" label="all projects" />

      <header className="mt-12 max-w-3xl">
        <p className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs">
          {release && (
            <span className="rounded bg-primary px-2 py-0.5 font-medium text-primary-foreground">
              tag {release.tag}
            </span>
          )}
          <span className="text-muted-foreground">release notes{release && ` · ${release.meta}`}</span>
        </p>
        <h1 className="mt-5 text-5xl leading-[0.95] font-bold tracking-[-0.045em] text-balance sm:text-6xl">
          {project.title}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-pretty text-prose">{project.about}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.liveLink && (
            <Button asChild size="lg" className="px-5">
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                <LuExternalLink />
                Live site
              </a>
            </Button>
          )}
          <Button asChild size="lg" variant="outline" className="px-5">
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <LuGithub />
              Source code
            </a>
          </Button>
        </div>
      </header>

      <BrowserFrame
        label={project.liveLink ? new URL(project.liveLink).host.replace(/^www\./, "") : project.title}
        className="mt-14"
      >
        <img src={project.image} alt={`${project.title} screenshot`} className="aspect-video w-full object-cover" />
      </BrowserFrame>

      <div className="mt-16 grid gap-14 lg:grid-cols-[minmax(0,1fr)_17rem]">
        <div className="space-y-14">
          <section aria-labelledby="what-it-is">
            <Heading id="what-it-is">What it is</Heading>
            <p className="mt-4 text-lg leading-relaxed text-pretty text-prose">{project.description}</p>
          </section>

          <section aria-labelledby="shipped">
            <Heading id="shipped">Shipped</Heading>
            <DiffBlock added={project.features} className="mt-4" />
          </section>

          {project.problemsAndSolutions && project.problemsAndSolutions.length > 0 && (
            <section aria-labelledby="fixes">
              <Heading id="fixes">Fixes</Heading>
              <ol className="mt-4 space-y-4">
                {project.problemsAndSolutions.map((item) => (
                  <li key={item.title} className="rounded-lg border border-border bg-card p-5 sm:p-6">
                    <h3 className="font-semibold tracking-tight">{item.title}</h3>
                    <dl className="mt-4 space-y-3 text-[15px] leading-relaxed">
                      <div className="grid gap-1 sm:grid-cols-[4rem_1fr] sm:gap-4">
                        <dt className="font-mono text-xs leading-6 text-del">issue</dt>
                        <dd className="text-prose">{item.problem}</dd>
                      </div>
                      <div className="grid gap-1 sm:grid-cols-[4rem_1fr] sm:gap-4">
                        <dt className="font-mono text-xs leading-6 text-add">fix</dt>
                        <dd className="text-prose">{item.solution}</dd>
                      </div>
                    </dl>
                  </li>
                ))}
              </ol>
            </section>
          )}
        </div>

        <aside aria-labelledby="stack" className="self-start lg:sticky lg:top-24">
          <Heading id="stack">Stack</Heading>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <li key={tech} className="rounded-full border border-border px-3 py-1 font-mono text-xs text-prose">
                {tech}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </article>
  );
};

export default ProjectDetails;
