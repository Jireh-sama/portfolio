import SectionHeader from "../layout/SectionHeader";
import { forwardRef, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { PrincipleI } from "@/lib/types";

interface AboutMeSectionProps {
  principleList: PrincipleI[];
}

gsap.registerPlugin(ScrollTrigger);

const AboutMeSection = forwardRef<HTMLDivElement, AboutMeSectionProps>(
  ({ principleList }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
      if (!containerRef.current) return;

      // Reset cards visible first to prevent staying hidden
      gsap.set(".principle-card", { opacity: 1, y: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 50%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      tl.from(".about-header", {
        opacity: 0,
        y: 40,
        duration: 0.6,
        ease: "power2.out",
      })
        .from(
          ".about-intro",
          { opacity: 0, y: 40, duration: 0.6, ease: "power2.out" },
          "-=0.4"
        )
        .from(
          ".principle-card",
          {
            opacity: 0,
            y: 40,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out",
          },
          "-=0.2"
        );
    }, []);

    return (
      <section id="about-me" ref={ref} className="scroll-mt-20">
        <div ref={containerRef}>
          <article className="about-header mb-12">
            <SectionHeader centered title="About Me" />
          </article>

          {/* About me descrition */}
          <div className="about-intro max-w-3xl mx-auto text-center mb-16 px-4">
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              I’m <span className="font-semibold text-foreground">Jireh</span>,
              an{" "}
              <span className="text-primary font-medium">
                Information Technology graduate
              </span>{" "}
              who discovered a genuine passion for building meaningful and
              modern web experiences.
              <br />
              <br />
              My journey began back in{" "}
              <span className="font-medium text-foreground">2022</span>, when I
              started learning the basics —{" "}
              <strong className="text-foreground">
                HTML, CSS, and JavaScript
              </strong>
              . At first, it was just curiosity, a simple interest in how
              websites worked. But everything changed when I encountered my
              first framework,{" "}
              <span className="font-semibold text-foreground">React.js</span>.
              <br />
              <br />
              React was the turning point for me. Seeing how components, state,
              and logic came together to build real, interactive experiences
              made the process exciting. It wasn’t just coding anymore — it felt
              like creating. That fascination pushed me to take web development
              seriously and commit to growing in this field.
              <br />
              <br />
              Since then, I’ve been constantly learning, experimenting, and
              building projects that help me grow both creatively and
              technically. Working in the{" "}
              <strong className="text-foreground">
                JavaScript ecosystem
              </strong>{" "}
              has taught me the importance of writing clean, efficient, and
              purposeful code.
              <br />
              <br />
              Today, I’m ready to begin my professional journey as a{" "}
              <strong className="text-foreground">Web Developer</strong>, with a
              long-term goal of becoming a skilled{" "}
              <strong className="text-foreground">Full-Stack Developer</strong>.
              I aim to create solutions that are not only functional but also
              thoughtfully designed and genuinely helpful to users.
            </p>
          </div>

          {/* Principles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
            {principleList.map((principle) => (
              <div
                key={principle.title}
                className="principle-card opacity-0 p-6 rounded-2xl bg-card/50 border border-border backdrop-blur-sm space-y-3 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:shadow-blue-950 cursor-pointer"
              >
                <div className="flex justify-center">{principle.icon}</div>
                <h3 className="text-lg font-semibold text-foreground">
                  {principle.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
);

export default AboutMeSection;
