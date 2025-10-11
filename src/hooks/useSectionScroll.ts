import { useRef } from "react";

const useSectionScroll = () => {
  const educationSectionRef = useRef<HTMLDivElement>(null);

  const handleScrollToEducation = () => {
    educationSectionRef.current?.scrollIntoView({
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

  return { educationSectionRef, handleScrollToTop, handleScrollToEducation }
}

export default useSectionScroll