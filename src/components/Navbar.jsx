import { useEffect, useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    {
      title: "Home",
      href: "#home",
    },
    {
      title: "Services",
      href: "#services",
    },
    {
      title: "How It Works",
      href: "#workflow",
    },
    {
      title: "Contact",
      href: "#contact",
    },
  ];

  return (
    <header className="fixed top-4 left-0 w-full z-50">

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">

        <div
          className={`rounded-2xl transition-all duration-500
          ${
            scrolled
              ? "bg-[#08111F]/90 backdrop-blur-xl border border-white/10 shadow-2xl"
              : "bg-[#08111F]/70 backdrop-blur-xl border border-white/10"
          }`}
        >

          <div className="flex items-center justify-between px-5 lg:px-8 py-3">

            {/* Logo */}

            <a
              href="#home"
              className="flex items-center gap-3"
            >
              <img
                src={logo}
                alt="Revigoo"
                className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain"
              />

              {/* Hide text on mobile */}

              <h1 className="hidden sm:block text-2xl md:text-3xl lg:text-4xl font-black italic tracking-wide">

                <span className="text-white">
                  REVI
                </span>

                <span className="text-orange-500">
                  GOO
                </span>

              </h1>

            </a>

            {/* Desktop Menu */}

            <nav className="hidden lg:flex items-center gap-10">

              {links.map((item) => (

                <a
                  key={item.title}
                  href={item.href}
                  className="relative text-white font-medium transition hover:text-orange-500 group"
                >
                  {item.title}

                  <span className="absolute left-0 -bottom-2 h-[2px] bg-orange-500 w-0 group-hover:w-full transition-all duration-300"></span>

                </a>

              ))}

            </nav>

            {/* Desktop Button */}

            <a
              href="#contact"
              className="hidden lg:flex items-center gap-3 bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-xl font-semibold"
            >
              Launching Soon

              <FaArrowRight />
            </a>

            {/* Mobile Menu Button */}

            <button
              className="lg:hidden text-white text-3xl"
              onClick={() => setOpen(!open)}
            >
              {open ? <HiX /> : <HiMenuAlt3 />}
            </button>

          </div>

          {/* Mobile Menu */}

          <div
            className={`overflow-hidden transition-all duration-500 lg:hidden ${
              open ? "max-h-96" : "max-h-0"
            }`}
          >

            <div className="border-t border-white/10 px-5 py-5">

              {links.map((item) => (

                <a
                  key={item.title}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 text-white hover:text-orange-500"
                >
                  {item.title}
                </a>

              ))}

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-4 flex justify-center items-center gap-3 bg-orange-500 rounded-xl py-4 font-semibold"
              >
                Launching Soon

                <FaArrowRight />
              </a>

            </div>

          </div>

        </div>

      </div>

    </header>
  );
}