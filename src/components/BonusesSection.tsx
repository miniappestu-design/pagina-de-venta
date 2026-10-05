import React, { useState } from 'react';
import { 
  Sparkles, 
  Eye, 
  Flame, 
  Terminal, 
  Library, 
  Check, 
  Search, 
  Filter, 
  Layers, 
  FileCheck, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { BONUSES } from '../data/ecosystemData';

interface BonusesSectionProps {
  hotmartLink?: string;
  whatsappLink?: string;
}

export const BonusesSection: React.FC<BonusesSectionProps> = ({
  hotmartLink = 'https://pay.hotmart.com/T106939828K?checkoutMode=10',
  whatsappLink = 'https://wa.me/56932051719',
}) => {
  // Bono 4 Explorer Filter
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');

  const librarySampleItems = [
    { title: 'NutriFácil · Asistente Nutricional', niche: 'Salud & Nutrición', problem: 'Calcular macros y porciones diarias', structure: '3 pantallas interactivas', salesPage: 'Página de venta incluida' },
    { title: 'EstudiaPro · Tarjetas Flashcard', niche: 'Educación', problem: 'Retención de conceptos para exámenes', structure: 'Quizzes y repetición espaciada', salesPage: 'Página de venta incluida' },
    { title: 'DoggoCare · Cartilla & Ración Canina', niche: 'Mascotas', problem: 'Control de vacunas y cálculo de alimento', structure: 'Calculador y alertas de agenda', salesPage: 'Página de venta incluida' },
    { title: 'CotizaFácil · Presupuestos Rápidos', niche: 'Negocios Locales', problem: 'Pérdida de horas respondiendo precios', structure: 'Cotizador móvil con botón WhatsApp', salesPage: 'Página de venta incluida' },
    { title: 'DeudaCero · Simulador Bola de Nieve', niche: 'Finanzas Personales', problem: 'Complejidad de hojas de cálculo', structure: 'Comparador de cuotas y fechas', salesPage: 'Página de venta incluida' },
    { title: 'VidaSalud · Semáforo Glucémico', niche: 'Bienestar', problem: 'Registro visual para pacientes', structure: 'Tabla interactiva y semáforo', salesPage: 'Página de venta incluida' },
  ];

  const filteredItems = selectedCategory === 'todos'
    ? librarySampleItems
    : librarySampleItems.filter(item => item.niche.toLowerCase().includes(selectedCategory.toLowerCase()));

  const bonusIcons = [Eye, Flame, Terminal, Library];

  return (
    <section id="bonos" className="w-full max-w-5xl mx-auto px-4 py-16 sm:py-24 border-t border-purple-900/30">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="text-xs uppercase font-bold text-cyan-400 tracking-wider block mb-2">
          INCLUIDO CON TU ACCESO
        </span>

        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
          Y AL ENTRAR RECIBES 4 BONOS ESPECIALES
        </h2>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl mx-auto">
          Recursos complementarios diseñados para acelerar tu investigación de mercado, tus copys de anuncios y la creación de tus MiniApps.
        </p>
      </div>

      {/* Grid of First 3 Bonuses */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {BONUSES.slice(0, 3).map((bonus, idx) => {
          const Icon = bonusIcons[idx];
          return (
            <div
              key={bonus.number}
              className="bg-[#120d2a] border border-purple-800/40 rounded-2xl p-6 flex flex-col justify-between hover:border-purple-600/60 transition-all shadow-xl shadow-purple-950/30"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-purple-950 text-cyan-300 border border-purple-700/50">
                    {bonus.badge}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-[#1a123d] border border-purple-800/50 flex items-center justify-center text-purple-300">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <span className="text-[10px] font-bold uppercase tracking-wider text-purple-400 block mb-1">
                  {bonus.tag}
                </span>

                <h3 className="font-heading text-lg font-bold text-white mb-1.5 leading-snug">
                  {bonus.title}
                </h3>

                <p className="text-xs font-semibold text-cyan-300 mb-3">
                  {bonus.subtitle}
                </p>

                <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                  {bonus.description}
                </p>

                <ul className="space-y-2 border-t border-purple-900/40 pt-3">
                  {bonus.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-200">
                      <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {bonus.toolsMentioned && (
                <div className="mt-5 pt-3 border-t border-purple-900/40 flex items-center gap-1.5 flex-wrap">
                  <span className="text-[10px] text-slate-400">Herramientas:</span>
                  {bonus.toolsMentioned.map((t, i) => (
                    <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-900/40 text-purple-200 border border-purple-800/40">
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* BONO 4 — SECCIÓN ESPECIAL DESTACADA */}
      <div id="bono-180" className="bg-gradient-to-b from-[#18103d] via-[#120c2d] to-[#0c0820] border-2 border-cyan-400/60 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-purple-950/70 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-400 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>BONO ESPECIAL DESTACADO</span>
          </div>

          <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-2">
            ¿NO QUIERES EMPEZAR DESDE CERO?
          </h3>

          <p className="text-base sm:text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-purple-200 mb-4">
            Por eso tienes acceso a nuestra Biblioteca Exclusiva de 180 MiniApps Verse.
          </p>

          <p className="text-sm sm:text-base text-slate-200 max-w-3xl leading-relaxed mb-6">
            <strong className="text-white">No es simplemente una lista de ideas.</strong> Es una biblioteca propia con MiniApps ya creadas y preparadas como punto de partida. Puedes explorar la biblioteca, elegir una base y personalizarla según tu propia idea, negocio o necesidad.
          </p>

          {/* 4 Pillars of the 180 Library */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            <div className="bg-[#120a28]/80 border border-cyan-500/30 rounded-xl p-3.5 text-center">
              <span className="font-mono text-2xl sm:text-3xl font-extrabold text-cyan-300 block mb-0.5">
                180
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-200">
                MiniApps Listas
              </span>
            </div>

            <div className="bg-[#120a28]/80 border border-purple-500/30 rounded-xl p-3.5 text-center">
              <span className="font-mono text-xl sm:text-2xl font-extrabold text-purple-300 block mb-0.5">
                +20
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-200">
                Diferentes Nichos
              </span>
            </div>

            <div className="bg-[#120a28]/80 border border-cyan-500/30 rounded-xl p-3.5 text-center">
              <span className="font-mono text-xl sm:text-2xl font-extrabold text-cyan-300 block mb-0.5">
                100%
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-200">
                Estructura de MiniApp
              </span>
            </div>

            <div className="bg-[#120a28]/80 border border-purple-500/30 rounded-xl p-3.5 text-center">
              <span className="font-mono text-xl sm:text-2xl font-extrabold text-purple-300 block mb-0.5">
                LISTAS
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-200">
                Páginas de Venta
              </span>
            </div>
          </div>

          {/* Interactive Filter for Samples */}
          <div className="mb-4">
            <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-purple-300">
                Muestra de la Biblioteca:
              </span>
              <div className="flex gap-1.5 text-[11px]">
                <button
                  onClick={() => setSelectedCategory('todos')}
                  className={`px-2.5 py-1 rounded-lg font-medium cursor-pointer ${
                    selectedCategory === 'todos' ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-[#1a123d] text-slate-300'
                  }`}
                >
                  Todos
                </button>
                <button
                  onClick={() => setSelectedCategory('salud')}
                  className={`px-2.5 py-1 rounded-lg font-medium cursor-pointer ${
                    selectedCategory === 'salud' ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-[#1a123d] text-slate-300'
                  }`}
                >
                  Salud
                </button>
                <button
                  onClick={() => setSelectedCategory('educación')}
                  className={`px-2.5 py-1 rounded-lg font-medium cursor-pointer ${
                    selectedCategory === 'educación' ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-[#1a123d] text-slate-300'
                  }`}
                >
                  Educación
                </button>
                <button
                  onClick={() => setSelectedCategory('negocios')}
                  className={`px-2.5 py-1 rounded-lg font-medium cursor-pointer ${
                    selectedCategory === 'negocios' ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-[#1a123d] text-slate-300'
                  }`}
                >
                  Negocios
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {filteredItems.map((item, i) => (
                <div key={i} className="bg-[#120a28]/90 border border-purple-800/40 rounded-xl p-3.5 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-semibold text-cyan-300 uppercase block mb-1">
                      {item.niche}
                    </span>
                    <h5 className="font-heading text-xs sm:text-sm font-bold text-white mb-1">
                      {item.title}
                    </h5>
                    <p className="text-[11px] text-slate-300 mb-2">
                      Problema: {item.problem}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-purple-900/40 flex items-center justify-between text-[10px] text-slate-400">
                    <span className="text-purple-300">{item.structure}</span>
                    <span className="text-emerald-400 font-medium">✓ {item.salesPage}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ethics / Clarification Note */}
          <div className="mt-6 pt-4 border-t border-purple-900/50 flex items-start gap-2.5 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <p>
              <strong className="text-slate-300">Nota de transparencia:</strong> La Biblioteca de 180 MiniApps Verse es un recurso educativo y de aceleración para estructurar tus propias creaciones. No garantizamos ventas ni prometemos ingresos económicos automáticos; el resultado dependerá de tu dedicación y de la propuesta de valor que ofrezcas a tu público.
            </p>
          </div>

          {/* Action button */}
          <div className="mt-8 pt-6 border-t border-purple-900/40 text-center">
            <a
              href={hotmartLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 hover:from-cyan-300 hover:to-purple-500 text-slate-950 font-black text-sm sm:text-base shadow-xl shadow-cyan-500/30 active:scale-95 transition-all cursor-pointer"
            >
              <span>QUIERO CREAR MI MINIAPP 🚀</span>
              <ArrowRight className="w-5 h-5 text-slate-950" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
