import React, { useState, useEffect, useRef } from 'react';
import { TraceEntry, TabView, Theme, Language } from './types';
import { DEMO_ENTRY } from './constants';
import { Home, BarChart2, PieChart, Plus, Check, Lock, ChevronRight, Zap, Sun, Moon, ArrowRight } from './components/Icons';
import TodayTab from './components/TodayTab';
import TimelineTab from './components/TimelineTab';
import StatsTab from './components/StatsTab';
import EntryCard from './components/EntryCard';
import EntryDetailModal from './components/EntryDetailModal';
import KLineAnimation from './components/KLineAnimation';

// Onboarding Steps Enum
const STEP = {
    INTRO_LANG: 0,
    THEME_SELECT: 1,
    INPUT_DEMO: 2,
    PROCESSING: 3,
    CARD_CONFIRMATION: 4, // New Step: Review Card
    K_LINE_ANIMATION: 5,
    SLOGAN_REVEAL: 6,
    APP_MAIN: 7
};

// Language Configuration
const SUPPORTED_LANGUAGES: { code: Language; label: string; hello: string }[] = [
    { code: 'en', label: 'English', hello: 'Hello' },
    { code: 'zh', label: '中文', hello: '你好' },
    { code: 'jp', label: '日本語', hello: 'こんにちは' },
    { code: 'ko', label: '한국어', hello: '안녕하세요' },
    { code: 'de', label: 'Deutsch', hello: 'Hallo' },
    { code: 'fr', label: 'Français', hello: 'Bonjour' },
    { code: 'es', label: 'Español', hello: 'Hola' },
];

