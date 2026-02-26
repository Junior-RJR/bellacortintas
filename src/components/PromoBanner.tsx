import { motion } from "motion/react";
import { Shield, Zap, Leaf } from "lucide-react";

export default function PromoBanner() {
  const features = [
    { icon: <Shield size={24} />, text: "Proteção UV Extra" },
    { icon: <Zap size={24} />, text: "Secagem em 30min" },
    { icon: <Leaf size={24} />, text: "Baixo VOC / Sem Cheiro" },
  ];

  return (
    <section className="py-32 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-block text-bellacor-orange font-black uppercase tracking-[0.4em] text-xs mb-8"
            >
              Tecnologia de Ponta
            </motion.span>
            <h2 className="text-6xl md:text-8xl font-display font-black text-bellacor-blue leading-[0.9] mb-10 tracking-tighter">
              A ciência <br />por trás <br />
              da <span className="text-bellacor-orange">perfeição.</span>
            </h2>
            <p className="text-xl text-slate-500 mb-12 leading-relaxed font-medium">
              Nossas fórmulas são testadas em laboratório para garantir máxima aderência, cobertura impecável e resistência superior ao desbotamento.
            </p>
            
            <div className="space-y-8">
              {features.map((f, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className="flex items-center gap-6 group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-bellacor-orange shadow-lg group-hover:bg-bellacor-orange group-hover:text-white transition-all duration-300">
                    {f.icon}
                  </div>
                  <div>
                    <span className="text-lg font-black text-bellacor-blue uppercase tracking-widest block">{f.text}</span>
                    <span className="text-slate-400 text-sm">Garantia de performance Bellacor.</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10 rounded-[80px] overflow-hidden shadow-[0_60px_120px_-20px_rgba(0,0,0,0.3)]"
            >
              <img 
                src="https://www.cleanipedia.com/images/00d1hxgfwfa6/2Nf34prb6E4HEpV9WQW7nq/2a9e1a3935ff2ea13e072215a7d39caf/R2V0dHlJbWFnZXMtOTc1OTEyODg2LmpwZw/600w/uma-pessoa-pintando-a-parede-de-branco-com-um-rolo-de-pintura..jpg" 
                alt="Ambiente Bellacor" 
                className="w-full h-full object-cover aspect-[4/5]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bellacor-blue/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-16 left-16 right-16">
                <div className="p-10 bg-white/10 backdrop-blur-2xl rounded-[40px] border border-white/20">
                  <p className="text-white font-black text-5xl mb-2">100%</p>
                  <p className="text-white/80 font-bold uppercase tracking-widest text-xs">Satisfação Garantida</p>
                </div>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0]
              }}
              transition={{ duration: 20, repeat: Infinity }}
              className="absolute -top-20 -right-20 w-80 h-80 bg-bellacor-orange rounded-full blur-[120px] opacity-20 -z-10" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
