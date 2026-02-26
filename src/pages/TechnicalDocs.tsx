import { motion } from "motion/react"
import { FileText, Download, Search } from "lucide-react"
import { useState } from "react"

interface TechnicalDocsProps {
  type: "FISPQ" | "Boletim Técnico"
}

export default function TechnicalDocs({ type }: TechnicalDocsProps) {
  const [search, setSearch] = useState("")

  // pega arquivos automaticamente
  const files =
    type === "FISPQ"
      ? Object.keys(import.meta.glob("/public/fispq/*.pdf"))
      : Object.keys(import.meta.glob("/public/boletim/*.pdf"))

  // transforma caminhos em dados
  const docs = files.map((path, index) => {
    const filename = path.split("/").pop() || ""
    return {
      id: index,
      filename,
      title: filename.replace(".pdf", ""),
      url: path.replace("/public", "")
    }
  })

  const filteredDocs = docs.filter(doc =>
    doc.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-32 pb-20 min-h-screen bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* title */}
        <div className="text-center mb-12">
          <h1 className="section-title">{type}</h1>
          <p className="text-slate-500">
            Acesse os documentos disponíveis.
          </p>
        </div>

        {/* search */}
        <div className="max-w-md mx-auto mb-12 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20}/>
          <input
            value={search}
            onChange={e=>setSearch(e.target.value)}
            placeholder="Pesquisar documento..."
            className="w-full pl-12 pr-6 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-bellacor-orange"
          />
        </div>

        {/* grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredDocs.map(doc => (
            <motion.div
              key={doc.id}
              initial={{ opacity:0,y:20 }}
              whileInView={{ opacity:1,y:0 }}
              viewport={{ once:true }}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition flex flex-col justify-between"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <FileText className="text-red-500" size={32}/>
                </div>

                <h3 className="text-sm font-bold text-bellacor-blue mb-1">
                  {doc.title}
                </h3>

                {/* <p className="text-xs text-slate-400 mb-6">
                  {doc.filename}
                </p> */}
              </div>

              <a
                href={doc.url}
                target="_blank"
                className="w-full flex items-center justify-center gap-2 bg-bellacor-orange text-white py-2.5 rounded-xl font-bold hover:bg-orange-500"
              >
                <Download size={18}/>
                Abrir PDF
              </a>
            </motion.div>
          ))}
        </div>

        {filteredDocs.length === 0 && (
          <p className="text-center text-slate-400 mt-20">
            Nenhum documento encontrado
          </p>
        )}
      </div>
    </motion.div>
  )
}