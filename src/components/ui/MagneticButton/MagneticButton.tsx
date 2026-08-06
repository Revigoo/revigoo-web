import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import type { ReactNode } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
}

export default function MagneticButton({
  children,
  className = "",
}: MagneticButtonProps) {

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 150,
    damping: 15,
  });

  const springY = useSpring(y, {
    stiffness: 150,
    damping: 15,
  });

  function handleMouseMove(
    e: React.MouseEvent<HTMLButtonElement>
  ) {
    const rect = e.currentTarget.getBoundingClientRect();

    const moveX =
      (e.clientX - rect.left - rect.width / 2) * 0.25;

    const moveY =
      (e.clientY - rect.top - rect.height / 2) * 0.25;

    x.set(moveX);
    y.set(moveY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.button
      style={{
        x: springX,
        y: springY,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.96,
      }}
      className={className}
    >
      {children}
    </motion.button>
  );
}