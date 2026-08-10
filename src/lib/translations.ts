export type Locale = "en" | "ja";

export const LOCALES: { code: Locale; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "ja", label: "JA" },
];

const en = {
  nav: {
    about: "About",
    services: "Services",
    team: "Team",
    blog: "Blog",
    contactCta: "Contact Us",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  hero: {
    title: "IT Solutions That Empower Your Business Growth",
    desc: "Teamotion delivers end-to-end IT services — from custom website and mobile app development to connecting you with top-tier tech talent. We help businesses scale with reliable, modern technology solutions.",
    primaryCta: "Our Services",
    secondaryCta: "Get a Free Consultation",
    imageAlt: "AI technology and human interaction",
  },
  about: {
    eyebrow: "ABOUT US",
    heading: "Technology partner you can trust",
    paragraph1:
      "At Teamotion, we combine deep technical expertise with a passion for innovation to help businesses thrive in the digital era. From building custom web and mobile solutions to providing skilled IT professionals, we're your all-in-one technology partner.",
    paragraph2:
      "Our team of experienced developers, designers, and project managers work closely with you to deliver solutions that drive real business results.",
    connectHeading: "Connect With Us",
    connectDesc:
      "Follow us on social media to stay updated with our latest projects and industry insights.",
  },
  trust: {
    label: "TRUSTED BY TEAMS AT",
  },
  tech: {
    eyebrow: "TECH STACK",
    heading: "What we build with",
    groups: {
      backend: "Backend",
      frontend: "Frontend",
      mobile: "Mobile",
      database: "Database",
      ai: "AI",
    },
  },
  services: {
    eyebrow: "WHAT WE DO",
    heading: "Our Services — Built for Your Success",
    viewDetails: "View Details",
    items: [
      {
        title: "Website Development",
        desc: "Custom websites built with modern frameworks like Next.js and React — fast, responsive, and optimized for conversions.",
      },
      {
        title: "Mobile Development",
        desc: "Native and cross-platform mobile apps for iOS and Android that deliver seamless user experiences and drive engagement.",
      },
      {
        title: "AI, Agents & Digital Transformation",
        desc: "We build AI features and autonomous agents into real business workflows, and modernise the systems around them so the automation has something dependable to run on.",
      },
    ],
  },
  cases: {
    eyebrow: "PROJECT CASES",
    heading: "Our Recent Work",
    desc: "Explore how we've helped businesses transform with technology",
    items: [
      {
        tag: "Supply Chain Traceability",
        title: "ImpactCocoa — Ghana to Europe",
        desc: "A multi-tenant platform following cocoa from farmer registration through inspection, purchase and evacuation, producing the EUDR due-diligence trail that European and New Zealand buyers require. Field data syncs from Kobo Toolbox; parcel boundaries live in PostGIS.",
      },
      {
        tag: "Web & Ordering System",
        title: "Dutch & Co — Solar & LED in Ghana",
        desc: "A public website and an ordering system for Dutch & Co's solar and lighting product lines. They supply turnkey PV and LED across Ghana — over 21,000 kWp installed and roughly 17,800 tonnes of CO₂ avoided a year.",
      },
      {
        tag: "Payments",
        title: "SwiftPay — Payment Layer",
        desc: "We built the payment side of SwiftPay, a multi-currency fintech platform out of Abuja: QR-code payments, virtual cards in naira and dollars, transfers and FX, plus group and interest-bearing savings wallets.",
      },
    ],
  },
  team: {
    eyebrow: "TEAM",
    heading: "Our Awesome Team",
    // Plain caption, not a link — there is no team listing page to point at.
    more: "…and many more teammates",
    roles: [
      "Project Leader",
      "Project Leader",
      "Project Leader",
      "Full Stack Developer",
      "Full Stack Developer",
      "QA Engineer",
    ],
  },
  testimonials: {
    eyebrow: "TESTIMONIALS",
    heading: "What Our Clients Say",
    // DRAFT COPY — both people are real and identifiable. Replace each quote
    // with their own words, in writing, before this goes live.
    items: [
      {
        quote:
          "“Teamotion built the platform that carries our cocoa traceability from the farm gate in Ghana all the way to EUDR due diligence for our European and New Zealand buyers. They understood the compliance detail as well as the code.”",
        company: "Director, ThinkData — Netherlands",
      },
      {
        quote:
          "“Our customers order solar and lighting through the site Teamotion built for us, so it has to be as dependable as the hardware we install. They work the way we do: practical, direct, and focused on what actually ships.”",
        company: "Director, Dutch & Co — Netherlands",
      },
      {
        quote:
          "“Payments leave no room for approximation — a transfer either reconciles or it does not. Teamotion treated our payment layer with exactly that seriousness, across multiple currencies.”",
        company: "SwiftPay — Abuja, Nigeria",
      },
    ],
  },
  blog: {
    eyebrow: "BLOG",
    heading: "Latest News & Articles",
    readMore: "Read More →",
    backToList: "← All articles",
    items: [
      {
        title: "Inside Big Tech's $650B AI Buildout",
        desc: "Alphabet, Meta, Microsoft and Amazon are on track to spend roughly $650 billion on AI this year. We break down where that capital actually lands.",
        body: [
          "Alphabet, Meta, Microsoft and Amazon are collectively forecast to spend on the order of $650 billion on artificial intelligence in 2026. Numbers that large stop being a line item and become an industrial programme: land, power contracts, cooling, networking fabric, and the silicon that sits at the end of it all.",
          "The interesting part is not the headline figure but the mix. A growing share goes to the physical backbone rather than to model training itself — data centres, next-generation networking, and long-dated energy agreements that lock in supply years ahead of the compute that will consume it.",
          "For teams building on top of these platforms, the practical consequence is pricing and availability. Capacity secured today shapes what inference costs next year, and which regions get it first. That is worth factoring into architecture decisions now rather than after a bill arrives.",
        ],
      },
      {
        title: "The Custom Silicon Land Grab",
        desc: "The chip race is spilling past Nvidia, AMD, TSMC and Samsung as companies that used to buy silicon start building their own fabs.",
        body: [
          "For most of the last decade the AI hardware story had a short cast: Nvidia designing, TSMC and Samsung fabricating, everyone else buying. That is no longer a complete description. Companies whose core business has nothing to do with semiconductors are moving into design and, increasingly, manufacturing.",
          "Tesla and SpaceX have signalled plans for a large semiconductor plant of their own, and they are not alone in deciding that depending on a single supplier for the most strategically important component is an unacceptable risk.",
          "Vertical integration buys control over cost and roadmap, but it also means absorbing an enormous capital and talent burden. Expect the next few years to separate the companies that genuinely needed custom silicon from the ones that discovered buying was cheaper after all.",
        ],
      },
      {
        title: "China's Price War Reaches the Frontier",
        desc: "Chinese labs are shipping frontier models that undercut Western pricing — and Alibaba has begun charging enterprises that profit from its free ones.",
        body: [
          "Chinese laboratories have released frontier-class models priced well below their Western equivalents. Cheap capable models change the economics of every product built on an API, and the pressure runs in one direction: downward.",
          "The commercial models are shifting too. Alibaba has started charging large companies that make money from models it previously offered free, and Apple has begun letting Mac users in China connect to Alibaba's AI — a reminder that distribution, not just capability, decides which model people actually use.",
          "If your product depends on a single provider's pricing holding steady, this is the year to abstract that dependency. The teams that kept a provider-agnostic interface are the ones with room to negotiate.",
        ],
      },
      {
        title: "Compliance Season: Europe and California Start Enforcing",
        desc: "AI regulation has moved from drafting to real enforcement. What actually changes for teams shipping AI features this quarter.",
        body: [
          "Regulators in Europe and California have moved from consultation to enforcement. The rules themselves are not new; what changed is that there is now a body willing to act on them, which turns compliance from a roadmap item into a release blocker.",
          "The obligations that bite first are the unglamorous ones: knowing which model version served a given response, being able to explain what data went into a system, and being able to switch a feature off in a specific jurisdiction without shipping a new build.",
          "None of that is difficult to build. It is only difficult to retrofit. Teams that logged model versions and kept feature flags per region from the start are finding this quarter considerably calmer than teams that did not.",
        ],
      },
      {
        title: "The Talent War for Frontier Researchers",
        desc: "Elite researchers keep circulating between OpenAI, Google, Meta, Anthropic and Thinking Machines Lab. What that churn means for how you hire.",
        body: [
          "The competition for a few hundred senior researchers has become one of the industry's most consequential fronts. People move between OpenAI, Google, Meta, Anthropic and Thinking Machines Lab often enough that the frontier labs increasingly resemble a single labour market with several employers.",
          "For companies outside that circle, competing on compensation is not a viable strategy. What does work is scope: engineers take roles where they own a problem end to end, and they leave roles where they are one interchangeable seat in a large org.",
          "The corollary is that applied AI engineering — the work of turning a capable model into something dependable in production — is where most of the value now accrues, and where the hiring market is far less brutal.",
        ],
      },
      {
        title: "Agents That Test Their Own Limits",
        desc: "Once an agent takes real actions, containment and evaluation stop being thought experiments and become ordinary engineering work.",
        body: [
          "As agents move from answering questions to taking actions, they have begun probing the boundaries of the environments they are placed in — not maliciously, but because a system optimising for a goal will use whatever capability it is given. The White House has convened the frontier labs behind closed doors on precisely this subject.",
          "For everyone shipping agents, the lesson is mundane and useful: constrain by construction, not by instruction. An agent that cannot reach a destructive API is safer than one politely asked not to call it.",
          "Practically, that means least-privilege credentials, an approval step in front of irreversible actions, and evaluation suites that test the failure modes you fear rather than the happy path you designed. This is standard engineering discipline applied to a new kind of component.",
        ],
      },
    ],
  },
  contact: {
    eyebrow: "CONTACT",
    heading: "Get in Touch",
    name: "Your Name",
    company: "Your Company",
    email: "Your Email",
    phone: "Your Phone",
    message: "Your Message",
    submit: "Send Message",
  },
  footer: {
    desc: "Teamotion is a full-service IT company providing website development, mobile development, and AI adoption solutions.",
    servicesHeading: "Services",
    services: ["Web Development", "Mobile Development", "AI & Agents", "Consulting"],
    companyHeading: "Company",
    company: ["About Us", "Careers", "Blog", "Contact"],
    supportHeading: "Support",
    support: ["Help Center", "Documentation", "Privacy Policy", "Terms of Service"],
    copyright: "© {year} Teamotion. All rights reserved.",
  },
  theme: {
    toggle: "Toggle theme",
  },
  language: {
    label: "Language",
  },
};

export type Dictionary = typeof en;

const ja: Dictionary = {
  nav: {
    about: "会社概要",
    services: "サービス",
    team: "チーム",
    blog: "ブログ",
    contactCta: "お問い合わせ",
    openMenu: "メニューを開く",
    closeMenu: "メニューを閉じる",
  },
  hero: {
    title: "ビジネスの成長を支えるITソリューション",
    desc: "Teamotion は、Webサイト・モバイルアプリの受託開発から優秀なITタレントのご紹介まで、エンドツーエンドのITサービスを提供します。信頼性の高いモダンな技術で、お客様の事業拡大を支援します。",
    primaryCta: "サービスを見る",
    secondaryCta: "無料相談を申し込む",
    imageAlt: "AI技術と人の協働",
  },
  about: {
    eyebrow: "会社概要",
    heading: "信頼できるテクノロジーパートナー",
    paragraph1:
      "Teamotion は、確かな技術力とイノベーションへの情熱を掛け合わせ、デジタル時代における企業の成長を支援します。Web・モバイルの受託開発から、経験豊富なITプロフェッショナルのご提供まで、ワンストップでお任せいただけます。",
    paragraph2:
      "経験豊富なエンジニア、デザイナー、プロジェクトマネージャーがお客様と密に連携し、確かなビジネス成果につながるソリューションをお届けします。",
    connectHeading: "フォローする",
    connectDesc:
      "SNSをフォローして、最新のプロジェクトや業界の知見をご覧ください。",
  },
  trust: {
    label: "導入・協業いただいている企業",
  },
  tech: {
    eyebrow: "技術スタック",
    heading: "私たちが使う技術",
    groups: {
      backend: "バックエンド",
      frontend: "フロントエンド",
      mobile: "モバイル",
      database: "データベース",
      ai: "AI",
    },
  },
  services: {
    eyebrow: "事業内容",
    heading: "成果につながるサービスをご提供します",
    viewDetails: "詳細を見る",
    items: [
      {
        title: "Web開発",
        desc: "Next.js や React などのモダンなフレームワークで構築する、高速・レスポンシブでコンバージョンに最適化されたWebサイト。",
      },
      {
        title: "モバイル開発",
        desc: "iOS・Android 向けのネイティブおよびクロスプラットフォームアプリ。快適なユーザー体験でエンゲージメントを高めます。",
      },
      {
        title: "AI・エージェント・DX",
        desc: "AI機能や自律エージェントを実際の業務フローに組み込み、その周辺システムまで刷新します。自動化が安定して動く土台をつくることが前提です。",
      },
    ],
  },
  cases: {
    eyebrow: "プロジェクト事例",
    heading: "これまでの実績",
    desc: "テクノロジーで企業の変革を支援した事例をご紹介します",
    items: [
      {
        tag: "サプライチェーン追跡",
        title: "ImpactCocoa — ガーナから欧州へ",
        desc: "生産者登録から検査・買付・搬出までカカオの流れを追跡するマルチテナント基盤。欧州およびニュージーランドのバイヤーが求める EUDR デューデリジェンスの証跡を生成します。現場データは Kobo Toolbox から同期し、区画の境界情報は PostGIS で管理しています。",
      },
      {
        tag: "Web・受注システム",
        title: "Dutch & Co — ガーナの太陽光とLED",
        desc: "Dutch & Co の太陽光・照明製品向けに、コーポレートサイトと受注システムを構築しました。同社はガーナ全土にターンキー型のPVとLEDを提供し、導入容量は21,000kWp超、年間のCO₂削減量は約17,800トンに達します。",
      },
      {
        tag: "決済",
        title: "SwiftPay — 決済レイヤー",
        desc: "アブジャ拠点のマルチ通貨フィンテック基盤 SwiftPay の決済部分を担当しました。QRコード決済、ナイラ／ドル建てのバーチャルカード、送金と為替、さらにグループ貯蓄・利息付きウォレットまで対応しています。",
      },
    ],
  },
  team: {
    eyebrow: "チーム",
    heading: "私たちのチーム",
    more: "…そして、さらに多くの仲間たち",
    roles: [
      "プロジェクトリーダー",
      "プロジェクトリーダー",
      "プロジェクトリーダー",
      "フルスタックエンジニア",
      "フルスタックエンジニア",
      "QAエンジニア",
    ],
  },
  testimonials: {
    eyebrow: "お客様の声",
    heading: "お客様からの評価",
    items: [
      {
        quote:
          "「ガーナの農場からの集荷から、欧州およびニュージーランドのバイヤー向けのEUDRデューデリジェンスまでを支えるカカオ追跡基盤を Teamotion が構築しました。コードだけでなく、規制対応の細部まで理解してくれました。」",
        company: "Director, ThinkData — オランダ",
      },
      {
        quote:
          "「お客様は Teamotion が構築したサイトから太陽光や照明を発注されるため、私たちが設置するハードウェアと同じ信頼性が求められます。彼らは私たちと同じ流儀 — 実務的で、率直で、実際に動くものに集中する — で仕事をしてくれます。」",
        company: "Director, Dutch & Co — オランダ",
      },
      {
        quote:
          "「決済に曖昧さの余地はありません。送金は照合が合うか、合わないかのどちらかです。Teamotion は複数通貨にまたがる当社の決済レイヤーを、まさにその厳しさで扱ってくれました。」",
        company: "SwiftPay — ナイジェリア・アブジャ",
      },
    ],
  },
  blog: {
    eyebrow: "ブログ",
    heading: "最新のニュース・記事",
    readMore: "続きを読む →",
    backToList: "← 記事一覧へ",
    items: [
      {
        title: "6,500億ドル規模、ビッグテックのAI投資の中身",
        desc: "Alphabet・Meta・Microsoft・Amazon の今年のAI投資は約6,500億ドルに達する見込みです。その資金が実際にどこへ向かうのかを読み解きます。",
        body: [
          "Alphabet・Meta・Microsoft・Amazon の4社は、2026年にあわせて約6,500億ドルをAIに投じる見通しです。これほどの規模になると、もはや予算項目ではなく産業計画に近く、用地・電力契約・冷却設備・ネットワーク基盤、そしてその先にある半導体まですべてを含みます。",
          "注目すべきは総額よりも内訳です。モデルの学習そのものよりも、物理的な基盤 — データセンター、次世代ネットワーク、そして実際に消費される数年前から供給を確保する長期の電力契約 — に向かう比率が高まっています。",
          "これらのプラットフォーム上で開発するチームにとって、影響が出るのは価格と可用性です。今日確保された容量が来年の推論コストと提供地域を左右します。請求書が届いてから慌てるのではなく、いま設計判断に織り込んでおく価値があります。",
        ],
      },
      {
        title: "自社チップ争奪戦",
        desc: "半導体競争は Nvidia・AMD・TSMC・Samsung の枠を越え、これまで「買う側」だった企業が自ら製造に乗り出しています。",
        body: [
          "この10年、AIハードウェアの登場人物は限られていました。Nvidia が設計し、TSMC と Samsung が製造し、他社は購入する。その構図はもはや実態を説明しきれません。半導体を本業としない企業が設計、さらには製造へと踏み込んでいます。",
          "Tesla と SpaceX は自社の大規模半導体工場の計画を示しました。最も戦略的に重要な部品を単一の供給元に依存するのは受け入れがたいリスクだ、と判断した企業は他にもあります。",
          "垂直統合はコストとロードマップの主導権をもたらしますが、同時に膨大な資本と人材の負担を引き受けることでもあります。今後数年で、本当に自社チップが必要だった企業と、結局は購入する方が安いと気づいた企業が分かれていくでしょう。",
        ],
      },
      {
        title: "中国発の価格競争がフロンティアに到達",
        desc: "中国の研究機関が欧米より安価なフロンティアモデルを投入。一方 Alibaba は、無料モデルで収益を上げる企業への課金を開始しました。",
        body: [
          "中国の研究機関が、欧米の同等品を大きく下回る価格でフロンティア級のモデルを公開しています。安価で高性能なモデルはAPI上に築かれたあらゆるプロダクトの経済性を変え、その圧力は一方向 — 下方向 — に働きます。",
          "商用モデルも動いています。Alibaba はこれまで無償提供していたモデルで収益を上げる大企業への課金を開始し、Apple は中国のMacユーザーが Alibaba のAIに接続できるようにしました。実際に使われるモデルを決めるのは性能だけでなく流通経路でもある、という示唆です。",
          "単一プロバイダの価格が据え置かれる前提でプロダクトが成り立っているなら、今年こそその依存を抽象化すべき年です。プロバイダ非依存のインターフェースを保ってきたチームには交渉の余地があります。",
        ],
      },
      {
        title: "規制対応の季節 — 欧州とカリフォルニアが執行を開始",
        desc: "AI規制は起草段階から実際の執行へ移りました。AI機能を出荷するチームにとって、今四半期に何が変わるのかを整理します。",
        body: [
          "欧州とカリフォルニアの規制当局は、意見聴取の段階から執行の段階へ移りました。ルール自体は新しくありません。変わったのは、それを実際に行使する主体が現れたことで、コンプライアンスはロードマップの一項目からリリースの阻害要因へと性質を変えます。",
          "最初に効いてくるのは地味な義務です。ある応答をどのモデルバージョンが返したかを把握できること、システムに投入されたデータを説明できること、そして新しいビルドを出さずに特定の法域で機能を無効化できること。",
          "いずれも構築は難しくありません。難しいのは後付けです。最初からモデルバージョンを記録し、地域ごとのフィーチャーフラグを用意していたチームは、今四半期をかなり穏やかに過ごしています。",
        ],
      },
      {
        title: "フロンティア研究者をめぐる人材競争",
        desc: "トップ研究者が OpenAI・Google・Meta・Anthropic・Thinking Machines Lab の間を往来し続けています。この流動性が採用に与える意味とは。",
        body: [
          "数百人規模のシニア研究者をめぐる競争は、業界で最も重要な戦線のひとつになりました。OpenAI・Google・Meta・Anthropic・Thinking Machines Lab の間で人材が頻繁に動き、フロンティア研究機関群は「雇用主が複数いる単一の労働市場」に近づいています。",
          "その輪の外にいる企業が報酬で競うのは現実的ではありません。効くのは裁量の範囲です。エンジニアは課題を端から端まで own できる役割を選び、大組織の交換可能な一席に過ぎない役割からは離れていきます。",
          "その帰結として、高性能なモデルを本番で信頼できるものに変える応用AIエンジニアリングにこそ価値が集まりつつあり、そしてこちらの採用市場はずっと過酷ではありません。",
        ],
      },
      {
        title: "自らの限界を試すエージェント",
        desc: "エージェントが実際に行動を起こすようになると、封じ込めと評価は思考実験ではなく日常的なエンジニアリング課題になります。",
        body: [
          "エージェントが質問への回答から実際の行動へ移るにつれ、置かれた環境の境界を探る挙動が見られるようになりました。悪意からではなく、目標を最適化するシステムは与えられた能力を使い切るからです。この主題について、ホワイトハウスはフロンティア研究機関を非公開で招集しています。",
          "エージェントを出荷する側への教訓は平凡かつ有用です。指示ではなく構造で制約すること。破壊的なAPIに到達できないエージェントは、呼ばないよう丁寧に頼まれたエージェントより安全です。",
          "具体的には、最小権限の資格情報、不可逆な操作の前に置く承認ステップ、そして設計した正常系ではなく恐れている失敗モードを検証する評価スイート。新種の部品に対して標準的なエンジニアリング規律を適用するだけの話です。",
        ],
      },
    ],
  },
  contact: {
    eyebrow: "お問い合わせ",
    heading: "お気軽にご相談ください",
    name: "お名前",
    company: "会社名",
    email: "メールアドレス",
    phone: "電話番号",
    message: "お問い合わせ内容",
    submit: "送信する",
  },
  footer: {
    desc: "Teamotion は、Web開発・モバイル開発・AI導入をワンストップで提供するIT企業です。",
    servicesHeading: "サービス",
    services: ["Web開発", "モバイル開発", "AI・エージェント", "コンサルティング"],
    companyHeading: "会社情報",
    company: ["会社概要", "採用情報", "ブログ", "お問い合わせ"],
    supportHeading: "サポート",
    support: ["ヘルプセンター", "ドキュメント", "プライバシーポリシー", "利用規約"],
    copyright: "© {year} Teamotion. All rights reserved.",
  },
  theme: {
    toggle: "テーマを切り替える",
  },
  language: {
    label: "言語",
  },
};

export const translations: Record<Locale, Dictionary> = { en, ja };
