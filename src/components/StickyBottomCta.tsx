import React, { useState, useEffect } from 'react';
import { ArrowRight, Flame } from 'lucide-react';

interface StickyBottomCtaProps {
  hotmartLink: string;
  visible: boolean;
}

export const StickyBottomCta: React.FC<StickyBottomCtaProps> = ({ hotmartLink, visible }) => {
  if (!visible) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0c0820]/95 backdrop-blur-md border-t border-purple-800/60 px-4 py-2.5 shadow-2xl">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="leading-tight">
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] text-slate-400 line-through">US$47</span>
            <span className="font-heading font-black text-sm text-cyan-300 font-mono">US$27</span>
          </div>
          <span className="text-[10px] text-slate-300 block font-medium">Pago único · Garantía 7 días</span>
        </div>

        <a
          href={hotmartLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 text-white font-bold text-xs shadow-md shadow-purple-900/50 active:scale-95 transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
        >
          <span>QUIERO ENTRAR A LA FÁBRICA 🚀</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
