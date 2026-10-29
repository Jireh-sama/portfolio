import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import JourneyGraph from "../layout/JourneyGraph";
import ReleasePanel from "../items/ReleasePanel";
import {
  JOURNEY_TRIGGER_ID,
  MOTION_QUERY,
  REDUCED_MOTION_QUERY,
  STAGE_QUERY,
  graphLayout,
  releaseAnchorId,
  stackAt,
} from "@/lib/journey";
import type { ProjectItemI, ReleaseI } from "@/lib/types";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface JourneySectionProps {
  releases: ReleaseI[];
  projects: ProjectItemI[];
}

/** Scroll distance per release while the stage is pinned, as a fraction of the viewport height. */
const SCROLL_PER_RELEASE = 0.9;

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * Desktop ("stage" mode): the section pins and one scrubbed timeline walks the
 * playhead down the commit graph while releases swap in. Everywhere else
 * ("rail" mode): releases sit in normal flow beside a rail that fills on scroll.
 */
const JourneySection = ({ releases, projects }: JourneySectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const total = releases.length;

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      // `motion` and `reduce` are complements, so this handler runs (and re-runs) in every mode.
      const conditions = { stage: STAGE_QUERY, motion: MOTION_QUERY, reduce: REDUCED_MOTION_QUERY };
      mm.add(conditions, (context) => {
        const { stage, reduce } = context.conditions as Record<keyof typeof conditions, boolean>;
        const panels = gsap.utils.toArray<HTMLElement>(".release-panel", sectionRef.current);

        // Start each mode from clean panels: reverting the previous mode can leave inline styles behind.
        for (const panel of panels) panel.removeAttribute("style");

        if (stage) {
          const { nodes } = graphLayout(releases);
          const playhead = ".graph-playhead";
          const fill = ".graph-fill";

          gsap.set(panels, { autoAlpha: 0 });
          gsap.set(panels[0], { autoAlpha: 1 });
          gsap.set(playhead, { x: nodes[0].x, y: nodes[0].y });

          const timeline = gsap.timeline({
            defaults: { ease: "power2.inOut", duration: 0.5 },
            scrollTrigger: {
              id: JOURNEY_TRIGGER_ID,
              trigger: stageRef.current,
              start: "top top",
              end: () => `+=${window.innerHeight * SCROLL_PER_RELEASE * (total - 1)}`,
              pin: true,
              scrub: 0.6,
              snap: {
                snapTo: "labels",
                // Settle on the nearest release instead of projecting scroll velocity past it.
                inertia: false,
                duration: { min: 0.2, max: 0.6 },
                delay: 0.1,
                ease: "power1.inOut",
              },
              invalidateOnRefresh: true,
              onUpdate: (self) => {
                const index = Math.round(self.progress * (total - 1));
                setActive((current) => (current === index ? current : index));
              },
            },
          });

          // Release i is fully on stage at time i; the swap happens in the half-step before it.
          timeline.addLabel("release-0", 0);
          for (let i = 1; i < total; i++) {
            const at = i - 0.75;
            timeline
              .to(panels[i - 1], { autoAlpha: 0, y: -40 }, at)
              .fromTo(panels[i], { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0 }, at)
              .to(playhead, { x: nodes[i].x, y: nodes[i].y }, at)
              .to(fill, { attr: { y2: nodes[i].y } }, at)
              .addLabel(`release-${i}`, i);
          }
          // Hold on the last release until the pin ends.
          timeline.set({}, {}, total - 1);
          return;
        }

        if (reduce) return;

        gsap.fromTo(
          ".rail-fill",
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: { trigger: ".rail-list", start: "top 65%", end: "bottom 65%", scrub: true },
          }
        );
        for (const panel of panels) {
          gsap.from(panel, {
            autoAlpha: 0,
            y: 32,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: { trigger: panel, start: "top 85%", once: true },
          });
        }
      });
      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section id="journey" ref={sectionRef} aria-labelledby="journey-title" className="relative">
      <div ref={stageRef} className="flex flex-col stage:h-svh stage:pt-14">
        <div className="mx-auto flex w-full max-w-6xl items-baseline justify-between px-4 pt-20 sm:px-6 stage:pt-8">
          <h2 id="journey-title" className="font-mono text-sm text-muted-foreground">
            <span aria-hidden className="text-primary">$ </span>
            git log --reverse <span className="text-foreground">journey</span>
          </h2>
          <p aria-hidden className="hidden font-mono text-sm text-muted-foreground stage:block">
            <span className="text-foreground">{pad(active + 1)}</span> / {pad(total)}
          </p>
        </div>

        <div className="mx-auto grid w-full max-w-6xl flex-1 px-4 sm:px-6 stage:min-h-0 stage:grid-cols-[auto_minmax(0,1fr)] stage:gap-12">
          <JourneyGraph
            releases={releases}
            active={active}
            className="hidden h-[min(66vh,34rem)] w-auto self-center stage:block"
          />

          <ol className="rail-list relative pt-6 pb-10 pl-8 stage:h-full stage:p-0">
            <span aria-hidden className="absolute top-0 bottom-0 left-[5px] w-0.5 bg-line stage:hidden">
              <span className="rail-fill absolute inset-0 origin-top bg-primary" />
            </span>

            {releases.map((release, i) => {
              const { installedCount, added } = stackAt(releases, i);
              return (
                <li
                  key={release.id}
                  id={releaseAnchorId(release.id)}
                  className={cn(
                    "release-panel relative scroll-mt-20 py-10",
                    "stage:absolute stage:inset-0 stage:flex stage:items-center stage:py-0"
                  )}
                >
                  <span
                    aria-hidden
                    className="absolute top-[3.15rem] -left-8 size-3 rounded-full border-2 border-primary bg-background stage:hidden"
                  />
                  <ReleasePanel
                    release={release}
                    project={projects.find((project) => project.id === release.projectId)}
                    installedCount={installedCount}
                    addedDeps={added}
                  />
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
