import EducationSection from "../section/EducationSection";
import HeroSection from "../section/HeroSection";
import WorkExperienceSection from "../section/WorkExperienceSection";
import MyTechStackSection from "../section/MyTechStackSection";
import ProjectSection from "../section/ProjectSection";
import SimpleDivider from "../layout/SimpleDIvider";
import { useRefs } from "@/context/useRefs";
import AboutMeSection from "../section/AboutMeSection";
import { educationData, projectsData, techStackData, workExperienceData, myPrinciplesData, devToolsData } from "../PortfolioData";
const Home = () => {
  const { aboutMeRef, techStackRef, projectRef, experienceRef, educationRef } = useRefs();

  return (
    <>
      <HeroSection />
      <AboutMeSection principleList={myPrinciplesData} ref={aboutMeRef}/>
      <SimpleDivider title="TECH STACK" />
      <MyTechStackSection techStackList={techStackData} devToolsList={devToolsData} ref={techStackRef} />
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
