import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, Sparkles, CheckCircle2, ShieldCheck, Compass } from 'lucide-react';
import { QUIZ_QUESTIONS, calculateProfile } from '../data/quizData';
import { QuizAnswers, UserProfile } from '../types';

interface QuizExperienceProps {
  onCompleteQuiz: (answers: QuizAnswers) => void;
  onGoToLanding: (answers: QuizAnswers) => void;
  savedAnswers: QuizAnswers | null;
}

export const QuizExperience: React.FC<QuizExperienceProps> = ({ 
  onCompleteQuiz, 
  onGoToLanding, 
  savedAnswers 
}) => {
  const [started, setStarted] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<QuizAnswers>(
    savedAnswers || {
      q1: '',
      q2: '',
      q3: '',
      q4: '',
      q5: '',
    }
  );
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [analysisProgress, setAnalysisProgress] = useState<number>(0);
  const [analysisStage, setAnalysisStage] = useState<string>('Analizando tus respuestas...');
  const [quizFinished, setQuizFinished] = useState<boolean>(false);
  const [calculatedProfile, setCalculatedProfile] = useState<UserProfile | null>(null);

  const currentQuestion = QUIZ_QUESTIONS[currentStep];

  const handleSelectOption = (label: string) => {
    const questionId = currentQuestion.id;
    const nextAnswers = { ...answers, [questionId]: label };
    setAnswers(nextAnswers);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      startAnalysis(nextAnswers);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    } else {
      setStarted(false);
    }
  };

  const startAnalysis = (finalAnswers: QuizAnswers) => {
    setIsAnalyzing(true);
    setAnalysisProgress(15);
    setAnalysisStage('Analizando tu punto de partida...');

    const t1 = setTimeout(() => {
      setAnalysisProgress(60);
      setAnalysisStage('Evaluando posibilidades de MiniApp con IA...');
    }, 600);

    const t2 = setTimeout(() => {
      setAnalysisProgress(90);
      setAnalysisStage('Generando tu diagnóstico personalizado...');
    }, 1250);

    const t3 = setTimeout(() => {
      setAnalysisProgress(100);
      setAnalysisStage('¡LISTO! 🚀');
    }, 1800);

    const finish = setTimeout(() => {
      setIsAnalyzing(false);
      setQuizFinished(true);
      const prof = calculateProfile(finalAnswers);
      setCalculatedProfile(prof);
      onCompleteQuiz(finalAnswers);
    }, 2200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(finish);
    };
  };

  // State 1: Analyzing Loader Screen
  if (isAnalyzing) {
    return (
      <div className="min-h-[85vh] flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-lg bg-[#120d28]/95 border border-purple-800/40 rounded-3xl p-8 sm:p-12 shadow-2xl shadow-purple-950/60 backdrop-blur-xl text-center relative overflow-hidden">
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-600 to-cyan-400 p-[2px] mb-6 animate-pulse">
              <div className="w-full h-full bg-[#0d0a1d] rounded-[14px] flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-cyan-300 animate-spin" style={{ animationDuration: '6s' }} />
              </div>
            </div>

            <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-2">
              SISTEMA DE DIAGNÓSTICO VERSE
            </span>

            <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-3">
              {analysisProgress === 100 ? '¡LISTO! 🚀' : '🔎 ANALIZANDO TUS RESPUESTAS...'}
            </h3>

            <p className="text-sm text-slate-300 mb-6 h-6 transition-all duration-300">
              {analysisStage}
            </p>

            <div className="w-full bg-[#1e1540] rounded-full h-3 p-0.5 overflow-hidden mb-4 border border-purple-800/50">
              <div
                className="bg-gradient-to-r from-purple-500 via-indigo-400 to-cyan-400 h-full rounded-full transition-all duration-500 ease-out"
                style={{ width: `${analysisProgress}%` }}
              />
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Personalizando tu punto de partida</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // State 2: Quiz Result Screen (before going to sales landing)
  if (quizFinished && calculatedProfile) {
    return (
      <div className="min-h-[85vh] flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-2xl bg-[#120d2a]/95 border-2 border-purple-600/60 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-purple-950/80 backdrop-blur-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-purple-600/20 via-cyan-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{calculatedProfile.badge}</span>
            </div>

            <span className="text-xs font-semibold text-purple-400 tracking-widest uppercase block mb-1">
              TU RESULTADO PERSONALIZADO
            </span>

            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3 tracking-tight">
              PERFIL: {calculatedProfile.title}
            </h2>

            <p className="text-base sm:text-lg font-medium text-slate-200 mb-6 leading-relaxed">
              {calculatedProfile.headline}
            </p>

            <div className="bg-[#19113a]/90 border border-purple-800/40 rounded-2xl p-5 mb-8 text-left">
              <p className="text-xs sm:text-sm text-cyan-200/90 leading-relaxed mb-3">
                {calculatedProfile.hookSummary}
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {calculatedProfile.description}
              </p>
            </div>

            {/* Transition CTA to Page 2: Landing */}
            <div className="text-center pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 block mb-3">
                🚀 AHORA QUEREMOS MOSTRARTE CÓMO.
              </span>

              <button
                onClick={() => onGoToLanding(answers)}
                className="w-full sm:w-auto px-8 sm:px-10 py-4 text-base sm:text-lg font-bold rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white shadow-xl shadow-purple-700/40 active:scale-95 transition-all inline-flex items-center justify-center gap-3 cursor-pointer group"
              >
                <span>DESCUBRIR MI OPORTUNIDAD →</span>
              </button>

              <p className="text-xs text-slate-400 mt-3">
                Continúa a la experiencia interactiva de descubrimiento
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // State 3: Welcome Initial Screen
  if (!started) {
    return (
      <div className="min-h-[85vh] flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-300 mb-5 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-700/40 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
            <span>Diagnóstico Interactivo · 5 Preguntas</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.1] mb-5 text-balance">
            ¿NO SABES QUÉ CREAR?
          </h1>

          <p className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-white to-cyan-300 max-w-xl mx-auto mb-4 text-balance">
            Descubre qué podrías convertir en una MiniApp interactiva utilizando Inteligencia Artificial.
          </p>

          <p className="text-sm sm:text-base text-slate-300 max-w-lg mx-auto mb-8 leading-relaxed">
            Responde 5 preguntas y descubre cuál podría ser tu punto de partida.
          </p>

          {/* Clean teaser cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-8 text-left">
            <div className="bg-[#130d2c]/80 border border-purple-800/40 rounded-2xl p-4">
              <span className="text-2xl mb-1.5 block">💡</span>
              <p className="text-xs font-bold text-white mb-1">¿No tienes idea?</p>
              <p className="text-[11px] text-slate-400 leading-snug">Descubre cómo explorar problemas cotidianos con alta demanda.</p>
            </div>
            <div className="bg-[#130d2c]/80 border border-purple-800/40 rounded-2xl p-4">
              <span className="text-2xl mb-1.5 block">📄</span>
              <p className="text-xs font-bold text-white mb-1">¿Tienes conocimientos o PDF?</p>
              <p className="text-[11px] text-slate-400 leading-snug">Aprende a transformarlos en herramientas vivas en el celular.</p>
            </div>
            <div className="bg-[#130d2c]/80 border border-purple-800/40 rounded-2xl p-4">
              <span className="text-2xl mb-1.5 block">🏢</span>
              <p className="text-xs font-bold text-white mb-1">¿Tienes un negocio?</p>
              <p className="text-[11px] text-slate-400 leading-snug">Entrega experiencias memorables y cotizadores a tus clientes.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-2">
            <button
              onClick={() => setStarted(true)}
              className="w-full sm:w-auto px-8 py-4 text-base sm:text-lg font-bold rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white shadow-xl shadow-purple-700/40 active:scale-[0.98] transition-all inline-flex items-center justify-center gap-3 cursor-pointer group"
            >
              <span>🚀 COMENZAR DIAGNÓSTICO</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onGoToLanding(answers)}
              className="w-full sm:w-auto px-6 py-4 text-sm sm:text-base font-bold rounded-2xl bg-purple-950/80 hover:bg-purple-900 border border-purple-500/50 hover:border-cyan-400 text-cyan-300 shadow-lg active:scale-[0.98] transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>▶ VER VIDEO Y PRESENTACIÓN</span>
            </button>
          </div>

          <p className="text-xs text-slate-500 mt-4">
            Totalmente interactivo · Toma menos de 60 segundos
          </p>
        </div>
      </div>
    );
  }

  // State 4: Question in progress (one per screen)
  const currentAnswerKey = currentQuestion.id;
  const selectedAnswer = answers[currentAnswerKey];
  const progressPercent = ((currentStep + 1) / QUIZ_QUESTIONS.length) * 100;

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-xl mx-auto">
        {/* Top Header of quiz */}
        <div className="flex items-center justify-between mb-3">
          <button
            onClick={handleBack}
            className="inline-flex items-center gap-1 text-xs font-medium text-slate-400 hover:text-white transition-colors cursor-pointer py-1 px-2 rounded-lg hover:bg-white/5"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Volver</span>
          </button>

          <span className="text-xs font-bold tracking-wide text-purple-300">
            Pregunta {currentStep + 1} de {QUIZ_QUESTIONS.length}
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-[#181135] rounded-full h-2.5 overflow-hidden mb-6 border border-purple-900/40">
          <div
            className="bg-gradient-to-r from-purple-500 to-cyan-400 h-full rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Question Card */}
        <div className="bg-[#120d28]/95 border border-purple-800/40 rounded-3xl p-5 sm:p-7 shadow-xl shadow-purple-950/40 backdrop-blur-md">
          <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 block mb-1">
            PASO 0{currentStep + 1} DE 0{QUIZ_QUESTIONS.length}
          </span>

          <h2 className="font-heading text-xl sm:text-2xl font-bold text-white mb-2 leading-snug">
            {currentQuestion.title}
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
            {currentQuestion.subtitle}
          </p>

          {/* Options */}
          <div className="space-y-2.5">
            {currentQuestion.options.map((option) => {
              const isSelected = selectedAnswer === option.label;
              return (
                <button
                  key={option.id}
                  onClick={() => handleSelectOption(option.label)}
                  className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between group cursor-pointer active:scale-[0.99] ${
                    isSelected
                      ? 'bg-purple-900/40 border-cyan-400 text-white shadow-md shadow-purple-900/30 ring-1 ring-cyan-400/50'
                      : 'bg-[#181238]/60 hover:bg-[#20184a]/80 border-purple-900/40 hover:border-purple-600/60 text-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl sm:text-2xl shrink-0">{option.icon}</span>
                    <span className="text-sm sm:text-base font-semibold leading-snug group-hover:text-white transition-colors">
                      {option.label}
                    </span>
                  </div>

                  <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                      isSelected
                        ? 'bg-cyan-500 border-cyan-400 text-slate-950'
                        : 'border-purple-700/50 group-hover:border-purple-400'
                    }`}
                  >
                    {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-6 pt-4 border-t border-purple-900/30 flex items-center justify-between text-[11px] text-slate-400">
            <span>Toca una opción para continuar</span>
            <span>Pregunta {currentStep + 1} de {QUIZ_QUESTIONS.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
