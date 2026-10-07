import React, { useRef, useEffect, useState } from 'react';
import { 
  Sparkles,
  RotateCcw,
  ChevronDown,
  VolumeX,
  Volume2
} from 'lucide-react';
import { QuizAnswers } from '../types';

interface PostQuizSectionProps {
  answers: QuizAnswers | null;
  onRetakeQuiz: () => void;
}

export const PostQuizSection: React.FC<PostQuizSectionProps> = ({
  answers,
  onRetakeQuiz,
}) => {
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Iniciar reproducción automática
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Intentar reproducir con audio
    video.muted = false;
    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsMuted(false);
        })
        .catch(() => {
          // Si las restricciones de autoplay del navegador requieren silencio para iniciar
          video.muted = true;
          setIsMuted(true);
          video.play().catch(() => {});
        });
    }
  }, []);

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.muted) {
      video.muted = false;
      setIsMuted(false);
    } else {
      video.muted = true;
      setIsMuted(true);
    }
  };

  const detectedStartingPoint = answers?.q1 || null;

  const scrollToLandingContent = () => {
    const el = document.getElementById('inicio-personalizado') || document.getElementById('creador-demo');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollBy({ top: 500, behavior: 'smooth' });
    }
  };

  return (
    <section id="seccion-post-quiz" className="w-full pt-10 pb-12 sm:pt-14 sm:pb-16 px-4 relative overflow-hidden bg-gradient-to-b from-[#090714] via-[#0d0822] to-[#090714] border-b border-purple-900/30">
      {/* Luces de fondo sutiles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        
        {/* ========================================================
            ENCABEZADO POST-QUIZ
            ======================================================== */}
        <div className="text-center mb-8 w-full animate-in fade-in duration-500">
          
          {/* Marca */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/40 text-cyan-300 text-xs sm:text-sm font-black tracking-widest uppercase shadow-md mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-300 animate-pulse" />
            <span>LA FÁBRICA DE MINIAPPS VERSE</span>
          </div>

          {/* Subtítulo 1 */}
          <p className="text-xs sm:text-sm md:text-base font-extrabold uppercase tracking-widest text-purple-300 mb-3">
            TU PUNTO DE PARTIDA ESTÁ MÁS CERCA DE LO QUE CREES
          </p>

          {/* Título Principal */}
          <h1 className="font-heading text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] mb-4 text-balance">
            ¿Y SI ESO QUE YA TIENES PUDIERA CONVERTIRSE EN UNA MINIAPP?
          </h1>

          {/* Subtítulo 2 */}
          <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-5 text-balance">
            Descubre cómo transformar tus conocimientos, ideas, negocios u oportunidades en una experiencia digital interactiva utilizando Inteligencia Artificial.
          </p>

          {/* Frase de urgencia emocional */}
          <div className="inline-block px-4 py-2 rounded-2xl bg-[#1b103c]/90 border border-purple-500/30 shadow-lg">
            <p className="text-xs sm:text-sm font-black tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-purple-200">
              NO DEJES TU IDEA EN EL PAPEL. DESCUBRE AHORA QUÉ PODRÍAS CREAR.
            </p>
          </div>

          {/* Diagnóstico registrado */}
          {detectedStartingPoint && (
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-400">
              <span className="text-purple-400 font-medium">Tu punto de partida registrado:</span>
              <span className="font-bold text-white bg-purple-900/60 px-3 py-1 rounded-xl border border-purple-700/50">
                {detectedStartingPoint}
              </span>
              <button
                onClick={onRetakeQuiz}
                className="text-[11px] text-slate-400 hover:text-cyan-300 ml-2 inline-flex items-center gap-1 cursor-pointer transition-colors"
                title="Volver a responder el quiz"
              >
                <RotateCcw className="w-3 h-3 text-purple-400" />
                <span>Modificar</span>
              </button>
            </div>
          )}
        </div>

        {/* ========================================================
            REPRODUCTOR DE VIDEO REAL (HTML5 NATIVO, VERTICAL 576×1024)
            Directo, sin botón de subir, sin overlays tapando el video
            ======================================================== */}
        <div className="w-full max-w-[360px] sm:max-w-[400px] md:max-w-[420px] mx-auto rounded-3xl p-[2px] bg-gradient-to-b from-purple-500/50 via-purple-900/30 to-cyan-500/40 shadow-2xl shadow-purple-950/90 relative">
          <div className="w-full bg-black rounded-[22px] overflow-hidden flex flex-col relative group">
            <video
              ref={videoRef}
              controls
              autoPlay
              playsInline
              preload="auto"
              src="/videos/video-post-quiz.mp4"
              className="w-full h-auto block bg-black rounded-[22px]"
              style={{
                aspectRatio: '576 / 1024',
                maxWidth: '100%',
                display: 'block',
              }}
            >
              <source
                src="/videos/video-post-quiz.mp4"
                type="video/mp4"
              />
              Tu navegador no soporta la reproducción de video HTML5.
            </video>

            {/* Indicador interactivo si el navegador inició en silencio por política de autoplay */}
            {isMuted && (
              <button
                onClick={toggleSound}
                className="absolute top-4 right-4 z-20 px-3.5 py-2 bg-black/80 hover:bg-black text-white rounded-full text-xs font-bold flex items-center gap-2 shadow-2xl border border-cyan-400/60 backdrop-blur-md cursor-pointer animate-pulse transition-all"
                title="Activar sonido"
              >
                <VolumeX className="w-4 h-4 text-cyan-300" />
                <span>Activar sonido</span>
              </button>
            )}
          </div>
        </div>

        {/* Continuación natural hacia la Landing de Venta */}
        <div className="mt-10 flex flex-col items-center justify-center text-center">
          <button
            onClick={scrollToLandingContent}
            className="group flex flex-col items-center gap-2 text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer"
          >
            <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-purple-300 group-hover:text-cyan-300 transition-colors">
              Continúa hacia la presentación completa y el Método M.A.P.A.
            </span>
            <div className="w-9 h-9 rounded-full bg-purple-950/80 border border-purple-500/40 flex items-center justify-center group-hover:border-cyan-400 group-hover:bg-purple-900 transition-all shadow-lg animate-bounce">
              <ChevronDown className="w-5 h-5 text-cyan-400" />
            </div>
          </button>
        </div>

      </div>
    </section>
  );
};
