import FloatingNav from "./components/FloatingNav";
import ScreenSizeIndicator from "./components/ScreenSizeIndicaator";
import CTAButtonsSection from "./components/section/CTAButtonsSection";
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

const App = () => {
  const {
    educationSectionRef,
    experienceSectionRef,
    handleScrollToEducation,
    handleScrollToTop,
    handleScrollToExperience,
  } = useSectionScroll();

  return (
    <main className="min-h-[100vh]" id="smooth-wrapper">
      <ScreenSizeIndicator />
      <FloatingNav
        scrollToHome={handleScrollToTop}
        scrollToEducation={handleScrollToEducation}
        scrollToExperience={handleScrollToExperience}
      />
      <div className="max-w-6xl mx-auto px-6 space-y-14" id="smooth-content">
        <HeroSection />
        <CTAButtonsSection />
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
