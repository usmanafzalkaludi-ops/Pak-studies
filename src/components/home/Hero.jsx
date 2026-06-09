import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, GraduationCap, ChevronDown } from "lucide-react";
import { SITE } from "../../lib/site.js";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.15 },
  },
};
const rise = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const stageRef = useRef(null);

  // Mouse-reactive parallax for the geometric accents + portrait.
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 120, damping: 20 });
  const sy = useSpring(my, { stiffness: 120, damping: 20 });

  const handleMouse = (e) => {
    const rect = stageRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    mx.set(px);
    my.set(py);
  };

  const blobX = useTransform(sx, [-0.5, 0.5], [-30, 30]);
  const blobY = useTransform(sy, [-0.5, 0.5], [-24, 24]);
  const ringX = useTransform(sx, [-0.5, 0.5], [26, -26]);
  const ringY = useTransform(sy, [-0.5, 0.5], [20, -20]);
  const portraitX = useTransform(sx, [-0.5, 0.5], [-14, 14]);
  const portraitY = useTransform(sy, [-0.5, 0.5], [-10, 10]);
  const tiltZ = useTransform(sx, [-0.5, 0.5], [-3, 3]);

  return (
    <section
      ref={stageRef}
      onMouseMove={handleMouse}
      className="relative mx-auto max-w-7xl px-5 pb-16 pt-32 sm:px-8 sm:pt-40 lg:pt-44"
    >
      {/* Asymmetric layout: text spans wider on the left, visual offset right */}
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
        {/* Copy column */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="lg:col-span-7"
        >
          <motion.div variants={rise}>
            <span className="eyebrow glass rounded-full px-4 py-2 shadow-sm">
              <Sparkles className="h-3.5 w-3.5" />
              Cambridge O Level &amp; IGCSE Specialist
            </span>
          </motion.div>

          <motion.h1
            variants={rise}
            className="display-xl mt-6 font-display font-extrabold text-ink"
          >
            Mastering{" "}
            <span className="text-gradient-emerald">History</span> &amp;{" "}
            <span className="relative whitespace-nowrap">
              Geography
              <motion.svg
                viewBox="0 0 300 18"
                className="absolute -bottom-2 left-0 h-3 w-full text-emerald"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 1, duration: 1.1, ease: "easeInOut" }}
              >
                <motion.path
                  d="M3 12 C 70 4, 230 4, 297 11"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </motion.svg>
            </span>
            .
            <br className="hidden sm:block" />
            Redefining Cambridge Excellence.
          </motion.h1>

          <motion.p
            variants={rise}
            className="mt-7 max-w-xl text-base leading-relaxed text-ink/60 sm:text-lg"
          >
            Sir Haisam Javed turns the rigid Cambridge marking criteria into a
            repeatable scoring system — for O Level History{" "}
            <span className="font-semibold text-ink">2059/01</span>, Geography{" "}
            <span className="font-semibold text-ink">2059/02</span> and IGCSE{" "}
            <span className="font-semibold text-ink">0448</span>.
          </motion.p>

          <motion.div variants={rise} className="mt-9 flex flex-wrap items-center gap-4">
            {/* Primary glowing pill with slide-fill hover */}
            <a
              href={SITE.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-emerald-deep to-emerald px-7 py-4 text-sm font-bold text-white shadow-glow"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-emerald to-emerald-mint transition-transform duration-500 ease-out group-hover:translate-x-0" />
              <GraduationCap className="relative z-10 h-5 w-5" />
              <span className="relative z-10">Explore the Courses</span>
              <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            {/* Secondary anchor to the mechanics section */}
            <a
              href="#mechanics"
              className="group inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/60 px-6 py-4 text-sm font-semibold text-ink backdrop-blur transition-colors hover:border-emerald/50"
            >
              See the Method
              <ChevronDown className="h-4 w-4 text-emerald-deep transition-transform group-hover:translate-y-0.5" />
            </a>
          </motion.div>

          {/* Mini trust row */}
          <motion.div
            variants={rise}
            className="mt-10 flex items-center gap-5 text-sm text-ink/55"
          >
            <div className="flex -space-x-2">
              {[0, 1, 2, 3].map((i) => (
                <span
                  key={i}
                  className="grid h-9 w-9 place-items-center rounded-full border-2 border-white bg-gradient-to-br from-emerald-mint to-emerald-deep text-[10px] font-bold text-white"
                >
                  A*
                </span>
              ))}
            </div>
            <p className="max-w-[14rem] leading-tight">
              Trusted by thousands of O Level &amp; IGCSE students worldwide.
            </p>
          </motion.div>
        </motion.div>

        {/* Visual column */}
        <div className="relative lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            style={{ rotate: tiltZ }}
            className="relative mx-auto aspect-[4/5] w-full max-w-md"
          >
            {/* animated geometric accents reacting to mouse */}
            <motion.div
              style={{ x: blobX, y: blobY }}
              className="organic-blob absolute -left-8 -top-8 h-44 w-44 bg-gradient-to-br from-emerald-mint/40 to-emerald/10 blur-md"
            />
            <motion.div
              style={{ x: ringX, y: ringY }}
              className="absolute -bottom-6 -right-6 h-40 w-40 rounded-full border-[14px] border-emerald/15"
            />
            <motion.div
              style={{ x: ringX, y: blobY }}
              className="absolute right-6 top-2 h-16 w-16 rotate-12 rounded-2xl bg-emerald-deep/10 backdrop-blur"
            />

            {/* organic masked portrait */}
            <motion.div
              style={{ x: portraitX, y: portraitY }}
              className="organic-blob relative h-full w-full overflow-hidden bg-gradient-to-b from-emerald/10 to-emerald-deep/10 shadow-panel ring-1 ring-emerald/20"
            >
              <img
                src={SITE.portrait}
                alt="Sir Haisam Javed, Pakistan Studies educator"
                className="h-full w-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-forest/30 via-transparent to-transparent" />
            </motion.div>

            {/* floating credential chip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.7 }}
              className="glass absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-2xl px-5 py-3 shadow-soft"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-emerald-deep to-emerald text-white">
                <GraduationCap className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <p className="text-sm font-bold text-ink">Sir Haisam Javed</p>
                <p className="text-xs text-emerald-deep">Pakistan Studies Mentor</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
