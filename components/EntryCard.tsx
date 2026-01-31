import React from 'react';
import { TraceEntry } from '../types';
import { MoreHorizontal, Zap, Smile, ArrowRight } from './Icons';

interface EntryCardProps {
  entry: TraceEntry;
  onClick?: () => void;
}

const EntryCard: React.FC<EntryCardProps> = ({ entry, onClick }) => {
  const isPositive = entry.impactScore >= 0;

  return (
    <div 
      onClick={onClick}
      className="group relative bg-zinc-900/40 backdrop-blur-md border border-white/5 p-6 rounded-[32px] mb-4 active:scale-[0.98] transition-all duration-300 hover:border-white/10 hover:bg-zinc-800/40 shadow-xl overflow-hidden cursor-pointer"
    >
      {/* Subtle Glow Gradient */}
      <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full blur-[60px] opacity-20 pointer-events-none ${isPositive ? 'bg-emerald-500' : 'bg-rose-500'}`}></div>

      <div className="flex justify-between items-start mb-4 relative z-10">
        <div>
          <h3 className="text-white font-semibold text-xl tracking-tight leading-tight">{entry.title}</h3>
          <p className="text-zinc-500 text-xs font-medium tracking-wide uppercase mt-1.5">{entry.time} • {entry.type}</p>
        </div>
        <button className="text-zinc-600 hover:text-white transition-colors p-1 rounded-full hover:bg-white/5">
          <MoreHorizontal size={20} />
        </button>
      </div>

      {/* Structured Fields */}
      <div className="space-y-4 relative z-10">
        {/* Trigger */}
        <div className="flex items-start gap-3.5">
          <div className="mt-0.5 min-w-[20px] text-amber-500/90"><Zap size={16} /></div>
          <div>
            <p className="text-zinc-500 text-[10px] uppercase tracking-widest font-semibold mb-0.5">Trigger</p>
            <p className="text-zinc-300 text-sm leading-relaxed font-light">{entry.trigger}</p>
          </div>
        </div>

        {/* Emotion & Impact */}
        <div className="flex items-start gap-3.5">
          <div className="mt-0.5 min-w-[20px] text-indigo-400"><Smile size={16} /></div>
          <div className="w-full">
            <p className="text-zinc-500 text-[10px] uppercase tracking-widest font-semibold mb-0.5">Emotion</p>
            <div className="flex items-center justify-between w-full">
              <p className="text-zinc-300 text-sm leading-relaxed font-light">{entry.emotion}</p>
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
            <p className="text-zinc-500 text-[10px] uppercase tracking-widest font-semibold mb-0.5">Insight</p>
            <p className="text-zinc-200 text-sm leading-relaxed italic opacity-80">"{entry.suggestion}"</p>
          </div>
        </div>
      </div>

      {/* Tags */}
      <div className="flex gap-2 mt-5 flex-wrap relative z-10">
        {entry.tags.map(tag => (
          <span key={tag} className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-white/5 text-zinc-400 border border-white/5 hover:bg-white/10 hover:text-zinc-300 transition-colors">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default EntryCard;