const SectionHeader = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="mb-12">
      <h2 className="text-4xl font-bold text-foreground mb-3 text-balance">
        {title}
      </h2>
      <p className="text-lg text-muted-foreground text-pretty">{subtitle}</p>
    </div>
  );
};

export default SectionHeader;
