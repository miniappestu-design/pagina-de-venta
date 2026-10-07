import React, { useState, useEffect } from 'react';
import { QuizAnswers } from './types';
import { HeaderNav } from './components/HeaderNav';
import { QuizExperience } from './components/QuizExperience';
import { PostQuizSection } from './components/PostQuizSection';
import { LandingHeroPersonalized } from './components/LandingHeroPersonalized';
import { CreadorMiniAppsDemo } from './components/CreadorMiniAppsDemo';
import { NutriFacilInteractiveDemo } from './components/NutriFacilInteractiveDemo';
import { MiniAppsGallery } from './components/MiniAppsGallery';
import { PossibilitiesGrid } from './components/PossibilitiesGrid';
import { VerseEcosystem } from './components/VerseEcosystem';
import { MapaMethod } from './components/MapaMethod';
import { BonusesSection } from './components/BonusesSection';
import { RealWhatsAppTestimonials } from './components/RealWhatsAppTestimonials';
import { ObjectionsSection } from './components/ObjectionsSection';
import { OfferSection } from './components/OfferSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { StickyBottomCta } from './components/StickyBottomCta';

const DEFAULT_HOTMART_LINK = 'https://pay.hotmart.com/T106939828K?checkoutMode=10';
const DEFAULT_WHATSAPP_LINK = 'https://wa.me/56932051719';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'quiz' | 'landing'>('quiz');

  const [answers, setAnswers] = useState<QuizAnswers | null>(() => {
    try {
      const saved = localStorage.getItem('verse_quiz_answers');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [hotmartLink, setHotmartLink] = useState<string>(() => {
    try {
      const saved = localStorage.getItem('verse_hotmart_link');
      if (saved && saved.includes('T106939828K')) {
        return saved;
      }
      return DEFAULT_HOTMART_LINK;
    } catch {
      return DEFAULT_HOTMART_LINK;
    }
  });

  const [whatsappLink, setWhatsappLink] = useState<string>(() => {
    try {
      const saved = localStorage.getItem('verse_whatsapp_link');
      if (saved && saved.includes('56932051719')) {
        return saved;
      }
      return DEFAULT_WHATSAPP_LINK;
    } catch {
      return DEFAULT_WHATSAPP_LINK;
    }
  });

  const [showStickyCta, setShowStickyCta] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (currentPage === 'landing' && window.scrollY > 500) {
        setShowStickyCta(true);
      } else {
        setShowStickyCta(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  // Al completar la 5ta pregunta del Quiz, pasa DIRECTAMENTE a la experiencia completa
  // encabezada por la Sección Post-Quiz con el Video (~53s) y seguida de la Landing intacta
  const handleCompleteQuiz = (newAnswers: QuizAnswers) => {
    setAnswers(newAnswers);
    try {
      localStorage.setItem('verse_quiz_answers', JSON.stringify(newAnswers));
    } catch {
      // Ignore
    }
    setCurrentPage('landing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoToLanding = (finalAnswers?: QuizAnswers) => {
    const effectiveAnswers = finalAnswers || answers;
    if (effectiveAnswers) {
      setAnswers(effectiveAnswers);
      try {
        localStorage.setItem('verse_quiz_answers', JSON.stringify(effectiveAnswers));
      } catch {
        // Ignore
      }
    }
    setCurrentPage('landing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoToQuiz = () => {
    setCurrentPage('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToOffer = () => {
    const target = document.getElementById('oferta');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToDemo = () => {
    const target = document.getElementById('creador-demo');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleUpdateLinks = (newHotmart: string, newWhatsapp: string) => {
    setHotmartLink(newHotmart);
    setWhatsappLink(newWhatsapp);
    try {
      localStorage.setItem('verse_hotmart_link', newHotmart);
      localStorage.setItem('verse_whatsapp_link', newWhatsapp);
    } catch {
      // Ignore
    }
  };

  return (
    <div id="top" className="min-h-screen bg-[#090714] text-slate-100 flex flex-col font-sans selection:bg-purple-600 selection:text-white">
      {/* Top Bar Navigation */}
      <HeaderNav 
        currentPage={currentPage}
        onCtaClick={handleScrollToOffer}
        onGoToQuiz={handleGoToQuiz}
      />

      <main className="flex-1">
        {currentPage === 'quiz' ? (
          /* ========================================================
             PASO 1: QUIZ INTERACTIVO (5 Preguntas intactas)
             Al responder la 5ta pregunta -> Transición inmediata
             ======================================================== */
          <QuizExperience 
            onCompleteQuiz={handleCompleteQuiz}
            onGoToLanding={handleGoToLanding}
            savedAnswers={answers}
          />
        ) : (
          /* ========================================================
             PASO 2: EXPERIENCIA CONTINUA Y UNIFICADA
             SECCIÓN POST-QUIZ + VIDEO (53s) 
             SEGUIDA INMEDIATAMENTE POR LA LANDING DE VENTA EXISTENTE
             (Demo, NutriFácil, Galería, Ecosistema, M.A.P.A., Bonos, Testimonios, US$27)
             ======================================================== */
          <div className="animate-in fade-in duration-300 pb-16 md:pb-0">
            {/* SECCIÓN POST-QUIZ CON ENCABEZADO OFICIAL + VIDEO 53s INTEGRADO */}
            <PostQuizSection 
              answers={answers}
              onRetakeQuiz={handleGoToQuiz}
            />

            {/* Inicio personalizado: POR LO QUE NOS CONTASTE... + EL PROBLEMA + LA NUEVA OPORTUNIDAD */}
            <LandingHeroPersonalized 
              answers={answers}
              onExploreDemo={handleScrollToDemo}
            />

            {/* SECCIÓN PRINCIPAL: CREADOR DE MINIAPPS VERSE (Demo interactiva con 6 pasos y bloqueo estratégico) */}
            <CreadorMiniAppsDemo 
              hotmartLink={hotmartLink}
              whatsappLink={whatsappLink}
            />

            {/* SECCIÓN: DEMOSTRACIÓN REAL NUTRIFÁCIL */}
            <NutriFacilInteractiveDemo 
              hotmartLink={hotmartLink}
              whatsappLink={whatsappLink}
            />

            {/* SECCIÓN: ASÍ PUEDEN VERSE TUS IDEAS (Galería de MiniApps reales) */}
            <MiniAppsGallery />

            {/* SECCIÓN: ¿QUÉ ES UNA MINIAPP? + ¿QUÉ PUEDES CREAR? */}
            <PossibilitiesGrid />

            {/* SECCIÓN: LA FÁBRICA DE MINIAPPS VERSE (Ecosistema) */}
            <VerseEcosystem />

            {/* SECCIÓN: MÉTODO M.A.P.A. (4 Tarjetas Interactivas) */}
            <MapaMethod 
              hotmartLink={hotmartLink}
              whatsappLink={whatsappLink}
            />

            {/* SECCIÓN: LOS 4 BONOS ESPECIALES & BIBLIOTECA 180 MINIAPPS */}
            <BonusesSection 
              hotmartLink={hotmartLink}
              whatsappLink={whatsappLink}
            />

            {/* SECCIÓN: TESTIMONIOS REALES (Conversaciones reales de WhatsApp enviadas por el usuario) */}
            <RealWhatsAppTestimonials />

            {/* SECCIÓN: OBJECIONES (¿Y si estás pensando...?) */}
            <ObjectionsSection />

            {/* SECCIÓN: OFERTA US$27 + TIEMPO ILIMITADO + WHATSAPP + CTA FINAL */}
            <OfferSection 
              hotmartLink={hotmartLink}
              whatsappLink={whatsappLink}
              onUpdateLinks={handleUpdateLinks}
            />

            {/* SECCIÓN: PREGUNTAS FRECUENTES (FAQ) */}
            <FaqSection 
              whatsappLink={whatsappLink}
            />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky CTA (Solo en la landing page cuando se desplaza) */}
      {currentPage === 'landing' && (
        <StickyBottomCta 
          hotmartLink={hotmartLink} 
          visible={showStickyCta} 
        />
      )}
    </div>
  );
}
