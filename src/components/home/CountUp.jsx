import { useEffect, useRef } from "react";
import { useInView, useMotionValue, animate } from "framer-motion";

// Count-up that re-triggers each time it enters the viewport (once: false).
export default function CountUp({
  to = 100,
  from = 0,
  duration = 2,
  suffix = "",
  prefix = "",
  decimals = 0,
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.6 });
  const value = useMotionValue(from);

  useEffect(() => {
    if (!inView) {
      value.set(from);
      return;
    }
    const controls = animate(value, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        if (ref.current) {
          ref.current.textContent =
            prefix + latest.toFixed(decimals) + suffix;
        }
      },
    });
    return () => controls.stop();
  }, [inView, to, from, duration, suffix, prefix, decimals, value]);

  return <span ref={ref}>{prefix + from.toFixed(decimals) + suffix}</span>;
}
