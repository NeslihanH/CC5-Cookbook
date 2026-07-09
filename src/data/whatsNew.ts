import type { VersionDiffEntry } from "./types";

// CC5 vs CC4: what genuinely changed, area by area. Kept deliberately short -
// only entries confirmed against official CC5 launch materials are included;
// plausible-sounding CC4 comparisons that weren't independently verified
// were left out rather than guessed at.
export const whatsNewEntries: VersionDiffEntry[] = [
  {
    id: "diff-hd-facial-profile",
    category: "whatsNew",
    area: {
      en: "Facial Rig Detail",
      tr: "Yüz Rig Detayı",
      zh: "面部 Rig 精细度",
      es: "Detalle del rig facial",
      de: "Detailgrad des Gesichtsrigs",
    },
    cc4: {
      en: "Facial expressions were driven by the standard Facial Profile's 160 blendshape sliders.",
      tr: "Yüz ifadeleri, standart Facial Profile'ın 160 blendshape kaydırıcısıyla yönetiliyordu.",
      zh: "面部表情由标准 Facial Profile 的 160 个 blendshape 滑块驱动。",
      es: "Las expresiones faciales se controlaban con los 160 deslizadores de blendshape del Facial Profile estándar.",
      de: "Gesichtsausdrücke wurden über die 160 Blendshape-Regler des Standard-Facial-Profile gesteuert.",
    },
    cc5: {
      en: "CC5 adds an HD Facial Profile tier that expands the slider count to 390 (262 Facial Expression, 128 Corrective Expression, plus non-linear sliders), for finer micro-expression control and cleaner results from motion-captured performances.",
      tr: "CC5, kaydırıcı sayısını 390'a çıkaran (262 Facial Expression, 128 Corrective Expression, artı doğrusal olmayan kaydırıcılar) bir HD Facial Profile katmanı ekler; bu da daha ince mikro ifade kontrolü ve mocap ile yakalanan performanslardan daha temiz sonuç sağlar.",
      zh: "CC5 新增了 HD Facial Profile 层级，将滑块数量扩展到 390 个（262 个 Facial Expression、128 个 Corrective Expression，外加非线性滑块），带来更精细的微表情控制，以及更干净的动作捕捉表演效果。",
      es: "CC5 añade un nivel HD Facial Profile que amplía el número de deslizadores a 390 (262 de Facial Expression, 128 de Corrective Expression, más deslizadores no lineales), para un control más fino de las microexpresiones y resultados más limpios en actuaciones capturadas por mocap.",
      de: "CC5 fügt eine HD-Facial-Profile-Stufe hinzu, die die Reglerzahl auf 390 erweitert (262 Facial Expression, 128 Corrective Expression, plus nichtlineare Regler), für feinere Mikroausdruckskontrolle und sauberere Ergebnisse bei Mocap-Performances.",
    },
    official: true,
  },
  {
    id: "diff-metahuman-rig",
    category: "whatsNew",
    area: {
      en: "MetaHuman Compatibility",
      tr: "MetaHuman Uyumluluğu",
      zh: "MetaHuman 兼容性",
      es: "Compatibilidad con MetaHuman",
      de: "MetaHuman-Kompatibilität",
    },
    cc4: {
      en: "Moving animation or facial performance between a CC4 character and Epic's MetaHuman required a custom retargeting setup, since the two used different skeletons and facial rigs.",
      tr: "Bir CC4 karakteri ile Epic'in MetaHuman'ı arasında animasyon veya yüz performansı taşımak, ikisi farklı iskelet ve yüz rig'i kullandığından özel bir retargeting kurulumu gerektiriyordu.",
      zh: "在 CC4 角色和 Epic 的 MetaHuman 之间迁移动画或面部表演，需要一套自定义的 retargeting 设置，因为两者使用不同的骨骼和面部 rig。",
      es: "Trasladar animación o actuación facial entre un personaje de CC4 y el MetaHuman de Epic requería una configuración de retargeting personalizada, ya que ambos usaban esqueletos y rigs faciales distintos.",
      de: "Animation oder Gesichtsperformance zwischen einem CC4-Charakter und Epics MetaHuman zu übertragen erforderte ein individuelles Retargeting-Setup, da beide unterschiedliche Skelette und Gesichtsrigs verwendeten.",
    },
    cc5: {
      en: "CC5 characters ship with a MetaHuman-compatible skeleton and facial control structure, so mocap clips, animation and facial performances move between CC5 and MetaHuman without an intermediate retargeting step.",
      tr: "CC5 karakterleri MetaHuman-uyumlu bir iskelet ve yüz kontrol yapısıyla gelir; bu sayede mocap klipleri, animasyon ve yüz performansları CC5 ile MetaHuman arasında aradaki retargeting adımına gerek kalmadan taşınır.",
      zh: "CC5 角色自带与 MetaHuman 兼容的骨骼和面部控制结构，因此 mocap 片段、动画和面部表演可以在 CC5 与 MetaHuman 之间直接迁移，无需中间的 retargeting 步骤。",
      es: "Los personajes de CC5 vienen con un esqueleto y una estructura de control facial compatibles con MetaHuman, así que los clips de mocap, la animación y las actuaciones faciales se trasladan entre CC5 y MetaHuman sin un paso intermedio de retargeting.",
      de: "CC5-Charaktere kommen mit einem MetaHuman-kompatiblen Skelett und einer entsprechenden Gesichtssteuerungsstruktur, sodass Mocap-Clips, Animation und Gesichtsperformances zwischen CC5 und MetaHuman ohne einen zwischengeschalteten Retargeting-Schritt wechseln.",
    },
    official: true,
  },
  {
    id: "diff-subdivision-hd-mesh",
    category: "whatsNew",
    area: {
      en: "Mesh Detail & Subdivision",
      tr: "Mesh Detayı ve Subdivision",
      zh: "网格精度与 Subdivision",
      es: "Detalle de malla y subdivisión",
      de: "Mesh-Detail & Subdivision",
    },
    cc4: {
      en: "CC4 characters had a fixed base mesh density; reaching film-quality close-up detail meant sculpting in an external tool and managing a separate high-poly model.",
      tr: "CC4 karakterleri sabit bir temel mesh yoğunluğuna sahipti; film kalitesinde yakın çekim detayına ulaşmak, harici bir araçta heykeltıraşlık yapmayı ve ayrı bir yüksek poligonlu modeli yönetmeyi gerektiriyordu.",
      zh: "CC4 角色的基础网格密度是固定的；要达到电影级的特写细节，就得在外部工具里雕刻，并单独管理一个高模。",
      es: "Los personajes de CC4 tenían una densidad de malla base fija; alcanzar el detalle de primer plano con calidad de cine implicaba esculpir en una herramienta externa y gestionar un modelo de alto poligonaje aparte.",
      de: "CC4-Charaktere hatten eine feste Basis-Mesh-Dichte; für filmreifes Nahaufnahmen-Detail musste man in einem externen Tool sculpten und ein separates High-Poly-Modell verwalten.",
    },
    cc5: {
      en: "CC5 rebuilds the base around a subdivision workflow: a single character can carry up to about 16x more mesh detail (two extra subdivision levels) and switch between a game-ready and a film-quality mesh without losing its rig, morphs or animation, with support for 4K/8K textures and displacement.",
      tr: "CC5, temel bedeni bir subdivision iş akışı etrafında yeniden kurar: tek bir karakter yaklaşık 16 kat daha fazla mesh detayı taşıyabilir (iki ek subdivision seviyesi) ve rig'ini, morflarını veya animasyonunu kaybetmeden oyuna hazır bir mesh ile film kalitesinde bir mesh arasında geçiş yapabilir; 4K/8K dokular ve displacement desteklenir.",
      zh: "CC5 围绕 subdivision 工作流程重建了基础体：单个角色最多可承载约 16 倍的网格细节（多出两个 subdivision 级别），并能在游戏就绪网格和电影级网格之间切换，而不丢失其 rig、morph 或动画，同时支持 4K/8K 贴图和 displacement。",
      es: "CC5 reconstruye la base en torno a un flujo de trabajo de subdivisión: un mismo personaje puede llevar hasta unas 16 veces más detalle de malla (dos niveles de subdivisión adicionales) y alternar entre una malla lista para juego y una de calidad de cine sin perder su rig, sus morphs ni su animación, con soporte para texturas 4K/8K y displacement.",
      de: "CC5 baut die Basis um einen Subdivision-Workflow herum neu auf: ein einzelner Charakter kann bis zu etwa 16-mal mehr Mesh-Detail tragen (zwei zusätzliche Subdivision-Stufen) und zwischen einem game-ready und einem filmreifen Mesh wechseln, ohne Rig, Morphs oder Animation zu verlieren, mit Unterstützung für 4K/8K-Texturen und Displacement.",
    },
    official: true,
  },
  {
    id: "diff-actormixer",
    category: "whatsNew",
    area: {
      en: "Character Generation",
      tr: "Karakter Üretimi",
      zh: "角色生成",
      es: "Generación de personajes",
      de: "Charaktererstellung",
    },
    cc4: {
      en: "Making a new look meant morphing a single base character with sliders; there was no built-in way to blend several existing characters together.",
      tr: "Yeni bir görünüm oluşturmak, tek bir temel karakteri kaydırıcılarla morflamak demekti; birden çok mevcut karakteri bir araya harmanlamanın yerleşik bir yolu yoktu.",
      zh: "打造新形象意味着用滑块对单个基础角色做变形；当时没有内置的方式把多个现有角色混合在一起。",
      es: "Crear un nuevo aspecto implicaba deformar un único personaje base con deslizadores; no había una forma integrada de mezclar varios personajes existentes.",
      de: "Ein neues Aussehen zu schaffen bedeutete, einen einzelnen Basis-Charakter mit Reglern zu morphen; es gab keine eingebaute Möglichkeit, mehrere vorhandene Charaktere miteinander zu vermischen.",
    },
    cc5: {
      en: "CC5 adds ActorMIXER, which non-destructively blends the bodies, heads or individual features of up to six existing characters into a new one while keeping it rig- and animation-ready (an optional ActorMIXER Pro add-on adds one-click randomization and a scanned-head library).",
      tr: "CC5, ActorMIXER'ı ekler: en fazla altı mevcut karakterin bedenlerini, başlarını veya tek tek özelliklerini rig ve animasyona hazır halde tutarak yıkıcı olmadan yeni bir karaktere harmanlar (isteğe bağlı ActorMIXER Pro eklentisi tek tıkla rastgeleleştirme ve taranmış baş kütüphanesi ekler).",
      zh: "CC5 新增了 ActorMIXER，可将最多六个现有角色的身体、头部或单项特征以非破坏方式混合成一个新角色，同时保持其 rig 和动画就绪状态（可选的 ActorMIXER Pro 插件还提供一键随机化和扫描头部库）。",
      es: "CC5 añade ActorMIXER, que mezcla de forma no destructiva los cuerpos, las cabezas o los rasgos individuales de hasta seis personajes existentes en uno nuevo, manteniéndolo listo para rig y animación (un complemento opcional, ActorMIXER Pro, añade aleatorización con un clic y una biblioteca de cabezas escaneadas).",
      de: "CC5 fügt ActorMIXER hinzu, der die Körper, Köpfe oder einzelnen Merkmale von bis zu sechs vorhandenen Charakteren zerstörungsfrei zu einem neuen verschmilzt und ihn dabei rig- und animationsbereit hält (ein optionales ActorMIXER-Pro-Add-on ergänzt Ein-Klick-Randomisierung und eine Bibliothek gescannter Köpfe).",
    },
    official: true,
  },
  {
    id: "diff-speech-eyelid",
    category: "whatsNew",
    area: {
      en: "Speech & Eye Realism",
      tr: "Konuşma ve Göz Gerçekçiliği",
      zh: "口型与眼部真实感",
      es: "Realismo del habla y los ojos",
      de: "Sprech- und Augenrealismus",
    },
    cc4: {
      en: "Lip-sync and blinks were driven by mostly linear blendshapes, so closed-mouth consonants and eye movement could read as mechanical.",
      tr: "Dudak senkronu ve göz kırpmaları çoğunlukla doğrusal blendshape'lerle yönetiliyordu, bu yüzden ağzın kapalı olduğu ünsüzler ve göz hareketi mekanik görünebiliyordu.",
      zh: "口型同步和眨眼主要由线性 blendshape 驱动，因此闭口辅音和眼部动作可能显得机械。",
      es: "El lip-sync y los parpadeos se controlaban con blendshapes en su mayoría lineales, así que las consonantes con la boca cerrada y el movimiento de los ojos podían verse mecánicos.",
      de: "Lippensynchronisation und Blinzeln wurden überwiegend von linearen Blendshapes gesteuert, sodass Konsonanten mit geschlossenem Mund und Augenbewegungen mechanisch wirken konnten.",
    },
    cc5: {
      en: "CC5's HD Expression Profile adds a Sticky Lips system (lips stay adhered through closed-mouth consonants) and an Eyelid Constraint engine (blinks and squints follow eyeball rotation rather than a linear morph), plus non-linear curves for more natural facial motion.",
      tr: "CC5'in HD Expression Profile'ı bir Sticky Lips sistemi (dudaklar, ağzın kapalı olduğu ünsüzler boyunca birbirine yapışık kalır) ve bir Eyelid Constraint motoru (göz kırpma ve kısma, doğrusal bir morf yerine göz küresinin dönüşünü takip eder) ekler; buna daha doğal yüz hareketi için doğrusal olmayan eğriler eşlik eder.",
      zh: "CC5 的 HD Expression Profile 新增了 Sticky Lips 系统（在闭口辅音期间双唇保持贴合）和 Eyelid Constraint 引擎（眨眼和眯眼跟随眼球旋转，而非线性 morph），并配有非线性曲线以获得更自然的面部动作。",
      es: "El HD Expression Profile de CC5 añade un sistema Sticky Lips (los labios permanecen adheridos durante las consonantes con la boca cerrada) y un motor Eyelid Constraint (los parpadeos y entrecerrados siguen la rotación del globo ocular en lugar de un morph lineal), además de curvas no lineales para un movimiento facial más natural.",
      de: "Das HD Expression Profile von CC5 fügt ein Sticky-Lips-System (die Lippen bleiben bei Konsonanten mit geschlossenem Mund aneinander haften) und eine Eyelid-Constraint-Engine (Blinzeln und Zusammenkneifen folgen der Augapfeldrehung statt einem linearen Morph) hinzu, dazu nichtlineare Kurven für natürlichere Gesichtsbewegung.",
    },
    official: true,
  },
];
