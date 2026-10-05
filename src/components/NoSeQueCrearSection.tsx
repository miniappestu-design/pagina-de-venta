import React, { useState } from 'react';
import { 
  Sparkles, 
  HelpCircle, 
  Search, 
  Layers, 
  Smartphone, 
  ArrowRight, 
  Check, 
  Cpu, 
  Zap, 
  Flame,
  LayoutGrid
} from 'lucide-react';

interface NicheSimulation {
  id: string;
  name: string;
  icon: string;
  niche: string;
  problem: string;
  need: string;
  opportunity: string;
  idea: string;
  structure: string[];
  finalApp: string;
}

const SIMULATIONS: NicheSimulation[] = [
  {
    id: 'nutricion',
    name: 'Nutrición & Hábitos',
    icon: '🥑',
    niche: 'Alimentación saludable y control de peso',
    problem: 'La gente compra PDFs de dietas pero no sabe calcular porciones ni qué cocinar hoy.',
    need: 'Calcular macros al instante y tener recetas prácticas con lo que hay en el refrigerador.',
    opportunity: 'Sustituir el PDF de 50 páginas por una herramienta de 3 toques en el celular.',
    idea: 'NutriFácil: Asistente interactivo de porciones y generador de menú semanal.',
    structure: [
      'Pantalla 1: Calculadora rápida de macros y calorías según meta',
      'Pantalla 2: Generador de menú del día con 3 ingredientes',
      'Pantalla 3: Contador visual de vasos de agua diarios',
    ],
    finalApp: 'MiniApp interactiva guardada en la pantalla de inicio del usuario.',
  },
  {
    id: 'mascotas',
    name: 'Cuidado de Mascotas',
    icon: '🐾',
    niche: 'Dueños de perros y gatos primerizos',
    problem: 'Olvidan fechas de vacunas, desparasitaciones y no saben cuánto alimento darle a su cachorro.',
    need: 'Calculadora de ración según edad y peso + alertas simples de calendario.',
    opportunity: 'Veterinarias y adiestradores pueden entregar esta MiniApp y fidelizar clientes.',
    idea: 'DoggoCare: Calculador de ración y cartilla digital de vacunas.',
    structure: [
      'Pantalla 1: Selector de raza, edad y peso con cálculo de gramos exactos',
      'Pantalla 2: Cartilla interactiva de vacunas con semáforo de vencimiento',
      'Pantalla 3: Botón de consulta directa por WhatsApp con el veterinario',
    ],
    finalApp: 'Herramienta de fidelización que los clientes consultan todos los meses.',
  },
  {
    id: 'finanzas',
    name: 'Finanzas Personales',
    icon: '💵',
    niche: 'Jóvenes profesionales que quieren salir de deudas',
    problem: 'Las plantillas de Excel en celular son incómodas y nadie las llena a diario.',
    need: 'Un simulador de bola de nieve de deudas que muestre fecha exacta de libertad financiera.',
    opportunity: 'Un asesor financiero o creador de contenido que vende este simulador por US$19.',
    idea: 'DeudaCero: Simulador interactivo del método bola de nieve.',
    structure: [
      'Pantalla 1: Registro rápido de deudas e intereses con barra visual',
      'Pantalla 2: Simulación comparativa (Mínimo vs. Abono extra)',
      'Pantalla 3: Plan de acción mes a mes con fecha exacta de liquidación',
    ],
    finalApp: 'MiniApp interactiva que sustituye complejas hojas de cálculo.',
  },
  {
    id: 'educacion',
    name: 'Educación & Cursos',
    icon: '📚',
    niche: 'Estudiantes preparando exámenes o certificaciones',
    problem: 'Leer textos largos aburre y la retención pasiva de información es baja.',
    need: 'Tarjetas de memorización rápida y quizzes interactivos con retroalimentación inmediata.',
    opportunity: 'Profesores o academias que complementan sus clases con un entrenador móvil.',
    idea: 'EstudiaPro: Entrenador móvil de preguntas clave y repaso espaciado.',
    structure: [
      'Pantalla 1: Selector de módulo o tema a evaluar',
      'Pantalla 2: Quizzes interactivos con explicación al instante',
      'Pantalla 3: Barra de dominio porcentual por temática',
    ],
    finalApp: 'Herramienta de estudio adictiva y gamificada para celular.',
  },
  {
    id: 'negocios',
    name: 'Servicios & Negocios',
    icon: '✂️',
    niche: 'Barberías, salones o talleres mecánicos',
    problem: 'Pasan horas en WhatsApp respondiendo precios, servicios y cotizaciones básicas.',
    need: 'Cotizador interactivo donde el cliente elija servicios y vea presupuesto al instante.',
    opportunity: 'Agencias o autónomos que construyen y entregan cotizadores interactivos a negocios locales.',
    idea: 'CotizaFácil: Presupuestador móvil con envío directo de resumen.',
    structure: [
      'Pantalla 1: Selector visual de servicios con precios transparentes',
      'Pantalla 2: Suma automática y descuentos por paquetes',
      'Pantalla 3: Confirmación y envío del detalle listo a WhatsApp',
    ],
    finalApp: 'MiniApp que ahorra 15 horas semanales de atención al cliente.',
  },
];

