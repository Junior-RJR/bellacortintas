import { motion } from "motion/react";
import { Menu, X, Phone } from "lucide-react";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Produtos", href: "/produtos" },
    { name: "Cores", href: "/#cores" },
    { name: "Contato", href: "/#contato" },
  ];

  const isHome = location.pathname === "/";

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#") && isHome) {
      e.preventDefault();
      const id = href.replace("/#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center group">
            <img 
              src="file:///C:/Users/Junior/Documents/Desenvolvimento/bellacor/www/public/images/bela-tintas-loja.jpg" 
              alt="Bellacor Logo" 
              className="h-12 w-auto transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className={`text-[10px] uppercase tracking-[0.3em] font-black transition-all ${
                  location.pathname === link.href 
                    ? "text-bellacor-orange" 
                    : "text-slate-400 hover:text-bellacor-blue"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://wa.me/551125966684"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-bellacor-green text-white px-8 py-3 rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-green-600 transition-all shadow-xl hover:shadow-green-900/20"
            >
              <Phone size={14} />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-bellacor-blue p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-1 overflow-hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={(e) => {
                handleScroll(e, link.href);
                if (!link.href.startsWith("/#")) setIsOpen(false);
              }}
              className="block px-3 py-4 text-base font-bold text-slate-600 hover:text-bellacor-blue hover:bg-slate-50 rounded-xl"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4">
            <a
              href="https://wa.me/551125966684"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-bellacor-green text-white px-4 py-4 rounded-2xl font-bold shadow-lg"
            >
              <Phone size={18} />
              <span>WhatsApp</span>
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
