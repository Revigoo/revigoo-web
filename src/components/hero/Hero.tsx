import HeroBackground from "./HeroBackground";
import GridBackground from "./GridBackground";
import HeroContent from "./HeroContent";
import HeroScene from "./HeroScene";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#071A2F]"
    >
      <HeroBackground />
      <GridBackground />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col-reverse items-center justify-center gap-16 px-6 pt-28 lg:flex-row lg:justify-between">

        <HeroContent />

        <HeroScene />

      </div>

      <ScrollIndicator />
    </section>
  );
}