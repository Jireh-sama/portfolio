import type { TechItemI } from "@/lib/types";
import SectionHeader from "../layout/SectionHeader";
import { Marquee } from "../ui/marquee";
import { forwardRef, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { devToolsData } from "../PortfolioData";

gsap.registerPlugin(ScrollTrigger);

interface MyTechStackSectionProps {
  techStackList: TechItemI[];
  devToolsList: TechItemI[];
}

const MyTechStackSection = forwardRef<HTMLDivElement, MyTechStackSectionProps>(
  ({ techStackList }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const techMarqueeRef = useRef<HTMLDivElement>(null);
    const toolsMarqueeRef = useRef<HTMLDivElement>(null);

    useGSAP(
      () => {
        if (
          !headerRef.current ||
          !techMarqueeRef.current ||
          !toolsMarqueeRef.current
        )
          return;

        gsap
          .timeline({
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
            techMarqueeRef.current,
            {
              opacity: 0,
              y: 30,
              duration: 0.6,
              ease: "power2.out",
            },
            "-=0.3"
          )
          .from(toolsMarqueeRef.current, {
            opacity: 0,
            y: 30,
            duration: 0.6,
            ease: "power2.out",
          });
      },
      { scope: containerRef }
    );

    return (
      <section id="tech-stack" ref={ref} className="scroll-mt-20">
        <div ref={containerRef}>
          <article ref={headerRef}>
            <SectionHeader
              title="Tech Stack"
              subtitle="Technologies and tools I work with to build modern applications"
              centered={true}
            />
          </article>

          {/* tech stack section */}
          <div className="relative overflow-hidden mb-8">
            <div ref={techMarqueeRef}>
              <Marquee className="[--duration:20s] cursor-pointer">
                {techStackList.map((stack) => (
                  <div
                    key={stack.name}
                    className="flex items-center p-2 md:p-4 space-x-4"
                  >
                    {stack.logo}
                  </div>
                ))}
              </Marquee>
            </div>
            {/* fade overlay */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background via-background/60 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background via-background/60 to-transparent" />
          </div>

          {/* Dev tools section */}
          <div className="relative overflow-hidden">
            <div ref={toolsMarqueeRef}>
              <Marquee
                reverse={true}
                className="[--duration:23s] cursor-pointer"
              >
                {devToolsData.map((stack) => (
                  <div
                    key={stack.name}
                    className="flex items-center p-2 md:p-4 space-x-4"
                  >
                    {stack.logo}
                  </div>
                ))}
              </Marquee>
            </div>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background via-background/60 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background via-background/60 to-transparent" />
          </div>
        </div>
      </section>
    );
  }
);

export default MyTechStackSection;
