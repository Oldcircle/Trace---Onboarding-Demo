import { TraceEntry, DailyStat } from './types';

// Mock data for the Timeline and Stats visualizations
export const MOCK_TIMELINE_DATA: DailyStat[] = [
  { day: 'Mon', score: 20 },
  { day: 'Tue', score: 45 },
  { day: 'Wed', score: -10 },
  { day: 'Thu', score: 30 },
  { day: 'Fri', score: 65 },
  { day: 'Sat', score: 80 },
  { day: 'Sun', score: 50 },
  { day: 'Mon', score: -25 },
  { day: 'Tue', score: 10 },
  { day: 'Wed', score: 40 },
  { day: 'Thu', score: 55 },
  { day: 'Fri', score: 90 },
  { day: 'Sat', score: 70 },
  { day: 'Today', score: 35 }, // Will be updated dynamically
];

export const MOCK_STATS_TREND: DailyStat[] = [
  { day: 'D-6', score: 40 },
  { day: 'D-5', score: 35 },
  { day: 'D-4', score: 50 },
  { day: 'D-3', score: -20 },
  { day: 'D-2', score: 10 },
  { day: 'D-1', score: 60 },
  { day: 'Today', score: 45 },
];

export const DEMO_ENTRY: TraceEntry = {
  id: 'demo-1',
  rawText: "今天项目上线延期了，被客户投诉，感觉压力很大，在楼下抽了根烟冷静了一下。",
  title: "项目延期危机",
  type: "work",
  time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
  trigger: "客户投诉 / 上线延期",
  emotion: "焦虑 / 压力",
  moodScore: 35,
  impactScore: -40,
  action: "抽烟冷静 / 暂停工作",
  result: "情绪暂时平复",
  tags: ["Work", "Stress", "Client"],
  suggestion: "尝试将剩余任务拆解为小时级颗粒度，并主动同步客户预期。",
};
