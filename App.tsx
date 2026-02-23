import React, { useState, useEffect, useRef } from 'react';
import { Theme, Language } from './types';
import { translations } from './translations';
import { DEMO_ENTRY } from './constants';
import { Sun, Moon, ArrowRight, Check, Shield, Zap, Layout, ChevronRight, Globe, ChevronDown, Download } from './components/Icons';
import EntryCard from './components/EntryCard';
import TimelineTab from './components/TimelineTab';
import StatsTab from './components/StatsTab';

// Legal Links & App Store
const LINK_PRIVACY = "https://oldcircle.github.io/Trace-Legal-Center/#/privacy";
const LINK_TERMS = "https://oldcircle.github.io/Trace-Legal-Center/#/terms";
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
  const [language, setLanguage] = useState<Language>('en');
  const [scrolled, setScrolled] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);

  const t = translations[language]; // Current translation object
  const isDark = theme === 'dark';

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
             <div className="relative w-8 h-8 flex items-center justify-center">
                 <div className="absolute inset-0 bg-blue-600 rounded-xl rotate-0 group-hover:rotate-6 transition-transform duration-300"></div>
                 <span className="relative text-white font-serif font-bold italic text-lg">T</span>
             </div>
             <span className={`font-bold text-lg tracking-tight hidden sm:block ${isDark ? 'text-white' : 'text-zinc-900'}`}>Trace.</span>
          </div>

          {/* Center Links (Desktop) */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
             <a href="#features" className={`hover:text-blue-500 transition-colors ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>{t.nav.features}</a>
             <a href="#privacy" className={`hover:text-blue-500 transition-colors ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>{t.nav.privacy}</a>
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
                                entry={DEMO_ENTRY} 
                                theme={theme} 
                            />
                        </div>
                     </div>

                     {/* Right: Timeline Visualization */}
                     <div className="flex-1 relative overflow-hidden flex flex-col">
                        <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 z-10 pointer-events-none ${isDark ? 'block' : 'hidden'}`}></div>
                        <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/80 z-10 pointer-events-none ${isDark ? 'hidden' : 'block'}`}></div>
                        
                        <div className="flex-1 overflow-hidden opacity-90 scale-95 origin-top mt-10 md:mt-0">
                            <TimelineTab theme={theme} />
                        </div>
                        <div className="absolute bottom-12 left-0 right-0 text-center z-20 px-6">
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

      {/* --- FEATURES GRID (Bento Box) --- */}
      <section id="features" className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto">
              <div className="mb-20 text-center">
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{t.features.title}</h2>
                  <p className={`text-xl font-light ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>{t.features.subtitle}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
                  
                  {/* Feature 1: Frictionless Input (Large) */}
                  <div className={`col-span-1 md:col-span-2 p-10 rounded-[40px] border relative overflow-hidden group transition-all duration-500 hover:shadow-2xl
                      ${isDark 
                        ? 'bg-[#0a0a0a] border-zinc-800 hover:border-zinc-700' 
                        : 'bg-white border-zinc-100 hover:border-zinc-200 shadow-xl shadow-zinc-200/50'}
                  `}>
                      <div className={`absolute top-0 right-0 p-10 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-500 transform group-hover:scale-110 rotate-12 ${isDark ? 'text-white' : 'text-black'}`}>
                          <Layout size={240} />
                      </div>
                      <div className="relative z-10 h-full flex flex-col justify-between">
                          <div className="mb-8">
                             <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-600 text-white flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30">
                                <Zap size={28} fill="currentColor" />
                             </div>
                             <h3 className="text-3xl font-bold mb-4 tracking-tight">{t.features.f1_title}</h3>
                             <p className={`max-w-md text-lg leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                                 {t.features.f1_desc}
                             </p>
                          </div>
                          <div className="flex gap-2">
                             <div className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider border ${isDark ? 'bg-black border-zinc-800 text-zinc-500' : 'bg-zinc-50 border-zinc-200 text-zinc-500'}`}>Auto-Tagging</div>
                             <div className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider border ${isDark ? 'bg-black border-zinc-800 text-zinc-500' : 'bg-zinc-50 border-zinc-200 text-zinc-500'}`}>Sentiment Score</div>
                          </div>
                      </div>
                  </div>

                  {/* Feature 2: Privacy (Tall) */}
                  <div id="privacy" className={`row-span-2 p-10 rounded-[40px] border relative overflow-hidden flex flex-col
                      ${isDark 
                        ? 'bg-gradient-to-b from-zinc-900 to-black border-zinc-800' 
                        : 'bg-gradient-to-b from-white to-zinc-50 border-zinc-100 shadow-xl shadow-zinc-200/50'}
                  `}>
                      <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-6 border border-emerald-500/20">
                         <Shield size={28} />
                      </div>
                      <h3 className="text-3xl font-bold mb-4 tracking-tight">{t.features.f2_title}</h3>
                      <p className={`mb-8 text-lg leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                          {t.features.f2_desc}
                      </p>
                      <div className="mt-auto">
                        <div className={`p-4 rounded-2xl border mb-6 ${isDark ? 'bg-black/50 border-zinc-800' : 'bg-white border-zinc-200'}`}>
                            <div className="flex items-center gap-3 mb-2">
                                <Check size={16} className="text-emerald-500" />
                                <span className={`text-sm font-medium ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>Local Processing</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Check size={16} className="text-emerald-500" />
                                <span className={`text-sm font-medium ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>FaceID Lock</span>
                            </div>
                        </div>
                        <a href={LINK_PRIVACY} target="_blank" rel="noreferrer" className="inline-flex items-center text-sm font-bold text-emerald-500 hover:text-emerald-400 transition-colors">
                            {t.features.f2_link} <ChevronRight size={16} />
                        </a>
                      </div>
                  </div>

                  {/* Feature 3: Stats Preview */}
                  <div className={`p-8 rounded-[40px] border relative overflow-hidden flex flex-col transition-all hover:scale-[1.01]
                      ${isDark ? 'bg-[#0a0a0a] border-zinc-800' : 'bg-white border-zinc-100 shadow-xl shadow-zinc-200/50'}
                  `}>
                      <div className="mb-4 relative z-10">
                          <h3 className="text-xl font-bold">{t.features.f3_title}</h3>
                          <p className={`text-sm ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>{t.features.f3_desc}</p>
                      </div>
                      {/* Mini Stats Component */}
                      <div className="flex-1 opacity-75 pointer-events-none scale-90 origin-top-left -ml-4 w-[120%] mask-gradient-b">
                          <StatsTab theme={theme} />
                      </div>
                  </div>

                  {/* Feature 4: Context */}
                  <div className={`p-10 rounded-[40px] border relative overflow-hidden flex flex-col justify-center
                      ${isDark ? 'bg-[#0a0a0a] border-zinc-800' : 'bg-white border-zinc-100 shadow-xl shadow-zinc-200/50'}
                  `}>
                      <div className="relative z-10">
                          <h3 className="text-2xl font-bold mb-3">{t.features.f4_title}</h3>
                          <p className={`text-base leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                             {t.features.f4_desc}
                          </p>
                      </div>
                      <div className="absolute right-[-20px] bottom-[-20px] opacity-10">
                          <div className="w-40 h-40 rounded-full border-[12px] border-blue-500"></div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-32 px-6 text-center relative overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-b ${isDark ? 'from-transparent to-zinc-900/50' : 'from-transparent to-zinc-100/50'} -z-10`}></div>
          
          <div className="max-w-3xl mx-auto">
              <h2 className="text-5xl md:text-7xl font-serif italic mb-8 animate-breathe">{t.cta.title}</h2>
              <p className={`text-lg mb-12 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  {t.cta.subtitle}
              </p>
              <a 
                 href={LINK_APP_STORE}
                 target="_blank"
                 rel="noreferrer"
                 className={`inline-flex h-16 px-12 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-2xl items-center gap-3
                 ${isDark ? 'bg-white text-black' : 'bg-black text-white'}`}
              >
                  <span className="text-2xl mb-1"></span> {t.cta.button}
              </a>
          </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className={`py-12 border-t ${isDark ? 'bg-black border-white/5' : 'bg-white border-zinc-100'}`}>
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
              <div className="col-span-1 md:col-span-2">
                  <div className="flex items-center gap-2 mb-6">
                        <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-white font-serif font-bold italic text-xs">T</div>
                        <span className="font-bold text-lg tracking-tight">Trace.</span>
                  </div>
                  <p className={`max-w-xs text-sm leading-relaxed ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
                      {t.footer.desc}
                  </p>
              </div>
              
              <div>
                  <h4 className="font-bold mb-6 text-xs uppercase tracking-widest opacity-50">Product</h4>
                  <ul className={`space-y-4 text-sm font-medium ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                      <li><a href="#features" className="hover:text-blue-500 transition-colors">Features</a></li>
                      <li><a href={LINK_APP_STORE} target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors">Download</a></li>
                  </ul>
              </div>

              <div>
                  <h4 className="font-bold mb-6 text-xs uppercase tracking-widest opacity-50">Legal</h4>
                  <ul className={`space-y-4 text-sm font-medium ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                      <li><a href={LINK_PRIVACY} target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors">{t.nav.privacy}</a></li>
                      <li><a href={LINK_TERMS} target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors">{t.nav.terms}</a></li>
                  </ul>
              </div>
          </div>
          <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-dashed border-zinc-800/50 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600">
              <p>© {new Date().getFullYear()} Trace Inc. {t.footer.rights}</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                  <span className="hover:text-blue-500 cursor-pointer transition-colors">Twitter</span>
                  <span className="hover:text-blue-500 cursor-pointer transition-colors">Instagram</span>
              </div>
          </div>
      </footer>

    </div>
  );
}