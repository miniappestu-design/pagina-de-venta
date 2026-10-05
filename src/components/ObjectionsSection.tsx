import React from 'react';
import { HelpCircle } from 'lucide-react';

export const ObjectionsSection: React.FC = () => {
  const objections = [
    {
      question: 'NO SÉ PROGRAMAR.',
      answer: 'No necesitas comenzar siendo programador. La metodología te enseña a utilizar Inteligencia Artificial y herramientas actuales para construir tus MiniApps paso a paso.',
    },
    {
      question: 'NO TENGO UNA IDEA.',
      answer: 'Precisamente por eso tienes herramientas para explorar oportunidades y una Biblioteca de 180 MiniApps como punto de partida.',
    },
    {
      question: 'NO TENGO MUCHO TIEMPO.',
      answer: 'Puedes avanzar paso a paso y utilizar Inteligencia Artificial para acelerar diferentes partes del proceso.',
    },
    {
      question: 'NUNCA HE CREADO UNA MINIAPP.',
      answer: 'La metodología parte desde la idea y te guía progresivamente.',
    },
  ];

  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-16 sm:py-20 border-t border-purple-900/30">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs uppercase font-bold text-cyan-400 tracking-wider block mb-2">
          CLARIDAD Y RESPUESTAS
        </span>

        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
          ¿Y SI ESTÁS PENSANDO...?
        </h2>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          Es completamente normal hacerse estas preguntas antes de dar el primer paso:
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {objections.map((obj, idx) => (
          <div
            key={idx}
            className="bg-[#120d2a]/90 border border-purple-800/40 rounded-2xl p-5 hover:border-purple-600/50 transition-all text-left"
          >
            <div className="flex items-center gap-2 text-rose-300 text-xs font-bold uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-rose-500" />
              <span>Duda #{idx + 1}</span>
            </div>

            <h3 className="font-heading text-base font-bold text-white mb-2 leading-snug">
              "{obj.question}"
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {obj.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
