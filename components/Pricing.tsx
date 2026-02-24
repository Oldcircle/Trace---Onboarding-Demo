
import React, { useState } from 'react';
import { Check, X, Zap } from './Icons';
import { Language } from '../types';
import { translations } from '../translations';

interface PricingProps {
  language: Language;
  isDark: boolean;
}

export default function Pricing({ language, isDark }: PricingProps) {
  const t = {
    ...translations['en'].pricing,
    ...translations[language].pricing
  };
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

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
               <div className="flex items-center gap-3 opacity-50">
                <X size={20} />
                <span>{t.p_ai_tags || '-'}</span>
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
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-bold flex items-center gap-2">
                  {t.pro}
                  <span className="px-3 py-1 rounded-full text-xs bg-blue-500 text-white font-bold uppercase tracking-wider">
                    Trace Pro
                  </span>
                </h3>
              </div>
              
              {/* Billing Selection */}
              <div className="flex flex-col gap-3 mt-6 mb-6">
                <div 
                  onClick={() => setBillingCycle('monthly')}
                  className={`p-4 rounded-2xl border-2 cursor-pointer transition-all flex justify-between items-center
                    ${billingCycle === 'monthly' 
                      ? 'border-blue-500 bg-blue-500/10' 
                      : (isDark ? 'border-zinc-800 hover:border-zinc-700' : 'border-zinc-100 hover:border-zinc-200')}
                  `}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center
                      ${billingCycle === 'monthly' ? 'border-blue-500' : 'border-zinc-400'}
                    `}>
                      {billingCycle === 'monthly' && <div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>}
                    </div>
                    <div className="text-sm font-bold">{t.plan_monthly}</div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="font-bold">{t.price_monthly}</span>
                    <span className="text-xs opacity-60">{t.cancel_anytime}</span>
                  </div>
                </div>

                <div 
                  onClick={() => setBillingCycle('yearly')}
                  className={`p-4 rounded-2xl border-2 cursor-pointer transition-all flex justify-between items-center relative overflow-hidden
                    ${billingCycle === 'yearly' 
                      ? 'border-blue-500 bg-blue-500/10' 
                      : (isDark ? 'border-zinc-800 hover:border-zinc-700' : 'border-zinc-100 hover:border-zinc-200')}
                  `}
                >
                  <div className="flex items-center gap-3 relative z-10">
                     <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center
                      ${billingCycle === 'yearly' ? 'border-blue-500' : 'border-zinc-400'}
                    `}>
                      {billingCycle === 'yearly' && <div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>}
                    </div>
                    <div className="text-sm font-bold">{t.plan_yearly}</div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-500 text-white">
                      {t.save_tag}
                    </span>
                  </div>
                  <div className="flex flex-col items-end relative z-10">
                    <span className="font-bold">{t.price_yearly}</span>
                    <span className="text-xs opacity-60">{t.billed_annually}</span>
                  </div>
                </div>
              </div>
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
                <Zap size={20} className="text-amber-500" fill="currentColor" />
                <span className="font-bold text-amber-500">{t.p_ai_tags_pro}</span>
              </div>
            </div>

            <button className="w-full py-4 rounded-full font-bold transition-all bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 mb-4">
              {t.cta_pro}
            </button>
            <div className="text-center space-y-2">
               <p className="text-xs font-bold text-blue-500">
                {t.trial_text}
              </p>
              <button className="text-xs opacity-50 hover:opacity-100 transition-opacity">
                {t.restore}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
