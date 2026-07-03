import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaEnvelope,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#07111F] py-32 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-orange-500 uppercase tracking-[4px] font-semibold">
            Contact Us
          </p>

          <h2 className="text-5xl font-black mt-4">
            Let's Connect
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
            Revigoo is launching soon. Have questions, want updates,
            or interested in partnering with us? We'd love to hear from you.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid lg:grid-cols-2 gap-10 mt-20">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl"
          >

            <h3 className="text-3xl font-bold mb-10">
              Contact Information
            </h3>

            <div className="space-y-8">


              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-xl bg-orange-500 flex items-center justify-center">
                  <FaWhatsapp />
                </div>

                <div>
                  <p className="text-gray-400">WhatsApp</p>
                  <h4 className="text-xl font-semibold">
                    +91 9562005632
                  </h4>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-xl bg-orange-500 flex items-center justify-center">
                  <FaEnvelope />
                </div>

                <div>
                  <p className="text-gray-400">Email</p>
                  <h4 className="text-xl font-semibold">
                    info@revigoo.in
                  </h4>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-xl bg-orange-500 flex items-center justify-center">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <p className="text-gray-400">Launching In</p>
                  <h4 className="text-xl font-semibold">
                    Kerala, India
                  </h4>
                </div>
              </div>

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl"
          >

            <h3 className="text-3xl font-bold">
              Stay Connected
            </h3>

            <p className="text-gray-400 mt-5 leading-8">
              Follow Revigoo on social media and be among the first to
              know when we launch.
            </p>

            <div className="flex gap-5 mt-10">

              <a
               href="https://wa.me/+919562005632"
                className="w-16 h-16 rounded-2xl bg-orange-500 flex items-center justify-center text-2xl hover:scale-110 transition"
              >
                <FaWhatsapp />
              </a>

              <a
                href="https://instagram.com/revigoo"
                className="w-16 h-16 rounded-2xl bg-orange-500 flex items-center justify-center text-2xl hover:scale-110 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="mailto:info@revigoo.in"
                className="w-16 h-16 rounded-2xl bg-orange-500 flex items-center justify-center text-2xl hover:scale-110 transition"
              >
                <FaEnvelope />
              </a>

            </div>


          </motion.div>

        </div>

      </div>
    </section>
  );
}