export const NoSeQueCrearSection: React.FC = () => {
  const [selectedSim, setSelectedSim] = useState<NicheSimulation>(SIMULATIONS[0]);
  const [activeStep, setActiveStep] = useState<number>(4);

  return (
    <section id="no-se-que-crear" className="w-full max-w-5xl mx-auto px-4 py-16 sm:py-24">
      {/* Psychological Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/70 border border-purple-800/40 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4">
          <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
          <span>El Obstáculo Más Común</span>
        </div>

        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 text-balance">
          "¿PERO QUÉ PASA SI NO SÉ QUÉ CREAR?"
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed text-balance">
          Muchas personas piensan que para crear una MiniApp necesitan ser expertos, tener una idea revolucionaria o un nicho ya definido. <span className="text-cyan-300 font-semibold">La realidad es exactamente la contraria.</span>
        </p>
      </div>

      {/* The Mindset Shift Graphic */}
      <div className="bg-[#120d28]/80 border border-purple-800/40 rounded-3xl p-6 sm:p-10 mb-14 relative overflow-hidden backdrop-blur-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: The Doubt */}
          <div className="space-y-4">
            <span className="text-xs uppercase font-bold text-rose-400 tracking-wider flex items-center gap-1.5">
              <span>✕</span> Lo que la mayoría cree
            </span>

            <div className="bg-[#191038]/70 border border-rose-900/30 rounded-2xl p-5 space-y-3">
              <div className="flex items-center gap-3 text-slate-300 text-sm">
                <span className="text-rose-400 font-bold">"</span>
                <span className="italic">No sé qué crear. No se me ocurre ninguna idea.</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300 text-sm">
                <span className="text-rose-400 font-bold">"</span>
                <span className="italic">No sé programar ni entiendo de tecnología.</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300 text-sm">
                <span className="text-rose-400 font-bold">"</span>
                <span className="italic">No tengo un nicho definido ni seguidores.</span>
              </div>
            </div>

            <p className="text-xs text-slate-400">
              Esta parálisis hace que miles de personas nunca comiencen.
            </p>
          </div>

          {/* Right: The Solution in Verse */}
          <div className="space-y-4">
            <span className="text-xs uppercase font-bold text-cyan-400 tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              Cómo funciona con La Fábrica de MiniApps Verse
            </span>

            {/* Pipeline Step by Step */}
            <div className="bg-gradient-to-br from-[#1b1240] to-[#120b2e] border border-cyan-500/30 rounded-2xl p-5 shadow-lg shadow-purple-950/40">
              <div className="flex items-center justify-between gap-1 text-[11px] font-bold text-slate-300 overflow-x-auto pb-1">
                <span className="px-2 py-1 bg-purple-900/40 rounded text-cyan-300 whitespace-nowrap">NICHOS</span>
                <span className="text-purple-400">→</span>
                <span className="px-2 py-1 bg-purple-900/40 rounded text-cyan-300 whitespace-nowrap">PROBLEMAS</span>
                <span className="text-purple-400">→</span>
                <span className="px-2 py-1 bg-purple-900/40 rounded text-cyan-300 whitespace-nowrap">NECESIDADES</span>
                <span className="text-purple-400">→</span>
                <span className="px-2 py-1 bg-purple-900/40 rounded text-cyan-300 whitespace-nowrap">OPORTUNIDADES</span>
                <span className="text-purple-400">→</span>
                <span className="px-2 py-1 bg-cyan-900/60 rounded text-emerald-300 font-extrabold whitespace-nowrap">IDEAS</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-200 mt-4 leading-relaxed">
                <strong className="text-white">Precisamente por eso creamos una herramienta dentro de La Fábrica de MiniApps Verse.</strong> No tienes que inventar nada: la herramienta mapea los problemas cotidianos más comunes y te entrega la estructura exacta lista para convertirse en una MiniApp.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* HISTORIA VISUAL DE TRANSFORMACIÓN */}
      <div className="mb-14">
        <div className="text-center mb-8">
          <span className="text-xs uppercase font-bold text-purple-400 tracking-wider block mb-1">
            EL RECORRIDO DE CREACIÓN
          </span>
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Historia Visual de Transformación
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-lg mx-auto">
            Mira cómo una duda inicial se transforma progresivamente en una experiencia digital interactiva:
          </p>
        </div>

        {/* 5-step transformation pipeline */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
          {[
            {
              step: '1',
              title: 'NO SÉ QUÉ CREAR',
              desc: 'Entras sin una idea o con dudas sobre qué nicho elegir.',
              icon: HelpCircle,
              color: 'border-slate-700 bg-[#140e2d]/60 text-slate-300',
            },
            {
              step: '2',
              title: 'ENCUENTRO UNA OPORTUNIDAD',
              desc: 'La herramienta escanea fricciones cotidianas no resueltas.',
              icon: Search,
              color: 'border-purple-800/60 bg-[#181138]/70 text-purple-300',
            },
            {
              step: '3',
              title: 'DESCUBRO UNA IDEA',
              desc: 'Aparece una solución clara en formato interactivo ágil.',
              icon: Zap,
              color: 'border-indigo-700/60 bg-[#1d1445]/80 text-indigo-300',
            },
            {
              step: '4',
              title: 'ESTRUCTURO MI MINIAPP',
              desc: 'Defines 3 o 4 pantallas simples con botones y campos útiles.',
              icon: Layers,
              color: 'border-cyan-700/60 bg-[#1a174a]/80 text-cyan-300',
            },
            {
              step: '5',
              title: 'CREO MI EXPERIENCIA INTERACTIVA',
              desc: 'La IA la convierte en una MiniApp viva lista para usar en móvil.',
              icon: Smartphone,
              color: 'border-emerald-500/60 bg-[#0f2438]/90 text-emerald-300',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-2xl border transition-all flex flex-col justify-between ${item.color}`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono font-bold opacity-75">FASE 0{item.step}</span>
                  <item.icon className="w-4 h-4" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold uppercase tracking-tight text-white mb-1.5 leading-snug">
                  {item.title}
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* "IMAGINA ESTO" - Interactive Exploration Tool Simulation */}
      <div className="bg-[#120d2a] border border-cyan-500/40 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-purple-950/50 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-purple-900/40">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 block mb-1">
                EXPERIENCIA INTERACTIVA EN VIVO
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                "IMAGINA ESTO..."
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Toca cualquier nicho para ver cómo la herramienta transforma la falta de idea en una MiniApp real:
              </p>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-auto bg-[#1b1242] px-3 py-1.5 rounded-xl border border-purple-700/40 text-xs text-purple-200">
              <Cpu className="w-4 h-4 text-cyan-300 animate-pulse" />
              <span>Simulador de La Fábrica</span>
            </div>
          </div>

          {/* Interactive Niche Selector Buttons */}
          <div className="flex flex-wrap gap-2 mb-8">
            {SIMULATIONS.map((sim) => (
              <button
                key={sim.id}
                onClick={() => setSelectedSim(sim)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                  selectedSim.id === sim.id
                    ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-md shadow-purple-900/50 scale-[1.02]'
                    : 'bg-[#181136] hover:bg-[#22184d] text-slate-300 border border-purple-800/40'
                }`}
              >
                <span>{sim.icon}</span>
                <span>{sim.name}</span>
              </button>
            ))}
          </div>

          {/* Live Pipeline View for Selected Niche */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Step breakdown */}
            <div className="lg:col-span-7 space-y-3.5">
              <div className="bg-[#181038]/80 border border-purple-800/40 rounded-xl p-3.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-purple-300 block mb-1">
                  1. NICHO & CONTEXTO
                </span>
                <p className="text-sm font-medium text-white">{selectedSim.niche}</p>
              </div>

              <div className="bg-[#181038]/80 border border-purple-800/40 rounded-xl p-3.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-rose-300 block mb-1">
                  2. PROBLEMA DETECTADO
                </span>
                <p className="text-sm text-slate-200">{selectedSim.problem}</p>
              </div>

              <div className="bg-[#181038]/80 border border-purple-800/40 rounded-xl p-3.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300 block mb-1">
                  3. NECESIDAD NO RESUELTA
                </span>
                <p className="text-sm text-slate-200">{selectedSim.need}</p>
              </div>

              <div className="bg-[#181038]/80 border border-cyan-800/40 rounded-xl p-3.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-300 block mb-1">
                  4. OPORTUNIDAD ENCONTRADA
                </span>
                <p className="text-sm text-slate-200">{selectedSim.opportunity}</p>
              </div>
            </div>

            {/* Generated App Outcome Card */}
            <div className="lg:col-span-5 bg-gradient-to-b from-[#1c1345] to-[#120c2d] border-2 border-cyan-400/50 rounded-2xl p-5 flex flex-col justify-between shadow-xl">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-400 text-cyan-300 text-[10px] font-bold uppercase tracking-wider mb-3">
                  <Sparkles className="w-3 h-3" />
                  <span>RESULTADO GENERADO</span>
                </div>

                <h4 className="font-heading text-lg font-bold text-white mb-2 leading-snug">
                  {selectedSim.idea}
                </h4>

                <span className="text-[11px] font-semibold text-purple-300 uppercase tracking-wider block mb-2">
                  Estructura de la MiniApp:
                </span>

                <ul className="space-y-2 mb-4">
                  {selectedSim.structure.map((screen, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                      <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{screen}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-purple-800/50 pt-3">
                <span className="text-[10px] uppercase tracking-wider text-slate-400 block">
                  Experiencia final:
                </span>
                <p className="text-xs font-semibold text-emerald-300 mt-0.5">
                  {selectedSim.finalApp}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Takeaway */}
          <div className="mt-8 pt-6 border-t border-purple-900/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs sm:text-sm text-slate-300 text-center sm:text-left">
              <strong className="text-white">¿Ves la diferencia?</strong> No necesitas empezar con una idea genial. Con el Método y las herramientas de La Fábrica, cada problema cotidiano se convierte en una MiniApp interactiva.
            </p>

            <a
              href="#demostracion"
              className="px-5 py-2.5 rounded-xl bg-[#20184b] hover:bg-[#2b2066] border border-cyan-400/40 text-cyan-300 text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors flex items-center gap-1.5"
            >
              <span>Ver demostración real de NutriFácil</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
