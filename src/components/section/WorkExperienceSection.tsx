import WorkExperienceItem from "../WorkExperienceItem";
import type { WorkExperienceItemI } from "@/lib/types";
import SectionHeader from "../SectionHeader";

interface WorkExperienceSectionProps {
  workExperienceList: WorkExperienceItemI[]
}

const WorkExperienceSection = ({ workExperienceList }: WorkExperienceSectionProps) => {

  return (
    <section>
      <SectionHeader title="Work Experience" subtitle="My professional journey and career milestones"/>

      <div className="space-y-6">
        {workExperienceList.map((exp) => (
          <WorkExperienceItem key={exp.company} exp={exp}/>
        ))}
      </div>
    </section>
  );
};

export default WorkExperienceSection;
