"use client";

import { useState, type ReactNode } from "react";

type TileButtonProps = {
  icon: ReactNode;
  onClick?: () => void;
  bgColor?: string,
  className?: string; // optional for custom sizing/colors if needed
};

const TileButton = ({
  icon,
  onClick,
  bgColor="bg-blue-500",
  className = "",
}: TileButtonProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        relative flex h-14 px-4.5 items-center justify-center rounded-2xl
        ${bgColor} text-white transition-all duration-200
        ${
          hovered
            ? "translate-y-1 shadow-[0_0px_0_0_#2a2a2a]"
            : `shadow-[0_6px_0_0_#1D4ED8]`
        }
        before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-b 
        before:from-transparent before:to-black/20 before:opacity-60
        after:absolute after:inset-0 after:rounded-2xl after:bg-gradient-to-t 
        after:from-transparent after:to-white/5 after:opacity-60
        ${className}
      `}
    >
      <span className="relative z-10 flex items-center justify-center">
        {icon}
      </span>
    </button>
  );
};

export default TileButton;
