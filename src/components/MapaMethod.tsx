import React, { useState } from 'react';
import { 
  Sparkles, 
  Search, 
  Layout, 
  UploadCloud, 
  Megaphone, 
  Check, 
  ChevronRight,
  Compass
} from 'lucide-react';
import { MAPA_STEPS } from '../data/ecosystemData';

interface MapaMethodProps {
  hotmartLink?: string;
  whatsappLink?: string;
}

export const MapaMethod: React.FC<MapaMethodProps> = ({
  hotmartLink = 'https://pay.hotmart.com/T106939828K?checkoutMode=10',
  whatsappLink = 'https://wa.me/56932051719',
}) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const icons = [Search, Layout, UploadCloud, Megaphone];
  const stepColors = [
    { badge: 'text-purple-400 bg-purple-950/60 border-purple-800', border: 'hover:border-purple-500' },
    { badge: 'text-indigo-400 bg-indigo-950/60 border-indigo-800', border: 'hover:border-indigo-500' },
    { badge: 'text-cyan-400 bg-cyan-950/60 border-cyan-800', border: 'hover:border-cyan-500' },
    { badge: 'text-emerald-400 bg-emerald-950/60 border-emerald-800', border: 'hover:border-emerald-500' },
  ];

  return (
    <section id="metodo-mapa" className="w-full max-w-5xl mx-auto px-4 py-16 sm:py-20 border-t border-purple-900/30">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/70 border border-purple-800/40 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3">
          <Compass className="w-3.5 h-3.5 text-cyan-400" />
          <span>EL MARCO METODOLÓGICO</span>
        </div>

        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
          MÉTODO M.A.P.A.
        </h2>

        <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
          Las 4 fases estructuradas para transformar cualquier idea, conocimiento o negocio en una MiniApp interactiva en el mercado:
        </p>
      </div>

      {/* 4 Interactive Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {MAPA_STEPS.map((step, idx) => {
          const Icon = icons[idx];
          const isSelected = activeStepIndex === idx;

          return (
            <button
              key={step.letter + idx}
              onClick={() => setActiveStepIndex(idx)}
              className={`text-left p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-gradient-to-b from-[#1f1447] to-[#140c30] border-cyan-400 shadow-xl shadow-purple-950/60 ring-1 ring-cyan-400/40 scale-[1.02]'
                  : 'bg-[#120d2a]/80 hover:bg-[#1a123b] border-purple-900/50 text-slate-300'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-heading font-black text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-300">
                    {step.letter}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-[#1a123d] border border-purple-800/50 flex items-center justify-center text-slate-300">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <span className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border mb-2 ${stepColors[idx].badge}`}>
                  {step.badge}
                </span>

                <h3 className="font-heading text-lg font-bold text-white mb-1">
                  {step.title}
                </h3>

                <p className="text-xs font-medium text-cyan-300/90 mb-3 leading-snug">
                  {step.subtitle}
                </p>

                <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed line-clamp-3">
                  {step.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-purple-900/40 flex items-center justify-between text-[11px] font-semibold">
                <span className={isSelected ? 'text-cyan-300' : 'text-slate-400'}>
                  {isSelected ? 'Fase Activa' : 'Toca para ver detalle'}
                </span>
                <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'translate-x-1 text-cyan-300' : 'text-slate-500'}`} />
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Step Deep Dive Panel */}
      <div className="bg-[#120d2a] border border-purple-700/40 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-purple-950/40">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-purple-900/40">
          <div className="flex items-center gap-3">
            <span className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600 to-cyan-400 flex items-center justify-center font-heading font-black text-2xl text-white">
              {MAPA_STEPS[activeStepIndex].letter}
            </span>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400">
                FASE {activeStepIndex + 1} EN PROFUNDIDAD
              </span>
              <h4 className="font-heading text-xl sm:text-2xl font-bold text-white">
                {MAPA_STEPS[activeStepIndex].title} — {MAPA_STEPS[activeStepIndex].subtitle}
              </h4>
            </div>
          </div>
        </div>

        <p className="text-sm sm:text-base text-slate-200 mb-6 leading-relaxed">
          {MAPA_STEPS[activeStepIndex].description}
        </p>

        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-purple-300 block mb-3">
            Acciones clave en esta fase:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {MAPA_STEPS[activeStepIndex].actions.map((act, i) => (
              <div key={i} className="bg-[#19113b]/80 border border-purple-800/40 rounded-xl p-3.5 flex items-start gap-2.5">
                <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-200 font-medium leading-relaxed">{act}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-8 pt-6 border-t border-purple-900/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-slate-300 text-center sm:text-left">
            Domina las 4 fases del Método M.A.P.A. dentro de La Fábrica de MiniApps Verse.
          </p>

          <a
            href={hotmartLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-black text-xs sm:text-sm shadow-lg shadow-purple-900/40 transition-all active:scale-95 whitespace-nowrap cursor-pointer"
          >
            <span>QUIERO APRENDER A CREARLAS 🚀</span>
          </a>
        </div>
      </div>
    </section>
  );
};
