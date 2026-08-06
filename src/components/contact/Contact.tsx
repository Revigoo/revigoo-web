import { motion } from "framer-motion";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-50 py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            CONTACT US
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            Ready to Experience
            <span className="text-orange-500">
              {" "}Smarter Bike Service?
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Whether you're a bike owner or a garage partner,
            REVIGOO is here to make servicing simpler, faster,
            and more transparent.
          </p>
        </motion.div>

        <div className="mt-16">
          <ContactInfo />
        </div>

        <ContactForm />

      </div>
    </section>
  );
}