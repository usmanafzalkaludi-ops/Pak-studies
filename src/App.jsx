import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Placeholder from "./pages/Placeholder.jsx";

// Scroll to top on every route change so future pages start clean.
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" in document ? "instant" : "auto" });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/resources"
            element={
              <Placeholder
                title="Resources"
                subtitle="Notes, past-paper packs and the marking vault are being assembled."
              />
            }
          />
          <Route
            path="/about"
            element={
              <Placeholder
                title="About"
                subtitle="The full story of Sir Haisam Javed's teaching philosophy is on the way."
              />
            }
          />
          <Route
            path="/services"
            element={
              <Placeholder
                title="Services"
                subtitle="Coaching packages, crash courses and workshop tiers are coming soon."
              />
            }
          />
          <Route
            path="*"
            element={
              <Placeholder
                title="Not Found"
                subtitle="This page hasn't been built yet. Head back to the home page."
              />
            }
          />
        </Route>
      </Routes>
    </>
  );
}
