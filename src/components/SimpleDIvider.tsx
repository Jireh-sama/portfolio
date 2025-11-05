interface SimpleDIviderProps {
  title: string;
}

const SimpleDivider = ({ title }: SimpleDIviderProps) => {
  return (
    <div className="w-full mx-auto px-4">
      <div className="relative flex items-center justify-center">
        
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full flex items-center gap-2">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-border" />
            <div className="flex items-center gap-2">
              <div className="divider-dot w-2 h-2 rounded-full bg-primary/40" />
              <div className="divider-dot w-1.5 h-1.5 rounded-full bg-primary/60" />
              <div className="divider-dot w-1 h-1 rounded-full bg-primary/80" />
            </div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-border to-border" />
          </div>
        </div>

        
        <div className="relative px-6 py-2 bg-background">
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground font-medium">
              {title.toUpperCase()}
            </span>
            <div className="w-1 h-1 rounded-full bg-primary animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleDivider;
