
import React from 'react';
import { Twitter, Github, Download } from './Icons';
import { Language } from '../types';
import { translations } from '../translations';

interface FooterProps {
  language: Language;
  isDark: boolean;
  onOpenPrivacy: (e: React.MouseEvent) => void;
  onOpenTerms: (e: React.MouseEvent) => void;
}

const LINK_APP_STORE = "https://apps.apple.com/in/app/trace-see-how-you-became-you/id6758615892";

export default function Footer({ language, isDark, onOpenPrivacy, onOpenTerms }: FooterProps) {
  const t = translations[language].footer;

  return (
    <footer className={`py-24 px-6 border-t
      ${isDark ? 'bg-black border-zinc-900 text-zinc-400' : 'bg-zinc-50 border-zinc-200 text-zinc-600'}
    `}>
      <div className="max-w-7xl mx-auto">
        
        {/* Main CTA */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">
            {t.title}
          </h2>
          <p className="text-xl mb-10 opacity-80">{t.subtitle}</p>
          
          <a 
            href={LINK_APP_STORE}
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-blue-600 text-white font-bold text-lg hover:bg-blue-500 transition-all shadow-lg hover:shadow-blue-500/30"
          >
            <Download size={24} />
            {t.links.contact && "Download App"} {/* Fallback if needed, but should use t.nav.download or similar if available, here using hardcoded or t keys */}
            {/* Actually let's use the text from subtitle or just hardcode 'Download' based on language logic if t.download is not in footer */}
            Download Trace
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-24">
          {/* Product */}
          <div>
            <h4 className={`font-bold mb-6 ${isDark ? 'text-white' : 'text-black'}`}>{t.product}</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#features" className="hover:text-blue-500 transition-colors">{t.links.features}</a></li>
              <li><a href="#pricing" className="hover:text-blue-500 transition-colors">{t.links.pricing}</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">{t.links.updates}</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className={`font-bold mb-6 ${isDark ? 'text-white' : 'text-black'}`}>{t.support}</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-blue-500 transition-colors">{t.links.help}</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">{t.links.contact}</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className={`font-bold mb-6 ${isDark ? 'text-white' : 'text-black'}`}>{t.legal}</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" onClick={onOpenPrivacy} className="hover:text-blue-500 transition-colors">{t.links.privacy}</a></li>
              <li><a href="#" onClick={onOpenTerms} className="hover:text-blue-500 transition-colors">{t.links.terms}</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className={`font-bold mb-6 ${isDark ? 'text-white' : 'text-black'}`}>{t.social}</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="#" className="flex items-center gap-2 hover:text-blue-500 transition-colors">
                  <Twitter size={16} /> {t.links.twitter}
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 hover:text-blue-500 transition-colors">
                  <Github size={16} /> {t.links.github}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-60">
          <p>{t.copyright}</p>
          <div className="flex gap-4">
            <span>English</span>
            <span>中文</span>
            <span>日本語</span>
            <span>한국어</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
