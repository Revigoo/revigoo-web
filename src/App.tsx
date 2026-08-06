import { useEffect, useState } from "react";

import CustomCursor from "./components/ui/CustomCursor";
import LoadingScreen from "./components/ui/LoadingScreen";

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Features from "./components/features";
import Workflow from "./components/workflow";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
     <CustomCursor />
      <LoadingScreen isLoading={loading} />

      {!loading && (
        <>
          <Navbar />
          <Hero />
          <About />
          <Features />
          <Workflow />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}