import type { TechStackItemI } from "@/lib/types";
import SectionHeader from "../SectionHeader";
import { Marquee } from "../ui/marquee";
import { forwardRef } from "react";

interface MyTechStackSectionProps {
  techStackList: TechStackItemI[]
}

const MyTechStackSection = forwardRef<HTMLDivElement, MyTechStackSectionProps>(
  ({ techStackList }, ref) => {
  return (
    <section ref={ref} className="scroll-mt-20">
      <SectionHeader
        title="Tech Stack"
        subtitle="Technologies and tools I work with to build modern applications"
      />
      <div className="relative overflow-hidden">
        <Marquee
          className="[--duration:20s] cursor-pointer"
      >
          {techStackList.map((stack) => (
            <div
              key={stack.name}
              className="flex items-center p-2 md:p-4 space-x-4"
            >
              {stack.logo}
            </div>
          ))}
        </Marquee>

        {/* fade overlay */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background via-background/60 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background via-background/60 to-transparent" />
      </div>
    </section>
  );
});

export default MyTechStackSection;
