import type { FeatureEntry } from "./types";

// Base characters, HD Morphs, SkinGen, Smart Hair, Smart Cloth, Materials/PBR
// and the Digital Human Shader.
export const coreCreationEntries: FeatureEntry[] = [
  {
    id: "core-base-characters",
    category: "coreCreation",
    name: "HD Base Characters",
    subgroup: "Base Mesh",
    summary: {
      en: "Every CC5 project starts from a high-definition male or female base body built from human scan data, with stylized (toon-style) alternatives for non-photoreal work.",
      tr: "Her CC5 projesi, insan tarama verisinden üretilmiş yüksek çözünürlüklü (HD) bir erkek ya da kadın temel bedenle başlar; fotogerçekçi olmayan işler için toon tarzı alternatifler de mevcuttur.",
    },
    detail: {
      en: "The HD bases are organized into 12 core body styles spanning different ages and builds, each offering its own head-shape variation (20 in total) plus 152 body morphs for reshaping proportions, muscle definition and body fat without breaking the underlying topology. Because the mesh is subdivision-ready from the start, detail sculpted later with HD Morphs or in an external tool like ZBrush can be baked back onto it without rebuilding the base shape. Character Creator also tags every character as Standard, Humanoid or Creature: only Standard characters get full facial-expression editing and swappable clothing, so picking the right classification early avoids rework later in a project.",
      tr: "HD temel bedenler, farklı yaş ve vücut yapılarını kapsayan 12 çekirdek vücut stiline ayrılmıştır; her biri kendi baş şekli varyasyonuna (toplam 20) ve alttaki topolojiyi bozmadan oran, kas tanımı ve vücut yağını yeniden şekillendirmeye yarayan 152 vücut morfuna sahiptir. Mesh baştan itibaren subdivision'a (bölümlemeye) hazır olduğu için, daha sonra HD Morphs ile veya ZBrush gibi harici bir araçla eklenen detaylar, temel şekli yeniden kurmadan geri aktarılabilir. Character Creator ayrıca her karakteri Standard, Humanoid veya Creature olarak etiketler: sadece Standard karakterler tam yüz ifadesi düzenleme ve değiştirilebilir kıyafet desteği alır, bu yüzden doğru sınıflandırmayı projenin başında seçmek ilerideki tekrar işleri önler.",
    },
    whereToFind: {
      en: "Content Manager's Actor library, or the New Project / Create Character dialog at startup.",
      tr: "Content Manager'daki Actor kütüphanesi, ya da başlangıçtaki New Project / Create Character penceresi.",
    },
    newInCC5: true,
    official: true,
  },
  {
    id: "core-hd-morphs",
    category: "coreCreation",
    name: "HD Morphs",
    subgroup: "Sculpting",
    summary: {
      en: "A subdivision-based sculpting workflow that lets you push a base character into higher levels of geometric detail using organized morph sliders, without leaving Character Creator.",
      tr: "Karakteri Character Creator'dan çıkmadan, düzenli morf kaydırıcılarıyla daha yüksek geometrik detay seviyelerine taşımanı sağlayan, subdivision (bölümleme) tabanlı bir heykeltıraşlık iş akışı.",
    },
    detail: {
      en: "HD Morphs work on top of the base body and head shapes: each slider adds a layer of anatomical detail (muscle striation, skin folds, wrinkles, age-related changes) without touching the underlying bone structure or overall proportions, so a character can move from a slim to a fuller or more muscular build and still fit its rig and clothing. The system is built around Character Creator's subdivision levels, so higher subdivision unlocks finer sculpting without needing a separate high-poly mesh. For sculpting beyond what sliders cover, CC5 supports a round-trip to ZBrush: detail sculpted there is baked back as texture maps per subdivision level, so it plugs into the same rendering pipeline as slider-driven morphs.",
      tr: "HD Morphs, temel beden ve baş şekillerinin üzerinde çalışır: her kaydırıcı, alttaki kemik yapısına veya genel orana dokunmadan bir anatomik detay katmanı ekler (kas çizgileri, deri kıvrımları, kırışıklıklar, yaşa bağlı değişimler), böylece bir karakter zayıftan daha dolgun veya kaslı bir yapıya geçse bile rig ve kıyafetlerine uyum sağlamaya devam eder. Sistem, Character Creator'ın subdivision seviyeleri üzerine kuruludur; bu sayede ayrı bir yüksek poligonlu mesh gerekmeden daha yüksek subdivision, daha ince heykeltıraşlığın kapısını açar. Kaydırıcıların kapsamadığı detaylar için CC5, ZBrush ile gidiş-dönüş bir iş akışını destekler: orada heykeltıraşlığı yapılan detay, her subdivision seviyesi için doku haritası olarak geri aktarılır, böylece kaydırıcı tabanlı morflarla aynı render hattına dahil olur.",
    },
    whereToFind: {
      en: "Modify panel, once an HD-enabled base character is selected; subdivision level and the HD Morphs sliders sit together in the sculpting section.",
      tr: "HD destekli bir temel karakter seçildiğinde Modify panelinde; subdivision seviyesi ve HD Morphs kaydırıcıları heykeltıraşlık bölümünde birlikte yer alır.",
    },
    newInCC5: true,
    official: true,
  },
  {
    id: "core-skingen",
    category: "coreCreation",
    name: "SkinGen",
    subgroup: "Skin & Makeup",
    summary: {
      en: "A layer-based material editor dedicated to skin and makeup, letting you stack scan-based skin detail and cosmetic effects on a character without hand-painting textures.",
      tr: "Cilt ve makyaja adanmış, katman tabanlı bir materyal editörü; dokuları elle boyamadan karakterin üzerine tarama tabanlı cilt detayları ve kozmetik efektler yığmana olanak tanır.",
    },
    detail: {
      en: "SkinGen presents skin and makeup as a stack of layers in the Appearance Editor, starting from a non-removable base skin layer and building upward; each added layer (freckles, blemishes, foundation, blush, eyeliner and similar effects) blends with the ones beneath it, and can be toggled, reordered or adjusted with sliders instead of edited pixel by pixel. The bundled skin and makeup assets draw on licensed scan data for realistic pore and texture detail, and makeup content follows real cosmetic and effects-makeup categories (foundation, brows, eyes, lashes, lips) rather than a single flat texture swap. Because SkinGen materials are dynamic, they can also be flattened into ordinary baked textures for export to engines or renderers that expect standard image maps.",
      tr: "SkinGen, cilt ve makyajı Appearance Editor içinde bir katman yığını olarak sunar; kaldırılamayan bir temel cilt katmanından başlayıp üzerine katman ekleyerek ilerler. Eklenen her katman (çil, leke, fondöten, allık, eyeliner ve benzeri efektler) altındaki katmanlarla harmanlanır, piksel piksel düzenlemek yerine açılıp kapatılabilir, sıralaması değiştirilebilir veya kaydırıcılarla ayarlanabilir. Birlikte gelen cilt ve makyaj varlıkları, gerçekçi gözenek ve doku detayı için lisanslı tarama verisinden yararlanır; makyaj içerikleri de tek düz bir doku değişimi yerine gerçek kozmetik ve efekt makyajı kategorilerini (fondöten, kaş, göz, kirpik, dudak) takip eder. SkinGen materyalleri dinamik olduğundan, standart görüntü haritası bekleyen motor veya render araçlarına aktarım için sıradan pişirilmiş (baked) dokulara da düzleştirilebilir.",
    },
    whereToFind: {
      en: "Modify panel > Appearance Editor, in the Skin and Makeup pages.",
      tr: "Modify paneli > Appearance Editor, Skin ve Makeup sayfalarında.",
    },
    official: true,
  },
  {
    id: "core-smart-hair",
    category: "coreCreation",
    name: "Smart Hair",
    subgroup: "Hair, Beard & Brows",
    summary: {
      en: "A card-based hair, beard and brow system built around reusable Elements, Groups and Styles, tuned to stay light in real-time engines while still reading as realistic hair.",
      tr: "Yeniden kullanılabilir Elements, Groups ve Styles etrafında kurulu; gerçek zamanlı motorlarda hafif kalırken yine de gerçekçi görünen, kart tabanlı bir saç, sakal ve kaş sistemi.",
    },
    detail: {
      en: "Smart Hair builds hairstyles, beards and eyebrows from hair cards rather than strand-by-strand simulation, keeping texture resolution and file size low enough for real-time rendering and game engines. The Component Design workflow lets you combine individual Elements (a fringe, a beard section, a brow shape) that are organized into Groups and Styles, so new looks can be assembled from existing pieces instead of built from scratch every time; beards and brows can also conform to facial movement dynamically. Color and shine are controlled by the Smart Hair Shader, which supports root-to-tip color gradients (including on eyelashes, applied in layers) and specular variation, and the whole system carries a direct shader mapping to Unreal Engine so hair assets can move through Auto Setup without losing their look.",
      tr: "Smart Hair, saç stillerini, sakalı ve kaşları tel tel simülasyon yerine saç kartlarından (hair cards) oluşturur; bu sayede doku çözünürlüğü ve dosya boyutu, gerçek zamanlı render ve oyun motorları için yeterince düşük kalır. Component Design iş akışı, tek tek Elements'i (bir kâkül, bir sakal bölümü, bir kaş şekli) birleştirmeni sağlar; bunlar Groups ve Styles halinde organize edilir, böylece yeni görünümler her seferinde sıfırdan değil, mevcut parçalardan bir araya getirilerek oluşturulabilir. Sakal ve kaşlar da yüz hareketlerine dinamik olarak uyum sağlayabilir. Renk ve parlaklık, kök-uç renk geçişlerini (katmanlı uygulanan kirpikler dahil) ve speküler varyasyonu destekleyen Smart Hair Shader ile kontrol edilir; tüm sistem Unreal Engine ile doğrudan shader eşlemesine sahiptir, böylece saç varlıkları Auto Setup üzerinden görünümlerini kaybetmeden aktarılabilir.",
    },
    whereToFind: {
      en: "Modify panel, when a hair, beard or brow object is selected; the Component Editor lists available Elements, Groups and Styles.",
      tr: "Bir saç, sakal veya kaş nesnesi seçildiğinde Modify panelinde; Component Editor mevcut Elements, Groups ve Styles'ı listeler.",
    },
    official: true,
  },
  {
    id: "core-soft-cloth",
    category: "coreCreation",
    name: "Soft Cloth",
    subgroup: "Physics",
    summary: {
      en: "Real-time cloth physics driven by painted weight maps and collision volumes, so garments fold and move with the body without a full simulation pass.",
      tr: "Boyanmış ağırlık haritaları ve çarpışma hacimleriyle çalışan gerçek zamanlı kumaş fiziği; kıyafetler tam bir simülasyon geçişi olmadan bedenle birlikte kıvrılıp hareket eder.",
    },
    detail: {
      en: "Soft Cloth is switched on per-object from the Physics tab, then tuned with a weight map that you paint directly onto the garment: white areas move freely under physics, black areas stay pinned to the body, and everything in between blends the two. Friction, elasticity and wind reaction are then set either by hand or from a preset library, so a leather jacket and a silk scarf can share the same system but behave very differently. For shots where real-time approximation is not enough, CC5 also supports an offline path: export the animated character as FBX, simulate the cloth in Marvelous Designer, and bring the result back in as an Alembic file for frame-accurate playback in iClone or a renderer like Marmoset Toolbag.",
      tr: "Soft Cloth, Physics sekmesinden nesne bazında açılır, ardından doğrudan kıyafetin üzerine boyanan bir ağırlık haritasıyla ayarlanır: beyaz alanlar fizik altında serbestçe hareket eder, siyah alanlar bedene sabitlenmiş kalır, aradaki tonlar ise ikisini harmanlar. Sürtünme, esneklik ve rüzgâr tepkisi elle ya da bir hazır ayar (preset) kütüphanesinden belirlenir; böylece bir deri ceket ile bir ipek eşarp aynı sistemi paylaşsa da çok farklı davranabilir. Gerçek zamanlı yaklaşımın yetmediği çekimler için CC5, çevrimdışı bir yol da sunar: animasyonlu karakteri FBX olarak dışa aktar, kumaşı Marvelous Designer'da simüle et, sonucu iClone veya Marmoset Toolbag gibi bir render aracında kare kare doğru oynatım için Alembic dosyası olarak geri getir.",
    },
    whereToFind: {
      en: "Modify panel > Physics tab, on a selected clothing or accessory object.",
      tr: "Seçili bir kıyafet veya aksesuar nesnesinde, Modify paneli > Physics sekmesi.",
    },
    official: true,
  },
  {
    id: "core-materials-pbr",
    category: "coreCreation",
    name: "PBR Materials",
    subgroup: "Materials & Textures",
    summary: {
      en: "Character Creator's standard physically based material setup (base color, metallic, roughness, normal), used for anything that is not skin, eyes or hair with a dedicated shader.",
      tr: "Cilt, göz veya saç gibi kendine özel bir shader'ı olmayan her şey için kullanılan, Character Creator'ın standart fiziksel tabanlı (PBR) materyal kurulumu (base color, metallic, roughness, normal).",
    },
    detail: {
      en: "PBR materials in CC5 are set from the Material tab's Texture Settings, using the same four core channels most real-time engines expect: Base Color, Metallic, Roughness and Normal. Switching a material to PBR replaces the older Specular/Reflection channels, which have no effect once PBR is active, with Metallic and Roughness instead, so a material authored this way behaves consistently whether it stays in Character Creator/iClone or gets exported to an engine like Unreal or Unity. Each channel can be adjusted with its own controls or sent out to an external editor such as Photoshop and reimported, which keeps texture work compatible with a normal PBR pipeline instead of Character Creator's proprietary shaders.",
      tr: "CC5'te PBR materyalleri, çoğu gerçek zamanlı motorun beklediği aynı dört temel kanal olan Base Color, Metallic, Roughness ve Normal kullanılarak Material sekmesinin Texture Settings bölümünden ayarlanır. Bir materyali PBR'a çevirmek, PBR aktifken hiçbir etkisi kalmayan eski Specular/Reflection kanallarının yerine Metallic ve Roughness kanallarını koyar; böylece bu şekilde hazırlanan bir materyal ister Character Creator/iClone içinde kalsın ister Unreal veya Unity gibi bir motora aktarılsın tutarlı davranır. Her kanal kendi kontrolleriyle ayarlanabilir veya Photoshop gibi harici bir editöre gönderilip geri içe aktarılabilir; bu da doku çalışmasını Character Creator'ın kendine özel shader'ları yerine sıradan bir PBR hattıyla uyumlu tutar.",
    },
    whereToFind: {
      en: "Modify panel > Material tab > Texture Settings.",
      tr: "Modify paneli > Material sekmesi > Texture Settings.",
    },
    official: true,
  },
  {
    id: "core-digital-human-shader",
    category: "coreCreation",
    name: "Digital Human Shader",
    subgroup: "Materials & Textures",
    summary: {
      en: "A set of specialized shaders for skin, eyes and hair that go beyond standard PBR, adding subsurface scattering and other effects tuned specifically for realistic human rendering.",
      tr: "Standart PBR'ın ötesine geçen, cilt, göz ve saç için özelleşmiş bir shader seti; gerçekçi insan render'ı için özel olarak ayarlanmış subsurface scattering ve benzeri efektler ekler.",
    },
    detail: {
      en: "Standard PBR channels do not model how light behaves in skin, eyes or hair, so CC5 offers dedicated shaders for each: the skin shader adds real-time subsurface scattering to reproduce the soft light bounce under skin (rather than the harder reflections PBR alone would give it) along with tools like Smart Skin Color that adjust overall tone while automatically excluding non-skin areas such as lips or eyebrows; the eye shader builds a full eye from parametric sliders and image masks covering pupil, iris, limbus and sclera; and the hair shader models anisotropic specular reflection and light scatter between strands, with separate controls for flow direction, base color strength and two specular passes. A material authored in plain PBR is not automatically compatible with these shaders, but Character Creator ships preset conversions for Skin, Eyes and Teeth that map ordinary PBR textures onto the digital-human setup instead of requiring a manual rebuild.",
      tr: "Standart PBR kanalları, ışığın cilt, göz veya saçta nasıl davrandığını modellemez; bu yüzden CC5 her biri için özel shader'lar sunar: cilt shader'ı, PBR'ın tek başına vereceği daha sert yansımalar yerine derinin altındaki yumuşak ışık sıçramasını yeniden üretmek için gerçek zamanlı subsurface scattering ekler; buna dudak veya kaş gibi cilt olmayan alanları otomatik olarak dışlayarak genel tonu ayarlayan Smart Skin Color gibi araçlar eşlik eder. Göz shader'ı, gözbebeği, iris, limbus ve skleraı kapsayan parametrik kaydırıcılar ve görüntü maskeleriyle gözü baştan sona kurar; saç shader'ı ise teller arası ışık saçılımını ve anizotropik speküler yansımayı modeller, akış yönü, temel renk gücü ve iki ayrı speküler geçiş için ayrı kontroller sunar. Düz PBR ile hazırlanmış bir materyal bu shader'larla otomatik olarak uyumlu değildir, ancak Character Creator, elle yeniden kurmak yerine sıradan PBR dokularını digital-human kurulumuna eşleyen Skin, Eyes ve Teeth için hazır dönüşüm ayarları (preset) sunar.",
    },
    whereToFind: {
      en: "Modify panel > Material tab, after applying a Skin, Eyes or Hair digital-human material preset.",
      tr: "Bir Skin, Eyes veya Hair digital-human materyal preset'i uygulandıktan sonra, Modify paneli > Material sekmesi.",
    },
    official: true,
  },
];
