import React from 'react';
import { Sparkles, ArrowRight, RotateCcw } from 'lucide-react';

interface HeaderNavProps {
  currentPage: 'quiz' | 'landing';
  onCtaClick: () => void;
  onGoToQuiz: () => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({ 
  currentPage, 
  onCtaClick, 
  onGoToQuiz 
}) => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#090714]/90 border-b border-purple-900/30 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        {/* Zone 1: Single element wordmark */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-400 p-[1px] shadow-sm shadow-purple-500/20">
            <div className="w-full h-full bg-[#0d0a1d] rounded-[7px] flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-cyan-300" />
            </div>
          </div>
          <span className="font-heading font-bold text-sm sm:text-base tracking-tight text-white">
            LA FÁBRICA <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-300">VERSE</span>
          </span>
        </div>

        {/* Zone 2: Navigation Links (only shown on landing page) */}
        {currentPage === 'landing' ? (
          <nav className="hidden md:flex items-center gap-5 text-xs lg:text-sm font-medium text-slate-300">
            <a href="#creador-demo" className="hover:text-cyan-300 transition-colors">Creador Demo</a>
            <a href="#demostracion" className="hover:text-cyan-300 transition-colors">MiniApps</a>
            <a href="#metodo-mapa" className="hover:text-cyan-300 transition-colors">Método M.A.P.A.</a>
            <a href="#bonos" className="hover:text-cyan-300 transition-colors">Bonos</a>
            <a href="#oferta" className="hover:text-cyan-300 transition-colors">Oferta</a>
            <a href="#faq" className="hover:text-cyan-300 transition-colors">Preguntas</a>
          </nav>
        ) : (
          <div className="text-xs text-purple-300/80 font-medium hidden sm:block">
            Diagnóstico de Oportunidad con Inteligencia Artificial
          </div>
        )}

        {/* Zone 3: Primary Action */}
        <div className="flex items-center gap-2">
          {currentPage === 'landing' && (
            <button
              onClick={onGoToQuiz}
              className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-slate-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
              title="Volver a responder el quiz"
            >
              <RotateCcw className="w-3.5 h-3.5 text-purple-400" />
              <span>Repetir Quiz</span>
            </button>
          )}

          {currentPage === 'landing' ? (
            <button
              onClick={onCtaClick}
              className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold rounded-lg bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white shadow-sm shadow-purple-600/30 active:scale-95 transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
            >
              <span>Acceso US$27</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <div className="text-xs px-2.5 py-1 rounded-full bg-purple-950/60 border border-purple-800/40 text-purple-300 font-semibold">
              Paso 1 de 2
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
