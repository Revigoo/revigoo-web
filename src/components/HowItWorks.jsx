import { motion } from "framer-motion";
import {
  FaCalendarCheck,
  FaStore,
  FaSearch,
  FaFileInvoiceDollar,
  FaCheckCircle,
  FaTools,
  FaMotorcycle,
  FaHistory,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaCalendarCheck />,
    title: "Book Service",
    desc: "Choose your bike, select the required service, and book your preferred date & time.",
  },
  {
    icon: <FaStore />,
    title: "Choose Verified Garage",
    desc: "Browse trusted partner garages, compare ratings, and select the best one for your bike.",
  },
  {
    icon: <FaSearch />,
    title: "Bike Inspection",
    desc: "A professional inspection is performed to identify service requirements and repairs.",
  },
  {
    icon: <FaFileInvoiceDollar />,
    title: "Transparent Quote",
    desc: "Receive a detailed digital estimate with parts, labor, and service charges—no hidden costs.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Approve Repair",
    desc: "Review the quotation and approve the repair before any work begins.",
  },
  {
    icon: <FaTools />,
    title: "Repair & Live Updates",
    desc: "Your bike is serviced by experts while you receive real-time progress updates.",
  },
  {
    icon: <FaMotorcycle />,
    title: "Pickup / Delivery",
    desc: "Pick up your bike or choose doorstep delivery where available.",
  },
  {
    icon: <FaHistory />,
    title: "Digital Service History",
    desc: "Access invoices, service records, replaced parts, and maintenance history anytime.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="workflow"
      className="bg-[#050816] py-28 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-orange-500 uppercase tracking-[4px] text-center font-semibold"
        >
          Workflow
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mt-4"
        >
          How Revigoo Works
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-gray-400 text-center max-w-3xl mx-auto mt-6"
        >
          A transparent and hassle-free bike service experience from booking
          to complete digital maintenance history.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 group overflow-hidden"
            >
              {/* Step Number */}
              <div className="absolute top-5 right-5 text-5xl font-black text-white/5">
                0{index + 1}
              </div>

              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-orange-500/20 text-orange-500 flex items-center justify-center text-3xl group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mt-8">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 mt-4 leading-7">
                {step.desc}
              </p>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-3xl border border-orange-500 opacity-0 group-hover:opacity-100 transition duration-300"></div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}