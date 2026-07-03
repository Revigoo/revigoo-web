import { motion } from "framer-motion";
import {
  FaBolt,
  FaUserCheck,
  FaTags,
  FaHome,
} from "react-icons/fa";

const features = [
  {
    icon: <FaBolt />,
    title: "Fast Response",
    description:
      "Our nearby mechanics reach you quickly for emergency assistance and scheduled servicing.",
  },
  {
    icon: <FaUserCheck />,
    title: "Verified Mechanics",
    description:
      "Every mechanic is verified, experienced, and trained to provide quality service.",
  },
  {
    icon: <FaTags />,
    title: "Transparent Pricing",
    description:
      "No hidden charges. Know the service cost before confirming your booking.",
  },
  {
    icon: <FaHome />,
    title: "Doorstep Convenience",
    description:
      "Get professional bike service without visiting a garage.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-[#07111F] py-28">

      <div className="max-w-7xl mx-auto px-6">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-orange-500 uppercase tracking-[5px] text-center font-semibold"
        >
          Why Revigoo
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: .2 }}
          className="text-5xl font-bold text-center mt-4"
        >
          Why Choose Us?
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {features.map((feature, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{
                y: -15,
                scale: 1.04,
              }}
              className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 overflow-hidden group"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-orange-500/10 to-transparent"></div>

              <div className="relative z-10">

                <div className="w-20 h-20 rounded-2xl bg-orange-500/20 flex items-center justify-center text-orange-500 text-4xl group-hover:bg-orange-500 group-hover:text-white transition">

                  {feature.icon}

                </div>

                <h3 className="text-2xl font-bold mt-8">

                  {feature.title}

                </h3>

                <p className="text-gray-400 mt-5 leading-8">

                  {feature.description}

                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}