import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FileTabI {
  name: string;
  content: ReactNode;
}

interface FileViewerProps {
  label: string;
  files: FileTabI[];
  className?: string;
}

/** Editor-style tabs (WAI-ARIA tabs pattern: arrow keys, Home/End, roving tabindex). */
const FileViewer = ({ label, files, className }: FileViewerProps) => {
  const [selected, setSelected] = useState(0);
  const baseId = useId();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const select = (index: number) => {
    setSelected(index);
    tabRefs.current[index]?.focus();
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    const last = files.length - 1;
    const next = {
      ArrowRight: selected === last ? 0 : selected + 1,
      ArrowLeft: selected === 0 ? last : selected - 1,
      Home: 0,
      End: last,
    }[event.key];
    if (next === undefined) return;
    event.preventDefault();
    select(next);
  };

  return (
    <div className={cn("min-w-0 overflow-hidden rounded-xl border border-border bg-card", className)}>
      <div role="tablist" aria-label={label} onKeyDown={handleKeyDown} className="flex border-b border-border font-mono text-xs">
        {files.map((file, i) => (
          <button
            key={file.name}
            ref={(element) => {
              tabRefs.current[i] = element;
            }}
            type="button"
            role="tab"
            id={`${baseId}-tab-${i}`}
            aria-selected={i === selected}
            aria-controls={`${baseId}-panel-${i}`}
            tabIndex={i === selected ? 0 : -1}
            onClick={() => setSelected(i)}
            className={cn(
              "relative border-r border-border px-4 py-3 transition-colors focus-visible:outline-1 focus-visible:-outline-offset-4 focus-visible:outline-primary",
              i === selected
                ? "bg-background text-foreground before:absolute before:inset-x-0 before:top-0 before:h-0.5 before:bg-primary"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {file.name}
          </button>
        ))}
      </div>

      {files.map((file, i) => (
        <div
          key={file.name}
          role="tabpanel"
          id={`${baseId}-panel-${i}`}
          aria-labelledby={`${baseId}-tab-${i}`}
          hidden={i !== selected}
          tabIndex={0}
          className="min-h-[26.5rem] animate-in overflow-x-auto px-5 py-5 font-mono text-[12.5px] leading-[1.8] duration-300 fade-in focus-visible:outline-1 focus-visible:-outline-offset-2 focus-visible:outline-primary/60 sm:px-6"
        >
          {file.content}
        </div>
      ))}
    </div>
  );
};

export default FileViewer;
