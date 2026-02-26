import { Mail, MapPin, Phone, Instagram, Facebook, Send } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  function getCurrentYearInSaoPaulo() {
    return Number(
      new Intl.DateTimeFormat("pt-BR", {
        timeZone: "America/Sao_Paulo",
        year: "numeric",
      }).format(new Date())
    );
  }

  return (
    <footer id="contato" className="bg-bellacor-blue text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img 
                src="images/bella-cor-logo.png"
                alt="Bellacor Logo" 
                // className="h-10 w-auto brightness-0 invert"
                className="h-12 w-auto transition-transform group-hover:scale-105"
              />
            </div>
            <p className="text-slate-300 mb-8 leading-relaxed">
              Transformando ambientes com cores e qualidade desde 2024. 
              Sua melhor escolha em tintas prediais.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-bellacor-orange transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-bellacor-orange transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Links Úteis</h4>
            <ul className="space-y-4 text-slate-300">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/produtos" className="hover:text-white transition-colors">Produtos</Link></li>
              <li><Link to="/fispq" className="hover:text-white transition-colors">FISPQ</Link></li>
              <li><Link to="/boletim-tecnico" className="hover:text-white transition-colors">Boletim Técnico</Link></li>
              {/* <li><a href="#contato" className="hover:text-white transition-colors">Onde Comprar</a></li> */}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-300">
                <MapPin className="text-bellacor-orange shrink-0" size={20} />
                <span>Encontre uma loja</span>
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <Phone className="text-bellacor-orange shrink-0" size={20} />
                <span>(11) 2596-6684</span>
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <Mail className="text-bellacor-orange shrink-0" size={20} />
                <span>vendas@bellacortintas.com.br</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-slate-300 mb-4 text-sm">Assine para receber ofertas e novidades.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Seu e-mail" 
                className="w-full bg-white/10 border border-white/20 rounded-full py-3 px-6 text-white placeholder:text-slate-400 focus:outline-none focus:border-bellacor-orange transition-all"
              />
              <button className="absolute right-2 top-1.5 w-10 h-10 bg-bellacor-orange rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-sm">
          <p>© { getCurrentYearInSaoPaulo() } Bellacor Tintas | Todos os direitos reservados</p>
          <p className="flex items-center gap-1">
            Feito por 
            <a 
              href="https://www.kjrdesenvolvimento.com.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-bellacor-orange font-bold hover:text-bellacor-yellow transition-all duration-300 relative group"
            >
              KJR Desenvolvimentos
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-bellacor-yellow transition-all duration-300 group-hover:w-full" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
