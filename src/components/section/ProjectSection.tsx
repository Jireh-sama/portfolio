import type { ProjectItemI } from "@/lib/types";
import ProjectItem from "../items/ProjectItem";
import { forwardRef, useRef } from "react";
import SectionHeader from "../layout/SectionHeader";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ProjectSectionProps {
  projectList: ProjectItemI[];
}

const ProjectSection = forwardRef<HTMLDivElement, ProjectSectionProps>(
  ({ projectList }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
      const items = gsap.utils.toArray(".project-item");
      if (!headerRef.current || items.length === 0) return;

      gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          once: true,
        },
      })
        .from(headerRef.current, {
          opacity: 0,
          y: 50,
          duration: 0.6,
          ease: "power2.out",
        })
        .from(
          items,
          {
            opacity: 0,
            y: 50,
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.15,
          },
          "-=0.3"
        );
    }, { scope: containerRef });

    return (
      <section id="project" ref={ref} className="scroll-mt-20">
        <div ref={containerRef}>
          <article ref={headerRef} className="flex items-center justify-between">
            <SectionHeader
              title="My Projects"
              subtitle="Collection of projects that I've built throughout my web development journey"
            />
          </article>
          {/* Grid of projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectList.map((project) => (
              <div key={project.title} className="project-item">
                <ProjectItem project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
);

export default ProjectSection;
