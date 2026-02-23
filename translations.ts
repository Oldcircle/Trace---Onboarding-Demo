import { Language } from './types';

export const translations: Record<Language, any> = {
  en: {
    nav: { features: 'Features', privacy: 'Privacy', terms: 'Terms', download: 'Download' },
    hero: {
      badge: 'Editors Choice · Productivity',
      title1: 'See how you',
      title2: 'became you.',
      subtitle: 'The AI-powered journal that connects the dots between your daily moments and your life\'s trajectory.',
      cta_primary: 'Get on App Store',
      cta_secondary: 'Watch Film',
      available: 'Requires iOS 17.0+'
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
    features: {
      title: 'An OS for your mind.',
      subtitle: 'Privacy-first intelligence.',
      f1_title: 'Frictionless Input',
      f1_desc: 'Just speak. Our NLP engine automatically tags, categorizes, and scores your entries.',
      f2_title: 'Privacy First',
      f2_desc: 'Your thoughts are yours. Local processing. Zero data sales. End-to-end encryption.',
      f2_link: 'Read Policy',
      f3_title: 'Deep Insights',
      f3_desc: 'Weekly psychological analysis.',
      f4_title: 'Contextual Awareness',
      f4_desc: 'Trace connects sleep, work, and relationships to find hidden patterns.',
    },
    cta: {
      title: 'Start tracing today.',
      subtitle: 'Join thousands of users discovering their patterns.',
      button: 'Download for iOS'
    },
    footer: {
      desc: 'Empowering self-discovery through structured memory and AI.',
      rights: 'All rights reserved.'
    },
    modals: {
      privacy_title: 'Privacy Policy',
      privacy_content: 'At Trace, we believe your thoughts are your own. All data is stored locally on your device and synced via your personal iCloud. We do not have access to your entries, and we do not sell your data to third parties. Your privacy is our business model.',
      terms_title: 'Terms of Service',
      terms_content: 'By using Trace, you agree to use the app for personal self-reflection. We provide tools for analysis but are not a substitute for professional psychological help. Subscriptions are billed to your Apple ID and auto-renew unless canceled 24 hours before the end of the period.',
      close: 'Close'
    }
  },
  zh: {
    nav: { features: '功能', privacy: '隐私', terms: '条款', download: '下载' },
    hero: {
      badge: '编辑精选 · 效率工具',
      title1: '看见你的',
      title2: '成长轨迹。',
      subtitle: '一款 AI 驱动的日记应用，将你日常的点滴连接成生命的轨迹。',
      cta_primary: 'App Store 下载',
      cta_secondary: '观看演示',
      available: '需要 iOS 17.0 或更高版本'
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
    features: {
      title: '大脑的操作系统。',
      subtitle: '隐私至上的智能体验。',
      f1_title: '无感输入',
      f1_desc: '只需开口。我们的自然语言引擎会自动打标签、分类并进行情绪评分。',
      f2_title: '隐私优先',
      f2_desc: '你的想法只属于你。本地处理，绝不出售数据，端到端加密。',
      f2_link: '隐私政策',
      f3_title: '深度洞察',
      f3_desc: '每周心理状态分析报告。',
      f4_title: '情境感知',
      f4_desc: 'Trace 关联睡眠、工作和人际关系，发现生活中隐藏的模式。',
    },
    cta: {
      title: '即刻开始记录。',
      subtitle: '加入数万用户，发现生活中的隐秘模式。',
      button: '下载 iOS 版本'
    },
    footer: {
      desc: '通过结构化记忆和人工智能赋能自我发现。',
      rights: '版权所有。'
    },
    modals: {
      privacy_title: '隐私政策',
      privacy_content: '在 Trace，我们要确保你的想法只属于你自己。所有数据均本地存储在您的设备上，并通过您的个人 iCloud 进行同步。我们无法访问您的日记条目，也不会将您的数据出售给第三方。保护您的隐私是我们商业模式的核心。',
      terms_title: '服务条款',
      terms_content: '使用 Trace 即表示您同意将本应用用于个人反思。我们提供分析工具，但不能替代专业的心理咨询帮助。订阅费用将从您的 Apple ID 扣除，除非在当前周期结束前 24 小时取消，否则将自动续订。',
      close: '关闭'
    }
  },
  jp: {
    nav: { features: '機能', privacy: 'プライバシー', terms: '利用規約', download: 'ダウンロード' },
    hero: {
      badge: 'エディターのおすすめ',
      title1: 'あなたがあなたに',
      title2: 'なるまでの軌跡。',
      subtitle: '日々の瞬間と人生の軌跡を結ぶ、AI搭載のジャーナルアプリ。',
      cta_primary: 'App Storeで入手',
      cta_secondary: 'デモを見る',
      available: 'iOS 17.0以降が必要です'
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
    features: {
      title: '思考のためのOS。',
      subtitle: 'プライバシー重視のインテリジェンス。',
      f1_title: 'スムーズな入力',
      f1_desc: '話すだけ。AIが自動的にタグ付け、分類、スコアリングを行います。',
      f2_title: 'プライバシー第一',
      f2_desc: 'あなたの思考はあなたのもの。ローカル処理、データ販売なし。',
      f2_link: 'ポリシーを読む',
      f3_title: '深い洞察',
      f3_desc: 'メンタルステートの週間レポート。',
      f4_title: '文脈認識',
      f4_desc: '睡眠、仕事、人間関係をリンクさせ、隠れたパターンを発見します。',
    },
    cta: {
      title: '今日から始めよう。',
      subtitle: '人生のパターンを発見する旅へ。',
      button: 'iOS版をダウンロード'
    },
    footer: {
      desc: '構造化された記憶とAIを通じて自己発見を支援します。',
      rights: 'All rights reserved.'
    },
    modals: {
      privacy_title: 'プライバシーポリシー',
      privacy_content: 'Traceでは、あなたの思考はあなただけのものだと信じています。すべてのデータはデバイスにローカル保存され、個人のiCloud経由で同期されます。私たちはあなたのエントリーにアクセスすることはなく、第三者にデータを販売することもありません。あなたのプライバシーこそが、私たちのビジネスモデルです。',
      terms_title: '利用規約',
      terms_content: 'Traceを使用することで、自己反省のためにアプリを使用することに同意したものとみなされます。分析ツールを提供しますが、専門的な心理的支援の代わりにはなりません。サブスクリプションはApple IDに請求され、期間終了の24時間前にキャンセルされない限り自動更新されます。',
      close: '閉じる'
    }
  },
  ko: {
    nav: { features: '기능', privacy: '개인정보', terms: '이용약관', download: '다운로드' },
    hero: {
      badge: '에디터 추천',
      title1: '당신이 당신이 된',
      title2: '과정을 보다.',
      subtitle: '일상의 순간과 인생의 궤적을 연결하는 AI 기반 저널.',
      cta_primary: 'App Store에서 받기',
      cta_secondary: '데모 보기',
      available: 'iOS 17.0 이상 필요'
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
    features: {
      title: '마음을 위한 OS.',
      subtitle: '프라이버시 중심 지능.',
      f1_title: '매끄러운 입력',
      f1_desc: '말만 하세요. NLP 엔진이 자동으로 태그, 분류 및 점수를 매깁니다.',
      f2_title: '프라이버시 우선',
      f2_desc: '당신의 생각은 당신의 것. 로컬 처리, 데이터 판매 없음.',
      f2_link: '정책 읽기',
      f3_title: '깊은 통찰',
      f3_desc: '정신 상태에 대한 주간 보고서.',
      f4_title: '맥락 인식',
      f4_desc: '수면, 업무, 관계를 연결하여 숨겨진 패턴을 찾습니다.',
    },
    cta: {
      title: '오늘 기록을 시작하세요.',
      subtitle: '수천 명의 사용자와 함께 삶의 패턴을 발견하세요.',
      button: 'iOS용 다운로드'
    },
    footer: {
      desc: '구조화된 기억과 AI를 통한 자아 발견.',
      rights: 'All rights reserved.'
    },
    modals: {
      privacy_title: '개인정보 처리방침',
      privacy_content: 'Trace는 당신의 생각이 온전히 당신의 것이라고 믿습니다. 모든 데이터는 기기에 로컬로 저장되며 개인 iCloud를 통해 동기화됩니다. 우리는 당신의 기록에 접근할 수 없으며, 제3자에게 데이터를 판매하지 않습니다. 당신의 프라이버시가 우리의 비즈니스 모델입니다.',
      terms_title: '이용 약관',
      terms_content: 'Trace를 사용함으로써 개인적인 자기 성찰을 위해 앱을 사용하는 데 동의하는 것입니다. 우리는 분석 도구를 제공하지만 전문적인 심리 상담을 대체할 수는 없습니다. 구독료는 Apple ID로 청구되며 기간 종료 24시간 전에 취소하지 않으면 자동 갱신됩니다.',
      close: '닫기'
    }
  },
  de: {
    nav: { features: 'Funktionen', privacy: 'Datenschutz', terms: 'AGB', download: 'Laden' },
    hero: {
      badge: 'Empfehlung der Redaktion',
      title1: 'Erkenne, wie du',
      title2: 'wurdest, wer du bist.',
      subtitle: 'Das KI-gestützte Journal, das die Punkte zwischen täglichen Momenten und deinem Lebensweg verbindet.',
      cta_primary: 'Im App Store laden',
      cta_secondary: 'Demo ansehen',
      available: 'Erfordert iOS 17.0+'
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
    features: {
      title: 'Ein OS für deinen Geist.',
      subtitle: 'Privatsphäre an erster Stelle.',
      f1_title: 'Reibungslose Eingabe',
      f1_desc: 'Sprich einfach. Unsere KI taggt, kategorisiert und bewertet deine Einträge automatisch.',
      f2_title: 'Datenschutz',
      f2_desc: 'Deine Gedanken gehören dir. Lokale Verarbeitung. Kein Datenverkauf.',
      f2_link: 'Richtlinie lesen',
      f3_title: 'Tiefe Einblicke',
      f3_desc: 'Wöchentliche Berichte über deinen mentalen Zustand.',
      f4_title: 'Kontextbewusstsein',
      f4_desc: 'Trace verbindet Schlaf, Arbeit und Beziehungen, um Muster zu finden.',
    },
    cta: {
      title: 'Beginne heute.',
      subtitle: 'Entdecke die Muster in deinem Leben.',
      button: 'Für iOS herunterladen'
    },
    footer: {
      desc: 'Selbstentdeckung durch strukturierte Erinnerung und KI.',
      rights: 'Alle Rechte vorbehalten.'
    },
    modals: {
      privacy_title: 'Datenschutzerklärung',
      privacy_content: 'Bei Trace glauben wir, dass Ihre Gedanken Ihnen gehören. Alle Daten werden lokal auf Ihrem Gerät gespeichert und über Ihre persönliche iCloud synchronisiert. Wir haben keinen Zugriff auf Ihre Einträge und verkaufen Ihre Daten nicht an Dritte. Ihre Privatsphäre ist unser Geschäftsmodell.',
      terms_title: 'Nutzungsbedingungen',
      terms_content: 'Durch die Nutzung von Trace stimmen Sie zu, die App zur persönlichen Selbstreflexion zu nutzen. Wir bieten Analysetools, sind aber kein Ersatz für professionelle psychologische Hilfe. Abonnements werden über Ihre Apple-ID abgerechnet und verlängern sich automatisch, sofern sie nicht 24 Stunden vor Ablauf gekündigt werden.',
      close: 'Schließen'
    }
  },
  fr: {
    nav: { features: 'Fonctionnalités', privacy: 'Confidentialité', terms: 'Conditions', download: 'Télécharger' },
    hero: {
      badge: 'Choix de l\'équipe',
      title1: 'Voyez comment',
      title2: 'vous êtes devenu vous.',
      subtitle: 'Le journal alimenté par l\'IA qui relie vos moments quotidiens à la trajectoire de votre vie.',
      cta_primary: 'Télécharger sur l\'App Store',
      cta_secondary: 'Voir la démo',
      available: 'Nécessite iOS 17.0+'
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
    features: {
      title: 'Un OS pour votre esprit.',
      subtitle: 'Intelligence privée.',
      f1_title: 'Saisie Fluide',
      f1_desc: 'Parlez simplement. Notre moteur NLP étiquette et classe automatiquement.',
      f2_title: 'Confidentialité',
      f2_desc: 'Vos pensées sont à vous. Traitement local. Aucune vente de données.',
      f2_link: 'Lire la politique',
      f3_title: 'Analyses Profondes',
      f3_desc: 'Rapports hebdomadaires sur votre état mental.',
      f4_title: 'Conscience Contextuelle',
      f4_desc: 'Trace relie le sommeil, le travail et les relations pour trouver des modèles.',
    },
    cta: {
      title: 'Commencez aujourd\'hui.',
      subtitle: 'Rejoignez ceux qui découvrent leurs propres modèles.',
      button: 'Télécharger pour iOS'
    },
    footer: {
      desc: 'La découverte de soi par la mémoire structurée.',
      rights: 'Tous droits réservés.'
    },
    modals: {
      privacy_title: 'Politique de confidentialité',
      privacy_content: 'Chez Trace, nous croyons que vos pensées vous appartiennent. Toutes les données sont stockées localement sur votre appareil et synchronisées via votre iCloud personnel. Nous n\'avons pas accès à vos entrées et ne vendons pas vos données à des tiers. Votre vie privée est notre modèle économique.',
      terms_title: 'Conditions d\'utilisation',
      terms_content: 'En utilisant Trace, vous acceptez d\'utiliser l\'application pour une réflexion personnelle. Nous fournissons des outils d\'analyse mais ne remplaçons pas une aide psychologique professionnelle. Les abonnements sont facturés sur votre identifiant Apple et se renouvellent automatiquement sauf annulation 24 heures avant la fin de la période.',
      close: 'Fermer'
    }
  },
  es: {
    nav: { features: 'Características', privacy: 'Privacidad', terms: 'Términos', download: 'Descargar' },
    hero: {
      badge: 'Selección del Editor',
      title1: 'Mira cómo te',
      title2: 'convertiste en ti.',
      subtitle: 'El diario con IA que conecta los puntos entre tus momentos diarios y tu trayectoria de vida.',
      cta_primary: 'Conseguir en App Store',
      cta_secondary: 'Ver Demo',
      available: 'Requiere iOS 17.0+'
    },
    demo: {
      title: 'Memoria Estructurada',
      subtitle: 'Convirtiendo pensamientos en datos.',
      viz_title: 'Crecimiento Visualizado',
      viz_subtitle: 'Tendencias emocionales.',
      entry: {
        rawText: "El lanzamiento del proyecto se retrasó hoy, el cliente se quejó. Me sentí súper estresado, bajé a fumar para calmarme.",
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
        trigger: 'Detonante',
        emotion: 'Emoción',
        insight: 'Insight'
      },
      kline: {
        event: 'Evento: Estrés',
        patterns: 'Patrones encontrados',
        syncing: 'Sincronizando...'
      }
    },
    features: {
      title: 'Un SO para tu mente.',
      subtitle: 'Inteligencia privada.',
      f1_title: 'Entrada sin Fricción',
      f1_desc: 'Solo habla. Nuestro motor NLP etiqueta, categoriza y puntúa automáticamente.',
      f2_title: 'Privacidad Primero',
      f2_desc: 'Tus pensamientos son tuyos. Procesamiento local. Sin venta de datos.',
      f2_link: 'Leer política',
      f3_title: 'Información Profunda',
      f3_desc: 'Informes semanales sobre tu estado mental.',
      f4_title: 'Conciencia Contextual',
      f4_desc: 'Trace conecta sueño, trabajo y relaciones para encontrar patrones.',
    },
    cta: {
      title: 'Empieza a rastrear hoy.',
      subtitle: 'Descubre los patrones en tu vida.',
      button: 'Descargar para iOS'
    },
    footer: {
      desc: 'Empoderando el autodescubrimiento a través de la IA.',
      rights: 'Todos los derechos reservados.'
    },
    modals: {
      privacy_title: 'Política de Privacidad',
      privacy_content: 'En Trace, creemos que tus pensamientos son tuyos. Todos los datos se almacenan localmente en tu dispositivo y se sincronizan a través de tu iCloud personal. No tenemos acceso a tus entradas y no vendemos tus datos a terceros. Tu privacidad es nuestro modelo de negocio.',
      terms_title: 'Términos de Servicio',
      terms_content: 'Al usar Trace, aceptas usar la aplicación para la autorreflexión personal. Proporcionamos herramientas de análisis pero no sustituimos la ayuda psicológica profesional. Las suscripciones se facturan a tu ID de Apple y se renuevan automáticamente a menos que se cancelen 24 horas antes del final del período.',
      close: 'Cerrar'
    }
  }
};