import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

// Shared wrapper injected on every route. Navbar + Footer remain identical
// across Home, Resources, About and Services.
export default function Layout() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-canvas">
      {/* Ambient page-wide mesh + faint grid that sits behind all content */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-mesh-emerald" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-grid-faint [background-size:46px_46px] opacity-[0.55]" />

      <Navbar />
      <main className="relative">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
