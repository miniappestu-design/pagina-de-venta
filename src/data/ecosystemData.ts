import { MiniAppExample, BonusItem, Testimonial, FaqItem } from '../types';

export const MINIAPP_EXAMPLES: MiniAppExample[] = [
  {
    id: 'nutrifacil',
    name: 'NutriFácil',
    category: 'BIENESTAR Y NUTRICIÓN',
    tagline: 'De una guía nutricional estática a un asistente interactivo en el bolsillo.',
    description: 'En lugar de un documento PDF de 60 páginas con tablas que nadie lee, NutriFácil calcula calorías diarias, organiza el menú semanal con recetas en 3 toques y permite marcar el agua consumida con retroalimentación instantánea.',
    creator: 'Demostración Interactiva',
    keyFeatures: ['Calculadora inteligente de macros', 'Planificador semanal interactivo', 'Generador de recetas con lo que hay en casa', 'Seguimiento visual de hidratación'],
    metricsOrHighlight: 'Experiencia interactiva vs. PDF tradicional estático',
  },
  {
    id: 'estudiapro',
    name: 'EstudiaPro',
    category: 'EDUCACIÓN',
    tagline: 'Tarjetas de estudio activas y quizzes de autoevaluación para estudiantes.',
    description: 'Transformó resúmenes extensos de materias complejas en una aplicación ágil donde los estudiantes ponen a prueba su retención con repetición espaciada y retroalimentación inmediata.',
    creator: 'Eliana',
    keyFeatures: ['Quizzes interactivos por temas', 'Tarjetas inteligentes de memoria', 'Medidor de dominio conceptual', 'Modo repaso sin fricción'],
    metricsOrHighlight: 'Educación interactiva creada sin escribir una sola línea de código',
  },
  {
    id: 'sabores-de-casa',
    name: 'Sabores de Casa',
    category: 'RESTAURANTE Y GASTRONOMÍA',
    tagline: 'Menú digital dinámico con recomendador de platos según preferencias.',
    description: 'Permite a los comensales seleccionar intolerancias alimentarias o preferencias del día para recibir sugerencias personalizadas de la carta con fotos y tiempos de preparación reales.',
    creator: 'Claudia',
    keyFeatures: ['Filtro inteligente por alérgenos', 'Recomendador según presupuesto y antojo', 'Botón de pedido directo a WhatsApp', 'Galería visual optimizada para móvil'],
    metricsOrHighlight: 'Herramienta interactiva para comensales en lugar de un PDF borroso',
  },
  {
    id: 'miniar-fitness',
    name: 'Miniar Fitness',
    category: 'FITNESS',
    tagline: 'Rutinas guiadas en video y cronómetro por series para entrenamiento en casa.',
    description: 'Los alumnos ya no tienen que buscar ejercicios en chats dispersos: abren la MiniApp, marcan su nivel y la herramienta los guía paso a paso con descansos cronometrados.',
    creator: 'Eliana',
    keyFeatures: ['Cronómetro por series y descansos', 'Guía de posturas con animaciones breves', 'Checklist de entrenamientos semanales', 'Adaptable a cualquier nivel'],
    metricsOrHighlight: 'Seguimiento de entrenamientos desde cualquier navegador móvil',
  },
  {
    id: 'vidasalud-diabetes',
    name: 'VidaSalud Diabetes',
    category: 'BIENESTAR',
    tagline: 'Registro visual de glucosa, alertas de horarios y guía de alimentos con bajo índice glucémico.',
    description: 'Una experiencia sencilla creada para personas mayores o cuidadores, donde registrar una medición toma 5 segundos y genera gráficos visuales comprensibles al instante.',
    creator: 'Comunidad Verse',
    keyFeatures: ['Registro simplificado de valores', 'Semáforo de advertencia médica', 'Buscador de alimentos e índice glucémico', 'Exportación de historial para el médico'],
    metricsOrHighlight: 'Acompañamiento diario que reemplaza planillas y cuadernos en papel',
  },
];

