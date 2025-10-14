import FloatingNav from "./components/FloatingNav";
import ScreenSizeIndicator from "./components/ScreenSizeIndicaator";
import EducationSection from "./components/section/EducationSection";
import FooterSection from "./components/section/FooterSection";
import HeroSection from "./components/section/HeroSection";
import WorkExperienceSection from "./components/section/WorkExperienceSection";
import SimpleDivider from "./components/SimpleDIvider";
import {
  educationData,
  socialContacts,
  workExperienceData,
} from "./lib/constants";
import useSectionScroll from "./hooks/useSectionScroll";
import MyTechStackSection from "./components/section/MyTechStackSection";
import { techStackData } from "./components/TechStackData";

const App = () => {
  const {
    educationSectionRef,
    experienceSectionRef,
    techStackSectionRef,
    handleScrollToEducation,
    handleScrollToTop,
    handleScrollToExperience,
    handleScrollToTechStack,
  } = useSectionScroll();

  

  return (
    <main className="min-h-[100vh]" id="smooth-wrapper">
      
      <ScreenSizeIndicator />
      <FloatingNav
        scrollToHome={handleScrollToTop}
        scrollToEducation={handleScrollToEducation}
        scrollToExperience={handleScrollToExperience}
        scrollToTechStack={handleScrollToTechStack}
      />
      <div className="max-w-6xl mx-auto px-6 space-y-14" id="smooth-content">
        <HeroSection />
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
        <SimpleDivider label="TECH STACK" />
        <MyTechStackSection
          techStackList={techStackData}
          ref={techStackSectionRef}
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
