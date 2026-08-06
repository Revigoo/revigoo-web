import { motion } from "framer-motion";
import type { IconType } from "react-icons";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: IconType;
}

export default function FeatureCard({
  title,
  description,
  icon: Icon,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition"
    >
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-2xl text-orange-500 transition group-hover:bg-orange-500 group-hover:text-white">
        <Icon />
      </div>

      <h3 className="mb-3 text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="leading-7 text-slate-600">
        {description}
      </p>
    </motion.div>
  );
}