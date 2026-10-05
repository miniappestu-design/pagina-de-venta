import React from 'react';
import { ArrowDown, CheckCircle, Sparkles, RefreshCw, Layers, Compass, Lightbulb } from 'lucide-react';
import { QuizAnswers } from '../types';
import { calculateProfile } from '../data/quizData';

interface DiagnosticResultProps {
  answers: QuizAnswers;
  onResetQuiz: () => void;
  onContinue: () => void;
}

export const DiagnosticResult: React.FC<DiagnosticResultProps> = ({ answers, onResetQuiz, onContinue }) => {
  const profile = calculateProfile(answers);

  return (
    <section id="resultado-diagnostico" className="w-full max-w-3xl mx-auto px-4 py-10">
      {/* Result Container */}
      <div className="bg-[#120d2a]/95 border-2 border-purple-600/50 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-purple-950/60 backdrop-blur-xl relative overflow-hidden">
        {/* Glowing aura */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-purple-600/20 via-cyan-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          {/* Header pill */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{profile.badge}</span>
            </div>

            <button
              onClick={onResetQuiz}
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer py-1 px-2.5 rounded-lg hover:bg-white/5"
              title="Cambiar respuestas"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Repetir diagnóstico</span>
            </button>
          </div>

          {/* Profile Name & Headline */}
          <span className="text-xs font-semibold text-purple-400 tracking-widest uppercase block mb-1">
            TU DIAGNÓSTICO ESTRATÉGICO
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3 tracking-tight">
            PERFIL: {profile.title}
          </h2>

          <p className="text-base sm:text-lg font-medium text-purple-200/90 mb-6 leading-relaxed">
            {profile.headline}
          </p>

          {/* "Por lo que nos contaste..." Personalization Card */}
          <div className="bg-[#1a133a]/80 border border-purple-800/40 rounded-2xl p-4 sm:p-6 mb-6">
            <h3 className="text-xs font-bold text-cyan-300 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Compass className="w-4 h-4 text-cyan-400" />
              <span>Por lo que nos contaste en tus respuestas:</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-200">
              <div className="flex items-start gap-2 bg-[#120c2b]/50 p-2.5 rounded-xl border border-purple-900/30">
                <span className="text-purple-400 font-bold">1.</span>
                <div>
                  <span className="text-slate-400 block text-[11px]">Tu punto actual:</span>
                  <span className="font-semibold text-white">{answers.q1 || 'Por definir'}</span>
                </div>
              </div>

              <div className="flex items-start gap-2 bg-[#120c2b]/50 p-2.5 rounded-xl border border-purple-900/30">
                <span className="text-purple-400 font-bold">2.</span>
                <div>
                  <span className="text-slate-400 block text-[11px]">Tu objetivo deseado:</span>
                  <span className="font-semibold text-white">{answers.q2 || 'Por definir'}</span>
                </div>
              </div>

              <div className="flex items-start gap-2 bg-[#120c2b]/50 p-2.5 rounded-xl border border-purple-900/30">
                <span className="text-purple-400 font-bold">3.</span>
                <div>
                  <span className="text-slate-400 block text-[11px]">Lo que más te frena:</span>
                  <span className="font-semibold text-white">{answers.q3 || 'Por definir'}</span>
                </div>
              </div>

              <div className="flex items-start gap-2 bg-[#120c2b]/50 p-2.5 rounded-xl border border-purple-900/30">
                <span className="text-purple-400 font-bold">4.</span>
                <div>
                  <span className="text-slate-400 block text-[11px]">Nivel con IA:</span>
                  <span className="font-semibold text-white">{answers.q4 || 'Comenzando'}</span>
                </div>
              </div>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-purple-200/90 leading-relaxed border-t border-purple-900/40 pt-3">
              {profile.hookSummary}
            </p>
          </div>

          {/* Tactical Explanation */}
          <p className="text-sm sm:text-base text-slate-300 mb-6 leading-relaxed">
            {profile.description}
          </p>

          {/* Action Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-[#181135]/90 border border-purple-700/40 rounded-xl p-4">
              <div className="flex items-center gap-2 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-1.5">
                <Layers className="w-4 h-4" />
                <span>Ruta recomendada para ti</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 font-medium">
                {profile.recommendedPathway}
              </p>
            </div>

            <div className="bg-[#181135]/90 border border-purple-700/40 rounded-xl p-4">
              <div className="flex items-center gap-2 text-purple-300 text-xs font-bold uppercase tracking-wider mb-1.5">
                <Lightbulb className="w-4 h-4" />
                <span>Oportunidad de MiniApp detectada</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 font-medium">
                {profile.suggestedMiniAppIdea}
              </p>
            </div>
          </div>

          {/* Next Step Transition Button */}
          <div className="text-center pt-2">
            <button
              onClick={onContinue}
              className="w-full sm:w-auto px-8 py-4 text-base font-bold rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white shadow-xl shadow-purple-700/30 active:scale-95 transition-all inline-flex items-center justify-center gap-2.5 cursor-pointer group"
            >
              <span>DESCUBRIR CÓMO PASAR DE CERO A TU MINIAPP</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>
            <p className="text-xs text-slate-400 mt-2">
              Continúa hacia el motor de descubrimiento visual
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
