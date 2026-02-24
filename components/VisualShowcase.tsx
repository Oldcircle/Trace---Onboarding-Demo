
import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';

interface VisualShowcaseProps {
  language: Language;
  isDark: boolean;
}

export default function VisualShowcase({ language, isDark }: VisualShowcaseProps) {
  const t = translations[language].visual;

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">{t.title}</h2>
        <p className={`text-xl font-light ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
          {t.subtitle}
        </p>
      </div>

      <div className={`relative w-full max-w-6xl mx-auto h-[400px] md:h-[500px] rounded-3xl border overflow-hidden
        ${isDark ? 'bg-zinc-900/30 border-zinc-800' : 'bg-zinc-50 border-zinc-200'}
      `}>
        {/* Simulated Chart Grid */}
        <div className="absolute inset-0 grid grid-cols-7 grid-rows-5 opacity-10">
          {Array.from({ length: 35 }).map((_, i) => (
            <div key={i} className={`border-r border-b ${isDark ? 'border-white' : 'border-black'}`}></div>
          ))}
        </div>

        {/* Chart Content - SVG */}
        <svg className="w-full h-full absolute inset-0" preserveAspectRatio="none">
           {/* Gradient Area */}
           <defs>
              <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2"/>
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0"/>
              </linearGradient>
           </defs>
           <path d="M0,400 C100,350 200,380 300,300 C400,220 500,280 600,200 C700,120 800,180 900,150 C1000,120 1100,80 1200,50 L1200,500 L0,500 Z" 
             fill="url(#chartGradient)" 
           />
           <path d="M0,400 C100,350 200,380 300,300 C400,220 500,280 600,200 C700,120 800,180 900,150 C1000,120 1100,80 1200,50" 
             fill="none" 
             stroke="#3B82F6" 
             strokeWidth="3"
             className="drop-shadow-lg"
           />
           
           {/* Candles (Simplified) */}
           {/* Week 1 */}
           <rect x="5%" y="60%" width="10" height="60" fill="#EF4444" rx="2" />
           <line x1="5.5%" y1="55%" x2="5.5%" y2="75%" stroke="#EF4444" strokeWidth="2" />
           
           <rect x="15%" y="50%" width="10" height="40" fill="#10B981" rx="2" />
           <line x1="15.5%" y1="45%" x2="15.5%" y2="65%" stroke="#10B981" strokeWidth="2" />

           <rect x="25%" y="40%" width="10" height="80" fill="#10B981" rx="2" />
           <line x1="25.5%" y1="35%" x2="25.5%" y2="65%" stroke="#10B981" strokeWidth="2" />

           {/* Annotations */}
           <foreignObject x="26%" y="30%" width="150" height="50">
             <div className={`text-xs font-mono p-2 rounded backdrop-blur border ${isDark ? 'bg-white/10 border-white/20 text-white' : 'bg-black/10 border-black/20 text-black'}`}>
               {t.labels.workout}
             </div>
           </foreignObject>

           <rect x="35%" y="55%" width="10" height="30" fill="#EF4444" rx="2" />
           
           <foreignObject x="36%" y="65%" width="150" height="50">
             <div className={`text-xs font-mono p-2 rounded backdrop-blur border ${isDark ? 'bg-white/10 border-white/20 text-white' : 'bg-black/10 border-black/20 text-black'}`}>
               {t.labels.meeting}
             </div>
           </foreignObject>

           <rect x="45%" y="45%" width="10" height="50" fill="#10B981" rx="2" />
           <rect x="55%" y="35%" width="10" height="60" fill="#10B981" rx="2" />
           <rect x="65%" y="25%" width="10" height="70" fill="#10B981" rx="2" />
           
           <foreignObject x="66%" y="15%" width="150" height="50">
             <div className={`text-xs font-mono p-2 rounded backdrop-blur border ${isDark ? 'bg-white/10 border-white/20 text-white' : 'bg-black/10 border-black/20 text-black'}`}>
               {t.labels.streak}
             </div>
           </foreignObject>

           <rect x="75%" y="35%" width="10" height="20" fill="#EF4444" rx="2" />
           <rect x="85%" y="40%" width="10" height="40" fill="#10B981" rx="2" />
           <rect x="95%" y="30%" width="10" height="50" fill="#10B981" rx="2" />

        </svg>
      </div>
    </section>
  );
}
