import React from 'react';
import { Sparkles, HelpCircle, ArrowDown, Cpu, Zap, Layers, Smartphone, Check } from 'lucide-react';
import { QuizAnswers } from '../types';

interface LandingHeroPersonalizedProps {
  answers: QuizAnswers | null;
  onExploreDemo: () => void;
}

export const LandingHeroPersonalized: React.FC<LandingHeroPersonalizedProps> = ({ 
  answers, 
  onExploreDemo 
}) => {
  // Determine dynamic message
  const getDynamicMessage = () => {
    if (!answers) {
      return 'Estás buscando algo propio, pero todavía estás explorando qué camino tomar.';
    }

    const q1 = answers.q1;
    if (q1 === '🤷 Todavía no tengo nada' || answers.q3 === '💡 No sé qué crear') {
      return 'Estás buscando algo propio, pero todavía no tienes claro qué crear.';
    }
    if (q1 === '💼 Tengo un negocio' || q1 === '📦 Tengo un producto digital') {
      return 'Ya tienes un negocio y estás buscando una forma diferente de convertir parte de tu experiencia en una herramienta digital.';
    }
    if (q1 === '📄 Tengo un PDF o eBook') {
      return 'Ya tienes contenido. Ahora puedes descubrir cómo llevarlo a una experiencia mucho más interactiva.';
    }
    if (q1 === '🧠 Tengo conocimientos o una profesión') {
      return 'Ya tienes conocimiento. Ahora puedes descubrir cómo transformarlo en una experiencia digital interactiva.';
    }
    return 'Estás buscando una nueva oportunidad y todavía estás explorando qué podrías crear.';
  };

  return (
    <section className="w-full max-w-4xl mx-auto px-4 pt-10 pb-16">
      {/* POR LO QUE NOS CONTASTE... */}
      <div className="bg-gradient-to-r from-[#1f1447] via-[#150d36] to-[#120a28] border-2 border-cyan-400/50 rounded-3xl p-6 sm:p-10 mb-14 text-center sm:text-left shadow-2xl shadow-purple-950/60 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-400 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>DIAGNÓSTICO APLICADO</span>
          </div>

          <h2 className="font-heading text-xs sm:text-sm font-black uppercase tracking-widest text-purple-300 mb-2">
            POR LO QUE NOS CONTASTE...
          </h2>

          <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-snug mb-4">
            "{getDynamicMessage()}"
          </p>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mb-6">
            La mayoría de las personas se detienen creyendo que necesitan ser programadores o tener una idea genial desde el primer minuto. Descubre cómo la Inteligencia Artificial y una metodología estructurada cambian las reglas del juego.
          </p>

          <button
            onClick={onExploreDemo}
            className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs sm:text-sm transition-all shadow-md shadow-purple-900/40 inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Ver la herramienta en acción</span>
            <ArrowDown className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* SECCIÓN — EL PROBLEMA */}
      <div className="mb-16">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs uppercase font-bold text-rose-400 tracking-wider block mb-2">
            LA VERDADERA BARRERA
          </span>

          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3 text-balance">
            EL PROBLEMA NO SIEMPRE ES NO TENER UNA IDEA.
          </h2>

          <p className="text-xs sm:text-sm text-slate-300">
            Casi todos los creadores y profesionales comienzan exactamente en el mismo punto de parálisis:
          </p>
        </div>

        {/* Visual Problem Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
          {[
            'NO SÉ QUÉ CREAR.',
            'NO SÉ QUÉ NICHO ELEGIR.',
            'NO SÉ QUÉ PROBLEMA SOLUCIONAR.',
            'NO SÉ PROGRAMAR.',
            'NO SÉ POR DÓNDE EMPEZAR.',
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-[#150e33]/80 border border-purple-900/40 rounded-2xl p-4 flex items-center gap-3 text-left"
            >
              <div className="w-8 h-8 rounded-xl bg-rose-950/60 border border-rose-800/40 flex items-center justify-center text-rose-400 shrink-0 font-bold text-xs">
                ✕
              </div>
              <span className="font-heading text-xs sm:text-sm font-bold text-slate-200">
                "{item}"
              </span>
            </div>
          ))}

          <div className="bg-gradient-to-r from-purple-900/40 to-cyan-900/40 border border-cyan-400/40 rounded-2xl p-4 flex items-center gap-3 text-left">
            <div className="w-8 h-8 rounded-xl bg-cyan-950/60 border border-cyan-400/50 flex items-center justify-center text-cyan-300 shrink-0 font-bold text-xs">
              ✓
            </div>
            <span className="font-heading text-xs sm:text-sm font-extrabold text-white">
              Y precisamente ahí puede comenzar la oportunidad.
            </span>
          </div>
        </div>
      </div>

      {/* SECCIÓN — LA NUEVA OPORTUNIDAD */}
      <div className="bg-[#120d2a]/90 border border-purple-800/40 rounded-3xl p-6 sm:p-10 text-center">
        <span className="text-xs uppercase font-bold text-cyan-400 tracking-wider block mb-2">
          UN NUEVO PARADIGMA
        </span>

        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4 text-balance">
          HOY PUEDES COMENZAR A CREAR DE OTRA MANERA.
        </h2>

        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed mb-8">
          La Inteligencia Artificial permite trabajar con herramientas y procesos que facilitan la creación de experiencias digitales interactivas, reduciendo semanas de desarrollo técnico a un proceso guiado paso a paso.
        </p>

        {/* Visual Transformation Chain */}
        <div className="flex items-center justify-between gap-1 overflow-x-auto pb-3 pt-1 max-w-2xl mx-auto text-xs font-bold text-slate-300">
          <span className="px-3 py-2 bg-purple-950 rounded-xl border border-purple-700/40 text-purple-300 whitespace-nowrap">
            IDEA
          </span>
          <span className="text-purple-400">→</span>
          <span className="px-3 py-2 bg-indigo-950 rounded-xl border border-indigo-700/40 text-indigo-300 whitespace-nowrap">
            INTELIGENCIA ARTIFICIAL
          </span>
          <span className="text-purple-400">→</span>
          <span className="px-3 py-2 bg-cyan-950 rounded-xl border border-cyan-700/40 text-cyan-300 whitespace-nowrap">
            ESTRUCTURA
          </span>
          <span className="text-purple-400">→</span>
          <span className="px-3 py-2 bg-emerald-950 rounded-xl border border-emerald-700/40 text-emerald-300 whitespace-nowrap">
            MINIAPP
          </span>
          <span className="text-purple-400">→</span>
          <span className="px-3 py-2 bg-cyan-900 rounded-xl border border-cyan-400 text-white font-extrabold whitespace-nowrap">
            EXPERIENCIA DIGITAL
          </span>
        </div>

        <p className="text-[11px] text-slate-500 mt-6 max-w-md mx-auto">
          * La IA es un facilitador metodológico; no promete resultados automáticos ni sustituye la propuesta de valor real que ofrezcas a tu público.
        </p>
      </div>
    </section>
  );
};
