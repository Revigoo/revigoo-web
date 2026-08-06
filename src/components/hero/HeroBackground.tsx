import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <>
      <div className="absolute inset-0 bg-[#071A2F]" />

      {/* Orange Glow */}

      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-40 -left-40 h-[650px] w-[650px] rounded-full bg-orange-500/20 blur-[170px]"
      />

      {/* Blue Glow */}

      <motion.div
        animate={{
          x: [0, -60, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-0 h-[700px] w-[700px] rounded-full bg-sky-500/20 blur-[180px]"
      />

      {/* Small Floating Glow */}

      <motion.div
        animate={{
          y: [0, -30, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
        }}
        className="absolute right-48 top-32 h-48 w-48 rounded-full bg-orange-400/20 blur-[80px]"
      />
    </>
  );
}