import { useEffect } from "react";
import { useLocation } from "react-router";
import HeroSection from "../section/HeroSection";
import JourneySection from "../section/JourneySection";
import NowSection from "../section/NowSection";
import ContactSection from "../section/ContactSection";
import { scrollToId } from "@/lib/journey";
import {
  devToolsData,
  journeyData,
  nowData,
  principlesData,
  projectsData,
  techStackData,
} from "../PortfolioData";

const Home = () => {
  const { hash } = useLocation();

  // Arriving at /#section from another page: scroll once the journey pin has been laid out.
  useEffect(() => {
    if (!hash) return;
    const frame = requestAnimationFrame(() => scrollToId(decodeURIComponent(hash.slice(1))));
    return () => cancelAnimationFrame(frame);
  }, [hash]);

  return (
    <>
      <HeroSection releases={journeyData} />
      <JourneySection releases={journeyData} projects={projectsData} />
      <NowSection
        now={nowData}
        latestTag={journeyData[journeyData.length - 1].tag}
        projectCount={projectsData.length}
        dependencies={techStackData}
        devDependencies={devToolsData}
        principles={principlesData}
      />
      <ContactSection />
    </>
  );
};

export default Home;
