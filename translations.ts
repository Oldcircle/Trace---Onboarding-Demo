import { Language } from './types';

export const translations: Record<Language, any> = {
  en: {
    nav: { features: 'Features', privacy: 'Privacy', terms: 'Terms', download: 'Download' },
    hero: {
      badge: 'AI-Powered Life Analytics',
      title1: 'See how',
      title2: 'you became you.',
      subtitle: 'Track every moment. See the patterns. Grow your balance.',
      cta_primary: 'Get on App Store',
      cta_secondary: 'Watch Demo (30s)',
      available: 'Requires iOS 17.0+'
    },
    pain_points: {
      title: 'Do you feel this way?',
      card1_title: 'Busy but blurred',
      card1_desc: 'Days fly by, but you can\'t recall what made you happy or sad. Life feels like a blur.',
      card2_title: 'Stuck in loops',
      card2_desc: 'You know you should change, but don\'t know where to start. No data to show what actually works.',
      card3_title: 'Journaling is hard',
      card3_desc: 'Traditional diaries are too heavy. You don\'t need more words, you need more insights.',
      transition: 'Trace is not just another journal. It\'s a tool to "see yourself".'
    },
    how_it_works: {
      title: 'One sentence. Full insight.',
      step1_title: 'Quick Record',
      step1_desc: 'Just speak or type. "Asked for a raise, got 20%." 10 seconds done.',
      step2_title: 'AI Analysis',
      step2_desc: 'AI extracts: Trigger, Emotion, Action, Result. Score: +8.',
      step3_title: 'Visual Growth',
      step3_desc: 'Your "Life Balance" updates. Good days are green candles 📈, bad days are red 📉.'
    },
    features: {
      title: 'Not just journaling. Life analytics.',
      subtitle: 'Privacy-first intelligence.',
      f1_title: 'Life as a Chart',
      f1_desc: 'View your mood and behavior trends like a stock chart. Discover cycles you never noticed.',
      f2_title: 'AI Daily Insights',
      f2_desc: 'Daily and weekly reports on your mental state. Life Score 0-100 quantifies your status.',
      f3_title: '10s Quick Capture',
      f3_desc: 'Voice or text. AI auto-fills titles, tags, and scores. No templates, no burden.',
      f4_title: 'Smart Tagging',
      f4_desc: 'Auto-extract tags (Work, Sleep, Social). Filter the chart to see what impacts you most.'
    },
    visual: {
      title: 'Your Life Trend',
      subtitle: 'Others write logs. You see trends.',
      labels: {
        workout: 'Workout: +6%',
        meeting: 'Monday Meeting: Dip',
        streak: '3-Day Streak: New High'
      }
    },
    stories: {
      title: 'What they found with Trace',
      s1_role: 'Product Manager, 28',
      s1_quote: '"I realized my score always drops after weekly meetings. Not because of the meeting, but the disruption. Now I buffer 30 mins, and my Friday balance is up 12%."',
      s2_role: 'Designer, 25',
      s2_quote: '"The K-line made me \'see\' the value of running. I might not feel happy while running, but the next day\'s opening price is always higher."',
      s3_role: 'Freelancer, 32',
      s3_quote: '"I used to quit journaling in a week. Trace takes 10 seconds. My Life Score went from 52 to 78 in three months."'
    },
    pricing: {
      title: 'Start free. Upgrade when ready.',
      free: 'Free',
      pro: 'Pro',
      p_daily: '3 entries/day',
      p_history: 'Last 7 days',
      p_report: '-',
      p_tags: '-',
      p_chart: 'Basic',
      p_daily_pro: 'Unlimited',
      p_history_pro: 'All History',
      p_report_pro: 'Daily + Weekly Reports',
      p_tags_pro: 'Full Management',
      p_chart_pro: 'Full Scale + Filters',
      price_free: 'Free',
      price_pro: '$4.99/mo',
      cta_free: 'Download Free',
      cta_pro: 'Start Pro Trial',
      guarantee: 'Cancel anytime · 7-day free trial'
    },
    footer: {
      title: 'Your life deserves to be seen.',
      subtitle: 'Download Trace for free and start today.',
      product: 'Product',
      support: 'Support',
      legal: 'Legal',
      social: 'Social',
      links: {
        features: 'Features',
        pricing: 'Pricing',
        updates: 'Updates',
        help: 'Help Center',
        contact: 'Contact',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        twitter: 'Twitter',
        github: 'GitHub'
      },
      copyright: '© 2026 Trace. All rights reserved.'
    },
    demo: {
      title: 'Structured Memory',
      subtitle: 'Turning thoughts into data.',
      viz_title: 'Visualized Growth',
      viz_subtitle: 'Emotional trends over time.',
      entry: {
        rawText: "Project launch delayed today, client complained. Felt super stressed, went downstairs for a smoke to calm down.",
        title: "Project Delay Crisis",
        type: "work",
        time: "14:30",
        trigger: "Client Complaint / Delay",
        emotion: "Anxiety / Stress",
        action: "Smoke break / Pause",
        result: "Emotionally stabilized",
        tags: ["Work", "Stress", "Client"],
        suggestion: "Try breaking remaining tasks into hourly chunks and proactively syncing client expectations."
      },
      labels: {
        trigger: 'Trigger',
        emotion: 'Emotion',
        insight: 'Insight'
      },
      kline: {
        event: 'Event: Stress',
        patterns: 'Patterns Found.',
        syncing: 'Syncing Timeline...'
      }
    },
    modals: {
      privacy_title: 'Privacy Policy',
      privacy_content: 'At Trace, we believe your thoughts are your own. Your data is securely stored and encrypted. We do not sell your data to third parties. AI analysis is performed securely to generate your insights. For full details, visit our Privacy Policy page.',
      terms_title: 'Terms of Service',
      terms_content: 'By using Trace, you agree to use the app for personal self-reflection. We provide tools for analysis but are not a substitute for professional psychological help. Subscriptions are billed to your Apple ID and auto-renew unless canceled 24 hours before the end of the period.',
      close: 'Close'
    }
  },
  zh: {
    nav: { features: '功能', privacy: '隐私', terms: '条款', download: '下载' },
    hero: {
      badge: 'AI 驱动的人生分析',
      title1: '看见你如何',
      title2: '成为你自己。',
      subtitle: 'Trace 把每一件生活事件变成数据。AI 分析你的情绪和行为，用股票 K 线图展示你的「人生余额」。',
      cta_primary: 'App Store 下载',
      cta_secondary: '观看演示 (30s)',
      available: '需要 iOS 17.0 或更高版本'
    },
    pain_points: {
      title: '你有没有这样的感觉？',
      card1_title: '忙碌但模糊',
      card1_desc: '感觉每天都在忙，但回头看记不起哪天开心哪天难过。生活变成了一团模糊的感觉。',
      card2_title: '想改变却无从下手',
      card2_desc: '道理都懂，但不知道从哪里开始。没有数据告诉你哪个习惯真的有效。',
      card3_title: '日记坚持不下来',
      card3_desc: '传统日记太重了，写完也不知道有什么用。你需要的不是更多文字，而是更多洞察。',
      transition: 'Trace 不是又一个日记 App。它是一个让你「看见自己」的工具。'
    },
    how_it_works: {
      title: '一句话，看见一整天',
      step1_title: '随手记录',
      step1_desc: '语音或文字。「今天谈了加薪，成功涨了 20%。」10 秒完成。',
      step2_title: 'AI 自动解析',
      step2_desc: 'AI 拆解：触发、情绪、行动、结果。情绪分：+7，影响分：+8。',
      step3_title: 'K 线图实时更新',
      step3_desc: '你的「人生余额」更新。好事是绿色阳线 📈，坏事是红色阴线 📉。'
    },
    features: {
      title: '不只是记录，而是理解',
      subtitle: '隐私至上的智能体验。',
      f1_title: 'K 线图人生走势',
      f1_desc: '像看股票一样看自己。用蜡烛图一目了然，发现你从未注意的周期性规律。',
      f2_title: 'AI 洞察报告',
      f2_desc: '每天一份人生复盘。Life Score 0-100 分量化你的状态，发现重复模式。',
      f3_title: '10 秒极速记录',
      f3_desc: '打字或语音，一句话就够。AI 自动补全标题、标签、评分。零负担。',
      f4_title: '智能标签系统',
      f4_desc: '自动提取生活关键词。用标签筛选 K 线图，看哪类事件影响最大。'
    },
    visual: {
      title: '你的人生走势图',
      subtitle: '别人还在写流水账，你已经在看趋势了。',
      labels: {
        workout: '运动: +6%',
        meeting: '周一会议: 下跌',
        streak: '3天连涨: 新高'
      }
    },
    stories: {
      title: '他们用 Trace 发现了什么',
      s1_role: '产品经理, 28岁',
      s1_quote: '「用了两个月才发现，每次周会后我的分数必跌。现在我会后预留 30 分钟缓冲，周五余额比以前高了 12%。」',
      s2_role: '设计师, 25岁',
      s2_quote: '「K 线图让我第一次‘看见’运动的价值。跑步那天不一定开心，但第二天的开盘价一定更高。」',
      s3_role: '自由职业者, 32岁',
      s3_quote: '「以前写日记坚持不到一周。Trace 只要一句话，10 秒搞定。三个月后我的 Life Score 从 52 涨到了 78。」'
    },
    pricing: {
      title: '从免费开始，按需升级',
      free: '免费版',
      pro: 'Pro 版',
      p_daily: '3 条 / 天',
      p_history: '最近 7 天',
      p_report: '-',
      p_tags: '-',
      p_chart: '基础查看',
      p_daily_pro: '无限记录',
      p_history_pro: '全部历史',
      p_report_pro: '日报 + 周报',
      p_tags_pro: '完整管理 + 自动',
      p_chart_pro: '全尺度 + 筛选',
      price_free: '免费',
      price_pro: '¥38 / 月',
      cta_free: '免费下载',
      cta_pro: '开始 Pro 试用',
      guarantee: '随时取消 · 7 天免费试用'
    },
    footer: {
      title: '你的人生值得被看见',
      subtitle: '免费下载 Trace，今天就开始。',
      product: '产品',
      support: '支持',
      legal: '法律',
      social: '社交',
      links: {
        features: '功能介绍',
        pricing: '价格方案',
        updates: '更新日志',
        help: '帮助中心',
        contact: '联系我们',
        privacy: '隐私政策',
        terms: '服务条款',
        twitter: 'Twitter',
        github: 'GitHub'
      },
      copyright: '© 2026 Trace. 版权所有。'
    },
    demo: {
      title: '结构化记忆',
      subtitle: '将思绪转化为数据。',
      viz_title: '可视化成长',
      viz_subtitle: '跨越时间的情绪趋势。',
      entry: {
        rawText: "今天项目上线延期了，被客户投诉，感觉压力很大，在楼下抽了根烟冷静了一下。",
        title: "项目延期危机",
        type: "工作",
        time: "14:30",
        trigger: "客户投诉 / 上线延期",
        emotion: "焦虑 / 压力",
        action: "抽烟冷静 / 暂停工作",
        result: "情绪暂时平复",
        tags: ["工作", "压力", "客户"],
        suggestion: "尝试将剩余任务拆解为小时级颗粒度，并主动同步客户预期。"
      },
      labels: {
        trigger: '触发',
        emotion: '情绪',
        insight: '洞察'
      },
      kline: {
        event: '事件: 压力',
        patterns: '发现模式',
        syncing: '同步时间线...'
      }
    },
    modals: {
      privacy_title: '隐私政策',
      privacy_content: '在 Trace，我们确保你的想法只属于你自己。你的数据经过安全加密存储，我们不会将你的数据出售给第三方。AI 分析在安全环境中进行，仅用于生成你的个人洞察。详情请参阅我们的隐私政策页面。',
      terms_title: '服务条款',
      terms_content: '使用 Trace 即表示您同意将本应用用于个人反思。我们提供分析工具，但不能替代专业的心理咨询帮助。订阅费用将从您的 Apple ID 扣除，除非在当前周期结束前 24 小时取消，否则将自动续订。',
      close: '关闭'
    }
  },
  // Keep other languages minimal or fallback to English for new sections to avoid errors, 
  // or duplicate English content. For brevity in this turn, I'll just map them to English structure 
  // or leave them as is but `App.tsx` might crash if keys are missing.
  // Best practice: Copy English structure to others.
  jp: {
    nav: { features: '機能', privacy: 'プライバシー', terms: '利用規約', download: 'ダウンロード' },
    hero: {
        badge: 'AI搭載のライフ分析',
        title1: 'あなたがあなたに',
        title2: 'なるまでの軌跡。',
        subtitle: '日々の瞬間と人生の軌跡を結ぶ、AI搭載のジャーナルアプリ。',
        cta_primary: 'App Storeで入手',
        cta_secondary: 'デモを見る',
        available: 'iOS 17.0以降が必要です'
    },
    pain_points: {
      title: 'こんな気持ち、ありませんか？',
      card1_title: '忙しいのに曖昧',
      card1_desc: '毎日が飛ぶように過ぎるけど、何が嬉しくて何が辛かったか思い出せない。人生がぼやけた感覚になっていく。',
      card2_title: '同じことの繰り返し',
      card2_desc: '変わりたいのに、どこから始めればいいかわからない。何が本当に効果的なのか、データがない。',
      card3_title: '日記が続かない',
      card3_desc: '従来の日記は重すぎる。必要なのは言葉ではなく、気づきだ。',
      transition: 'Trace はただの日記アプリではありません。「自分を見る」ためのツールです。'
    },
    how_it_works: {
      title: 'ひと言で、すべてがわかる。',
      step1_title: 'サッと記録',
      step1_desc: '話すか入力するだけ。「昇給交渉して20%アップ。」10秒で完了。',
      step2_title: 'AI が分析',
      step2_desc: 'AIが自動抽出：きっかけ、感情、行動、結果。スコア：+8。',
      step3_title: '成長を可視化',
      step3_desc: 'あなたの「ライフバランス」が更新。良い日は緑のローソク足、悪い日は赤のローソク足。'
    },
    features: {
      title: '記録だけじゃない。人生の分析。',
      subtitle: 'プライバシー最優先のインテリジェンス。',
      f1_title: '人生をチャートで',
      f1_desc: '気分や行動のトレンドを株価チャートのように表示。気づかなかった周期を発見できます。',
      f2_title: 'AI デイリーインサイト',
      f2_desc: '日次・週次レポートであなたの心理状態を把握。ライフスコア0-100であなたの状態を数値化。',
      f3_title: '10秒クイック記録',
      f3_desc: '音声でもテキストでも。AIがタイトル、タグ、スコアを自動入力。テンプレートも負担もなし。',
      f4_title: 'スマートタグ',
      f4_desc: 'タグを自動抽出（仕事、睡眠、人間関係）。チャートをフィルターして、何が最も影響しているか確認。'
    },
    visual: {
      title: 'あなたのライフトレンド',
      subtitle: '他の人は日誌を書く。あなたはトレンドを見る。',
      labels: {
        workout: '運動: +6%',
        meeting: '月曜会議: 下落',
        streak: '3日連続上昇: 最高値'
      }
    },
    stories: {
      title: 'Trace で見つけたこと',
      s1_role: 'プロダクトマネージャー, 28歳',
      s1_quote: '「週次ミーティングの後、必ずスコアが下がることに気づきました。会議そのものではなく、リズムの乱れが原因でした。今は30分のバッファを入れていて、金曜のバランスが12%上がりました。」',
      s2_role: 'デザイナー, 25歳',
      s2_quote: '「K線チャートでランニングの価値を初めて\'見る\'ことができました。走っている時は楽しくないかもしれないけど、翌日の始値は必ず高くなるんです。」',
      s3_role: 'フリーランサー, 32歳',
      s3_quote: '「以前は日記が1週間も続きませんでした。Traceなら10秒で完了。3ヶ月でライフスコアが52から78に上がりました。」'
    },
    pricing: {
      title: '無料で始めて、準備ができたらアップグレード。',
      free: '無料',
      pro: 'Pro',
      p_daily: '1日3件まで',
      p_history: '直近7日間',
      p_report: '-',
      p_tags: '-',
      p_chart: 'ベーシック',
      p_daily_pro: '無制限',
      p_history_pro: '全履歴',
      p_report_pro: '日次・週次レポート',
      p_tags_pro: '完全管理',
      p_chart_pro: 'フルスケール + フィルター',
      price_free: '無料',
      price_pro: '$4.99/月',
      cta_free: '無料ダウンロード',
      cta_pro: 'Pro トライアル開始',
      guarantee: 'いつでも解約可能 · 7日間無料トライアル'
    },
    footer: {
      title: 'あなたの人生は、見られる価値がある。',
      subtitle: 'Trace を無料でダウンロードして、今日から始めよう。',
      product: 'プロダクト',
      support: 'サポート',
      legal: '法的情報',
      social: 'ソーシャル',
      links: {
        features: '機能',
        pricing: '料金',
        updates: 'アップデート',
        help: 'ヘルプセンター',
        contact: 'お問い合わせ',
        privacy: 'プライバシーポリシー',
        terms: '利用規約',
        twitter: 'Twitter',
        github: 'GitHub'
      },
      copyright: '© 2026 Trace. All rights reserved.'
    },
    demo: {
        title: '構造化された記憶',
        subtitle: '思考をデータに変える。',
        viz_title: '成長の可視化',
        viz_subtitle: '感情のトレンドを追跡。',
        entry: {
          rawText: "プロジェクトのリリースが遅れ、クライアントから苦情。強いストレスを感じ、下でタバコを吸って落ち着いた。",
          title: "プロジェクト遅延の危機",
          type: "仕事",
          time: "14:30",
          trigger: "苦情 / 遅延",
          emotion: "不安 / ストレス",
          action: "喫煙休憩 / 一時停止",
          result: "感情が一時的に安定",
          tags: ["仕事", "ストレス", "クライアント"],
          suggestion: "残りのタスクを1時間単位に分割し、クライアントの期待値を能動的に調整してみてください。"
        },
        labels: {
          trigger: 'トリガー',
          emotion: '感情',
          insight: 'インサイト'
        },
        kline: {
          event: 'イベント: ストレス',
          patterns: 'パターン発見',
          syncing: 'タイムライン同期中...'
        }
    },
    modals: {
        privacy_title: 'プライバシーポリシー',
        privacy_content: 'Traceでは、あなたの思考はあなただけのものだと信じています。',
        terms_title: '利用規約',
        terms_content: 'Traceを使用することで、自己反省のためにアプリを使用することに同意したものとみなされます。',
        close: '閉じる'
    }
  },
  ko: {
      nav: { features: '기능', privacy: '개인정보', terms: '이용약관', download: '다운로드' },
      hero: {
          badge: 'AI 기반 라이프 분석',
          title1: '당신이 당신이 된',
          title2: '과정을 보다.',
          subtitle: '일상의 순간과 인생의 궤적을 연결하는 AI 기반 저널.',
          cta_primary: 'App Store에서 받기',
          cta_secondary: '데모 보기',
          available: 'iOS 17.0 이상 필요'
      },
      pain_points: {
        title: '이런 느낌, 있지 않나요?',
        card1_title: '바쁜데 기억이 흐릿한',
        card1_desc: '하루하루가 빠르게 지나가지만, 뭐가 기뻤고 뭐가 슬펐는지 기억나지 않아요. 삶이 흐릿하게 느껴집니다.',
        card2_title: '같은 패턴의 반복',
        card2_desc: '변해야 한다는 건 알지만, 어디서부터 시작해야 할지 모르겠어요. 뭐가 정말 효과적인지 보여주는 데이터가 없으니까요.',
        card3_title: '일기 쓰기가 어려운',
        card3_desc: '전통적인 일기는 너무 부담스러워요. 더 많은 글이 아니라, 더 많은 통찰이 필요합니다.',
        transition: 'Trace는 그저 또 하나의 일기장이 아닙니다. "나 자신을 보는" 도구입니다.'
      },
      how_it_works: {
        title: '한 문장으로, 모든 인사이트를.',
        step1_title: '빠른 기록',
        step1_desc: '말하거나 입력하기만 하세요. "연봉 인상 요청해서 20% 올랐다." 10초면 끝.',
        step2_title: 'AI 분석',
        step2_desc: 'AI가 추출합니다: 계기, 감정, 행동, 결과. 점수: +8.',
        step3_title: '시각화된 성장',
        step3_desc: '당신의 "라이프 밸런스"가 업데이트됩니다. 좋은 날은 초록 캔들, 나쁜 날은 빨간 캔들.'
      },
      features: {
        title: '단순한 기록이 아닌, 삶의 분석.',
        subtitle: '프라이버시 최우선 인텔리전스.',
        f1_title: '차트로 보는 인생',
        f1_desc: '기분과 행동 트렌드를 주식 차트처럼 확인하세요. 몰랐던 주기를 발견할 수 있습니다.',
        f2_title: 'AI 데일리 인사이트',
        f2_desc: '일간, 주간 리포트로 당신의 심리 상태를 파악하세요. 라이프 스코어 0-100으로 상태를 수치화.',
        f3_title: '10초 빠른 기록',
        f3_desc: '음성이든 텍스트든. AI가 제목, 태그, 점수를 자동으로 채워줍니다. 템플릿도 부담도 없이.',
        f4_title: '스마트 태그',
        f4_desc: '태그 자동 추출 (업무, 수면, 사교). 차트를 필터링해서 어떤 것이 가장 영향을 주는지 확인하세요.'
      },
      visual: {
        title: '당신의 라이프 트렌드',
        subtitle: '다른 사람은 기록을 쓰고, 당신은 트렌드를 봅니다.',
        labels: {
          workout: '운동: +6%',
          meeting: '월요 회의: 하락',
          streak: '3일 연속 상승: 신고가'
        }
      },
      stories: {
        title: 'Trace로 발견한 것들',
        s1_role: '프로덕트 매니저, 28세',
        s1_quote: '"주간 회의 후에 항상 점수가 떨어진다는 걸 깨달았어요. 회의 자체가 아니라 리듬이 깨지는 게 문제였죠. 지금은 30분 버퍼를 두고 있고, 금요일 밸런스가 12% 올랐습니다."',
        s2_role: '디자이너, 25세',
        s2_quote: '"K선 차트로 달리기의 가치를 처음 \'눈으로\' 확인했어요. 달리는 그 날은 행복하지 않을 수 있지만, 다음 날 시가는 항상 더 높거든요."',
        s3_role: '프리랜서, 32세',
        s3_quote: '"예전에는 일기를 일주일도 못 썼어요. Trace는 10초면 됩니다. 3개월 만에 라이프 스코어가 52에서 78로 올랐어요."'
      },
      pricing: {
        title: '무료로 시작하고, 준비되면 업그레이드.',
        free: '무료',
        pro: 'Pro',
        p_daily: '하루 3건',
        p_history: '최근 7일',
        p_report: '-',
        p_tags: '-',
        p_chart: '기본',
        p_daily_pro: '무제한',
        p_history_pro: '전체 기록',
        p_report_pro: '일간 + 주간 리포트',
        p_tags_pro: '전체 관리',
        p_chart_pro: '전체 스케일 + 필터',
        price_free: '무료',
        price_pro: '$4.99/월',
        cta_free: '무료 다운로드',
        cta_pro: 'Pro 체험 시작',
        guarantee: '언제든 해지 가능 · 7일 무료 체험'
      },
      footer: {
        title: '당신의 인생은 보여질 가치가 있습니다.',
        subtitle: 'Trace를 무료로 다운로드하고 오늘부터 시작하세요.',
        product: '제품',
        support: '지원',
        legal: '법적 고지',
        social: '소셜',
        links: {
          features: '기능',
          pricing: '가격',
          updates: '업데이트',
          help: '고객센터',
          contact: '문의',
          privacy: '개인정보 처리방침',
          terms: '이용약관',
          twitter: 'Twitter',
          github: 'GitHub'
        },
        copyright: '© 2026 Trace. All rights reserved.'
      },
      demo: {
          title: '구조화된 기억',
          subtitle: '생각을 데이터로 변환.',
          viz_title: '시각화된 성장',
          viz_subtitle: '시간에 따른 감정 흐름.',
          entry: {
            rawText: "오늘 프로젝트 출시가 지연되어 고객 불만이 접수됨. 큰 스트레스를 받아 아래층에서 담배를 피우며 진정함.",
            title: "프로젝트 지연 위기",
            type: "업무",
            time: "14:30",
            trigger: "고객 불만 / 지연",
            emotion: "불안 / 스트레스",
            action: "흡연 휴식 / 일시 중지",
            result: "감정 일시적 안정",
            tags: ["업무", "스트레스", "고객"],
            suggestion: "남은 작업을 시간 단위로 쪼개고 고객의 기대치를 능동적으로 조율해보세요."
          },
          labels: {
            trigger: '트리거',
            emotion: '감정',
            insight: '인사이트'
          },
          kline: {
            event: '이벤트: 스트레스',
            patterns: '패턴 발견',
            syncing: '타임라인 동기화 중...'
          }
      },
      modals: {
          privacy_title: '개인정보 처리방침',
          privacy_content: 'Trace는 당신의 생각이 온전히 당신의 것이라고 믿습니다.',
          terms_title: '이용 약관',
          terms_content: 'Trace를 사용함으로써 개인적인 자기 성찰을 위해 앱을 사용하는 데 동의하는 것입니다.',
          close: '닫기'
      }
  },
  de: {
      nav: { features: 'Funktionen', privacy: 'Datenschutz', terms: 'AGB', download: 'Laden' },
      hero: {
          badge: 'KI-gestützte Lebensanalyse',
          title1: 'Erkenne, wie du',
          title2: 'wurdest, wer du bist.',
          subtitle: 'Das KI-gestützte Journal, das die Punkte zwischen täglichen Momenten und deinem Lebensweg verbindet.',
          cta_primary: 'Im App Store laden',
          cta_secondary: 'Demo ansehen',
          available: 'Erfordert iOS 17.0+'
      },
      pain_points: {
        title: 'Kennst du das Gefühl?',
        card1_title: 'Beschäftigt, aber verschwommen',
        card1_desc: 'Die Tage fliegen vorbei, aber du erinnerst dich nicht, was dich glücklich oder traurig gemacht hat. Das Leben fühlt sich an wie ein einziger Nebel.',
        card2_title: 'Im Kreislauf gefangen',
        card2_desc: 'Du weißt, du solltest etwas ändern, aber nicht, wo du anfangen sollst. Keine Daten zeigen dir, was wirklich funktioniert.',
        card3_title: 'Tagebuch ist zu schwer',
        card3_desc: 'Klassische Tagebücher sind zu aufwendig. Du brauchst nicht mehr Worte, sondern mehr Erkenntnisse.',
        transition: 'Trace ist nicht nur ein weiteres Tagebuch. Es ist ein Werkzeug, um dich selbst zu sehen.'
      },
      how_it_works: {
        title: 'Ein Satz. Volle Erkenntnis.',
        step1_title: 'Schnell erfassen',
        step1_desc: 'Einfach sprechen oder tippen. „Gehaltserhöhung verhandelt, 20% bekommen." In 10 Sekunden erledigt.',
        step2_title: 'KI-Analyse',
        step2_desc: 'Die KI extrahiert: Auslöser, Emotion, Handlung, Ergebnis. Bewertung: +8.',
        step3_title: 'Visuelles Wachstum',
        step3_desc: 'Dein „Lebensbalance"-Chart wird aktualisiert. Gute Tage sind grüne Kerzen, schlechte Tage sind rote.'
      },
      features: {
        title: 'Nicht nur Tagebuch. Lebensanalyse.',
        subtitle: 'Datenschutz-orientierte Intelligenz.',
        f1_title: 'Das Leben als Chart',
        f1_desc: 'Sieh deine Stimmungs- und Verhaltenstrends wie ein Aktienchart. Entdecke Zyklen, die du nie bemerkt hast.',
        f2_title: 'KI-Tageseinblicke',
        f2_desc: 'Tägliche und wöchentliche Berichte über deinen mentalen Zustand. Life Score 0-100 quantifiziert deinen Status.',
        f3_title: '10s Schnellerfassung',
        f3_desc: 'Sprache oder Text. Die KI füllt Titel, Tags und Bewertungen automatisch aus. Keine Vorlagen, keine Last.',
        f4_title: 'Intelligente Tags',
        f4_desc: 'Automatische Tag-Extraktion (Arbeit, Schlaf, Soziales). Filtere das Chart, um zu sehen, was dich am meisten beeinflusst.'
      },
      visual: {
        title: 'Dein Lebenstrend',
        subtitle: 'Andere schreiben Protokolle. Du siehst Trends.',
        labels: {
          workout: 'Training: +6%',
          meeting: 'Montagsmeeting: Rückgang',
          streak: '3-Tage-Serie: Neues Hoch'
        }
      },
      stories: {
        title: 'Was sie mit Trace entdeckt haben',
        s1_role: 'Produktmanager, 28',
        s1_quote: '„Mir wurde klar, dass mein Score nach Wochenmeetings immer sinkt. Nicht wegen des Meetings, sondern der Unterbrechung. Jetzt plane ich 30 Minuten Puffer ein, und mein Freitagsbalance ist um 12% gestiegen."',
        s2_role: 'Designerin, 25',
        s2_quote: '„Die K-Linie hat mir den Wert des Laufens gezeigt. Beim Laufen bin ich vielleicht nicht glücklich, aber der Eröffnungskurs am nächsten Tag ist immer höher."',
        s3_role: 'Freiberufler, 32',
        s3_quote: '„Früher habe ich das Tagebuch nach einer Woche aufgegeben. Trace braucht 10 Sekunden. Mein Life Score stieg in drei Monaten von 52 auf 78."'
      },
      pricing: {
        title: 'Kostenlos starten. Upgraden, wenn du bereit bist.',
        free: 'Kostenlos',
        pro: 'Pro',
        p_daily: '3 Einträge/Tag',
        p_history: 'Letzte 7 Tage',
        p_report: '-',
        p_tags: '-',
        p_chart: 'Basis',
        p_daily_pro: 'Unbegrenzt',
        p_history_pro: 'Gesamter Verlauf',
        p_report_pro: 'Tages- + Wochenberichte',
        p_tags_pro: 'Vollständige Verwaltung',
        p_chart_pro: 'Volle Skalierung + Filter',
        price_free: 'Kostenlos',
        price_pro: '4,99 $/Monat',
        cta_free: 'Kostenlos laden',
        cta_pro: 'Pro-Testversion starten',
        guarantee: 'Jederzeit kündbar · 7 Tage kostenlos testen'
      },
      footer: {
        title: 'Dein Leben verdient es, gesehen zu werden.',
        subtitle: 'Lade Trace kostenlos herunter und starte noch heute.',
        product: 'Produkt',
        support: 'Support',
        legal: 'Rechtliches',
        social: 'Soziales',
        links: {
          features: 'Funktionen',
          pricing: 'Preise',
          updates: 'Updates',
          help: 'Hilfezentrum',
          contact: 'Kontakt',
          privacy: 'Datenschutzerklärung',
          terms: 'Nutzungsbedingungen',
          twitter: 'Twitter',
          github: 'GitHub'
        },
        copyright: '© 2026 Trace. Alle Rechte vorbehalten.'
      },
      demo: {
          title: 'Strukturierte Erinnerung',
          subtitle: 'Gedanken in Daten verwandeln.',
          viz_title: 'Visualisiertes Wachstum',
          viz_subtitle: 'Emotionale Trends im Zeitverlauf.',
          entry: {
            rawText: "Projektstart heute verzögert, Kunde hat sich beschwert. Fühlte mich super gestresst, ging runter eine rauchen zum Runterkommen.",
            title: "Projektverzögerungs-Krise",
            type: "Arbeit",
            time: "14:30",
            trigger: "Kundenbeschwerde / Verzögerung",
            emotion: "Angst / Stress",
            action: "Raucherpause / Pause",
            result: "Emotional stabilisiert",
            tags: ["Arbeit", "Stress", "Kunde"],
            suggestion: "Versuche, verbleibende Aufgaben in Stundenblöcke zu teilen und Kundenerwartungen aktiv zu managen."
          },
          labels: {
            trigger: 'Auslöser',
            emotion: 'Emotion',
            insight: 'Einsicht'
          },
          kline: {
            event: 'Ereignis: Stress',
            patterns: 'Muster gefunden',
            syncing: 'Synchronisiere Zeitlinie...'
          }
      },
      modals: {
          privacy_title: 'Datenschutzerklärung',
          privacy_content: 'Bei Trace glauben wir, dass Ihre Gedanken Ihnen gehören.',
          terms_title: 'Nutzungsbedingungen',
          terms_content: 'Durch die Nutzung von Trace stimmen Sie zu, die App zur persönlichen Selbstreflexion zu nutzen.',
          close: 'Schließen'
      }
  },
  fr: {
      nav: { features: 'Fonctionnalités', privacy: 'Confidentialité', terms: 'Conditions', download: 'Télécharger' },
      hero: {
          badge: 'Analyse de vie par IA',
          title1: 'Voyez comment',
          title2: 'vous êtes devenu vous.',
          subtitle: 'Le journal alimenté par l\'IA qui relie vos moments quotidiens à la trajectoire de votre vie.',
          cta_primary: 'Télécharger sur l\'App Store',
          cta_secondary: 'Voir la démo',
          available: 'Nécessite iOS 17.0+'
      },
      pain_points: {
        title: 'Vous ressentez cela ?',
        card1_title: 'Occupé mais flou',
        card1_desc: 'Les jours passent, mais vous ne savez plus ce qui vous a rendu heureux ou triste. La vie devient un brouillard.',
        card2_title: 'Bloqué dans la routine',
        card2_desc: 'Vous savez qu\'il faut changer, mais pas par où commencer. Aucune donnée ne montre ce qui fonctionne vraiment.',
        card3_title: 'Le journal intime, c\'est dur',
        card3_desc: 'Les journaux traditionnels sont trop lourds. Vous n\'avez pas besoin de plus de mots, mais de plus de clarté.',
        transition: 'Trace n\'est pas un simple journal. C\'est un outil pour vous voir vous-même.'
      },
      how_it_works: {
        title: 'Une phrase. Une vision complète.',
        step1_title: 'Enregistrement rapide',
        step1_desc: 'Parlez ou tapez. "Demandé une augmentation, obtenu 20%." 10 secondes, c\'est fait.',
        step2_title: 'Analyse IA',
        step2_desc: 'L\'IA extrait : Déclencheur, Émotion, Action, Résultat. Score : +8.',
        step3_title: 'Croissance visuelle',
        step3_desc: 'Votre "Solde de vie" se met à jour. Les bons jours sont des bougies vertes, les mauvais des rouges.'
      },
      features: {
        title: 'Pas juste un journal. Une analyse de vie.',
        subtitle: 'Intelligence axée sur la confidentialité.',
        f1_title: 'La vie en graphique',
        f1_desc: 'Visualisez vos tendances d\'humeur et de comportement comme un graphique boursier. Découvrez des cycles que vous n\'aviez jamais remarqués.',
        f2_title: 'Insights IA quotidiens',
        f2_desc: 'Rapports quotidiens et hebdomadaires sur votre état mental. Life Score de 0 à 100 pour quantifier votre état.',
        f3_title: 'Capture en 10 secondes',
        f3_desc: 'Voix ou texte. L\'IA remplit automatiquement titres, tags et scores. Aucun modèle, aucune contrainte.',
        f4_title: 'Tags intelligents',
        f4_desc: 'Extraction automatique des tags (Travail, Sommeil, Social). Filtrez le graphique pour voir ce qui vous impacte le plus.'
      },
      visual: {
        title: 'Votre tendance de vie',
        subtitle: 'Les autres écrivent des notes. Vous voyez des tendances.',
        labels: {
          workout: 'Sport : +6%',
          meeting: 'Réunion du lundi : Baisse',
          streak: 'Série de 3 jours : Nouveau sommet'
        }
      },
      stories: {
        title: 'Ce qu\'ils ont découvert avec Trace',
        s1_role: 'Chef de produit, 28 ans',
        s1_quote: '« J\'ai réalisé que mon score baissait toujours après les réunions hebdomadaires. Pas à cause de la réunion, mais de la perturbation. Maintenant je garde 30 minutes de tampon, et mon solde du vendredi a augmenté de 12%. »',
        s2_role: 'Designer, 25 ans',
        s2_quote: '« La courbe K m\'a fait \'voir\' la valeur de la course. Je ne suis pas forcément heureux en courant, mais le cours d\'ouverture du lendemain est toujours plus élevé. »',
        s3_role: 'Freelance, 32 ans',
        s3_quote: '« Avant, j\'abandonnais le journal en une semaine. Trace ne prend que 10 secondes. Mon Life Score est passé de 52 à 78 en trois mois. »'
      },
      pricing: {
        title: 'Commencez gratuitement. Passez au niveau supérieur quand vous êtes prêt.',
        free: 'Gratuit',
        pro: 'Pro',
        p_daily: '3 entrées/jour',
        p_history: '7 derniers jours',
        p_report: '-',
        p_tags: '-',
        p_chart: 'Basique',
        p_daily_pro: 'Illimité',
        p_history_pro: 'Tout l\'historique',
        p_report_pro: 'Rapports quotidiens + hebdo',
        p_tags_pro: 'Gestion complète',
        p_chart_pro: 'Échelle complète + Filtres',
        price_free: 'Gratuit',
        price_pro: '4,99 $/mois',
        cta_free: 'Télécharger gratuitement',
        cta_pro: 'Essayer Pro',
        guarantee: 'Annulation à tout moment · Essai gratuit de 7 jours'
      },
      footer: {
        title: 'Votre vie mérite d\'être vue.',
        subtitle: 'Téléchargez Trace gratuitement et commencez dès aujourd\'hui.',
        product: 'Produit',
        support: 'Assistance',
        legal: 'Mentions légales',
        social: 'Réseaux sociaux',
        links: {
          features: 'Fonctionnalités',
          pricing: 'Tarifs',
          updates: 'Mises à jour',
          help: 'Centre d\'aide',
          contact: 'Contact',
          privacy: 'Politique de confidentialité',
          terms: 'Conditions d\'utilisation',
          twitter: 'Twitter',
          github: 'GitHub'
        },
        copyright: '© 2026 Trace. Tous droits réservés.'
      },
      demo: {
          title: 'Mémoire Structurée',
          subtitle: 'Transformer les pensées en données.',
          viz_title: 'Croissance Visualisée',
          viz_subtitle: 'Tendances émotionnelles.',
          entry: {
            rawText: "Lancement du projet retardé aujourd'hui, le client s'est plaint. Je me sentais super stressé, je suis descendu fumer pour me calmer.",
            title: "Crise de retard de projet",
            type: "Travail",
            time: "14:30",
            trigger: "Plainte client / Retard",
            emotion: "Anxiété / Stress",
            action: "Pause cigarette / Pause",
            result: "Émotionnellement stabilisé",
            tags: ["Travail", "Stress", "Client"],
            suggestion: "Essayez de diviser les tâches restantes en blocs d'une heure et de synchroniser proactivement les attentes du client."
          },
          labels: {
            trigger: 'Déclencheur',
            emotion: 'Émotion',
            insight: 'Insight'
          },
          kline: {
            event: 'Événement: Stress',
            patterns: 'Modèles trouvés',
            syncing: 'Synchronisation...'
          }
      },
      modals: {
          privacy_title: 'Politique de confidentialité',
          privacy_content: 'Chez Trace, nous croyons que vos pensées vous appartiennent.',
          terms_title: 'Conditions d\'utilisation',
          terms_content: 'En utilisant Trace, vous acceptez d\'utiliser l\'application pour une réflexion personnelle.',
          close: 'Fermer'
      }
  },
  es: {
      nav: { features: 'Características', privacy: 'Privacidad', terms: 'Términos', download: 'Descargar' },
      hero: {
          badge: 'Analítica de vida con IA',
          title1: 'Mira cómo te',
          title2: 'convertiste en ti.',
          subtitle: 'El diario con IA que conecta los puntos entre tus momentos diarios y tu trayectoria de vida.',
          cta_primary: 'Conseguir en App Store',
          cta_secondary: 'Ver Demo',
          available: 'Requiere iOS 17.0+'
      },
      pain_points: {
        title: '¿Te sientes así?',
        card1_title: 'Ocupado pero borroso',
        card1_desc: 'Los días pasan volando, pero no recuerdas qué te hizo feliz o triste. La vida se siente como algo difuso.',
        card2_title: 'Atrapado en bucles',
        card2_desc: 'Sabes que deberías cambiar, pero no sabes por dónde empezar. No hay datos que muestren qué funciona realmente.',
        card3_title: 'El diario es difícil',
        card3_desc: 'Los diarios tradicionales son demasiado pesados. No necesitas más palabras, necesitas más claridad.',
        transition: 'Trace no es solo otro diario. Es una herramienta para "verte a ti mismo".'
      },
      how_it_works: {
        title: 'Una frase. Toda la perspectiva.',
        step1_title: 'Registro rápido',
        step1_desc: 'Solo habla o escribe. "Pedí un aumento, conseguí un 20%." 10 segundos y listo.',
        step2_title: 'Análisis con IA',
        step2_desc: 'La IA extrae: Detonante, Emoción, Acción, Resultado. Puntuación: +8.',
        step3_title: 'Crecimiento visual',
        step3_desc: 'Tu "Balance de Vida" se actualiza. Los buenos días son velas verdes, los malos son rojas.'
      },
      features: {
        title: 'No solo un diario. Analítica de vida.',
        subtitle: 'Inteligencia con privacidad ante todo.',
        f1_title: 'La vida como gráfico',
        f1_desc: 'Visualiza tus tendencias de ánimo y comportamiento como un gráfico bursátil. Descubre ciclos que nunca habías notado.',
        f2_title: 'Insights diarios con IA',
        f2_desc: 'Informes diarios y semanales sobre tu estado mental. Life Score de 0 a 100 para cuantificar tu estado.',
        f3_title: 'Captura en 10 segundos',
        f3_desc: 'Voz o texto. La IA completa títulos, etiquetas y puntuaciones automáticamente. Sin plantillas, sin carga.',
        f4_title: 'Etiquetas inteligentes',
        f4_desc: 'Extracción automática de etiquetas (Trabajo, Sueño, Social). Filtra el gráfico para ver qué te impacta más.'
      },
      visual: {
        title: 'Tu tendencia de vida',
        subtitle: 'Otros escriben registros. Tú ves tendencias.',
        labels: {
          workout: 'Ejercicio: +6%',
          meeting: 'Reunión del lunes: Baja',
          streak: 'Racha de 3 días: Nuevo máximo'
        }
      },
      stories: {
        title: 'Lo que descubrieron con Trace',
        s1_role: 'Product Manager, 28 años',
        s1_quote: '"Me di cuenta de que mi puntuación siempre baja después de las reuniones semanales. No por la reunión, sino por la interrupción. Ahora dejo 30 minutos de margen, y mi balance del viernes subió un 12%."',
        s2_role: 'Diseñadora, 25 años',
        s2_quote: '"La línea K me hizo \'ver\' el valor de correr. Puede que no me sienta feliz corriendo, pero el precio de apertura del día siguiente siempre es más alto."',
        s3_role: 'Freelancer, 32 años',
        s3_quote: '"Antes dejaba el diario en una semana. Trace toma 10 segundos. Mi Life Score pasó de 52 a 78 en tres meses."'
      },
      pricing: {
        title: 'Empieza gratis. Mejora cuando estés listo.',
        free: 'Gratis',
        pro: 'Pro',
        p_daily: '3 entradas/día',
        p_history: 'Últimos 7 días',
        p_report: '-',
        p_tags: '-',
        p_chart: 'Básico',
        p_daily_pro: 'Ilimitado',
        p_history_pro: 'Todo el historial',
        p_report_pro: 'Informes diarios + semanales',
        p_tags_pro: 'Gestión completa',
        p_chart_pro: 'Escala completa + Filtros',
        price_free: 'Gratis',
        price_pro: '$4,99/mes',
        cta_free: 'Descargar gratis',
        cta_pro: 'Iniciar prueba Pro',
        guarantee: 'Cancela cuando quieras · 7 días de prueba gratis'
      },
      footer: {
        title: 'Tu vida merece ser vista.',
        subtitle: 'Descarga Trace gratis y comienza hoy.',
        product: 'Producto',
        support: 'Soporte',
        legal: 'Legal',
        social: 'Redes sociales',
        links: {
          features: 'Características',
          pricing: 'Precios',
          updates: 'Actualizaciones',
          help: 'Centro de ayuda',
          contact: 'Contacto',
          privacy: 'Política de privacidad',
          terms: 'Términos de servicio',
          twitter: 'Twitter',
          github: 'GitHub'
        },
        copyright: '© 2026 Trace. Todos los derechos reservados.'
      },
      demo: {
          title: 'Memoria Estructurada',
          subtitle: 'Transformer las pensamientos en datos.',
          viz_title: 'Crecimiento Visualizado',
          viz_subtitle: 'Tendencias emocionales.',
          entry: {
            rawText: "Lanzamiento del proyecto retrasado hoy, cliente se quejó. Me sentí muy estresado, bajé a fumar para calmarme.",
            title: "Crisis de retraso del proyecto",
            type: "Trabajo",
            time: "14:30",
            trigger: "Queja del cliente / Retraso",
            emotion: "Ansiedad / Estrés",
            action: "Pausa para fumar / Pausa",
            result: "Emocionalmente estabilizado",
            tags: ["Trabajo", "Estrés", "Cliente"],
            suggestion: "Intenta dividir las tareas restantes en bloques de una hora y sincronizar proactivamente las expectativas del cliente."
          },
          labels: {
            trigger: 'Desencadenante',
            emotion: 'Emoción',
            insight: 'Insight'
          },
          kline: {
            event: 'Evento: Estrés',
            patterns: 'Patrones encontrados',
            syncing: 'Sincronizando...'
          }
      },
      modals: {
          privacy_title: 'Política de Privacidad',
          privacy_content: 'En Trace, creemos que tus pensamientos son tuyos.',
          terms_title: 'Términos de Servicio',
          terms_content: 'Al usar Trace, aceptas usar la aplicación para la autorreflexión personal.',
          close: 'Cerrar'
      }
  }
};
