import { Home, Briefcase, GraduationCap } from "lucide-react";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";
import { useState } from "react";
import type { NavItemI } from "@/lib/types";
import { cn } from "@/lib/utils";

interface FloatingNavProps {
  scrollToHome: () => void;
  scrollToEducation: () => void;
  scrollToExperience: () => void;
}
const FloatingNav = ({ scrollToHome, scrollToEducation, scrollToExperience }: FloatingNavProps) => {
  const [selectedTab, setSelectedTab] = useState<NavItemI["name"]>("Home");

  const navItems: NavItemI[] = [
    { name: "Home", icon: Home, fn: scrollToHome },
    // { name: "Tech Stack", icon: Layers },
    { name: "Experience", icon: Briefcase, fn: scrollToExperience },
    // { name: "Projects", href: "#projects", icon: Folder },
    { name: "Education", icon: GraduationCap, fn: scrollToEducation },
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
