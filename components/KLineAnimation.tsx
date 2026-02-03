import React, { useState, useEffect, useMemo } from 'react';
import { Theme } from '../types';

interface KLineAnimationProps {
  theme: Theme;
  onComplete: () => void;
}

interface CandleData {
  open: number;
  close: number;
  high: number;
  low: number;
  isUp: boolean;
}

const KLineAnimation: React.FC<KLineAnimationProps> = ({ theme, onComplete }) => {
    const isDark = theme === 'dark';
    // Colors
    const candleUp = isDark ? '#10b981' : '#3b82f6'; // Emerald / Blue
    const candleDown = isDark ? '#ef4444' : '#f97316'; // Red / Orange
    const bgColor = isDark ? '#000000' : '#fafafa';

    // Internal state for animation stages
    // 0: Morph Start (Card Shape)
    // 1: Morph End (Candle Shape)
    // 2: Zoom Out
    // 3: Full Chart
    const [stage, setStage] = useState(0);

    // Generate Realistic "Nvidia-style" Uptrend Data
    const chartData = useMemo(() => {
        const data: CandleData[] = [];
        let price = 50; // Starting arbitrary price
        const count = 42; // Number of candles

        for (let i = 0; i < count; i++) {
            // Trend Bias: Increase bias as we go right to simulate parabolic run
            const trendStrength = 0.3 + (i / count) * 0.5; 
            
            // Random walk with drift
            const volatility = 4;
            const move = (Math.random() - (0.5 - trendStrength * 0.15)) * volatility;
            
            const open = price;
            const close = price + move;
            
            // Wicks
            const high = Math.max(open, close) + Math.random() * 2;
            const low = Math.min(open, close) - Math.random() * 2;

            data.push({
                open,
                close,
                high,
                low,
                isUp: close >= open
            });

            price = close;
        }

        // Normalize data to fit 10% - 90% height container
        const minLow = Math.min(...data.map(d => d.low));
        const maxHigh = Math.max(...data.map(d => d.high));
        const range = maxHigh - minLow;

        return data.map(d => ({
            open: ((d.open - minLow) / range) * 70 + 15,
            close: ((d.close - minLow) / range) * 70 + 15,
            high: ((d.high - minLow) / range) * 70 + 15,
            low: ((d.low - minLow) / range) * 70 + 15,
            isUp: d.isUp
        }));
    }, []);
    
    useEffect(() => {
        // Morph sequence
        const t0 = setTimeout(() => setStage(1), 100);  // Trigger compress animation instantly
        const t1 = setTimeout(() => setStage(2), 2000); // Zoom out
        const t2 = setTimeout(() => setStage(3), 3000); // Full Chart
        const t3 = setTimeout(() => onComplete(), 7500); // End
        return () => { clearTimeout(t0); clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
    }, [onComplete]);

    return (
        <div className={`flex flex-col items-center justify-center min-h-full relative overflow-hidden transition-colors duration-1000 animate-blur-in`} style={{ backgroundColor: bgColor }}>
            
            {/* Stage 0 -> 1: The Morph (Card to Candle) */}
            <div className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-in-out ${stage >= 2 ? 'opacity-0 scale-50' : 'opacity-100 scale-100'}`}>
                {/* 
                   We simulate the card transforming.
                   Stage 0: Large Width/Height (Card)
                   Stage 1: Small Width/Height (Candle)
                */}
                <div 
                    className="relative flex items-center justify-center shadow-[0_0_30px_rgba(239,68,68,0.5)] transition-all duration-1000 ease-[cubic-bezier(0.85,0,0.15,1)]"
                    style={{
                        width: stage === 0 ? '320px' : '48px', // Card Width -> Candle Width
                        height: stage === 0 ? '400px' : '160px', // Card Height -> Candle Body Height
                        backgroundColor: stage === 0 ? (isDark ? '#18181b' : '#ffffff') : candleDown,
                        borderRadius: stage === 0 ? '32px' : '2px',
                        border: stage === 0 ? `1px solid ${isDark ? '#3f3f46' : '#e4e4e7'}` : 'none',
                        color: candleDown
                    }}
                >
                     {/* Inner content fades out as it shrinks */}
                     <div className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 ${stage === 0 ? 'opacity-100' : 'opacity-0'}`}>
                         <div className={`w-16 h-16 rounded-full mb-4 ${isDark ? 'bg-white/10' : 'bg-black/5'}`}></div>
                         <div className={`w-32 h-4 rounded mb-2 ${isDark ? 'bg-white/10' : 'bg-black/5'}`}></div>
                         <div className={`w-20 h-3 rounded ${isDark ? 'bg-white/10' : 'bg-black/5'}`}></div>
                     </div>

                     {/* The Wick appears when it becomes a candle */}
                     <div 
                        className={`absolute w-1 bg-current transition-all duration-500 delay-700`} 
                        style={{ 
                            height: stage >= 1 ? '250px' : '0px', 
                            opacity: stage >= 1 ? 0.5 : 0 
                        }}
                     ></div>
                </div>

                {/* Label appears after morph */}
                <div className={`absolute -bottom-12 text-xs font-mono uppercase tracking-widest transition-opacity duration-700 delay-1000 ${stage >= 1 ? 'opacity-50' : 'opacity-0'} ${isDark ? 'text-white' : 'text-black'}`}>
                        Event: Stress
                </div>
            </div>

            {/* Stage 3: The Full Chart (Zoomed Out) */}
            <div className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 delay-500 
                ${stage >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-150 blur-sm'}
                ${stage === 3 ? 'blur-[2px] opacity-100' : ''} 
            `}>
                {/* Changed opacity-80 to opacity-100 for better visibility */}
                <div className="w-full h-full p-4 flex items-end justify-between gap-1 opacity-100 relative">
                    
                    {/* The Scan Light - Only visible in Stage 3 */}
                    {stage >= 3 && (
                        <div className="absolute inset-0 pointer-events-none z-20 animate-scan"></div>
                    )}

                    {/* Realistic Market Simulation */}
                    {chartData.map((d, i) => {
                        const color = d.isUp ? candleUp : candleDown;
                        const bodyTop = Math.max(d.open, d.close);
                        const bodyBottom = Math.min(d.open, d.close);
                        const bodyHeight = Math.max(0.5, bodyTop - bodyBottom); // Ensure min height visibility
                        
                        return (
                            <div key={i} className="flex-1 h-full relative group animate-in fade-in slide-in-from-bottom-10 fill-mode-backwards" style={{ animationDelay: `${i * 30}ms` }}>
                                {/* Wick */}
                                <div 
                                    className="absolute left-1/2 -translate-x-1/2 w-[1px] opacity-60" 
                                    style={{ 
                                        backgroundColor: color,
                                        bottom: `${d.low}%`,
                                        height: `${d.high - d.low}%`
                                    }}
                                ></div>
                                {/* Body */}
                                <div 
                                    className="absolute left-1 right-1 rounded-[1px] transition-all duration-1000 hover:opacity-100 hover:scale-110 z-10" 
                                    style={{ 
                                        backgroundColor: color,
                                        bottom: `${bodyBottom}%`,
                                        height: `${bodyHeight}%`,
                                        opacity: stage >= 3 ? 0.9 : 1,
                                        boxShadow: stage >= 3 ? `0 0 10px ${color}33` : 'none'
                                    }}
                                ></div>
                            </div>
                        )
                    })}
                </div>
            </div>
            
            {/* Text Overlay for Stage 3 - Apple Style Center */}
            <div className={`absolute inset-0 flex flex-col items-center justify-center z-40 transition-all duration-1000 delay-1000 
                ${stage === 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                
                {/* Elegant Icon */}
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-2xl animate-in zoom-in duration-500 delay-1000
                    ${isDark ? 'bg-white text-black' : 'bg-black text-white'}
                `}>
                     <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>

                <h2 className={`text-5xl font-bold tracking-tighter mb-4 text-center animate-in slide-in-from-bottom-4 fade-in duration-700 delay-1000
                    ${isDark ? 'text-white drop-shadow-2xl' : 'text-black drop-shadow-sm'}`}>
                    Patterns Found.
                </h2>
                
                <div className={`h-1.5 bg-blue-500 rounded-full transition-all duration-[3000ms] ease-out delay-1000 ${stage === 3 ? 'w-24 opacity-100' : 'w-0 opacity-0'}`}></div>
                
                <p className={`mt-4 text-xs uppercase tracking-[0.3em] font-medium animate-pulse ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                    Syncing Timeline...
                </p>
            </div>
        </div>
    );
};

export default KLineAnimation;