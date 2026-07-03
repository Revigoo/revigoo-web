import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

export default function LaunchCTA() {
  return (
    <section className="relative bg-gradient-to-r from-[#050816] via-[#0A1428] to-[#050816] py-32 overflow-hidden">

      {/* Background Glow */}

      <div className="absolute w-[500px] h-[500px] bg-orange-500/20 blur-[180px] rounded-full -left-40 top-20"></div>

      <div className="absolute w-[500px] h-[500px] bg-orange-400/10 blur-[180px] rounded-full right-0 bottom-0"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left */}

        <motion.div
          initial={{ opacity:0, x:-80 }}
          whileInView={{ opacity:1, x:0 }}
          transition={{ duration:.8 }}
        >

          <span className="inline-block px-5 py-2 rounded-full bg-orange-500/20 text-orange-400 font-semibold mb-6">
            🚀 Launching Soon
          </span>

          <h2 className="text-5xl lg:text-6xl font-black leading-tight">

            The Future of
            <span className="text-orange-500"> Bike Service </span>
            Starts Here.

          </h2>

          <p className="text-gray-400 text-lg mt-8 leading-9">

            Revigoo is building a smarter and more transparent bike servicing
            platform that connects riders with verified garages. Book services,
            receive inspection reports, approve repairs digitally, and maintain
            your complete bike service history — all from one place.

          </p>

          <div className="mt-10 space-y-5">

            <div className="flex items-center gap-4">
              <FaCheckCircle className="text-orange-500 text-xl" />
              <span>Verified Garage Network</span>
            </div>

            <div className="flex items-center gap-4">
              <FaCheckCircle className="text-orange-500 text-xl" />
              <span>Transparent Repair Quotes</span>
            </div>

            <div className="flex items-center gap-4">
              <FaCheckCircle className="text-orange-500 text-xl" />
              <span>Digital Service History</span>
            </div>

            <div className="flex items-center gap-4">
              <FaCheckCircle className="text-orange-500 text-xl" />
              <span>WhatsApp Booking</span>
            </div>

          </div>


        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity:0, x:80 }}
          whileInView={{ opacity:1, x:0 }}
          transition={{ duration:.8 }}
          className="relative"
        >

          <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-10">

            <h3 className="text-3xl font-bold mb-8">

              Coming Soon

            </h3>

            <div className="space-y-5">

              <div className="flex justify-between border-b border-white/10 pb-4">
                <span>Bike Service</span>
                <span className="text-orange-500">✔</span>
              </div>

              <div className="flex justify-between border-b border-white/10 pb-4">
                <span>Verified Garages</span>
                <span className="text-orange-500">✔</span>
              </div>

              <div className="flex justify-between border-b border-white/10 pb-4">
                <span>Repair Approval</span>
                <span className="text-orange-500">✔</span>
              </div>

              <div className="flex justify-between border-b border-white/10 pb-4">
                <span>Live Service Updates</span>
                <span className="text-orange-500">✔</span>
              </div>

              <div className="flex justify-between border-b border-white/10 pb-4">
                <span>Digital Invoices</span>
                <span className="text-orange-500">✔</span>
              </div>

              <div className="flex justify-between">
                <span>Service History</span>
                <span className="text-orange-500">✔</span>
              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}