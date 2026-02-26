import { motion } from "motion/react";
import { Home, ExternalLink, Layers, ArrowRight } from "lucide-react";

const categories = [
  {
    id: "interior",
    title: "Linha Interior",
    description: "Acabamento fosco, acetinado e lavável para ambientes internos.",
    icon: <Home className="text-bellacor-orange" size={32} />,
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
    color: "bg-orange-50"
  },
  {
    id: "exterior",
    title: "Linha Exterior",
    description: "Máxima proteção contra sol e chuva com alta durabilidade.",
    icon: <ExternalLink className="text-bellacor-blue" size={32} />,
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800",
    color: "bg-blue-50"
  },
  {
    id: "complementos",
    title: "Complementos",
    description: "Massa corrida, seladores e fundos para preparação perfeita.",
    icon: <Layers className="text-bellacor-green" size={32} />,
    image: "https://images.unsplash.com/photo-1589939705384-5185138a047a?auto=format&fit=crop&q=80&w=800",
    color: "bg-green-50"
  }
];

export default function Categories() {
  return (
    <section id="categorias" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-end mb-24">
          <div className="flex-1">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl font-display font-black text-bellacor-blue leading-none tracking-tighter"
            >
              Nossas <br />
              <span className="text-bellacor-orange">Linhas.</span>
            </motion.h2>
          </div>
          <div className="flex-1">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-500 max-w-md leading-relaxed"
            >
              Soluções completas para cada etapa da sua pintura, do preparo ao acabamento final com tecnologia de ponta.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          {/* Large Featured Category */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7 group relative rounded-[60px] overflow-hidden bg-orange-50 min-h-[500px] lg:min-h-0"
          >
            <img 
              src={categories[0].image} 
              alt={categories[0].title} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bellacor-blue/80 via-transparent to-transparent" />
            <div className="absolute bottom-12 left-12 right-12 text-white">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 text-bellacor-orange shadow-2xl">
                {categories[0].icon}
              </div>
              <h3 className="text-5xl font-display font-bold mb-4">{categories[0].title}</h3>
              <p className="text-slate-200 text-lg max-w-md mb-8">{categories[0].description}</p>
              <a href="#produtos" className="inline-flex items-center gap-3 text-white font-black uppercase tracking-widest text-sm group/link">
                Explorar Linha <ArrowRight size={20} className="group-hover/link:translate-x-2 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Two Smaller Categories */}
          <div className="md:col-span-5 flex flex-col gap-8">
            {categories.slice(1).map((cat, index) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`flex-1 group relative rounded-[60px] overflow-hidden ${cat.color} p-12 flex flex-col justify-end min-h-[300px]`}
              >
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 text-bellacor-blue shadow-xl group-hover:bg-bellacor-orange group-hover:text-white transition-all">
                    {cat.icon}
                  </div>
                  <h3 className="text-3xl font-display font-bold text-bellacor-blue mb-2">{cat.title}</h3>
                  <p className="text-slate-600 text-sm mb-6 max-w-xs">{cat.description}</p>
                  <a href="#produtos" className="inline-flex items-center gap-2 text-bellacor-blue font-black uppercase tracking-widest text-xs">
                    Ver produtos <ArrowRight size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
