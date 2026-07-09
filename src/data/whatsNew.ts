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
];
