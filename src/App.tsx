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
import {
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { IoLogoFigma, IoLogoFirebase } from "react-icons/io5";
import type { TechStackItemI } from "./lib/types";

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

  const techStackData: TechStackItemI[] = [
    {
      logo: (
        <SiNextdotjs className="size-14 lg:size-20 transition-colors hover:text-foreground" />
      ),
      name: "Next.js",
    },
    {
      logo: (
        <SiReact className="size-14 lg:size-20 transition-colors hover:text-[#61DAFB]" />
      ),
      name: "React",
    },
    {
      logo: (
        <SiTypescript className="size-14 lg:size-20 transition-colors hover:text-[#3178C6]" />
      ),
      name: "TypeScript",
    },
    {
      logo: (
        <SiTailwindcss className="size-14 lg:size-20 transition-colors hover:text-[#06B6D4]" />
      ),
      name: "Tailwind CSS",
    },
    {
      logo: (
        <SiNodedotjs className="size-14 lg:size-20 transition-colors hover:text-[#339933]" />
      ),
      name: "Node.js",
    },
    {
      logo: (
        <SiPrisma className="size-14 lg:size-20 transition-colors hover:text-[#2D3748]" />
      ),
      name: "Prisma",
    },
    {
      logo: (
        <SiMongodb className="size-14 lg:size-20 transition-colors hover:text-[#47A248]" />
      ),
      name: "MongoDB",
    },
    {
      logo: (
        <IoLogoFirebase className="size-14 lg:size-20 transition-colors hover:text-[#FFCA28]" />
      ),
      name: "MongoDB",
    },
    {
      logo: (
        <IoLogoFigma className="size-14 lg:size-20 transition-colors hover:text-[#F24E1E]" />
      ),
      name: "MongoDB",
    },
  ];

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
