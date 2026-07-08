import type { FeatureEntry } from "./types";

// Installation, licensing, system requirements, UI overview, first
// character. Deliberately short: this category orients a first-time user
// and points into Core Creation/Ecosystem/Recipes rather than duplicating
// them.
export const gettingStartedEntries: FeatureEntry[] = [
  {
    id: "start-system-requirements",
    category: "gettingStarted",
    name: "System Requirements",
    summary: {
      en: "The hardware CC5 needs to run smoothly, with a real gap between the stated minimum and what's actually comfortable to work in.",
      tr: "CC5'in düzgün çalışması için gereken donanım; belirtilen minimum ile gerçekte rahat çalışılan seviye arasında ciddi bir fark var.",
    },
    detail: {
      en: "The minimum spec (a 7th-gen Core i5, 16 GB RAM, an 8 GB VRAM GPU such as a GTX 10-series card, 30 GB install space plus 200 GB free for DDS texture caching) is enough to open the app, but Reallusion's own recommended spec is meaningfully higher (10th-gen Core i5 or better, 64 GB RAM), which matches what HD subdivision sculpting, SkinGen's layered materials and dense Smart Hair styles actually demand once a project gets past a single simple character. The 200 GB DDS cache figure in particular catches people off guard since it's separate from install size.",
      tr: "Minimum sistem gereksinimi (7. nesil bir Core i5, 16 GB RAM, GTX 10 serisi gibi 8 GB VRAM'li bir GPU, kurulum için 30 GB ve DDS doku önbelleği için ayrıca 200 GB boş alan) uygulamayı açmaya yeter, ama Reallusion'ın kendi önerdiği sistem gereksinimi belirgin şekilde daha yüksektir (10. nesil Core i5 veya üstü, 64 GB RAM); bu da bir proje tek bir basit karakterin ötesine geçtiğinde HD subdivision heykeltıraşlığının, SkinGen'in katmanlı materyallerinin ve yoğun Smart Hair stillerinin gerçekte ne istediğiyle örtüşür. Özellikle 200 GB'lik DDS önbellek rakamı, kurulum boyutundan ayrı olduğu için çoğu kişiyi hazırlıksız yakalar.",
    },
    whereToFind: {
      en: "reallusion.com/character-creator (Download page) or the CC5 manual's System Requirements page.",
      tr: "reallusion.com/character-creator (Download sayfası) ya da CC5 manual'ının System Requirements sayfası.",
    },
    official: true,
  },
  {
    id: "start-installation",
    category: "gettingStarted",
    name: "Installing Character Creator 5",
    summary: {
      en: "CC5 installs through Reallusion Hub rather than a standalone installer, which sets up the app and keeps it updated in the same step.",
      tr: "CC5, bağımsız bir kurulum dosyası yerine Reallusion Hub üzerinden kurulur; bu da uygulamayı kurmayı ve güncel tutmayı aynı adımda halleder.",
    },
    detail: {
      en: "Downloading CC5 first pulls in Reallusion Hub (a small, roughly 1 MB installer), which then downloads and installs Character Creator itself (close to 4 GB) alongside anything else in your Reallusion library. Doing it this way means updates, plugin installs and dependency ordering are handled by Hub going forward instead of by a separate installer each time; see the Reallusion Hub entry in Ecosystem for what Hub does after this first install.",
      tr: "CC5'i indirmek önce Reallusion Hub'ı çeker (yaklaşık 1 MB'lik küçük bir kurulum dosyası), ardından Hub, Character Creator'ın kendisini (yaklaşık 4 GB) ve Reallusion kütüphanendeki diğer her şeyi indirip kurar. Bunu bu şekilde yapmak, güncellemelerin, eklenti kurulumlarının ve bağımlılık sırasının bundan sonra her seferinde ayrı bir kurulum dosyası yerine Hub tarafından yönetilmesi anlamına gelir; bu ilk kurulumdan sonra Hub'ın ne yaptığı için Ecosystem'deki Reallusion Hub girdisine bak.",
    },
    whereToFind: {
      en: "reallusion.com/character-creator (Download page).",
      tr: "reallusion.com/character-creator (Download sayfası).",
    },
    official: true,
  },
  {
    id: "start-ui-overview",
    category: "gettingStarted",
    name: "User Interface Overview",
    summary: {
      en: "CC5's window is built around a central 3D Viewport, flanked by the Content Manager and Scene Manager on one side and the context-sensitive Modify panel on the other.",
      tr: "CC5'in penceresi, bir tarafta Content Manager ve Scene Manager, diğer tarafta bağlama duyarlı Modify paneli ile çevrelenmiş merkezi bir 3D Viewport etrafında kuruludur.",
    },
    detail: {
      en: "The Content Manager is the asset browser: characters, props, lights, skies and cameras that ship with CC5 or get installed from Content Store/ActorCore live here, and dragging or double-clicking an item from it brings that item into the scene. The Scene Manager is the opposite view, a list of everything already placed in the current scene, useful for finding and selecting an object that is hidden behind something else in the viewport. The Modify panel is where most of the work in this cookbook happens: its tabs and sections change based on what is currently selected, which is why entries throughout Core Creation, Rigging & Animation and Pipeline & Export point to a specific Modify panel tab rather than one fixed location. The top toolbar covers project-level actions (New, Open, Save) plus render and viewport-mode switching.",
      tr: "Content Manager, varlık tarayıcısıdır: CC5 ile gelen ya da Content Store/ActorCore'dan kurulan karakterler, prop'lar, ışıklar, gökyüzü ayarları ve kameralar burada yaşar; buradan bir öğeyi sürüklemek veya çift tıklamak onu sahneye getirir. Scene Manager bunun tersi bir görünümdür, güncel sahnede zaten yerleştirilmiş her şeyin bir listesi; viewport'ta başka bir şeyin arkasında saklanan bir nesneyi bulup seçmek için kullanışlıdır. Modify paneli, bu cookbook'taki işlerin çoğunun yapıldığı yerdir: sekmeleri ve bölümleri o an neyin seçili olduğuna göre değişir, bu yüzden Core Creation, Rigging & Animation ve Pipeline & Export boyunca girdiler tek bir sabit konum yerine belirli bir Modify paneli sekmesine işaret eder. Üst araç çubuğu proje seviyesindeki eylemleri (New, Open, Save) ve render ile viewport modu değiştirmeyi kapsar.",
    },
    whereToFind: {
      en: "Visible by default on first launch; panels can be undocked and rearranged, so a customized layout can drift from this default.",
      tr: "İlk açılışta varsayılan olarak görünür; paneller ayrılıp yeniden düzenlenebildiğinden, özelleştirilmiş bir yerleşim bu varsayılandan zamanla uzaklaşabilir.",
    },
    official: true,
  },
  {
    id: "start-licensing-glance",
    category: "gettingStarted",
    name: "Licensing at a Glance",
    summary: {
      en: "Two independent licensing decisions to make before buying: which CC5 software plan, and which content license any purchased asset needs to carry.",
      tr: "Satın almadan önce verilecek iki bağımsız lisans kararı: hangi CC5 yazılım planı, ve satın alınan herhangi bir varlığın hangi içerik lisansını taşıması gerektiği.",
    },
    detail: {
      en: "CC5 itself is available as a one-time perpetual license or a 365 subscription; separately, any motion, character or morph pack bought from ActorCore or the Content Store carries its own iContent or Standard content license, and the two are not related. This entry is a pointer, not the full picture: see the Licensing Tiers entry in Ecosystem for what each tier actually covers and why it matters for export.",
      tr: "CC5'in kendisi tek seferlik bir perpetual lisans ya da bir 365 abonelik olarak sunulur; ayrı olarak, ActorCore veya Content Store'dan satın alınan herhangi bir hareket, karakter veya morf paketi kendi iContent veya Standard içerik lisansını taşır, ve ikisi birbiriyle ilgili değildir. Bu girdi bir işaretçidir, tam tablo değil: her katmanın gerçekte neyi kapsadığı ve dışa aktarım için neden önemli olduğu için Ecosystem'deki Licensing Tiers girdisine bak.",
    },
    whereToFind: {
      en: "reallusion.com/plan-and-pricing for software plans; reallusion.com/license/content.html for content license terms.",
      tr: "Yazılım planları için reallusion.com/plan-and-pricing; içerik lisans koşulları için reallusion.com/license/content.html.",
    },
    official: true,
  },
  {
    id: "start-first-character",
    category: "gettingStarted",
    name: "Starting Your First Character",
    summary: {
      en: "The shortest path from opening CC5 for the first time to having a character on screen: pick a base, not a blank scene.",
      tr: "CC5'i ilk kez açmaktan ekranda bir karakter olmasına giden en kısa yol: boş bir sahne değil, bir temel seç.",
    },
    detail: {
      en: "New projects in Character Creator start from a base character rather than an empty scene, since there is no from-scratch human mesh workflow the way there might be in a general-purpose modeling tool. Picking an HD Base Character (male, female, or a stylized alternative) from Content Manager's Actor library is the actual starting point for everything documented in Core Creation; from there, the base-to-Unreal recipe under Recipes walks through a full first project end to end, and the Best Practices entry on confirming Standard classification is worth reading before customizing a first character too heavily.",
      tr: "Character Creator'da yeni projeler boş bir sahne yerine bir temel karakterden başlar, çünkü genel amaçlı bir modelleme aracında olabileceği gibi sıfırdan bir insan mesh'i kurma iş akışı yoktur. Content Manager'ın Actor kütüphanesinden bir HD Base Character (erkek, kadın ya da stilize bir alternatif) seçmek, Core Creation'da anlatılan her şeyin gerçek başlangıç noktasıdır; oradan sonra Recipes altındaki base-to-Unreal tarifi tam bir ilk projeyi baştan sona anlatır, Best Practices'teki Standard sınıflandırmasını doğrulama girdisi de bir ilk karakteri fazla özelleştirmeden önce okumaya değer.",
    },
    whereToFind: {
      en: "Content Manager's Actor library, or the New Project / Create Character dialog at startup.",
      tr: "Content Manager'ın Actor kütüphanesi, ya da başlangıçtaki New Project / Create Character penceresi.",
    },
    official: true,
  },
];
