import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Check } from "lucide-react";

const colorGroups = [
  { name: "Vermelhos e Rosas", color: "bg-red-600", hex: "#dc2626" },
  { name: "Roxos e Violetas", color: "bg-purple-500", hex: "#a855f7" },
  { name: "Neutros", color: "bg-stone-500", hex: "#78716c" },
  { name: "Off White", color: "bg-slate-50", hex: "#f8fafc" },
  { name: "Azuis", color: "bg-sky-500", hex: "#0ea5e9" },
  { name: "Laranjas", color: "bg-orange-400", hex: "#fb923c" },
  { name: "Amarelos", color: "bg-yellow-400", hex: "#facc15" },
  { name: "Verdes", color: "bg-emerald-500", hex: "#10b981" },
];

export default function ColorPicker() {
  const [activeColor, setActiveColor] = useState(colorGroups[0]);

  return (
    <section id="cores" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title mb-8">Encontre sua <span className="text-bellacor-orange">Cor</span></h2>
            <p className="text-slate-600 text-xl mb-12 leading-relaxed font-medium">
              A cor certa transforma o ambiente e influencia o seu humor. 
              Explore nossa paleta digital e veja como as cores Bellacor podem mudar seu espaço.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {colorGroups.map((group, index) => (
                <motion.button
                  key={group.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setActiveColor(group)}
                  whileHover={{ scale: 1.02, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center gap-4 p-6 rounded-[32px] border-2 transition-all text-left ${
                    activeColor.name === group.name 
                      ? "border-bellacor-orange bg-orange-50/50 shadow-xl shadow-orange-900/5" 
                      : "border-slate-100 hover:border-slate-200"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full ${group.color} shadow-inner flex items-center justify-center transition-transform duration-500 ${activeColor.name === group.name ? "rotate-12 scale-110" : ""}`}>
                    {activeColor.name === group.name && (
                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                        <Check size={20} className={group.name === "Off White" ? "text-slate-400" : "text-white"} />
                      </motion.div>
                    )}
                  </div>
                  <span className={`font-black text-sm uppercase tracking-widest ${activeColor.name === group.name ? "text-bellacor-blue" : "text-slate-600"}`}>
                    {group.name}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeColor.name}
                initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                animate={{ opacity: 1, scale: 1, rotate: 2 }}
                exit={{ opacity: 0, scale: 1.1, rotate: 0 }}
                transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                className="aspect-square rounded-[60px] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)] relative"
              >
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.45 }}
                  className="absolute inset-0 z-10 mix-blend-multiply transition-colors duration-1000" 
                  style={{ backgroundColor: activeColor.hex }}
                />
                <img 
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1000" 
                  alt="Ambiente colorido" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-20" />
                <div className="absolute bottom-12 left-12 z-30">
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs font-black uppercase tracking-[0.3em] text-white/60 mb-3"
                  >
                    Sugestão de Ambiente
                  </motion.p>
                  <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl font-display font-bold text-white"
                  >
                    {activeColor.name}
                  </motion.h3>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Decorative elements */}
            <motion.div 
              animate={{ 
                scale: [1, 1.15, 1],
                rotate: [0, 45, 0],
                x: [0, 20, 0]
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-16 -right-16 w-64 h-64 bg-bellacor-orange rounded-full -z-10 blur-[100px] opacity-20" 
            />
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                y: [0, 30, 0]
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-20 -left-20 w-80 h-80 bg-bellacor-blue rounded-full -z-10 blur-[120px] opacity-15" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
