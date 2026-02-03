import React from 'react';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { MOCK_STATS_TREND } from '../constants';
import { TrendingUp, Tag, Zap, ArrowRight, Calendar } from './Icons';
import { Theme } from '../types';

interface StatsTabProps {
  theme: Theme;
}

const StatsTab: React.FC<StatsTabProps> = ({ theme }) => {
  const isDark = theme === 'dark';
  const trendColor = isDark ? '#60a5fa' : '#4f46e5'; // Blue vs Indigo

  return (
    <div className="pb-28 pt-6 px-5 h-full overflow-y-auto no-scrollbar">
      <h2 className={`text-3xl font-bold tracking-tight mb-8 ${isDark ? 'text-white' : 'text-zinc-900'}`}>Insights</h2>

      {/* Module A: Trend */}
      <div className={`backdrop-blur-md p-6 rounded-[32px] border mb-6 ${isDark ? 'bg-zinc-900/30 border-white/5' : 'bg-white/60 border-zinc-200 shadow-sm'}`}>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400">
             <TrendingUp size={18} />
          </div>
          <div>
            <h3 className={`font-semibold text-sm tracking-tight ${isDark ? 'text-zinc-200' : 'text-zinc-700'}`}>Emotional Trend</h3>
            <p className={`text-[10px] ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>Last 7 Days</p>
          </div>
        </div>
        <div className="h-36 w-full -ml-2">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={MOCK_STATS_TREND}>
              <defs>
                <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={trendColor} stopOpacity={0.4}/>
                  <stop offset="95%" stopColor={trendColor} stopOpacity={0}/>
                </linearGradient>
              </defs>
              <Tooltip 
                contentStyle={{
                    backgroundColor: isDark ? '#18181b' : '#ffffff', 
                    border: isDark ? '1px solid #27272a' : '1px solid #e4e4e7', 
                    borderRadius: '12px', 
                    fontSize: '12px', 
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.5)',
                    color: isDark ? '#fff' : '#000'
                }}
                itemStyle={{color: isDark ? '#fff' : '#18181b', fontWeight: 600}}
                cursor={{stroke: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)', strokeWidth: 1}}
              />
              <Area 
                type="monotone" 
                dataKey="score" 
                stroke={trendColor} 
                strokeWidth={3} 
                fillOpacity={1} 
                fill="url(#colorScore)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        {/* Module B: Top Tags */}
        <div className={`backdrop-blur-md p-5 rounded-[28px] border flex flex-col ${isDark ? 'bg-zinc-900/30 border-white/5' : 'bg-white/60 border-zinc-200 shadow-sm'}`}>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="p-1.5 rounded-lg bg-violet-500/10 text-violet-400">
                <Tag size={14} />
            </div>
            <h3 className={`font-semibold text-xs tracking-wide uppercase ${isDark ? 'text-zinc-200' : 'text-zinc-700'}`}>Top Tags</h3>
          </div>
          <div className="space-y-3 flex-1">
            {[
              {name: 'Work', count: 12, color: isDark ? 'text-violet-300' : 'text-violet-600'}, 
              {name: 'Sleep', count: 8, color: isDark ? 'text-zinc-400' : 'text-zinc-600'}, 
              {name: 'Coffee', count: 5, color: isDark ? 'text-zinc-400' : 'text-zinc-600'}
            ].map((t, i) => (
              <div key={i} className="flex justify-between items-center text-xs">
                <span className={`${t.color} font-medium`}>#{t.name}</span>
                <span className={`font-mono text-[10px] ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>{t.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Module C: Common Triggers */}
        <div className={`backdrop-blur-md p-5 rounded-[28px] border flex flex-col ${isDark ? 'bg-zinc-900/30 border-white/5' : 'bg-white/60 border-zinc-200 shadow-sm'}`}>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-400">
                <Zap size={14} />
            </div>
            <h3 className={`font-semibold text-xs tracking-wide uppercase ${isDark ? 'text-zinc-200' : 'text-zinc-700'}`}>Triggers</h3>
          </div>
          <div className="space-y-3 flex-1">
            {[
              {name: 'Deadline', count: 'High'}, 
              {name: 'Commute', count: 'Med'}, 
            ].map((t, i) => (
              <div key={i} className="flex justify-between items-center text-xs">
                <span className={`truncate max-w-[50px] ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>{t.name}</span>
                <span className={`font-bold px-1.5 py-0.5 rounded text-[9px] uppercase tracking-wider ${t.count === 'High' ? 'text-rose-400 bg-rose-500/10' : 'text-orange-400 bg-orange-500/10'}`}>{t.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Module D: Suggestion Review */}
      <div className="group bg-gradient-to-br from-indigo-600/20 to-purple-600/10 backdrop-blur-xl p-6 rounded-[32px] border border-white/10 relative overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] opacity-20 rotate-12 group-hover:rotate-6 transition-transform duration-700">
           <ArrowRight size={120} />
        </div>
        <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
                <Calendar size={14} className="text-indigo-300"/>
                <h3 className="text-indigo-200 text-xs font-bold uppercase tracking-widest">Weekly Focus</h3>
            </div>
            <p className={`text-lg font-serif italic mb-6 leading-relaxed opacity-90 ${isDark ? 'text-white' : 'text-indigo-900'}`}>"Don't let perfectionism delay the start of your projects."</p>
            <button className="text-xs bg-indigo-500 hover:bg-indigo-400 text-white px-4 py-2 rounded-full font-semibold transition-colors shadow-lg shadow-indigo-500/20">
            View Context
            </button>
        </div>
      </div>
    </div>
  );
};

export default StatsTab;