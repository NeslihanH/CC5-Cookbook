import type { FeatureEntry } from "./types";

// iClone interop, ActorCore, Content Store, Reallusion Hub, licensing tiers.
// Covered only to the extent each connects to a CC5 workflow (Decisions.md
// D7), not as standalone manuals for iClone/ActorCore. AccuRIG already has
// its own entry in Rigging & Animation (M3), so it is not repeated here.
export const ecosystemEntries: FeatureEntry[] = [
  {
    id: "eco-iclone-interop",
    category: "ecosystem",
    name: "iClone Interoperability",
    subgroup: "iClone",
    summary: {
      en: "Character Creator and iClone share the same character, motion and facial data instead of treating each other as an import/export target, so moving a character from one to the other is not a lossy round trip.",
      tr: "Character Creator ve iClone, birbirini bir içe/dışa aktarım hedefi olarak görmek yerine aynı karakter, hareket ve yüz verisini paylaşır; bu yüzden bir karakteri biri diğerine taşımak kayıplı bir gidiş-dönüş anlamına gelmez.",
    },
    detail: {
      en: "CC5 is built as the character-creation half of a two-app pipeline: a character built in Character Creator opens directly in iClone for animation, keeping its rig, materials and physics setup intact, and characters or props sent back from iClone keep that same continuity. Motion data captured or animated in iClone (through Motion LIVE, hand-keying, or a library motion) plays on that same character without a conversion step, since both apps read the same rlMotion/iMotionPlus formats described in the Rigging & Animation glossary. For pipelines that leave the Reallusion ecosystem, bidirectional FBX timecode exchange keeps iClone in sync with Maya, MotionBuilder and Unreal Engine, and Unreal's Live Link Timecode Sync can lock iClone and Unreal to the same clock for real-time virtual production work.",
      tr: "CC5, iki uygulamalı bir hattın karakter yaratma yarısı olarak tasarlanmıştır: Character Creator'da oluşturulan bir karakter, rig'i, materyalleri ve fizik kurulumu bozulmadan doğrudan iClone'da animasyon için açılır; iClone'dan geri gönderilen karakterler veya prop'lar da aynı sürekliliği korur. iClone'da yakalanan veya animasyonu yapılan hareket verisi (Motion LIVE ile, elle keylenerek ya da bir kütüphane hareketiyle) bir dönüşüm adımına gerek kalmadan aynı karakterde oynatılır, çünkü her iki uygulama da Rigging & Animation glossary'sinde anlatılan aynı rlMotion/iMotionPlus formatlarını okur. Reallusion ekosisteminin dışına çıkan hatlar için çift yönlü FBX timecode alışverişi, iClone'u Maya, MotionBuilder ve Unreal Engine ile senkron tutar; Unreal'in Live Link Timecode Sync'i ise gerçek zamanlı sanal prodüksiyon işleri için iClone ve Unreal'i aynı saate kilitleyebilir.",
    },
    whereToFind: {
      en: "Opening or sending a character between Character Creator and iClone (both installed via Reallusion Hub); Live Link and timecode sync settings live inside iClone's Unreal Live Link plugin.",
      tr: "Character Creator ile iClone arasında (ikisi de Reallusion Hub üzerinden kurulur) bir karakter açmak veya göndermek; Live Link ve timecode senkronizasyon ayarları iClone'un Unreal Live Link eklentisinin içindedir.",
    },
    official: true,
  },
  {
    id: "eco-actorcore",
    category: "ecosystem",
    name: "ActorCore",
    subgroup: "Content Marketplace",
    summary: {
      en: "Reallusion's browser-based marketplace for motion-captured animation and fully rigged characters, built around themed motion packs instead of a random grab-bag of mocap clips.",
      tr: "Rastgele bir mocap klip yığını yerine temalı hareket paketleri etrafında kurulu, mocap animasyonu ve tam riglenmiş karakterler için Reallusion'ın tarayıcı tabanlı pazaryeri.",
    },
    detail: {
      en: "ActorCore's motion library is organized by theme (business, daily life, dance, medieval and combat, and more) rather than dumped as unsorted mocap takes, and every character sold there shares the same facial topology, so an expression or lip-sync setup made for one ActorCore character carries over to another. The Motion+ format goes a step further than a plain body-motion clip: it bundles facial animation, and in some packs a paired prop, into a single asset, so a scene does not need separate body, face and prop animations aligned by hand. Everything on ActorCore is exported as FBX with ready-made presets for Unreal, Unity, Maya, MotionBuilder, Blender, 3ds Max, Cinema 4D, iClone and Cartoon Animator, so content bought there is not tied to owning Character Creator; inside the Reallusion ecosystem specifically, it drops onto a Standard-rigged CC5 character the same way a Content Store motion would.",
      tr: "ActorCore'un hareket kütüphanesi, düzensiz mocap çekimleri olarak değil temaya göre (iş, günlük yaşam, dans, ortaçağ ve dövüş ve daha fazlası) organize edilir; orada satılan her karakter aynı yüz topolojisini paylaşır, bu yüzden bir ActorCore karakteri için hazırlanan bir ifade veya lip-sync kurulumu bir başkasına da taşınır. Motion+ formatı düz bir beden hareketi klibinden bir adım öteye gider: yüz animasyonunu, bazı paketlerde eşleştirilmiş bir prop'u tek bir varlıkta birleştirir, böylece bir sahne için beden, yüz ve prop animasyonlarını elle hizalamaya gerek kalmaz. ActorCore'daki her şey, Unreal, Unity, Maya, MotionBuilder, Blender, 3ds Max, Cinema 4D, iClone ve Cartoon Animator için hazır preset'lerle FBX olarak dışa aktarılır, bu yüzden orada satın alınan içerik Character Creator sahibi olmaya bağlı değildir; özellikle Reallusion ekosistemi içinde ise bir Content Store hareketinin yaptığı gibi doğrudan Standard rigli bir CC5 karakterinin üzerine düşer.",
    },
    whereToFind: {
      en: "actorcore.reallusion.com, or Content Manager's online tab when signed in with a Reallusion account.",
      tr: "actorcore.reallusion.com, ya da bir Reallusion hesabıyla giriş yapıldığında Content Manager'ın online sekmesi.",
    },
    official: true,
  },
  {
    id: "eco-content-store",
    category: "ecosystem",
    name: "Content Store",
    subgroup: "Content Marketplace",
    summary: {
      en: "Reallusion's general 2D/3D asset marketplace, covering the morphs, skin/makeup, hair, cloth, props and plugins that ActorCore's motion-and-character focus does not.",
      tr: "ActorCore'un karakter ve hareket odağının kapsamadığı morflar, cilt/makyaj, saç, kıyafet, prop ve eklentileri içeren, Reallusion'ın genel 2D/3D varlık pazaryeri.",
    },
    detail: {
      en: "Where ActorCore is specifically about characters and their motion, the Content Store carries the rest of what a CC5 project needs: HD morph packs, SkinGen skin and makeup sets, Smart Hair styles, ready-made outfits, props, and plugins such as HD Ultimate Morphs or SkinGen Premium. Content bought here installs through Content Manager the same way built-in assets do, so a purchased hairstyle or morph pack sits in the same browser and applies with the same drag-and-drop workflow as anything that shipped with CC5. Because plugins and content packs are often version-gated, checking a pack's listed CC5 compatibility before buying avoids installing something built for CC3/CC4 that will not show up correctly.",
      tr: "ActorCore özellikle karakterler ve onların hareketleriyle ilgiliyken, Content Store bir CC5 projesinin ihtiyaç duyduğu geri kalan her şeyi taşır: HD morf paketleri, SkinGen cilt ve makyaj setleri, Smart Hair stilleri, hazır kıyafetler, prop'lar ve HD Ultimate Morphs veya SkinGen Premium gibi eklentiler. Burada satın alınan içerik, yerleşik varlıklarla aynı şekilde Content Manager üzerinden kurulur; bu yüzden satın alınan bir saç stili veya morf paketi aynı tarayıcıda durur ve CC5 ile birlikte gelen her şeyle aynı sürükle-bırak iş akışıyla uygulanır. Eklentiler ve içerik paketleri genelde sürüme bağlı olduğundan, satın almadan önce paketin listelenen CC5 uyumluluğunu kontrol etmek, CC3/CC4 için hazırlanmış ve doğru görünmeyecek bir şeyi kurmaktan kaçındırır.",
    },
    whereToFind: {
      en: "reallusion.com/contentstore, or Content Manager's online tab.",
      tr: "reallusion.com/contentstore, ya da Content Manager'ın online sekmesi.",
    },
    official: true,
  },
  {
    id: "eco-reallusion-hub",
    category: "ecosystem",
    name: "Reallusion Hub",
    subgroup: "App & Plugin Management",
    summary: {
      en: "A single manager app for installing, updating and launching every Reallusion program and plugin, so version and dependency mismatches between Character Creator, iClone and their plugins are handled in one place.",
      tr: "Her Reallusion programını ve eklentisini kurmak, güncellemek ve başlatmak için tek bir yönetici uygulama; Character Creator, iClone ve eklentileri arasındaki sürüm ve bağımlılık uyumsuzluklarını tek yerden halleder.",
    },
    detail: {
      en: "Rather than downloading and updating Character Creator, iClone, AccuRIG and each Auto Setup or pipeline plugin separately, Reallusion Hub installs and updates all of them in a dependency-aware order and flags when a new version is available. Its Add-ons section filters plugins by type (iClone-specific, Motion LIVE mocap plugins, pipeline plugins for other DCCs), which matters in practice because a plugin built for one app version can silently fail to show up correctly if the base app is out of date; checking Hub's Updates section first is a common first step when a plugin or a piece of purchased content does not appear where expected.",
      tr: "Character Creator, iClone, AccuRIG ve her bir Auto Setup veya pipeline eklentisini ayrı ayrı indirip güncellemek yerine, Reallusion Hub hepsini bağımlılık sırasına göre kurar ve günceller, yeni bir sürüm çıktığında da haber verir. Add-ons bölümü eklentileri türe göre filtreler (iClone'a özgü, Motion LIVE mocap eklentileri, diğer DCC'ler için pipeline eklentileri); bu pratikte önemlidir çünkü bir uygulama sürümü için hazırlanmış bir eklenti, temel uygulama güncel değilse sessizce doğru görünmeyebilir. Bir eklenti veya satın alınan bir içerik beklendiği yerde görünmediğinde ilk kontrol edilecek yer genelde Hub'ın Updates bölümüdür.",
    },
    whereToFind: {
      en: "Downloaded separately from reallusion.com/hub; runs outside Character Creator as its own application.",
      tr: "reallusion.com/hub adresinden ayrıca indirilir; Character Creator'ın dışında kendi başına bir uygulama olarak çalışır.",
    },
    official: true,
  },
  {
    id: "eco-licensing-tiers",
    category: "ecosystem",
    name: "Licensing Tiers",
    subgroup: "Licensing",
    summary: {
      en: "Two separate licensing questions in the Reallusion ecosystem: which software plan covers Character Creator itself (perpetual vs. subscription), and which content license a purchased asset carries (iContent vs. Standard).",
      tr: "Reallusion ekosisteminde birbirinden ayrı iki lisans sorusu: Character Creator'ın kendisini hangi yazılım planının kapsadığı (perpetual ya da abonelik) ve satın alınan bir varlığın hangi içerik lisansını taşıdığı (iContent ya da Standard).",
    },
    detail: {
      en: "On the software side, Character Creator is sold both as a one-time perpetual license and as a 365 subscription plan, with bundles such as CC Deluxe or CC 365 Pro packaging the base app together with specific plugins (Headshot, SkinGen Premium) rather than selling them separately; exact pricing changes over time, so it is worth checking Reallusion's own plan-and-pricing page rather than relying on a fixed number. Separately, purchased content (motions, characters, morphs and similar assets) carries its own content license rather than following the software's license: an iContent License covers internal use only (rendering inside iClone or Character Creator, previsualization, education and concept work) at a reduced cost, roughly a third of the Standard License, while the Standard License is what allows that same content to be exported to external engines and DCCs (Unreal, Unity, Blender, Maya and others) and used across unlimited projects. Because these two licensing layers are independent, owning a perpetual CC5 license does not by itself grant export rights for iContent-licensed assets bought on the Content Store or ActorCore; the asset's own license terms decide that.",
      tr: "Yazılım tarafında Character Creator hem tek seferlik bir perpetual (kalıcı) lisansla hem de bir 365 abonelik planıyla satılır; CC Deluxe veya CC 365 Pro gibi paketler, temel uygulamayı belirli eklentilerle (Headshot, SkinGen Premium) ayrı ayrı satmak yerine birlikte paketler. Kesin fiyatlar zamanla değiştiğinden, sabit bir rakama güvenmek yerine Reallusion'ın kendi plan-and-pricing sayfasını kontrol etmekte fayda var. Ayrı olarak, satın alınan içerik (hareketler, karakterler, morflar ve benzeri varlıklar) yazılımın lisansını izlemek yerine kendi içerik lisansını taşır: iContent Lisansı yalnızca dahili kullanımı (iClone veya Character Creator içinde render, ön görselleştirme, eğitim ve konsept çalışması) Standard Lisansın kabaca üçte biri kadar indirimli bir fiyata kapsarken, Standard Lisans aynı içeriğin harici motorlara ve DCC'lere (Unreal, Unity, Blender, Maya ve diğerleri) dışa aktarılmasına ve sınırsız projede kullanılmasına izin veren lisanstır. Bu iki lisans katmanı birbirinden bağımsız olduğundan, kalıcı bir CC5 lisansına sahip olmak tek başına Content Store veya ActorCore'dan satın alınan iContent lisanslı varlıklar için dışa aktarım hakkı vermez; buna varlığın kendi lisans koşulları karar verir.",
    },
    whereToFind: {
      en: "reallusion.com/plan-and-pricing for software plans; reallusion.com/license/content.html for content license terms.",
      tr: "Yazılım planları için reallusion.com/plan-and-pricing; içerik lisans koşulları için reallusion.com/license/content.html.",
    },
    official: true,
  },
];
