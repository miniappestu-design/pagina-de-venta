import React, { useState } from 'react';
import { 
  Sparkles, 
  Smartphone, 
  Flame, 
  Activity, 
  Droplet, 
  Utensils, 
  Calendar, 
  CheckCircle, 
  ChevronRight,
  FileText,
  XCircle,
  Apple
} from 'lucide-react';

interface NutriFacilProps {
  hotmartLink?: string;
  whatsappLink?: string;
}

export const NutriFacilInteractiveDemo: React.FC<NutriFacilProps> = ({
  hotmartLink = 'https://pay.hotmart.com/T106939828K?checkoutMode=10',
  whatsappLink = 'https://wa.me/56932051719',
}) => {
  // Simulator State
  const [activeTab, setActiveTab] = useState<'macros' | 'plan' | 'recetas' | 'agua'>('macros');
  
  // Macros Calculator State
  const [weightKg, setWeightKg] = useState<number>(72);
  const [goal, setGoal] = useState<'perder' | 'mantener' | 'ganar'>('perder');
  
  // Water tracker
  const [waterGlasses, setWaterGlasses] = useState<number>(5);

  // Selected Day in Plan
  const [selectedDay, setSelectedDay] = useState<string>('Hoy');

  // Recipe filter
  const [recipeTime, setRecipeTime] = useState<number>(15);

  // Calculations
  const baseCalories = goal === 'perder' ? weightKg * 24 : goal === 'ganar' ? weightKg * 34 : weightKg * 29;
  const proteinGrams = Math.round(weightKg * (goal === 'perder' ? 2.0 : goal === 'ganar' ? 2.2 : 1.7));
  const carbsGrams = Math.round((baseCalories * 0.45) / 4);
  const fatGrams = Math.round((baseCalories * 0.25) / 9);

  return (
    <section id="demostracion" className="w-full max-w-5xl mx-auto px-4 py-16 sm:py-24">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span>DEMOSTRACIÓN INTERACTIVA REAL</span>
        </div>

        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 text-balance">
          AHORA MIRA CÓMO PUEDE QUEDAR
        </h2>

        <p className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-white to-cyan-300 mb-2">
          "Esto no es simplemente un PDF. Es una experiencia digital con la que puedes interactuar."
        </p>

        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
          Prueba en tiempo real este simulador funcional de <strong className="text-white">NutriFácil</strong>. Toca los controles y pestañas exactamente como lo haría cualquier usuario en su propio celular.
        </p>
      </div>

      {/* Main Grid: Comparison vs Working Phone Simulator */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: The Radical Difference (PDF vs MiniApp) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#120d28]/80 border border-purple-900/40 rounded-2xl p-6">
            <span className="text-xs uppercase font-bold text-purple-400 tracking-wider block mb-2">
              EL PROBLEMA DE LOS FORMATOS TRADICIONALES
            </span>
            <h3 className="font-heading text-xl font-bold text-white mb-3">
              ¿Por qué un PDF o eBook ya no retiene a tus clientes?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              La gente descarga un archivo PDF, lo abre una vez, se pierde entre páginas llenas de texto y tablas estáticas, y termina olvidándolo en la carpeta de descargas del teléfono.
            </p>

            <div className="mt-4 pt-4 border-t border-purple-900/40 space-y-2">
              <div className="flex items-center gap-2 text-xs text-rose-300">
                <XCircle className="w-4 h-4 shrink-0 text-rose-400" />
                <span>PDF estático: Sin cálculo personalizado</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-rose-300">
                <XCircle className="w-4 h-4 shrink-0 text-rose-400" />
                <span>Letra diminuta que requiere hacer zoom constante</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-rose-300">
                <XCircle className="w-4 h-4 shrink-0 text-rose-400" />
                <span>Cero interacción: Nadie regresa al día siguiente</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#121c2e] to-[#0d1424] border-2 border-emerald-500/40 rounded-2xl p-6 shadow-xl">
            <div className="flex items-center gap-2 text-xs uppercase font-bold text-emerald-300 tracking-wider mb-2">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>EL PODER DE UNA MINIAPP VERSE</span>
            </div>
            <h3 className="font-heading text-xl font-bold text-white mb-2">
              NutriFácil: Tu conocimiento en un formato vivo
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-4">
              Una MiniApp se abre directamente desde el navegador, se puede guardar como ícono en el celular y permite que la persona toque botones, calcule sus metas y reciba retroalimentación instantánea.
            </p>

            <div className="space-y-2 text-xs text-emerald-200">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 shrink-0 text-emerald-400" />
                <span>Ajuste interactivo de peso y metas en segundos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 shrink-0 text-emerald-400" />
                <span>Generador de recetas con lo que el usuario tiene</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 shrink-0 text-emerald-400" />
                <span>Seguimiento diario que genera hábito y retención</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: The Working Phone Simulator */}
        <div className="lg:col-span-7 flex justify-center">
          <div className="w-full max-w-[360px] sm:max-w-[380px] bg-[#0c091d] rounded-[42px] border-[5px] border-slate-700/80 shadow-2xl shadow-purple-950/70 p-3 relative overflow-hidden ring-2 ring-purple-600/30">
            {/* Phone Speaker & Camera Notch */}
            <div className="w-32 h-4 bg-slate-900 rounded-b-xl mx-auto mb-2 flex items-center justify-center gap-2">
              <div className="w-10 h-1.5 bg-slate-800 rounded-full" />
              <div className="w-2 h-2 bg-slate-800 rounded-full" />
            </div>

            {/* In-App Screen Container */}
            <div className="bg-[#110e26] rounded-[32px] overflow-hidden border border-purple-900/40 p-4 text-slate-100 flex flex-col justify-between min-h-[580px]">
              {/* App Bar */}
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-purple-900/40 mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300 font-bold text-xs">
                      🥗
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white leading-tight">NutriFácil</h4>
                      <p className="text-[10px] text-emerald-400 font-medium">Asistente Nutricional</p>
                    </div>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 font-mono">
                    En vivo
                  </span>
                </div>

                {/* Sub Navigation inside Simulator */}
                <div className="grid grid-cols-4 gap-1 p-1 bg-[#181338] rounded-xl mb-4 text-[10px] font-semibold text-slate-300">
                  <button
                    onClick={() => setActiveTab('macros')}
                    className={`py-1.5 rounded-lg transition-colors cursor-pointer ${
                      activeTab === 'macros' ? 'bg-purple-600 text-white shadow-sm' : 'hover:text-white'
                    }`}
                  >
                    Macros
                  </button>
                  <button
                    onClick={() => setActiveTab('plan')}
                    className={`py-1.5 rounded-lg transition-colors cursor-pointer ${
                      activeTab === 'plan' ? 'bg-purple-600 text-white shadow-sm' : 'hover:text-white'
                    }`}
                  >
                    Plan
                  </button>
                  <button
                    onClick={() => setActiveTab('recetas')}
                    className={`py-1.5 rounded-lg transition-colors cursor-pointer ${
                      activeTab === 'recetas' ? 'bg-purple-600 text-white shadow-sm' : 'hover:text-white'
                    }`}
                  >
                    Recetas
                  </button>
                  <button
                    onClick={() => setActiveTab('agua')}
                    className={`py-1.5 rounded-lg transition-colors cursor-pointer ${
                      activeTab === 'agua' ? 'bg-purple-600 text-white shadow-sm' : 'hover:text-white'
                    }`}
                  >
                    Agua
                  </button>
                </div>

                {/* TAB 1: MACROS CALCULATOR */}
                {activeTab === 'macros' && (
                  <div className="space-y-3.5">
                    {/* Weight Slider */}
                    <div className="bg-[#19123b]/90 border border-purple-800/40 rounded-xl p-3">
                      <div className="flex justify-between items-center text-xs mb-1.5">
                        <span className="text-slate-300">Tu peso actual:</span>
                        <span className="font-mono font-bold text-cyan-300 text-sm">{weightKg} kg</span>
                      </div>
                      <input
                        type="range"
                        min="45"
                        max="120"
                        value={weightKg}
                        onChange={(e) => setWeightKg(Number(e.target.value))}
                        className="w-full accent-cyan-400 cursor-pointer h-1.5 bg-purple-950 rounded-lg"
                      />
                    </div>

                    {/* Goal Selector */}
                    <div className="grid grid-cols-3 gap-1.5 text-[10px]">
                      {(['perder', 'mantener', 'ganar'] as const).map((g) => (
                        <button
                          key={g}
                          onClick={() => setGoal(g)}
                          className={`p-2 rounded-lg border font-medium transition-all capitalize cursor-pointer ${
                            goal === g
                              ? 'bg-purple-600/50 border-cyan-400 text-white shadow-sm'
                              : 'bg-[#181136]/60 border-purple-900/50 text-slate-300 hover:text-white'
                          }`}
                        >
                          {g === 'perder' ? '📉 Bajar' : g === 'mantener' ? '⚖️ Mantener' : '💪 Subir'}
                        </button>
                      ))}
                    </div>

                    {/* Live Results Card */}
                    <div className="bg-gradient-to-br from-[#1d1245] to-[#140c30] border border-cyan-500/40 rounded-xl p-3.5 shadow-inner">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300">
                          Calorías Objetivo:
                        </span>
                        <span className="text-lg font-mono font-extrabold text-white">
                          {baseCalories} <span className="text-[10px] text-cyan-300 font-normal">kcal/día</span>
                        </span>
                      </div>

                      {/* Nutrient Bars */}
                      <div className="space-y-2 pt-1 border-t border-purple-800/40 text-[11px]">
                        <div>
                          <div className="flex justify-between text-slate-300 mb-0.5">
                            <span>Proteína</span>
                            <span className="font-mono text-emerald-300 font-bold">{proteinGrams}g</span>
                          </div>
                          <div className="w-full bg-purple-950 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-emerald-400 h-full rounded-full" style={{ width: '65%' }} />
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-slate-300 mb-0.5">
                            <span>Carbohidratos</span>
                            <span className="font-mono text-cyan-300 font-bold">{carbsGrams}g</span>
                          </div>
                          <div className="w-full bg-purple-950 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-cyan-400 h-full rounded-full" style={{ width: '50%' }} />
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-slate-300 mb-0.5">
                            <span>Grasas Saludables</span>
                            <span className="font-mono text-amber-300 font-bold">{fatGrams}g</span>
                          </div>
                          <div className="w-full bg-purple-950 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-amber-400 h-full rounded-full" style={{ width: '40%' }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 2: MEAL PLANNER */}
                {activeTab === 'plan' && (
                  <div className="space-y-2.5">
                    <div className="flex gap-1 overflow-x-auto pb-1 text-[10px]">
                      {['Hoy', 'Mañana', 'Miércoles', 'Jueves', 'Viernes'].map((day) => (
                        <button
                          key={day}
                          onClick={() => setSelectedDay(day)}
                          className={`px-2.5 py-1 rounded-md font-medium whitespace-nowrap cursor-pointer ${
                            selectedDay === day ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-[#1a123d] text-slate-300'
                          }`}
                        >
                          {day}
                        </button>
                      ))}
                    </div>

                    <div className="bg-[#19123b] border border-purple-800/40 rounded-xl p-2.5 text-xs space-y-2">
                      <div className="flex items-start gap-2">
                        <span className="text-base">🍳</span>
                        <div>
                          <span className="font-bold text-white text-[11px] block">Desayuno (420 kcal)</span>
                          <span className="text-[11px] text-slate-300">Omelette de 2 huevos con espinaca y 1 tostada integral.</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-[#19123b] border border-purple-800/40 rounded-xl p-2.5 text-xs space-y-2">
                      <div className="flex items-start gap-2">
                        <span className="text-base">🥗</span>
                        <div>
                          <span className="font-bold text-white text-[11px] block">Almuerzo (580 kcal)</span>
                          <span className="text-[11px] text-slate-300">Pechuga de pollo a la plancha con quinoa y ensalada verde.</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-[#19123b] border border-purple-800/40 rounded-xl p-2.5 text-xs space-y-2">
                      <div className="flex items-start gap-2">
                        <span className="text-base">🍲</span>
                        <div>
                          <span className="font-bold text-white text-[11px] block">Cena Ligera (360 kcal)</span>
                          <span className="text-[11px] text-slate-300">Sopa de calabaza con semillas de chía y queso fresco.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 3: RECETAS */}
                {activeTab === 'recetas' && (
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-300 text-[11px]">Tiempo máximo:</span>
                      <div className="flex gap-1">
                        {[10, 15, 20].map((t) => (
                          <button
                            key={t}
                            onClick={() => setRecipeTime(t)}
                            className={`px-2 py-0.5 rounded text-[10px] font-mono cursor-pointer ${
                              recipeTime === t ? 'bg-emerald-500 text-slate-950 font-bold' : 'bg-[#1b1240] text-slate-300'
                            }`}
                          >
                            {t}m
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="bg-[#19123b] border border-purple-800/40 rounded-xl p-3 text-xs">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-bold text-white">Wrap de Atún & Aguacate</span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-300 font-mono">
                          {recipeTime} min
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-300 mb-2">
                        1 lata de atún al agua, 1/2 aguacate pisado, hojas de lechuga y tortilla integral.
                      </p>
                      <button className="w-full py-1.5 rounded-lg bg-purple-700/60 hover:bg-purple-600 text-[10px] font-bold text-white transition-colors cursor-pointer">
                        Ver paso a paso
                      </button>
                    </div>

                    <div className="bg-[#19123b] border border-purple-800/40 rounded-xl p-3 text-xs">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-bold text-white">Bowl de Yogur Griego & Frutas</span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-300 font-mono">
                          5 min
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-300 mb-2">
                        Yogur sin azúcar, frutos rojos, canela y una cucharada de mantequilla de maní.
                      </p>
                    </div>
                  </div>
                )}

                {/* TAB 4: WATER TRACKER */}
                {activeTab === 'agua' && (
                  <div className="space-y-4 text-center py-2">
                    <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-tr from-cyan-600 to-blue-400 p-[2px] flex items-center justify-center shadow-lg shadow-cyan-900/50">
                      <div className="w-full h-full bg-[#120c2b] rounded-full flex flex-col items-center justify-center">
                        <Droplet className="w-6 h-6 text-cyan-400" />
                        <span className="text-sm font-bold text-white">{waterGlasses}/8</span>
                      </div>
                    </div>

                    <div>
                      <h5 className="text-xs font-bold text-white">Vasos consumidos hoy</h5>
                      <p className="text-[10px] text-cyan-300">
                        {waterGlasses >= 8 ? '¡Meta diaria alcanzada! 🎉' : `${8 - waterGlasses} vasos para tu meta recomendada`}
                      </p>
                    </div>

                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => setWaterGlasses((v) => Math.min(12, v + 1))}
                        className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs cursor-pointer active:scale-95 transition-all"
                      >
                        + Agregar vaso
                      </button>
                      <button
                        onClick={() => setWaterGlasses(0)}
                        className="px-3 py-2 rounded-xl bg-[#1b1342] text-slate-400 text-xs hover:text-white cursor-pointer"
                      >
                        Reiniciar
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom simulator badge */}
              <div className="pt-3 border-t border-purple-900/40 text-center">
                <span className="text-[10px] text-slate-400">
                  💡 Simulación interactiva real creada con la metodología Verse
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Box below NutriFacil demonstration */}
      <div className="mt-12 p-6 sm:p-8 bg-[#120a28]/90 border border-purple-800/40 rounded-3xl text-center max-w-2xl mx-auto shadow-xl">
        <h4 className="font-heading text-lg sm:text-xl font-bold text-white mb-2">
          ¿Te imaginas entregarle a tus clientes o usuarios una herramienta así?
        </h4>
        <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
          Aprende el paso a paso para conceptualizar, estructurar y publicar tu propia MiniApp interactiva en días con Inteligencia Artificial.
        </p>

        <a
          href={hotmartLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-black text-sm sm:text-base shadow-xl shadow-purple-900/40 active:scale-95 transition-all cursor-pointer mb-3"
        >
          <span>QUIERO CREAR MI PRIMERA MINIAPP 🚀</span>
        </a>

        <div className="text-center pt-1">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-emerald-400 hover:text-emerald-300 font-semibold cursor-pointer inline-flex items-center gap-1"
          >
            <span>💬 ¿Tienes dudas sobre cómo aplicarlo a tu caso? Hablar por WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
