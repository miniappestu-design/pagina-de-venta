import React, { useState } from 'react';
import { 
  Sparkles, 
  Layers, 
  Target, 
  Cpu, 
  Search, 
  UserCheck, 
  BarChart3, 
  Code2, 
  Lock, 
  ArrowRight, 
  CheckCircle2, 
  HelpCircle, 
  ChevronRight,
  Flame,
  Smartphone,
  Check
} from 'lucide-react';

interface CreadorMiniAppsDemoProps {
  hotmartLink: string;
  whatsappLink?: string;
}

// 4 Main Markets from official tool
const MARKET_CATEGORIES = [
  {
    id: 'deseos_primarios',
    name: 'DESEOS HUMANOS PRIMARIOS',
    icon: '⚡',
    badge: 'Alta Intención',
    subniches: [
      { name: 'Dinero y Libertad', pain: 'Personas buscando generar ingresos o controlar deudas sin hojas de cálculo complejas.', need: 'Simulador de bola de nieve de deudas o cotizador de honorarios.', offer: 'Simulador Financiero Móvil + Plan de Liquidación en 3 Pasos', customer: 'Profesionales independientes de 25-45 años con múltiples tarjetas y deseo de orden.', radiography: 'Alta saturación de excels aburridos; demanda desatendida de calculadoras en celular.' },
      { name: 'Salud y Apariencia', pain: 'Compran guías nutricionales en PDF pero no saben calcular macros ni qué cocinar.', need: 'Calculadora interactiva en 3 toques + generador de menú.', offer: 'NutriFácil: Asistente Nutricional Móvil + Calculadora de Macros en Vivo', customer: 'Personas de 20-50 años que buscan mejorar su composición corporal sin dietas rígidas.', radiography: 'Gran volumen de búsquedas en Meta Ads para retos fitness; baja tasa de compleción de PDFs tradicionales.' },
      { name: 'Relaciones', pain: 'Dificultad para mantener acuerdos de pareja, citas creativas o comunicación afectiva.', need: 'Generador de citas semanales y acuerdos de convivencia.', offer: 'App de Acuerdos de Pareja + Ruleta de Citas Creativas', customer: 'Parejas jóvenes con rutinas demandantes que buscan reconectar.', radiography: 'Micro-nichos virales en redes con alta compartición orgánica en historias.' },
      { name: 'Autoestima e Identidad', pain: 'Falta de disciplina en hábitos matutinos y mentalidad.', need: 'Checklist interactivo de afirmaciones y medidor de energía.', offer: 'Tracker de Energía y Afirmaciones en 3 Minutos', customer: 'Emprendedores y estudiantes en busca de foco y constancia diaria.', radiography: 'Comunidades masivas en TikTok buscando herramientas de enfoque rápido.' },
    ],
  },
  {
    id: 'emocionales_fuertes',
    name: 'MERCADOS EMOCIONALMENTE FUERTES',
    icon: '❤️‍🔥',
    badge: 'Urgencia Emocional',
    subniches: [
      { name: 'Ansiedad y Dolor Emocional', pain: 'Sobrecarga de pensamientos en momentos de crisis sin técnica guiada inmediata.', need: 'Botón de pausa 4-7-8 con temporizador visual y registro de detonantes.', offer: 'Botón de Calma Rápida: Ejercicios de Respiración + Bitácora Emocional', customer: 'Personas con altos niveles de estrés laboral o estudio.', radiography: 'Público que busca soluciones que no requieran leer largos textos en momentos difíciles.' },
      { name: 'Sexualidad y Deseo', pain: 'Falta de espacios seguros y discretos para explorar preguntas íntimas en pareja.', need: 'Cuestionario interactivo de deseos y tarjetas de conversación.', offer: 'Juego de Preguntas Íntimas en Pareja en Formato Móvil Seguro', customer: 'Parejas adultas que buscan avivar la complicidad con discreción.', radiography: 'Alta tasa de conversión cuando la herramienta se entrega como un enlace privado sin descargas invasivas.' },
      { name: 'Estatus y Reconocimiento', pain: 'Profesionales que no saben cómo comunicar el valor de su portfolio a clientes.', need: 'Auditor interactivo de propuesta de valor y cotizador premium.', offer: 'Auditor de Propuesta Comercial + Cotizador de Servicios de Alto Valor', customer: 'Consultores, diseñadores y freelancers que cobran por debajo del mercado.', radiography: 'Mercado B2B dispuesto a invertir para profesionalizar su imagen en minutos.' },
      { name: 'Espiritualidad y Propósito', pain: 'Desconexión de la rutina y dificultad para crear espacios de gratitud activa.', need: 'Oráculo de preguntas de reflexión y bitácora de gratitud guiada.', offer: 'Diario Interactivo de Propósito y Reflexión Diaria', customer: 'Buscadores de bienestar interior y crecimiento personal.', radiography: 'Comunidad altamente fiel con hábitos diarios consolidados.' },
    ],
  },
  {
    id: 'transformacion',
    name: 'MERCADOS DE TRANSFORMACIÓN',
    icon: '🚀',
    badge: 'Orientado a Resultados',
    subniches: [
      { name: 'Marketing y Negocios', pain: 'Negocios locales perdiendo clientes en WhatsApp respondiendo precios manualmente.', need: 'Cotizador interactivo móvil que envía el presupuesto formateado al chat.', offer: 'CotizaFácil: Presupuestador Móvil para Negocios y Servicios', customer: 'Dueños de barberías, salones, clínicas, talleres o academias.', radiography: 'Millones de negocios en Latinoamérica operando 100% por WhatsApp.' },
      { name: 'IA y Productividad', pain: 'Profesionales abrumados por tantas herramientas de IA sin saber cuál aplicar.', need: 'Recomendador interactivo de herramientas según tarea profesional.', offer: 'Selector Inteligente de Herramientas IA por Ocupación', customer: 'Trabajadores del conocimiento buscando ahorrar 10 horas semanales.', radiography: 'Interés exponencial en prompts y utilidades de automatización rápida.' },
      { name: 'Educación y Habilidades', pain: 'Estudiantes memorizando resúmenes pasivos que olvidan a los 3 días.', need: 'Flashcards activas con repetición espaciada y quizzes temáticos.', offer: 'EstudiaPro: Entrenador de Preguntas y Dominio Conceptual', customer: 'Estudiantes universitarios o preparando oposiciones/certificaciones.', radiography: 'Formatos interactivos superan en retención a los cursos grabados tradicionales.' },
      { name: 'Carrera y Profesión', pain: 'Candidatos que no saben calcular su pretensión salarial ni negociar aumentos.', need: 'Calculadora de valor hora y simulador de negociación salarial.', offer: 'Calculadora de Valor Profesional + Guía de Negociación Salarial', customer: 'Empleados buscando dar su próximo salto profesional.', radiography: 'Tema de alto interés con bajo contenido práctico en formato interactivo.' },
    ],
  },
  {
    id: 'lifestyle_pasiones',
    name: 'LIFESTYLE & PASIONES',
    icon: '🌿',
    badge: 'Estilo de Vida',
    subniches: [
      { name: 'Belleza y Estética', pain: 'Personas comprando productos de skincare sin conocer su tipo exacto de piel.', need: 'Quiz de diagnóstico facial + rutina personalizada según presupuesto.', offer: 'Test de Diagnóstico de Piel + Rutina Mañana/Noche a Medida', customer: 'Consumidores de cosmética que buscan recomendaciones honestas.', radiography: 'Formatos de quiz diagnóstico en Meta Ads logran los costos por lead más bajos.' },
      { name: 'Casa y Rutina', pain: 'Familias con caos en la limpieza y mantenimiento del hogar semanal.', need: 'Planificador interactivo de tareas con roles rotativos familiares.', offer: 'Organizador Semanal de Hogar + Checklists de Mantenimiento', customer: 'Parejas y familias buscando equilibrio en tareas domésticas.', radiography: 'Demanda de organización simple sin la rigidez de herramientas corporativas.' },
      { name: 'Hobbies y Comunidades', pain: 'Principiantes en jardinería o cocina que olvidan regar o tiempos de cocción.', need: 'Temporizador y guía interactiva de cuidados por especie o receta.', offer: 'Guía Viva de Cuidados de Plantas y Alertas de Riego', customer: 'Aficionados a la botánica urbana y huertos en casa.', radiography: 'Público apasionado con alta disposición a usar herramientas visuales.' },
      { name: 'Maternidad y Familia', pain: 'Padres primerizos inseguros con la introducción de alimentos (BLW) y alergias.', need: 'Buscador de cortes seguros de alimentos y registro de alérgenos.', offer: 'Buscador Interactivo de Cortes Seguros de Alimentos para Bebés', customer: 'Madres y padres en etapa de alimentación complementaria (6-12 meses).', radiography: 'Nicho con altísima necesidad de seguridad visual e inmediatez en el móvil.' },
    ],
  },
];

