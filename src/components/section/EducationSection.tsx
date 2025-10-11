import EducationItem from "../EducationItem";
import type { EducationItemI } from "@/lib/types";
import SectionHeader from "../SectionHeader";
import { forwardRef } from "react";

interface EducationSectionProps {
  educationList: EducationItemI[];
}

const EducationSection = forwardRef<HTMLDivElement, EducationSectionProps>(
  ({ educationList }, ref) => {
    return (
      <section ref={ref} className="scroll-mt-20">
        <SectionHeader
          title="Education"
          subtitle="My academic journey and continuous learning path"
        />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[6px] md:left-[180px] top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {educationList.map((item) => (
              <EducationItem key={item.field} item={item} />
            ))}
          </div>
        </div>
      </section>
    );
  }
);

export default EducationSection;
