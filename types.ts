export interface TraceEntry {
  id: string;
  rawText: string;
  title: string;
  type: 'work' | 'life' | 'relationship' | 'health';
  time: string; // ISO string or simple time
  trigger: string;
  emotion: string;
  moodScore: number; // -10 to 10
  impactScore: number; // -10 to 10
  action: string;
  result: string;
  tags: string[];
  suggestion: string;
}

export type TabView = 'today' | 'timeline' | 'stats';
export type Theme = 'dark' | 'light';
export type Language = 'en' | 'zh' | 'jp' | 'fr' | 'de' | 'es' | 'ko';

export interface DailyStat {
  day: string;
  score: number;
}