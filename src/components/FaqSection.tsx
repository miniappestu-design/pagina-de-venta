import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/ecosystemData';

interface FaqSectionProps {
  whatsappLink?: string;
}

export const FaqSection: React.FC<FaqSectionProps> = ({
  whatsappLink = 'https://wa.me/56932051719',
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="w-full max-w-3xl mx-auto px-4 py-16 sm:py-20 border-t border-purple-900/30">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/70 border border-purple-800/40 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3">
          <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
          <span>RESPUESTAS RÁPIDAS</span>
        </div>

        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3">
          Preguntas Frecuentes
        </h2>

        <p className="text-xs sm:text-sm text-slate-300">
          Todo lo que necesitas saber antes de acceder a La Fábrica de MiniApps Verse:
        </p>
      </div>

      <div className="space-y-3 mb-10">
        {FAQS.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="bg-[#120d2a]/80 border border-purple-800/40 rounded-2xl overflow-hidden transition-colors"
            >
              <button
                onClick={() => toggleIndex(idx)}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/5 transition-colors"
              >
                <span className="font-heading font-semibold text-sm sm:text-base text-white leading-snug">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-cyan-400 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-purple-900/30">
                  <p className="pt-3">{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* WhatsApp query card */}
      <div className="bg-[#0e1c18]/80 border border-emerald-500/40 rounded-2xl p-5 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-left">
          <h4 className="text-sm font-bold text-white mb-0.5">
            ¿Tienes otra duda o quieres consultar sobre tu idea?
          </h4>
          <p className="text-xs text-slate-300">
            Nuestro equipo te ayuda a resolver cualquier pregunta sobre la metodología.
          </p>
        </div>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-slate-950 font-bold text-xs whitespace-nowrap transition-all shadow-md shadow-emerald-900/40 active:scale-95 cursor-pointer shrink-0"
        >
          <span>💬 Hablar por WhatsApp</span>
        </a>
      </div>
    </section>
  );
};
