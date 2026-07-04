import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

import bike from "../assets/bike.png";


export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#050816] overflow-hidden pt-36 pb-16 flex items-center"
    >
      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-[350px] md:w-[500px] h-[350px] md:h-[500px] bg-orange-500/20 blur-[150px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[350px] md:w-[500px] h-[350px] md:h-[500px] bg-blue-500/10 blur-[150px] rounded-full"></div>

      <div className="max-w-screen-2xl mx-auto px-5 sm:px-8 lg:px-16 xl:px-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
        >


          {/* Badge */}
          <span className="inline-flex items-center rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-400">
            🚀 Launching Soon
          </span>

          {/* Heading */}
          <h1 className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">

            Ride Easy, 

            <br />

            <span className="text-orange-500">
              We Care.
            </span>

          </h1>

          {/* Description */}
          <p className="mt-8 max-w-xl text-base sm:text-lg leading-8 text-gray-400">

            REVIGOO is a smart bike service marketplace that connects riders with trusted garages, making every service transparent, convenient, and reliable.

          </p>


          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">

            {[
              "Verified Garages",
              "Transparent Pricing",
              "Digital Service History",
              "Live Service Updates",
            ].map((item) => (

              <div
                key={item}
                className="flex items-center gap-3"
              >
                <FaCheckCircle className="text-orange-500" />

                <span>{item}</span>

              </div>

            ))}

          </div>

        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, -15, 0],
          }}
          transition={{
            duration: 1,
            y: {
              duration: 4,
              repeat: Infinity,
            },
          }}
          className="flex justify-center"
        >

          <img
            src={bike}
            alt="Revigoo Bike"
            className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl drop-shadow-[0_30px_80px_rgba(255,115,0,.45)]"
          />

        </motion.div>

      </div>
    </section>
  );
}
