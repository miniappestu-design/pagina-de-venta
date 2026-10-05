export interface QuizAnswers {
  q1: string; // What do you have
  q2: string; // What would you like to achieve
  q3: string; // What is holding you back
  q4: string; // Experience with AI
  q5: string; // What would you like to solve
}

export type ProfileType = 
  | 'TRANSFORMADOR_CONOCIMIENTO'
  | 'EMPRENDEDOR_DIGITAL'
  | 'CREADOR_OPORTUNIDADES'
  | 'CREADOR_SIN_IDEA';

export interface UserProfile {
  id: ProfileType;
  title: string;
  badge: string;
  headline: string;
  description: string;
  hookSummary: string;
  recommendedPathway: string;
  suggestedMiniAppIdea: string;
}

export interface MiniAppExample {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  creator: string;
  keyFeatures: string[];
  metricsOrHighlight: string;
}

export interface BonusItem {
  number: number;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  toolsMentioned?: string[];
  tag: string;
}

export interface Testimonial {
  name: string;
  project: string;
  category: string;
  verified: boolean;
  quote: string;
  achievement: string;
  avatarText: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
