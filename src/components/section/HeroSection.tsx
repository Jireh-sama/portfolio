import CustomBadge from "../CustomBadge";
import { AuroraText } from "../ui/aurora-text";
import CTAButtons from "../CTAButtons";

const HeroSection = () => {
  return (
    <section className="h-[100vh] flex items-center">
      <div className="space-y-10">
        <CustomBadge
          icon={<div className="size-3 rounded-full bg-emerald-500 animate-pulse" />}
          text="Looking for job opportunities"
        />
        <h1 className="font-outfit text-4xl lg:text-7xl font-medium">
          Hi, I'm Jireh <br /> A <AuroraText colors={["#22d3ee", "#3b82f6", "#8b5cf6", "#ec4899"]}> web developer</AuroraText>.
        </h1>
        <p className="text-lg max-w-lg">
          Mainly working in the JavaScript ecosystem, I’m a dedicated
          problem-solver who thrives on learning and building.
        </p>

        <CTAButtons />
      </div>
    </section>
  );
};

export default HeroSection;
