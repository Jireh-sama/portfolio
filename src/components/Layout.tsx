import { useRefs } from "@/context/useRefs";
import FloatingNav from "./FloatingNav";
import ScreenSizeIndicator from "./ScreenSizeIndicaator";
import { Outlet } from "react-router";
import { socialContacts } from "@/lib/constants";
import FooterSection from "./section/FooterSection";

const Layout = () => {
  const { techStackRef, projectRef, experienceRef, educationRef } = useRefs();

  return (
    <main className="min-h-[100vh]">
      {/* <BackgroundRippleEffect /> */}
      <ScreenSizeIndicator />
      <FloatingNav
        techStackRef={techStackRef}
        projectRef={projectRef}
        experienceRef={experienceRef}
        educationRef={educationRef}
      />
      <div className="max-w-6xl mx-auto px-6 space-y-14 relative z-10">
        <Outlet />
      </div>
      <FooterSection
        email={socialContacts.gmail}
        githubLink={socialContacts.github}
        linkedInLink={socialContacts.linkedIn}
      />
    </main>
  );
};

export default Layout;
