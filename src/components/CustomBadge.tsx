import { type ReactNode } from "react";
import { Badge } from "./ui/badge";

interface CustomBadgeProps{
  icon: ReactNode
  text: string
}

const CustomBadge = ({ icon, text }: CustomBadgeProps) => {
  return <Badge variant={'outline'} className="rounded-2xl px-4 space-x-2">
    {icon} 
    <span className="text-lg">{text}</span>
  </Badge>;
};

export default CustomBadge;
