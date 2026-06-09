import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_LINKS, SITE } from "../lib/site.js";

/* A single nav link with a magnetic pull + animated active/hover underline. */
function MagneticNavLink({ link, onClick }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 250, damping: 18, mass: 0.4 });

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * 0.35);
    y.set(relY * 0.35);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <NavLink to={link.to} end={link.to === "/"} onClick={onClick}>
      {({ isActive }) => (
        <motion.span
          ref={ref}
          onMouseMove={handleMove}
          onMouseLeave={reset}
          style={{ x: sx, y: sy }}
          className="relative inline-flex cursor-pointer flex-col items-center px-1 py-1 text-sm font-semibold tracking-tight"
        >
          <span
            className={
              isActive
                ? "text-emerald-deep"
                : "text-ink/70 transition-colors duration-300 hover:text-ink"
            }
          >
            {link.label}
          </span>
          {/* active underline (layout-animated between links) */}
          {isActive && (
            <motion.span
              layoutId="nav-underline"
              className="absolute -bottom-1 h-[3px] w-6 rounded-full bg-gradient-to-r from-emerald-deep to-emerald-mint"
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
          )}
          {/* hover micro-line for inactive items */}
          {!isActive && (
            <span className="absolute -bottom-1 h-[3px] w-0 rounded-full bg-emerald/60 transition-all duration-300 group-hover:w-4" />
          )}
        </motion.span>
      )}
    </NavLink>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile sheet whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

  return (
    <motion.header
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-6 sm:pt-5"
    >
      <nav
        className={`flex w-full max-w-6xl items-center justify-between gap-4 rounded-2xl px-4 py-3 transition-all duration-500 sm:px-6 ${
          scrolled
            ? "glass shadow-soft"
            : "border border-transparent bg-white/30 backdrop-blur-sm"
        }`}
      >
        {/* Brand */}
        <Link to="/" className="group flex items-center gap-3">
          <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-xl bg-white ring-1 ring-emerald/20">
            <img
              src={SITE.logo}
              alt="Pakistan Studies with Haisam Javed logo"
              className="h-9 w-9 object-contain"
            />
          </span>
          <span className="flex flex-col leading-none">
            <span className="flex items-center gap-1.5 text-[15px] font-bold tracking-tight text-ink">
              {SITE.name}
              <motion.span
                className="h-1.5 w-1.5 rounded-full bg-emerald"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-emerald-deep/80">
              Pakistan Studies
            </span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <div key={link.to} className="group">
              <MagneticNavLink link={link} />
            </div>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href={SITE.whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="group relative hidden items-center gap-2 overflow-hidden rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white md:inline-flex"
        >
          <span className="absolute inset-0 -z-0 translate-y-full bg-gradient-to-r from-emerald-deep to-emerald transition-transform duration-300 ease-out group-hover:translate-y-0" />
          <span className="relative z-10">Enroll Now</span>
          <ArrowUpRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-xl text-ink ring-1 ring-ink/10 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile sheet */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="glass absolute left-3 right-3 top-[88px] rounded-2xl p-4 shadow-soft md:hidden"
          >
            <div className="flex flex-col divide-y divide-ink/5">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    className={({ isActive }) =>
                      `flex items-center justify-between py-3 text-base font-semibold ${
                        isActive ? "text-emerald-deep" : "text-ink/80"
                      }`
                    }
                  >
                    {link.label}
                    <ArrowUpRight className="h-4 w-4 opacity-50" />
                  </NavLink>
                </motion.div>
              ))}
            </div>
            <a
              href={SITE.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="mt-4 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-deep to-emerald px-5 py-3 text-sm font-semibold text-white"
            >
              Enroll Now <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
