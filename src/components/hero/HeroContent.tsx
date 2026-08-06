import { motion } from "framer-motion";
import MagneticButton from "../ui/MagneticButton";

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-xl"
    >
      {/* Floating Badge */}

      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}
        className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-sm font-semibold text-orange-300 backdrop-blur-xl"
      >
        🚀 Technology Powered Bike Service
      </motion.div>

      <h1 className="mt-8 text-5xl font-black leading-tight text-white lg:text-7xl">
        Ride Easy.
        <br />
        <span className="text-orange-500">
          We Care.
        </span>
      </h1>

      <p className="mt-8 text-lg leading-8 text-slate-300">
        REVIGOO simplifies motorcycle servicing by connecting
        customers with trusted garages while managing the entire
        journey—from pickup to quality delivery.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">

        <MagneticButton
  className="
  rounded-full
  bg-orange-500
  px-8
  py-4
  font-semibold
  text-white
  shadow-xl
  shadow-orange-500/30
  transition
  hover:bg-orange-600
"
>
  Explore REVIGOO
</MagneticButton>

        <MagneticButton
  className="
  rounded-full
  bg-orange-500
  px-8
  py-4
  font-semibold
  text-white
  shadow-xl
  shadow-orange-500/30
  transition
  hover:bg-orange-600
"
>
  Contact Us
</MagneticButton>

      </div>

      {/* Statistics */}

      <div className="mt-14 flex flex-wrap gap-10">

        <div>
          <h2 className="text-4xl font-black text-white">
            100%
          </h2>

          <p className="text-slate-400">
            Transparent Process
          </p>
        </div>

        <div>
          <h2 className="text-4xl font-black text-white">
            Trusted
          </h2>

          <p className="text-slate-400">
            Verified Garages
          </p>
        </div>

      </div>
    </motion.div>
  );
}