
import React, { useState, useEffect, useRef } from 'react';
import { Theme, Language, TraceEntry } from './types';
import { translations } from './translations';
import { Sun, Moon, ArrowRight, Check, Zap, Globe, ChevronDown, Download, Play } from './components/Icons';
import EntryCard from './components/EntryCard';
import TimelineTab from './components/TimelineTab';
import KLineAnimation from './components/KLineAnimation';

// New Components
import PainPoints from './components/PainPoints';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import VisualShowcase from './components/VisualShowcase';
import UserStories from './components/UserStories';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

// Legal Links & App Store
const LINK_APP_STORE = "https://apps.apple.com/in/app/trace-see-how-you-became-you/id6758615892";

// Language Options
const LANG_OPTIONS: {code: Language, label: string}[] = [
    {code: 'en', label: 'English'},
    {code: 'zh', label: '简体中文'},
    {code: 'jp', label: '日本語'},
    {code: 'ko', label: '한국어'},
    {code: 'de', label: 'Deutsch'},
    {code: 'fr', label: 'Français'},
    {code: 'es', label: 'Español'},
];

export default function App() {
  const [theme, setTheme] = useState<Theme>('dark');
  const [language, setLanguage] = useState<Language>('zh'); // Default to Chinese as per request
  const [scrolled, setScrolled] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [showAnimation, setShowAnimation] = useState(true);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);

  const t = translations[language]; // Current translation object
  const isDark = theme === 'dark';

  // Construct localized demo entry
  const demoEntry: TraceEntry = {
    id: 'demo-1',
    moodScore: -3,
    impactScore: -4,
    ...t.demo.entry,
    type: t.demo.entry.type as any
  };

  // Re-trigger animation when language changes
  useEffect(() => {
    setShowAnimation(true);
  }, [language]);

  // Scroll listener for navbar glass effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close language menu when clicking outside
  useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
          if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
              setIsLangMenuOpen(false);
          }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const openPrivacy = (e: React.MouseEvent) => {
      e.preventDefault();
      setShowPrivacyModal(true);
  };

  const openTerms = (e: React.MouseEvent) => {
      e.preventDefault();
      setShowTermsModal(true);
  };

  return (
    <div className={`min-h-screen transition-colors duration-1000 font-sans selection:bg-indigo-500/30 selection:text-indigo-200 ${isDark ? 'bg-[#050505] text-zinc-100' : 'bg-[#fafafa] text-zinc-900'}`}>
      
      {/* --- NAVIGATION --- */}
      <nav 
        className={`fixed top-4 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-5xl z-50 transition-all duration-500 rounded-full
        ${scrolled 
            ? (isDark ? 'bg-black/70 border-white/10' : 'bg-white/80 border-black/5') 
            : 'bg-transparent border-transparent'}
        border backdrop-blur-xl px-6 py-3 flex items-center justify-between`}
      >
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
             <img
                src={`${import.meta.env.BASE_URL}logo.png`}
                alt="Trace"
                className="w-8 h-8 rounded-xl group-hover:rotate-6 transition-transform duration-300"
             />
             <span className={`font-bold text-lg tracking-tight hidden sm:block ${isDark ? 'text-white' : 'text-zinc-900'}`}>Trace.</span>
          </div>

          {/* Center Links (Desktop) */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
             <a href="#features" className={`hover:text-blue-500 transition-colors ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>{t.nav.features}</a>
             <a href="#" onClick={openPrivacy} className={`hover:text-blue-500 transition-colors ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>{t.nav.privacy}</a>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
             
             {/* Language Selector */}
             <div className="relative" ref={langMenuRef}>
                 <button 
                    onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-colors border
                    ${isDark 
                        ? 'bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800' 
                        : 'bg-white border-zinc-200 text-zinc-600 hover:text-black hover:bg-zinc-50'}
                    `}
                 >
                     <Globe size={12} />
                     <span className="uppercase">{language}</span>
                     <ChevronDown size={12} className={`transition-transform duration-300 ${isLangMenuOpen ? 'rotate-180' : ''}`} />
                 </button>

                 {/* Dropdown */}
                 <div className={`absolute top-full right-0 mt-2 w-32 rounded-2xl overflow-hidden border shadow-2xl transition-all duration-200 z-50 origin-top-right
                    ${isLangMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
                    ${isDark ? 'bg-[#0a0a0a] border-zinc-800' : 'bg-white border-zinc-200'}
                 `}>
                     {LANG_OPTIONS.map((opt) => (
                         <button 
                            key={opt.code}
                            onClick={() => {
                                setLanguage(opt.code);
                                setIsLangMenuOpen(false);
                            }}
                            className={`w-full text-left px-4 py-2.5 text-xs font-medium transition-colors flex items-center justify-between
                                ${isDark ? 'hover:bg-zinc-900 text-zinc-300' : 'hover:bg-zinc-50 text-zinc-700'}
                                ${language === opt.code ? 'text-blue-500' : ''}
                            `}
                         >
                             {opt.label}
                             {language === opt.code && <Check size={12} />}
                         </button>
                     ))}
                 </div>
             </div>

             {/* Theme Toggle */}
             <button 
                onClick={() => setTheme(isDark ? 'light' : 'dark')}
                className={`p-2 rounded-full transition-colors ${isDark ? 'hover:bg-zinc-800 text-zinc-400' : 'hover:bg-zinc-100 text-zinc-600'}`}
             >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
             </button>

             {/* CTA */}
             <a 
                href={LINK_APP_STORE} 
                target="_blank" 
                rel="noreferrer"
                className={`hidden sm:flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all transform hover:scale-105 active:scale-95 shadow-lg
                ${isDark ? 'bg-white text-black hover:bg-zinc-200 shadow-white/5' : 'bg-black text-white hover:bg-zinc-800 shadow-black/10'}`}
             >
                <Download size={14} />
                {t.nav.download}
             </a>
          </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="relative pt-48 pb-32 px-6 overflow-hidden">
         {/* Background Ambience - Aurora Effect */}
         <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-indigo-600/10 rounded-[100%] blur-[120px] -z-10 animate-breathe pointer-events-none"></div>
         <div className="absolute top-[10%] left-[20%] w-[600px] h-[600px] bg-blue-500/10 rounded-[100%] blur-[100px] -z-10 animate-breathe pointer-events-none" style={{animationDelay: '2s'}}></div>
         
         <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
            
            {/* Badge */}
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border backdrop-blur-sm mb-10 animate-in slide-in-from-bottom-4 fade-in duration-700
                ${isDark ? 'bg-white/5 border-white/10 text-zinc-300' : 'bg-black/5 border-black/5 text-zinc-600'}
            `}>
               <Zap size={12} className="text-amber-500" fill="currentColor" />
               <span className="text-[10px] font-bold uppercase tracking-widest">{t.hero.badge}</span>
            </div>
            
            {/* Headline */}
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8 animate-in slide-in-from-bottom-8 fade-in duration-700 delay-100">
               {t.hero.title1} <br />
               <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 pb-2 inline-block">
                  {t.hero.title2}
               </span>
            </h1>

            {/* Subtitle */}
            <p className={`text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed mb-12 animate-in slide-in-from-bottom-8 fade-in duration-700 delay-200 font-light ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
               {t.hero.subtitle}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in slide-in-from-bottom-8 fade-in duration-700 delay-300 w-full sm:w-auto">
               <a 
                 href={LINK_APP_STORE}
                 target="_blank"
                 rel="noreferrer"
                 className="h-14 px-8 rounded-full bg-blue-600 text-white font-bold text-base hover:bg-blue-500 transition-all shadow-[0_0_50px_-10px_rgba(37,99,235,0.4)] hover:shadow-[0_0_50px_-5px_rgba(37,99,235,0.6)] flex items-center justify-center gap-2 group w-full sm:w-auto"
               >
                  <span className="mb-0.5"></span> {t.hero.cta_primary}
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
               </a>
               <button className={`h-14 px-8 rounded-full font-bold text-base border transition-all flex items-center justify-center gap-2 w-full sm:w-auto
                    ${isDark ? 'border-zinc-800 hover:bg-zinc-900 text-zinc-300' : 'border-zinc-200 hover:bg-zinc-50 text-zinc-700'}
               `}>
                  {t.hero.cta_secondary}
               </button>
            </div>

            <p className={`mt-6 text-xs font-medium opacity-60 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
                {t.hero.available}
            </p>
         </div>
      </header>

      {/* --- UI SHOWCASE (The Phone) --- */}
      <section className="relative max-w-6xl mx-auto px-4 -mt-10 mb-40 z-20">
         {/* The "Titanium" Phone Frame */}
         <div className={`relative rounded-[50px] p-[6px] shadow-2xl animate-in zoom-in-95 duration-1000 delay-500 mx-auto max-w-5xl
            ${isDark ? 'bg-gradient-to-b from-zinc-700 to-zinc-900 shadow-blue-900/10' : 'bg-gradient-to-b from-zinc-200 to-zinc-400 shadow-zinc-300'}
         `}>
             {/* Inner Bezel */}
             <div className="bg-black rounded-[46px] p-[8px] h-full">
                 {/* Screen Area */}
                 <div className={`rounded-[38px] overflow-hidden relative min-h-[500px] md:min-h-[650px] flex flex-col md:flex-row transition-colors duration-500
                    ${isDark ? 'bg-[#050505]' : 'bg-[#f5f5f7]'}
                 `}>
                     {/* Dynamic Island Placeholder */}
                     <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-8 bg-black rounded-full z-30 pointer-events-none"></div>

                     {/* Left: Interactive Demo Card */}
                     <div className={`flex-1 p-8 md:p-16 flex flex-col justify-center items-center border-b md:border-b-0 md:border-r z-10
                        ${isDark ? 'border-white/5' : 'border-black/5'}
                     `}>
                        <div className="mb-10 text-center">
                            <h3 className="text-2xl font-bold mb-2 tracking-tight">{t.demo.title}</h3>
                            <p className={`text-sm ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>{t.demo.subtitle}</p>
                        </div>
                        <div className="w-full max-w-sm transform hover:scale-[1.02] transition-transform duration-500 cursor-default">
                            <EntryCard 
                                entry={demoEntry} 
                                theme={theme}
                                labels={t.demo.labels}
                            />
                        </div>
                     </div>

                     {/* Right: Timeline Visualization */}
                     <div className="flex-1 relative overflow-hidden flex flex-col">
                        <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 z-10 pointer-events-none ${isDark ? 'block' : 'hidden'}`}></div>
                        <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/80 z-10 pointer-events-none ${isDark ? 'hidden' : 'block'}`}></div>
                        
                        {/* Animation / Chart Toggle Area */}
                        <div className="flex-1 relative">
                            {showAnimation ? (
                                <KLineAnimation 
                                    theme={theme}
                                    texts={t.demo.kline}
                                    onComplete={() => setShowAnimation(false)}
                                />
                            ) : (
                                <div className="h-full flex flex-col animate-in fade-in duration-700">
                                    <div className="flex-1 overflow-hidden opacity-90 scale-95 origin-top mt-10 md:mt-0">
                                        <TimelineTab theme={theme} />
                                    </div>
                                    <button 
                                        onClick={() => setShowAnimation(true)}
                                        className={`absolute bottom-32 left-1/2 -translate-x-1/2 z-30 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all hover:scale-105
                                            ${isDark ? 'bg-white text-black' : 'bg-black text-white'}
                                        `}
                                    >
                                        <Play size={12} fill="currentColor" />
                                        Replay Analysis
                                    </button>
                                </div>
                            )}
                        </div>

                        <div className="absolute bottom-12 left-0 right-0 text-center z-20 px-6 pointer-events-none">
                            <h3 className="text-2xl font-bold mb-2 tracking-tight">{t.demo.viz_title}</h3>
                            <p className={`text-sm ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>{t.demo.viz_subtitle}</p>
                        </div>
                     </div>
                 </div>
             </div>
             {/* Side Buttons Visuals */}
             <div className={`absolute top-24 -left-[2px] w-[3px] h-10 rounded-l-md ${isDark ? 'bg-zinc-700' : 'bg-zinc-300'}`}></div>
             <div className={`absolute top-40 -left-[2px] w-[3px] h-16 rounded-l-md ${isDark ? 'bg-zinc-700' : 'bg-zinc-300'}`}></div>
             <div className={`absolute top-40 -right-[2px] w-[3px] h-24 rounded-r-md ${isDark ? 'bg-zinc-700' : 'bg-zinc-300'}`}></div>
         </div>
      </section>

      {/* --- NEW SECTIONS --- */}
      
      <PainPoints language={language} isDark={isDark} />
      
      <HowItWorks language={language} isDark={isDark} />
      
      <Features language={language} isDark={isDark} />
      
      <VisualShowcase language={language} isDark={isDark} />
      
      <UserStories language={language} isDark={isDark} />
      
      <Pricing language={language} isDark={isDark} />
      
      <Footer 
        language={language} 
        isDark={isDark} 
        onOpenPrivacy={openPrivacy}
        onOpenTerms={openTerms}
      />

      {/* --- MODALS --- */}
      {showPrivacyModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className={`max-w-md w-full p-8 rounded-3xl relative animate-in zoom-in-95 duration-200
                ${isDark ? 'bg-zinc-900 border border-zinc-800' : 'bg-white'}
            `}>
                <button 
                    onClick={() => setShowPrivacyModal(false)}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-zinc-800/10 transition-colors"
                >
                    <div className="w-6 h-6 flex items-center justify-center">✕</div>
                </button>
                <h3 className="text-2xl font-bold mb-4">{t.modals.privacy_title}</h3>
                <p className={`leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                    {t.modals.privacy_content}
                </p>
                <button 
                    onClick={() => setShowPrivacyModal(false)}
                    className="mt-8 w-full py-3 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-500 transition-colors"
                >
                    {t.modals.close}
                </button>
            </div>
        </div>
      )}

      {showTermsModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className={`max-w-md w-full p-8 rounded-3xl relative animate-in zoom-in-95 duration-200
                ${isDark ? 'bg-zinc-900 border border-zinc-800' : 'bg-white'}
            `}>
                <button 
                    onClick={() => setShowTermsModal(false)}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-zinc-800/10 transition-colors"
                >
                    <div className="w-6 h-6 flex items-center justify-center">✕</div>
                </button>
                <h3 className="text-2xl font-bold mb-4">{t.modals.terms_title}</h3>
                <p className={`leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                    {t.modals.terms_content}
                </p>
                <button 
                    onClick={() => setShowTermsModal(false)}
                    className="mt-8 w-full py-3 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-500 transition-colors"
                >
                    {t.modals.close}
                </button>
            </div>
        </div>
      )}

    </div>
  );
}
