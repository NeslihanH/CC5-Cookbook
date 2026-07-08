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
];