export const CreadorMiniAppsDemo: React.FC<CreadorMiniAppsDemoProps> = ({ 
  hotmartLink, 
  whatsappLink = 'https://wa.me/56932051719' 
}) => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState<number>(0);
  const [selectedSubnicheIndex, setSelectedSubnicheIndex] = useState<number>(0);
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isLockModalOpen, setIsLockModalOpen] = useState<boolean>(false);
  const [lockedActionName, setLockedActionName] = useState<string>('');

  const currentCategory = MARKET_CATEGORIES[selectedCategoryIndex];
  const currentSubniche = currentCategory.subniches[selectedSubnicheIndex] || currentCategory.subniches[0];

  const triggerLockedAction = (actionTitle: string) => {
    setLockedActionName(actionTitle);
    setIsLockModalOpen(true);
  };

  return (
    <section id="creador-demo" className="w-full max-w-5xl mx-auto px-4 py-16 sm:py-24 border-t border-purple-900/30">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-400 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
          <Cpu className="w-3.5 h-3.5 text-cyan-300 animate-pulse" />
          <span>HERRAMIENTA OFICIAL DEL ECOSISTEMA</span>
        </div>

        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
          CREADOR DE MINIAPPS VERSE
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed text-balance">
          Prueba en vivo la demostración de nuestra herramienta. Toca los nichos, explora las oportunidades y descubre cómo pasamos de un problema humano a una estructura de MiniApp lista:
        </p>
      </div>

      {/* Demo Main Interface Container */}
      <div className="bg-[#120d2a] border-2 border-purple-600/50 rounded-3xl p-5 sm:p-8 shadow-2xl shadow-purple-950/70 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-purple-600/15 via-cyan-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        {/* Demo Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-purple-900/50 mb-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-cyan-400 p-[1px]">
              <div className="w-full h-full bg-[#0d0a1d] rounded-[7px] flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-cyan-300" />
              </div>
            </div>
            <div>
              <span className="font-heading font-bold text-sm text-white block leading-tight">
                Creador de MiniApps Verse
              </span>
              <span className="text-[10px] text-cyan-300 font-mono">
                Modo Demostración Interactiva
              </span>
            </div>
          </div>

          {/* Stepper Tabs */}
          <div className="flex items-center gap-1 text-[11px] overflow-x-auto pb-1 max-w-full">
            {[
              { num: 1, label: 'Nicho/Mercado' },
              { num: 2, label: 'Oportunidad' },
              { num: 3, label: 'Oferta' },
              { num: 4, label: 'Cliente Ideal' },
              { num: 5, label: 'Radiografía' },
              { num: 6, label: 'MiniApp' },
            ].map((s) => (
              <button
                key={s.num}
                onClick={() => setCurrentStep(s.num)}
                className={`px-2.5 py-1 rounded-lg font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  currentStep === s.num
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'bg-[#181136] text-slate-400 hover:text-slate-200'
                }`}
              >
                {s.num}. {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* PASO 1: NICHO / MERCADO */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 block mb-1">
                PASO 1 DE LA DEMO
              </span>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-2">
                NICHO / MERCADO
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Selecciona una de las 4 grandes categorías de mercado de nuestra herramienta real para ver sus subnichos con alta demanda:
              </p>
            </div>

            {/* 4 Market Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {MARKET_CATEGORIES.map((cat, idx) => {
                const isSelected = selectedCategoryIndex === idx;
                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategoryIndex(idx);
                      setSelectedSubnicheIndex(0);
                    }}
                    className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'bg-gradient-to-b from-[#221650] to-[#160d36] border-cyan-400 shadow-lg shadow-purple-950/60 ring-1 ring-cyan-400/40'
                        : 'bg-[#181136]/70 hover:bg-[#1e1544] border-purple-900/40 text-slate-300'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl">{cat.icon}</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-950 text-cyan-300 border border-purple-800/40">
                          {cat.badge}
                        </span>
                      </div>
                      <h4 className="font-heading text-xs sm:text-sm font-bold text-white leading-snug">
                        {cat.name}
                      </h4>
                    </div>

                    <div className="mt-3 pt-2 border-t border-purple-900/40 text-[11px] flex items-center justify-between font-semibold">
                      <span className={isSelected ? 'text-cyan-300' : 'text-slate-400'}>
                        {cat.subniches.length} Subnichos
                      </span>
                      {isSelected && <Check className="w-3.5 h-3.5 text-cyan-400" />}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Subnichos for current category */}
            <div className="bg-[#181138]/90 border border-purple-800/40 rounded-2xl p-4 sm:p-6">
              <span className="text-xs font-bold uppercase tracking-wider text-purple-300 block mb-3">
                Subnichos activos en "{currentCategory.name}":
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 mb-6">
                {currentCategory.subniches.map((sub, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedSubnicheIndex(i)}
                    className={`p-3 rounded-xl border text-left text-xs font-semibold transition-all cursor-pointer ${
                      selectedSubnicheIndex === i
                        ? 'bg-cyan-500 text-slate-950 font-bold border-cyan-400 shadow-md'
                        : 'bg-[#120a28] hover:bg-[#1d1240] border-purple-900/50 text-slate-200'
                    }`}
                  >
                    {sub.name}
                  </button>
                ))}
              </div>

              {/* Subniche Summary */}
              <div className="bg-[#120a28] border border-purple-900/40 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] uppercase font-bold text-cyan-400 tracking-wider block mb-1">
                    SUB-NICHO SELECCIONADO
                  </span>
                  <h5 className="font-heading text-base font-bold text-white">
                    {currentSubniche.name}
                  </h5>
                  <p className="text-xs text-slate-300 mt-0.5">
                    {currentSubniche.pain}
                  </p>
                </div>

                <button
                  onClick={() => setCurrentStep(2)}
                  className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs whitespace-nowrap transition-colors flex items-center justify-center gap-1.5 cursor-pointer self-start sm:self-auto"
                >
                  <span>Paso 2: Oportunidad</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* PASO 2: ENCUENTRA UNA OPORTUNIDAD */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 block mb-1">
                PASO 2 DE LA DEMO
              </span>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-2">
                ENCUENTRA UNA OPORTUNIDAD
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                La herramienta detecta las situaciones, dolores y necesidades que un PDF tradicional no resuelve:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#181138]/90 border border-rose-800/40 rounded-2xl p-5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-rose-300 block mb-2">
                  PROBLEMA / FRICCIÓN DEL USUARIO
                </span>
                <p className="text-sm font-medium text-white mb-3">
                  "{currentSubniche.pain}"
                </p>
                <p className="text-xs text-slate-300">
                  El formato tradicional (eBook o documento) genera alta fricción porque exige cálculos manuales o lectura pasiva.
                </p>
              </div>

              <div className="bg-[#181138]/90 border border-emerald-800/40 rounded-2xl p-5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-300 block mb-2">
                  NECESIDAD NO RESUELTA (OPORTUNIDAD)
                </span>
                <p className="text-sm font-medium text-white mb-3">
                  "{currentSubniche.need}"
                </p>
                <p className="text-xs text-slate-300">
                  Una MiniApp interactiva en el celular resuelve esto en menos de 3 toques, creando retención inmediata.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <button
                onClick={() => triggerLockedAction('Generar más oportunidades automáticas con IA')}
                className="px-4 py-2.5 rounded-xl bg-[#1b1240] hover:bg-[#251957] border border-purple-700/50 text-purple-200 text-xs font-semibold transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Lock className="w-3.5 h-3.5 text-cyan-400" />
                <span>Escanear más oportunidades con IA...</span>
              </button>

              <button
                onClick={() => setCurrentStep(3)}
                className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs whitespace-nowrap transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>Paso 3: Oferta del Producto</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* PASO 3: OFERTA DEL PRODUCTO */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 block mb-1">
                PASO 3 DE LA DEMO
              </span>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-2">
                OFERTA DEL PRODUCTO
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Estructura de la propuesta interactiva inspirada en nuestra herramienta real:
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1d1245] to-[#120a2e] border-2 border-cyan-400/50 rounded-2xl p-6 shadow-xl">
              <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-300 block mb-2">
                CONCEPTO DE LA MINIAPP
              </span>
              <h4 className="font-heading text-xl font-extrabold text-white mb-3">
                {currentSubniche.offer}
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-purple-900/50 text-xs">
                <div className="bg-[#120826]/70 p-3 rounded-xl border border-purple-800/40">
                  <span className="text-purple-300 font-bold block mb-1">1. Entrada</span>
                  <p className="text-slate-300">Quiz o selector de situación en 3 preguntas rápidas.</p>
                </div>
                <div className="bg-[#120826]/70 p-3 rounded-xl border border-purple-800/40">
                  <span className="text-purple-300 font-bold block mb-1">2. Motor</span>
                  <p className="text-slate-300">Calculadora dinámica o filtro de decisiones en tiempo real.</p>
                </div>
                <div className="bg-[#120826]/70 p-3 rounded-xl border border-purple-800/40">
                  <span className="text-purple-300 font-bold block mb-1">3. Salida</span>
                  <p className="text-slate-300">Plan personalizado listo para guardar en el celular.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <button
                onClick={() => triggerLockedAction('Generar la estructura técnica completa de la oferta')}
                className="px-4 py-2.5 rounded-xl bg-[#1b1240] hover:bg-[#251957] border border-purple-700/50 text-purple-200 text-xs font-semibold transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Lock className="w-3.5 h-3.5 text-cyan-400" />
                <span>Generar estructura completa en código/prompts...</span>
              </button>

              <button
                onClick={() => setCurrentStep(4)}
                className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs whitespace-nowrap transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>Paso 4: Cliente Ideal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* PASO 4: CLIENTE IDEAL */}
        {currentStep === 4 && (
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 block mb-1">
                PASO 4 DE LA DEMO
              </span>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-2">
                CLIENTE IDEAL
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                La herramienta define el perfil exacto a quien va dirigida la solución:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#181138]/90 border border-purple-800/40 rounded-2xl p-5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-purple-300 block mb-2">
                  PERFIL & DEMOGRAFÍA
                </span>
                <p className="text-sm font-semibold text-white mb-2">
                  {currentSubniche.customer}
                </p>
                <span className="text-xs text-slate-300 leading-relaxed block">
                  Usuarios que acceden principalmente desde su teléfono móvil y no disponen de tiempo para leer extensos manuales.
                </span>
              </div>

              <div className="bg-[#181138]/90 border border-purple-800/40 rounded-2xl p-5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-300 block mb-2">
                  OBJETIVO DE CONVERSIÓN
                </span>
                <p className="text-sm font-semibold text-white mb-2">
                  Transformar la curiosidad en un hábito diario
                </p>
                <span className="text-xs text-slate-300 leading-relaxed block">
                  Al recibir una experiencia viva en su navegador, el usuario percibe un valor significativamente mayor que frente a un archivo PDF.
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <button
                onClick={() => triggerLockedAction('Generar avatar psicográfico detallado')}
                className="px-4 py-2.5 rounded-xl bg-[#1b1240] hover:bg-[#251957] border border-purple-700/50 text-purple-200 text-xs font-semibold transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Lock className="w-3.5 h-3.5 text-cyan-400" />
                <span>Desbloquear avatar psicográfico avanzado...</span>
              </button>

              <button
                onClick={() => setCurrentStep(5)}
                className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs whitespace-nowrap transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>Paso 5: Radiografía del Mercado</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* PASO 5: RADIOGRAFÍA DEL MERCADO */}
        {currentStep === 5 && (
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 block mb-1">
                PASO 5 DE LA DEMO
              </span>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-2">
                RADIOGRAFÍA DEL MERCADO
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Estructura de validación visual de la oportunidad (Demostración metodológica):
              </p>
            </div>

            <div className="bg-[#181138]/90 border border-purple-800/40 rounded-2xl p-5 space-y-4">
              <div className="flex items-start gap-3">
                <BarChart3 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-sm font-bold text-white mb-1">
                    Análisis de fricciones competitivas:
                  </h5>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {currentSubniche.radiography}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-purple-900/40 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="bg-[#120826] p-3 rounded-xl border border-purple-900/40">
                  <span className="text-slate-400 block text-[10px]">Canal de tráfico:</span>
                  <span className="font-semibold text-white">Meta Ads Móvil</span>
                </div>
                <div className="bg-[#120826] p-3 rounded-xl border border-purple-900/40">
                  <span className="text-slate-400 block text-[10px]">Formato de entrega:</span>
                  <span className="font-semibold text-cyan-300">Web App sin instalación</span>
                </div>
                <div className="bg-[#120826] p-3 rounded-xl border border-purple-900/40">
                  <span className="text-slate-400 block text-[10px]">Tiempo de uso medio:</span>
                  <span className="font-semibold text-emerald-400">1 - 3 min diarios</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <button
                onClick={() => triggerLockedAction('Continuar con la investigación de mercado completa')}
                className="px-4 py-2.5 rounded-xl bg-[#1b1240] hover:bg-[#251957] border border-purple-700/50 text-purple-200 text-xs font-semibold transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Lock className="w-3.5 h-3.5 text-cyan-400" />
                <span>Continuar con la investigación completa...</span>
              </button>

              <button
                onClick={() => setCurrentStep(6)}
                className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs whitespace-nowrap transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>Paso 6: Convertir en MiniApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* PASO 6: CONVERTIR LA OPORTUNIDAD EN MINIAPP */}
        {currentStep === 6 && (
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 block mb-1">
                PASO 6 DE LA DEMO
              </span>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-2">
                AHORA CONVIERTE ESTA OPORTUNIDAD EN UNA MINIAPP
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Así fluye la metodología completa para transformar la idea en una experiencia digital:
              </p>
            </div>

            {/* Visual Transformation Chain */}
            <div className="bg-[#181138]/90 border border-cyan-500/40 rounded-2xl p-5">
              <div className="flex items-center justify-between gap-2 overflow-x-auto pb-2 text-xs font-bold text-slate-200 mb-6">
                <span className="px-3 py-1.5 bg-purple-900/50 rounded-lg text-purple-300 whitespace-nowrap">IDEA</span>
                <span className="text-purple-400">→</span>
                <span className="px-3 py-1.5 bg-purple-900/50 rounded-lg text-indigo-300 whitespace-nowrap">ESTRUCTURA</span>
                <span className="text-purple-400">→</span>
                <span className="px-3 py-1.5 bg-purple-900/50 rounded-lg text-cyan-300 whitespace-nowrap">FUNCIONES</span>
                <span className="text-purple-400">→</span>
                <span className="px-3 py-1.5 bg-purple-900/50 rounded-lg text-emerald-300 whitespace-nowrap">MINIAPP</span>
                <span className="text-purple-400">→</span>
                <span className="px-3 py-1.5 bg-cyan-900/70 rounded-lg text-white font-extrabold whitespace-nowrap">EXPERIENCIA DIGITAL</span>
              </div>

              <div className="bg-[#120826] border border-purple-800/40 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-purple-900/60 border border-purple-600/50 flex items-center justify-center text-cyan-300 shrink-0">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-cyan-400 tracking-wider">
                      MINIAPP ESTRUCTURADA
                    </span>
                    <h5 className="font-heading text-sm sm:text-base font-bold text-white">
                      {currentSubniche.offer}
                    </h5>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Flujo de pantallas validado listo para generar con IA.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => triggerLockedAction('Generar la MiniApp interactiva completa con IA')}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-bold text-xs whitespace-nowrap shadow-lg shadow-purple-900/50 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Lock className="w-4 h-4" />
                  <span>QUIERO CREAR MI MINIAPP 🚀</span>
                </button>
              </div>
            </div>

            <div className="flex justify-between items-center pt-2">
              <button
                onClick={() => setCurrentStep(1)}
                className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                ← Probar con otro nicho
              </button>

              <button
                onClick={() => triggerLockedAction('Acceder al prompt completo y código de la MiniApp')}
                className="px-5 py-2.5 rounded-xl bg-[#22174d] hover:bg-[#2e2068] border border-cyan-400/40 text-cyan-300 text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Lock className="w-3.5 h-3.5" />
                <span>Acceder al prompt completo</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* STRATEGIC LOCK MODAL */}
      {isLockModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#140c30] border-2 border-cyan-400 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl shadow-cyan-950/80 relative overflow-hidden text-center">
            {/* Glow */}
            <div className="absolute -top-24 -right-24 w-52 h-52 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-cyan-950/80 border border-cyan-400 flex items-center justify-center mx-auto mb-4 text-cyan-300 shadow-md">
                <Lock className="w-7 h-7" />
              </div>

              <h3 className="font-heading text-xl sm:text-2xl font-black text-white mb-2">
                🔒 DESBLOQUEA LA FÁBRICA DE MINIAPPS VERSE
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Has llegado a una función disponible dentro de <strong className="text-white">La Fábrica de MiniApps Verse</strong>:
                <span className="block text-cyan-300 font-semibold mt-1">"{lockedActionName}"</span>
              </p>

              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                Ingresa al curso y desbloquea el proceso completo para encontrar oportunidades, estructurar ideas y comenzar a crear tus propias MiniApps.
              </p>

              {/* Price Callout */}
              <div className="bg-[#0e0724] border border-purple-700/50 rounded-2xl p-4 mb-6 text-center">
                <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-300 block mb-1">
                  🔥 PRECIO ESPECIAL ACTUAL
                </span>
                <span className="text-3xl sm:text-4xl font-black text-white font-mono">
                  US$27
                </span>
                <span className="text-[10px] text-slate-400 block mt-1">
                  Acceso completo inmediato · Garantía 7 días
                </span>
              </div>

              {/* CTA button to Hotmart checkout */}
              <a
                href={hotmartLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 hover:from-cyan-300 hover:to-purple-500 text-slate-950 font-black text-sm uppercase tracking-wider shadow-xl shadow-cyan-500/30 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer mb-3"
              >
                <span>QUIERO ENTRAR A LA FÁBRICA 🚀</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </a>

              {whatsappLink && (
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 rounded-xl bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-500/40 text-emerald-300 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors mb-3 cursor-pointer"
                >
                  <span>💬 ¿Tienes dudas? Hablar por WhatsApp</span>
                </a>
              )}

              <button
                onClick={() => setIsLockModalOpen(false)}
                className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer py-1"
              >
                Volver a la demostración
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
