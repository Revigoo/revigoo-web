import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const addHover = () => setHover(true);
    const removeHover = () => setHover(false);

    window.addEventListener("mousemove", move);

    const elements = document.querySelectorAll(
      "button,a"
    );

    elements.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      window.removeEventListener("mousemove", move);

      elements.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  return (
    <motion.div
      animate={{
        x: position.x - 10,
        y: position.y - 10,
        scale: hover ? 2 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 30,
      }}
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-5 w-5 rounded-full bg-orange-500 shadow-[0_0_25px_#ff6b00] lg:block"
    />
  );
}