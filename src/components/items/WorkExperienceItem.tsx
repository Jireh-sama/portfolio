import type { WorkExperienceItemI } from "@/lib/types";
import { LuArrowUpRight, LuCalendar, LuMapPin } from "react-icons/lu";

interface WorkExperienceItemProps {
  exp: WorkExperienceItemI;
}

const WorkExperienceItem = ({ exp }: WorkExperienceItemProps) => {
  return (
    <div
      className="
        group rounded-2xl flex dark:bg-gray-800/30 dark:shadow-blue-950 backdrop-blur-sm border 
        p-6 space-x-5 transition-all duration-500 cursor-pointer
        hover:-translate-y-2 hover:shadow-xl hover:border-accent-cyan/60
        hover:bg-accent-cyan/5
      "
    >
      {/* Logo */}
      <div
        className="
          hidden md:flex flex-shrink-0 w-20 h-20 p-2 rounded-xl bg-white/5 
          border dark:border-white/10 items-center justify-center 
          transition-transform duration-500 group-hover:border-accent-cyan/50
        "
      >
        <img
          src={exp.logo}
          alt={exp.company}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Content */}
      <div className="flex-1">
        <header className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3
                className="
                  text-xl font-semibold transition-colors duration-300 
                  group-hover:text-accent-cyan
                "
              >
                {exp.role}
              </h3>
              {exp.current && (
                <span
                  className="
                    px-3 py-1 rounded-full dark:bg-emerald-500/20 border border-emerald-500/40 
                    text-xs text-emerald-400 font-medium flex items-center gap-1
                  "
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Current Position
                </span>
              )}
            </div>

            <p className="text-lg text-muted-foreground font-medium mb-3">
              {exp.company}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <LuCalendar className="w-4 h-4" />
                <span>{exp.period}</span>
                <span className="text-gray-600">•</span>
                <span>{exp.duration}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <LuMapPin className="w-4 h-4" />
                <span>{exp.location}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Description */}
        <p
          className="
            text-sm text-muted-foreground text-pretty mb-4 leading-relaxed lg:max-w-4xl
            transition-opacity duration-300 group-hover:text-foreground/90
          "
        >
          {exp.description}
        </p>

        {/* Achievements */}
        <div className="mb-4">
          <h4 className="text-sm font-medium mb-3">Key Achievements</h4>
          <ul className="space-y-2">
            {exp.achievements.map((achievement, achIndex) => (
              <li
                key={achIndex}
                className="
                  flex items-start gap-2 text-sm text-muted-foreground
                  transition-transform duration-300 group-hover:translate-x-1
                "
              >
                <LuArrowUpRight className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:rotate-45" />
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div>
          <h4 className="text-sm font-medium mb-3">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {exp.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="
                  px-3 py-1.5 rounded-lg bg-accent-cyan/10 dark:bg-accent-cyan/15 
                  border border-accent-cyan/30 dark:border-accent-cyan/40 
                  text-xs text-accent-cyan dark:text-accent-cyan/95 font-medium 
                  transition-all duration-300
                  hover:bg-accent-cyan/25 hover:border-accent-cyan/60 hover:shadow-sm
                "
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceItem;
