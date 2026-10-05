import React, { useState } from 'react';
import elianaAvatar from '../assets/testimonials/eliana_avatar.jpg';
import claudiaAvatar from '../assets/testimonials/claudia_avatar.jpg';
import vidasaludAvatar from '../assets/testimonials/vidasalud_avatar.jpg';
import estudiaproHero from '../assets/testimonials/estudiapro_hero.jpg';
import miniarFitnessHero from '../assets/testimonials/miniar_fitness_hero.jpg';
import saboresBurgerHero from '../assets/testimonials/sabores_burger_hero.jpg';
import vidasaludMeterHero from '../assets/testimonials/vidasalud_meter_hero.jpg';

import { 
  CheckCheck, 
  ArrowLeft, 
  Video, 
  Phone, 
  MoreVertical, 
  Smile, 
  Paperclip, 
  Camera, 
  Mic, 
  ShieldCheck,
  Dumbbell,
  UtensilsCrossed,
  HeartPulse,
  GraduationCap
} from 'lucide-react';

export const RealWhatsAppTestimonials: React.FC = () => {
  const [activeChat, setActiveChat] = useState<'eliana_fitness' | 'claudia' | 'vidasalud' | 'eliana_educacion'>('eliana_fitness');

  return (
    <section id="testimonios" className="w-full max-w-5xl mx-auto px-4 py-16 sm:py-24 border-t border-purple-900/30">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>FOTOS Y CONVERSACIONES 100% REALES</span>
        </div>

        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
          TESTIMONIOS REALES
        </h2>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          Conversaciones auténticas con fotos reales de alumnos y miembros de la comunidad compartiendo sus MiniApps y avances con el equipo:
        </p>
      </div>

      {/* Selector Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        <button
          onClick={() => setActiveChat('eliana_fitness')}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2.5 cursor-pointer ${
            activeChat === 'eliana_fitness'
              ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-950/50 scale-[1.02] border border-cyan-400/50'
              : 'bg-[#150f33] hover:bg-[#1f164b] text-slate-300 border border-purple-900/50'
          }`}
        >
          <img
            src={elianaAvatar}
            alt="Eliana"
            className="w-5 h-5 rounded-full object-cover"
            referrerPolicy="no-referrer"
          />
          <span>Eliana · Miniar Fitness</span>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-rose-950/80 text-rose-300 border border-rose-700/40">
            Fitness
          </span>
        </button>

        <button
          onClick={() => setActiveChat('claudia')}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2.5 cursor-pointer ${
            activeChat === 'claudia'
              ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-950/50 scale-[1.02] border border-cyan-400/50'
              : 'bg-[#150f33] hover:bg-[#1f164b] text-slate-300 border border-purple-900/50'
          }`}
        >
          <img
            src={claudiaAvatar}
            alt="Claudia"
            className="w-5 h-5 rounded-full object-cover"
            referrerPolicy="no-referrer"
          />
          <span>Claudia · Sabores de Casa</span>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-950/80 text-amber-300 border border-amber-700/40">
            Restaurante
          </span>
        </button>

        <button
          onClick={() => setActiveChat('vidasalud')}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2.5 cursor-pointer ${
            activeChat === 'vidasalud'
              ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-950/50 scale-[1.02] border border-cyan-400/50'
              : 'bg-[#150f33] hover:bg-[#1f164b] text-slate-300 border border-purple-900/50'
          }`}
        >
          <img
            src={vidasaludAvatar}
            alt="+56 972341658"
            className="w-5 h-5 rounded-full object-cover"
            referrerPolicy="no-referrer"
          />
          <span>+56 972341658 · VidaSalud</span>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-700/40">
            Bienestar
          </span>
        </button>

        <button
          onClick={() => setActiveChat('eliana_educacion')}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2.5 cursor-pointer ${
            activeChat === 'eliana_educacion'
              ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-950/50 scale-[1.02] border border-cyan-400/50'
              : 'bg-[#150f33] hover:bg-[#1f164b] text-slate-300 border border-purple-900/50'
          }`}
        >
          <img
            src={elianaAvatar}
            alt="Eliana"
            className="w-5 h-5 rounded-full object-cover"
            referrerPolicy="no-referrer"
          />
          <span>Eliana · EstudiaPro</span>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-950/80 text-blue-300 border border-blue-700/40">
            Educación
          </span>
        </button>
      </div>

      {/* Main WhatsApp Chat Mockup with Real Photos */}
      <div className="flex justify-center">
        <div className="w-full max-w-[420px] bg-[#0b141a] rounded-[40px] border-[5px] border-slate-700/90 shadow-2xl shadow-purple-950/90 overflow-hidden text-slate-100 flex flex-col justify-between font-sans">
          
          {/* Top Phone Status Bar */}
          <div className="bg-[#0b141a] px-6 pt-3 pb-1 flex items-center justify-between text-[11px] text-slate-400 font-mono">
            <span>{activeChat === 'vidasalud' ? '9:41' : '10:24'}</span>
            <div className="flex items-center gap-1.5 text-[10px]">
              <span>5G</span>
              <span>86%</span>
            </div>
          </div>

          {/* WhatsApp Header Bar with REAL PHOTO */}
          {activeChat === 'eliana_fitness' && (
            <div className="bg-[#202c33] px-3 py-2.5 flex items-center justify-between border-b border-slate-700/30">
              <div className="flex items-center gap-2.5">
                <ArrowLeft className="w-4 h-4 text-slate-400" />
                <div className="w-10 h-10 rounded-full overflow-hidden border border-slate-600 shrink-0">
                  <img
                    src={elianaAvatar}
                    alt="Eliana"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-100 leading-tight">Eliana</h4>
                  <span className="text-[10px] text-emerald-400 font-medium">en línea</span>
                </div>
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <Video className="w-4 h-4" />
                <Phone className="w-4 h-4" />
                <MoreVertical className="w-4 h-4" />
              </div>
            </div>
          )}

          {activeChat === 'claudia' && (
            <div className="bg-[#202c33] px-3 py-2.5 flex items-center justify-between border-b border-slate-700/30">
              <div className="flex items-center gap-2.5">
                <ArrowLeft className="w-4 h-4 text-slate-400" />
                <div className="w-10 h-10 rounded-full overflow-hidden border border-slate-600 shrink-0">
                  <img
                    src={claudiaAvatar}
                    alt="Claudia"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-100 leading-tight">Claudia</h4>
                  <span className="text-[10px] text-emerald-400 font-medium">en línea</span>
                </div>
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <Video className="w-4 h-4" />
                <Phone className="w-4 h-4" />
                <MoreVertical className="w-4 h-4" />
              </div>
            </div>
          )}

          {activeChat === 'vidasalud' && (
            <div className="bg-[#202c33] px-3 py-2.5 flex items-center justify-between border-b border-slate-700/30">
              <div className="flex items-center gap-2.5">
                <ArrowLeft className="w-4 h-4 text-slate-400" />
                <div className="w-10 h-10 rounded-full overflow-hidden border border-slate-600 shrink-0">
                  <img
                    src={vidasaludAvatar}
                    alt="+56 972341658"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-100 leading-tight">+56 972341658</h4>
                  <span className="text-[10px] text-emerald-400 font-medium">en línea</span>
                </div>
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <Video className="w-4 h-4" />
                <Phone className="w-4 h-4" />
                <MoreVertical className="w-4 h-4" />
              </div>
            </div>
          )}

          {activeChat === 'eliana_educacion' && (
            <div className="bg-[#202c33] px-3 py-2.5 flex items-center justify-between border-b border-slate-700/30">
              <div className="flex items-center gap-2.5">
                <ArrowLeft className="w-4 h-4 text-slate-400" />
                <div className="w-10 h-10 rounded-full overflow-hidden border border-slate-600 shrink-0">
                  <img
                    src={elianaAvatar}
                    alt="Eliana"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-100 leading-tight">Eliana</h4>
                  <span className="text-[10px] text-emerald-400 font-medium">en línea</span>
                </div>
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <Video className="w-4 h-4" />
                <Phone className="w-4 h-4" />
                <MoreVertical className="w-4 h-4" />
              </div>
            </div>
          )}

          {/* Chat Background & Message Stream */}
          <div className="p-3 space-y-2.5 bg-[#0b141a] min-h-[480px] max-h-[580px] overflow-y-auto text-xs">
            
            {/* CHAT 1: ELIANA (MINIAR FITNESS) */}
            {activeChat === 'eliana_fitness' && (
              <>
                <div className="bg-[#202c33] p-2.5 rounded-2xl rounded-tl-none max-w-[85%] text-slate-200 shadow-sm flex items-start gap-2">
                  <img
                    src={elianaAvatar}
                    alt="Eliana"
                    className="w-5 h-5 rounded-full object-cover shrink-0 mt-0.5"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <p>¡Hola William! 😊</p>
                    <span className="text-[9px] text-slate-400 block text-right mt-0.5">8:50 a. m.</span>
                  </div>
                </div>

                <div className="bg-[#202c33] p-2.5 rounded-2xl rounded-tl-none max-w-[85%] text-slate-200 shadow-sm flex items-start gap-2">
                  <img
                    src={elianaAvatar}
                    alt="Eliana"
                    className="w-5 h-5 rounded-full object-cover shrink-0 mt-0.5"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <p>Quería mostrarte cómo va quedando mi MiniApp de fitness. Te comparto una captura 👇</p>
                    <span className="text-[9px] text-slate-400 block text-right mt-0.5">8:51 a. m.</span>
                  </div>
                </div>

                {/* Embedded MiniApp Preview Card inside Chat */}
                <div className="bg-[#202c33] p-2 rounded-2xl rounded-tl-none max-w-[92%] shadow-md border border-slate-700/40">
                  <div className="bg-[#0f0e17] rounded-xl overflow-hidden border border-rose-500/40 text-white">
                    <div className="p-2.5 pb-1 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <Dumbbell className="w-4 h-4 text-rose-500" />
                        <span className="font-bold text-xs">Miniar Fitness</span>
                      </div>
                      <span className="text-[9px] text-rose-400">🔔</span>
                    </div>

                    {/* Real Fitness Photo Banner */}
                    <div className="relative h-28 w-full overflow-hidden">
                      <img
                        src={miniarFitnessHero}
                        alt="Miniar Fitness"
                        className="w-full h-full object-cover object-top"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-2.5">
                        <h5 className="font-heading font-black text-xs text-white leading-tight">
                          Tu Transformación Comienza Hoy
                        </h5>
                        <p className="text-[9px] text-slate-200">
                          Planes, rutinas y seguimiento personalizado
                        </p>
                      </div>
                    </div>

                    {/* Progress Card */}
                    <div className="p-2.5 bg-[#171622] space-y-1.5 text-[10px]">
                      <div className="flex justify-between items-center text-slate-300">
                        <span className="font-bold text-white">Mi Progreso</span>
                        <span className="text-rose-400 font-mono">Semana 3 de 12 (60%)</span>
                      </div>
                      <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-rose-500 h-full w-[60%]" />
                      </div>
                      <div className="grid grid-cols-2 gap-1 text-[9px] text-slate-300 pt-1">
                        <div className="flex justify-between">
                          <span>🏋️ Entrenamientos</span>
                          <span className="text-emerald-400 font-bold">5/5 ✓</span>
                        </div>
                        <div className="flex justify-between">
                          <span>🥗 Alimentación</span>
                          <span className="text-cyan-400 font-bold">4/5</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span className="text-[9px] text-slate-400 block text-right mt-1">8:51 a. m.</span>
                </div>

                <div className="bg-[#202c33] p-2.5 rounded-2xl rounded-tl-none max-w-[85%] text-slate-200 shadow-sm flex items-start gap-2">
                  <img
                    src={elianaAvatar}
                    alt="Eliana"
                    className="w-5 h-5 rounded-full object-cover shrink-0 mt-0.5"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <p>Estoy realmente feliz con el resultado. 💖 Desde que empecé a usarla, me he sentido mucho más organizada y motivada con mis rutinas. Ya llevo varias semanas y he notado un gran cambio en mi energía. 🙌</p>
                    <span className="text-[9px] text-slate-400 block text-right mt-0.5">8:52 a. m.</span>
                  </div>
                </div>

                <div className="bg-[#202c33] p-2.5 rounded-2xl rounded-tl-none max-w-[85%] text-slate-200 shadow-sm">
                  <p>Mis amigas también ya la están usando y les está encantando. ¿Crees que podamos agregar algo más? Quizás recordatorios personalizados o retos mensuales.</p>
                  <span className="text-[9px] text-slate-400 block text-right mt-1">8:53 a. m.</span>
                </div>

                {/* William's response in green */}
                <div className="bg-[#005c4b] p-2.5 rounded-2xl rounded-tr-none max-w-[85%] ml-auto text-slate-100 shadow-sm">
                  <p>¡Hola Eliana! Qué alegría leer esto. 😊 Se ve increíble, muy profesional. ¡Felicitaciones! 🎉</p>
                  <div className="flex items-center justify-end gap-1 mt-1 text-[9px] text-slate-300">
                    <span>8:57 a. m.</span>
                    <CheckCheck className="w-3.5 h-3.5 text-cyan-300" />
                  </div>
                </div>

                <div className="bg-[#005c4b] p-2.5 rounded-2xl rounded-tr-none max-w-[85%] ml-auto text-slate-100 shadow-sm">
                  <p>Me parece una gran idea lo de los recordatorios y los retos mensuales. Te comparto algunas propuestas. 💪</p>
                  <div className="flex items-center justify-end gap-1 mt-1 text-[9px] text-slate-300">
                    <span>8:58 a. m.</span>
                    <CheckCheck className="w-3.5 h-3.5 text-cyan-300" />
                  </div>
                </div>

                <div className="bg-[#202c33] p-2.5 rounded-2xl rounded-tl-none max-w-[85%] text-slate-200 shadow-sm flex items-start gap-2">
                  <img
                    src={elianaAvatar}
                    alt="Eliana"
                    className="w-5 h-5 rounded-full object-cover shrink-0 mt-0.5"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <p>¡Genial! Me encanta. Muchas gracias por tu apoyo, de verdad. ¡Seguimos! 💪</p>
                    <span className="text-[9px] text-slate-400 block text-right mt-0.5">8:59 a. m.</span>
                  </div>
                </div>
              </>
            )}

            {/* CHAT 2: CLAUDIA (SABORES DE CASA) */}
            {activeChat === 'claudia' && (
              <>
                <div className="bg-[#202c33] p-2.5 rounded-2xl rounded-tl-none max-w-[85%] text-slate-200 shadow-sm flex items-start gap-2">
                  <img
                    src={claudiaAvatar}
                    alt="Claudia"
                    className="w-5 h-5 rounded-full object-cover shrink-0 mt-0.5"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <p>Hola William, buen día 😊</p>
                    <span className="text-[9px] text-slate-400 block text-right mt-0.5">9:12 a. m.</span>
                  </div>
                </div>

                <div className="bg-[#202c33] p-2.5 rounded-2xl rounded-tl-none max-w-[85%] text-slate-200 shadow-sm flex items-start gap-2">
                  <img
                    src={claudiaAvatar}
                    alt="Claudia"
                    className="w-5 h-5 rounded-full object-cover shrink-0 mt-0.5"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <p>Te comparto una captura de la MiniApp de mi restaurante para que veas cómo quedó 👇</p>
                    <span className="text-[9px] text-slate-400 block text-right mt-0.5">9:13 a. m.</span>
                  </div>
                </div>

                {/* Embedded MiniApp Preview Card inside Chat with REAL BURGER PHOTO */}
                <div className="bg-[#202c33] p-2 rounded-2xl rounded-tl-none max-w-[92%] shadow-md border border-slate-700/40">
                  <div className="bg-[#140b07] rounded-xl overflow-hidden border border-amber-600/40 text-white">
                    <div className="p-2.5 pb-1 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <UtensilsCrossed className="w-4 h-4 text-amber-400" />
                        <span className="font-bold text-xs text-amber-300">SABORES de Casa</span>
                      </div>
                      <span className="text-[9px] bg-rose-600 px-1.5 py-0.5 rounded-full font-bold">🛒 2</span>
                    </div>

                    {/* Real Gourmet Burger Photo */}
                    <div className="relative h-28 w-full overflow-hidden">
                      <img
                        src={saboresBurgerHero}
                        alt="Hamburguesa Sabores de Casa"
                        className="w-full h-full object-cover object-center"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-2.5">
                        <h5 className="font-heading font-black text-xs text-amber-200 leading-tight">
                          Buena comida para mejores momentos
                        </h5>
                        <p className="text-[9px] text-slate-200">
                          Sabor casero, ahora en la palma de tu mano
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-4 gap-1 p-2 bg-[#201009] text-[9px] text-center text-slate-200">
                      <div className="bg-[#2b180d] p-1 rounded">🍔 Menú</div>
                      <div className="bg-[#2b180d] p-1 rounded">🍕 Pizzas</div>
                      <div className="bg-[#2b180d] p-1 rounded">🥗 Ensaladas</div>
                      <div className="bg-[#2b180d] p-1 rounded">🥤 Bebidas</div>
                    </div>

                    <div className="p-2 bg-[#1b0d07] text-[9px] text-amber-300 flex justify-between border-t border-amber-900/30">
                      <span>⭐ Mis Puntos: Descuentos exclusivos</span>
                      <span>&gt;</span>
                    </div>
                  </div>
                  <span className="text-[9px] text-slate-400 block text-right mt-1">9:13 a. m.</span>
                </div>

                <div className="bg-[#202c33] p-2.5 rounded-2xl rounded-tl-none max-w-[85%] text-slate-200 shadow-sm flex items-start gap-2">
                  <img
                    src={claudiaAvatar}
                    alt="Claudia"
                    className="w-5 h-5 rounded-full object-cover shrink-0 mt-0.5"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <p>¡No sabes lo feliz que estoy! 😍</p>
                    <span className="text-[9px] text-slate-400 block text-right mt-0.5">9:14 a. m.</span>
                  </div>
                </div>

                <div className="bg-[#202c33] p-2.5 rounded-2xl rounded-tl-none max-w-[85%] text-slate-200 shadow-sm">
                  <p>Varios clientes ya me han escrito diciéndome que ahora encuentran el menú mucho más rápido y que les resulta muy cómodo hacer sus pedidos desde la app. Incluso una clienta me comentó que volvió a pedir porque la experiencia fue súper fácil y práctica, ¡me hizo el día! ❤️</p>
                  <span className="text-[9px] text-slate-400 block text-right mt-1">9:15 a. m.</span>
                </div>

                <div className="bg-[#202c33] p-2.5 rounded-2xl rounded-tl-none max-w-[85%] text-slate-200 shadow-sm">
                  <p>Esta semana quiero compartir la MiniApp con mis clientes habituales por WhatsApp y ver cuántos pedidos llegan desde ahí. Tengo mucha ilusión de medir el impacto y seguir creciendo.</p>
                  <span className="text-[9px] text-slate-400 block text-right mt-1">9:16 a. m.</span>
                </div>

                {/* William's response in green */}
                <div className="bg-[#005c4b] p-2.5 rounded-2xl rounded-tr-none max-w-[85%] ml-auto text-slate-100 shadow-sm">
                  <p>¡Qué excelente noticia, Claudia! 😊 Se nota que está funcionando muy bien. Puedes ver en el panel qué productos reciben más pedidos y con esa información crear promociones más efectivas. Así podrás potenciar aún más tu negocio. 💪</p>
                  <div className="flex items-center justify-end gap-1 mt-1 text-[9px] text-slate-300">
                    <span>9:20 a. m.</span>
                    <CheckCheck className="w-3.5 h-3.5 text-cyan-300" />
                  </div>
                </div>

                <div className="bg-[#202c33] p-2.5 rounded-2xl rounded-tl-none max-w-[85%] text-slate-200 shadow-sm flex items-start gap-2">
                  <img
                    src={claudiaAvatar}
                    alt="Claudia"
                    className="w-5 h-5 rounded-full object-cover shrink-0 mt-0.5"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <p>¡Me encanta! 🙌 Ya estoy preparando una promoción especial para este fin de semana. Estoy muy emocionada con todo lo que se viene. ¡Gracias por tu apoyo de siempre! 😊</p>
                    <span className="text-[9px] text-slate-400 block text-right mt-0.5">9:22 a. m.</span>
                  </div>
                </div>
              </>
            )}

            {/* CHAT 3: VIDASALUD DIABETES (+56 972341658) */}
            {activeChat === 'vidasalud' && (
              <>
                <div className="bg-[#202c33] p-2.5 rounded-2xl rounded-tl-none max-w-[85%] text-slate-200 shadow-sm flex items-start gap-2">
                  <img
                    src={vidasaludAvatar}
                    alt="+56 972341658"
                    className="w-5 h-5 rounded-full object-cover shrink-0 mt-0.5"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <p>Hola William, un gusto saludarte👋</p>
                    <span className="text-[9px] text-slate-400 block text-right mt-0.5">10:14 a. m.</span>
                  </div>
                </div>

                <div className="bg-[#202c33] p-2.5 rounded-2xl rounded-tl-none max-w-[85%] text-slate-200 shadow-sm flex items-start gap-2">
                  <img
                    src={vidasaludAvatar}
                    alt="+56 972341658"
                    className="w-5 h-5 rounded-full object-cover shrink-0 mt-0.5"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <p>Te comparto un pantallazo de mi MiniApp para que veas cómo va quedando 👇</p>
                    <span className="text-[9px] text-slate-400 block text-right mt-0.5">10:15 a. m.</span>
                  </div>
                </div>

                {/* Embedded MiniApp Preview Card inside Chat with REAL GLUCOSE MONITOR PHOTO */}
                <div className="bg-[#202c33] p-2 rounded-2xl rounded-tl-none max-w-[92%] shadow-md border border-slate-700/40">
                  <div className="bg-[#0b1715] rounded-xl overflow-hidden border border-emerald-500/40 text-white">
                    <div className="p-2.5 pb-1 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <HeartPulse className="w-4 h-4 text-emerald-400" />
                        <span className="font-bold text-xs text-white">VidaSalud Diabetes</span>
                      </div>
                      <span className="text-[9px] text-emerald-300">Tu salud en tus manos</span>
                    </div>

                    {/* Real Glucose Meter Photo */}
                    <div className="relative h-28 w-full overflow-hidden">
                      <img
                        src={vidasaludMeterHero}
                        alt="Glucómetro VidaSalud Diabetes"
                        className="w-full h-full object-cover object-center"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-2.5">
                        <div className="flex items-baseline justify-between">
                          <div>
                            <h5 className="font-heading font-black text-xs text-emerald-200 leading-tight">
                              Controla tu diabetes de forma fácil
                            </h5>
                            <p className="text-[9px] text-slate-200">
                              Pequeños hábitos, grandes cambios
                            </p>
                          </div>
                          <div className="bg-emerald-950/80 border border-emerald-500/60 px-2 py-0.5 rounded text-center">
                            <span className="text-xs font-mono font-bold text-emerald-300">98 mg/dL</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-1 p-2 bg-[#12221f] text-[9px] text-center text-slate-200">
                      <div className="bg-[#182e2a] p-1 rounded">🍎 Alimentación</div>
                      <div className="bg-[#182e2a] p-1 rounded">📟 Glucosa</div>
                      <div className="bg-[#182e2a] p-1 rounded">🏃 Ejercicio</div>
                      <div className="bg-[#182e2a] p-1 rounded">💊 Medicinas</div>
                      <div className="bg-[#182e2a] p-1 rounded">📖 Consejos</div>
                      <div className="bg-[#182e2a] p-1 rounded">👥 Comunidad</div>
                    </div>
                  </div>
                  <span className="text-[9px] text-slate-400 block text-right mt-1">10:15 a. m.</span>
                </div>

                <div className="bg-[#202c33] p-2.5 rounded-2xl rounded-tl-none max-w-[85%] text-slate-200 shadow-sm flex items-start gap-2">
                  <img
                    src={vidasaludAvatar}
                    alt="+56 972341658"
                    className="w-5 h-5 rounded-full object-cover shrink-0 mt-0.5"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <p>La verdad al principio pensé que a mi edad sería muy difícil crear algo así, pero con el paso a paso de la Fábrica Mini Ads lo he logrado. Estoy muy contento con el resultado. 🙏</p>
                    <span className="text-[9px] text-slate-400 block text-right mt-0.5">10:16 a. m.</span>
                  </div>
                </div>

                <div className="bg-[#202c33] p-2.5 rounded-2xl rounded-tl-none max-w-[85%] text-slate-200 shadow-sm">
                  <p>Ahora ya puedo compartirlo con otras personas que también viven con diabetes y me han dicho que les parece muy útil. 💪</p>
                  <span className="text-[9px] text-slate-400 block text-right mt-1">10:17 a. m.</span>
                </div>

                <div className="bg-[#202c33] p-2.5 rounded-2xl rounded-tl-none max-w-[85%] text-slate-200 shadow-sm">
                  <p>¿Tú qué opinas? ¿Crees que podemos hacer algunos ajustes para que llegue a más personas?</p>
                  <span className="text-[9px] text-slate-400 block text-right mt-1">10:17 a. m.</span>
                </div>

                {/* William's response in green */}
                <div className="bg-[#005c4b] p-2.5 rounded-2xl rounded-tr-none max-w-[85%] ml-auto text-slate-100 shadow-sm">
                  <p>Hola! Qué gran trabajo 👏 Se ve excelente, muy profesional. ¡Felicitaciones! 🎉</p>
                  <div className="flex items-center justify-end gap-1 mt-1 text-[9px] text-slate-300">
                    <span>10:20 a. m.</span>
                    <CheckCheck className="w-3.5 h-3.5 text-cyan-300" />
                  </div>
                </div>

                <div className="bg-[#005c4b] p-2.5 rounded-2xl rounded-tr-none max-w-[85%] ml-auto text-slate-100 shadow-sm">
                  <p>Si quieres, podemos revisar algunas ideas para mejorarla y que llegando a más personas que la necesiten. 💪</p>
                  <div className="flex items-center justify-end gap-1 mt-1 text-[9px] text-slate-300">
                    <span>10:21 a. m.</span>
                    <CheckCheck className="w-3.5 h-3.5 text-cyan-300" />
                  </div>
                </div>

                <div className="bg-[#202c33] p-2.5 rounded-2xl rounded-tl-none max-w-[85%] text-slate-200 shadow-sm flex items-start gap-2">
                  <img
                    src={vidasaludAvatar}
                    alt="+56 972341658"
                    className="w-5 h-5 rounded-full object-cover shrink-0 mt-0.5"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <p>¡Perfecto! Me encantaría. Gracias por tu apoyo siempre. 🙏</p>
                    <span className="text-[9px] text-slate-400 block text-right mt-0.5">10:22 a. m.</span>
                  </div>
                </div>
              </>
            )}

            {/* CHAT 4: ELIANA (ESTUDIAPRO) */}
            {activeChat === 'eliana_educacion' && (
              <>
                <div className="bg-[#202c33] p-2.5 rounded-2xl rounded-tl-none max-w-[85%] text-slate-200 shadow-sm flex items-start gap-2">
                  <img
                    src={elianaAvatar}
                    alt="Eliana"
                    className="w-5 h-5 rounded-full object-cover shrink-0 mt-0.5"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <p>¡Hola, William! ☀️</p>
                    <span className="text-[9px] text-slate-400 block text-right mt-0.5">8:49 a. m.</span>
                  </div>
                </div>

                <div className="bg-[#202c33] p-2.5 rounded-2xl rounded-tl-none max-w-[85%] text-slate-200 shadow-sm flex items-start gap-2">
                  <img
                    src={elianaAvatar}
                    alt="Eliana"
                    className="w-5 h-5 rounded-full object-cover shrink-0 mt-0.5"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <p>Quería enseñarte cómo quedó la MiniApp de mi proyecto educativo. Me tiene súper contenta 🤩</p>
                    <span className="text-[9px] text-slate-400 block text-right mt-0.5">8:50 a. m.</span>
                  </div>
                </div>

                {/* Embedded MiniApp Preview Card inside Chat with REAL STUDENT PHOTO */}
                <div className="bg-[#202c33] p-2 rounded-2xl rounded-tl-none max-w-[92%] shadow-md border border-slate-700/40">
                  <div className="bg-[#0b101c] rounded-xl overflow-hidden border border-blue-500/40 text-white">
                    <div className="p-2.5 pb-1 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <GraduationCap className="w-4 h-4 text-blue-400" />
                        <span className="font-bold text-xs">EstudiaPro</span>
                      </div>
                      <span className="text-[9px] text-blue-300">Tu futuro en tus manos</span>
                    </div>

                    {/* Real Student Photo Banner */}
                    <div className="relative h-28 w-full overflow-hidden">
                      <img
                        src={estudiaproHero}
                        alt="Estudiante EstudiaPro"
                        className="w-full h-full object-cover object-top"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-2.5">
                        <h5 className="font-heading font-black text-xs text-white leading-tight">
                          Organiza tu estudio de forma simple
                        </h5>
                        <p className="text-[9px] text-blue-200">
                          Planifica, aprende y alcanza tus metas
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-1 p-2 bg-[#141b2c] text-[9px] text-center text-slate-200">
                      <div className="bg-[#1e293b] p-1.5 rounded">📅 Plan Estudio</div>
                      <div className="bg-[#1e293b] p-1.5 rounded">✓ Mis Tareas</div>
                      <div className="bg-[#1e293b] p-1.5 rounded">📊 Progreso</div>
                      <div className="bg-[#1e293b] p-1.5 rounded">📖 Recursos</div>
                      <div className="bg-[#1e293b] p-1.5 rounded">👥 Comunidad</div>
                      <div className="bg-[#1e293b] p-1.5 rounded">⭐ Consejos</div>
                    </div>
                  </div>
                  <span className="text-[9px] text-slate-400 block text-right mt-1">8:50 a. m.</span>
                </div>

                <div className="bg-[#202c33] p-2.5 rounded-2xl rounded-tl-none max-w-[85%] text-slate-200 shadow-sm flex items-start gap-2">
                  <img
                    src={elianaAvatar}
                    alt="Eliana"
                    className="w-5 h-5 rounded-full object-cover shrink-0 mt-0.5"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <p>No te imaginas lo útil que me está siendo. 🙌 Antes tenía todo en mil notas y ahora por fin tengo todo organizado en un solo lugar.</p>
                    <span className="text-[9px] text-slate-400 block text-right mt-0.5">8:52 a. m.</span>
                  </div>
                </div>

                <div className="bg-[#202c33] p-2.5 rounded-2xl rounded-tl-none max-w-[85%] text-slate-200 shadow-sm">
                  <p>Lo mejor es que mis estudiantes me han dicho que les encanta, que se les hace mucho más fácil seguir sus planes y no se les pasa ninguna tarea. 😄</p>
                  <span className="text-[9px] text-slate-400 block text-right mt-1">8:53 a. m.</span>
                </div>

                <div className="bg-[#202c33] p-2.5 rounded-2xl rounded-tl-none max-w-[85%] text-slate-200 shadow-sm">
                  <p>Ahora estoy enfocada en lanzar una campaña en redes para invitar a más estudiantes. ¿Crees que me puedes apoyar con algunas ideas de contenido? 🎯</p>
                  <span className="text-[9px] text-slate-400 block text-right mt-1">8:54 a. m.</span>
                </div>

                {/* William's response in green */}
                <div className="bg-[#005c4b] p-2.5 rounded-2xl rounded-tr-none max-w-[85%] ml-auto text-slate-100 shadow-sm">
                  <p>¡Hola Eliana! Qué buena noticia 😊 Se ve increíble, muy profesional. ¡Felicitaciones por este gran avance! 🎉</p>
                  <div className="flex items-center justify-end gap-1 mt-1 text-[9px] text-slate-300">
                    <span>8:57 a. m.</span>
                    <CheckCheck className="w-3.5 h-3.5 text-cyan-300" />
                  </div>
                </div>

                <div className="bg-[#005c4b] p-2.5 rounded-2xl rounded-tr-none max-w-[85%] ml-auto text-slate-100 shadow-sm">
                  <p>Claro que sí, con gusto te ayudo con ideas de contenido para redes sociales. Podemos crear publicaciones, reels y hasta testimonios de estudiantes. Te comparto un plan esta semana. 💡</p>
                  <div className="flex items-center justify-end gap-1 mt-1 text-[9px] text-slate-300">
                    <span>8:58 a. m.</span>
                    <CheckCheck className="w-3.5 h-3.5 text-cyan-300" />
                  </div>
                </div>

                <div className="bg-[#202c33] p-2.5 rounded-2xl rounded-tl-none max-w-[85%] text-slate-200 shadow-sm flex items-start gap-2">
                  <img
                    src={elianaAvatar}
                    alt="Eliana"
                    className="w-5 h-5 rounded-full object-cover shrink-0 mt-0.5"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <p>¡Excelente! Me encanta. Muchas gracias por tu apoyo. De verdad, se nota la diferencia. 🙏 Quedo atenta. 😊</p>
                    <span className="text-[9px] text-slate-400 block text-right mt-0.5">8:59 a. m.</span>
                  </div>
                </div>
              </>
            )}

          </div>

          {/* WhatsApp Bottom Input Bar */}
          <div className="bg-[#202c33] p-2 flex items-center gap-2 border-t border-slate-700/40">
            <Smile className="w-5 h-5 text-slate-400 shrink-0" />
            <div className="flex-1 bg-[#2a3942] rounded-full px-3 py-1.5 text-slate-400 text-xs">
              Escribe un mensaje...
            </div>
            <Paperclip className="w-4 h-4 text-slate-400 shrink-0" />
            <Camera className="w-4 h-4 text-slate-400 shrink-0" />
            <div className="w-8 h-8 rounded-full bg-[#00a884] flex items-center justify-center text-slate-950 shrink-0">
              <Mic className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Trust Notice */}
      <div className="mt-8 text-center text-xs text-slate-400 max-w-lg mx-auto flex items-center justify-center gap-2">
        <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
        <span>Fotos reales y capturas originales compartidas por los alumnos. Cero ilustraciones o avatares de cómic.</span>
      </div>
    </section>
  );
};
