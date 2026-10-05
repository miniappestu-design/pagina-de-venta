import React from 'react';
import { Sparkles, Shield, Image as ImageIcon } from 'lucide-react';

interface TestimonialsSectionProps {
  testimonialImages?: string[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ 
  testimonialImages = [] 
}) => {
  return (
    <section id="testimonios" className="w-full max-w-5xl mx-auto px-4 py-16 sm:py-24 border-t border-purple-900/30">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs uppercase font-bold text-cyan-400 tracking-wider block mb-2">
          EXPERIENCIAS REALES
        </span>

        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
          TESTIMONIOS REALES
        </h2>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl mx-auto">
          Resultados y experiencias auténticas de alumnos que comenzaron desde cero y aplicaron la metodología de La Fábrica de MiniApps Verse.
        </p>
      </div>

      {/* If images uploaded, render them cleanly. If waiting, display clean prepared container */}
      {testimonialImages.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          {testimonialImages.map((imgSrc, idx) => (
            <div
              key={idx}
              className="bg-[#120d2a]/90 border border-purple-800/40 rounded-2xl p-3 shadow-xl overflow-hidden"
            >
              <img
                src={imgSrc}
                alt={`Testimonio real ${idx + 1}`}
                className="w-full h-auto rounded-xl object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      ) : (
        /* Prepared section awaiting user's official screenshot uploads */
        <div className="bg-[#120d2a]/80 border border-purple-800/40 rounded-3xl p-8 sm:p-12 mb-8 text-center max-w-3xl mx-auto shadow-xl">
          <div className="w-16 h-16 rounded-2xl bg-purple-950/80 border border-purple-700/50 flex items-center justify-center mx-auto mb-4 text-cyan-400">
            <ImageIcon className="w-8 h-8" />
          </div>

          <h3 className="font-heading text-lg sm:text-xl font-bold text-white mb-2">
            Capturas y Testimonios de Alumnos
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed mb-4">
            Aquí se exhiben únicamente las capturas de pantalla reales compartidas por miembros de nuestra comunidad.
          </p>

          <div className="inline-flex items-center gap-2 text-xs text-emerald-400 font-medium px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-800/50">
            <Shield className="w-3.5 h-3.5" />
            <span>100% testimonios auténticos verificados · Cero textos fabricados</span>
          </div>
        </div>
      )}

      <div className="text-center text-xs text-slate-500 max-w-lg mx-auto flex items-center justify-center gap-2">
        <Shield className="w-4 h-4 text-purple-400 shrink-0" />
        <span>Política de transparencia: No garantizamos ingresos automáticos ni publicamos testimonios no verificados.</span>
      </div>
    </section>
  );
};
