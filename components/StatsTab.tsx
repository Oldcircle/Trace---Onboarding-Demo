import React from 'react';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { MOCK_STATS_TREND } from '../constants';
import { TrendingUp, Tag, Zap, ArrowRight, Calendar } from './Icons';

const StatsTab: React.FC = () => {
  return (
    <div className="pb-28 pt-6 px-5 h-full overflow-y-auto no-scrollbar">
      <h2 className="text-white text-3xl font-bold tracking-tight mb-8">Insights</h2>

      {/* Module A: Trend */}
      <div className="bg-zinc-900/30 backdrop-blur-md p-6 rounded-[32px] border border-white/5 mb-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400">
             <TrendingUp size={18} />
          </div>
          <div>
            <h3 className="text-zinc-200 font-semibold text-sm tracking-tight">Emotional Trend</h3>
            <p className="text-zinc-500 text-[10px]">Last 7 Days</p>
          </div>
        </div>
        <div className="h-36 w-full -ml-2">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={MOCK_STATS_TREND}>
              <defs>
                <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#60a5fa" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="#60a5fa" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <Tooltip 
                contentStyle={{backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '12px', fontSize: '12px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.5)'}}
                itemStyle={{color: '#fff', fontWeight: 600}}
                cursor={{stroke: 'rgba(255,255,255,0.1)', strokeWidth: 1}}
              />
              <Area 
                type="monotone" 
                dataKey="score" 
                stroke="#60a5fa" 
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
        <div className="bg-zinc-900/30 backdrop-blur-md p-5 rounded-[28px] border border-white/5 flex flex-col">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="p-1.5 rounded-lg bg-violet-500/10 text-violet-400">
                <Tag size={14} />
            </div>
            <h3 className="text-zinc-200 font-semibold text-xs tracking-wide uppercase">Top Tags</h3>
          </div>
          <div className="space-y-3 flex-1">
            {[
              {name: 'Work', count: 12, color: 'text-violet-300'}, 
              {name: 'Sleep', count: 8, color: 'text-zinc-400'}, 
              {name: 'Coffee', count: 5, color: 'text-zinc-400'}
            ].map((t, i) => (
              <div key={i} className="flex justify-between items-center text-xs">
                <span className={`${t.color} font-medium`}>#{t.name}</span>
                <span className="text-zinc-500 font-mono text-[10px]">{t.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Module C: Common Triggers */}
        <div className="bg-zinc-900/30 backdrop-blur-md p-5 rounded-[28px] border border-white/5 flex flex-col">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-400">
                <Zap size={14} />
            </div>
            <h3 className="text-zinc-200 font-semibold text-xs tracking-wide uppercase">Triggers</h3>
          </div>
          <div className="space-y-3 flex-1">
            {[
              {name: 'Deadline', count: 'High'}, 
              {name: 'Commute', count: 'Med'}, 
            ].map((t, i) => (
              <div key={i} className="flex justify-between items-center text-xs">
                <span className="text-zinc-400 truncate max-w-[50px]">{t.name}</span>
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
            <p className="text-white text-lg font-serif italic mb-6 leading-relaxed opacity-90">"Don't let perfectionism delay the start of your projects."</p>
            <button className="text-xs bg-indigo-500 hover:bg-indigo-400 text-white px-4 py-2 rounded-full font-semibold transition-colors shadow-lg shadow-indigo-500/20">
            View Context
            </button>
        </div>
      </div>
    </div>
  );
};

export default StatsTab;