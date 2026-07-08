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
    aliases: [".rlMotion", "iMotionPlus", ".iMotionPlus", "Motion+", "Motion Plus"],
    definition: {
      en: "The current motion clip file format used across iClone and Character Creator; iMotionPlus is the variant that packages body motion together with facial and accessory data, sold under the Motion+ branding in the ActorCore Motion Store.",
      tr: "iClone ve Character Creator genelinde kullanılan güncel hareket klibi dosya formatı; iMotionPlus, beden hareketini yüz ve aksesuar verisiyle birlikte paketleyen ve ActorCore Motion Store'da Motion+ markasıyla satılan varyantıdır.",
    },
    official: true,
  },
  {
    id: "glossary-auto-setup",
    category: "glossary",
    term: "Auto Setup",
    definition: {
      en: "Reallusion's family of free one-click plugins (for Unreal Engine, Unity, Blender, Maya and 3ds Max) that bring a CC5/iClone character into another tool with materials, rig and (where relevant) motion already converted, instead of a plain FBX round trip.",
      tr: "Reallusion'ın ücretsiz, tek tıkla çalışan eklenti ailesi (Unreal Engine, Unity, Blender, Maya ve 3ds Max için); bir CC5/iClone karakterini düz bir FBX turu yerine materyalleri, rig'i ve (ilgiliyse) hareketi önceden dönüştürülmüş halde başka bir araca getirir.",
    },
    official: true,
  },
  {
    id: "glossary-goz",
    category: "glossary",
    term: "GoZ",
    aliases: ["GoZ+"],
    definition: {
      en: "Pixologic's cross-application round-trip protocol; Character Creator's GoZ bridge uses it to send a character to ZBrush and back while keeping morphs, textures, clothing, hair and accessories in sync.",
      tr: "Pixologic'in uygulamalar arası gidiş-dönüş protokolü; Character Creator'ın GoZ köprüsü, bir karakteri ZBrush'a gönderip geri getirirken morfları, dokuları, kıyafeti, saçı ve aksesuarları senkronize tutmak için bunu kullanır.",
    },
    official: true,
  },
  {
    id: "glossary-udim",
    category: "glossary",
    term: "UDIM",
    definition: {
      en: "A UV tiling convention that lays a character's texture space across multiple numbered tiles instead of one 0-1 square, used by Character Creator's Substance Painter bridge so each body part can be painted at full resolution.",
      tr: "Bir karakterin doku alanını tek bir 0-1 karesi yerine numaralandırılmış birden çok parçaya yayan bir UV döşeme kuralı; Character Creator'ın Substance Painter köprüsü bunu, her vücut bölümünün tam çözünürlükte boyanabilmesi için kullanır.",
    },
    official: true,
  },
  {
    id: "glossary-usd",
    category: "glossary",
    term: "USD",
    aliases: ["Universal Scene Description"],
    definition: {
      en: "Universal Scene Description, NVIDIA Omniverse's native interchange format; Character Creator can export characters as USD alongside its regular FBX pipeline.",
      tr: "NVIDIA Omniverse'in yerel değişim formatı olan Universal Scene Description; Character Creator, normal FBX hattının yanı sıra karakterleri USD olarak da dışa aktarabilir.",
    },
    official: true,
  },
  {
    id: "glossary-actorcore",
    category: "glossary",
    term: "ActorCore",
    definition: {
      en: "Reallusion's browser-based marketplace for themed mocap motion packs and fully rigged, facially consistent characters, exported as FBX for use across most major 3D tools.",
      tr: "Reallusion'ın temalı mocap hareket paketleri ile tam riglenmiş, yüz açısından tutarlı karakterler için tarayıcı tabanlı pazaryeri; çoğu büyük 3D araçta kullanmak üzere FBX olarak dışa aktarılır.",
    },
    official: true,
  },
  {
    id: "glossary-content-store",
    category: "glossary",
    term: "Content Store",
    definition: {
      en: "Reallusion's general 2D/3D asset marketplace for morphs, skin/makeup, hair, cloth, props and plugins, distinct from ActorCore's character-and-motion focus.",
      tr: "ActorCore'un karakter ve hareket odağından ayrı olarak, morflar, cilt/makyaj, saç, kıyafet, prop ve eklentiler için Reallusion'ın genel 2D/3D varlık pazaryeri.",
    },
    official: true,
  },
  {
    id: "glossary-reallusion-hub",
    category: "glossary",
    term: "Reallusion Hub",
    definition: {
      en: "A standalone manager app that installs, updates and launches Character Creator, iClone and their plugins in one place.",
      tr: "Character Creator'ı, iClone'u ve eklentilerini tek yerden kurup güncelleyen ve başlatan, bağımsız bir yönetici uygulama.",
    },
    official: true,
  },
  {
    id: "glossary-icontent-license",
    category: "glossary",
    term: "iContent License",
    definition: {
      en: "A reduced-cost content license covering internal use only (rendering inside iClone/Character Creator, previsualization, education, concept work); it does not permit exporting the content to external engines or DCCs, which requires a Standard License instead.",
      tr: "Yalnızca dahili kullanımı (iClone/Character Creator içinde render, ön görselleştirme, eğitim, konsept çalışması) kapsayan, indirimli bir içerik lisansı; içeriği harici motorlara veya DCC'lere dışa aktarmaya izin vermez, bunun için Standard Lisans gerekir.",
    },
    official: true,
  },
  {
    id: "glossary-standard-license",
    category: "glossary",
    term: "Standard License",
    definition: {
      en: "The Reallusion content license that permits exporting a purchased asset to external engines and DCCs (Unreal, Unity, Blender, Maya and others) and using it across unlimited projects; the iContent License covers internal use only.",
      tr: "Satın alınan bir varlığı harici motorlara ve DCC'lere (Unreal, Unity, Blender, Maya ve diğerleri) dışa aktarmaya ve sınırsız projede kullanmaya izin veren Reallusion içerik lisansı; iContent Lisansı yalnızca dahili kullanımı kapsar.",
    },
    official: true,
  },
  {
    id: "glossary-content-manager",
    category: "glossary",
    term: "Content Manager",
    definition: {
      en: "Character Creator's built-in browser for characters, hair, clothes, props and other assets, including an online tab for signed-in Content Store and ActorCore purchases.",
      tr: "Character Creator'ın karakterler, saç, kıyafet, prop ve diğer varlıklar için yerleşik tarayıcısı; giriş yapıldığında Content Store ve ActorCore satın alımları için bir online sekmesi de içerir.",
    },
    official: true,
  },
  {
    id: "glossary-modify-panel",
    category: "glossary",
    term: "Modify Panel",
    definition: {
      en: "Character Creator's main contextual editing panel; its tabs and sections change based on what is selected (a character, a garment, a hair object, a material) and host most of the tools described throughout this cookbook.",
      tr: "Character Creator'ın ana bağlamsal düzenleme paneli; sekmeleri ve bölümleri neyin seçili olduğuna göre (bir karakter, bir kıyafet, bir saç nesnesi, bir materyal) değişir ve bu cookbook boyunca anlatılan araçların çoğunu barındırır.",
    },
    official: true,
  },
  {
    id: "glossary-control-rig",
    category: "glossary",
    term: "Control Rig",
    definition: {
      en: "An animator-friendly rig (as opposed to the underlying skeleton) that Auto Setup plugins build automatically in the destination DCC or engine, so a CC5 character can be posed without hand-rigging control curves.",
      tr: "Auto Setup eklentilerinin hedef DCC veya motorda otomatik olarak kurduğu, alttaki iskeletin aksine animatöre yönelik bir rig; bu sayede bir CC5 karakteri kontrol eğrilerini elle riglemeden pozlanabilir.",
    },
    official: true,
  },
  {
    id: "glossary-live-link",
    category: "glossary",
    term: "Live Link",
    definition: {
      en: "Unreal Engine's real-time data-streaming connection; iClone's Unreal Live Link plugin uses it to update a character's motion in Unreal live as it changes in Character Creator or iClone, and to keep both apps synced by timecode.",
      tr: "Unreal Engine'in gerçek zamanlı veri akışı bağlantısı; iClone'un Unreal Live Link eklentisi bunu, Character Creator veya iClone'da değişen bir karakterin hareketini Unreal'de canlı olarak güncellemek ve iki uygulamayı timecode ile senkron tutmak için kullanır.",
    },
    official: true,
  },
  {
    id: "glossary-metahuman-animator",
    category: "glossary",
    term: "MetaHuman Animator",
    definition: {
      en: "Unreal Engine's high-end facial capture and solving tool; CC5 characters can use it directly because they share MetaHuman's skeleton and facial control structure.",
      tr: "Unreal Engine'in üst seviye yüz yakalama ve çözümleme aracı; CC5 karakterleri MetaHuman'ın iskeletini ve yüz kontrol yapısını paylaştığı için bunu doğrudan kullanabilir.",
    },
    official: true,
  },
];
