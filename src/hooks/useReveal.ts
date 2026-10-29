import type { RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { MOTION_QUERY } from "@/lib/journey";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/** Fades `[data-reveal]` elements inside `scope` up as they scroll into view. Skipped for reduced motion. */
export function useReveal(scope: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_QUERY, () => {
        for (const element of gsap.utils.toArray<HTMLElement>("[data-reveal]", scope.current)) {
          gsap.from(element, {
            autoAlpha: 0,
            y: 32,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: element, start: "top 88%", once: true },
          });
        }
      });
      return () => mm.revert();
    },
    { scope }
  );
}
