import { motion } from "framer-motion";

export default function AboutContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
        ABOUT REVIGOO
      </span>

      <h2 className="mt-6 text-5xl font-black leading-tight text-slate-900">
        Smart Bike Service
        <span className="text-orange-500">
          {" "}Marketplace
        </span>
      </h2>

      <p className="mt-8 text-lg leading-8 text-slate-600">
        REVIGOO is a technology-enabled platform that connects
        motorcycle owners with trusted and verified service
        garages. We simplify the complete service journey—from
        booking and pickup to repair coordination, quality
        inspection, and doorstep delivery.
      </p>

      <p className="mt-6 text-lg leading-8 text-slate-600">
        Our goal is to make bike servicing transparent,
        reliable, and stress-free while helping garages grow
        through digital operations and better customer
        management.
      </p>
    </motion.div>
  );
}