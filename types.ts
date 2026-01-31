export interface TraceEntry {
  id: string;
  rawText: string;
  title: string;
  type: 'work' | 'life' | 'relationship' | 'health';
  time: string; // ISO string or simple time
  trigger: string;
  emotion: string;
  moodScore: number; // 0-100
  impactScore: number; // -100 to 100
  action: string;
  result: string;
  tags: string[];
  suggestion: string;
}

export type TabView = 'today' | 'timeline' | 'stats';

export interface DailyStat {
  day: string;
  score: number;
}
