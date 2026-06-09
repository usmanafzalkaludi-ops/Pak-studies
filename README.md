# Pakistan Studies with Sir Haisam Javed

A premium, animated multi-page website for **Sir Haisam Javed** — a specialist
educator for Cambridge **O Level & IGCSE Pakistan Studies** (History `2059/01`,
Geography `2059/02`, IGCSE `0448`).

## Tech stack

- **React 18** + **Vite**
- **React Router** — multi-page architecture (Home built; Resources / About /
  Services scaffolded)
- **Tailwind CSS** — emerald / white design system
- **Framer Motion** — staggered entries, scroll reveals, magnetic nav, count-ups
- **GSAP + ScrollTrigger** — scroll-driven reveals & parallax in the method grid
- **Lucide React** — icons

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # production build -> dist/
npm run preview  # preview the production build
```

## Project structure

```
index.html                 # Vite entry (Google fonts + meta)
src/
  main.jsx                 # App bootstrap + BrowserRouter
  App.jsx                  # Routes + shared Layout
  index.css                # Tailwind layers + custom utilities
  lib/site.js              # Centralised links / contact config
  components/
    Layout.jsx             # Shared wrapper (ambient background)
    Navbar.jsx             # Shared glass nav w/ magnetic links
    Footer.jsx             # Shared dark footer w/ socials + back-to-top
    home/
      Hero.jsx             # Mouse-reactive asymmetric hero
      Stats.jsx            # Animated count-up trust metrics
      CountUp.jsx          # Reusable viewport count-up
      Pillars.jsx          # GSAP scroll + 3D tilt method grid
      AIGrader.jsx         # 14-mark AI grader dashboard teaser
  pages/
    Home.jsx               # Current task — assembled home page
    Placeholder.jsx        # Shell for future routes
```

## Home page sections

1. Global glassmorphic navigation bar (shared)
2. Immersive mouse-reactive hero with organic-masked portrait
3. Animated trust-metric counters in asymmetric blocks
4. GSAP-driven "Signature Method" pillar grid with 3D tilt
5. The 14-Mark AI Grader interactive dashboard teaser
6. Global dark footer with social links + back-to-top (shared)

## Notes

- `public/assets/` holds the logo and Sir Haisam's portrait.
- Contact links (WhatsApp, email, Instagram, YouTube) live in `src/lib/site.js`.
  The **Facebook** link is a live-ready placeholder pending the final URL.
- `legacy-static-site.html` is the previous static HTML, kept for reference.
