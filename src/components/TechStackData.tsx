import type { TechStackItemI } from "@/lib/types";
import {
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import Firebase from "./icon/Firebase";
import FigmaIcon from "./icon/FigmaIcon";

export const techStackData: TechStackItemI[] = [
  {
    logo: (
      <SiNextdotjs className="size-14 lg:size-20 transition-colors hover:text-foreground" />
    ),
    name: "Next.js",
  },
  {
    logo: (
      <SiReact className="size-14 lg:size-20 transition-colors hover:text-[#61DAFB]" />
    ),
    name: "React",
  },
  {
    logo: (
      <SiTypescript className="size-14 lg:size-20 transition-colors hover:text-[#3178C6]" />
    ),
    name: "TypeScript",
  },
  {
    logo: (
      <SiTailwindcss className="size-14 lg:size-20 transition-colors hover:text-[#06B6D4]" />
    ),
    name: "Tailwind CSS",
  },
  {
    logo: (
      <SiNodedotjs className="size-14 lg:size-20 transition-colors hover:text-[#339933]" />
    ),
    name: "Node.js",
  },
  {
    logo: (
      <SiPrisma className="size-14 lg:size-20 transition-colors hover:text-[#2D3748]" />
    ),
    name: "Prisma",
  },
  {
    logo: (
      <SiMongodb className="size-14 lg:size-20 transition-colors hover:text-[#47A248]" />
    ),
    name: "MongoDB",
  },
  {
    logo: <Firebase />,
    name: "Firebase",
  },
  {
    logo: <FigmaIcon />,
    name: "Figma",
  },
];
