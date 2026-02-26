import Products from "../components/Products";
import { motion, AnimatePresence } from "motion/react";
import { Search, Filter, X } from "lucide-react";
import { useState } from "react";

export default function Catalog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const categories = ["Todos", "Standard", "Premium", "Econômica", "Complementos"];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-bellacor-blue rounded-[40px] p-8 md:p-16 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-bellacor-orange/20 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-2xl -ml-24 -mb-24" />
          
          <div className="relative z-10 max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              Catálogo <span className="text-bellacor-orange">Completo</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Explore nossa linha completa de tintas e complementos. 
              Encontre o produto ideal para o seu projeto com facilidade.
            </p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mt-8 flex flex-col md:flex-row gap-4">
          <div className="flex-grow relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Buscar produto..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:border-bellacor-orange transition-all shadow-sm"
            />
          </div>
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold transition-all border ${
              showFilters 
                ? "bg-bellacor-blue border-bellacor-blue text-white" 
                : "bg-white border-slate-200 text-slate-600 hover:border-bellacor-blue hover:text-bellacor-blue"
            }`}
          >
            {showFilters ? <X size={20} /> : <Filter size={20} />}
            {showFilters ? "Fechar Filtros" : "Filtros Avançados"}
          </button>
        </div>

        {/* Advanced Filters Panel */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="mt-6 p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
                <h3 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-6">Filtrar por Categoria</h3>
                <div className="flex flex-wrap gap-3">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-6 py-3 rounded-xl font-bold text-sm transition-all ${
                        selectedCategory === cat
                          ? "bg-bellacor-orange text-white shadow-lg shadow-orange-500/20"
                          : "bg-slate-50 text-slate-500 hover:bg-slate-100"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Products component handles the grid and filtering */}
      <Products searchQuery={searchQuery} hideTitle={true} category={selectedCategory} />
    </motion.div>
  );
}
