import type { Recipe } from "./types";

// End-to-end, step-by-step workflows. Each recipe links pieces already
// documented in Core Creation / Rigging & Animation / Pipeline & Export /
// Ecosystem (M2-M5) into an ordered sequence rather than re-explaining them.
export const recipes: Recipe[] = [
  {
    id: "recipe-base-to-unreal",
    category: "recipe",
    title: {
      en: "From Base Character to Unreal-Ready Character",
      tr: "Temel Karakterden Unreal'e Hazır Karaktere",
    },
    goal: {
      en: "Take a stock HD base character all the way to a fully shaded, animatable character inside Unreal Engine, using CC5's own tools at each stage instead of hand-rebuilding materials or rigs on the Unreal side.",
      tr: "Materyalleri veya rig'i Unreal tarafında elle yeniden kurmak yerine, her aşamada CC5'in kendi araçlarını kullanarak, hazır bir HD temel karakteri Unreal Engine içinde tam şekilde shade edilmiş, animasyona hazır bir karaktere dönüştürmek.",
    },
    steps: [
      {
        en: "Start from an HD Base Character and pick a body style and head shape close to your target, since Standard-classified characters keep full facial-expression editing and swappable clothing further down this recipe.",
        tr: "Bir HD Base Character ile başla, hedefine yakın bir vücut stili ve baş şekli seç; Standard sınıflandırmasındaki karakterler bu tarifin ilerleyen adımlarında tam yüz ifadesi düzenleme ve değiştirilebilir kıyafet desteğini korur.",
      },
      {
        en: "Refine proportions and anatomical detail with HD Morphs; raise the subdivision level first if you need finer sculpting than the sliders alone provide.",
        tr: "Oranları ve anatomik detayı HD Morphs ile inceltir; kaydırıcıların tek başına vermediği bir incelik gerekiyorsa önce subdivision seviyesini yükselt.",
      },
      {
        en: "Build the skin and any makeup in SkinGen, layering effects instead of painting a flat texture by hand.",
        tr: "Cildi ve varsa makyajı SkinGen'de kur; düz bir dokuyu elle boyamak yerine efektleri katman katman ekle.",
      },
      {
        en: "Add hair, brows and beard with Smart Hair, assembling Elements into a Group/Style rather than starting from a blank hairstyle.",
        tr: "Smart Hair ile saç, kaş ve sakal ekle; boş bir stilden başlamak yerine Elements'i bir Group/Style içinde bir araya getir.",
      },
      {
        en: "Dress the character and enable Soft Cloth physics on any garment that needs to move naturally, painting a weight map for the parts that should stay pinned to the body.",
        tr: "Karakteri giydir ve doğal hareket etmesi gereken her kıyafette Soft Cloth fiziğini aç; bedene sabit kalması gereken kısımlar için bir ağırlık haritası boya.",
      },
      {
        en: "Convert skin, eyes and hair to the Digital Human Shader using the built-in presets, so materials read correctly under real-time lighting instead of looking flat.",
        tr: "Cilt, göz ve saçı yerleşik preset'leri kullanarak Digital Human Shader'a çevir; böylece materyaller gerçek zamanlı aydınlatma altında düz değil doğru görünür.",
      },
      {
        en: "Install Auto Setup for Unreal Engine if you have not already, then send the character to a running Unreal project; the plugin converts materials, sets up a Control Rig and wires Live Link automatically.",
        tr: "Henüz kurmadıysan Auto Setup for Unreal Engine'i kur, ardından karakteri çalışan bir Unreal projesine gönder; eklenti materyalleri dönüştürür, bir Control Rig kurar ve Live Link'i otomatik bağlar.",
      },
      {
        en: "In Unreal, confirm the character is driven correctly through Live Link and, if you plan to use MetaHuman Animator or MetaHuman mocap data, verify the facial and body motion apply without extra retargeting, since CC5's skeleton is already MetaHuman-compatible.",
        tr: "Unreal'de karakterin Live Link üzerinden doğru şekilde sürüldüğünü doğrula; MetaHuman Animator veya MetaHuman mocap verisi kullanmayı planlıyorsan, CC5'in iskeleti zaten MetaHuman-uyumlu olduğundan yüz ve beden hareketinin ekstra retargeting olmadan uygulandığını kontrol et.",
      },
    ],
    targetTool: "Unreal Engine",
    notes: {
      en: "Every step above is documented in more detail under its own Core Creation, Rigging & Animation or Pipeline & Export entry; this recipe is the order to do them in, not a replacement for reading them.",
      tr: "Yukarıdaki her adım, kendi Core Creation, Rigging & Animation veya Pipeline & Export girdisinde daha detaylı anlatılmıştır; bu tarif bunları hangi sırayla yapacağını gösterir, onları okumanın yerine geçmez.",
    },
    official: true,
  },
  {
    id: "recipe-zbrush-roundtrip",
    category: "recipe",
    title: {
      en: "Sculpting Extra Detail in ZBrush and Bringing It Back",
      tr: "ZBrush'ta Ekstra Detay Heykeltıraşlamak ve Geri Getirmek",
    },
    goal: {
      en: "Push a character's sculpted detail beyond what HD Morphs sliders cover, using ZBrush for the sculpting itself while keeping the result compatible with Character Creator's subdivision levels.",
      tr: "Sonucu Character Creator'ın subdivision seviyeleriyle uyumlu tutarken, karakterin heykeltıraşlanmış detayını HD Morphs kaydırıcılarının kapsadığından öteye taşımak için heykeltıraşlığın kendisini ZBrush'ta yapmak.",
    },
    steps: [
      {
        en: "Set the character to the subdivision level you intend to sculpt at in Character Creator, since GoZ keeps morphs synchronized per level rather than sculpting a single fixed mesh.",
        tr: "Character Creator'da karakteri heykeltıraşlamayı planladığın subdivision seviyesine ayarla; GoZ, tek bir sabit mesh'i heykeltıraşlamak yerine morfları seviye başına senkronize tutar.",
      },
      {
        en: "Send the character to ZBrush with GoZ (or the GoZ+ workflow for body and expression morphs specifically).",
        tr: "Karakteri GoZ ile (ya da özellikle beden ve ifade morfları için GoZ+ iş akışıyla) ZBrush'a gönder.",
      },
      {
        en: "Sculpt the extra detail in ZBrush: skin pores, wrinkles, scars, or anything finer than the built-in HD Morphs sliders reach.",
        tr: "ZBrush'ta ekstra detayı heykeltıraşla: gözenekler, kırışıklıklar, yara izleri veya yerleşik HD Morphs kaydırıcılarının ulaşamadığı her şey.",
      },
      {
        en: "Send the mesh back to Character Creator with GoZ; the sculpted detail is baked back as texture maps for the subdivision level you worked at.",
        tr: "Mesh'i GoZ ile Character Creator'a geri gönder; heykeltıraşlanan detay, üzerinde çalıştığın subdivision seviyesi için doku haritası olarak geri aktarılır.",
      },
      {
        en: "Check the result at other subdivision levels and in SkinGen's layer stack, since the ZBrush detail sits alongside, not instead of, SkinGen's skin and makeup layers.",
        tr: "Sonucu diğer subdivision seviyelerinde ve SkinGen'in katman yığınında kontrol et; ZBrush detayı, SkinGen'in cilt ve makyaj katmanlarının yerine değil yanına oturur.",
      },
      {
        en: "Repeat the round trip as needed. Because GoZ is non-destructive, you can go back and forth multiple times while refining the sculpt.",
        tr: "Gerektiği kadar gidiş-dönüşü tekrarla. GoZ yıkıcı olmadığından, heykeltıraşlığı inceltirken iki araç arasında birden çok kez gidip gelebilirsin.",
      },
    ],
    targetTool: "ZBrush",
    official: true,
  },
  {
    id: "recipe-auto-rig-custom-model",
    category: "recipe",
    title: {
      en: "Auto-Rigging a Custom or Scanned Model",
      tr: "Özel veya Taranmış Bir Modeli Otomatik Rigleme",
    },
    goal: {
      en: "Take a T-pose or A-pose mesh that has no rig at all (a scan, an imported sculpt, or an AI-generated model) and get it animatable with the standard motion library, without hand-placing joints.",
      tr: "Hiç rig'i olmayan bir T-pozu veya A-pozu mesh'i (bir tarama, içe aktarılmış bir heykeltıraşlık ya da yapay zekayla üretilmiş bir model) eklemleri elle yerleştirmeden standart hareket kütüphanesiyle animasyona hazır hale getirmek.",
    },
    steps: [
      {
        en: "Import the mesh in A-pose or T-pose; single-mesh and multi-mesh models both work with AccuRIG.",
        tr: "Mesh'i A-pozu veya T-pozunda içe aktar; AccuRIG hem tek mesh hem de çoklu mesh modellerle çalışır.",
      },
      {
        en: "Run AccuRIG to estimate joint placement and skin weights automatically; adjust the joint layout by hand only if the model has non-standard proportions AccuRIG guessed wrong.",
        tr: "Eklem yerleşimini ve deri ağırlıklarını otomatik tahmin etmesi için AccuRIG'i çalıştır; eklem düzenini yalnızca model AccuRIG'in yanlış tahmin ettiği standart dışı oranlara sahipse elle ayarla.",
      },
      {
        en: "If the mesh already carries a rig and facial bones (for example, a character re-imported from another tool), use AccuRIG's re-rig option instead of a fresh rig, so the existing facial animation is not lost.",
        tr: "Mesh zaten bir rig ve yüz kemikleri taşıyorsa (örneğin başka bir araçtan yeniden içe aktarılan bir karakter), mevcut yüz animasyonunu kaybetmemek için sıfırdan rig yerine AccuRIG'in yeniden rigleme seçeneğini kullan.",
      },
      {
        en: "Characterize the result by mapping it onto Character Creator's reference skeleton; this is what classifies the character as Standard or Humanoid.",
        tr: "Sonucu Character Creator'ın referans iskeletine eşleyerek characterize et; karakteri Standard veya Humanoid olarak sınıflandıran şey budur.",
      },
      {
        en: "Once characterized, apply a motion from the iClone/ActorCore library and confirm it retargets cleanly, without foot sliding, at the character's actual proportions.",
        tr: "Characterize işleminden sonra iClone/ActorCore kütüphanesinden bir hareket uygula ve karakterin gerçek oranlarında ayaklar kaymadan temiz şekilde retarget edildiğini doğrula.",
      },
      {
        en: "If the character needs full facial-expression editing and swappable clothing rather than just body motion, confirm it landed in the Standard category and not Humanoid; only Standard characters get both.",
        tr: "Karakterin yalnızca beden hareketi değil tam yüz ifadesi düzenleme ve değiştirilebilir kıyafet desteği de alması gerekiyorsa, Humanoid değil Standard kategorisine düştüğünü doğrula; ikisini birden yalnızca Standard karakterler alır.",
      },
    ],
    official: true,
  },
  {
    id: "recipe-cloth-physics-setup",
    category: "recipe",
    title: {
      en: "Setting Up Realistic Cloth Physics",
      tr: "Gerçekçi Kumaş Fiziği Kurmak",
    },
    goal: {
      en: "Get a garment moving naturally with the body during animation, instead of looking like a rigid shrink-wrapped shell.",
      tr: "Bir kıyafeti, sert bir shrink-wrap kabuğu gibi görünmek yerine, animasyon sırasında bedenle doğal şekilde hareket eder hale getirmek.",
    },
    steps: [
      {
        en: "Fit or import the garment onto the character and confirm it fits cleanly at rest before touching physics.",
        tr: "Kıyafeti karaktere giydir veya içe aktar, fiziğe dokunmadan önce dinlenme pozunda düzgün oturduğunu doğrula.",
      },
      {
        en: "Select the garment and enable Soft Cloth from the Physics tab.",
        tr: "Kıyafeti seç ve Physics sekmesinden Soft Cloth'u aç.",
      },
      {
        en: "Paint a weight map on the garment: white for areas that should move freely (a hem, a cape), black for areas that should stay pinned (a waistband, shoulder seams), and gray values for a blend between the two.",
        tr: "Kıyafetin üzerine bir ağırlık haritası boya: serbestçe hareket etmesi gereken alanlar için beyaz (bir etek ucu, bir pelerin), sabit kalması gereken alanlar için siyah (bir bel bandı, omuz dikişleri), ikisi arasında bir geçiş için gri tonlar.",
      },
      {
        en: "Apply a preset close to the fabric you are simulating (leather, silk, denim) as a starting point rather than tuning friction and elasticity from zero.",
        tr: "Sürtünme ve esnekliği sıfırdan ayarlamak yerine, simüle ettiğin kumaşa (deri, ipek, kot) yakın bir preset'i başlangıç noktası olarak uygula.",
      },
      {
        en: "Preview the result against a motion clip, not just a static pose, since cloth behavior that looks fine standing still often reveals problems (clipping, over-swinging) once the character moves.",
        tr: "Sonucu yalnızca statik bir pozda değil bir hareket klibine karşı önizle; dururken iyi görünen kumaş davranışı, karakter hareket ettiğinde genelde sorunları (mesh'e girme, aşırı sallanma) ortaya çıkarır.",
      },
      {
        en: "For shots where the real-time result is not convincing enough, export the animated character as FBX, simulate in Marvelous Designer, and bring the simulation back as an Alembic file for frame-accurate playback instead of continuing to tune Soft Cloth parameters.",
        tr: "Gerçek zamanlı sonucun yeterince ikna edici olmadığı çekimlerde, Soft Cloth parametrelerini ayarlamaya devam etmek yerine animasyonlu karakteri FBX olarak dışa aktar, Marvelous Designer'da simüle et ve simülasyonu kare kare doğru oynatım için bir Alembic dosyası olarak geri getir.",
      },
    ],
    official: true,
  },
  {
    id: "recipe-facial-mocap",
    category: "recipe",
    title: {
      en: "Capturing and Reusing Facial Mocap",
      tr: "Yüz Mocap'ini Yakalamak ve Yeniden Kullanmak",
    },
    goal: {
      en: "Record a facial performance once and get it onto a CC5 character (and, from there, onto other Standard-rigged characters) without redoing the capture for each character.",
      tr: "Bir yüz performansını bir kez kaydedip, her karakter için yakalamayı tekrarlamadan bir CC5 karakterine ve oradan diğer Standard rigli karakterlere taşımak.",
    },
    steps: [
      {
        en: "Confirm the character uses the HD Facial Profile if you want the full 390-slider range for micro-expressions; the standard Facial Profile also works but with less range.",
        tr: "Mikro ifadeler için tam 390 kaydırıcı aralığını istiyorsan karakterin HD Facial Profile kullandığını doğrula; standart Facial Profile de çalışır ama daha dar bir aralıkla.",
      },
      {
        en: "In iClone, open Motion LIVE and choose a facial capture source: AccuFACE with a webcam or iPhone (via Live Link Face), or Unreal's MetaHuman Animator for higher-end capture.",
        tr: "iClone'da Motion LIVE'ı aç ve bir yüz yakalama kaynağı seç: webcam veya iPhone ile (Live Link Face üzerinden) AccuFACE, ya da daha üst seviye yakalama için Unreal'in MetaHuman Animator'ı.",
      },
      {
        en: "Record the performance onto a Standard-rigged character; Motion LIVE streams the facial data onto the character's sliders in real time.",
        tr: "Performansı Standard rigli bir karaktere kaydet; Motion LIVE yüz verisini karakterin kaydırıcılarına gerçek zamanlı olarak akıtır.",
      },
      {
        en: "Trim and clean up the resulting motion clip, using Face Puppet or the Face Key Editor for any manual correction the capture missed.",
        tr: "Yakalamanın kaçırdığı her elle düzeltme için Face Puppet veya Face Key Editor'ı kullanarak ortaya çıkan hareket klibini kırp ve temizle.",
      },
      {
        en: "Save the cleaned clip as an rlMotion/iMotionPlus file so it behaves like any other library motion from this point on.",
        tr: "Temizlenmiş klibi bir rlMotion/iMotionPlus dosyası olarak kaydet; böylece bu noktadan sonra diğer kütüphane hareketleri gibi davranır.",
      },
      {
        en: "Apply the same clip to a different Standard-rigged character to confirm it retargets correctly; if the second character shares CC5's MetaHuman-compatible rig, this also works going the other direction with MetaHuman facial data.",
        tr: "Doğru retarget edildiğini doğrulamak için aynı klibi farklı bir Standard rigli karaktere uygula; ikinci karakter CC5'in MetaHuman-uyumlu rig'ini paylaşıyorsa bu, MetaHuman yüz verisiyle ters yönde de çalışır.",
      },
    ],
    official: true,
  },
  {
    id: "recipe-substance-painter-texturing",
    category: "recipe",
    title: {
      en: "Texturing a ZBrush Sculpt in Substance Painter",
      tr: "Bir ZBrush Heykeltıraşlığını Substance Painter'da Dokulandırmak",
    },
    goal: {
      en: "Get clean, production-ready textures onto a character (or a prop/garment) that was sculpted or detailed in ZBrush, without fighting mismatched UVs in Substance Painter.",
      tr: "ZBrush'ta heykeltıraşlanmış veya detaylandırılmış bir karakteri (ya da bir prop/kıyafeti), Substance Painter'da uyumsuz UV'lerle uğraşmadan temiz, prodüksiyona hazır dokularla donatmak.",
    },
    steps: [
      {
        en: "Sculpt or detail the asset in ZBrush via the GoZ bridge, as described in the ZBrush round-trip recipe above.",
        tr: "Yukarıdaki ZBrush gidiş-dönüş tarifinde anlatıldığı gibi, varlığı GoZ köprüsü üzerinden ZBrush'ta heykeltıraşla veya detaylandır.",
      },
      {
        en: "Export the asset from Character Creator (or directly from the GoZ session) as OBJ with its UDIM layout intact, using the Substance Painter bridge rather than a plain OBJ export.",
        tr: "Varlığı Character Creator'dan (ya da doğrudan GoZ oturumundan) düz bir OBJ dışa aktarımı yerine Substance Painter köprüsünü kullanarak UDIM düzeni bozulmadan OBJ olarak dışa aktar.",
      },
      {
        en: "Import the OBJ into Substance Painter; because the UDIM tiles are already laid out correctly, each part of the asset can be painted at full resolution without manual UV cleanup.",
        tr: "OBJ'yi Substance Painter'a içe aktar; UDIM parçaları zaten doğru yerleştirildiğinden, varlığın her bölümü elle UV temizliği yapmadan tam çözünürlükte boyanabilir.",
      },
      {
        en: "Paint the textures in Substance Painter as usual, then export the resulting maps as standard PBR channels (Base Color, Metallic, Roughness, Normal).",
        tr: "Dokuları Substance Painter'da her zamanki gibi boya, ardından ortaya çıkan haritaları standart PBR kanalları (Base Color, Metallic, Roughness, Normal) olarak dışa aktar.",
      },
      {
        en: "Bring the textures back into Character Creator and assign them in the Material tab's Texture Settings.",
        tr: "Dokuları Character Creator'a geri getir ve Material sekmesinin Texture Settings bölümünde ata.",
      },
      {
        en: "If the asset is a character's skin, eyes or hair rather than a prop or garment, convert the material to the Digital Human Shader using the built-in presets instead of leaving it as plain PBR.",
        tr: "Varlık bir prop veya kıyafet değil karakterin cildi, gözü ya da saçıysa, materyali düz PBR olarak bırakmak yerine yerleşik preset'leri kullanarak Digital Human Shader'a çevir.",
      },
    ],
    targetTool: "Substance Painter",
    official: true,
  },
];
