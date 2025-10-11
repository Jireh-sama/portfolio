import { Home, Layers, Briefcase, Folder, GraduationCap } from "lucide-react";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";

interface FloatingNavProps {
  scrollToHome: () => void;
  scrollToEducation: () => void;
}
const FloatingNav = ({ scrollToHome, scrollToEducation }: FloatingNavProps) => {
  const navItems = [
    { name: "Home", icon: Home, fn: scrollToHome },
    { name: "Tech Stack", icon: Layers },
    { name: "Experience", icon: Briefcase },
    { name: "Projects", href: "#projects", icon: Folder },
    { name: "Education", icon: GraduationCap, fn: scrollToEducation },
  ];

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block ">
      <div className="flex flex-col gap-3 backdrop-blur-xl border rounded-2xl p-3 shadow-xl">
        {navItems.map((item) => (
          <button
            onClick={item.fn}
            key={item.name}
            className={`group relative p-3 rounded-xl transition-all duration-300 hover:bg-blue-500 border border-transparent bg-white/70 dark:bg-white/10`}
          >
            <item.icon
              className={`w-5 h-5 transition-colors group-hover:text-white dark:group-hover:text-blue-600`}
            />
          </button>
        ))}
        <AnimatedThemeToggler className="group relative p-3 rounded-xl transition-all duration-300 hover:bg-blue-500 border border-transparent bg-white/70 dark:bg-white/10" />
      </div>
    </div>
  );
};

export default FloatingNav;
