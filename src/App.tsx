import FloatingNav from "./components/FloatingNav";
import ScreenSizeIndicator from "./components/ScreenSizeIndicaator";
import CTAButtonsSection from "./components/section/CTAButtonsSection";
import HeroSection from "./components/section/HeroSection";

const App = () => {
  return (
    <main className="min-h-[100vh]">
      <ScreenSizeIndicator />
      <FloatingNav />
      <div className="px-12 lg:px-60 space-y-14">
        <HeroSection />
        <HeroSection />
        <HeroSection />
        <CTAButtonsSection />
      </div>
    </main>
  );
};

export default App;
