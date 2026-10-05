import React from 'react';
import { 
  Sparkles, 
  Bot, 
  Terminal, 
  Library, 
  Layers, 
  ArrowRight,
  Shield,
  Zap,
  Cpu
} from 'lucide-react';

export const VerseEcosystem: React.FC = () => {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-16 sm:py-20 border-t border-purple-900/30">
      {/* Smooth Transition */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs uppercase font-bold text-cyan-400 tracking-wider block mb-2">
          LA METODOLOGÍA PROBADA
        </span>

        <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-white to-cyan-300 mb-3">
          "Y esto es precisamente lo que queremos enseñarte."
        </h3>

        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
          LA FÁBRICA DE MINIAPPS VERSE
        </h2>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed text-balance">
          Un sistema creado para ayudarte a pasar de una idea a una MiniApp utilizando Inteligencia Artificial.
        </p>
      </div>

      {/* The 4 Core Engines of the Verse Ecosystem */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {/* Component 1 */}
        <div className="bg-[#120d2a]/90 border border-purple-800/40 rounded-2xl p-5 hover:border-cyan-400/50 transition-all flex flex-col justify-between group">
          <div>
            <div className="w-10 h-10 rounded-xl bg-purple-900/50 border border-purple-500/40 flex items-center justify-center text-cyan-300 mb-4 group-hover:scale-105 transition-transform">
              <Cpu className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-purple-400 block mb-1">
              MOTOR PRINCIPAL
            </span>
            <h4 className="font-heading text-base font-bold text-white mb-2 leading-snug">
              Fábrica de MiniApps Verse
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              El entorno de trabajo donde mapeas oportunidades, diseñas interfaces y generas experiencias móviles interactivas sin programar.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-purple-900/30 text-[11px] text-cyan-400 font-medium">
            Entorno integral guiado
          </div>
        </div>

        {/* Component 2 */}
        <div className="bg-[#120d2a]/90 border border-purple-800/40 rounded-2xl p-5 hover:border-cyan-400/50 transition-all flex flex-col justify-between group">
          <div>
            <div className="w-10 h-10 rounded-xl bg-indigo-900/50 border border-indigo-500/40 flex items-center justify-center text-indigo-300 mb-4 group-hover:scale-105 transition-transform">
              <Bot className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400 block mb-1">
              ASISTENTE ESPECIALIZADO
            </span>
            <h4 className="font-heading text-base font-bold text-white mb-2 leading-snug">
              Agente Verse
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Tu copiloto de IA configurado para sugerir estructuras lógicas, flujos de navegación y soluciones a dudas durante todo el proceso.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-purple-900/30 text-[11px] text-indigo-300 font-medium">
            Asistencia en lenguaje natural
          </div>
        </div>

        {/* Component 3 */}
        <div className="bg-[#120d2a]/90 border border-purple-800/40 rounded-2xl p-5 hover:border-cyan-400/50 transition-all flex flex-col justify-between group">
          <div>
            <div className="w-10 h-10 rounded-xl bg-cyan-900/50 border border-cyan-500/40 flex items-center justify-center text-cyan-300 mb-4 group-hover:scale-105 transition-transform">
              <Terminal className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 block mb-1">
              SISTEMA DE PROMPTS
            </span>
            <h4 className="font-heading text-base font-bold text-white mb-2 leading-snug">
              Fábrica de Prompts Verse
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Comandos estructurados y testeados para pedirle a la Inteligencia Artificial exactamente las pantallas, calculadoras y elementos que necesitas.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-purple-900/30 text-[11px] text-cyan-300 font-medium">
            Fórmulas exactas probadas
          </div>
        </div>

        {/* Component 4 */}
        <div className="bg-[#120d2a]/90 border border-purple-800/40 rounded-2xl p-5 hover:border-cyan-400/50 transition-all flex flex-col justify-between group">
          <div>
            <div className="w-10 h-10 rounded-xl bg-purple-900/50 border border-purple-500/40 flex items-center justify-center text-purple-300 mb-4 group-hover:scale-105 transition-transform">
              <Library className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-purple-400 block mb-1">
              CATÁLOGO PRIVADO
            </span>
            <h4 className="font-heading text-base font-bold text-white mb-2 leading-snug">
              Biblioteca 180 MiniApps
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              180 estructuras y páginas ya desarrolladas en decenas de nichos para que nunca tengas que empezar desde una hoja en blanco.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-purple-900/30 text-[11px] text-purple-300 font-medium">
            Punto de partida directo
          </div>
        </div>
      </div>
    </section>
  );
};