export default function App() {
  // State
  const [step, setStep] = useState<number>(STEP.INTRO_LANG);
  const [theme, setTheme] = useState<Theme>('dark');
  const [language, setLanguage] = useState<Language>('en');
  
  const [inputValue, setInputValue] = useState('');
  const [entries, setEntries] = useState<TraceEntry[]>([]);
  const [activeTab, setActiveTab] = useState<TabView>('today');
  
  // Interaction State
  const [selectedEntry, setSelectedEntry] = useState<TraceEntry | null>(null);

  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Intro State
  const [introTextIndex, setIntroTextIndex] = useState(0);

  // --- LOGIC ---

  // Intro Animation Loop
  useEffect(() => {
    if (step === STEP.INTRO_LANG) {
        const interval = setInterval(() => {
            setIntroTextIndex((prev) => (prev + 1) % SUPPORTED_LANGUAGES.length);
        }, 1200); 
        return () => clearInterval(interval);
    }
  }, [step]);

  // Human-like Typewriter effect
  const typeWriterHuman = (text: string) => {
    let i = 0;
    setInputValue('');
    
    const typeChar = () => {
      if (i < text.length) {
        setInputValue((prev) => prev + text.charAt(i));
        i++;
        const char = text.charAt(i-1);
        let delay = 30 + Math.random() * 50; 
        if ([',', '，', '.', '。'].includes(char)) delay += 300; 
        else if (Math.random() > 0.9) delay += 150; 
        setTimeout(typeChar, delay);
      }
    };
    typeChar();
  };

  const selectLanguage = (lang: Language) => {
      setLanguage(lang);
      setTimeout(() => setStep(STEP.THEME_SELECT), 200);
  };

  const selectTheme = (t: Theme) => {
      setTheme(t);
      setTimeout(() => {
        setStep(STEP.INPUT_DEMO);
        setTimeout(() => {
            typeWriterHuman(DEMO_ENTRY.rawText);
        }, 800);
      }, 300);
  };

  const processEntry = () => {
    setStep(STEP.PROCESSING);
    setTimeout(() => {
      setEntries([DEMO_ENTRY]); 
      // Go to Card Confirmation instead of KLine directly
      setStep(STEP.CARD_CONFIRMATION);
    }, 2000);
  };

  // Called when user clicks "Record" in the Confirmation step
  const confirmAndTrace = () => {
      setStep(STEP.K_LINE_ANIMATION);
  }

  const finishKLine = () => {
      setStep(STEP.SLOGAN_REVEAL);
      setTimeout(() => {
          setStep(STEP.APP_MAIN);
      }, 3500);
  }

  const resetOnboarding = () => {
      setEntries([]);
      setInputValue('');
      setStep(STEP.INTRO_LANG);
      setActiveTab('today');
      setSelectedEntry(null);
  }

  // --- RENDERERS ---

  const renderIntroLang = () => (
      <div className="flex flex-col items-center justify-center h-full w-full bg-black text-white relative overflow-hidden p-8 animate-blur-in">
           <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-[120px] animate-breathe"></div>
           
           {/* Animated Greeting */}
           <div className="h-40 flex items-center justify-center mb-8">
               <h1 key={introTextIndex} className="text-5xl font-serif font-light tracking-tight animate-blur-in transition-all duration-500 text-center">
                   {SUPPORTED_LANGUAGES[introTextIndex].hello}.
               </h1>
           </div>

           {/* Language Grid */}
           <div className="grid grid-cols-2 gap-3 w-full max-w-xs z-10 animate-in slide-in-from-bottom-8 fade-in duration-1000">
               {SUPPORTED_LANGUAGES.map((lang) => (
                   <button 
                        key={lang.code}
                        onClick={() => selectLanguage(lang.code)} 
                        className={`
                            py-3 px-4 border border-white/10 rounded-2xl 
                            hover:bg-white/10 hover:border-white/20 hover:scale-[1.02] active:scale-95 
                            transition-all duration-300 backdrop-blur-sm
                            flex items-center justify-center
                            ${lang.code === 'zh' || lang.code === 'jp' || lang.code === 'ko' ? 'font-sans' : 'font-sans'}
                        `}
                    >
                       <span className="text-sm font-medium tracking-wide opacity-80 group-hover:opacity-100">{lang.label}</span>
                   </button>
               ))}
           </div>
           
           <p className="mt-8 text-xs text-zinc-600 uppercase tracking-widest font-medium animate-pulse">Select Language</p>
      </div>
  );

  const renderThemeSelect = () => (
      <div className="flex flex-col h-full w-full bg-black text-white p-6 pt-12 animate-blur-in">
          <h2 className="text-3xl font-bold mb-2 tracking-tight">Choose your style.</h2>
          <p className="text-zinc-500 mb-8">This determines your chart visuals.</p>
          <div className="flex-1 grid grid-rows-2 gap-4">
              <button onClick={() => selectTheme('dark')} className="relative group rounded-[32px] overflow-hidden border border-zinc-800 text-left p-6 transition-all duration-300 hover:scale-[1.02] hover:border-zinc-600 active:scale-98">
                  <div className="absolute inset-0 bg-zinc-900 group-hover:bg-zinc-800 transition-colors"></div>
                  <div className="relative z-10 flex flex-col justify-between h-full">
                      <div className="flex justify-between items-start">
                          <div className="p-3 bg-zinc-800 rounded-full text-white"><Moon size={20} /></div>
                          <div className="flex gap-1 opacity-50">
                              <div className="w-2 h-8 bg-emerald-500 rounded-sm"></div>
                              <div className="w-2 h-5 bg-rose-500 rounded-sm"></div>
                              <div className="w-2 h-10 bg-emerald-500 rounded-sm"></div>
                          </div>
                      </div>
                      <div>
                          <span className="text-lg font-bold block mb-1">Dark Mode</span>
                          <span className="text-zinc-500 text-xs">Immersive & Focus</span>
                      </div>
                  </div>
              </button>
              <button onClick={() => selectTheme('light')} className="relative group rounded-[32px] overflow-hidden border border-zinc-800 text-left p-6 transition-all duration-300 hover:scale-[1.02] hover:border-zinc-600 active:scale-98">
                  <div className="absolute inset-0 bg-zinc-100 group-hover:bg-white transition-colors"></div>
                  <div className="relative z-10 flex flex-col justify-between h-full">
                      <div className="flex justify-between items-start">
                          <div className="p-3 bg-white shadow-sm rounded-full text-black"><Sun size={20} /></div>
                          <div className="flex gap-1 opacity-50">
                              <div className="w-2 h-8 bg-blue-500 rounded-sm"></div>
                              <div className="w-2 h-5 bg-orange-500 rounded-sm"></div>
                              <div className="w-2 h-10 bg-blue-500 rounded-sm"></div>
                          </div>
                      </div>
                      <div>
                          <span className="text-lg font-bold block text-black mb-1">Light Mode</span>
                          <span className="text-zinc-500 text-xs">Clarity & Detail</span>
                      </div>
                  </div>
              </button>
          </div>
      </div>
  );

  const renderInput = () => {
    const isDark = theme === 'dark';
    return (
        <div className={`flex flex-col min-h-full p-6 relative transition-colors duration-700 animate-blur-in ${isDark ? 'bg-black text-white' : 'bg-zinc-50 text-zinc-900'}`}>
            <div className={`absolute top-0 right-0 w-80 h-80 rounded-full blur-[100px] opacity-40 animate-breathe ${isDark ? 'bg-indigo-900' : 'bg-blue-200'}`}></div>
            <div className="flex-1 flex flex-col justify-center max-w-sm mx-auto w-full z-10">
                <h2 className="text-3xl font-bold mb-8 tracking-tight">What's on your mind?</h2>
                <div className="relative group">
                    <textarea 
                        ref={inputRef}
                        value={inputValue}
                        readOnly
                        className={`relative w-full h-72 border rounded-[32px] p-8 text-xl resize-none focus:outline-none focus:ring-0 leading-relaxed font-light font-serif tracking-wide transition-all duration-500
                            ${isDark 
                                ? 'bg-zinc-900/50 border-zinc-800 text-zinc-200 placeholder-zinc-700 backdrop-blur-xl' 
                                : 'bg-white/80 border-zinc-200 text-zinc-800 placeholder-zinc-400 shadow-xl shadow-zinc-200/40 backdrop-blur-xl'}
                        `}
                        placeholder="Typing..."
                    />
                    <div className="absolute bottom-8 right-8 flex items-center gap-2">
                        {inputValue.length > 0 && (
                             <div className="flex gap-1">
                                <span className="w-1 h-1 bg-zinc-500 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></span>
                                <span className="w-1 h-1 bg-zinc-500 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></span>
                                <span className="w-1 h-1 bg-zinc-500 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></span>
                             </div>
                        )}
                        <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-medium">AI Listening</span>
                    </div>
                </div>
                <div className="mt-10">
                    <button 
                    onClick={processEntry}
                    disabled={inputValue.length < 10}
                    className={`w-full py-4 rounded-full font-bold text-sm tracking-wide transition-all duration-500 transform ${
                        inputValue.length >= DEMO_ENTRY.rawText.length 
                        ? (isDark 
                            ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_30px_-5px_rgba(37,99,235,0.5)] scale-100 opacity-100' 
                            : 'bg-black hover:bg-zinc-800 text-white shadow-xl scale-100 opacity-100')
                        : 'bg-zinc-200 text-zinc-400 scale-95 opacity-50 cursor-not-allowed'
                    }`}
                    >
                    ANALYZE ENTRY
                    </button>
                </div>
            </div>
        </div>
    );
  };

  const renderProcessing = () => {
      const isDark = theme === 'dark';
      return (
        <div className={`flex flex-col items-center justify-center min-h-full p-6 relative overflow-hidden animate-blur-in ${isDark ? 'bg-black text-white' : 'bg-zinc-50 text-black'}`}>
            <div className={`relative w-24 h-24 mb-10`}>
                <div className={`absolute inset-0 border-[1px] rounded-full animate-[ping_2s_ease-out_infinite] opacity-50 ${isDark ? 'border-blue-500' : 'border-blue-600'}`}></div>
                <div className={`absolute inset-2 border-[1px] rounded-full animate-[ping_2s_ease-out_infinite_reverse] opacity-30 ${isDark ? 'border-indigo-500' : 'border-indigo-600'}`}></div>
                <div className={`absolute inset-0 border-2 border-t-blue-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin`}></div>
            </div>
            <h3 className="text-lg font-medium tracking-tight animate-pulse opacity-80">Structuring Memory...</h3>
        </div>
      );
  }

  // --- NEW STEP: CARD CONFIRMATION ---
  const renderCardConfirmation = () => {
      const isDark = theme === 'dark';
      const entry = entries[0];
      
      return (
        <div className={`flex flex-col min-h-full relative p-6 animate-blur-in ${isDark ? 'bg-black text-white' : 'bg-zinc-50 text-black'}`}>
             {/* Header */}
             <div className="mt-8 mb-6 text-center animate-in slide-in-from-top-4 fade-in duration-700">
                 <h2 className="text-2xl font-bold tracking-tight mb-2">Memory Structured.</h2>
                 <p className={`text-sm ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
                    Tap the card to view or edit details.
                 </p>
             </div>

             {/* The Card */}
             <div className="flex-1 flex flex-col items-center justify-center relative">
                 <div className="w-full max-w-sm relative animate-in zoom-in-95 duration-500 delay-200">
                    <EntryCard 
                        entry={entry} 
                        theme={theme}
                        onClick={() => setSelectedEntry(entry)} 
                    />
                    
                    {/* Tutorial Hint Pointer */}
                    <div className="absolute -top-4 -right-2 pointer-events-none animate-bounce delay-1000">
                        <span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-lg">Tap to Edit</span>
                    </div>
                 </div>
             </div>

             {/* Trace / Record Action */}
             <div className="mt-8 mb-4 animate-in slide-in-from-bottom-8 fade-in duration-700 delay-300">
                 <button 
                    onClick={confirmAndTrace}
                    className={`group w-full py-4 rounded-full font-bold text-sm tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2
                        ${isDark 
                            ? 'bg-white text-black hover:bg-zinc-200 shadow-[0_0_20px_rgba(255,255,255,0.2)]' 
                            : 'bg-black text-white hover:bg-zinc-800 shadow-xl'}
                    `}
                 >
                    <span>Trace It</span>
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                 </button>
             </div>
        </div>
      );
  }

  const renderSlogan = () => {
    const isDark = theme === 'dark';
    return (
        <div className={`flex flex-col items-center justify-center min-h-full p-8 relative animate-blur-in ${isDark ? 'bg-black text-white' : 'bg-zinc-50 text-black'}`}>
             <h1 className="font-serif text-5xl md:text-6xl text-center leading-tight">
                 See how you<br/>
                 <span className="italic text-blue-500 inline-block animate-[blur-fade-in_1.5s_ease-out_forwards]" style={{animationDelay: '0.5s', opacity: 0}}>became you.</span>
             </h1>
        </div>
    )
  }

  // --- MAIN APP SHELL ---

  const isDark = theme === 'dark';

  if (step < STEP.APP_MAIN) {
      // Device Frame Wrapper for Onboarding
      return (
        <div className="min-h-screen bg-[#111] flex items-center justify-center p-4 lg:p-10 font-sans transition-colors duration-700">
             <div className={`w-full max-w-[420px] h-[850px] rounded-[50px] ring-8 ring-zinc-900 shadow-2xl overflow-hidden relative border border-zinc-800 transition-colors duration-700 ${isDark ? 'bg-black' : 'bg-white'}`}>
                {/* Step Content Wrapper with Key for Transition */}
                <div key={step} className="h-full w-full">
                    {step === STEP.INTRO_LANG && renderIntroLang()}
                    {step === STEP.THEME_SELECT && renderThemeSelect()}
                    {step === STEP.INPUT_DEMO && renderInput()}
                    {step === STEP.PROCESSING && renderProcessing()}
                    {step === STEP.CARD_CONFIRMATION && renderCardConfirmation()}
                    {step === STEP.K_LINE_ANIMATION && <KLineAnimation theme={theme} onComplete={finishKLine} />}
                    {step === STEP.SLOGAN_REVEAL && renderSlogan()}
                
                    {/* Detail Modal Overlay for Editing during Confirmation */}
                    {step === STEP.CARD_CONFIRMATION && selectedEntry && (
                        <EntryDetailModal 
                            entry={selectedEntry} 
                            theme={theme} 
                            onClose={() => setSelectedEntry(null)}
                            onSave={(updated) => {
                                setEntries([updated]);
                                setSelectedEntry(null);
                            }}
                            isTutorial={true}
                        />
                    )}
                </div>
                
                {/* Home Indicator */}
                <div className={`absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 rounded-full z-50 mix-blend-difference ${isDark ? 'bg-zinc-800' : 'bg-zinc-300'}`}></div>
             </div>
        </div>
      )
  }

  // Active App
  return (
    <div className="min-h-screen bg-[#111] flex items-center justify-center p-4 lg:p-10 font-sans">
      
      {/* Device Frame */}
      <div className={`w-full max-w-[420px] h-[850px] rounded-[50px] ring-8 ring-zinc-900 shadow-[0_0_80px_-20px_rgba(255,255,255,0.05)] overflow-hidden relative flex flex-col border border-zinc-800 transition-colors duration-700 animate-blur-in ${isDark ? 'bg-black' : 'bg-zinc-50'}`}>
        
        {/* Top Bar - Glass */}
        <div className={`h-28 flex items-end justify-between px-6 pb-4 backdrop-blur-md z-30 sticky top-0 shrink-0 transition-colors duration-300
            ${isDark ? 'bg-black/60' : 'bg-white/60 border-b border-zinc-200'}
        `}>
           <span className={`font-bold text-2xl tracking-tighter ${isDark ? 'text-white' : 'text-black'}`}>Trace.</span>
           <div className="flex items-center gap-4">
                <button 
                  onClick={resetOnboarding}
                  className={`text-[10px] font-medium rounded-full px-3 py-1.5 transition-colors border
                    ${isDark ? 'text-zinc-500 hover:text-white border-zinc-800 hover:border-zinc-600' : 'text-zinc-400 hover:text-black border-zinc-200 hover:border-zinc-400'}
                  `}
                >
                    REPLAY
                </button>
               <div className={`w-9 h-9 rounded-full flex items-center justify-center border shadow-lg ${isDark ? 'bg-zinc-800 border-zinc-700' : 'bg-white border-zinc-200'}`}>
                   <span className={`text-[10px] font-bold ${isDark ? 'text-white' : 'text-black'}`}>JD</span>
               </div>
           </div>
        </div>

        {/* Main Content */}
        <div className={`flex-1 overflow-hidden relative transition-colors duration-500 ${isDark ? 'bg-black' : 'bg-zinc-50'}`}>
            {/* Ambient Background Glow for Main App */}
            <div className={`absolute top-0 left-0 w-full h-64 blur-[80px] pointer-events-none transition-colors duration-500 ${isDark ? 'bg-indigo-900/10' : 'bg-blue-100/50'}`}></div>

            {activeTab === 'today' && (
                <div className="h-full">
                     <TodayTabWrapper 
                        entries={entries} 
                        theme={theme} 
                        onEntryClick={setSelectedEntry} 
                     />
                </div>
            )}
            {activeTab === 'timeline' && <TimelineTab theme={theme} />}
            {activeTab === 'stats' && <StatsTab theme={theme} />}
            
            {/* FAB */}
            {activeTab === 'today' && (
                <button className={`absolute bottom-6 right-6 w-16 h-16 rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 z-30 shadow-2xl
                    ${isDark ? 'bg-white text-black shadow-white/20' : 'bg-black text-white shadow-black/20'}
                `}>
                    <Plus size={32} strokeWidth={2.5} />
                </button>
            )}
        </div>

        {/* Floating Dock Navigation */}
        <div className={`absolute bottom-8 left-6 right-6 h-20 backdrop-blur-2xl border rounded-[30px] flex items-center justify-around px-2 z-40 shadow-2xl transition-colors duration-500
            ${isDark ? 'bg-zinc-900/80 border-white/10' : 'bg-white/80 border-zinc-200/50'}
        `}>
           <TabButton 
              isActive={activeTab === 'today'} 
              label="Today" 
              theme={theme}
              icon={<Home size={24} strokeWidth={isActive => isActive ? 3 : 2} />} 
              onClick={() => setActiveTab('today')} 
            />
           <TabButton 
              isActive={activeTab === 'timeline'} 
              label="Timeline" 
              theme={theme}
              icon={<BarChart2 size={24} strokeWidth={isActive => isActive ? 3 : 2} />} 
              onClick={() => setActiveTab('timeline')} 
            />
           <TabButton 
              isActive={activeTab === 'stats'} 
              label="Stats" 
              theme={theme}
              icon={<PieChart size={24} strokeWidth={isActive => isActive ? 3 : 2} />} 
              onClick={() => setActiveTab('stats')} 
            />
        </div>
        
        {/* Detail Modal for Main App */}
        {selectedEntry && (
            <EntryDetailModal 
                entry={selectedEntry} 
                theme={theme} 
                onClose={() => setSelectedEntry(null)}
                onSave={(updated) => {
                    setEntries(entries.map(e => e.id === updated.id ? updated : e));
                    setSelectedEntry(null);
                }}
            />
        )}
        
        {/* Home Indicator */}
        <div className={`absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 rounded-full z-50 ${isDark ? 'bg-zinc-800' : 'bg-zinc-300'}`}></div>

      </div>
    </div>
  );
}

// --- Helper Components ---

const TodayTabWrapper = ({ entries, theme, onEntryClick }: { entries: TraceEntry[], theme: Theme, onEntryClick: (e: TraceEntry) => void }) => {
    return <TodayTab entries={entries} theme={theme} onEntryClick={onEntryClick} />;
};

const TabButton = ({isActive, label, icon, onClick, theme}: {isActive: boolean, label: string, icon: React.ReactNode, onClick: () => void, theme: Theme}) => {
    const isDark = theme === 'dark';
    return (
        <button 
        onClick={onClick}
        className={`relative flex flex-col items-center justify-center gap-1 w-16 h-16 rounded-2xl transition-all duration-300 
            ${isActive 
                ? (isDark ? 'text-white' : 'text-black') 
                : (isDark ? 'text-zinc-500 hover:text-zinc-300' : 'text-zinc-400 hover:text-zinc-600')
            }`}
        >
            {isActive && <div className={`absolute inset-0 rounded-2xl blur-sm ${isDark ? 'bg-white/5' : 'bg-black/5'}`}></div>}
            <div className="relative z-10 transition-transform duration-300 active:scale-90">
                {React.cloneElement(icon as React.ReactElement, { strokeWidth: isActive ? 2.5 : 2 })}
            </div>
            {isActive && <div className={`absolute -bottom-1 w-1 h-1 rounded-full ${isDark ? 'bg-white' : 'bg-black'}`}></div>}
        </button>
    );
};