import { QuizAnswers, UserProfile } from '../types';

export interface QuizOption {
  id: string;
  icon: string;
  label: string;
  sublabel?: string;
}

export interface QuizQuestion {
  id: keyof QuizAnswers;
  number: number;
  title: string;
  subtitle: string;
  options: QuizOption[];
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1',
    number: 1,
    title: '¿Qué tienes actualmente?',
    subtitle: 'Elige la opción que mejor describe tu punto de partida:',
    options: [
      { id: 'negocio', icon: '💼', label: 'Tengo un negocio' },
      { id: 'conocimiento', icon: '🧠', label: 'Tengo conocimientos o una profesión' },
      { id: 'pdf_ebook', icon: '📄', label: 'Tengo un PDF o eBook' },
      { id: 'producto_digital', icon: '📦', label: 'Tengo un producto digital' },
      { id: 'idea', icon: '💡', label: 'Tengo una idea' },
      { id: 'nada', icon: '🤷', label: 'Todavía no tengo nada' },
    ],
  },
  {
    id: 'q2',
    number: 2,
    title: '¿Qué te gustaría crear?',
    subtitle: '¿Cuál es el tipo de solución que te gustaría construir?',
    options: [
      { id: 'para_negocio', icon: '💼', label: 'Algo para mi negocio' },
      { id: 'herramienta_digital', icon: '📱', label: 'Una herramienta digital' },
      { id: 'experiencia_conocimientos', icon: '🧠', label: 'Una experiencia basada en mis conocimientos' },
      { id: 'para_vender', icon: '💰', label: 'Algo para vender' },
      { id: 'nueva_oportunidad', icon: '🚀', label: 'Una nueva oportunidad' },
      { id: 'no_seguro', icon: '🤔', label: 'Todavía no estoy seguro' },
    ],
  },
  {
    id: 'q3',
    number: 3,
    title: '¿Qué es lo que más te está frenando?',
    subtitle: 'Identificar tu mayor obstáculo permite resolverlo con precisión:',
    options: [
      { id: 'no_programar', icon: '👨‍💻', label: 'No sé programar' },
      { id: 'no_se_crear', icon: '💡', label: 'No sé qué crear' },
      { id: 'no_nicho', icon: '🎯', label: 'No sé qué nicho elegir' },
      { id: 'no_digitalizar', icon: '📄', label: 'No sé cómo convertir mi conocimiento en algo digital' },
      { id: 'no_empezar', icon: '🚀', label: 'No sé por dónde empezar' },
      { id: 'poco_tiempo', icon: '⏰', label: 'No tengo mucho tiempo' },
    ],
  },
  {
    id: 'q4',
    number: 4,
    title: '¿Qué experiencia tienes con Inteligencia Artificial?',
    subtitle: 'No requieres conocimientos técnicos previos:',
    options: [
      { id: 'comenzando', icon: '🌱', label: 'Estoy comenzando' },
      { id: 'ocasional', icon: '🙂', label: 'La uso ocasionalmente' },
      { id: 'varias_herramientas', icon: '🔥', label: 'Ya utilizo varias herramientas' },
      { id: 'experiencia_creando', icon: '🚀', label: 'Tengo experiencia creando con IA' },
    ],
  },
  {
    id: 'q5',
    number: 5,
    title: '¿Qué te gustaría conseguir?',
    subtitle: 'Elige el objetivo principal que buscas alcanzar:',
    options: [
      { id: 'para_negocio', icon: '💼', label: 'Crear algo para mi negocio' },
      { id: 'convertir_conocimiento', icon: '🧠', label: 'Convertir mi conocimiento en una herramienta' },
      { id: 'crear_miniapp', icon: '📱', label: 'Crear una MiniApp' },
      { id: 'crear_vender', icon: '💰', label: 'Crear algo para vender' },
      { id: 'encontrar_oportunidad', icon: '🔎', label: 'Encontrar una oportunidad' },
      { id: 'crear_propio', icon: '🚀', label: 'Crear algo propio' },
      { id: 'no_se_todavia', icon: '🤷', label: 'Todavía no lo sé' },
    ],
  },
];

