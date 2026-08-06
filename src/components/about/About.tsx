import AboutContent from "./AboutContent";
import AboutCards from "./AboutCards";

export default function About() {
  return (
    <section
      id="about"
      className="bg-white py-24 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

        <AboutContent />

        <AboutCards />

      </div>
    </section>
  );
}