import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "true");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-8 left-8 right-8 md:left-auto md:right-8 md:max-w-md z-[100]"
        >
          <div className="bg-white rounded-[32px] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-100">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-display font-black text-bellacor-blue uppercase tracking-tighter">Cookies & Privacidade</h3>
              <button onClick={() => setIsVisible(false)} className="text-slate-400 hover:text-bellacor-blue">
                <X size={20} />
              </button>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Utilizamos cookies para melhorar sua experiência em nosso site. Ao continuar navegando, você concorda com nossa política de privacidade.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={acceptCookies}
                className="flex-1 bg-bellacor-blue text-white py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-800 transition-all"
              >
                Aceitar
              </button>
              <button 
                onClick={() => setIsVisible(false)}
                className="flex-1 border border-slate-200 text-slate-500 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-50 transition-all"
              >
                Recusar
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
