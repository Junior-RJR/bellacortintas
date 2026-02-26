import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Products from "../components/Products";
import ColorPicker from "../components/ColorPicker";
import Banner from "../components/Banner";
import PromoBanner from "../components/PromoBanner";
import { motion } from "motion/react";
import { MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      
      <Categories />

      <PromoBanner />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <Banner 
          title="Renove sua fachada com proteção total"
          subtitle="Nossa linha exterior resiste ao sol e chuva por muito mais tempo, mantendo as cores vibrantes."
          buttonText="Ver Linha Exterior"
          buttonLink="/produtos"
          variant="blue"
        />
      </motion.div>

      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-bellacor-orange font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Destaques</span>
              <h2 className="text-5xl md:text-7xl font-display font-black text-bellacor-blue tracking-tighter leading-none">
                Produtos <br />
                <span className="text-slate-200">Essenciais.</span>
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Link to="/produtos" className="inline-flex items-center gap-4 text-bellacor-blue font-black uppercase tracking-widest text-xs group">
                Ver Catálogo Completo <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </div>
          {/* Show only 4 products on home */}
          <Products limit={4} showAllButton={true} />
        </div>
      </section>
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <Banner 
          title="Cores que inspiram seu dia a dia"
          subtitle="Explore nossa paleta de cores e encontre a combinação perfeita para cada cômodo da sua casa."
          buttonText="Simular Cores"
          buttonLink="/#cores"
          variant="yellow"
        />
      </motion.div>

      <ColorPicker />

      {/* CTA Section */}
      <section className="py-32 bg-bellacor-blue relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0]
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute -top-20 -left-20 w-96 h-96 bg-white rounded-full blur-[120px]" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              x: [0, 50, 0]
            }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-bellacor-orange rounded-full blur-[150px]" 
          />
        </div>
        
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-display font-bold text-white mb-10 leading-tight"
          >
            Pronto para transformar <br /> seu <span className="text-bellacor-orange">ambiente?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl text-slate-300 mb-16 max-w-2xl mx-auto"
          >
            Nossa equipe de especialistas está pronta para te ajudar a escolher a melhor solução para sua pintura.
          </motion.p>
          <motion.a 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/551125966684" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 bg-bellacor-green hover:bg-green-600 text-white text-2xl font-black py-6 px-12 rounded-full transition-all shadow-[0_20px_50px_rgba(34,197,94,0.3)] uppercase tracking-widest"
          >
            <MessageCircle size={32} />
            Falar no WhatsApp
          </motion.a>
        </div>
      </section>
    </motion.div>
  );
}
