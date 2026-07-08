import type { FeatureEntry } from "./types";

// Auto Setup for Unreal/Unity/Blender/Maya/3ds Max, ZBrush GoZ, Substance
// Painter, Omniverse/USD, and the native FBX export path. Close iClone
// interop lives in Ecosystem (M5) since it shares CC5's project format
// rather than going through an export pipeline.
export const pipelineExportEntries: FeatureEntry[] = [
  {
    id: "pipe-auto-setup-unreal",
    category: "pipelineExport",
    name: "Auto Setup for Unreal Engine",
    subgroup: "Auto Setup",
    summary: {
      en: "A one-click plugin bundle (Auto Setup, CC UE Control Rig and UE Live Link in one package) that sends a CC5 character into Unreal Engine fully rigged, shaded and ready to animate, without a manual FBX export/import round trip.",
      tr: "CC5 karakterini elle FBX dışa aktarma/içe aktarma turu olmadan Unreal Engine'e tam riglenmiş, shade edilmiş ve animasyona hazır halde gönderen; Auto Setup, CC UE Control Rig ve UE Live Link'i tek pakette birleştiren, tek tıkla çalışan bir eklenti.",
    },
    detail: {
      en: "Instead of exporting an FBX and rebuilding materials and rig bindings by hand inside Unreal, Auto Setup pushes the character directly from Character Creator (or iClone) into a running Unreal project: it converts the Digital Human Shader into Unreal-native materials, sets up a matching Control Rig, and wires up Live Link so a character's motion in Character Creator/iClone updates live in Unreal for quick preview. Because CC5 characters already carry a MetaHuman-compatible skeleton, characters brought over this way line up with Unreal's MetaHuman ecosystem (facial capture, body mocap) without extra retargeting on the Unreal side.",
      tr: "Bir FBX dışa aktarıp materyalleri ve rig bağlantılarını Unreal içinde elle yeniden kurmak yerine, Auto Setup karakteri doğrudan Character Creator'dan (ya da iClone'dan) çalışan bir Unreal projesine gönderir: Digital Human Shader'ı Unreal'e özgü materyallere çevirir, eşleşen bir Control Rig kurar ve Live Link'i bağlar, böylece karakterin Character Creator/iClone içindeki hareketi hızlı önizleme için Unreal'de canlı olarak güncellenir. CC5 karakterleri zaten MetaHuman-uyumlu bir iskelet taşıdığından, bu şekilde aktarılan karakterler Unreal tarafında ekstra retargeting gerekmeden Unreal'in MetaHuman ekosistemiyle (yüz yakalama, beden mocap) hizalanır.",
    },
    whereToFind: {
      en: "Installed as a separate Unreal Engine plugin (free download from Reallusion); once installed, an Auto Setup panel/menu appears inside Unreal for sending characters over from Character Creator or iClone.",
      tr: "Ayrı bir Unreal Engine eklentisi olarak kurulur (Reallusion'dan ücretsiz indirilir); kurulduktan sonra Character Creator veya iClone'dan karakter göndermek için Unreal içinde bir Auto Setup paneli/menüsü görünür.",
    },
    official: true,
  },
  {
    id: "pipe-auto-setup-unity",
    category: "pipelineExport",
    name: "Auto Setup for Unity",
    subgroup: "Auto Setup",
    summary: {
      en: "A free Unity plugin that syncs characters, poses, motions, cameras and lights from Character Creator or iClone into a Unity scene with a single click, including automatic timeline setup.",
      tr: "Character Creator veya iClone'dan karakterleri, pozları, hareketleri, kameraları ve ışıkları tek tıkla, otomatik timeline kurulumuyla birlikte bir Unity sahnesine senkronize eden ücretsiz bir Unity eklentisi.",
    },
    detail: {
      en: "Auto Setup for Unity is aimed at keeping a Unity scene in sync with a Character Creator/iClone project rather than being a one-time export: sending an update pushes the current character, its pose or motion, and even camera and light setups into Unity, and builds a matching timeline automatically instead of leaving the artist to rebuild animation tracks by hand. This makes it practical to iterate on a character or a shot in Character Creator/iClone and see the result reflected in Unity quickly, rather than treating export as a final, one-way step.",
      tr: "Auto Setup for Unity, tek seferlik bir dışa aktarım olmaktan çok, bir Unity sahnesini Character Creator/iClone projesiyle senkronize tutmayı hedefler: bir güncelleme gönderdiğinde güncel karakteri, pozunu veya hareketini, hatta kamera ve ışık kurulumlarını Unity'ye iter ve animasyon parçalarını elle yeniden kurmak yerine eşleşen bir timeline'ı otomatik oluşturur. Bu da bir karakter veya sahne üzerinde Character Creator/iClone'da yineleme yapıp sonucu Unity'de hızla görmeyi pratik hale getirir; dışa aktarımı tek yönlü, nihai bir adım olarak ele almak yerine.",
    },
    whereToFind: {
      en: "Installed as a separate Unity package (free download from Reallusion); appears as an Auto Setup window/menu inside the Unity Editor.",
      tr: "Ayrı bir Unity paketi olarak kurulur (Reallusion'dan ücretsiz indirilir); Unity Editor içinde bir Auto Setup penceresi/menüsü olarak görünür.",
    },
    official: true,
  },
  {
    id: "pipe-auto-setup-blender",
    category: "pipelineExport",
    name: "Blender Auto Setup",
    subgroup: "Auto Setup",
    summary: {
      en: "A free Blender add-on (also distributed as the community CC/iC Blender Tools) that imports CC5/iClone characters with working materials and rig, tuned for Blender's Eevee and Cycles renderers.",
      tr: "CC5/iClone karakterlerini çalışan materyaller ve rig ile, Blender'ın Eevee ve Cycles render motorlarına göre ayarlanmış şekilde içe aktaran, ücretsiz bir Blender eklentisi (topluluk tarafından CC/iC Blender Tools olarak da dağıtılır).",
    },
    detail: {
      en: "Bringing a Digital Human Shader character into Blender by hand means rebuilding the skin, eye and hair shader graphs in Blender's node system; Blender Auto Setup does this conversion automatically for both of Blender's render engines, and exposes material-based displacement maps as adjustable strength sliders instead of a fixed bake. The result is a character that keeps looking like its Character Creator source without a manual shader-authoring pass, while still being an ordinary Blender object that can be posed, rendered or further edited like anything else in the scene.",
      tr: "Bir Digital Human Shader karakterini elle Blender'a getirmek, cilt, göz ve saç shader graph'larını Blender'ın node sisteminde yeniden kurmak anlamına gelir; Blender Auto Setup bu dönüşümü Blender'ın her iki render motoru için de otomatik yapar ve materyal tabanlı displacement haritalarını sabit bir bake yerine ayarlanabilir güç kaydırıcıları olarak sunar. Sonuç, manuel bir shader kurma aşaması olmadan Character Creator kaynağına benzemeye devam eden, ama yine de sahnedeki her şey gibi pozlanabilen, render edilebilen veya düzenlenebilen sıradan bir Blender nesnesidir.",
    },
    whereToFind: {
      en: "Installed as a separate Blender add-on (free download from Reallusion, or the community CC/iC Blender Tools); appears in Blender's add-on panel and import menu.",
      tr: "Ayrı bir Blender eklentisi olarak kurulur (Reallusion'dan ücretsiz indirilir, ya da topluluk CC/iC Blender Tools); Blender'ın eklenti panelinde ve içe aktarma menüsünde görünür.",
    },
    official: true,
  },
  {
    id: "pipe-auto-setup-maya-3dsmax",
    category: "pipelineExport",
    name: "Auto Setup for Maya & 3ds Max",
    subgroup: "Auto Setup",
    summary: {
      en: "Free Autodesk-side plugins that bring a CC5 character into Maya or 3ds Max with its skeleton, skin weights, facial rig and shaders already converted for Arnold or V-Ray rendering.",
      tr: "CC5 karakterini iskeleti, deri ağırlıkları, yüz rig'i ve materyalleri Arnold ya da V-Ray render için önceden dönüştürülmüş halde Maya veya 3ds Max'e getiren, ücretsiz Autodesk eklentileri.",
    },
    detail: {
      en: "Both plugins solve the same problem for their respective DCC: a character exported as plain FBX arrives with no lookdev, so Auto Setup rebuilds the Digital Human Shader as native Arnold or V-Ray material graphs, adds a control rig for posing, and carries over the facial rig and skin weights so animators are not starting from an unrigged mesh. The 3ds Max version additionally supports Arnold and V-Ray lighting setups aimed at look development, while the Maya version focuses on getting a fully controllable, render-ready rig in place quickly. Neither plugin is required to use CC5 characters in Maya or 3ds Max (plain FBX export always works), but skipping it means rebuilding materials and control rigs by hand.",
      tr: "Her iki eklenti de kendi DCC'sinde aynı sorunu çözer: düz bir FBX olarak dışa aktarılan karakter lookdev'siz gelir, Auto Setup ise Digital Human Shader'ı yerel Arnold veya V-Ray materyal graph'larına yeniden kurar, pozlamak için bir control rig ekler ve yüz rig'i ile deri ağırlıklarını taşır, böylece animatörler rigsiz bir mesh'ten başlamaz. 3ds Max sürümü ayrıca look development'a yönelik Arnold ve V-Ray ışıklandırma kurulumlarını destekler, Maya sürümü ise hızlıca tam kontrol edilebilir, render'a hazır bir rig kurmaya odaklanır. CC5 karakterlerini Maya veya 3ds Max'te kullanmak için hiçbir eklenti zorunlu değildir (düz FBX dışa aktarımı her zaman çalışır), ama eklentiyi atlamak materyalleri ve control rig'leri elle yeniden kurmak anlamına gelir.",
    },
    whereToFind: {
      en: "Installed as separate Maya and 3ds Max plugins (free downloads from Reallusion); each adds its own Auto Setup menu inside the respective DCC.",
      tr: "Ayrı Maya ve 3ds Max eklentileri olarak kurulur (Reallusion'dan ücretsiz indirilir); her biri ilgili DCC içinde kendi Auto Setup menüsünü ekler.",
    },
    official: true,
  },
  {
    id: "pipe-zbrush-goz",
    category: "pipelineExport",
    name: "ZBrush GoZ Bridge",
    subgroup: "Sculpting",
    summary: {
      en: "A one-click round trip between Character Creator and ZBrush (via Pixologic's GoZ protocol) that carries a character's morphs, textures, clothing, hair and accessories along with the mesh.",
      tr: "Character Creator ile ZBrush arasında (Pixologic'in GoZ protokolü üzerinden) mesh'in yanında karakterin morflarını, dokularını, kıyafetlerini, saçını ve aksesuarlarını da taşıyan, tek tıkla çalışan bir gidiş-dönüş köprüsü.",
    },
    detail: {
      en: "Sending a character to ZBrush through GoZ does not just move geometry: the updated GoZ+ workflow keeps body and expression morphs synchronized across every subdivision level, so sculpting can happen at the resolution that makes sense in ZBrush and still line up when the mesh comes back into Character Creator. This is what makes the round trip described in the HD Morphs entry practical for production work: instead of a one-way export, a character can go back and forth between the two tools multiple times as a sculpt is refined.",
      tr: "Bir karakteri GoZ ile ZBrush'a göndermek yalnızca geometriyi taşımaz: güncellenmiş GoZ+ iş akışı, beden ve ifade morflarını her subdivision seviyesinde senkronize tutar, böylece heykeltıraşlık ZBrush'ta anlamlı gelen çözünürlükte yapılabilir ve mesh Character Creator'a geri döndüğünde yine de hizalı kalır. HD Morphs girdisinde bahsedilen gidiş-dönüşü prodüksiyon işi için pratik hale getiren de budur: tek yönlü bir dışa aktarım yerine, bir karakter heykeltıraşlık inceltilirken iki araç arasında birden çok kez gidip gelebilir.",
    },
    whereToFind: {
      en: "File > GoZ (or the GoZ button on a selected character/object), once ZBrush and the GoZ bridge are installed.",
      tr: "ZBrush ve GoZ köprüsü kurulduktan sonra File > GoZ (veya seçili bir karakter/nesnedeki GoZ düğmesi).",
    },
    official: true,
  },
  {
    id: "pipe-substance-painter",
    category: "pipelineExport",
    name: "Substance Painter Bridge",
    subgroup: "Texturing",
    summary: {
      en: "A texturing pipeline that exports a character's meshes with clean UDIM layouts for Substance Painter, including assets sculpted entirely in ZBrush.",
      tr: "Karakterin mesh'lerini, tamamen ZBrush'ta heykeltıraşlanmış varlıklar dahil, Substance Painter için temiz UDIM düzenleriyle dışa aktaran bir dokulandırma hattı.",
    },
    detail: {
      en: "The bridge is built around UDIM support: a character (or a ZBrush-sculpted asset brought in through GoZ) exports as OBJ with its materials and UDIM tiles laid out correctly, so Substance Painter can paint each tile without the manual UV cleanup that mismatched UDIMs usually require. Textures painted this way come back into Character Creator as ordinary PBR maps, which keeps them compatible with the same Material tab workflow described in the PBR Materials entry.",
      tr: "Köprü UDIM desteği etrafında kuruludur: bir karakter (ya da GoZ ile getirilen ZBrush heykeltıraşlığı bir varlık) materyalleri ve UDIM parçaları doğru yerleştirilmiş şekilde OBJ olarak dışa aktarılır, böylece Substance Painter her parçayı, uyumsuz UDIM'lerin genelde gerektirdiği elle UV temizliği olmadan boyayabilir. Bu şekilde boyanan dokular Character Creator'a sıradan PBR haritaları olarak geri döner; bu da onları PBR Materials girdisinde anlatılan aynı Material sekmesi iş akışıyla uyumlu tutar.",
    },
    whereToFind: {
      en: "File > Export (OBJ with UDIM layout), for use with Substance Painter's own project import.",
      tr: "File > Export (UDIM düzenli OBJ), Substance Painter'ın kendi proje içe aktarımıyla kullanmak üzere.",
    },
    official: true,
  },
  {
    id: "pipe-omniverse-usd",
    category: "pipelineExport",
    name: "Omniverse / USD Pipeline",
    subgroup: "Interop",
    summary: {
      en: "USD-based export support for bringing CC5 characters into NVIDIA Omniverse, alongside Character Creator's regular FBX pipeline.",
      tr: "Character Creator'ın normal FBX hattının yanında, CC5 karakterlerini NVIDIA Omniverse'e getirmek için USD tabanlı dışa aktarım desteği.",
    },
    detail: {
      en: "Universal Scene Description (USD) is Omniverse's native interchange format, and Character Creator can generate, transfer and customize character assets as USD alongside its existing FBX export, so a character built for real-time engines or DCCs can also feed an Omniverse-based pipeline without a separate remodeling pass. This sits alongside the FBX and Live Link paths covered elsewhere in Pipeline & Export rather than replacing them: which format to use depends on whether the destination tool expects USD or FBX.",
      tr: "Universal Scene Description (USD), Omniverse'in yerel değişim formatıdır; Character Creator, mevcut FBX dışa aktarımının yanı sıra karakter varlıklarını USD olarak da üretebilir, aktarabilir ve özelleştirebilir, böylece gerçek zamanlı motorlar veya DCC'ler için hazırlanmış bir karakter ayrı bir yeniden modelleme geçişi olmadan Omniverse tabanlı bir hatta da beslenebilir. Bu, Pipeline & Export'un başka yerlerinde anlatılan FBX ve Live Link yollarının yerini almak yerine onların yanında durur: hangi formatın kullanılacağı, hedef aracın USD mi yoksa FBX mi beklediğine bağlıdır.",
    },
    whereToFind: {
      en: "File > Export, with USD as one of the available export formats alongside FBX.",
      tr: "File > Export, FBX'in yanında mevcut dışa aktarım formatlarından biri olarak USD.",
    },
    official: true,
  },
  {
    id: "pipe-fbx-export",
    category: "pipelineExport",
    name: "FBX Export",
    subgroup: "Native Export",
    summary: {
      en: "Character Creator's core, engine-agnostic export path: FBX files carrying a character's mesh, skeleton, motion or all three, usable in any FBX-compatible 3D tool even without an Auto Setup plugin.",
      tr: "Character Creator'ın çekirdek, motor bağımsız dışa aktarım yolu: bir karakterin mesh'ini, iskeletini veya hareketini (ya da üçünü birden) taşıyan, bir Auto Setup eklentisi olmadan da her FBX uyumlu 3D araçta kullanılabilen FBX dosyaları.",
    },
    detail: {
      en: "The Export menu offers three scopes (the full scene's characters/props/camera, a single clothed character, or just the current selection) and an FBX Options setting that decides whether the file carries Mesh, Motion, or Mesh and Motion together; a subdivided-mesh export is available for tools that expect a smoothed, non-HD-subdivision surface. Texture size and format are set separately in the same export dialog, so a character can be exported once at production resolution and again at a lighter preview resolution without redoing the rest of the setup. This is the fallback that always works: every Auto Setup plugin and DCC bridge in this category ultimately builds on the same FBX export, they just automate what happens to the file afterward inside the destination tool.",
      tr: "Export menüsü üç kapsam sunar (sahnedeki tüm karakterler/prop'lar/kamera, tek bir giyimli karakter, ya da yalnızca güncel seçim) ve dosyanın Mesh mi, Motion mu, yoksa Mesh ve Motion'ı birlikte mi taşıyacağını belirleyen bir FBX Options ayarı bulunur; düzleştirilmiş, HD-subdivision olmayan bir yüzey bekleyen araçlar için subdivided mesh dışa aktarımı da mevcuttur. Doku boyutu ve formatı aynı dışa aktarım penceresinde ayrıca ayarlanır, böylece bir karakter bir kez prodüksiyon çözünürlüğünde, bir kez de daha hafif bir önizleme çözünürlüğünde, geri kalan kurulumu tekrarlamadan dışa aktarılabilir. Bu her zaman çalışan yedek yoldur: bu kategorideki her Auto Setup eklentisi ve DCC köprüsü sonuçta aynı FBX dışa aktarımının üzerine kuruludur, sadece dosyaya hedef araç içinde ne olacağını otomatikleştirirler.",
    },
    whereToFind: {
      en: "File > Export > FBX.",
      tr: "File > Export > FBX.",
    },
    official: true,
  },
];
