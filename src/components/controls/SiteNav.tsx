import type { MouseEvent } from "react";
import { Link, useLocation } from "react-router";
import { resume } from "@/lib/constants";
import { scrollBehavior, scrollToId } from "@/lib/journey";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

const navItems = [
  { id: "journey", label: "journey" },
  { id: "now", label: "now" },
  { id: "contact", label: "contact" },
];
const sectionIds = navItems.map((item) => item.id);

const SiteNav = () => {
  const { pathname } = useLocation();
  const onHome = pathname === "/";
  const activeId = useActiveSection(sectionIds, onHome);

  // On the home page, scroll in place. Elsewhere, the Link goes to /#id and Home scrolls on arrival.
  const handleSectionClick = (event: MouseEvent, id: string) => {
    if (!onHome) return;
    event.preventDefault();
    scrollToId(id);
  };

  const handleHomeClick = (event: MouseEvent) => {
    if (!onHome) return;
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: scrollBehavior() });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <nav
        aria-label="Main"
        className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 font-mono text-xs sm:px-6 sm:text-sm"
      >
        <Link
          to="/"
          onClick={handleHomeClick}
          className="rounded-sm text-foreground transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4"
        >
          <span aria-hidden className="mr-1.5 text-primary">
            ❯
          </span>
          jireh
        </Link>

        <ul className="flex items-center gap-3 sm:gap-7">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                to={`/#${item.id}`}
                onClick={(event) => handleSectionClick(event, item.id)}
                aria-current={activeId === item.id ? "true" : undefined}
                className={cn(
                  "rounded-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4",
                  activeId === item.id && "text-primary hover:text-primary"
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={resume.href}
              download={resume.fileName}
              className="rounded-md bg-foreground px-2.5 py-1.5 text-background transition-colors hover:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              résumé <span aria-hidden>↓</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default SiteNav;
