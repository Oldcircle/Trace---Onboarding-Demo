import React from 'react';
import { TraceEntry, Theme } from '../types';
import EntryCard from './EntryCard';

interface TodayTabProps {
  entries: TraceEntry[];
  theme: Theme;
  onEntryClick?: (entry: TraceEntry) => void;
}

const TodayTab: React.FC<TodayTabProps> = ({ entries, theme, onEntryClick }) => {
  const count = entries.length;
  const moodSum = entries.reduce((acc, curr) => acc + curr.moodScore, 0);
  const avgMood = count > 0 ? Math.round(moodSum / count) : 0;
  const positive = entries.filter(e => e.impactScore > 0).length;
  const negative = entries.filter(e => e.impactScore < 0).length;
  
  const isDark = theme === 'dark';

  return (
    <div className="pb-28 pt-6 px-5 h-full overflow-y-auto no-scrollbar relative z-10">
      
      {/* Header Metrics */}
      <div className="grid grid-cols-3 gap-3 mb-8">
        <MetricCard theme={theme} label="Entries" value={count.toString()} delay={0} />
        <MetricCard theme={theme} label="Mood Avg" value={avgMood.toString()} suffix="/100" delay={100} />
        <MetricCard 
            theme={theme}
            label="Balance" 
            value={
                <span className="flex items-center gap-1.5">
                    <span className="text-emerald-400">{positive}</span>
                    <span className={`w-1 h-1 rounded-full ${isDark ? 'bg-zinc-600' : 'bg-zinc-300'}`}></span>
                    <span className="text-rose-400">{negative}</span>
                </span>
            } 
            delay={200} 
        />
      </div>

      <div className="flex items-end justify-between mb-5 px-1">
        <h2 className={`text-3xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-zinc-900'}`}>Today</h2>
        <span className={`text-xs font-medium uppercase tracking-widest mb-1.5 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
            {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
        </span>
      </div>

      {entries.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 opacity-50 space-y-4">
          <div className={`w-16 h-16 rounded-full flex items-center justify-center ${isDark ? 'bg-zinc-800/50' : 'bg-zinc-100'}`}>
            <div className={`w-2 h-2 rounded-full animate-pulse ${isDark ? 'bg-zinc-600' : 'bg-zinc-400'}`}></div>
          </div>
          <p className={`font-light tracking-wide ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>No memories recorded yet.</p>
        </div>
      ) : (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            {entries.map(entry => (
            <EntryCard 
                key={entry.id} 
                entry={entry} 
                theme={theme} 
                onClick={() => onEntryClick && onEntryClick(entry)}
            />
            ))}
        </div>
      )}
    </div>
  );
};

const MetricCard = ({ label, value, suffix, delay, theme }: { label: string, value: React.ReactNode, suffix?: string, delay: number, theme: Theme }) => {
    const isDark = theme === 'dark';
    return (
        <div 
            className={`backdrop-blur-md p-4 rounded-2xl border flex flex-col items-center justify-center animate-in fade-in zoom-in duration-500 fill-mode-backwards
            ${isDark 
                ? 'bg-zinc-900/30 border-white/5' 
                : 'bg-white/60 border-black/5 shadow-sm'
            }`}
            style={{ animationDelay: `${delay}ms` }}
        >
            <p className={`text-[9px] uppercase font-bold tracking-widest mb-1 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>{label}</p>
            <div className="flex items-end gap-1">
                <div className={`text-xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-zinc-800'}`}>{value}</div>
                {suffix && <span className={`text-[10px] font-medium mb-1 ${isDark ? 'text-zinc-600' : 'text-zinc-400'}`}>{suffix}</span>}
            </div>
        </div>
    );
};

export default TodayTab;