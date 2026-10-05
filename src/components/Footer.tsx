import React from 'react';
import { Sparkles, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-purple-900/30 bg-[#070512] text-slate-400 text-xs py-12 px-4">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-purple-900/50 flex items-center justify-center text-cyan-300">
              <Sparkles className="w-3.5 h-3.5" />
            </div>
            <span className="font-heading font-bold text-white text-sm">
              LA FÁBRICA DE MINIAPPS VERSE
            </span>
          </div>

          <div className="flex items-center gap-6 text-xs text-slate-300">
            <a href="#quiz-section" className="hover:text-white transition-colors">Diagnóstico</a>
            <a href="#no-se-que-crear" className="hover:text-white transition-colors">¿Sin Idea?</a>
            <a href="#demostracion" className="hover:text-white transition-colors">Demostración</a>
            <a href="#oferta" className="hover:text-white transition-colors">Oferta</a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-cyan-300 transition-colors cursor-pointer"
            >
              <span>Subir</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Hotmart Platform Disclaimer */}
        <div className="border-t border-purple-950 pt-6 space-y-3 text-[11px] leading-relaxed text-slate-500">
          <p>
            Este producto se comercializa con el apoyo de Hotmart. La plataforma no realiza una evaluación editorial previa de los productos vendidos, ni valora la tecnicidad y experiencia de quienes los elaboran. La existencia de un producto y su adquisición a través de la plataforma no pueden ser consideradas como garantía de calidad de contenido y resultado, en ningún caso.
          </p>
          <p>
            Al comprarlo, el comprador declara conocer esta información. Puedes consultar los términos y políticas de Hotmart en su sitio oficial.
          </p>
          <p className="text-slate-600 pt-2">
            © {new Date().getFullYear()} La Fábrica de MiniApps Verse. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