export const MAPA_STEPS = [
  {
    letter: 'M',
    title: 'MAPEAR',
    subtitle: 'Encuentra oportunidades, problemas y necesidades',
    badge: 'Fase 01',
    description: 'No partes de una hoja en blanco. Utilizas nuestra metodología y herramientas para identificar qué problemas cotidianos tienen alta demanda en personas o negocios, qué fricciones existen y cuál es el punto de partida óptimo.',
    actions: [
      'Exploración de nichos desatendidos con alta intención de uso',
      'Detección de fricciones reales que un PDF o video no resuelven',
      'Validación rápida de necesidades antes de invertir tiempo',
    ],
  },
  {
    letter: 'A',
    title: 'ARQUITECTAR',
    subtitle: 'Estructura tu MiniApp paso a paso',
    badge: 'Fase 02',
    description: 'Organiza la experiencia de usuario: qué pantallas tendrá, qué botones presionará y cómo resolverá el problema en pocos toques. Diseñas la arquitectura de la solución de forma intuitiva.',
    actions: [
      'Definición del flujo principal en 3 o 4 pantallas clave',
      'Jerarquía de botones, campos y respuestas interactivas',
      'Estructuración del contenido para consumo ágil en celulares',
    ],
  },
  {
    letter: 'P',
    title: 'PUBLICAR',
    subtitle: 'Convierte la idea en una experiencia funcional con IA',
    badge: 'Fase 03',
    description: 'Aquí ocurre la magia tecnológica. Guiado por la Inteligencia Artificial y nuestras plantillas, conviertes la estructura en una MiniApp interactiva real que funciona en cualquier dispositivo sin depender de programadores.',
    actions: [
      'Uso de los prompts estructurados de La Fábrica de Prompts',
      'Generación de interfaces funcionales para navegadores móviles',
      'Prueba en tiempo real en tu propio teléfono antes de lanzar',
    ],
  },
  {
    letter: 'A',
    title: 'ATRAER',
    subtitle: 'Aprende a llevar tu MiniApp al mercado',
    badge: 'Fase 04',
    description: 'Una experiencia increíble necesita personas que la utilicen. Descubre cómo presentar tu MiniApp de forma atractiva, cómo posicionarla en Meta Ads y cómo entregarla como un producto o complemento de alto valor.',
    actions: [
      'Estrategias de gancho y mensajes de alta conversión',
      'Entrega directa a clientes a través de enlaces simples',
      'Diferenciación radical frente a la competencia tradicional',
    ],
  },
];

