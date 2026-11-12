import React from 'react';
import { 
  Sparkles, 
  BookOpen, 
  Compass, 
  Layout, 
  Cpu, 
  Library, 
  Megaphone,
  Check, 
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { COURSE_MODULES } from '../data/ecosystemData';

interface CourseModulesSectionProps {
  hotmartLink?: string;
}

export const CourseModulesSection: React.FC<CourseModulesSectionProps> = ({
  hotmartLink = 'https://pay.hotmart.com/T106939828K?checkoutMode=10',
}) => {
  const moduleIcons = [BookOpen, Compass, Layout, Cpu, Library, Megaphone];

  return (
    <section id="modulos" className="w-full max-w-5xl mx-auto px-4 py-16 sm:py-20 border-t border-purple-900/30">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/70 border border-purple-800/40 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3">
          <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
          <span>TEMARIO COMPLETO PASO A PASO</span>
        </div>

        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
          MÓDULOS DEL CURSO
        </h2>

        <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
          Todo el contenido estructurado que aprenderás dentro de La Fábrica de MiniApps Verse, desde la concepción hasta el lanzamiento y tus campañas en Facebook Meta:
        </p>
      </div>

      {/* Grid de Módulos (1 al 6) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
        {COURSE_MODULES.map((mod, idx) => {
          const Icon = moduleIcons[idx] || Sparkles;
          const effectiveHotmartUrl = mod.hotmartUrl || hotmartLink;
          const isModule6 = mod.number === 6;

          return (
            <div
              key={mod.number}
              className={`bg-[#120d2a]/90 border rounded-2xl p-5 sm:p-6 transition-all duration-200 flex flex-col justify-between group shadow-xl ${
                isModule6
                  ? 'border-cyan-400/80 shadow-cyan-950/40 ring-1 ring-cyan-400/30 bg-gradient-to-b from-[#1b1242] to-[#120d2a]'
                  : 'border-purple-800/40 hover:border-purple-600/60 shadow-purple-950/30'
              }`}
            >
              <div>
                {/* Header card */}
                <div className="flex items-center justify-between mb-3.5">
                  <span className={`text-[10px] sm:text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full border ${
                    isModule6
                      ? 'bg-cyan-950 text-cyan-300 border-cyan-400/60'
                      : 'bg-purple-950 text-cyan-300 border-purple-700/50'
                  }`}>
                    {mod.badge}
                  </span>

                  <div className="w-8 h-8 rounded-lg bg-[#1a123d] border border-purple-800/50 flex items-center justify-center text-cyan-300 group-hover:scale-105 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <span className="text-[10px] font-bold uppercase tracking-wider text-purple-400 block mb-1">
                  {mod.tag}
                </span>

                <h3 className="font-heading text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                  {mod.title}
                </h3>

                <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                  {mod.description}
                </p>

                {/* Lessons list */}
                {mod.lessons && mod.lessons.length > 0 && (
                  <ul className="space-y-2 border-t border-purple-900/40 pt-3 mb-4">
                    {mod.lessons.map((lesson, lIdx) => (
                      <li key={lIdx} className="flex items-start gap-2 text-[11px] sm:text-xs text-slate-200">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{lesson}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Hotmart access button for this module */}
              <div className="mt-4 pt-3 border-t border-purple-900/40">
                <a
                  href={effectiveHotmartUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 ${
                    isModule6
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-slate-950 font-black shadow-md shadow-cyan-950/40'
                      : 'bg-[#1a123d] hover:bg-[#221852] border border-purple-700/50 hover:border-cyan-400/50 text-cyan-300'
                  }`}
                  title={`Acceder a ${mod.badge} en Hotmart`}
                >
                  <span>Acceder al {mod.badge} en Hotmart</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA banner */}
      <div className="bg-[#120d2a] border border-purple-700/40 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-xl shadow-purple-950/40">
        <div>
          <h4 className="font-heading text-base font-bold text-white mb-1">
            Accede a los 6 Módulos completos con tu membresía
          </h4>
          <p className="text-xs text-slate-300">
            Incluye actualizaciones continuas y acceso completo desde la plataforma de Hotmart.
          </p>
        </div>

        <a
          href={hotmartLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-black text-xs sm:text-sm shadow-lg shadow-purple-900/40 transition-all active:scale-95 whitespace-nowrap cursor-pointer flex items-center gap-2"
        >
          <span>OBTENER ACCESO COMPLETO →</span>
        </a>
      </div>
    </section>
  );
};
