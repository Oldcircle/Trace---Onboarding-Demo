import React, { useState, useEffect, useRef } from 'react';
import { TraceEntry, TabView } from './types';
import { DEMO_ENTRY } from './constants';
import { Home, BarChart2, PieChart, Plus, Check, Lock, ChevronRight } from './components/Icons';
import TodayTab from './components/TodayTab';
import TimelineTab from './components/TimelineTab';
import StatsTab from './components/StatsTab';
import EntryCard from './components/EntryCard';

export default function App() {
  // State
  const [onboardingStep, setOnboardingStep] = useState<number>(0); 
  const [inputValue, setInputValue] = useState('');
  const [entries, setEntries] = useState<TraceEntry[]>([]);
  const [activeTab, setActiveTab] = useState<TabView>('today');
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Typewriter effect helper
  const typeWriter = (text: string, speed: number = 30) => {
    let i = 0;
    setInputValue('');
    const timer = setInterval(() => {
      if (i < text.length) {
        setInputValue((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);
  };

  // Actions
  const startDemo = () => {
    setOnboardingStep(1);
    setTimeout(() => {
      typeWriter(DEMO_ENTRY.rawText, 40);
    }, 800);
  };

  const processEntry = () => {
    setOnboardingStep(2);
    setTimeout(() => {
      setEntries([DEMO_ENTRY]); 
      setOnboardingStep(3); 
    }, 2500);
  };

  const finishOnboarding = () => {
    setOnboardingStep(4);
  };

  const resetOnboarding = () => {
      setEntries([]);
      setInputValue('');
      setOnboardingStep(0);
      setActiveTab('today');
  }

  // --- ONBOARDING SCREENS ---

  const renderWelcome = () => (
    <div className="flex items-center justify-center min-h-full bg-black text-white p-8 relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-[-20%] left-0 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse duration-[4s]"></div>
        <div className="absolute bottom-[-10%] right-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] mix-blend-screen"></div>

        <div className="max-w-xs w-full space-y-10 z-10 flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-gradient-to-tr from-indigo-500 to-blue-500 rounded-[2rem] flex items-center justify-center shadow-2xl shadow-indigo-500/30 mb-4">
                <div className="w-10 h-10 border-[3px] border-white/90 rounded-full border-t-transparent animate-spin duration-[3s]"></div>
            </div>
            
            <div className="space-y-3">
                <h1 className="text-5xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-zinc-500">Trace</h1>
                <p className="text-lg text-zinc-400 font-normal leading-relaxed">Structure your chaos.<br/>Find your patterns.</p>
            </div>

            <div className="space-y-4 w-full pt-6">
                <FeatureItem icon={<Check size={16} />} text="Natural thought capture" />
                <FeatureItem icon={<Check size={16} />} text="AI emotional analysis" />
                <FeatureItem icon={<Check size={16} />} text="Private & Local-first" />
            </div>

            <div className="pt-8 w-full space-y-5">
                <button 
                onClick={startDemo}
                className="group relative w-full bg-white text-black font-semibold py-4 rounded-full flex items-center justify-center gap-2 overflow-hidden transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
                >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-200/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <span className="relative z-10">Start Recording</span>
                <ChevronRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-center text-[10px] text-zinc-600 uppercase tracking-widest flex items-center justify-center gap-1.5 font-medium">
                <Lock size={10} /> Local Storage Only
                </p>
            </div>
        </div>
    </div>
  );

  const renderInput = () => (
    <div className="flex flex-col min-h-full bg-black text-white p-6 relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]"></div>
        
        <div className="flex-1 flex flex-col justify-center max-w-sm mx-auto w-full z-10">
            <h2 className="text-3xl font-bold mb-8 text-white tracking-tight">What's on your mind?</h2>
            
            <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-[26px] opacity-30 group-hover:opacity-60 transition duration-500 blur"></div>
                <textarea 
                    ref={inputRef}
                    value={inputValue}
                    readOnly
                    className="relative w-full h-64 bg-zinc-950 border border-zinc-800 rounded-3xl p-6 text-xl text-zinc-200 resize-none focus:outline-none focus:ring-0 placeholder-zinc-700 leading-relaxed font-light font-serif tracking-wide"
                    placeholder="Typing..."
                />
                <div className="absolute bottom-6 right-6 text-[10px] uppercase tracking-widest text-zinc-600 animate-pulse">
                    AI Listening...
                </div>
            </div>

            <div className="mt-10">
                <button 
                onClick={processEntry}
                disabled={inputValue.length < 10}
                className={`w-full py-4 rounded-full font-bold text-sm tracking-wide transition-all duration-500 ${
                    inputValue.length >= DEMO_ENTRY.rawText.length 
                    ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_30px_-5px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_-5px_rgba(37,99,235,0.6)]' 
                    : 'bg-zinc-900 text-zinc-600 border border-zinc-800 cursor-not-allowed'
                }`}
                >
                ANALYZE ENTRY
                </button>
            </div>
        </div>
    </div>
  );

  const renderProcessing = () => (
      <div className="flex flex-col items-center justify-center min-h-full bg-black text-white p-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black"></div>
          
          <div className="relative w-32 h-32 mb-10">
              <div className="absolute inset-0 border-[1px] border-blue-500/20 rounded-full animate-[ping_3s_ease-in-out_infinite]"></div>
              <div className="absolute inset-4 border-[1px] border-indigo-500/40 rounded-full animate-[ping_3s_ease-in-out_infinite_reverse]"></div>
              <div className="absolute inset-0 border-2 border-t-blue-400 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_20px_rgba(96,165,250,0.8)]"></div>
              </div>
          </div>
          
          <h3 className="text-2xl font-semibold tracking-tight animate-pulse bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-indigo-200">Structuring Memory</h3>
          <div className="mt-6 space-y-3 text-center">
              <p className="text-zinc-500 text-xs uppercase tracking-widest animate-fade-up">Extracting Context...</p>
          </div>
      </div>
  )

  const renderReview = () => (
    <div className="flex flex-col min-h-full bg-zinc-950 text-white p-6 relative">
         {/* Glow */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-64 bg-indigo-500/10 blur-[100px] pointer-events-none"></div>

         <div className="max-w-sm mx-auto w-full flex-1 flex flex-col relative z-10">
            <div className="pt-12 pb-8 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 mb-4 ring-1 ring-emerald-500/20">
                    <Check size={24} />
                </div>
                <h2 className="text-3xl font-bold mb-2 tracking-tight">Captured.</h2>
                <p className="text-zinc-400 text-sm leading-relaxed">Your unstructured thought has been<br/>organized into a clear memory.</p>
            </div>

            <div className="flex-1 perspective-1000">
                <div className="animate-in slide-in-from-bottom-10 fade-in duration-700">
                    <EntryCard entry={DEMO_ENTRY} />
                </div>
            </div>

            <div className="pb-8 space-y-4">
                <button 
                    onClick={finishOnboarding}
                    className="w-full bg-white text-black font-bold py-4 rounded-full shadow-[0_0_30px_-5px_rgba(255,255,255,0.15)] hover:scale-[1.02] transition-transform"
                >
                    Enter Trace
                </button>
            </div>
         </div>
    </div>
  )

  // --- MAIN APP SHELL ---

  if (onboardingStep < 4) {
      // Wrap onboarding in the device frame too for consistency
      return (
        <div className="min-h-screen bg-[#050505] flex items-center justify-center p-4 lg:p-10 font-sans">
             <div className="w-full max-w-[420px] h-[850px] bg-black rounded-[50px] ring-8 ring-zinc-900 shadow-2xl overflow-hidden relative border border-zinc-800">
                {onboardingStep === 0 && renderWelcome()}
                {onboardingStep === 1 && renderInput()}
                {onboardingStep === 2 && renderProcessing()}
                {onboardingStep === 3 && renderReview()}
                
                {/* Simulated Home Indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-zinc-800 rounded-full z-50"></div>
             </div>
        </div>
      )
  }

  // Active App State
  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center p-4 lg:p-10 font-sans">
      
      {/* Device Frame */}
      <div className="w-full max-w-[420px] h-[850px] bg-black rounded-[50px] ring-8 ring-zinc-900 shadow-[0_0_80px_-20px_rgba(255,255,255,0.05)] overflow-hidden relative flex flex-col border border-zinc-800">
        
        {/* Top Bar - Glass */}
        <div className="h-28 flex items-end justify-between px-6 pb-4 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm z-30 sticky top-0 shrink-0">
           <span className="font-bold text-2xl tracking-tighter text-white">Trace.</span>
           <div className="flex items-center gap-4">
                <button 
                  onClick={resetOnboarding}
                  className="text-[10px] text-zinc-500 font-medium hover:text-white border border-zinc-800 hover:border-zinc-600 rounded-full px-3 py-1.5 transition-colors"
                >
                    REPLAY
                </button>
               <div className="w-9 h-9 bg-gradient-to-tr from-zinc-700 to-zinc-600 rounded-full flex items-center justify-center border border-zinc-600 shadow-lg">
                   <span className="text-[10px] font-bold text-white">JD</span>
               </div>
           </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-hidden relative bg-black">
            {/* Ambient Background Glow for Main App */}
            <div className="absolute top-0 left-0 w-full h-64 bg-indigo-900/10 blur-[80px] pointer-events-none"></div>

            {activeTab === 'today' && <TodayTab entries={entries} />}
            {activeTab === 'timeline' && <TimelineTab />}
            {activeTab === 'stats' && <StatsTab />}
            
            {/* FAB */}
            {activeTab === 'today' && (
                <button className="absolute bottom-6 right-6 w-16 h-16 bg-white text-black rounded-full flex items-center justify-center shadow-[0_0_40px_-10px_rgba(255,255,255,0.4)] hover:scale-105 active:scale-95 transition-all z-30">
                    <Plus size={32} strokeWidth={2.5} />
                </button>
            )}
        </div>

        {/* Floating Dock Navigation */}
        <div className="absolute bottom-8 left-6 right-6 h-20 bg-zinc-900/80 backdrop-blur-2xl border border-white/10 rounded-[30px] flex items-center justify-around px-2 z-40 shadow-2xl">
           <TabButton 
              isActive={activeTab === 'today'} 
              label="Today" 
              icon={<Home size={24} strokeWidth={isActive => isActive ? 3 : 2} />} 
              onClick={() => setActiveTab('today')} 
            />
           <TabButton 
              isActive={activeTab === 'timeline'} 
              label="Timeline" 
              icon={<BarChart2 size={24} strokeWidth={isActive => isActive ? 3 : 2} />} 
              onClick={() => setActiveTab('timeline')} 
            />
           <TabButton 
              isActive={activeTab === 'stats'} 
              label="Stats" 
              icon={<PieChart size={24} strokeWidth={isActive => isActive ? 3 : 2} />} 
              onClick={() => setActiveTab('stats')} 
            />
        </div>
        
        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-zinc-800 rounded-full z-50"></div>

      </div>
    </div>
  );
}

// --- Subcomponents ---

const FeatureItem = ({icon, text}: {icon: React.ReactNode, text: string}) => (
    <div className="flex items-center gap-4 text-zinc-300 w-full bg-zinc-900/30 p-3 rounded-2xl border border-white/5 backdrop-blur-sm">
        <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
            {icon}
        </div>
        <span className="text-sm font-medium tracking-wide">{text}</span>
    </div>
);

const TabButton = ({isActive, label, icon, onClick}: {isActive: boolean, label: string, icon: React.ReactNode, onClick: () => void}) => (
    <button 
      onClick={onClick}
      className={`relative flex flex-col items-center justify-center gap-1 w-16 h-16 rounded-2xl transition-all duration-300 ${isActive ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
    >
        {isActive && <div className="absolute inset-0 bg-white/5 rounded-2xl blur-sm"></div>}
        <div className="relative z-10 transition-transform duration-300 active:scale-90">
             {/* Render icon with function if needed, but keeping simple for now */}
             {React.cloneElement(icon as React.ReactElement, { strokeWidth: isActive ? 2.5 : 2 })}
        </div>
        {isActive && <div className="absolute -bottom-1 w-1 h-1 bg-white rounded-full"></div>}
    </button>
);
