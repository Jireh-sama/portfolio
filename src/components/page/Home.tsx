import EducationSection from "../section/EducationSection";
import HeroSection from "../section/HeroSection";
import WorkExperienceSection from "../section/WorkExperienceSection";
import {
  educationData,
  projectsData,
  workExperienceData,
} from "../../lib/constants";
import MyTechStackSection from "../section/MyTechStackSection";
import { techStackData } from "../TechStackData";
import ProjectSection from "../section/ProjectSection";
import SimpleDivider from "../SimpleDIvider";
import { useRefs } from "@/context/useRefs";

const Home = () => {
  const { techStackRef, projectRef, experienceRef, educationRef } = useRefs();

  return (
    <>
      <HeroSection />
      <SimpleDivider title="TECH STACK" />
      <MyTechStackSection techStackList={techStackData} ref={techStackRef} />
      <SimpleDivider title="PROJECTS" />
      <ProjectSection ref={projectRef} projectList={projectsData} />
      <SimpleDivider title="WORK EXPERIENCE" />
      <WorkExperienceSection
        workExperienceList={workExperienceData}
        ref={experienceRef}
      />
      <SimpleDivider title="EDUCATION" />
      <EducationSection educationList={educationData} ref={educationRef} />
    </>
  );
};

export default Home;
