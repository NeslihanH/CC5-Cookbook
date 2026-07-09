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
      zh: "CC5 流畅运行所需的硬件配置,官方标注的最低配置和实际使用时舒适流畅的配置之间存在明显差距。",
      es: "El hardware que CC5 necesita para funcionar sin problemas, con una diferencia real entre el mínimo indicado y lo que realmente resulta cómodo para trabajar.",
      de: "Die Hardware, die CC5 für einen reibungslosen Betrieb braucht, wobei zwischen der angegebenen Mindestanforderung und dem, was sich beim Arbeiten tatsächlich komfortabel anfühlt, eine deutliche Lücke besteht.",
    },
    detail: {
      en: "The minimum spec (a 7th-gen Core i5, 16 GB RAM, an 8 GB VRAM GPU such as a GTX 10-series card, 30 GB install space plus 200 GB free for DDS texture caching) is enough to open the app, but Reallusion's own recommended spec is meaningfully higher (10th-gen Core i5 or better, 64 GB RAM), which matches what HD subdivision sculpting, SkinGen's layered materials and dense Smart Hair styles actually demand once a project gets past a single simple character. The 200 GB DDS cache figure in particular catches people off guard since it's separate from install size.",
      tr: "Minimum sistem gereksinimi (7. nesil bir Core i5, 16 GB RAM, GTX 10 serisi gibi 8 GB VRAM'li bir GPU, kurulum için 30 GB ve DDS doku önbelleği için ayrıca 200 GB boş alan) uygulamayı açmaya yeter, ama Reallusion'ın kendi önerdiği sistem gereksinimi belirgin şekilde daha yüksektir (10. nesil Core i5 veya üstü, 64 GB RAM); bu da bir proje tek bir basit karakterin ötesine geçtiğinde HD subdivision heykeltıraşlığının, SkinGen'in katmanlı materyallerinin ve yoğun Smart Hair stillerinin gerçekte ne istediğiyle örtüşür. Özellikle 200 GB'lik DDS önbellek rakamı, kurulum boyutundan ayrı olduğu için çoğu kişiyi hazırlıksız yakalar.",
      zh: "最低配置(第7代 Core i5、16 GB 内存、8 GB 显存的 GPU 例如 GTX 10 系列显卡、30 GB 安装空间外加 200 GB 用于 DDS 贴图缓存的可用空间)只够打开程序,但 Reallusion 官方推荐配置要高出不少(第10代 Core i5 或更高、64 GB 内存),这才与 HD 细分雕刻、SkinGen 的多层材质以及茂密的 Smart Hair 造型在项目超出单个简单角色后的实际需求相符。尤其是那 200 GB 的 DDS 缓存空间容易让人措手不及,因为它是独立于安装空间之外另算的。",
      es: "La especificación mínima (un Core i5 de séptima generación, 16 GB de RAM, una GPU con 8 GB de VRAM como una tarjeta de la serie GTX 10, 30 GB de espacio de instalación más 200 GB libres para el cacheo de texturas DDS) alcanza solo para abrir la aplicación, pero la especificación que recomienda la propia Reallusion es notablemente más alta (Core i5 de décima generación o superior, 64 GB de RAM), lo cual coincide con lo que realmente exigen el esculpido por subdivisión HD, los materiales por capas de SkinGen y los peinados densos de Smart Hair en cuanto un proyecto supera un único personaje sencillo. La cifra de 200 GB de caché DDS en particular suele pillar a la gente desprevenida, ya que es independiente del tamaño de instalación.",
      de: "Die Mindestanforderung (ein Core i5 der 7. Generation, 16 GB RAM, eine GPU mit 8 GB VRAM wie eine Grafikkarte der GTX-10-Serie, 30 GB Installationsspeicher plus 200 GB frei für das DDS-Textur-Caching) reicht aus, um die App zu öffnen, aber die von Reallusion selbst empfohlene Konfiguration liegt spürbar höher (Core i5 der 10. Generation oder besser, 64 GB RAM), was auch dem entspricht, was HD-Subdivision-Sculpting, die geschichteten Materialien von SkinGen und dichte Smart Hair Frisuren tatsächlich verlangen, sobald ein Projekt über einen einzelnen einfachen Charakter hinausgeht. Besonders die 200 GB für den DDS-Cache überraschen viele, da sie separat von der Installationsgröße anfallen.",
    },
    whereToFind: {
      en: "reallusion.com/character-creator (Download page) or the CC5 manual's System Requirements page.",
      tr: "reallusion.com/character-creator (Download sayfası) ya da CC5 manual'ının System Requirements sayfası.",
      zh: "reallusion.com/character-creator(下载页面),或 CC5 手册的 System Requirements 页面。",
      es: "reallusion.com/character-creator (página de descargas) o la página System Requirements del manual de CC5.",
      de: "reallusion.com/character-creator (Download-Seite) oder die Seite System Requirements im CC5-Handbuch.",
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
      zh: "CC5 通过 Reallusion Hub 安装,而不是使用独立的安装程序;Hub 在同一个流程里完成安装并保持应用持续更新。",
      es: "CC5 se instala a través de Reallusion Hub en lugar de un instalador independiente, lo que configura la aplicación y la mantiene actualizada en el mismo paso.",
      de: "CC5 wird über den Reallusion Hub installiert statt über ein eigenständiges Installationsprogramm, wodurch die App in einem Schritt eingerichtet und aktuell gehalten wird.",
    },
    detail: {
      en: "Downloading CC5 first pulls in Reallusion Hub (a small, roughly 1 MB installer), which then downloads and installs Character Creator itself (close to 4 GB) alongside anything else in your Reallusion library. Doing it this way means updates, plugin installs and dependency ordering are handled by Hub going forward instead of by a separate installer each time; see the Reallusion Hub entry in Ecosystem for what Hub does after this first install.",
      tr: "CC5'i indirmek önce Reallusion Hub'ı çeker (yaklaşık 1 MB'lik küçük bir kurulum dosyası), ardından Hub, Character Creator'ın kendisini (yaklaşık 4 GB) ve Reallusion kütüphanendeki diğer her şeyi indirip kurar. Bunu bu şekilde yapmak, güncellemelerin, eklenti kurulumlarının ve bağımlılık sırasının bundan sonra her seferinde ayrı bir kurulum dosyası yerine Hub tarafından yönetilmesi anlamına gelir; bu ilk kurulumdan sonra Hub'ın ne yaptığı için Ecosystem'deki Reallusion Hub girdisine bak.",
      zh: "下载 CC5 时首先会拉取 Reallusion Hub(一个体积很小、约 1 MB 的安装程序),随后由 Hub 下载并安装 Character Creator 本体(接近 4 GB)以及你 Reallusion 资料库中的其他内容。这样的安装方式意味着此后的更新、插件安装和依赖顺序都由 Hub 统一处理,而不用每次都用单独的安装程序;Hub 在完成这次首装后还会做什么,可参见 Ecosystem 分类中的 Reallusion Hub 条目。",
      es: "Al descargar CC5 primero se instala Reallusion Hub (un instalador pequeño, de apenas 1 MB), que luego descarga e instala el propio Character Creator (cerca de 4 GB) junto con cualquier otra cosa de tu biblioteca de Reallusion. Hacerlo de esta forma significa que, de ahí en adelante, las actualizaciones, las instalaciones de plugins y el orden de dependencias los gestiona Hub en lugar de un instalador distinto cada vez; consulta la entrada de Reallusion Hub en Ecosystem para ver qué hace Hub después de esta primera instalación.",
      de: "Beim Herunterladen von CC5 wird zunächst der Reallusion Hub geladen (ein kleines Installationsprogramm von etwa 1 MB), der anschließend Character Creator selbst (knapp 4 GB) sowie alles andere aus deiner Reallusion-Bibliothek herunterlädt und installiert. Auf diese Weise übernimmt der Hub künftig Updates, Plugin-Installationen und die Reihenfolge der Abhängigkeiten, statt dass jedes Mal ein eigenes Installationsprogramm nötig ist; was der Hub nach dieser ersten Installation sonst noch macht, steht im Eintrag Reallusion Hub unter Ecosystem.",
    },
    whereToFind: {
      en: "reallusion.com/character-creator (Download page).",
      tr: "reallusion.com/character-creator (Download sayfası).",
      zh: "reallusion.com/character-creator(下载页面)。",
      es: "reallusion.com/character-creator (página de descargas).",
      de: "reallusion.com/character-creator (Download-Seite).",
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
      zh: "CC5 的窗口以中央的 3D Viewport 为核心,一侧是 Content Manager 和 Scene Manager,另一侧是随选中对象变化的 Modify 面板。",
      es: "La ventana de CC5 se organiza en torno a un Viewport 3D central, flanqueado por el Content Manager y el Scene Manager a un lado, y por el panel Modify, sensible al contexto, al otro.",
      de: "Das Fenster von CC5 ist um ein zentrales 3D Viewport herum aufgebaut, flankiert auf der einen Seite vom Content Manager und Scene Manager und auf der anderen Seite vom kontextabhängigen Modify-Panel.",
    },
    detail: {
      en: "The Content Manager is the asset browser: characters, props, lights, skies and cameras that ship with CC5 or get installed from Content Store/ActorCore live here, and dragging or double-clicking an item from it brings that item into the scene. The Scene Manager is the opposite view, a list of everything already placed in the current scene, useful for finding and selecting an object that is hidden behind something else in the viewport. The Modify panel is where most of the work in this cookbook happens: its tabs and sections change based on what is currently selected, which is why entries throughout Core Creation, Rigging & Animation and Pipeline & Export point to a specific Modify panel tab rather than one fixed location. The top toolbar covers project-level actions (New, Open, Save) plus render and viewport-mode switching.",
      tr: "Content Manager, varlık tarayıcısıdır: CC5 ile gelen ya da Content Store/ActorCore'dan kurulan karakterler, prop'lar, ışıklar, gökyüzü ayarları ve kameralar burada yaşar; buradan bir öğeyi sürüklemek veya çift tıklamak onu sahneye getirir. Scene Manager bunun tersi bir görünümdür, güncel sahnede zaten yerleştirilmiş her şeyin bir listesi; viewport'ta başka bir şeyin arkasında saklanan bir nesneyi bulup seçmek için kullanışlıdır. Modify paneli, bu cookbook'taki işlerin çoğunun yapıldığı yerdir: sekmeleri ve bölümleri o an neyin seçili olduğuna göre değişir, bu yüzden Core Creation, Rigging & Animation ve Pipeline & Export boyunca girdiler tek bir sabit konum yerine belirli bir Modify paneli sekmesine işaret eder. Üst araç çubuğu proje seviyesindeki eylemleri (New, Open, Save) ve render ile viewport modu değiştirmeyi kapsar.",
      zh: "Content Manager 是资源浏览器:CC5 自带的,或从 Content Store/ActorCore 安装的角色、道具、灯光、天空和摄像机都存放在这里,拖拽或双击其中的项目即可将其带入场景。Scene Manager 则是相反的视角,列出当前场景中已经放置的所有内容,便于查找并选中在 viewport 中被其他物体遮挡的对象。Modify 面板是本手册中大部分操作发生的地方:它的选项卡和区块会随当前选中的对象而变化,这也是为什么 Core Creation、Rigging & Animation 和 Pipeline & Export 中的条目指向的是某个具体的 Modify 面板选项卡,而不是一个固定位置。顶部工具栏则包含项目级别的操作(New、Open、Save)以及渲染和 viewport 模式切换。",
      es: "El Content Manager es el navegador de recursos: los personajes, props, luces, cielos y cámaras que vienen con CC5 o que se instalan desde Content Store/ActorCore residen aquí, y arrastrar o hacer doble clic en un elemento lo trae a la escena. El Scene Manager es la vista opuesta, una lista de todo lo que ya está colocado en la escena actual, útil para encontrar y seleccionar un objeto que queda oculto detrás de otro en el viewport. El panel Modify es donde ocurre la mayor parte del trabajo de este cookbook: sus pestañas y secciones cambian según lo que esté seleccionado en cada momento, por eso las entradas de Core Creation, Rigging & Animation y Pipeline & Export señalan una pestaña concreta del panel Modify en lugar de una ubicación fija. La barra de herramientas superior cubre las acciones a nivel de proyecto (New, Open, Save) además del cambio de modo de render y de viewport.",
      de: "Der Content Manager ist der Asset-Browser: Charaktere, Props, Lichter, Himmel und Kameras, die mit CC5 mitgeliefert werden oder aus dem Content Store/ActorCore installiert wurden, liegen hier; ein Objekt daraus zu ziehen oder darauf zu doppelklicken bringt es in die Szene. Der Scene Manager zeigt die umgekehrte Perspektive, eine Liste von allem, was bereits in der aktuellen Szene platziert ist, praktisch, um ein Objekt zu finden und auszuwählen, das im Viewport hinter etwas anderem verborgen ist. Im Modify-Panel findet der Großteil der Arbeit aus diesem Cookbook statt: Seine Reiter und Bereiche ändern sich je nachdem, was gerade ausgewählt ist, weshalb Einträge in Core Creation, Rigging & Animation und Pipeline & Export auf einen bestimmten Modify-Panel-Reiter verweisen statt auf einen festen Ort. Die obere Symbolleiste deckt Aktionen auf Projektebene ab (New, Open, Save) sowie das Umschalten von Render- und Viewport-Modus.",
    },
    whereToFind: {
      en: "Visible by default on first launch; panels can be undocked and rearranged, so a customized layout can drift from this default.",
      tr: "İlk açılışta varsayılan olarak görünür; paneller ayrılıp yeniden düzenlenebildiğinden, özelleştirilmiş bir yerleşim bu varsayılandan zamanla uzaklaşabilir.",
      zh: "首次启动时默认可见;面板可以取消停靠并重新排列,因此自定义布局可能会与这个默认状态不同。",
      es: "Visible de forma predeterminada al iniciar por primera vez; los paneles se pueden desacoplar y reorganizar, por lo que un diseño personalizado puede acabar alejándose de este valor predeterminado.",
      de: "Beim ersten Start standardmäßig sichtbar; Panels lassen sich lösen und neu anordnen, sodass ein angepasstes Layout im Lauf der Zeit von dieser Standardansicht abweichen kann.",
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
      zh: "购买前需要做出两个相互独立的授权决定:选择哪种 CC5 软件方案,以及所购买的资源需要具备哪种内容许可。",
      es: "Dos decisiones de licencia independientes antes de comprar: qué plan de software de CC5 elegir, y qué licencia de contenido debe llevar cualquier recurso comprado.",
      de: "Zwei voneinander unabhängige Lizenzentscheidungen vor dem Kauf: welcher CC5-Softwareplan, und welche Content-Lizenz ein gekauftes Asset tragen muss.",
    },
    detail: {
      en: "CC5 itself is available as a one-time perpetual license or a 365 subscription; separately, any motion, character or morph pack bought from ActorCore or the Content Store carries its own iContent or Standard content license, and the two are not related. This entry is a pointer, not the full picture: see the Licensing Tiers entry in Ecosystem for what each tier actually covers and why it matters for export.",
      tr: "CC5'in kendisi tek seferlik bir perpetual lisans ya da bir 365 abonelik olarak sunulur; ayrı olarak, ActorCore veya Content Store'dan satın alınan herhangi bir hareket, karakter veya morf paketi kendi iContent veya Standard içerik lisansını taşır, ve ikisi birbiriyle ilgili değildir. Bu girdi bir işaretçidir, tam tablo değil: her katmanın gerçekte neyi kapsadığı ve dışa aktarım için neden önemli olduğu için Ecosystem'deki Licensing Tiers girdisine bak.",
      zh: "CC5 本身既可以选择一次性买断的永久授权,也可以选择 365 订阅;与此分开的是,从 ActorCore 或 Content Store 购买的任何动作、角色或变形包都各自带有 iContent 或 Standard 内容许可,两者并不相关。这里只是一个指引,而不是完整说明:每个层级具体涵盖什么、为何在导出时会有影响,请参见 Ecosystem 分类中的 Licensing Tiers 条目。",
      es: "El propio CC5 está disponible como licencia perpetua de pago único o como suscripción 365; por separado, cualquier paquete de movimiento, personaje o morph comprado en ActorCore o en Content Store lleva su propia licencia de contenido iContent o Standard, y ambas cosas no están relacionadas entre sí. Esta entrada es solo una referencia, no el panorama completo: consulta la entrada Licensing Tiers en Ecosystem para saber qué cubre realmente cada nivel y por qué importa a la hora de exportar.",
      de: "CC5 selbst gibt es als einmalige unbefristete Lizenz oder als 365-Abonnement; unabhängig davon trägt jedes bei ActorCore oder im Content Store gekaufte Motion-, Charakter- oder Morph-Paket seine eigene iContent- oder Standard-Content-Lizenz, die beiden Dinge hängen nicht zusammen. Dieser Eintrag ist nur ein Hinweis, nicht das vollständige Bild: Was jede Stufe tatsächlich abdeckt und warum das beim Export wichtig ist, steht im Eintrag Licensing Tiers unter Ecosystem.",
    },
    whereToFind: {
      en: "reallusion.com/plan-and-pricing for software plans; reallusion.com/license/content.html for content license terms.",
      tr: "Yazılım planları için reallusion.com/plan-and-pricing; içerik lisans koşulları için reallusion.com/license/content.html.",
      zh: "软件方案见 reallusion.com/plan-and-pricing;内容许可条款见 reallusion.com/license/content.html。",
      es: "reallusion.com/plan-and-pricing para los planes de software; reallusion.com/license/content.html para los términos de la licencia de contenido.",
      de: "reallusion.com/plan-and-pricing für die Softwarepläne; reallusion.com/license/content.html für die Content-Lizenzbedingungen.",
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
      zh: "从第一次打开 CC5 到屏幕上出现角色的最短路径:选一个基础角色,而不是从空白场景开始。",
      es: "El camino más corto entre abrir CC5 por primera vez y tener un personaje en pantalla: elige una base, no una escena en blanco.",
      de: "Der kürzeste Weg vom ersten Öffnen von CC5 bis zu einem Charakter auf dem Bildschirm: eine Basis wählen, keine leere Szene.",
    },
    detail: {
      en: "New projects in Character Creator start from a base character rather than an empty scene, since there is no from-scratch human mesh workflow the way there might be in a general-purpose modeling tool. Picking an HD Base Character (male, female, or a stylized alternative) from Content Manager's Actor library is the actual starting point for everything documented in Core Creation; from there, the base-to-Unreal recipe under Recipes walks through a full first project end to end, and the Best Practices entry on confirming Standard classification is worth reading before customizing a first character too heavily.",
      tr: "Character Creator'da yeni projeler boş bir sahne yerine bir temel karakterden başlar, çünkü genel amaçlı bir modelleme aracında olabileceği gibi sıfırdan bir insan mesh'i kurma iş akışı yoktur. Content Manager'ın Actor kütüphanesinden bir HD Base Character (erkek, kadın ya da stilize bir alternatif) seçmek, Core Creation'da anlatılan her şeyin gerçek başlangıç noktasıdır; oradan sonra Recipes altındaki base-to-Unreal tarifi tam bir ilk projeyi baştan sona anlatır, Best Practices'teki Standard sınıflandırmasını doğrulama girdisi de bir ilk karakteri fazla özelleştirmeden önce okumaya değer.",
      zh: "Character Creator 中的新项目从一个基础角色开始,而不是从空场景开始,因为它不像通用建模工具那样提供从零开始搭建人体网格的工作流程。从 Content Manager 的 Actor 库中选择一个 HD Base Character(男性、女性,或风格化的替代版本)才是 Core Creation 中所有内容真正的起点;之后可以参考 Recipes 分类下 base-to-Unreal 的做法,完整走一遍第一个项目;在把第一个角色定制得太深入之前,也值得先读一读 Best Practices 中关于确认 Standard 分类的条目。",
      es: "Los proyectos nuevos en Character Creator parten de un personaje base en lugar de una escena vacía, ya que no existe un flujo de trabajo para construir una malla humana desde cero como podría haberlo en una herramienta de modelado de propósito general. Elegir un HD Base Character (masculino, femenino o una alternativa estilizada) desde la biblioteca Actor del Content Manager es el punto de partida real de todo lo documentado en Core Creation; a partir de ahí, la receta base-to-Unreal en Recipes recorre un primer proyecto completo de principio a fin, y vale la pena leer la entrada de Best Practices sobre cómo confirmar la clasificación Standard antes de personalizar demasiado un primer personaje.",
      de: "Neue Projekte in Character Creator starten von einem Basis-Charakter statt von einer leeren Szene, da es keinen Workflow gibt, um ein menschliches Mesh von Grund auf zu bauen, wie es in einem allgemeinen Modeling-Tool der Fall sein könnte. Die Wahl eines HD Base Character (männlich, weiblich oder eine stilisierte Alternative) aus der Actor-Bibliothek des Content Managers ist der eigentliche Ausgangspunkt für alles, was unter Core Creation beschrieben ist; von dort führt das base-to-Unreal-Rezept unter Recipes durch ein vollständiges erstes Projekt von Anfang bis Ende, und es lohnt sich, den Best-Practices-Eintrag zum Bestätigen der Standard-Klassifizierung zu lesen, bevor man einen ersten Charakter zu stark anpasst.",
    },
    whereToFind: {
      en: "Content Manager's Actor library, or the New Project / Create Character dialog at startup.",
      tr: "Content Manager'ın Actor kütüphanesi, ya da başlangıçtaki New Project / Create Character penceresi.",
      zh: "Content Manager 的 Actor 库,或启动时出现的 New Project / Create Character 对话框。",
      es: "La biblioteca Actor del Content Manager, o el cuadro de diálogo New Project / Create Character al iniciar.",
      de: "Die Actor-Bibliothek des Content Managers oder der Dialog New Project / Create Character beim Start.",
    },
    official: true,
  },
];
