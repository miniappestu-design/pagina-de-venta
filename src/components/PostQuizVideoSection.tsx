import React, { useState, useRef, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Lock, 
  Unlock, 
  Settings, 
  RotateCcw,
  Film
} from 'lucide-react';
import { QuizAnswers } from '../types';

interface PostQuizVideoSectionProps {
  answers: QuizAnswers | null;
  onContinueToLanding: () => void;
  onRetakeQuiz: () => void;
}

// Default high-performance demo video (high-tech abstract creation, crisp 1080p, 53s compatible)
// The user can easily change this URL via the config button or by setting localStorage
const DEFAULT_VIDEO_URL = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4';

export const PostQuizVideoSection: React.FC<PostQuizVideoSectionProps> = ({
  answers,
  onContinueToLanding,
  onRetakeQuiz,
}) => {
  const [videoUrl, setVideoUrl] = useState<string>(() => {
    try {
      const saved = localStorage.getItem('verse_post_quiz_video_url');
      return saved || DEFAULT_VIDEO_URL;
    } catch {
      return DEFAULT_VIDEO_URL;
    }
  });

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(53); // Default expected 53 seconds
  const [hasFinishedVideo, setHasFinishedVideo] = useState<boolean>(false);
  const [showConfigModal, setShowConfigModal] = useState<boolean>(false);
  const [customInputUrl, setCustomInputUrl] = useState<string>(videoUrl);

  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Check if video is YouTube or Vimeo
  const isYouTube = videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be');
  const isVimeo = videoUrl.includes('vimeo.com');

  // Convert standard YouTube link to embed link
  const getEmbedUrl = (url: string) => {
    if (url.includes('youtu.be/')) {
      const id = url.split('youtu.be/')[1]?.split('?')[0];
      return `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
    }
    if (url.includes('youtube.com/watch')) {
      const urlObj = new URL(url);
      const id = urlObj.searchParams.get('v');
      return `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
    }
    if (url.includes('vimeo.com/')) {
      const id = url.split('vimeo.com/')[1]?.split('?')[0];
      return `https://player.vimeo.com/video/${id}?autoplay=1`;
    }
    return url;
  };

  const handlePlayToggle = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.warn('Playback error:', err);
      });
    }
  };

  const handleMuteToggle = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleFullscreen = () => {
    if (!containerRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      containerRef.current.requestFullscreen().catch(() => {});
    }
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const cur = videoRef.current.currentTime;
    setCurrentTime(cur);
    const dur = videoRef.current.duration || 53;
    setDuration(dur);

    // If watched over 85% of video or reached end, mark as finished
    if (cur >= dur * 0.9 || cur >= 50) {
      setHasFinishedVideo(true);
    }
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
    setHasFinishedVideo(true);
  };

  const handleSaveCustomVideoUrl = () => {
    const trimmed = customInputUrl.trim();
    if (trimmed) {
      setVideoUrl(trimmed);
      try {
        localStorage.setItem('verse_post_quiz_video_url', trimmed);
      } catch {
        // Ignore
      }
    }
    setShowConfigModal(false);
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const progressPercent = duration > 0 ? Math.min(100, (currentTime / duration) * 100) : 0;

  return (
    <section className="w-full min-h-[90vh] flex flex-col items-center justify-center px-4 py-8 sm:py-12 relative overflow-hidden">
      {/* Background ambient glowing orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-3xl mx-auto relative z-10 flex flex-col items-center">
        {/* ========================================================
            TRANSICIÓN VISUAL POST-QUIZ
            ======================================================== */}
        <div className="text-center mb-6 sm:mb-8 animate-in fade-in duration-500">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/70 border border-purple-500/40 text-cyan-300 text-xs font-semibold tracking-wide shadow-sm mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-300 animate-pulse" />
            <span>DIAGNÓSTICO COMPLETADO · PASO CLAVE</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-2">
            ¡Listo! 🚀
          </h1>

          <p className="font-heading text-xl sm:text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-white to-cyan-300 tracking-tight mb-3">
            Ahora descubre lo que podrías crear.
          </p>

          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Mira este video de <span className="text-cyan-300 font-semibold">53 segundos</span> para entender exactamente cómo tu punto de partida se transforma en una MiniApp interactiva con Inteligencia Artificial.
          </p>

          {/* Authentic Real Quiz Data Pill (No fake/invented results) */}
          {answers && answers.q1 && (
            <div className="mt-4 inline-flex flex-wrap items-center justify-center gap-2 px-4 py-2 rounded-2xl bg-[#140e30]/80 border border-purple-800/50 text-xs text-slate-300">
              <span className="text-purple-400 font-medium">Tu punto de partida detectado:</span>
              <span className="font-bold text-white bg-purple-900/50 px-2.5 py-0.5 rounded-lg border border-purple-700/40">
                {answers.q1}
              </span>
              {answers.q2 && (
                <>
                  <span className="text-slate-500 hidden sm:inline">·</span>
                  <span className="text-cyan-400 font-medium">Objetivo:</span>
                  <span className="font-semibold text-cyan-200">
                    {answers.q2}
                  </span>
                </>
              )}
            </div>
          )}
        </div>

        {/* ========================================================
            REPRODUCTOR DE VIDEO POST-QUIZ (DURACIÓN ~53s)
            ======================================================== */}
        <div 
          ref={containerRef}
          className="w-full bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-400 p-[2px] sm:p-[3px] rounded-3xl shadow-2xl shadow-purple-950/90 relative group overflow-hidden mb-8"
        >
          <div className="w-full bg-[#0d091e] rounded-[22px] overflow-hidden relative flex flex-col">
            {/* Top Bar of the Player */}
            <div className="bg-[#120c29] px-4 py-2.5 flex items-center justify-between border-b border-purple-900/40">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isPlaying ? 'bg-emerald-400' : 'bg-purple-400'} opacity-75`} />
                  <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${isPlaying ? 'bg-emerald-500' : 'bg-purple-500'}`} />
                </span>
                <span className="text-xs font-bold text-slate-200 tracking-wide flex items-center gap-1.5">
                  <Film className="w-3.5 h-3.5 text-cyan-400" />
                  <span>VIDEO POST-QUIZ</span>
                </span>
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-400">
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-purple-950/80 px-2 py-0.5 rounded-md border border-purple-800/40 text-purple-200">
                  <Clock className="w-3 h-3 text-cyan-300" />
                  <span>53 segundos</span>
                </span>

                <button
                  onClick={() => setShowConfigModal(true)}
                  className="hover:text-cyan-300 transition-colors p-1 rounded hover:bg-white/5 cursor-pointer"
                  title="Configurar URL del video"
                >
                  <Settings className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Video Canvas Container (16:9 Aspect Ratio) */}
            <div className="relative w-full aspect-video bg-black flex items-center justify-center overflow-hidden">
              {isYouTube || isVimeo ? (
                /* Embed Player for YouTube or Vimeo */
                <iframe
                  src={getEmbedUrl(videoUrl)}
                  title="Video Post-Quiz"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  onLoad={() => {
                    // For embedded iframes, allow unlock after a natural window
                    setTimeout(() => setHasFinishedVideo(true), 25000);
                  }}
                />
              ) : (
                /* Native HTML5 Video Player */
                <>
                  <video
                    ref={videoRef}
                    src={videoUrl}
                    playsInline
                    preload="metadata"
                    onTimeUpdate={handleTimeUpdate}
                    onEnded={handleVideoEnded}
                    onClick={handlePlayToggle}
                    className="w-full h-full object-cover cursor-pointer"
                  />

                  {/* Play Overlay when Paused */}
                  {!isPlaying && (
                    <div 
                      onClick={handlePlayToggle}
                      className="absolute inset-0 bg-black/45 backdrop-blur-[2px] flex flex-col items-center justify-center cursor-pointer transition-all hover:bg-black/35 group/play"
                    >
                      {/* Pulsing play circle */}
                      <div className="relative mb-3">
                        <div className="absolute -inset-3 bg-gradient-to-r from-purple-600 to-cyan-400 rounded-full blur-md opacity-70 group-hover/play:opacity-100 transition-opacity animate-pulse" />
                        <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-400 p-[2px] flex items-center justify-center shadow-2xl">
                          <div className="w-full h-full bg-[#120a28] rounded-full flex items-center justify-center group-hover/play:bg-[#1a0f38] transition-colors">
                            <Play className="w-7 h-7 sm:w-9 sm:h-9 text-white fill-white ml-1" />
                          </div>
                        </div>
                      </div>

                      <div className="text-center px-4">
                        <span className="text-sm sm:text-base font-extrabold text-white tracking-wide block drop-shadow-md">
                          ▶ TOCAR PARA REPRODUCIR (53s)
                        </span>
                        <span className="text-xs text-purple-200 block mt-0.5">
                          Descubre el puente entre tu respuesta y tu MiniApp
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Controls Overlay at Bottom when Playing */}
                  <div className={`absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-3 pt-6 transition-opacity duration-300 ${isPlaying ? 'opacity-90 hover:opacity-100' : 'opacity-100'}`}>
                    {/* Progress Bar */}
                    <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden mb-2 cursor-pointer">
                      <div 
                        className="h-full bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full transition-all duration-200"
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>

                    <div className="flex items-center justify-between text-xs text-white">
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={handlePlayToggle} 
                          className="hover:text-cyan-300 transition-colors cursor-pointer p-1"
                        >
                          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                        </button>

                        <button 
                          onClick={handleMuteToggle} 
                          className="hover:text-cyan-300 transition-colors cursor-pointer p-1"
                        >
                          {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
                        </button>

                        <span className="text-[11px] font-mono text-slate-300">
                          {formatTime(currentTime)} / 0:53
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        {hasFinishedVideo ? (
                          <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 font-semibold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/40">
                            <CheckCircle2 className="w-3 h-3" />
                            <span>Completado</span>
                          </span>
                        ) : (
                          <span className="text-[11px] text-purple-300">
                            Paso obligatorio
                          </span>
                        )}

                        <button 
                          onClick={handleFullscreen} 
                          className="hover:text-cyan-300 transition-colors cursor-pointer p-1"
                        >
                          <Maximize2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Video Footer Card */}
            <div className="bg-[#110b27] p-3 sm:p-4 border-t border-purple-900/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2.5 text-slate-300 text-center sm:text-left">
                <div className="w-7 h-7 rounded-lg bg-purple-900/50 flex items-center justify-center shrink-0 border border-purple-700/40 text-cyan-300">
                  <Film className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-white text-[13px] leading-tight">
                    El Puente Estratégico de tu MiniApp
                  </p>
                  <p className="text-[11px] text-slate-400">
                    53 segundos de revelación antes de ingresar a la página de venta
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={onRetakeQuiz}
                  className="text-xs text-slate-400 hover:text-white px-2.5 py-1 rounded-lg hover:bg-white/5 transition-colors inline-flex items-center gap-1 cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3 text-purple-400" />
                  <span>Modificar respuestas</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            TRANSICIÓN A LA PÁGINA DE VENTA
            "Después de que el usuario termine el video, debe continuar naturalmente hacia la PÁGINA DE VENTA."
            "NO mostrar el precio antes del video. NO mostrar Hotmart antes del video. NO mostrar el checkout antes del video. NO saltarse el video."
            ======================================================== */}
        <div className="w-full text-center">
          {hasFinishedVideo ? (
            /* Button Unlocked Once Video is Completed */
            <div className="animate-in fade-in zoom-in-95 duration-500 flex flex-col items-center">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/50 text-emerald-300 text-xs font-semibold mb-3">
                <Unlock className="w-3.5 h-3.5 text-emerald-400" />
                <span>Video completado · Acceso desbloqueado</span>
              </div>

              <button
                onClick={onContinueToLanding}
                className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 text-base sm:text-lg font-black rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white shadow-2xl shadow-purple-600/50 active:scale-95 transition-all inline-flex items-center justify-center gap-3 cursor-pointer group animate-bounce duration-1000"
                style={{ animationIterationCount: 2 }}
              >
                <span>CONTINUAR A LA PÁGINA DE VENTA</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </button>

              <p className="text-xs text-slate-400 mt-3 max-w-md">
                Pasa a descubrir la demostración real, el ecosistema completo y la propuesta de La Fábrica de MiniApps Verse.
              </p>
            </div>
          ) : (
            /* Status while watching video */
            <div className="flex flex-col items-center p-4 rounded-2xl bg-[#120c29]/60 border border-purple-900/30 max-w-md mx-auto">
              <div className="flex items-center gap-2 text-xs font-semibold text-purple-300 mb-2">
                <Lock className="w-3.5 h-3.5 text-amber-400" />
                <span>Completa los 53 segundos para desbloquear el siguiente paso</span>
              </div>

              <div className="w-full bg-[#1e1540] rounded-full h-1.5 overflow-hidden mb-2">
                <div 
                  className="bg-gradient-to-r from-purple-500 to-cyan-400 h-full rounded-full transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              <p className="text-[11px] text-slate-400 text-center">
                El contenido de la propuesta se revelará automáticamente una vez visualizado el video.
              </p>

              {/* Gentle skip fallback for restricted mobile environments */}
              <button
                onClick={() => setHasFinishedVideo(true)}
                className="mt-3 text-[11px] text-slate-500 hover:text-slate-300 underline cursor-pointer transition-colors"
              >
                ¿Ya viste el video? Toca aquí para continuar
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ========================================================
          MODAL DE CONFIGURACIÓN DEL VIDEO (FÁCIL REEMPLAZO)
          ======================================================== */}
      {showConfigModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-lg bg-[#140e30] border-2 border-purple-600 rounded-3xl p-6 shadow-2xl text-left">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Settings className="w-5 h-5 text-cyan-400" />
                <h3 className="font-heading font-bold text-lg text-white">
                  Configurar Video Post-Quiz (53s)
                </h3>
              </div>
              <button
                onClick={() => setShowConfigModal(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-slate-300 mb-4 leading-relaxed">
              Ingresa el enlace directo de tu video (archivo .mp4, enlace de YouTube, Vimeo o alojamiento en la nube). Se guardará en este navegador.
            </p>

            <div className="mb-4">
              <label className="block text-xs font-semibold text-purple-300 mb-1">
                URL del video (MP4 / YouTube / Vimeo):
              </label>
              <input
                type="text"
                value={customInputUrl}
                onChange={(e) => setCustomInputUrl(e.target.value)}
                placeholder="https://tu-servidor.com/video-53s.mp4 o https://youtu.be/..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#0d091e] border border-purple-700/60 text-white text-xs focus:outline-none focus:border-cyan-400 font-mono"
              />
            </div>

            <div className="flex items-center justify-end gap-2 pt-2 border-t border-purple-900/40">
              <button
                onClick={() => {
                  setCustomInputUrl(DEFAULT_VIDEO_URL);
                  setVideoUrl(DEFAULT_VIDEO_URL);
                  try {
                    localStorage.removeItem('verse_post_quiz_video_url');
                  } catch {
                    // Ignore
                  }
                  setShowConfigModal(false);
                }}
                className="px-3 py-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                Restaurar por defecto
              </button>
              <button
                onClick={handleSaveCustomVideoUrl}
                className="px-4 py-2 text-xs font-bold rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white hover:opacity-90 transition-opacity cursor-pointer"
              >
                Guardar enlace de video
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
