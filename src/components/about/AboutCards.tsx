import { motion } from "framer-motion";
import {
  FaMotorcycle,
  FaTools,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";

const cards = [
  {
    title: "Doorstep Pickup",
    description: "Convenient bike pickup from your location.",
    icon: <FaMotorcycle />,
  },
  {
    title: "Trusted Garages",
    description: "Verified garages delivering reliable service.",
    icon: <FaTools />,
  },
  {
    title: "Live Updates",
    description: "Track every stage of your bike service.",
    icon: <FaMapMarkerAlt />,
  },
  {
    title: "Quality Assurance",
    description: "Final inspection before delivery.",
    icon: <FaCheckCircle />,
  },
];

export default function AboutCards() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {cards.map((card, index) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15 }}
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
        >
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-2xl text-orange-500">
            {card.icon}
          </div>

          <h3 className="text-xl font-bold text-slate-900">
            {card.title}
          </h3>

          <p className="mt-3 text-slate-600">
            {card.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}