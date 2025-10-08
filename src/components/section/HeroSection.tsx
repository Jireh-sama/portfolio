import CustomBadge from "../CustomBadge";

const HeroSection = () => {
  return (
    <section className="pt-14 md:pt-40 space-y-10">
      <CustomBadge
        icon={<div className="size-3 rounded-full bg-emerald-500" />}
        text="Looking for womens"
      />
      <h1 className="font-outfit text-4xl lg:text-7xl">
        Hi, I'm Jireh <br />A
        <span className="text-blue-600"> web developer</span>.
      </h1>
      <p className="text-lg max-w-lg">
        Mainly working in the JavaScript ecosystem, I’m a dedicated
        problem-solver who thrives on learning and building.
      </p>
    </section>
  );
};

export default HeroSection;
