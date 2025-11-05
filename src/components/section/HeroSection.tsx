import CustomBadge from "../CustomBadge";
import { AuroraText } from "../ui/aurora-text";
import CTAButtons from "../CTAButtons";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP); 


const HeroSection = () => {

  const sectionRef = useRef(null)
  const badgeRef = useRef(null)
  const headingRef = useRef(null)
  const descriptionRef = useRef(null)
  const buttonsRef = useRef(null)

  useGSAP(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          once: true, // Animation only plays once
        },
      })

      // Animate badge
      timeline.from(
        badgeRef.current,
        {
          opacity: 0,
          y: 30,
          duration: 0.6,
        },
        0,
      )

      // Animate heading with stagger
      timeline.from(
        headingRef.current,
        {
          opacity: 0,
          y: 30,
          duration: 0.6,
        },
        0.1,
      )

      // Animate description
      timeline.from(
        descriptionRef.current,
        {
          opacity: 0,
          y: 30,
          duration: 0.6,
        },
        0.2,
      )

      // Animate buttons
      timeline.from(
        buttonsRef.current,
        {
          opacity: 0,
          y: 30,
          duration: 0.6,
        },
        0.3,
      )
    },
    { scope: sectionRef },
  )

  return (
    <section ref={sectionRef} className="h-[100vh] flex items-center">
      <div className="space-y-10">
        <div ref={badgeRef}>
          <CustomBadge
            icon={<div className="size-3 rounded-full bg-emerald-500 animate-pulse" />}
            text="Looking for job opportunities"
          />
          
        </div>
        <h1 ref={headingRef} className="font-outfit text-4xl lg:text-7xl font-medium">
          Hi, I'm Jireh <br /> A <AuroraText colors={["#22d3ee", "#3b82f6", "#8b5cf6", "#ec4899"]}> web developer</AuroraText>.
        </h1>
        <p ref={descriptionRef} className="text-lg max-w-lg">
          Mainly working in the JavaScript ecosystem, I’m a dedicated
          problem-solver who thrives on learning and building.
        </p>

        <div ref={buttonsRef}>
          <CTAButtons />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
