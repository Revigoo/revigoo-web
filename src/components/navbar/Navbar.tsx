import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Features", href: "#features" },
  { name: "Workflow", href: "#workflow" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActive(entry.target.id);
      }
    });
  },
  {
    rootMargin: "-40% 0px -40% 0px",
    threshold: 0,
  }
);

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-[#071A2F]/70 backdrop-blur-xl border-b border-white/10 shadow-xl py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">

          <Logo />

          {/* Desktop Menu */}

          <div className="hidden items-center gap-10 lg:flex">

            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative text-sm font-medium transition-colors ${
                  active === item.href.replace("#", "")
                    ? "text-orange-400"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {item.name}

                {active === item.href.replace("#", "") && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-orange-500"
                  />
                )}
              </a>
            ))}

            <button className="rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600">
              Launch App
            </button>

          </div>

          {/* Mobile Menu */}

          <button
            onClick={() => setMobileOpen(true)}
            className="text-white lg:hidden"
          >
            <HiOutlineMenuAlt3 size={30} />
          </button>

        </div>
      </motion.nav>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </>
  );
}