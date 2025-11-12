import EducationItem from "../items/EducationItem";
import type { EducationItemI } from "@/lib/types";
import SectionHeader from "../layout/SectionHeader";
import { forwardRef, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface EducationSectionProps {
  educationList: EducationItemI[];
}

const EducationSection = forwardRef<HTMLDivElement, EducationSectionProps>(
  ({ educationList }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
      const items = gsap.utils.toArray("#education-item");
      if (!headerRef.current || items.length === 0) return;

      gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          once: true, // Animation only runs once
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
      <section id="education" ref={ref} className="scroll-mt-20">
        <div ref={containerRef}>
          <div ref={headerRef}>
            <SectionHeader
              title="Education"
              subtitle="My academic journey and continuous learning path"
            />
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[6px] md:left-[180px] top-0 bottom-0 w-px bg-border" />

            <div className="space-y-12">
              {educationList.map((item) => (
                <div key={item.field} id="education-item">
                  <EducationItem item={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
);

export default EducationSection;
