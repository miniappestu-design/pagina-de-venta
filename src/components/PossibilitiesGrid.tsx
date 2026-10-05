import React from 'react';
import { 
  Wrench, 
  BookOpen, 
  GraduationCap, 
  Briefcase, 
  Box, 
  Users, 
  LineChart, 
  Calculator, 
  Bot, 
  Sparkles,
  Smartphone
} from 'lucide-react';

export const PossibilitiesGrid: React.FC = () => {
  const possibilities = [
    { title: 'Herramientas', desc: 'Soluciones directas para resolver tareas concretas en pocos clics.', icon: Wrench, tag: 'Utilidad' },
    { title: 'Guías Interactivas', desc: 'Manuales y checklists paso a paso que guían la acción del usuario.', icon: BookOpen, tag: 'Contenido Vivo' },
    { title: 'Experiencias Educativas', desc: 'Quizzes dinámicos, autoevaluaciones y repaso espaciado.', icon: GraduationCap, tag: 'Aprendizaje' },
    { title: 'Herramientas para Negocios', desc: 'Cotizadores automáticos, cartas interactivas y presupuestos.', icon: Briefcase, tag: 'Empresas' },
    { title: 'Recursos Digitales', desc: 'Plantillas vivas y generadores de ideas adaptadas al usuario.', icon: Box, tag: 'Recursos' },
    { title: 'Herramientas para Clientes', desc: 'Espacios de seguimiento post-venta o diagnóstico para onboarding.', icon: Users, tag: 'Fidelización' },
    { title: 'Experiencias de Seguimiento', desc: 'Trackers de hábitos, metas semanales y registros de rutina.', icon: LineChart, tag: 'Progreso' },
    { title: 'Calculadoras', desc: 'Simuladores de macros, cuotas financieras o métricas de negocio.', icon: Calculator, tag: 'Cálculo' },
    { title: 'Asistentes', desc: 'Flujos de preguntas y respuestas para orientar decisiones complejas.', icon: Bot, tag: 'Guía' },
    { title: 'Experiencias Interactivas', desc: 'Formatos dinámicos que aumentan el tiempo de interacción móvil.', icon: Sparkles, tag: 'Engagement' },
  ];

  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-16 sm:py-20 border-t border-purple-900/30">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/70 border border-purple-800/40 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3">
          <Smartphone className="w-3.5 h-3.5 text-cyan-400" />
          <span>DEFINICIÓN CLARA</span>
        </div>

        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
          ¿QUÉ ES UNA MINIAPP?
        </h2>

        <p className="text-base sm:text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-white to-cyan-300 max-w-2xl mx-auto mb-3 text-balance">
          "Una MiniApp es una experiencia digital interactiva diseñada para cumplir una función o resolver una necesidad específica."
        </p>

        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
          No requiere descargas desde tiendas de aplicaciones pesadas: funciona directamente en el navegador del teléfono y se puede anclar a la pantalla de inicio.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 mb-6">
        {possibilities.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="bg-[#120d2a]/80 hover:bg-[#1a123d] border border-purple-900/50 hover:border-purple-600/50 rounded-2xl p-4 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="w-9 h-9 rounded-xl bg-purple-900/40 border border-purple-700/40 flex items-center justify-center text-cyan-300 mb-3 group-hover:scale-105 transition-transform">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-purple-400 block mb-1">
                  {item.tag}
                </span>
                <h3 className="font-heading text-sm font-bold text-white mb-1.5 leading-snug">
                  {item.title}
                </h3>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <p className="text-center text-xs text-slate-500 max-w-lg mx-auto">
        * No todos los ejemplos son plantillas del curso; ilustran la versatilidad de soluciones que puedes conceptualizar y estructurar. No se garantiza rentabilidad automática.
      </p>
    </section>
  );
};