export const BONUSES: BonusItem[] = [
  {
    number: 1,
    badge: 'BONO #1',
    tag: 'INTELIGENCIA DE MERCADO',
    title: 'Cómo Espiar a la Competencia',
    subtitle: 'Meta Ad Library + Adheart',
    description: 'Aprende a analizar exactamente qué anuncios, creativos y ganchos están utilizando otros creadores y empresas en el mundo para captar clientes en tiempo real.',
    highlights: [
      'Descubre qué anuncios llevan meses activos con éxito comprobado',
      'Identifica los ángulos que mejor conectan con la audiencia',
      'Aprende a usar Meta Ad Library y Adheart con criterio estratégico',
    ],
    toolsMentioned: ['Meta Ad Library', 'Adheart'],
  },
  {
    number: 2,
    badge: 'BONO #2',
    tag: 'COPYWRITING & CREATIVIDAD',
    title: 'Fábrica de Ganchos de Alta Conversión',
    subtitle: 'Captura la atención en los primeros 3 segundos',
    description: 'Un sistema con fórmulas probadas de titulares y ganchos iniciales diseñados específicamente para anuncios en Meta Ads, reels y páginas de destino.',
    highlights: [
      'Estructuras de inicio que detienen el scroll del usuario',
      'Adaptaciones por nichos: negocios, salud, educación y servicios',
      'Elimina el bloqueo creativo a la hora de redactar tus anuncios',
    ],
  },
  {
    number: 3,
    badge: 'BONO #3',
    tag: 'SISTEMA DE PROMPTS',
    title: 'Fábrica de Prompts Verse',
    subtitle: 'Instrucciones precisas para la Inteligencia Artificial',
    description: 'Nuestra colección privada de prompts afinados para solicitarle a las herramientas de IA las estructuras, lógicas y contenidos exactos de cada MiniApp.',
    highlights: [
      'Evita respuestas genéricas o errores en la generación',
      'Prompts para estructurar calculadoras, diagnósticos y guías',
      'Metodología de refinamiento en lenguaje completamente natural',
    ],
  },
  {
    number: 4,
    badge: 'BONO #4 EXCLUSIVO',
    tag: 'PUNTO DE PARTIDA DIRECTO',
    title: 'Biblioteca Exclusiva de 180 MiniApps Verse',
    subtitle: '180 MiniApps preparadas en diversos nichos y problemas',
    description: 'No necesitas inventar nada desde cero. Accede a nuestra biblioteca propia con 180 MiniApps listas con su estructura conceptual y su correspondiente página de venta para estudiar y personalizar.',
    highlights: [
      '180 MiniApps categorizadas en múltiples nichos de alta demanda',
      'Estructuras completas de la experiencia interactiva móvil',
      'Páginas de venta correspondientes para aprender su presentación',
      'Totalmente personalizables para tu propia idea o negocio',
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [];

export const OBJECTIONS = [
  {
    question: 'NO SÉ PROGRAMAR.',
    answer: 'No necesitas comenzar siendo programador. La metodología te enseña a utilizar Inteligencia Artificial y herramientas actuales para construir tus MiniApps paso a paso.',
  },
  {
    question: 'NO TENGO UNA IDEA.',
    answer: 'Precisamente por eso tienes herramientas para explorar oportunidades y una Biblioteca de 180 MiniApps como punto de partida.',
  },
  {
    question: 'NO TENGO MUCHO TIEMPO.',
    answer: 'Puedes avanzar paso a paso y utilizar Inteligencia Artificial para acelerar diferentes partes del proceso.',
  },
  {
    question: 'NUNCA HE CREADO UNA MINIAPP.',
    answer: 'La metodología parte desde la idea y te guía progresivamente.',
  },
];

export const FAQS: FaqItem[] = [
  {
    question: '¿Necesito saber programar?',
    answer: 'No. Todo el método está diseñado para que cualquier persona pueda conceptualizar, estructurar y publicar MiniApps funcionales utilizando herramientas modernas de Inteligencia Artificial guiadas por prompts precisos.',
  },
  {
    question: '¿Qué necesito para comenzar?',
    answer: 'Solo necesitas un computador o teléfono con conexión a internet y ganas de aprender. Las herramientas de IA utilizadas tienen opciones de libre acceso o costo accesible para comenzar.',
  },
  {
    question: '¿Qué voy a aprender?',
    answer: 'Aprenderás a detectar oportunidades reales de mercado, a estructurar la experiencia de una MiniApp en celular (pantallas, botones, lógica), a generarla con Inteligencia Artificial y a comunicarla estratégicamente a tu público.',
  },
  {
    question: '¿Qué es el Método M.A.P.A.?',
    answer: 'Es el marco de trabajo exclusivo de 4 etapas: Mapear (encontrar problemas y oportunidades), Arquitectar (diseñar el flujo y pantallas), Publicar (hacerlo realidad con IA) y Atraer (posicionar la solución en el mercado).',
  },
  {
    question: '¿Qué pasa si todavía no tengo una idea?',
    answer: 'No es un impedimento. Contarás con el Creador de MiniApps Verse para explorar nichos y la Biblioteca de 180 MiniApps Verse para inspirarte y comenzar con bases sólidas.',
  },
  {
    question: '¿Qué es el Creador de MiniApps Verse?',
    answer: 'Es la herramienta del ecosistema que te guía para analizar mercados y deseos primarios, detectar problemas reales, definir tu cliente ideal y estructurar la oferta interactiva de tu MiniApp antes de generarla.',
  },
  {
    question: '¿Qué incluye la Biblioteca de 180 MiniApps?',
    answer: 'Incluye 180 conceptos y estructuras de MiniApps ya organizadas en diversos nichos junto con sus páginas de venta correspondientes para tomarlas como referencia o personalizarlas.',
  },
  {
    question: '¿Qué incluyen los bonos?',
    answer: 'Incluyen el taller de espionaje ético con Meta Ad Library y Adheart, la Fábrica de Ganchos de Alta Conversión, la Fábrica de Prompts Verse y el acceso completo a la Biblioteca de 180 MiniApps.',
  },
  {
    question: '¿Puedo crear algo para mi negocio?',
    answer: 'Totalmente. Si tienes un negocio, profesión o servicio, puedes crear calculadoras de presupuestos, sistemas de recomendación, agendas interactivas o guías para fidelizar y captar más clientes.',
  },
  {
    question: '¿Cuánto cuesta?',
    answer: 'El valor regular es de US$47, pero hoy puedes acceder con la oferta especial por un único pago de US$27.',
  },
  {
    question: '¿Tiene garantía?',
    answer: 'Sí. Tu compra cuenta con la garantía de 7 días ofrecida a través de Hotmart.',
  },
];
