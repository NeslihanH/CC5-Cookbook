import type { GlossaryTerm } from "./types";

// Every official term in one searchable place. Filled in gradually as each
// content milestone (M2-M7) introduces new terminology.
export const glossaryTerms: GlossaryTerm[] = [
  {
    id: "glossary-subdivision",
    category: "glossary",
    term: "Subdivision",
    aliases: ["Subdivision Level"],
    definition: {
      en: "A level of extra geometric detail added on top of a character's base mesh. Character Creator's HD bases are built to support subdivision from the start, so raising the level unlocks finer sculpting (via HD Morphs or ZBrush) without needing a separate high-poly model.",
      tr: "Bir karakterin temel mesh'inin üzerine eklenen ekstra geometrik detay seviyesi. Character Creator'ın HD temel bedenleri baştan itibaren subdivision'ı destekleyecek şekilde kurulur; seviyeyi artırmak, ayrı bir yüksek poligonlu model gerekmeden (HD Morphs veya ZBrush ile) daha ince heykeltıraşlığın kapısını açar.",
    },
    official: true,
  },
  {
    id: "glossary-hd-morphs",
    category: "glossary",
    term: "HD Morphs",
    definition: {
      en: "Morph sliders that add anatomical detail (muscle, folds, wrinkles, age) on top of a character's base shape, working together with subdivision levels rather than replacing the base mesh. See the Core Creation entry for the full workflow.",
      tr: "Bir karakterin temel şeklinin üzerine anatomik detay (kas, kıvrım, kırışıklık, yaş) ekleyen morf kaydırıcıları; temel mesh'in yerini almak yerine subdivision seviyeleriyle birlikte çalışır. Tüm iş akışı için Core Creation girdisine bakın.",
    },
    official: true,
  },
  {
    id: "glossary-skingen",
    category: "glossary",
    term: "SkinGen",
    definition: {
      en: "Character Creator's layer-based skin and makeup editor, built around a non-removable base skin layer plus stackable, reorderable detail and makeup layers.",
      tr: "Character Creator'ın katman tabanlı cilt ve makyaj editörü; kaldırılamayan bir temel cilt katmanı ile bunun üzerine eklenen, sıralanabilir detay ve makyaj katmanlarından oluşur.",
    },
    official: true,
  },
  {
    id: "glossary-smart-hair",
    category: "glossary",
    term: "Smart Hair",
    definition: {
      en: "Character Creator's card-based hair, beard and brow system, assembled from reusable Elements grouped into Groups and Styles, and shaded with the dedicated Smart Hair Shader.",
      tr: "Character Creator'ın kart tabanlı saç, sakal ve kaş sistemi; yeniden kullanılabilir Elements'ten oluşturulup Groups ve Styles halinde gruplanır ve özel Smart Hair Shader ile gölgelendirilir.",
    },
    official: true,
  },
  {
    id: "glossary-weight-map",
    category: "glossary",
    term: "Weight Map",
    definition: {
      en: "A grayscale map painted directly onto a garment or hair object to control physics: white areas move freely under simulation, black areas stay pinned to the body, and gray values blend between the two.",
      tr: "Bir kıyafet veya saç nesnesinin üzerine doğrudan boyanan, fiziği kontrol eden gri tonlamalı bir harita: beyaz alanlar simülasyon altında serbestçe hareket eder, siyah alanlar bedene sabitlenmiş kalır, gri değerler ise ikisi arasında geçiş yapar.",
    },
    official: true,
  },
  {
    id: "glossary-pbr",
    category: "glossary",
    term: "PBR",
    aliases: ["Physically Based Rendering"],
    definition: {
      en: "Physically Based Rendering: a material model built from Base Color, Metallic, Roughness and Normal channels, used for anything in Character Creator that does not use a dedicated shader such as the Digital Human Shader.",
      tr: "Physically Based Rendering (fiziksel tabanlı render): Base Color, Metallic, Roughness ve Normal kanallarından oluşan bir materyal modeli; Character Creator'da Digital Human Shader gibi özel bir shader kullanmayan her şey için geçerlidir.",
    },
    official: true,
  },
  {
    id: "glossary-digital-human-shader",
    category: "glossary",
    term: "Digital Human Shader",
    definition: {
      en: "A set of specialized shaders (skin, eye, hair) that model light behavior standard PBR cannot, most notably real-time subsurface scattering for skin.",
      tr: "Standart PBR'ın modelleyemediği ışık davranışlarını (özellikle cilt için gerçek zamanlı subsurface scattering) hesaba katan, özelleşmiş bir shader seti (cilt, göz, saç).",
    },
    official: true,
  },
  {
    id: "glossary-character-classification",
    category: "glossary",
    term: "Standard / Humanoid / Creature",
    definition: {
      en: "Character Creator's three rig classifications. Standard characters match the reference skeleton and facial rig exactly, so they get full expression editing, swappable clothing and the shared iClone/ActorCore motion library; Humanoid characters are adapted enough to reuse standard motions but not to swap parts; Creature characters keep a fully custom skeleton with its own animations and no facial or part editing.",
      tr: "Character Creator'ın üç rig sınıflandırması. Standard karakterler referans iskelet ve yüz rig'iyle birebir eşleşir, bu yüzden tam ifade düzenleme, değiştirilebilir kıyafet ve ortak iClone/ActorCore hareket kütüphanesine erişim kazanır; Humanoid karakterler standart hareketleri kullanacak kadar uyarlanmıştır ama parça değişimi desteklemez; Creature karakterler ise tamamen özel bir iskelet, kendi animasyonlarını korur ve yüz veya parça düzenlemesi almaz.",
    },
    official: true,
  },
  {
    id: "glossary-accurig",
    category: "glossary",
    term: "AccuRIG",
    definition: {
      en: "Reallusion's automatic rigging engine, bundled with Character Creator and also available as a free standalone app, that estimates a working skeleton and skin weights on humanoid meshes.",
      tr: "Reallusion'ın otomatik rigging motoru; Character Creator ile birlikte gelir ve ücretsiz bağımsız bir uygulama olarak da mevcuttur, insansı mesh'ler üzerinde çalışan bir iskelet ve deri ağırlığı tahmini yapar.",
    },
    official: true,
  },
  {
    id: "glossary-hd-facial-profile",
    category: "glossary",
    term: "HD Facial Profile",
    definition: {
      en: "The expanded facial rig introduced with CC5, raising the standard Facial Profile's slider count from 160 to 390 (Facial Expression, Corrective Expression and non-linear sliders combined) for finer expression control.",
      tr: "CC5 ile gelen genişletilmiş yüz rig'i; standart Facial Profile'ın kaydırıcı sayısını (Facial Expression, Corrective Expression ve doğrusal olmayan kaydırıcılar toplamında) 160'tan 390'a çıkararak daha ince ifade kontrolü sağlar.",
    },
    official: true,
  },
  {
    id: "glossary-characterization",
    category: "glossary",
    term: "Characterization",
    definition: {
      en: "The process of mapping a character's bones onto Character Creator's reference skeleton so it can be classified as Standard or Humanoid and play back the shared motion library through retargeting.",
      tr: "Bir karakterin kemiklerini Character Creator'ın referans iskeletine eşleyerek onu Standard veya Humanoid olarak sınıflandırma ve retargeting yoluyla ortak hareket kütüphanesini oynatabilir hale getirme işlemi.",
    },
    official: true,
  },
  {
    id: "glossary-motion-live",
    category: "glossary",
    term: "Motion LIVE",
    definition: {
      en: "iClone's real-time motion capture plugin system, which streams body and facial data from Reallusion's own tools (like AccuFACE) or third-party devices onto a Standard-rigged character.",
      tr: "iClone'un gerçek zamanlı motion capture eklenti sistemi; beden ve yüz verisini Reallusion'ın kendi araçlarından (AccuFACE gibi) veya üçüncü taraf cihazlardan Standard rigli bir karaktere akıtır.",
    },
    official: true,
  },
  {
    id: "glossary-rlmotion",
    category: "glossary",
    term: "rlMotion",
    aliases: [".rlMotion", "iMotionPlus", ".iMotionPlus"],
    definition: {
      en: "The current motion clip file format used across iClone and Character Creator; iMotionPlus is the variant that packages body motion together with facial and accessory data.",
      tr: "iClone ve Character Creator genelinde kullanılan güncel hareket klibi dosya formatı; iMotionPlus ise beden hareketini yüz ve aksesuar verisiyle birlikte paketleyen varyantıdır.",
    },
    official: true,
  },
];
