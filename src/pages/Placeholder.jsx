import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Hammer } from "lucide-react";

// Generic shell so Resources / About / Services routes already render
// inside the shared Layout while their full builds are pending.
export default function Placeholder({ title, subtitle }) {
  return (
    <section className="relative grid min-h-[80vh] place-items-center px-5 pt-40 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="glass mx-auto max-w-xl rounded-3xl p-10 text-center shadow-soft"
      >
        <span className="eyebrow mb-5 justify-center">
          <Hammer className="h-3.5 w-3.5" /> Coming Soon
        </span>
        <h1 className="display-lg font-display font-bold text-ink">{title}</h1>
        <p className="mx-auto mt-4 max-w-md text-ink/60">{subtitle}</p>
        <Link
          to="/"
          className="group mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>
      </motion.div>
    </section>
  );
}
