
import React from 'react';
import { Cloud, RefreshCw, BookOpen } from './Icons';
import { Language } from '../types';
import { translations } from '../translations';

interface PainPointsProps {
  language: Language;
  isDark: boolean;
}

export default function PainPoints({ language, isDark }: PainPointsProps) {
  const t = translations[language].pain_points;

  const cards = [
    {
      title: t.card1_title,
      desc: t.card1_desc,
      icon: <Cloud size={32} className="text-blue-500" />,
      delay: 'delay-100'
    },
    {
      title: t.card2_title,
      desc: t.card2_desc,
      icon: <RefreshCw size={32} className="text-purple-500" />,
      delay: 'delay-200'
    },
    {
      title: t.card3_title,
      desc: t.card3_desc,
      icon: <BookOpen size={32} className="text-amber-500" />,
      delay: 'delay-300'
    }
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">{t.title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div 
              key={idx}
              className={`p-8 rounded-3xl border transition-all duration-300 hover:scale-105 group
                ${isDark 
                  ? 'bg-zinc-900/50 border-zinc-800 hover:bg-zinc-900' 
                  : 'bg-white border-zinc-100 shadow-xl shadow-zinc-200/50 hover:shadow-2xl'}
              `}
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors
                ${isDark ? 'bg-zinc-800 group-hover:bg-zinc-700' : 'bg-zinc-50 group-hover:bg-zinc-100'}
              `}>
                {card.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{card.title}</h3>
              <p className={`leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className={`text-xl md:text-2xl font-medium italic opacity-80 ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>
            "{t.transition}"
          </p>
        </div>
      </div>
    </section>
  );
}
