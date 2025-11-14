import WorkExperienceItem from "../items/WorkExperienceItem";
import type { WorkExperienceItemI } from "@/lib/types";
import SectionHeader from "../layout/SectionHeader";
import { forwardRef, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface WorkExperienceSectionProps {
  workExperienceList: WorkExperienceItemI[];
}

const WorkExperienceSection = forwardRef<
  HTMLDivElement,
  WorkExperienceSectionProps
>(({ workExperienceList }, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const items = gsap.utils.toArray(".work-experience-item");
    if (!headerRef.current || items.length === 0) return;

    gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 50%",
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
          stagger: 0.2,
        },
        "-=0.3"
      );
  }, { scope: containerRef });

  return (
    <section id="work-experience" ref={ref} className="scroll-mt-20">
      <div ref={containerRef}>
        <div ref={headerRef}>
          <SectionHeader
            title="Work Experience"
            subtitle="My professional journey and career milestones"
          />
        </div>
        <div className="space-y-6">
          {workExperienceList.map((exp) => (
            <div key={exp.company} className="work-experience-item">
              <WorkExperienceItem exp={exp} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default WorkExperienceSection;
