
import React from 'react';
import { Check, X } from './Icons';
import { Language } from '../types';
import { translations } from '../translations';

interface PricingProps {
  language: Language;
  isDark: boolean;
}

export default function Pricing({ language, isDark }: PricingProps) {
  const t = translations[language].pricing;

  return (
    <section id="pricing" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">{t.title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Tier */}
          <div className={`p-10 rounded-[40px] border flex flex-col
            ${isDark ? 'bg-zinc-900/50 border-zinc-800' : 'bg-white border-zinc-200'}
          `}>
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">{t.free}</h3>
              <div className="text-4xl font-bold mb-4">{t.price_free}</div>
            </div>
            
            <div className="flex-1 space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Check size={20} className="text-green-500" />
                <span>{t.p_daily}</span>
              </div>
              <div className="flex items-center gap-3">
                <Check size={20} className="text-green-500" />
                <span>{t.p_history}</span>
              </div>
              <div className="flex items-center gap-3 opacity-50">
                <X size={20} />
                <span>{t.p_report}</span>
              </div>
              <div className="flex items-center gap-3 opacity-50">
                <X size={20} />
                <span>{t.p_tags}</span>
              </div>
               <div className="flex items-center gap-3">
                <Check size={20} className="text-green-500" />
                <span>{t.p_chart}</span>
              </div>
            </div>

            <button className={`w-full py-4 rounded-full font-bold transition-all
              ${isDark ? 'bg-zinc-800 hover:bg-zinc-700 text-white' : 'bg-zinc-100 hover:bg-zinc-200 text-black'}
            `}>
              {t.cta_free}
            </button>
          </div>

          {/* Pro Tier */}
          <div className={`p-10 rounded-[40px] border flex flex-col relative overflow-hidden
            ${isDark ? 'bg-zinc-900 border-blue-500/30' : 'bg-white border-blue-500/30 shadow-2xl shadow-blue-500/10'}
          `}>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
            
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                {t.pro}
                <span className="px-3 py-1 rounded-full text-xs bg-blue-500 text-white font-bold uppercase tracking-wider">
                  Trial
                </span>
              </h3>
              <div className="text-4xl font-bold mb-4">{t.price_pro}</div>
            </div>
            
            <div className="flex-1 space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Check size={20} className="text-blue-500" />
                <span>{t.p_daily_pro}</span>
              </div>
              <div className="flex items-center gap-3">
                <Check size={20} className="text-blue-500" />
                <span>{t.p_history_pro}</span>
              </div>
              <div className="flex items-center gap-3">
                <Check size={20} className="text-blue-500" />
                <span>{t.p_report_pro}</span>
              </div>
              <div className="flex items-center gap-3">
                <Check size={20} className="text-blue-500" />
                <span>{t.p_tags_pro}</span>
              </div>
               <div className="flex items-center gap-3">
                <Check size={20} className="text-blue-500" />
                <span>{t.p_chart_pro}</span>
              </div>
            </div>

            <button className="w-full py-4 rounded-full font-bold transition-all bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50">
              {t.cta_pro}
            </button>
            <p className="text-center mt-4 text-xs opacity-60">
              {t.guarantee}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
