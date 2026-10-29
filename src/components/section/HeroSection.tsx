import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { LuArrowRight, LuGithub, LuLinkedin } from "react-icons/lu";
import { Button } from "../ui/button";
import GitLog from "../controls/GitLog";
import { composeMailLink, socialContacts } from "@/lib/constants";
import { MOTION_QUERY, scrollToId } from "@/lib/journey";
import type { ReleaseI } from "@/lib/types";

gsap.registerPlugin(useGSAP);

interface HeroSectionProps {
  releases: ReleaseI[];
}

const HeroSection = ({ releases }: HeroSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_QUERY, () => {
        gsap.from(".hero-intro > *", {
          autoAlpha: 0,
          y: 28,
          duration: 0.8,
          stagger: 0.08,
          ease: "power3.out",
        });
        gsap.from(".git-log", { autoAlpha: 0, y: 20, duration: 0.8, delay: 0.2, ease: "power3.out" });
        // Type the log out line by line
        gsap.fromTo(
          ".git-log-line",
          { clipPath: "inset(0 100% 0 0)" },
          {
            clipPath: "inset(0 0% 0 0)",
            duration: 0.32,
            ease: "steps(16)",
            stagger: 0.085,
            delay: 0.45,
            clearProps: "clipPath",
          }
        );
      });
      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="top"
      ref={sectionRef}
      aria-labelledby="hero-title"
      className="relative mx-auto grid min-h-[calc(100svh-3.5rem)] max-w-6xl items-center gap-12 px-4 pt-14 pb-24 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:gap-14 lg:py-16"
    >
      <div className="hero-intro">
        <p className="inline-flex items-center gap-2.5 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
          <span aria-hidden className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60 motion-reduce:hidden" />
            <span className="relative inline-flex size-2 rounded-full bg-primary" />
          </span>
          open to remote full-stack roles
        </p>

        <h1
          id="hero-title"
          className="mt-7 text-7xl leading-[0.88] font-bold tracking-[-0.055em] sm:text-8xl lg:text-[8.5rem]"
        >
          Jireh
        </h1>
        <p className="mt-6 text-2xl leading-tight font-medium tracking-tight sm:text-3xl">
          Full-stack developer.
          <br />
          <span className="text-muted-foreground">Shipping since 2022.</span>
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button asChild size="lg" className="group px-6">
            <a href={composeMailLink} target="_blank" rel="noopener noreferrer">
              Send email
              <LuArrowRight className="transition-transform group-hover:translate-x-0.5" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="px-5">
            <a href={socialContacts.github} target="_blank" rel="noopener noreferrer">
              <LuGithub />
              GitHub
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="px-5">
            <a href={socialContacts.linkedIn} target="_blank" rel="noopener noreferrer">
              <LuLinkedin />
              LinkedIn
            </a>
          </Button>
        </div>
      </div>

      <GitLog releases={releases} />

      <a
        href="#journey"
        onClick={(event) => {
          event.preventDefault();
          scrollToId("journey");
        }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 rounded-sm font-mono text-xs text-muted-foreground transition-colors hover:text-foreground lg:block"
      >
        <span aria-hidden>↓ </span>scroll to replay the history
      </a>
    </section>
  );
};

export default HeroSection;
