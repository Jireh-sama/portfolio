import { AnimatedThemeToggler } from "../ui/animated-theme-toggler";
import { useCallback, useEffect, useRef, useState } from "react";
import type { NavItemI } from "@/lib/types";
import { cn } from "@/lib/utils";
import {
  LuBriefcase,
  LuFolder,
  LuGraduationCap,
  LuHouse,
  LuLayers,
  LuUser,
} from "react-icons/lu";

interface FloatingNavProps {
  aboutMeRef: React.RefObject<HTMLDivElement | null>;
  techStackRef: React.RefObject<HTMLDivElement | null>;
  projectRef: React.RefObject<HTMLDivElement | null>;
  experienceRef: React.RefObject<HTMLDivElement | null>;
  educationRef: React.RefObject<HTMLDivElement | null>;
}
const FloatingNav = ({
  aboutMeRef,
  techStackRef,
  projectRef,
  experienceRef,
  educationRef,
}: FloatingNavProps) => {
  const [selectedTab, setSelectedTab] = useState<NavItemI["name"]>("Home");

  // Nav parks itself after 2s of scroll inactivity, and comes back on scroll
  // or when the pointer reaches the right edge.
  const [navVisible, setNavVisible] = useState(true);
  const hideTimerRef = useRef<number | null>(null);
  const pointerInsideRef = useRef(false);

  const scheduleHide = useCallback(() => {
    if (hideTimerRef.current) window.clearTimeout(hideTimerRef.current);
    hideTimerRef.current = window.setTimeout(() => {
      // Never hide out from under the pointer.
      if (!pointerInsideRef.current) setNavVisible(false);
    }, 2000);
  }, []);

  const revealNav = useCallback(() => {
    setNavVisible(true);
    scheduleHide();
  }, [scheduleHide]);

  useEffect(() => {
    window.addEventListener("scroll", revealNav, { passive: true });
    scheduleHide(); // start the idle countdown on mount

    return () => {
      window.removeEventListener("scroll", revealNav);
      if (hideTimerRef.current) window.clearTimeout(hideTimerRef.current);
    };
  }, [revealNav, scheduleHide]);

  const handlePointerEnter = () => {
    pointerInsideRef.current = true;
    if (hideTimerRef.current) window.clearTimeout(hideTimerRef.current);
    setNavVisible(true);
  };

  const handlePointerLeave = () => {
    pointerInsideRef.current = false;
    scheduleHide();
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScrollToSection = (
    ref: React.RefObject<HTMLDivElement | null>
  ) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const navItems: NavItemI[] = [
    { name: "Home", icon: LuHouse, fn: handleScrollToTop, id: "hero" },
    {
      name: "About Me",
      icon: LuUser,
      fn: () => handleScrollToSection(aboutMeRef),
      id: "about-me",
    },
    {
      name: "Tech Stack",
      icon: LuLayers,
      fn: () => handleScrollToSection(techStackRef),
      id: "tech-stack",
    },
    {
      name: "Projects",
      icon: LuFolder,
      fn: () => handleScrollToSection(projectRef),
      id: "project",
    },
    {
      name: "Experience",
      icon: LuBriefcase,
      fn: () => handleScrollToSection(experienceRef),
      id: "work-experience",
    },
    {
      name: "Education",
      icon: LuGraduationCap,
      fn: () => handleScrollToSection(educationRef),
      id: "education",
    },
  ];

  const handleClickItem = (name: NavItemI["name"], callback: () => void) => {
    setSelectedTab(name);
    callback();
  };

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const active = navItems.find(({ id }) => id === entry.target.id);
            if (active) setSelectedTab(active.name);
          }
        });
      },
      { threshold: 0.5 }
    );
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Invisible hot zone on the right edge — re-reveals the parked nav */}
      <div
        aria-hidden="true"
        onMouseEnter={handlePointerEnter}
        onMouseLeave={handlePointerLeave}
        className="hidden lg:block fixed right-0 top-1/2 -translate-y-1/2 h-72 w-8 z-40"
      >
        {/* Subtle grip hint, only while the nav is parked */}
        <div
          className={cn(
            "absolute right-1 top-1/2 -translate-y-1/2 h-16 w-1 rounded-full bg-primary/30 transition-opacity duration-500",
            navVisible ? "opacity-0" : "opacity-100"
          )}
        />
      </div>

      <nav
        onMouseEnter={handlePointerEnter}
        onMouseLeave={handlePointerLeave}
        className={cn(
          "hidden lg:block fixed right-8 top-1/2 -translate-y-1/2 z-50",
          "transition-[opacity,translate] duration-500 ease-out",
          navVisible
            ? "translate-x-0 opacity-100"
            : "translate-x-[calc(100%+3rem)] opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col gap-2 bg-card/80 backdrop-blur-md rounded-full p-3 shadow-xl border">
        {navItems.map((item) => (
          <button
            onClick={() => handleClickItem(item.name, item.fn)}
            key={item.name}
            className={cn(
              "group relative rounded-full p-3 transition-all duration-300 bg-white/70 dark:bg-white/10 border border-transparent",
              selectedTab === item.name
                ? "bg-blue-500 text-white dark:text-blue-600 shadow-lg"
                : "hover:scale-110 hover:bg-blue-500/30"
            )}
          >
            <item.icon
              className={cn(
                "w-5 h-5 transition-colors",
                selectedTab === item.name
                  ? "text-white dark:text-blue-600"
                  : "group-hover:text-white dark:group-hover:text-blue-600"
              )}
            />
            <span className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-1 bg-card text-card-foreground text-sm font-medium rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition duration-200 pointer-events-none">
              {item.name}
            </span>
          </button>
        ))}

        <hr className="my-2 border-slate-200 dark:border-slate-700" />

          <AnimatedThemeToggler className="group relative p-3 rounded-full transition-all duration-300 hover:bg-blue-500 border border-transparent bg-white/70 dark:bg-white/10" />
        </div>
      </nav>
    </>
  );
};

export default FloatingNav;
