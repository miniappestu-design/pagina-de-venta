import React, { useRef, useEffect, useState } from 'react';
import { 
  Sparkles,
  RotateCcw,
  ChevronDown,
  Volume2,
  VolumeX,
  Play
} from 'lucide-react';
import { QuizAnswers } from '../types';
import postQuizVideo from '../assets/videos/video-post-quiz.mp4';
import postQuizPoster from '../assets/videos/video-post-quiz-poster.jpg';

interface PostQuizSectionProps {
  answers: QuizAnswers | null;
  onRetakeQuiz: () => void;
}

export const PostQuizSection: React.FC<PostQuizSectionProps> = ({
  answers,
  onRetakeQuiz,
}) => {
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [hasStarted, setHasStarted] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const videoSrc = postQuizVideo || '/videos/video-post-quiz.mp4';
  const posterSrc = postQuizPoster || '/videos/video-post-quiz-poster.jpg';

  // Iniciar reproducción automática universal (iOS, Android, Tablet, PC)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // En dispositivos móviles (iPhone, iPad, Android), los navegadores
    // exigen muted = true y playsInline para permitir autoplay inmediato.
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const startPlayback = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setHasStarted(true);
            setIsMuted(video.muted);
          })
          .catch(() => {
            // Si el modo de ahorro de batería del celular requiere interacción táctil
            setHasStarted(false);
          });
      }
    };

    if (video.readyState >= 2) {
      startPlayback();
    } else {
      video.addEventListener('loadeddata', startPlayback, { once: true });
      video.addEventListener('canplay', startPlayback, { once: true });
    }
  }, []);

  const handleToggleSound = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.muted) {
      video.muted = false;
      video.volume = 1;
      setIsMuted(false);
      video.play().catch(() => {});
    } else {
      video.muted = true;
      setIsMuted(true);
    }
  };

  const handleManualPlay = () => {
    const video = videoRef.current;
    if (!video) return;

    // Desactivar silencio y reproducir mediante el gesto del usuario
    video.muted = false;
    video.volume = 1;
    setIsMuted(false);
    video.play()
      .then(() => setHasStarted(true))
      .catch(() => {
        // En caso de que el navegador móvil restrinja audio en este instante
        video.muted = true;
        setIsMuted(true);
        video.play().then(() => setHasStarted(true)).catch(() => {});
      });
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
        <div className="text-center mb-6 w-full animate-in fade-in duration-500">
          
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
            BARRA DE ACTIVACIÓN DE AUDIO DESTACADA PARA CELULARES
            (Ubicada fuera del video para no obstruir los toques en pantalla)
            ======================================================== */}
        <div className="w-full max-w-[320px] xs:max-w-[350px] sm:max-w-[390px] md:max-w-[420px] lg:max-w-[440px] mx-auto mb-3">
          {isMuted ? (
            <button
              onClick={handleToggleSound}
              type="button"
              className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-purple-700 via-indigo-600 to-cyan-500 hover:from-purple-600 hover:to-cyan-400 text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2.5 shadow-xl shadow-purple-900/60 border-2 border-cyan-300 active:scale-95 transition-all cursor-pointer animate-pulse"
              title="Tocar para escuchar el video con audio"
            >
              <Volume2 className="w-5 h-5 text-cyan-200 shrink-0" />
              <span>🔊 TOCAR PARA ACTIVAR EL AUDIO</span>
            </button>
          ) : (
            <button
              onClick={handleToggleSound}
              type="button"
              className="w-full py-2.5 px-4 rounded-2xl bg-emerald-950/90 border border-emerald-500/60 text-emerald-300 font-bold text-xs flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all cursor-pointer"
              title="Audio activado. Tocar para silenciar"
            >
              <VolumeX className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>✓ AUDIO ACTIVADO (Tocar para silenciar)</span>
            </button>
          )}
        </div>

        {/* ========================================================
            REPRODUCTOR DE VIDEO REAL (HTML5 NATIVO, VERTICAL 576×1024)
            Compatible con Celulares (iOS y Android), Tablets y Computadoras
            Optimizado con formato H.264 Universal FastStart
            ======================================================== */}
        <div className="w-full max-w-[320px] xs:max-w-[350px] sm:max-w-[390px] md:max-w-[420px] lg:max-w-[440px] mx-auto rounded-3xl p-[2px] bg-gradient-to-b from-purple-500/50 via-purple-900/30 to-cyan-500/40 shadow-2xl shadow-purple-950/90 relative">
          <div className="w-full bg-black rounded-[22px] overflow-hidden flex flex-col relative">
            
            <video
              ref={videoRef}
              controls
              autoPlay
              muted
              playsInline
              webkit-playsinline="true"
              x5-playsinline="true"
              preload="auto"
              poster={posterSrc}
              onPlay={() => setHasStarted(true)}
              onVolumeChange={(e) => setIsMuted((e.currentTarget as HTMLVideoElement).muted)}
              className="w-full h-auto block rounded-[22px]"
              style={{
                aspectRatio: '576 / 1024',
                width: '100%',
                maxHeight: '75vh',
                objectFit: 'contain',
                display: 'block',
              }}
            >
              <source src={postQuizVideo} type="video/mp4" />
              <source src="/videos/video-post-quiz.mp4" type="video/mp4" />
              Tu navegador no soporta la reproducción de video HTML5.
            </video>

            {/* BOTÓN TRANSPARENTE SI EL NAVEGADOR ESPERA EL PRIMER TOQUE TÁCTIL */}
            {!hasStarted && (
              <button 
                onClick={handleManualPlay}
                type="button"
                className="absolute inset-0 z-10 flex items-center justify-center bg-transparent cursor-pointer group"
                title="Tocar para reproducir video"
              >
                <div className="flex flex-col items-center gap-2.5 drop-shadow-2xl">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-400 p-[3px] shadow-2xl shadow-cyan-500/50 group-hover:scale-105 active:scale-95 transition-transform flex items-center justify-center animate-pulse">
                    <div className="w-full h-full bg-[#0d0a1d]/85 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Play className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-300 fill-cyan-300 ml-1" />
                    </div>
                  </div>
                  <span className="px-3.5 py-1.5 rounded-full bg-black/80 border border-cyan-400/60 text-cyan-200 font-bold text-xs uppercase tracking-wider backdrop-blur-md shadow-lg">
                    Tocar para reproducir
                  </span>
                </div>
              </button>
            )}
          </div>
        </div>

        {/* ========================================================
            CONTINUACIÓN NATURAL HACIA LA LANDING DE VENTA
            ======================================================== */}
        <div className="mt-8 sm:mt-10 flex flex-col items-center justify-center text-center">
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
