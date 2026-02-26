import { motion, AnimatePresence } from "motion/react";
import { Info, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { products, Product } from "../data/products";
import ProductModal from "./ProductModal";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

function ProductCard({ product, onClick }: any) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (product.variants.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % product.variants.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [product.variants.length]);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      whileHover={{ y: -15 }}
      className="bg-white rounded-[40px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
        <AnimatePresence mode="wait">
          <motion.img 
            key={product.variants[currentImageIndex].image}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            src={product.variants[currentImageIndex].image} 
            alt={product.name} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>
        <div className="absolute top-6 left-6">
          <span className="px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-bellacor-blue text-[10px] font-black uppercase tracking-[0.2em] shadow-lg">
            {product.category}
          </span>
        </div>
        <div className="absolute inset-0 bg-bellacor-blue/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px]">
          <motion.div 
            initial={{ scale: 0.5, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            className="bg-white p-5 rounded-full text-bellacor-blue shadow-2xl"
          >
            <Info size={32} />
          </motion.div>
        </div>
        
        {/* Carousel Indicators */}
        {product.variants.length > 1 && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5">
            {product.variants.map((_, idx) => (
              <div 
                key={idx} 
                className={`h-1 rounded-full transition-all duration-500 ${
                  currentImageIndex === idx ? "w-6 bg-white" : "w-1.5 bg-white/40"
                }`}
              />
            ))}
          </div>
        )}
      </div>
      
      <div className="p-10 flex flex-col flex-grow">
        <h3 className="text-2xl font-display font-bold text-bellacor-blue mb-4 group-hover:text-bellacor-orange transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-slate-500 text-sm mb-8 line-clamp-2 leading-relaxed font-medium">
          {product.description}
        </p>
        
        <div className="mt-auto pt-8 flex items-center justify-between border-t border-slate-50">
          <div className="flex gap-2">
            {product.variants.slice(0, 2).map(v => (
              <span key={v.size} className="px-3 py-1.5 rounded-xl bg-slate-50 text-slate-400 text-[10px] font-black tracking-wider border border-slate-100">
                {v.size}
              </span>
            ))}
          </div>
          <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-bellacor-blue group-hover:bg-bellacor-orange group-hover:text-white transition-all duration-500 shadow-inner">
            <ArrowRight size={24} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

interface ProductsProps {
  limit?: number;
  showAllButton?: boolean;
  searchQuery?: string;
  hideTitle?: boolean;
  category?: string;
}

export default function Products({ 
  limit, 
  showAllButton = false, 
  searchQuery = "", 
  hideTitle = false,
  category = "Todos"
}: ProductsProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [filter, setFilter] = useState(category);

  useEffect(() => {
    setFilter(category);
  }, [category]);

  const filteredProducts = products.filter(p => {
    const matchesCategory = filter === "Todos" || p.category.includes(filter);
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const displayProducts = limit ? filteredProducts.slice(0, limit) : filteredProducts;

  return (
    <section id="produtos" className={`py-24 bg-slate-50 overflow-hidden ${hideTitle ? 'pt-0' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!hideTitle && (
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title mb-4">Nosso <span className="text-bellacor-orange">Catálogo</span></h2>
              <p className="text-slate-500 text-xl max-w-xl">Conheça nossa linha completa de produtos de alta performance para transformar seus espaços.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-3 overflow-x-auto pb-4 md:pb-0 scrollbar-hide"
            >
              {["Todos", "Standard", "Premium", "Econômica", "Complementos"].map((f) => (
                <button 
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-8 py-3 rounded-full border-2 transition-all whitespace-nowrap font-bold text-sm tracking-wide ${
                    filter === f 
                      ? "bg-bellacor-blue border-bellacor-blue text-white shadow-xl shadow-blue-900/20" 
                      : "bg-white border-slate-200 text-slate-600 hover:border-bellacor-orange hover:text-bellacor-orange"
                  }`}
                >
                  {f}
                </button>
              ))}
            </motion.div>
          </div>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          <AnimatePresence mode="popLayout">
            {displayProducts.map((product, index) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onClick={() => setSelectedProduct(product)} 
              />
            ))}
          </AnimatePresence>
        </div>

        {showAllButton && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <Link 
              to="/produtos"
              className="inline-flex items-center gap-4 px-12 py-5 rounded-full bg-white border-2 border-bellacor-blue text-bellacor-blue font-black uppercase tracking-widest text-sm hover:bg-bellacor-blue hover:text-white transition-all transform hover:scale-105 shadow-xl hover:shadow-blue-900/20"
            >
              Ver Catálogo Completo <ArrowRight size={24} />
            </Link>
          </motion.div>
        )}
      </div>

      <ProductModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </section>
  );
}
