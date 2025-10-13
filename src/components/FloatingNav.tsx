import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";
import { useState } from "react";
import type { NavItemI } from "@/lib/types";
import { cn } from "@/lib/utils";
import { LuBriefcase, LuGraduationCap, LuHouse, LuLayers } from "react-icons/lu";

interface FloatingNavProps {
  scrollToHome: () => void;
  scrollToEducation: () => void;
  scrollToExperience: () => void;
  scrollToTechStack: () => void;
}
const FloatingNav = ({ scrollToHome, scrollToEducation, scrollToExperience, scrollToTechStack }: FloatingNavProps) => {
  const [selectedTab, setSelectedTab] = useState<NavItemI["name"]>("Home");

  const navItems: NavItemI[] = [
    { name: "Home", icon: LuHouse, fn: scrollToHome },
    { name: "Experience", icon: LuBriefcase, fn: scrollToExperience },
    // { name: "Projects", href: "#projects", icon: Folder },
    { name: "Education", icon: LuGraduationCap, fn: scrollToEducation },
    { name: "Tech Stack", icon: LuLayers, fn: scrollToTechStack },
  ];

  const handleClickItem = (name: NavItemI['name'], callback: () => void) => {
    setSelectedTab(name)
    callback()
  };

  return (
    <div className="hidden lg:block fixed right-8 top-1/2 -translate-y-1/2 z-50">
      <div className="flex flex-col gap-3 backdrop-blur-xl border rounded-2xl p-3 shadow-xl">
        {navItems.map((item) => (
          <button
            onClick={() => handleClickItem(item.name, item.fn)}
            key={item.name}
            className={cn(
              "group relative p-3 rounded-xl transition-all duration-300 hover:bg-blue-500 border border-transparent bg-white/70 dark:bg-white/10",
              selectedTab === item.name && 'bg-blue-500 text-white dark:text-blue-600'
            )}
          >
            <item.icon
              className={`w-5 h-5 transition-colors group-hover:text-white dark:group-hover:text-blue-600`}
            />
          </button>
        ))}

        <hr />

        <AnimatedThemeToggler className="group relative p-3 rounded-xl transition-all duration-300 hover:bg-blue-500 border border-transparent bg-white/70 dark:bg-white/10" />
      </div>
    </div>
  );
};

export default FloatingNav;
