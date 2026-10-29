import { Link } from "react-router";
import { LuArrowLeft } from "react-icons/lu";
import { cn } from "@/lib/utils";

interface BackButtonProps {
  to: string;
  label: string;
  className?: string;
}

const BackButton = ({ to, label, className }: BackButtonProps) => {
  return (
    <Link
      to={to}
      className={cn(
        "group inline-flex items-center gap-2 rounded-sm font-mono text-sm text-muted-foreground transition-colors hover:text-foreground",
        className
      )}
    >
      <LuArrowLeft aria-hidden className="size-4 transition-transform group-hover:-translate-x-0.5" />
      {label}
    </Link>
  );
};

export default BackButton;
