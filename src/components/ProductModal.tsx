import { motion, AnimatePresence } from "motion/react";
import { X, MessageCircle, FileText, Check, Ruler, Droplets, Wind, ShieldCheck, Clock, Layers, Maximize, Droplet } from "lucide-react";
import { Product } from "../data/products";
import { useState } from "react";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);

  if (!product) return null;

  const currentVariant = product.variants[selectedVariantIndex];

  const specs = [
    { icon: <ShieldCheck size={18} />, label: "Marca", value: product.brand },
    { icon: <Maximize size={18} />, label: "Conteúdo", value: currentVariant.size },
    { icon: <Layers size={18} />, label: "Categoria", value: product.category },
    { icon: <Maximize size={18} />, label: "Superfície", value: product.surface },
    { icon: <Droplets size={18} />, label: "Diluição", value: product.dilution },
    { icon: <Droplet size={18} />, label: "Diluir com", value: product.diluteWith },
    { icon: <Wind size={18} />, label: "Acabamento", value: product.finish },
    { icon: <Ruler size={18} />, label: "Rendimento", value: product.yield },
    { icon: <Clock size={18} />, label: "Secagem", value: product.dryingTime },
    { icon: <Layers size={18} />, label: "Demãos", value: product.coats },
    { icon: <Maximize size={18} />, label: "Área", value: product.area },
    { icon: <Wind size={18} />, label: "Odor", value: product.odor },
    { icon: <ShieldCheck size={18} />, label: "Antimofo", value: product.antiMold },
  ];

  return (
    <AnimatePresence>
      {product && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-bellacor-blue/60 backdrop-blur-xl"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            className="relative w-full max-w-6xl bg-white rounded-[60px] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
          >
            <button 
              onClick={onClose}
              className="absolute top-8 right-8 z-20 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-bellacor-blue transition-all"
            >
              <X size={24} />
            </button>

            {/* Product Image Section */}
            <div className="md:w-1/2 relative bg-slate-100 flex items-center justify-center p-12 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentVariant.image}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  src={currentVariant.image}
                  alt={product.name}
                  className="max-w-full max-h-full object-contain drop-shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>
              
              <div className="absolute bottom-12 left-12 right-12 flex justify-center gap-4">
                {product.variants.map((variant, idx) => (
                  <button
                    key={variant.size}
                    onClick={() => setSelectedVariantIndex(idx)}
                    className={`px-6 py-3 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all ${
                      selectedVariantIndex === idx 
                        ? "bg-bellacor-blue text-white shadow-xl" 
                        : "bg-white text-slate-400 hover:bg-slate-50"
                    }`}
                  >
                    {variant.size}
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info Section */}
            <div className="md:w-1/2 p-12 md:p-20 overflow-y-auto custom-scrollbar">
              <div className="mb-12">
                <span className="inline-block px-4 py-1.5 rounded-full bg-bellacor-orange/10 text-bellacor-orange text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                  {product.category}
                </span>
                <h2 className="text-4xl md:text-5xl font-display font-black text-bellacor-blue leading-tight mb-6 tracking-tighter">
                  {product.name}
                </h2>
                <p className="text-slate-500 text-lg leading-relaxed font-medium">
                  {product.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-x-8 gap-y-6 mb-12">
                {specs.map((spec, i) => (
                  <div key={i} className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-slate-400">
                      <span className="text-bellacor-orange">{spec.icon}</span>
                      <span className="text-[10px] font-black uppercase tracking-widest">{spec.label}</span>
                    </div>
                    <span className="text-bellacor-blue font-bold text-sm">{spec.value}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={`https://wa.me/551125966684?text=Olá, gostaria de saber mais sobre o produto: ${product.name} (${currentVariant.size})`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-3 bg-bellacor-green text-white py-5 rounded-3xl font-black uppercase tracking-widest text-xs hover:bg-green-600 transition-all shadow-xl shadow-green-900/20"
                >
                  <MessageCircle size={20} />
                  Solicitar Orçamento
                </a>
                <div className="flex gap-4">
                  {product.fispqUrl && (
                    <a href={product.fispqUrl} className="w-16 h-16 rounded-3xl border-2 border-slate-100 flex items-center justify-center text-slate-400 hover:border-bellacor-blue hover:text-bellacor-blue transition-all">
                      <FileText size={24} />
                    </a>
                  )}
                  {product.technicalBulletinUrl && (
                    <a href={product.technicalBulletinUrl} className="w-16 h-16 rounded-3xl border-2 border-slate-100 flex items-center justify-center text-slate-400 hover:border-bellacor-blue hover:text-bellacor-blue transition-all">
                      <FileText size={24} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
