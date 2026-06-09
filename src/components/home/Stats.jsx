import { motion } from "framer-motion";
import { Users, Award, BookOpenCheck, Trophy } from "lucide-react";
import CountUp from "./CountUp.jsx";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
  }),
};

export default function Stats() {
  return (
    <section className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="mb-12 max-w-2xl"
      >
        <span className="eyebrow">
          <Trophy className="h-3.5 w-3.5" /> Proven Track Record
        </span>
        <h2 className="display-lg mt-4 font-display font-bold text-ink">
          A reputation built on{" "}
          <span className="text-gradient-emerald">results.</span>
        </h2>
      </motion.div>

      {/* Asymmetric staggered blocks — not a uniform grid */}
      <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-12">
        {/* Big feature block */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
          className="group relative col-span-2 overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-forest via-emerald-deep to-emerald p-8 text-white shadow-panel lg:col-span-7 lg:row-span-2 lg:p-10"
        >
          <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/10 blur-2xl transition-transform duration-700 group-hover:scale-150" />
          <Users className="h-9 w-9 text-emerald-mint" />
          <p className="mt-8 font-display text-6xl font-extrabold sm:text-7xl">
            <CountUp to={5000} duration={2.4} suffix="+" />
          </p>
          <p className="mt-3 text-lg font-semibold">Thousands of Impacted Minds</p>
          <p className="mt-2 max-w-sm text-sm text-white/70">
            Students taught across online and onsite Cambridge programs, from
            first lessons to final exam season.
          </p>
        </motion.div>

        {/* A* grades */}
        <motion.div
          custom={1}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
          className="group relative col-span-2 overflow-hidden rounded-3xl border border-emerald/15 bg-white/70 p-7 shadow-soft backdrop-blur sm:col-span-1 lg:col-span-5"
        >
          <Award className="h-8 w-8 text-emerald-deep" />
          <p className="mt-6 font-display text-5xl font-extrabold text-ink">
            <CountUp to={97} duration={2} suffix="%" />
          </p>
          <p className="mt-2 font-semibold text-ink">A* &amp; A Grade Rate</p>
          <p className="mt-1 text-sm text-ink/55">
            Record-breaking results across O Level &amp; IGCSE cohorts.
          </p>
        </motion.div>

        {/* Years */}
        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
          className="group relative col-span-1 overflow-hidden rounded-3xl bg-ink p-7 text-white shadow-soft lg:col-span-5"
        >
          <BookOpenCheck className="h-8 w-8 text-emerald-mint" />
          <p className="mt-6 font-display text-5xl font-extrabold">
            <CountUp to={10} duration={1.8} suffix="+" />
          </p>
          <p className="mt-2 font-semibold">Years Teaching</p>
        </motion.div>
      </div>
    </section>
  );
}
