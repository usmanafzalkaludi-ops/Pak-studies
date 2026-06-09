import { useRef, useLayoutEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Target, Scale, Layers3, Crosshair } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const PILLARS = [
  {
    icon: Target,
    no: "01",
    title: "Mastering the Marking Criteria",
    text: "Every answer is engineered against Cambridge's exact rubric — students learn what examiners reward before they write a single line.",
  },
  {
    icon: Scale,
    no: "02",
    title: "Multi-Perspective Argument Balancing",
    text: "Build essays that weigh causes, consequences and counter-views with the balance that separates a Level 3 from a Level 4 response.",
  },
  {
    icon: Layers3,
    no: "03",
    title: "Level-Marking Command Techniques",
    text: "Decode the Levels 1–4 mechanics and the command words that unlock high-tier marks on 7, 10 and 14-mark questions.",
  },
  {
    icon: Crosshair,
    no: "04",
    title: "Exam-Room Precision & Timing",
    text: "Drilled structures and timing strategies so knowledge converts into marks under real exam pressure.",
  },
];

/* Card with a 3D tilt that tracks the cursor (tactile micro-interaction). */
function PillarCard({ pillar }) {
  const ref = useRef(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 200, damping: 18 });
  const sry = useSpring(ry, { stiffness: 200, damping: 18 });
  const rotateX = useTransform(srx, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(sry, [-0.5, 0.5], ["-7deg", "7deg"]);

  const onMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    rx.set((e.clientY - rect.top) / rect.height - 0.5);
    ry.set((e.clientX - rect.left) / rect.width - 0.5);
  };
  const reset = () => {
    rx.set(0);
    ry.set(0);
  };

  const Icon = pillar.icon;

  return (
    <motion.article
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className="pillar-card group relative overflow-hidden rounded-3xl border border-ink/8 bg-white/75 p-8 shadow-soft backdrop-blur transition-colors duration-300 hover:border-emerald/40"
    >
      {/* shifting border glow */}
      <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <span className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-emerald/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="flex items-start justify-between" style={{ transform: "translateZ(40px)" }}>
        <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-emerald-deep to-emerald text-white shadow-glow">
          <Icon className="h-6 w-6" />
        </span>
        <span className="font-display text-4xl font-extrabold text-ink/10 transition-colors duration-300 group-hover:text-emerald/30">
          {pillar.no}
        </span>
      </div>

      <h3
        className="mt-7 text-xl font-bold text-ink"
        style={{ transform: "translateZ(30px)" }}
      >
        {pillar.title}
      </h3>
      <p
        className="mt-3 text-sm leading-relaxed text-ink/60"
        style={{ transform: "translateZ(20px)" }}
      >
        {pillar.text}
      </p>
    </motion.article>
  );
}

export default function Pillars() {
  const root = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Heading reveal
      gsap.from(".pillars-head", {
        scrollTrigger: {
          trigger: ".pillars-head",
          start: "top 85%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      // Staggered card entrance driven by ScrollTrigger
      gsap.from(".pillar-card", {
        scrollTrigger: {
          trigger: ".pillars-grid",
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.12,
      });

      // Subtle background drift as the section scrolls through view
      gsap.to(".pillars-orb", {
        scrollTrigger: {
          trigger: root.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
        yPercent: -30,
        ease: "none",
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="mechanics"
      ref={root}
      className="relative mx-auto max-w-7xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="pillars-orb pointer-events-none absolute right-0 top-20 -z-0 h-80 w-80 rounded-full bg-emerald/10 blur-[100px]" />

      <div className="pillars-head relative mb-14 max-w-2xl">
        <span className="eyebrow">
          <Target className="h-3.5 w-3.5" /> The Signature Method
        </span>
        <h2 className="display-lg mt-4 font-display font-bold text-ink">
          Strategy over{" "}
          <span className="text-gradient-emerald">memorisation.</span>
        </h2>
        <p className="mt-4 text-ink/60">
          Sir Haisam's framework breaks the exam into solvable mechanics — so
          students stop guessing and start scoring with intent.
        </p>
      </div>

      <div className="pillars-grid relative grid grid-cols-1 gap-5 sm:grid-cols-2">
        {PILLARS.map((p) => (
          <PillarCard key={p.no} pillar={p} />
        ))}
      </div>
    </section>
  );
}
