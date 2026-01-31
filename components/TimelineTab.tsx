import React from 'react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { MOCK_TIMELINE_DATA } from '../constants';

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-zinc-900/90 backdrop-blur-xl border border-white/10 p-3 rounded-xl shadow-2xl">
        <p className="text-zinc-500 text-[10px] uppercase tracking-wider font-bold mb-1">{label}</p>
        <p className="text-white text-base font-bold tracking-tight">
             Impact: <span className={payload[0].value >= 0 ? 'text-emerald-400' : 'text-rose-400'}>{payload[0].value > 0 ? '+' : ''}{payload[0].value}</span>
        </p>
      </div>
    );
  }
  return null;
};

const TimelineTab: React.FC = () => {
  return (
    <div className="pb-28 pt-6 px-5 h-full overflow-y-auto no-scrollbar">
      <h2 className="text-white text-3xl font-bold tracking-tight mb-8">Timeline</h2>

      {/* Main Chart */}
      <div className="bg-zinc-900/30 backdrop-blur-md p-5 rounded-[32px] border border-white/5 mb-8 relative overflow-hidden">
        <div className="flex justify-between items-center mb-6 px-1">
          <h3 className="text-zinc-200 font-semibold tracking-tight">Net Impact</h3>
          <div className="bg-white/5 rounded-full px-3 py-1 flex items-center">
             <span className="text-[10px] text-zinc-400 font-medium">Last 14 Days</span>
          </div>
        </div>
        
        <div className="h-52 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={MOCK_TIMELINE_DATA} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="positiveGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#34d399" stopOpacity={0.8} />
                  <stop offset="100%" stopColor="#34d399" stopOpacity={0.3} />
                </linearGradient>
                <linearGradient id="negativeGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#f87171" stopOpacity={0.8} />
                  <stop offset="100%" stopColor="#f87171" stopOpacity={0.3} />
                </linearGradient>
              </defs>
              <XAxis 
                dataKey="day" 
                axisLine={false} 
                tickLine={false} 
                tick={{fill: '#52525b', fontSize: 10, fontWeight: 500}} 
                dy={15}
              />
              <Tooltip cursor={{fill: 'rgba(255,255,255,0.03)'}} content={<CustomTooltip />} />
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
      <h3 className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mb-4 px-2">Recent History</h3>
      <div className="space-y-3">
        {MOCK_TIMELINE_DATA.slice().reverse().slice(0, 5).map((d, i) => (
          <div key={i} className="group flex items-center justify-between p-5 bg-zinc-900/20 rounded-[24px] border border-white/5 active:bg-zinc-800/40 transition-all hover:border-white/10 cursor-pointer">
             <div className="flex items-center gap-4">
                <div className={`w-2.5 h-2.5 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.5)] ${d.score >= 0 ? 'bg-emerald-500 shadow-emerald-500/20' : 'bg-rose-500 shadow-rose-500/20'}`}></div>
                <div>
                    <p className="text-zinc-200 text-sm font-semibold tracking-tight">{d.day === 'Today' ? 'Today' : `September ${18 - i}`}</p>
                    <p className="text-zinc-500 text-[10px] mt-0.5">{Math.floor(Math.random() * 5) + 1} memories recorded</p>
                </div>
             </div>
             <div className={`text-sm font-mono font-medium px-3 py-1 rounded-full bg-white/5 ${d.score >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                 {d.score > 0 ? '+' : ''}{d.score}
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineTab;