import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
} from "framer-motion";
import {
  Sparkles,
  CheckCircle2,
  Cpu,
  Gauge,
  FileText,
  Wand2,
} from "lucide-react";
import CountUp from "./CountUp.jsx";

const SAMPLE_TEXT =
  "The 1973 Constitution was the most significant step toward democracy because it was unanimously agreed by all parties, establishing a parliamentary system. However, the importance of the 1956 Constitution should also be weighed, as it first declared Pakistan an Islamic Republic...";

const FEEDBACK = [
  { label: "Level 4 — Balanced explanation reached", ok: true },
  { label: "Strong factual support with dates", ok: true },
  { label: "Add a clear sustained judgement to conclude", ok: false },
];

/* Typewriter that re-runs each time the block scrolls into view. */
function useTypewriter(text, active, speed = 22) {
  const [out, setOut] = useState("");
  useEffect(() => {
    if (!active) {
      setOut("");
      return;
    }
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setOut(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, active, speed]);
  return out;
}

export default function AIGrader() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.4 });
  const typed = useTypewriter(SAMPLE_TEXT, inView);

  return (
    <section
      ref={ref}
      className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28"
    >
      {/* Section heading */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="mb-14 max-w-2xl"
      >
        <span className="eyebrow">
          <Cpu className="h-3.5 w-3.5" /> Flagship Feature
        </span>
        <h2 className="display-lg mt-4 font-display font-bold text-ink">
          The 14-Mark{" "}
          <span className="text-gradient-emerald">AI Grader.</span>
        </h2>
        <p className="mt-4 text-ink/60">
          Students paste a mock answer and get instant, examiner-style feedback —
          evaluated natively against the real Cambridge level descriptors.
        </p>
      </motion.div>

      {/* Dashboard container */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-[2rem] border border-ink/10 bg-gradient-to-br from-[#0C1A14] to-[#06140F] p-4 shadow-panel sm:p-6 lg:p-8"
      >
        {/* ambient glow */}
        <div className="pointer-events-none absolute -left-16 top-0 h-72 w-72 rounded-full bg-emerald/20 blur-[110px]" />
        <div className="pointer-events-none absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-emerald-mint/10 blur-[110px]" />

        {/* fake window chrome */}
        <div className="relative mb-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400/80" />
            <span className="h-3 w-3 rounded-full bg-amber-400/80" />
            <span className="h-3 w-3 rounded-full bg-emerald-mint/90" />
          </div>
          <span className="flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-emerald-mint ring-1 ring-white/10">
            <Wand2 className="h-3.5 w-3.5" /> grader.haisamjaved.ai
          </span>
        </div>

        <div className="relative grid grid-cols-1 gap-5 lg:grid-cols-2">
          {/* LEFT — text editor with live typing */}
          <div className="rounded-2xl border border-white/10 bg-black/30 p-5 backdrop-blur">
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/40">
              <FileText className="h-4 w-4" /> Question 4(c) — 14 marks
            </div>
            <p className="min-h-[180px] font-mono text-sm leading-relaxed text-emerald-mint/90">
              {typed}
              <motion.span
                className="ml-0.5 inline-block h-4 w-[2px] -translate-y-0.5 bg-emerald-mint align-middle"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.9, repeat: Infinity }}
              />
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-white/40">
              <span className="flex items-center gap-1.5 rounded-md bg-white/5 px-2 py-1">
                <Sparkles className="h-3 w-3 text-emerald-mint" />
                Analyzing against rubric…
              </span>
            </div>
          </div>

          {/* RIGHT — floating feedback report card */}
          <div className="relative grid place-items-center">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="glass w-full max-w-sm rounded-2xl p-6 shadow-soft"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-emerald-deep to-emerald text-white">
                    <Gauge className="h-5 w-5" />
                  </span>
                  <div className="leading-tight">
                    <p className="text-sm font-bold text-ink">Score Report</p>
                    <p className="text-xs text-emerald-deep">
                      Cambridge level mark scheme
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-emerald/15 px-3 py-1 text-xs font-bold text-emerald-deep">
                  Level 4
                </span>
              </div>

              {/* big score */}
              <div className="mt-5 flex items-end gap-2">
                <p className="font-display text-6xl font-extrabold text-ink">
                  {inView ? <CountUp to={12} duration={1.8} /> : 0}
                </p>
                <p className="mb-2 text-xl font-bold text-ink/40">/ 14</p>
              </div>

              {/* progress bar */}
              <div className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-ink/10">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-emerald-deep to-emerald-mint"
                  initial={{ width: 0 }}
                  animate={inView ? { width: "85%" } : { width: 0 }}
                  transition={{ duration: 1.6, ease: "easeOut", delay: 0.3 }}
                />
              </div>

              {/* feedback checklist */}
              <ul className="mt-5 space-y-3">
                <AnimatePresence>
                  {FEEDBACK.map((f, i) => (
                    <motion.li
                      key={f.label}
                      initial={{ opacity: 0, x: 16 }}
                      animate={
                        inView
                          ? { opacity: 1, x: 0 }
                          : { opacity: 0, x: 16 }
                      }
                      transition={{ delay: 0.6 + i * 0.25, duration: 0.5 }}
                      className="flex items-start gap-2.5 text-sm"
                    >
                      <CheckCircle2
                        className={`mt-0.5 h-4 w-4 shrink-0 ${
                          f.ok ? "text-emerald" : "text-amber-500"
                        }`}
                      />
                      <span className="text-ink/70">{f.label}</span>
                    </motion.li>
                  ))}
                </AnimatePresence>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
