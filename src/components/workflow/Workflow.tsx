import { motion } from "framer-motion";
import WorkflowCard from "./WorkflowCard";
import { workflow } from "./workflowData";

export default function Workflow() {
  return (
    <section
      id="workflow"
      className="bg-white py-28"
    >
      <div className="mx-auto max-w-6xl px-6">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-24 text-center"
        >
          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            HOW IT WORKS
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            From Booking
            <span className="text-orange-500">
              {" "}to Delivery
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            REVIGOO manages every stage of your bike service,
            ensuring transparency, convenience, and quality.
          </p>
        </motion.div>

        <div className="space-y-16">
          {workflow.map((item, index) => (
            <WorkflowCard
              key={item.step}
              {...item}
              reverse={index % 2 === 1}
            />
          ))}
        </div>

      </div>
    </section>
  );
}