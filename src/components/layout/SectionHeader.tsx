import { cn } from "@/lib/utils";

const SectionHeader = ({
  title,
  subtitle,
  centered,
}: {
  title: string;
  subtitle?: string;
  centered?: boolean;
}) => {
  return (
    <div className={cn("my-12", centered && "text-center")}>
      <h2 className="text-4xl font-bold text-foreground mb-3 text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground text-pretty">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeader;
