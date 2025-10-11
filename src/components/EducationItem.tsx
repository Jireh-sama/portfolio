import type { EducationItemI } from "@/lib/types";
import { GraduationCap } from "lucide-react";
interface EducationItemProps {
  item: EducationItemI;
}

const EducationItem = ({ item }: EducationItemProps) => {
  return (
    <div className="relative md:grid md:grid-cols-[180px_1fr] md:gap-6 group">
      
      <div className="flex items-start md:justify-end md:pr-8 md:text-right mb-3 md:mb-0">
        <div className="flex items-center gap-3 md:block">
          <div className="relative z-10 flex items-center justify-center md:hidden">
            <div className="w-3 h-3 rounded-full bg-primary ring-4 ring-background" />
          </div>
          <time className="text-sm font-mono text-muted-foreground tracking-wide">
            {item.period}
          </time>
        </div>
      </div>

      <div className="hidden md:block absolute left-[180px] top-1 -translate-x-1/2 z-10">
        <div className="relative flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-primary ring-4 ring-background transition-all group-hover:ring-8 group-hover:ring-primary/20" />
        </div>
      </div>
    
      <div className="pl-8 md:pl-8 space-y-3">
        <header className="flex items-start gap-3">
          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
            <GraduationCap />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-semibold text-foreground mb-1 text-balance">
              {item.degree}
              {item.field && (
                <span className="text-muted-foreground font-normal">
                  {" "}
                  in {item.field}
                </span>
              )}
            </h3>
            <div className="text-base text-foreground/90 font-medium">
              {item.institution}
            </div>
            <div className="text-sm text-muted-foreground">{item.location}</div>
          </div>
        </header>

        {item.description && (
          <p className="text-muted-foreground leading-relaxed text-pretty">
            {item.description}
          </p>
        )}

        {item.achievements && item.achievements.length > 0 && (
          <ul className="space-y-1.5 mt-3">
            {item.achievements.map((achievement, i) => (
              <li
                key={i}
                className="text-sm text-muted-foreground flex items-start gap-2"
              >
                <span className="text-accent mt-1.5 flex-shrink-0">•</span>
                <span className="leading-relaxed">{achievement}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default EducationItem;
