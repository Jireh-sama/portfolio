"use client";

import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type TileButtonProps = {
  icon: ReactNode;
  /** Optional text shown beside the icon. Omit for an icon-only tile. */
  label?: ReactNode;
  /** When set alongside `label`, the label swaps to this on hover. */
  hoverLabel?: ReactNode;
  /** Renders the tile as an anchor instead of a button. */
  href?: string;
  onClick?: () => void;
  bgColor?: string;
  className?: string; // optional for custom sizing/colors if needed
};

const TileButton = ({
  icon,
  label,
  hoverLabel,
  href,
  onClick,
  bgColor = "bg-blue-500",
  className = "",
}: TileButtonProps) => {
  const [hovered, setHovered] = useState(false);
  const swaps = Boolean(label && hoverLabel);

  const content = (
    <span className="relative z-10 flex items-center justify-center gap-2.5">
      <span className="shrink-0">{icon}</span>
      {label && (
        // Fixed-height window; the stacked labels slide up by exactly one line.
        <span className="block h-6 overflow-hidden">
          <span
            className={cn(
              "flex flex-col transition-transform duration-300 ease-out",
              swaps && hovered && "-translate-y-6"
            )}
          >
            <span className="flex h-6 items-center justify-between gap-3 leading-6 whitespace-nowrap font-medium">
              {label}
            </span>
            {hoverLabel && (
              <span className="flex h-6 items-center justify-between gap-3 leading-6 whitespace-nowrap font-medium">
                {hoverLabel}
              </span>
            )}
          </span>
        </span>
      )}
    </span>
  );

  const classes = cn(
    `relative flex h-14 px-4.5 items-center justify-center rounded-2xl
     ${bgColor} text-white transition-all duration-200
     before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-b
     before:from-transparent before:to-black/20 before:opacity-60
     after:absolute after:inset-0 after:rounded-2xl after:bg-gradient-to-t
     after:from-transparent after:to-white/5 after:opacity-60`,
    hovered
      ? "translate-y-1 shadow-[0_0px_0_0_#2a2a2a]"
      : "shadow-[0_6px_0_0_#1D4ED8]",
    className
  );

  const handlers = {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
  };

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...handlers}
      >
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes} {...handlers}>
      {content}
    </button>
  );
};

export default TileButton;
