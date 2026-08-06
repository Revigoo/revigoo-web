import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";
import { features } from "./data";

export default function Features() {
  return (
    <section
      id="features"
      className="bg-slate-50 py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            FEATURES
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            Everything You Need For
            <span className="text-orange-500">
              {" "}Hassle-Free Bike Service
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            REVIGOO manages your complete bike service journey,
            giving you transparency, convenience, and peace of mind.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              {...feature}
            />
          ))}
        </div>

      </div>
    </section>
  );
}