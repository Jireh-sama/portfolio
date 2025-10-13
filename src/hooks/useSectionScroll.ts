import { useRef } from "react";

const useSectionScroll = () => {
  const educationSectionRef = useRef<HTMLDivElement>(null);
  const experienceSectionRef = useRef<HTMLDivElement>(null);
  const techStackSectionRef = useRef<HTMLDivElement>(null);

  const handleScrollToEducation = () => {
    educationSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  const handleScrollToExperience = () => {
    experienceSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  const handleScrollToTechStack = () => {
    techStackSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return { 
    educationSectionRef, experienceSectionRef, techStackSectionRef,
    handleScrollToTop, handleScrollToEducation, handleScrollToExperience, handleScrollToTechStack
  }
}

export default useSectionScroll