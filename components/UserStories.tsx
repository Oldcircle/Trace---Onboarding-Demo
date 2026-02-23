
import React from 'react';
import { User, MessageCircle } from './Icons';
import { Language } from '../types';
import { translations } from '../translations';

interface UserStoriesProps {
  language: Language;
  isDark: boolean;
}

export default function UserStories({ language, isDark }: UserStoriesProps) {
  const t = translations[language].stories;

  const stories = [
    {
      role: t.s1_role,
      quote: t.s1_quote,
      icon: <User size={24} className="text-blue-500" />,
      delay: 'delay-100'
    },
    {
      role: t.s2_role,
      quote: t.s2_quote,
      icon: <User size={24} className="text-purple-500" />,
      delay: 'delay-200'
    },
    {
      role: t.s3_role,
      quote: t.s3_quote,
      icon: <User size={24} className="text-emerald-500" />,
      delay: 'delay-300'
    }
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-transparent to-blue-500/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">{t.title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, idx) => (
            <div 
              key={idx}
              className={`p-8 rounded-3xl border transition-all duration-300 hover:scale-105
                ${isDark 
                  ? 'bg-zinc-900/50 border-zinc-800 hover:bg-zinc-900' 
                  : 'bg-white border-zinc-100 shadow-xl shadow-zinc-200/50 hover:shadow-2xl'}
              `}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center
                  ${isDark ? 'bg-zinc-800' : 'bg-zinc-50'}
                `}>
                  {story.icon}
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider opacity-70">{story.role}</h4>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -top-4 -left-2 opacity-10">
                  <MessageCircle size={32} />
                </div>
                <p className={`text-lg italic leading-relaxed pl-4 border-l-4 border-blue-500/30 ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>
                  {story.quote}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
