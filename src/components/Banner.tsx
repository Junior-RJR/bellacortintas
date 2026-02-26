import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface BannerProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  variant?: "blue" | "yellow";
}

export default function Banner({ title, subtitle, buttonText, buttonLink, variant = "blue" }: BannerProps) {
  const isBlue = variant === "blue";
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-32">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`relative rounded-[80px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] ${
          isBlue ? "bg-bellacor-blue" : "bg-bellacor-orange"
        }`}
      >
        <div className="grid md:grid-cols-2">
          <div className="p-12 md:p-24 flex flex-col justify-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-5xl md:text-7xl font-display font-black mb-8 leading-[0.9] tracking-tighter ${
                isBlue ? "text-white" : "text-bellacor-blue"
              }`}
            >
              {title}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={`text-xl mb-12 leading-relaxed font-medium ${
                isBlue ? "text-slate-300" : "text-bellacor-blue/80"
              }`}
            >
              {subtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link 
                to={buttonLink}
                className={`inline-flex items-center gap-4 px-12 py-5 rounded-full font-black uppercase tracking-widest text-sm transition-all transform hover:scale-105 shadow-2xl ${
                  isBlue ? "bg-bellacor-orange text-bellacor-blue hover:bg-white" : "bg-bellacor-blue text-white hover:bg-white hover:text-bellacor-blue"
                }`}
              >
                {buttonText} <ArrowRight size={24} />
              </Link>
            </motion.div>
          </div>
          <div className="relative h-[400px] md:h-auto overflow-hidden">
             <img 
               src={isBlue 
                 ? "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1000" 
                 : "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1000"
               } 
               alt="Banner" 
               className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
               referrerPolicy="no-referrer"
             />
             <div className={`absolute inset-0 ${isBlue ? "bg-bellacor-blue/20" : "bg-bellacor-orange/20"}`} />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
