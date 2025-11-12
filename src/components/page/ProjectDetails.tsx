import { projectsData } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LuGithub, LuExternalLink } from "react-icons/lu";
import { useEffect } from "react";
import { useParams } from "react-router";
import ItemNotFound from "../feedback/ItemNotFound";
import BackButton from "../controls/BackButton";

const ProjectDetails = () => {
  const { projectId } = useParams();
  console.log(projectId);
  const project = projectsData.find((p) => p.id === projectId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <ItemNotFound
        title="Project Not Found"
        description="Sorry, we couldn't find the project you're looking for."
        redictLink="/projects"
      />
    );
  }

  return (
    <>
      <BackButton />

      <main>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">
          {project.title}
        </h1>
        <p className="text-lg text-muted-foreground mb-8 text-pretty whitespace-pre-line">
          {project.about}
        </p>

        <img
          src={project.image}
          alt={project.title}
          className="rounded-2xl aspect-video object-cover w-full mb-12 shadow-lg"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                About this project
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
          <aside className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Links</h3>
              <div className="flex flex-col items-start gap-4">
                {project.liveLink && (
                  <Button asChild className="w-full">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LuExternalLink className="mr-2 size-4" />
                      Live Demo
                    </a>
                  </Button>
                )}

                <Button asChild variant="secondary" className="w-full">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LuGithub className="mr-2 size-4" />
                    Source Code
                  </a>
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
};

export default ProjectDetails;
