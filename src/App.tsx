import FloatingNav from "./components/FloatingNav";
import ScreenSizeIndicator from "./components/ScreenSizeIndicaator";
import EducationSection from "./components/section/EducationSection";
import FooterSection from "./components/section/FooterSection";
import HeroSection from "./components/section/HeroSection";
import WorkExperienceSection from "./components/section/WorkExperienceSection";
import SimpleDivider from "./components/SimpleDIvider";
import {
  educationData,
  projectsData,
  socialContacts,
  workExperienceData,
} from "./lib/constants";
import MyTechStackSection from "./components/section/MyTechStackSection";
import { techStackData } from "./components/TechStackData";
import { BackgroundRippleEffect } from "./components/ui/background-ripple-effect";
import ProjectSection from "./components/section/ProjectSection";
import { useRef } from "react";

const App = () => {
  const educationSectionRef = useRef<HTMLDivElement>(null);
  const experienceSectionRef = useRef<HTMLDivElement>(null);
  const techStackSectionRef = useRef<HTMLDivElement>(null);
  const projectSectionRef = useRef<HTMLDivElement>(null);

  return (
    <main className="min-h-[100vh]">
      <BackgroundRippleEffect />
      <ScreenSizeIndicator />
      <FloatingNav
        techStackRef={techStackSectionRef}
        projectRef={projectSectionRef}
        experienceRef={experienceSectionRef}
        educationRef={educationSectionRef}
      />
      <div className="max-w-6xl mx-auto px-6 space-y-14" id="smooth-content">
        <HeroSection />
        <SimpleDivider label="TECH STACK" />
        <MyTechStackSection
          techStackList={techStackData}
          ref={techStackSectionRef}
        />
        <SimpleDivider label="PROJECTS" />
        <ProjectSection ref={projectSectionRef} projectList={projectsData} />
        <SimpleDivider label="WORK EXPERIENCE" />
        <WorkExperienceSection
          workExperienceList={workExperienceData}
          ref={experienceSectionRef}
        />
        <SimpleDivider label="EDUCATION" />
        <EducationSection
          educationList={educationData}
          ref={educationSectionRef}
        />
      </div>
      <FooterSection
        email={socialContacts.gmail}
        githubLink={socialContacts.github}
        linkedInLink={socialContacts.linkedIn}
      />
    </main>
  );
};

export default App;
