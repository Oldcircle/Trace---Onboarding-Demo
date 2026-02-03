import React from 'react';
import { TraceEntry, Theme } from '../types';
import { MoreHorizontal, Zap, Smile, ArrowRight } from './Icons';

interface EntryCardProps {
  entry: TraceEntry;
  theme: Theme;
  onClick?: () => void;
}

const EntryCard: React.FC<EntryCardProps> = ({ entry, theme, onClick }) => {
  const isPositive = entry.impactScore >= 0;
  const isDark = theme === 'dark';

  return (
    <div 
      onClick={onClick}
      className={`group relative backdrop-blur-md border p-6 rounded-[32px] mb-4 active:scale-[0.98] transition-all duration-300 shadow-xl overflow-hidden cursor-pointer
        ${isDark 
          ? 'bg-zinc-900/40 border-white/5 hover:border-white/10 hover:bg-zinc-800/40' 
          : 'bg-white/60 border-black/5 hover:border-black/10 hover:bg-white/80 shadow-zinc-200/50'
        }
      `}
    >
      {/* Subtle Glow Gradient */}
      <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full blur-[60px] opacity-20 pointer-events-none ${isPositive ? 'bg-emerald-500' : 'bg-rose-500'}`}></div>

      <div className="flex justify-between items-start mb-4 relative z-10">
        <div>
          <h3 className={`font-semibold text-xl tracking-tight leading-tight ${isDark ? 'text-white' : 'text-zinc-900'}`}>{entry.title}</h3>
          <p className={`text-xs font-medium tracking-wide uppercase mt-1.5 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>{entry.time} • {entry.type}</p>
        </div>
        <button className={`transition-colors p-1 rounded-full ${isDark ? 'text-zinc-600 hover:text-white hover:bg-white/5' : 'text-zinc-400 hover:text-zinc-900 hover:bg-black/5'}`}>
          <MoreHorizontal size={20} />
        </button>
      </div>

      {/* Structured Fields */}
      <div className="space-y-4 relative z-10">
        {/* Trigger */}
        <div className="flex items-start gap-3.5">
          <div className="mt-0.5 min-w-[20px] text-amber-500/90"><Zap size={16} /></div>
          <div>
            <p className={`text-[10px] uppercase tracking-widest font-semibold mb-0.5 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>Trigger</p>
            <p className={`text-sm leading-relaxed font-light ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>{entry.trigger}</p>
          </div>
        </div>

        {/* Emotion & Impact */}
        <div className="flex items-start gap-3.5">
          <div className="mt-0.5 min-w-[20px] text-indigo-400"><Smile size={16} /></div>
          <div className="w-full">
            <p className={`text-[10px] uppercase tracking-widest font-semibold mb-0.5 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>Emotion</p>
            <div className="flex items-center justify-between w-full">
              <p className={`text-sm leading-relaxed font-light ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>{entry.emotion}</p>
              <div className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                  isPositive 
                  ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' 
                  : 'bg-rose-500/10 border-rose-500/20 text-rose-400'
              }`}>
                {entry.impactScore > 0 ? '+' : ''}{entry.impactScore}
              </div>
            </div>
          </div>
        </div>

        {/* Suggestion */}
        <div className="flex items-start gap-3.5 pt-1">
          <div className="mt-0.5 min-w-[20px] text-violet-400"><ArrowRight size={16} /></div>
          <div>
            <p className={`text-[10px] uppercase tracking-widest font-semibold mb-0.5 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>Insight</p>
            <p className={`text-sm leading-relaxed italic opacity-80 ${isDark ? 'text-zinc-200' : 'text-zinc-800'}`}>"{entry.suggestion}"</p>
          </div>
        </div>
      </div>

      {/* Tags */}
      <div className="flex gap-2 mt-5 flex-wrap relative z-10">
        {entry.tags.map(tag => (
          <span key={tag} className={`text-[10px] font-medium px-2.5 py-1 rounded-full border transition-colors
            ${isDark 
                ? 'bg-white/5 text-zinc-400 border-white/5 hover:bg-white/10 hover:text-zinc-300' 
                : 'bg-black/5 text-zinc-500 border-black/5 hover:bg-black/10 hover:text-zinc-800'}
          `}>
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default EntryCard;