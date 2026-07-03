import { motion } from "framer-motion";
import {
  FaTools,
  FaWrench,
  FaSearch,
  FaFileInvoiceDollar,
  FaCheckCircle,
  FaWarehouse,
  FaHistory,
  FaWhatsapp,
  FaTruck,
  FaBell,
  FaStar,
  FaReceipt,
} from "react-icons/fa";

const services = [
  {
    icon: <FaTools />,
    title: "General Bike Service",
    desc: "Regular maintenance to keep your bike running smoothly and efficiently.",
  },
  {
    icon: <FaWrench />,
    title: "Bike Repair",
    desc: "Mechanical and electrical repairs performed by verified garages.",
  },
  {
    icon: <FaSearch />,
    title: "Bike Inspection",
    desc: "Complete health check with a detailed inspection report before repairs.",
  },
  {
    icon: <FaFileInvoiceDollar />,
    title: "Transparent Repair Quotes",
    desc: "Receive a detailed quotation before any repair begins. No hidden charges.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Repair After Approval",
    desc: "Your bike is repaired only after you approve the quotation.",
  },
  {
    icon: <FaWarehouse />,
    title: "Verified Garage Network",
    desc: "Access a trusted network of professional and verified local garages.",
  },
  {
    icon: <FaHistory />,
    title: "Digital Service History",
    desc: "Store service records, repairs, invoices, and maintenance history digitally.",
  },
  {
    icon: <FaWhatsapp />,
    title: "WhatsApp Booking",
    desc: "Book your bike service instantly through WhatsApp with ease.",
  },
  {
    icon: <FaTruck />,
    title: "Pickup & Drop",
    desc: "Convenient bike pickup and doorstep delivery in supported locations.",
  },
  {
    icon: <FaBell />,
    title: "Real-Time Updates",
    desc: "Receive live notifications from inspection to service completion.",
  },
  {
    icon: <FaStar />,
    title: "Reviews & Ratings",
    desc: "Choose trusted garages based on genuine customer feedback.",
  },
  {
    icon: <FaReceipt />,
    title: "Digital Invoice",
    desc: "Get secure digital invoices instantly after every completed service.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#07111F] py-32 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-orange-500 uppercase tracking-[4px] text-center font-semibold"
        >
          Our Services
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-5xl font-bold text-center mt-4"
        >
          Everything Your Bike Needs
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 text-center mt-6 max-w-3xl mx-auto"
        >
          Revigoo connects bike owners with trusted garages through a
          transparent, digital, and hassle-free service experience.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-20">

          {services.map((service, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl group overflow-hidden"
            >

              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <div className="relative z-10">

                <div className="w-16 h-16 rounded-2xl bg-orange-500/20 flex items-center justify-center text-orange-500 text-3xl group-hover:bg-orange-500 group-hover:text-white transition">

                  {service.icon}

                </div>

                <h3 className="text-2xl font-bold mt-8">

                  {service.title}

                </h3>

                <p className="text-gray-400 mt-5 leading-7">

                  {service.desc}

                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}