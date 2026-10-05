import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  Flame, 
  Lock, 
  CreditCard, 
  Settings2,
  MessageCircle
} from 'lucide-react';

interface OfferSectionProps {
  hotmartLink: string;
  whatsappLink: string;
  onUpdateLinks?: (newHotmart: string, newWhatsapp: string) => void;
}

export const OfferSection: React.FC<OfferSectionProps> = ({ 
  hotmartLink,
  whatsappLink,
  onUpdateLinks 
}) => {
  const [isConfigOpen, setIsConfigOpen] = useState<boolean>(false);
  const [tempHotmart, setTempHotmart] = useState<string>(hotmartLink);
  const [tempWhatsapp, setTempWhatsapp] = useState<string>(whatsappLink);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (onUpdateLinks) {
      onUpdateLinks(tempHotmart, tempWhatsapp);
    }
    setIsConfigOpen(false);
  };

  const checklistItems = [
    'Curso completo La Fábrica de MiniApps Verse',
    'Método M.A.P.A. paso a paso',
    'Ecosistema Verse',
    'Fábrica de MiniApps Verse',
    'Agente Verse',
    'Fábrica de Prompts Verse',
    '4 bonos especiales',
    'Biblioteca de 180 MiniApps Verse',
  ];

  return (
    <section id="oferta" className="w-full max-w-4xl mx-auto px-4 py-16 sm:py-24 border-t border-purple-900/30">
      {/* Box de Oferta */}
      <div className="bg-gradient-to-b from-[#1c103f] via-[#130b2c] to-[#0a0718] border-2 border-cyan-400 rounded-3xl p-6 sm:p-12 shadow-2xl shadow-cyan-950/40 relative overflow-hidden ring-1 ring-purple-500/40 mb-14">
        {/* Glow */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 text-center">
          {/* Header */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-400 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Flame className="w-4 h-4 text-cyan-300" />
            <span>PRECIO ESPECIAL ACTUAL</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-3">
            AHORA PUEDES ENTRAR A LA FÁBRICA
          </h2>

          <p className="text-base sm:text-lg text-purple-200/90 max-w-xl mx-auto mb-8 font-medium">
            LA FÁBRICA DE MINIAPPS VERSE
          </p>

          {/* Pricing Highlight (NO FAKE TIMER - CLEAN PRICE BADGE) */}
          <div className="bg-[#120a28]/95 border border-purple-700/60 rounded-3xl p-6 sm:p-8 mb-8 max-w-md mx-auto shadow-inner">
            <span className="text-xs uppercase font-bold text-slate-400 tracking-wider block mb-1">
              ACCESO POR:
            </span>

            <div className="flex items-center justify-center gap-4 my-2">
              <span className="text-slate-500 line-through text-2xl sm:text-3xl font-semibold">
                US$47
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-cyan-400 font-mono tracking-tight">
                  US$27
                </span>
              </div>
            </div>

            <span className="inline-block px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-300 text-xs font-bold uppercase tracking-wider mt-2">
              PAGO ÚNICO · ACCESO COMPLETO
            </span>
          </div>

          {/* Checklist de lo que incluye */}
          <div className="mb-10 max-w-md mx-auto text-left">
            <ul className="space-y-3">
              {checklistItems.map((item, idx) => (
                <li
                  key={idx}
                  className="bg-[#18103a]/70 border border-purple-800/40 rounded-xl p-3 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-200 font-semibold leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Main CTA to Hotmart */}
          <div className="mb-8">
            <a
              href={hotmartLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 sm:px-12 py-5 rounded-2xl bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 hover:from-cyan-300 hover:to-purple-500 text-slate-950 font-black text-lg sm:text-xl shadow-2xl shadow-cyan-500/30 active:scale-[0.98] transition-all cursor-pointer group"
            >
              <span>QUIERO ENTRAR A LA FÁBRICA 🚀</span>
              <ArrowRight className="w-6 h-6 text-slate-950 group-hover:translate-x-1.5 transition-transform" />
            </a>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400 mt-4">
              <span className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-emerald-400" />
                <span>Checkout oficial de Hotmart</span>
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5">
                <CreditCard className="w-3.5 h-3.5 text-cyan-400" />
                <span>Pago cifrado y seguro</span>
              </span>
            </div>
          </div>

          {/* Hotmart 7-Day Guarantee */}
          <div className="bg-[#130a2c] border border-purple-800/50 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left max-w-xl mx-auto">
            <div className="w-14 h-14 rounded-2xl bg-emerald-950/70 border border-emerald-500/50 flex items-center justify-center text-emerald-300 shrink-0 shadow-lg shadow-emerald-950/40">
              <ShieldCheck className="w-8 h-8 text-emerald-400" />
            </div>

            <div>
              <h4 className="font-heading text-base font-bold text-white mb-1">
                🛡️ GARANTÍA DE 7 DÍAS
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Tu compra cuenta con la garantía de 7 días ofrecida a través de Hotmart.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* WHATSAPP SUPPORT SECTION (🟢 WhatsApp = dudas y consultas) */}
      <div className="bg-[#0e1c18]/90 border-2 border-emerald-500/50 rounded-3xl p-6 sm:p-8 mb-14 text-center max-w-xl mx-auto shadow-2xl shadow-emerald-950/40">
        <div className="w-14 h-14 rounded-2xl bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center mx-auto mb-3 text-[#25D366]">
          <MessageCircle className="w-7 h-7" />
        </div>

        <h3 className="font-heading text-lg sm:text-xl font-bold text-white mb-2">
          ¿TIENES DUDAS ANTES DE INGRESAR?
        </h3>

        <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
          Si tienes alguna pregunta, quieres consultar sobre la metodología o hablar con alguien, puedes escribirnos por WhatsApp y nuestro equipo te ayudará.
        </p>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-[#25D366] hover:bg-[#20ba5a] text-slate-950 font-black text-sm sm:text-base transition-all shadow-xl shadow-emerald-900/50 active:scale-95 cursor-pointer ring-1 ring-emerald-300/40"
        >
          <span>💬 HABLAR POR WHATSAPP</span>
        </a>

        <span className="text-[11px] text-emerald-400 block mt-3 font-medium">
          🟢 Chat directo de atención rápida por WhatsApp
        </span>
      </div>

      {/* CTA FINAL SECTION (🚀 Hotmart = compra y acceso al curso) */}
      <div className="text-center max-w-2xl mx-auto py-8">
        <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white mb-3 text-balance">
          TU PRÓXIMA IDEA PODRÍA SER MUCHO MÁS QUE UNA IDEA.
        </h3>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
          Descubre cómo transformar conocimientos, negocios, productos e ideas en experiencias digitales interactivas utilizando Inteligencia Artificial.
        </p>

        <div className="mb-4">
          <span className="text-xs uppercase font-bold text-purple-300 block mb-1">
            LA FÁBRICA DE MINIAPPS VERSE
          </span>
          <span className="font-mono text-3xl sm:text-4xl font-black text-cyan-300">
            US$27
          </span>
        </div>

        <a
          href={hotmartLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 sm:px-10 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-black text-base shadow-xl shadow-purple-900/40 active:scale-95 transition-all cursor-pointer mb-3"
        >
          <span>QUIERO CREAR MI MINIAPP 🚀</span>
          <ArrowRight className="w-5 h-5" />
        </a>

        <div className="text-center pt-2">
          <p className="text-xs text-slate-400 mb-1">¿Tienes una duda antes de comenzar?</p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-emerald-400 hover:text-emerald-300 underline font-semibold cursor-pointer inline-flex items-center gap-1"
          >
            <span>💬 Hablar con alguien por WhatsApp</span>
          </a>
        </div>

        {/* Link configuration panel for the owner */}
        <div className="mt-8 pt-6 border-t border-purple-900/30">
          <button
            onClick={() => setIsConfigOpen(!isConfigOpen)}
            className="inline-flex items-center gap-1.5 text-[11px] text-purple-400 hover:text-cyan-300 transition-colors opacity-70 hover:opacity-100 cursor-pointer"
          >
            <Settings2 className="w-3.5 h-3.5" />
            <span>Configurar Enlaces (Hotmart & WhatsApp)</span>
          </button>

          {isConfigOpen && (
            <form onSubmit={handleSave} className="mt-4 p-4 bg-[#140e32] border border-purple-700/50 rounded-2xl max-w-md mx-auto text-left space-y-3">
              <div>
                <label className="text-[11px] text-slate-300 block mb-1 font-semibold">
                  Link de Hotmart Checkout:
                </label>
                <input
                  type="text"
                  value={tempHotmart}
                  onChange={(e) => setTempHotmart(e.target.value)}
                  placeholder="https://pay.hotmart.com/..."
                  className="w-full px-3 py-2 text-xs bg-[#0b071a] border border-purple-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="text-[11px] text-slate-300 block mb-1 font-semibold">
                  Link de WhatsApp:
                </label>
                <input
                  type="text"
                  value={tempWhatsapp}
                  onChange={(e) => setTempWhatsapp(e.target.value)}
                  placeholder="https://wa.me/..."
                  className="w-full px-3 py-2 text-xs bg-[#0b071a] border border-purple-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div className="flex justify-end gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => setIsConfigOpen(false)}
                  className="px-3 py-1.5 text-xs text-slate-400 hover:text-white"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs rounded-lg cursor-pointer"
                >
                  Guardar enlaces
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
