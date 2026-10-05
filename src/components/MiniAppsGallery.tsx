import React, { useState } from 'react';
import { 
  Sparkles, 
  GraduationCap, 
  UtensilsCrossed, 
  Dumbbell, 
  HeartPulse, 
  Check, 
  Smartphone,
  ExternalLink
} from 'lucide-react';
import { MINIAPP_EXAMPLES } from '../data/ecosystemData';

export const MiniAppsGallery: React.FC = () => {
  // We exclude NutriFácil here because it has its own dedicated interactive hero section right above
  const galleryItems = MINIAPP_EXAMPLES.filter((item) => item.id !== 'nutrifacil');
  const [selectedId, setSelectedId] = useState<string>(galleryItems[0].id);

  const activeApp = galleryItems.find((app) => app.id === selectedId) || galleryItems[0];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'EDUCACIÓN':
        return <GraduationCap className="w-3.5 h-3.5" />;
      case 'RESTAURANTE Y GASTRONOMÍA':
        return <UtensilsCrossed className="w-3.5 h-3.5" />;
      case 'FITNESS':
        return <Dumbbell className="w-3.5 h-3.5" />;
      case 'BIENESTAR':
        return <HeartPulse className="w-3.5 h-3.5" />;
      default:
        return <Sparkles className="w-3.5 h-3.5" />;
    }
  };

  const getBadgeColor = (category: string) => {
    switch (category) {
      case 'EDUCACIÓN':
        return 'bg-blue-950/80 text-blue-300 border-blue-500/40';
      case 'RESTAURANTE Y GASTRONOMÍA':
        return 'bg-amber-950/80 text-amber-300 border-amber-500/40';
      case 'FITNESS':
        return 'bg-rose-950/80 text-rose-300 border-rose-500/40';
      case 'BIENESTAR':
        return 'bg-emerald-950/80 text-emerald-300 border-emerald-500/40';
      default:
        return 'bg-purple-950/80 text-purple-300 border-purple-500/40';
    }
  };

  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-16 sm:py-20">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs uppercase font-bold text-cyan-400 tracking-wider block mb-1">
          DIVERSIDAD DE NICHOS
        </span>
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3">
          Otros Ejemplos de MiniApps
        </h2>
        <p className="text-xs sm:text-sm text-slate-300">
          Explora cómo diferentes creadores y profesionales transformaron sus conocimientos y negocios en aplicaciones interactivas para móvil:
        </p>
      </div>

      {/* Selector Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {galleryItems.map((app) => (
          <button
            key={app.id}
            onClick={() => setSelectedId(app.id)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
              selectedId === app.id
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-900/50 scale-[1.02]'
                : 'bg-[#150f33] hover:bg-[#1f164b] text-slate-300 border border-purple-800/40'
            }`}
          >
            <span>{app.name}</span>
            <span className={`text-[10px] uppercase px-1.5 py-0.5 rounded border ${getBadgeColor(app.category)}`}>
              {app.category.split(' ')[0]}
            </span>
          </button>
        ))}
      </div>

      {/* Featured App Showcase Card with Phone Mockup */}
      <div className="bg-[#120d2a] border border-purple-700/40 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-purple-950/40">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Information & Key Features */}
          <div className="md:col-span-7 space-y-4">
            <div className="flex items-center gap-2">
              <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider border ${getBadgeColor(activeApp.category)}`}>
                {getCategoryIcon(activeApp.category)}
                <span>{activeApp.category}</span>
              </span>
              <span className="text-xs text-slate-400">Creado por {activeApp.creator}</span>
            </div>

            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {activeApp.name}
            </h3>

            <p className="text-sm font-medium text-cyan-300">
              {activeApp.tagline}
            </p>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {activeApp.description}
            </p>

            {/* Features bullet list */}
            <div className="pt-2 border-t border-purple-900/40">
              <span className="text-[11px] font-bold uppercase tracking-wider text-purple-300 block mb-2">
                Funcionalidades Interactivas:
              </span>
              <ul className="space-y-2">
                {activeApp.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#1a123d] border border-purple-800/40 rounded-xl p-3 text-xs text-purple-200">
              <strong className="text-white">Punto clave:</strong> {activeApp.metricsOrHighlight}
            </div>
          </div>

          {/* Smartphone Mockup */}
          <div className="md:col-span-5 flex justify-center">
            <div className="w-[280px] sm:w-[300px] bg-[#0c091d] rounded-[38px] border-4 border-slate-700/80 shadow-2xl shadow-purple-950/80 p-2.5 relative">
              {/* Notch */}
              <div className="w-24 h-3.5 bg-slate-900 rounded-b-lg mx-auto mb-2 flex items-center justify-center">
                <div className="w-8 h-1 bg-slate-800 rounded-full" />
              </div>

              {/* Screen Mockup */}
              <div className="bg-[#130f2c] rounded-[28px] overflow-hidden border border-purple-900/40 p-4 min-h-[380px] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-2.5 border-b border-purple-900/40 mb-3">
                    <span className="font-heading font-bold text-xs text-white">{activeApp.name}</span>
                    <span className="text-[9px] uppercase px-1.5 py-0.5 rounded bg-purple-950 text-cyan-300 font-mono">
                      Mobile App
                    </span>
                  </div>

                  {/* Mock content based on selected app */}
                  {activeApp.id === 'estudiapro' && (
                    <div className="space-y-2.5 text-left">
                      <div className="bg-[#1c1542] p-2.5 rounded-xl border border-blue-500/30">
                        <span className="text-[10px] text-blue-300 font-semibold block mb-1">MÓDULO 02 · FISIOLOGÍA</span>
                        <p className="text-xs font-bold text-white mb-2">¿Cuál es la función principal de la hemoglobina?</p>
                        <div className="space-y-1 text-[10px]">
                          <div className="p-1.5 rounded bg-blue-900/40 border border-blue-400 text-white font-medium flex items-center justify-between">
                            <span>A) Transporte de oxígeno</span>
                            <span>✓</span>
                          </div>
                          <div className="p-1.5 rounded bg-[#150f33] text-slate-400">
                            <span>B) Digestión de lípidos</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#1c1542] p-2 rounded-xl text-center">
                        <span className="text-[10px] text-slate-400">Progreso de retención:</span>
                        <div className="w-full bg-slate-800 h-1.5 rounded-full mt-1 overflow-hidden">
                          <div className="bg-cyan-400 h-full w-[78%]" />
                        </div>
                        <span className="text-[10px] font-mono text-cyan-300 font-bold mt-1 inline-block">78% Dominado</span>
                      </div>
                    </div>
                  )}

                  {activeApp.id === 'sabores-de-casa' && (
                    <div className="space-y-2.5 text-left">
                      <div className="bg-[#1c1542] p-2 rounded-xl border border-amber-500/30">
                        <span className="text-[10px] text-amber-300 font-semibold block mb-1">FILTROS DEL DÍA</span>
                        <div className="flex gap-1 text-[9px] mb-2">
                          <span className="px-1.5 py-0.5 rounded bg-amber-500 text-slate-950 font-bold">Sin Gluten</span>
                          <span className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">Vegano</span>
                          <span className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">&lt; 20 min</span>
                        </div>
                        <div className="bg-[#140e30] p-2 rounded-lg">
                          <span className="text-xs font-bold text-white block">Risotto de Hongos Silvestres</span>
                          <span className="text-[10px] text-slate-300">Arroz arborio, setas de estación y aceite de trufa.</span>
                        </div>
                      </div>
                      <button className="w-full py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-[10px] font-bold">
                        💬 Pedir por WhatsApp
                      </button>
                    </div>
                  )}

                  {activeApp.id === 'miniar-fitness' && (
                    <div className="space-y-2.5 text-left">
                      <div className="bg-[#1c1542] p-2.5 rounded-xl border border-rose-500/30 text-center">
                        <span className="text-[10px] text-rose-300 font-bold uppercase tracking-wider block">SERIE 03 / 04</span>
                        <span className="text-2xl font-mono font-extrabold text-white my-1 block">00:45</span>
                        <span className="text-[10px] text-slate-400">Descanso activo</span>
                      </div>
                      <div className="bg-[#140e30] p-2 rounded-xl text-[10px] space-y-1">
                        <div className="flex justify-between text-slate-300">
                          <span>Siguiente: Sentadillas búlgaras</span>
                          <span className="text-cyan-300 font-bold">12 reps</span>
                        </div>
                        <div className="flex justify-between text-slate-400">
                          <span>Total sesión hoy:</span>
                          <span>24 min</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeApp.id === 'vidasalud-diabetes' && (
                    <div className="space-y-2.5 text-left">
                      <div className="bg-[#1c1542] p-2.5 rounded-xl border border-emerald-500/30">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-[10px] text-slate-400">Última medición:</span>
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-300 font-bold">
                            EN RANGO
                          </span>
                        </div>
                        <span className="text-xl font-mono font-bold text-white">98 mg/dL</span>
                        <span className="text-[10px] text-slate-400 block mt-0.5">En ayunas (08:15 AM)</span>
                      </div>
                      <div className="bg-[#140e30] p-2 rounded-xl text-[10px]">
                        <span className="text-cyan-300 font-semibold block mb-0.5">Semáforo de Alimentos:</span>
                        <p className="text-slate-300">Avena integral: IG Bajo (55) · Apta para desayuno.</p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-2 border-t border-purple-900/40 text-center">
                  <span className="text-[9px] text-slate-400 font-medium">
                    Experiencia móvil funcional
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
