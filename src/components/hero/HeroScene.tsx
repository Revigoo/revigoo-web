import { motion } from "framer-motion";
import { FaMotorcycle } from "react-icons/fa";

export default function HeroScene() {
  return (
    <motion.div
      animate={{
        y: [0, -15, 0],
        rotate: [0, 1, 0, -1, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 8,
      }}
      className="relative flex items-center justify-center"
    >
      <div className="absolute h-[500px] w-[500px] rounded-full bg-orange-500/20 blur-[120px]" />

      <div className="relative flex h-[420px] w-[420px] items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl">

        <FaMotorcycle className="text-[180px] text-orange-500" />

      </div>
    </motion.div>
  );
}