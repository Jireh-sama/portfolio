import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BrowserFrameProps {
  label: string;
  children: ReactNode;
  className?: string;
}

/** Window chrome around a screenshot. */
const BrowserFrame = ({ label, children, className }: BrowserFrameProps) => {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-border bg-card shadow-2xl shadow-black/50",
        className
      )}
    >
      <div className="flex items-center gap-1.5 border-b border-border bg-secondary px-3.5 py-2.5">
        <span aria-hidden className="size-2.5 rounded-full bg-line" />
        <span aria-hidden className="size-2.5 rounded-full bg-line" />
        <span aria-hidden className="size-2.5 rounded-full bg-line" />
        <span className="ml-3 truncate font-mono text-[11px] text-muted-foreground">{label}</span>
      </div>
      {children}
    </div>
  );
};

export default BrowserFrame;