export function calculateProfile(answers: QuizAnswers): UserProfile {
  const { q1, q3 } = answers;

  if (q1 === '🤷 Todavía no tengo nada' || q3 === '💡 No sé qué crear' || q3 === '🚀 No sé por dónde empezar') {
    return {
      id: 'CREADOR_SIN_IDEA',
      title: 'CREADOR SIN IDEA',
      badge: 'EXPLORACIÓN DE OPORTUNIDADES',
      headline: 'No tener una idea todavía no significa que no puedas comenzar.',
      description: 'Precisamente por eso creamos herramientas que te ayudan a explorar nichos, problemas, necesidades y oportunidades.',
      hookSummary: 'Estás buscando algo propio, pero todavía no tienes claro qué crear.',
      recommendedPathway: 'Creador de MiniApps Verse + Biblioteca de 180 MiniApps como punto de partida.',
      suggestedMiniAppIdea: 'Exploración de nichos cotidianos con alta demanda desatendida.',
    };
  }

  if (q1 === '🧠 Tengo conocimientos o una profesión' || q1 === '📄 Tengo un PDF o eBook') {
    return {
      id: 'TRANSFORMADOR_CONOCIMIENTO',
      title: 'TRANSFORMADOR DE CONOCIMIENTO',
      badge: 'POTENCIAL INTERACTIVO',
      headline: 'Tienes conocimientos, experiencia o una profesión que podría convertirse en una experiencia digital mucho más interactiva.',
      description: 'En lugar de un documento o texto plano, puedes transformar ese saber en una herramienta viva para móvil con interacción y retroalimentación inmediata.',
      hookSummary: q1 === '📄 Tengo un PDF o eBook' 
        ? 'Ya tienes contenido. Ahora puedes descubrir cómo llevarlo a una experiencia mucho más interactiva.'
        : 'Ya tienes conocimiento. Ahora puedes descubrir cómo transformarlo en una experiencia digital interactiva.',
      recommendedPathway: 'Método M.A.P.A. para estructurar tu conocimiento en módulos interactivos.',
      suggestedMiniAppIdea: 'Un asistente o guía interactiva que reemplace documentos estáticos.',
    };
  }

  if (q1 === '💼 Tengo un negocio' || q1 === '📦 Tengo un producto digital') {
    return {
      id: 'EMPRENDEDOR_DIGITAL',
      title: 'EMPRENDEDOR DIGITAL',
      badge: 'HERRAMIENTA PARA TU NEGOCIO',
      headline: 'Ya tienes un negocio o producto. Ahora puedes explorar cómo convertir parte de esa experiencia en una herramienta digital.',
      description: 'Una MiniApp te permite entregar valor ágil a tus clientes, cotizar servicios al instante o automatizar dudas frecuentes en sus celulares.',
      hookSummary: 'Ya tienes un negocio y estás buscando una forma diferente de convertir parte de tu experiencia en una herramienta digital.',
      recommendedPathway: 'Estructuración de herramientas interactivas y cotizadores con IA.',
      suggestedMiniAppIdea: 'Una MiniApp de cotización, diagnóstico o fidelización para clientes.',
    };
  }

  return {
    id: 'CREADOR_OPORTUNIDADES',
    title: 'CREADOR DE OPORTUNIDADES',
    badge: 'NUEVA OPORTUNIDAD',
    headline: 'Estás buscando una nueva oportunidad y todavía estás explorando qué podrías crear.',
    description: 'El mercado busca soluciones prácticas y rápidas para usar en celular. Con la Inteligencia Artificial puedes encontrar oportunidades concretas y darles forma en días.',
    hookSummary: 'Estás buscando una nueva oportunidad y todavía estás explorando qué podrías crear.',
    recommendedPathway: 'Investigación de mercado ágil y biblioteca de modelos probados.',
    suggestedMiniAppIdea: 'Micro-herramientas interactivas en nichos de transformación personal y profesional.',
  };
}
