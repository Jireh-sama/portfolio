import { Home, Layers, Briefcase, Folder, GraduationCap } from "lucide-react";
export default function FloatingNav() {
  const navItems = [
    { name: "Home", icon: Home },
    { name: "Tech Stack", icon: Layers },
    { name: "Experience", icon: Briefcase },
    { name: "Projects", href: "#projects", icon: Folder },
    { name: "Education", icon: GraduationCap },
  ];

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      <div className="flex flex-col gap-3 backdrop-blur-xl border rounded-2xl p-3 shadow-xl">
        {navItems.map((item) => (
          <button
            key={item.name}
            className={`group relative p-3 rounded-xl transition-all duration-300 hover:bg-blue-500 border border-transparent`}
          >
            <item.icon className={`w-5 h-5 transition-colors group-hover:text-white`} />
         
          </button>
        ))}
      </div>
    </div>
  );
}
