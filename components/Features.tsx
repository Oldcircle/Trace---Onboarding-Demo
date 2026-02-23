
import React from 'react';
import { Layout, Shield, Zap, Tag, BarChart2, Lightbulb, Mic } from './Icons';
import { Language } from '../types';
import { translations } from '../translations';

interface FeaturesProps {
  language: Language;
  isDark: boolean;
}

export default function Features({ language, isDark }: FeaturesProps) {
  const t = translations[language].features;

  return (
    <section id="features" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{t.title}</h2>
          <p className={`text-xl font-light ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Feature 1: K-Line Chart */}
          <div className={`p-10 rounded-[40px] border relative overflow-hidden group transition-all duration-500 hover:shadow-2xl
              ${isDark 
                ? 'bg-[#0a0a0a] border-zinc-800 hover:border-zinc-700' 
                : 'bg-white border-zinc-100 hover:border-zinc-200 shadow-xl shadow-zinc-200/50'}
          `}>
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-600 text-white flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30`}>
                <BarChart2 size={28} fill="currentColor" />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">{t.f1_title}</h3>
              <p className={`text-lg leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                  {t.f1_desc}
              </p>
          </div>

          {/* Feature 2: AI Insights */}
          <div className={`p-10 rounded-[40px] border relative overflow-hidden group transition-all duration-500 hover:shadow-2xl
              ${isDark 
                ? 'bg-[#0a0a0a] border-zinc-800 hover:border-zinc-700' 
                : 'bg-white border-zinc-100 hover:border-zinc-200 shadow-xl shadow-zinc-200/50'}
          `}>
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 text-white flex items-center justify-center mb-6 shadow-lg shadow-purple-500/30`}>
                <Lightbulb size={28} fill="currentColor" />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">{t.f2_title}</h3>
              <p className={`text-lg leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                  {t.f2_desc}
              </p>
          </div>

          {/* Feature 3: Quick Capture */}
          <div className={`p-10 rounded-[40px] border relative overflow-hidden group transition-all duration-500 hover:shadow-2xl
              ${isDark 
                ? 'bg-[#0a0a0a] border-zinc-800 hover:border-zinc-700' 
                : 'bg-white border-zinc-100 hover:border-zinc-200 shadow-xl shadow-zinc-200/50'}
          `}>
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 text-white flex items-center justify-center mb-6 shadow-lg shadow-amber-500/30`}>
                <Mic size={28} fill="currentColor" />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">{t.f3_title}</h3>
              <p className={`text-lg leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                  {t.f3_desc}
              </p>
          </div>

          {/* Feature 4: Smart Tags */}
          <div className={`p-10 rounded-[40px] border relative overflow-hidden group transition-all duration-500 hover:shadow-2xl
              ${isDark 
                ? 'bg-[#0a0a0a] border-zinc-800 hover:border-zinc-700' 
                : 'bg-white border-zinc-100 hover:border-zinc-200 shadow-xl shadow-zinc-200/50'}
          `}>
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/30`}>
                <Tag size={28} fill="currentColor" />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">{t.f4_title}</h3>
              <p className={`text-lg leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                  {t.f4_desc}
              </p>
          </div>
        </div>
      </div>
    </section>
  );
}
