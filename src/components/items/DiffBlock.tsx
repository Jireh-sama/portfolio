import { cn } from "@/lib/utils";

interface DiffBlockProps {
  added: string[];
  removed?: string[];
  className?: string;
}

/** Lines rendered like a diff: "+" in the add color, "-" in the delete color. */
const DiffBlock = ({ added, removed = [], className }: DiffBlockProps) => {
  return (
    <ul
      className={cn(
        "rounded-lg border border-border bg-muted px-4 py-3 font-mono text-[12.5px] leading-6 sm:text-[13px]",
        className
      )}
    >
      {added.map((line) => (
        <li key={`+${line}`} className="flex gap-2.5 text-add">
          <span aria-hidden className="select-none">+</span>
          <span>
            <span className="sr-only">Added: </span>
            {line}
          </span>
        </li>
      ))}
      {removed.map((line) => (
        <li key={`-${line}`} className="flex gap-2.5 text-del">
          <span aria-hidden className="select-none">-</span>
          <span>
            <span className="sr-only">Removed: </span>
            {line}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default DiffBlock;
