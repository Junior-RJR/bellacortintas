import { motion } from "motion/react";
import { FileText, Download, Search } from "lucide-react";
import { useState } from "react";

interface Doc {
  id: number;
  title: string;
  filename: string;
  type: "FISPQ" | "Boletim Técnico";
}

const mockDocs: Doc[] = [
  { id: 1, title: "Fispq - Economico Azul Sereno", filename: "Fispq - Economico Azul Sereno.pdf", type: "FISPQ" },
  { id: 2, title: "Fispq - Cobrebem Branco", filename: "Fispq - Cobrebem Branco.pdf", type: "FISPQ" },
  { id: 3, title: "Fispq - Cobrebem", filename: "Fispq - Cobrebem.pdf", type: "FISPQ" },
  { id: 4, title: "Fispq - Economico Areia", filename: "Fispq - Economico Areia.pdf", type: "FISPQ" },
  { id: 5, title: "Fispq - Economico Marfim", filename: "Fispq - Economico Marfim.pdf", type: "FISPQ" },
  { id: 6, title: "Fispq - Economico Algodao Egipcio", filename: "Fispq - Economico Algodao Egipcio.pdf", type: "FISPQ" },
  { id: 7, title: "Fispq - Economico Verde Limao", filename: "Fispq - Economico Verde Limao.pdf", type: "FISPQ" },
  { id: 8, title: "Fispq - Economico Branco", filename: "Fispq - Economico Branco.pdf", type: "FISPQ" },
  { id: 9, title: "BT - Acrílico Premium", filename: "BT - Acrilico Premium.pdf", type: "Boletim Técnico" },
  { id: 10, title: "BT - Massa Corrida", filename: "BT - Massa Corrida.pdf", type: "Boletim Técnico" },
];

interface TechnicalDocsProps {
  type: "FISPQ" | "Boletim Técnico";
}

export default function TechnicalDocs({ type }: TechnicalDocsProps) {
  const [search, setSearch] = useState("");

  const filteredDocs = mockDocs.filter(doc => 
    doc.type === type && 
    doc.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 min-h-screen bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="section-title">{type}</h1>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Acesse as fichas de segurança e boletins técnicos de todos os nossos produtos.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-12 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <input 
            type="text" 
            placeholder="Digite sua pesquisa..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-6 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-bellacor-orange transition-all shadow-sm"
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDocs.map((doc) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-red-50 rounded-xl flex items-center justify-center mb-4">
                <FileText className="text-red-500" size={32} />
              </div>
              <h3 className="text-sm font-bold text-bellacor-blue mb-2 h-10 line-clamp-2">
                {doc.title}
              </h3>
              <p className="text-xs text-slate-400 mb-6">{doc.filename}</p>
              
              <button className="w-full flex items-center justify-center gap-2 bg-bellacor-orange text-white py-2.5 rounded-xl font-bold hover:bg-orange-500 transition-colors shadow-lg shadow-orange-100">
                <Download size={18} />
                Abrir
              </button>
            </motion.div>
          ))}
        </div>

        {filteredDocs.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-400">Nenhum documento encontrado para sua pesquisa.</p>
          </div>
        )}
      </div>
    </motion.div>
  );
}
