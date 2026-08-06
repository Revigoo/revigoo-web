import type { IconType } from "react-icons";
import { motion } from "framer-motion";

interface WorkflowCardProps {
  step: string;
  title: string;
  description: string;
  icon: IconType;
  reverse?: boolean;
}

export default function WorkflowCard({
  step,
  title,
  description,
  icon: Icon,
  reverse = false,
}: WorkflowCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: reverse ? 80 : -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`flex items-center gap-8 ${
        reverse ? "flex-row-reverse" : ""
      }`}
    >
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-orange-500 text-3xl text-white shadow-lg">
        <Icon />
      </div>

      <div className="max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <span className="text-sm font-bold text-orange-500">
          STEP {step}
        </span>

        <h3 className="mt-2 text-2xl font-bold text-slate-900">
          {title}
        </h3>

        <p className="mt-4 text-slate-600 leading-7">
          {description}
        </p>
      </div>
    </motion.div>
  );
}