import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Instagram,
  Youtube,
  Facebook,
  Mail,
  Phone,
  ArrowUp,
  MessageCircle,
} from "lucide-react";
import { SITE, NAV_LINKS } from "../lib/site.js";

const SOCIALS = [
  { icon: Youtube, label: "YouTube", href: SITE.socials.youtube },
  { icon: Instagram, label: "Instagram", href: SITE.socials.instagram },
  { icon: Facebook, label: "Facebook", href: SITE.socials.facebook },
];

function SocialButton({ icon: Icon, label, href }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.94 }}
      transition={{ type: "spring", stiffness: 400, damping: 18 }}
      className="group relative grid h-12 w-12 place-items-center overflow-hidden rounded-xl bg-white/5 ring-1 ring-white/10"
    >
      <span className="absolute inset-0 translate-y-full bg-gradient-to-tr from-emerald-deep to-emerald-mint transition-transform duration-300 ease-out group-hover:translate-y-0" />
      <Icon className="relative z-10 h-5 w-5 text-emerald-mint transition-colors duration-300 group-hover:text-white" />
    </motion.a>
  );
}

export default function Footer() {
  const scrollTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative mt-24 overflow-hidden bg-[#06140F] text-white">
      {/* glow accents */}
      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-emerald/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-emerald-deep/30 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8">
        {/* Top CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-start justify-between gap-6 border-b border-white/10 pb-12 md:flex-row md:items-center"
        >
          <div>
            <h2 className="display-lg max-w-xl font-display font-bold">
              Ready to master{" "}
              <span className="text-gradient-emerald">Pakistan Studies?</span>
            </h2>
            <p className="mt-3 max-w-md text-sm text-white/60">
              Join Sir Haisam Javed's Cambridge O Level & IGCSE program and turn
              the marking criteria into your advantage.
            </p>
          </div>
          <a
            href={SITE.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-mint to-emerald px-7 py-4 text-sm font-bold text-[#06140F] transition-shadow hover:shadow-glow"
          >
            <MessageCircle className="h-5 w-5" />
            Message on WhatsApp
          </a>
        </motion.div>

        {/* Columns */}
        <div className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-white">
                <img
                  src={SITE.logo}
                  alt="Logo"
                  className="h-9 w-9 object-contain"
                />
              </span>
              <div className="leading-tight">
                <p className="font-bold">{SITE.name}</p>
                <p className="text-xs uppercase tracking-[0.25em] text-emerald-mint/70">
                  Pakistan Studies
                </p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-white/55">
              Specialist coaching for Cambridge O Level History (2059/01),
              Geography (2059/02) and IGCSE 0448.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-mint">
              Explore
            </h4>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="group inline-flex items-center text-sm text-white/65 transition-colors hover:text-white"
                  >
                    <span className="mr-0 h-px w-0 bg-emerald-mint transition-all duration-300 group-hover:mr-2 group-hover:w-4" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-mint">
              Contact
            </h4>
            <ul className="mt-5 space-y-4 text-sm text-white/65">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="group flex items-center gap-3 transition-colors hover:text-white"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/5 ring-1 ring-white/10 group-hover:ring-emerald/40">
                    <Mail className="h-4 w-4 text-emerald-mint" />
                  </span>
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={SITE.whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 transition-colors hover:text-white"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/5 ring-1 ring-white/10 group-hover:ring-emerald/40">
                    <Phone className="h-4 w-4 text-emerald-mint" />
                  </span>
                  {SITE.whatsapp}
                </a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-mint">
              Follow
            </h4>
            <div className="mt-5 flex gap-3">
              {SOCIALS.map((s) => (
                <SocialButton key={s.label} {...s} />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/45">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <button
            onClick={scrollTop}
            className="group flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-white/70 transition-colors hover:border-emerald/50 hover:text-white"
          >
            Back to top
            <motion.span
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowUp className="h-4 w-4 text-emerald-mint" />
            </motion.span>
          </button>
        </div>
      </div>
    </footer>
  );
}
