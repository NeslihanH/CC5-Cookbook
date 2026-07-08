import type { VersionDiffEntry } from "./types";

// CC5 vs CC4: what genuinely changed, area by area. Kept deliberately short -
// only entries confirmed against official CC5 launch materials are included;
// plausible-sounding CC4 comparisons that weren't independently verified
// were left out rather than guessed at.
export const whatsNewEntries: VersionDiffEntry[] = [
  {
    id: "diff-hd-facial-profile",
    category: "whatsNew",
    area: { en: "Facial Rig Detail", tr: "Yüz Rig Detayı" },
    cc4: {
      en: "Facial expressions were driven by the standard Facial Profile's 160 blendshape sliders.",
      tr: "Yüz ifadeleri, standart Facial Profile'ın 160 blendshape kaydırıcısıyla yönetiliyordu.",
    },
    cc5: {
      en: "CC5 adds an HD Facial Profile tier that expands the slider count to 390 (262 Facial Expression, 128 Corrective Expression, plus non-linear sliders), for finer micro-expression control and cleaner results from motion-captured performances.",
      tr: "CC5, kaydırıcı sayısını 390'a çıkaran (262 Facial Expression, 128 Corrective Expression, artı doğrusal olmayan kaydırıcılar) bir HD Facial Profile katmanı ekler; bu da daha ince mikro ifade kontrolü ve mocap ile yakalanan performanslardan daha temiz sonuç sağlar.",
    },
    official: true,
  },
  {
    id: "diff-metahuman-rig",
    category: "whatsNew",
    area: { en: "MetaHuman Compatibility", tr: "MetaHuman Uyumluluğu" },
    cc4: {
      en: "Moving animation or facial performance between a CC4 character and Epic's MetaHuman required a custom retargeting setup, since the two used different skeletons and facial rigs.",
      tr: "Bir CC4 karakteri ile Epic'in MetaHuman'ı arasında animasyon veya yüz performansı taşımak, ikisi farklı iskelet ve yüz rig'i kullandığından özel bir retargeting kurulumu gerektiriyordu.",
    },
    cc5: {
      en: "CC5 characters ship with a MetaHuman-compatible skeleton and facial control structure, so mocap clips, animation and facial performances move between CC5 and MetaHuman without an intermediate retargeting step.",
      tr: "CC5 karakterleri MetaHuman-uyumlu bir iskelet ve yüz kontrol yapısıyla gelir; bu sayede mocap klipleri, animasyon ve yüz performansları CC5 ile MetaHuman arasında aradaki retargeting adımına gerek kalmadan taşınır.",
    },
    official: true,
  },
];
