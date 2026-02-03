import React from 'react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { MOCK_TIMELINE_DATA } from '../constants';
import { Theme } from '../types';

interface TimelineTabProps {
  theme: Theme;
}

const CustomTooltip = ({ active, payload, label, theme }: any) => {
  if (active && payload && payload.length) {
    const isDark = theme === 'dark';
    return (
      <div className={`backdrop-blur-xl border p-3 rounded-xl shadow-2xl ${isDark ? 'bg-zinc-900/90 border-white/10' : 'bg-white/90 border-zinc-200'}`}>
        <p className={`text-[10px] uppercase tracking-wider font-bold mb-1 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>{label}</p>
        <p className={`text-base font-bold tracking-tight ${isDark ? 'text-white' : 'text-zinc-900'}`}>
             Impact: <span className={payload[0].value >= 0 ? 'text-emerald-400' : 'text-rose-400'}>{payload[0].value > 0 ? '+' : ''}{payload[0].value}</span>
        </p>
      </div>
    );
  }
  return null;
};

const TimelineTab: React.FC<TimelineTabProps> = ({ theme }) => {
  const isDark = theme === 'dark';
  
  // Dynamic Chart Colors based on theme
  const posColor = isDark ? '#34d399' : '#3b82f6'; // Emerald vs Blue
  const negColor = isDark ? '#f87171' : '#f97316'; // Red vs Orange

  return (
    <div className="pb-28 pt-6 px-5 h-full overflow-y-auto no-scrollbar">
      <h2 className={`text-3xl font-bold tracking-tight mb-8 ${isDark ? 'text-white' : 'text-zinc-900'}`}>Timeline</h2>

      {/* Main Chart */}
      <div className={`backdrop-blur-md p-5 rounded-[32px] border mb-8 relative overflow-hidden ${isDark ? 'bg-zinc-900/30 border-white/5' : 'bg-white/60 border-zinc-200 shadow-sm'}`}>
        <div className="flex justify-between items-center mb-6 px-1">
          <h3 className={`font-semibold tracking-tight ${isDark ? 'text-zinc-200' : 'text-zinc-700'}`}>Net Impact</h3>
          <div className={`rounded-full px-3 py-1 flex items-center ${isDark ? 'bg-white/5' : 'bg-black/5'}`}>
             <span className={`text-[10px] font-medium ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>Last 14 Days</span>
          </div>
        </div>
        
        <div className="h-52 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={MOCK_TIMELINE_DATA} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="positiveGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={posColor} stopOpacity={0.8} />
                  <stop offset="100%" stopColor={posColor} stopOpacity={0.3} />
                </linearGradient>
                <linearGradient id="negativeGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={negColor} stopOpacity={0.8} />
                  <stop offset="100%" stopColor={negColor} stopOpacity={0.3} />
                </linearGradient>
              </defs>
              <XAxis 
                dataKey="day" 
                axisLine={false} 
                tickLine={false} 
                tick={{fill: isDark ? '#52525b' : '#a1a1aa', fontSize: 10, fontWeight: 500}} 
                dy={15}
              />
              <Tooltip cursor={{fill: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)'}} content={(props) => <CustomTooltip {...props} theme={theme} />} />
              <Bar dataKey="score" radius={[4, 4, 4, 4]}>
                {MOCK_TIMELINE_DATA.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={entry.score >= 0 ? 'url(#positiveGradient)' : 'url(#negativeGradient)'} 
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Date List Mockup */}
      <h3 className={`text-[10px] font-bold uppercase tracking-widest mb-4 px-2 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>Recent History</h3>
      <div className="space-y-3">
        {MOCK_TIMELINE_DATA.slice().reverse().slice(0, 5).map((d, i) => (
          <div key={i} className={`group flex items-center justify-between p-5 rounded-[24px] border transition-all cursor-pointer
             ${isDark 
                ? 'bg-zinc-900/20 border-white/5 active:bg-zinc-800/40 hover:border-white/10' 
                : 'bg-white/60 border-zinc-100 active:bg-zinc-100 hover:border-zinc-200 shadow-sm'}
          `}>
             <div className="flex items-center gap-4">
                <div className={`w-2.5 h-2.5 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.5)] 
                    ${d.score >= 0 
                        ? (isDark ? 'bg-emerald-500 shadow-emerald-500/20' : 'bg-blue-500 shadow-blue-500/20') 
                        : (isDark ? 'bg-rose-500 shadow-rose-500/20' : 'bg-orange-500 shadow-orange-500/20')
                    }`}></div>
                <div>
                    <p className={`text-sm font-semibold tracking-tight ${isDark ? 'text-zinc-200' : 'text-zinc-800'}`}>{d.day === 'Today' ? 'Today' : `September ${18 - i}`}</p>
                    <p className={`text-[10px] mt-0.5 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>{Math.floor(Math.random() * 5) + 1} memories recorded</p>
                </div>
             </div>
             <div className={`text-sm font-mono font-medium px-3 py-1 rounded-full 
                ${isDark ? 'bg-white/5' : 'bg-black/5'}
                ${d.score >= 0 ? (isDark ? 'text-emerald-400' : 'text-blue-500') : (isDark ? 'text-rose-400' : 'text-orange-500')}`}>
                 {d.score > 0 ? '+' : ''}{d.score}
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineTab;