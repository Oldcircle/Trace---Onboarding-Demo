import React, { useState } from 'react';
import { TraceEntry, Theme } from '../types';
import { X, Calendar, Zap, Smile, ArrowRight, Check, Tag, Edit2, Plus } from './Icons';

interface EntryDetailModalProps {
  entry: TraceEntry;
  theme: Theme;
  onClose: () => void;
  onSave?: (updatedEntry: TraceEntry) => void;
  isTutorial?: boolean;
}

const EntryDetailModal: React.FC<EntryDetailModalProps> = ({ entry, theme, onClose, onSave, isTutorial = false }) => {
  const isDark = theme === 'dark';
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(entry.title);

  const handleSave = () => {
    if (onSave) {
      onSave({ ...entry, title: editedTitle });
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center sm:p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      ></div>

      {/* Modal Card */}
      <div className={`relative w-full max-w-md max-h-[90vh] overflow-y-auto rounded-t-[40px] sm:rounded-[40px] shadow-2xl transition-all duration-500 animate-in slide-in-from-bottom-10
        ${isDark ? 'bg-[#111] text-white ring-1 ring-white/10' : 'bg-white text-zinc-900 ring-1 ring-black/5'}
      `}>
        
        {/* Tutorial Pointer Hint */}
        {isTutorial && !isEditing && (
             <div className="absolute top-20 right-10 z-50 pointer-events-none animate-pulse">
                <div className="bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg mb-2">
                    Try editing this title!
                </div>
                <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-blue-600 mx-auto"></div>
             </div>
        )}

        {/* Header Image / Gradient Area */}
        <div className={`h-32 w-full relative overflow-hidden shrink-0 ${entry.impactScore >= 0 ? 'bg-gradient-to-br from-emerald-500/20 to-teal-500/20' : 'bg-gradient-to-br from-rose-500/20 to-orange-500/20'}`}>
            <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full blur-[50px] ${entry.impactScore >= 0 ? 'bg-emerald-500/30' : 'bg-rose-500/30'}`}></div>
            
            <button 
                onClick={onClose}
                className={`absolute top-6 right-6 p-2 rounded-full backdrop-blur-md transition-colors ${isDark ? 'bg-black/20 hover:bg-white/10 text-white' : 'bg-white/40 hover:bg-black/5 text-zinc-800'}`}
            >
                <X size={20} />
            </button>
        </div>

        {/* Content Body */}
        <div className="px-8 pb-10 -mt-8 relative z-10">
            {/* Meta Pill */}
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 backdrop-blur-md border shadow-sm
                ${isDark ? 'bg-zinc-900 border-zinc-800 text-zinc-400' : 'bg-white border-zinc-200 text-zinc-500'}
            `}>
                <Calendar size={12} />
                <span>{entry.time}</span>
                <span className="w-1 h-1 rounded-full bg-current opacity-50"></span>
                <span>{entry.type}</span>
            </div>

            {/* Title Section */}
            <div className="flex items-start justify-between gap-4 mb-8">
                {isEditing ? (
                    <input 
                        value={editedTitle}
                        onChange={(e) => setEditedTitle(e.target.value)}
                        className={`text-3xl font-bold bg-transparent border-b-2 outline-none w-full pb-2 font-serif
                            ${isDark ? 'border-blue-500 text-white placeholder-zinc-600' : 'border-blue-500 text-zinc-900 placeholder-zinc-300'}
                        `}
                        autoFocus
                    />
                ) : (
                    <h2 className="text-3xl font-bold font-serif leading-tight">{editedTitle}</h2>
                )}
                
                <button 
                    onClick={() => setIsEditing(!isEditing)}
                    className={`p-2 rounded-full transition-colors shrink-0
                        ${isEditing 
                            ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30' 
                            : (isDark ? 'text-zinc-500 hover:text-white hover:bg-white/10' : 'text-zinc-400 hover:text-zinc-900 hover:bg-black/5')}
                    `}
                >
                    {isEditing ? <Check size={20} /> : <Edit2 size={20} />}
                </button>
            </div>

            {/* Analysis Grid */}
            <div className="space-y-6">
                
                {/* Trigger */}
                <div className={`p-4 rounded-2xl border ${isDark ? 'bg-zinc-900/50 border-white/5' : 'bg-zinc-50 border-zinc-100'}`}>
                    <div className="flex items-center gap-2 mb-2 text-amber-500">
                        <Zap size={16} />
                        <span className="text-xs font-bold uppercase tracking-widest">Trigger</span>
                    </div>
                    <p className={`text-sm leading-relaxed ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>{entry.trigger}</p>
                </div>

                {/* Emotion */}
                <div className={`p-4 rounded-2xl border ${isDark ? 'bg-zinc-900/50 border-white/5' : 'bg-zinc-50 border-zinc-100'}`}>
                    <div className="flex items-center gap-2 mb-2 text-indigo-400">
                        <Smile size={16} />
                        <span className="text-xs font-bold uppercase tracking-widest">Emotion</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className={`text-sm leading-relaxed ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>{entry.emotion}</p>
                        <div className={`h-1.5 w-24 rounded-full overflow-hidden ${isDark ? 'bg-zinc-800' : 'bg-zinc-200'}`}>
                            <div className={`h-full ${entry.moodScore > 0 ? 'bg-emerald-500' : 'bg-rose-500'}`} style={{width: `${((entry.moodScore + 10) / 20) * 100}%`}}></div>
                        </div>
                    </div>
                </div>

                {/* Insight */}
                <div className={`p-5 rounded-2xl border relative overflow-hidden group
                    ${isDark ? 'bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border-indigo-500/20' : 'bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-200'}
                `}>
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <ArrowRight size={48} />
                    </div>
                    <div className="flex items-center gap-2 mb-2 text-indigo-400">
                        <span className="text-xs font-bold uppercase tracking-widest">AI Suggestion</span>
                    </div>
                    <p className={`text-base font-serif italic leading-relaxed ${isDark ? 'text-indigo-100' : 'text-indigo-900'}`}>"{entry.suggestion}"</p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                    {entry.tags.map(tag => (
                        <span key={tag} className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium border transition-colors
                            ${isDark 
                                ? 'bg-zinc-800 border-zinc-700 text-zinc-300' 
                                : 'bg-white border-zinc-200 text-zinc-600 shadow-sm'}
                        `}>
                            <Tag size={10} />
                            {tag}
                        </span>
                    ))}
                    <button className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium border border-dashed transition-colors
                         ${isDark 
                            ? 'border-zinc-700 text-zinc-500 hover:text-zinc-300 hover:border-zinc-500' 
                            : 'border-zinc-300 text-zinc-400 hover:text-zinc-600 hover:border-zinc-400'}
                    `}>
                        <Plus size={12} /> Add Tag
                    </button>
                </div>

                {/* Action Button (Tutorial or Normal) */}
                <div className="pt-6">
                    <button 
                        onClick={handleSave}
                        className={`w-full py-4 rounded-full font-bold text-sm tracking-widest uppercase transition-all shadow-lg active:scale-95
                            ${isDark 
                                ? 'bg-white text-black hover:bg-zinc-200 shadow-white/10' 
                                : 'bg-black text-white hover:bg-zinc-800 shadow-black/20'}
                        `}
                    >
                        {isTutorial ? 'Start My Journey' : 'Save Changes'}
                    </button>
                </div>

            </div>
        </div>
      </div>
    </div>
  );
};

export default EntryDetailModal;