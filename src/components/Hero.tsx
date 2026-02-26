import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Paintbrush, Check } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const heroColors = [
  { name: "Branco", hex: "#f8fafc", label: "Clean" },
  { name: "Azul", hex: "#1e40af", label: "Sereno" },
  { name: "Vermelho", hex: "#b91c1c", label: "Vibrante" },
  { name: "Verde", hex: "#15803d", label: "Natural" },
];

export default function Hero() {
  const [wallColor, setWallColor] = useState(heroColors[0]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Background Image with Opacity */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1525909002-1b05e0c869d8?auto=format&fit=crop&q=80&w=1920" 
          alt="Textura de Tinta" 
          className="w-full h-full object-cover opacity-[0.05]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_white_100%)] opacity-60" />
      </div>

      {/* Massive Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] font-black text-slate-50 select-none pointer-events-none z-0 whitespace-nowrap uppercase tracking-tighter">
        Bellacor
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-1 rounded-full bg-bellacor-blue text-white font-bold text-[10px] uppercase tracking-[0.3em] mb-8">
                Estilo & Performance
              </div>
              <h1 className="text-7xl md:text-9xl font-display font-black text-bellacor-blue leading-[0.85] mb-8 tracking-tighter">
                Sua casa, <br />
                <span className="text-bellacor-orange">sua cor.</span>
              </h1>
              <p className="text-xl text-slate-500 max-w-lg mx-auto lg:mx-0 mb-12 leading-relaxed">
                Transforme ambientes com a tecnologia Bellacor. Simule tons reais e sinta a diferença de uma cobertura premium.
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12">
                {heroColors.map((color, i) => (
                  <motion.button
                    key={color.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                    onClick={() => setWallColor(color)}
                    className={`group relative p-1 rounded-2xl transition-all ${
                      wallColor.name === color.name ? "ring-2 ring-bellacor-orange ring-offset-4" : "hover:scale-105"
                    }`}
                  >
                    <div 
                      className="w-16 h-16 rounded-xl shadow-lg flex items-center justify-center"
                      style={{ backgroundColor: color.hex }}
                    >
                      {wallColor.name === color.name && <Check size={24} className={color.name === "Branco" ? "text-slate-400" : "text-white"} />}
                    </div>
                  </motion.button>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6">
                <Link to="/produtos" className="btn-primary px-12 py-5 text-lg shadow-[0_20px_40px_rgba(242,169,0,0.3)]">
                  Explorar Catálogo
                </Link>
                <a href="#contato" className="px-12 py-5 rounded-full border-2 border-slate-200 text-bellacor-blue font-black uppercase tracking-widest text-sm hover:bg-slate-50 transition-all">
                  Onde Comprar
                </a>
              </div>
            </motion.div>
          </div>

          <div className="flex-1 relative">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              {/* Main Image with Mask */}
              <div className="relative z-10 rounded-[60px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] aspect-[4/5]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={wallColor.name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 z-10 mix-blend-multiply pointer-events-none"
                    style={{ backgroundColor: wallColor.hex }}
                  />
                </AnimatePresence>
                <img 
                  src="https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&q=80&w=1000" 
                  alt="Interior Design" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Floating Elements */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 z-20 bg-white p-8 rounded-[40px] shadow-2xl border border-slate-100 hidden xl:block"
              >
                <p className="text-bellacor-blue font-black text-4xl mb-1">30%</p>
                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Mais Rendimento</p>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-10 -left-10 z-20 bg-bellacor-orange p-8 rounded-[40px] shadow-2xl text-bellacor-blue hidden xl:block"
              >
                <p className="font-display font-black text-2xl leading-tight">Qualidade <br /> Premium</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
