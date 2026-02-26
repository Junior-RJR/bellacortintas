import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import TechnicalDocs from "./pages/TechnicalDocs";
import { motion, useScroll, useSpring, AnimatePresence } from "motion/react";
import CookieConsent from "./components/CookieConsent";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen selection:bg-bellacor-orange selection:text-white flex flex-col">
        {/* Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-bellacor-orange z-[60] origin-left"
          style={{ scaleX }}
        />

        <Header />
        
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/produtos" element={<Catalog />} />
              <Route path="/fispq" element={<TechnicalDocs type="FISPQ" />} />
              <Route path="/boletim-tecnico" element={<TechnicalDocs type="Boletim Técnico" />} />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />
        <CookieConsent />
        <FloatingWhatsApp />
      </div>
    </Router>
  );
}
