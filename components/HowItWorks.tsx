
import React from 'react';
import { Mic, BarChart2, TrendingUp } from './Icons';
import { Language } from '../types';
import { translations } from '../translations';

interface HowItWorksProps {
  language: Language;
  isDark: boolean;
}

export default function HowItWorks({ language, isDark }: HowItWorksProps) {
  const t = translations[language].how_it_works;

  const steps = [
    {
      title: t.step1_title,
      desc: t.step1_desc,
      icon: <Mic size={24} />,
      color: 'bg-blue-500',
      delay: 'delay-100'
    },
    {
      title: t.step2_title,
      desc: t.step2_desc,
      icon: <BarChart2 size={24} />,
      color: 'bg-purple-500',
      delay: 'delay-200'
    },
    {
      title: t.step3_title,
      desc: t.step3_desc,
      icon: <TrendingUp size={24} />,
      color: 'bg-emerald-500',
      delay: 'delay-300'
    }
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">{t.title}</h2>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className={`hidden md:block absolute top-12 left-0 w-full h-1 z-0
            ${isDark ? 'bg-zinc-800' : 'bg-zinc-200'}
          `}></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, idx) => (
              <div 
                key={idx} 
                className={`flex flex-col items-center text-center group
                  ${step.delay} animate-in fade-in slide-in-from-bottom-4 duration-700
                `}
              >
                <div className={`w-24 h-24 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20 transition-transform duration-300 group-hover:scale-110
                  ${isDark ? 'bg-zinc-900 border-4 border-zinc-900' : 'bg-white border-4 border-white'}
                `}>
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white ${step.color}`}>
                    {step.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className={`max-w-xs mx-auto leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
