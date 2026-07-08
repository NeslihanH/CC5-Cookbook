import type { FeatureEntry } from "./types";

// AccuRIG, Facial Profile/HD Facial Profile, MetaHuman-compatible rig,
// characterization/retargeting, motion capture compatibility, Smart Hair
// physics.
export const riggingAnimationEntries: FeatureEntry[] = [
  {
    id: "rig-accurig",
    category: "riggingAnimation",
    name: "AccuRIG",
    subgroup: "Rigging",
    summary: {
      en: "An automatic rigging engine bundled with Character Creator that puts a working skeleton on almost any humanoid mesh, from a T/A-pose scan to a sculpted or AI-generated model.",
      tr: "Character Creator ile birlikte gelen, neredeyse her insansı mesh'e (T/A pozundaki bir taramadan heykeltıraşlanmış ya da yapay zekayla üretilmiş bir modele kadar) çalışan bir iskelet kazandıran otomatik rigging motoru.",
    },
    detail: {
      en: "AccuRIG estimates joint placement directly from a character's geometry (working from A-pose or T-pose meshes, single or multi-mesh) and can also re-rig a character onto its own existing skeleton, which keeps facial bones intact for characters that already carry facial animation. Skin weights follow patterns modeled on how a professional rigger would paint them, and the joint layout itself can be edited to fit non-standard body types or creature proportions rather than forcing everything onto one fixed skeleton. Because AccuRIG output is exported as standard FBX or USD, a character rigged this way is not locked into the Reallusion ecosystem: it can move on to Unreal, Unity, Blender, Maya, 3ds Max, MotionBuilder, Cinema 4D or Omniverse with the rig intact.",
      tr: "AccuRIG, eklem konumlarını doğrudan karakterin geometrisinden tahmin eder (A-pozu ya da T-pozu mesh'lerle, tek ya da çoklu mesh ile çalışır) ve bir karakteri kendi mevcut iskeleti üzerine yeniden rigleyebilir; bu da zaten yüz animasyonu taşıyan karakterlerde yüz kemiklerini bozmadan korur. Deri ağırlıkları (skin weights), profesyonel bir rigger'ın boyama alışkanlıklarını taklit eden desenler izler; eklem yerleşiminin kendisi de her şeyi tek bir sabit iskelete zorlamak yerine standart dışı vücut tipleri veya yaratık oranlarına uyacak şekilde düzenlenebilir. AccuRIG çıktısı standart FBX veya USD olarak dışa aktarıldığından, bu şekilde riglenen bir karakter Reallusion ekosistemine kilitlenmez: rig'i bozulmadan Unreal, Unity, Blender, Maya, 3ds Max, MotionBuilder, Cinema 4D veya Omniverse'e geçebilir.",
    },
    whereToFind: {
      en: "Available inside Character Creator's rigging workflow, or as the free standalone AccuRIG application.",
      tr: "Character Creator'ın rigging iş akışı içinde, ya da ücretsiz bağımsız AccuRIG uygulaması olarak kullanılabilir.",
    },
    official: true,
  },
  {
    id: "rig-facial-profile",
    category: "riggingAnimation",
    name: "Facial Profile",
    subgroup: "Facial Rig",
    summary: {
      en: "The blendshape-based facial rig every CC character carries, with an HD tier that expands it from 160 to 390 sliders for film-level micro-expression control.",
      tr: "Her CC karakterinin taşıdığı blendshape tabanlı yüz rig'i; film seviyesinde mikro ifade kontrolü için kaydırıcı sayısını 160'tan 390'a çıkaran bir HD katmanıyla birlikte gelir.",
    },
    detail: {
      en: "The standard Facial Profile drives a character's expressions through named blendshape sliders that map cleanly onto Motion LIVE and most facial mocap sources. The HD Facial Profile builds on top of this with 262 Facial Expression sliders, 128 Corrective Expression sliders that keep blended expressions (especially around the mouth) from distorting into anatomically implausible shapes, and 52 non-linear sliders aimed specifically at getting cleaner results from motion-captured performances. Sliders can be posed by hand through the HD Face Control panel, sculpted expression-by-expression with Face Puppet, or keyed directly in the Face Key Editor, and the whole profile stays compatible with Unreal Engine's facial system and MetaHuman Animator.",
      tr: "Standart Facial Profile, karakterin ifadelerini Motion LIVE ve çoğu yüz mocap kaynağıyla temiz biçimde eşleşen adlandırılmış blendshape kaydırıcıları üzerinden yönetir. HD Facial Profile bunun üzerine 262 Facial Expression kaydırıcısı, özellikle ağız çevresinde harmanlanan ifadelerin anatomik olarak imkansız şekillere bozulmasını önleyen 128 Corrective Expression kaydırıcısı ve mocap ile yakalanan performanslardan daha temiz sonuç almayı hedefleyen 52 doğrusal olmayan (non-linear) kaydırıcı ekler. Kaydırıcılar HD Face Control paneli üzerinden elle konumlandırılabilir, Face Puppet ile ifade ifade heykeltıraşlanabilir veya doğrudan Face Key Editor'da keylenebilir; tüm profil Unreal Engine'in yüz sistemi ve MetaHuman Animator ile uyumlu kalır.",
    },
    whereToFind: {
      en: "Modify panel's facial section (HD Face Control panel), or the Face Puppet / Face Key Editor tools for posing and keying expressions.",
      tr: "Modify panelinin yüz bölümü (HD Face Control paneli), ya da ifadeleri konumlandırmak ve keylemek için Face Puppet / Face Key Editor araçları.",
    },
    newInCC5: true,
    official: true,
  },
  {
    id: "rig-metahuman-rig",
    category: "riggingAnimation",
    name: "MetaHuman-Compatible Rig",
    subgroup: "Skeleton & Retargeting",
    summary: {
      en: "CC5 characters use the same facial control structure and skeleton layout as Epic's MetaHuman, so motion and expression data can move between the two without custom retargeting.",
      tr: "CC5 karakterleri, Epic'in MetaHuman'ıyla aynı yüz kontrol yapısını ve iskelet düzenini kullanır; bu sayede hareket ve ifade verisi iki sistem arasında özel bir retargeting olmadan taşınabilir.",
    },
    detail: {
      en: "Historically, moving animation between Character Creator and MetaHuman meant building a retargeting setup by hand, since the two systems used different bone hierarchies and facial rigs. CC5 characters are built on a skeleton and facial control structure that matches MetaHuman directly, so mocap clips, hand-keyed animation and facial performances captured for one can be applied to the other without an intermediate retargeting step. This is what makes CC5 characters compatible out of the box with Unreal Engine's MetaHuman Animator facial capture, MetaHuman's body mocap pipeline and its audio-to-face lipsync, inside a single Unreal-based workflow.",
      tr: "Geçmişte Character Creator ile MetaHuman arasında animasyon taşımak elle kurulan bir retargeting kurulumu gerektiriyordu, çünkü iki sistem farklı kemik hiyerarşileri ve yüz rig'leri kullanıyordu. CC5 karakterleri doğrudan MetaHuman ile eşleşen bir iskelet ve yüz kontrol yapısı üzerine kuruludur; böylece biri için yakalanan mocap klipleri, elle keylenen animasyonlar ve yüz performansları, aradaki retargeting adımına gerek kalmadan diğerine uygulanabilir. Bu da CC5 karakterlerini, tek bir Unreal tabanlı iş akışı içinde Unreal Engine'in MetaHuman Animator yüz yakalama sistemi, MetaHuman'ın beden mocap hattı ve ses-yüz senkronizasyonuyla kutudan çıktığı gibi uyumlu hale getirir.",
    },
    whereToFind: {
      en: "Automatic for CC5's Standard-classified characters; no separate setup panel is needed to enable it.",
      tr: "CC5'in Standard sınıflandırmasındaki karakterler için otomatiktir; etkinleştirmek için ayrı bir kurulum paneline gerek yoktur.",
    },
    newInCC5: true,
    official: true,
  },
  {
    id: "rig-characterization-retargeting",
    category: "riggingAnimation",
    name: "Characterization & Motion Retargeting",
    subgroup: "Skeleton & Retargeting",
    summary: {
      en: "A bone-mapping workflow that assigns a custom or imported skeleton to Character Creator's Standard/Humanoid categories, so it can play any compatible motion clip through HumanIK-based retargeting.",
      tr: "Özel veya içe aktarılmış bir iskeleti Character Creator'ın Standard/Humanoid kategorilerine atayan bir kemik eşleme (bone-mapping) iş akışı; bu sayede karakter, HumanIK tabanlı retargeting ile uyumlu her hareket klibini oynatabilir.",
    },
    detail: {
      en: "Characterization is the process of mapping a character's joints onto Character Creator's reference skeleton; once mapped, the character is treated as Standard or Humanoid (see the character-classification note under HD Base Characters) and gains access to the full library of iClone and ActorCore motion clips (.rlMotion, and .iMotionPlus for combined body and facial data) without hand animating from scratch. Retargeting is handled by a HumanIK-based engine that adjusts a motion automatically to a character's proportions, so a motion authored on one body scale can play on a taller or shorter character without the feet sliding or the character losing contact with the ground. Characters that keep their own unique bone structure instead (the Creature category) can still be animated and IK-edited, but they fall outside this shared motion library since their skeleton has no direct equivalent to retarget from.",
      tr: "Characterization, bir karakterin eklemlerini Character Creator'ın referans iskeletine eşleme işlemidir; eşleme yapıldıktan sonra karakter Standard veya Humanoid olarak işlem görür (bkz. HD Base Characters girdisindeki karakter sınıflandırması notu) ve sıfırdan elle animasyon yapmadan iClone ile ActorCore'un tüm hareket kütüphanesine (.rlMotion, beden ve yüz verisini birlikte taşıyan .iMotionPlus) erişim kazanır. Retargeting, bir hareketi otomatik olarak karakterin oranlarına uyarlayan HumanIK tabanlı bir motor tarafından yönetilir; böylece bir vücut ölçeğinde hazırlanmış bir hareket, ayaklar kaymadan veya karakter yerle temasını kaybetmeden daha uzun ya da kısa bir karakterde oynatılabilir. Kendi benzersiz kemik yapısını koruyan karakterler (Creature kategorisi) yine animasyon ve IK düzenlemesi alabilir, ancak iskeletlerinin doğrudan bir karşılığı olmadığından bu paylaşılan hareket kütüphanesinin dışında kalır.",
    },
    whereToFind: {
      en: "Modify panel > Skeleton / Bone Mapping tab, when characterizing a custom or imported rig.",
      tr: "Özel veya içe aktarılmış bir rig'i characterize ederken, Modify paneli > Skeleton / Bone Mapping sekmesi.",
    },
    official: true,
  },
  {
    id: "rig-mocap-compatibility",
    category: "riggingAnimation",
    name: "Motion Capture Compatibility",
    subgroup: "Motion Capture",
    summary: {
      en: "CC5 characters are built to receive motion capture data rather than record it directly: their standard rig and facial profile make them a ready target for Reallusion's own and third-party mocap tools.",
      tr: "CC5 karakterleri mocap verisini doğrudan kaydetmek yerine almak üzere kurulmuştur: standart rig ve yüz profilleri, Reallusion'ın kendi ve üçüncü taraf mocap araçları için hazır bir hedef oluşturur.",
    },
    detail: {
      en: "Live capture itself happens outside Character Creator, mainly through iClone's Motion LIVE, which streams body and facial data in real time onto a Standard-rigged CC character. On the face side, Reallusion's own AccuFACE reads a webcam or an iPhone through the Live Link Face connector for markerless facial capture, and the same facial profile is compatible with Unreal's MetaHuman Animator for higher-end facial capture. On the body side, third-party suits and trackers such as Rokoko plug into the same pipeline through dedicated Motion LIVE plugins. Because all of these paths ultimately produce a standard motion clip (.rlMotion or .iMotionPlus) or drive the standard facial sliders, the captured performance can be previewed, trimmed and applied to a CC5 character the same way a library motion would be, then retargeted to other Standard-rigged characters.",
      tr: "Canlı yakalamanın kendisi Character Creator'ın dışında, çoğunlukla iClone'un Motion LIVE'ı üzerinden gerçekleşir; bu araç beden ve yüz verisini gerçek zamanlı olarak Standard rigli bir CC karakterine akıtır. Yüz tarafında, Reallusion'ın kendi AccuFACE'i işaretsiz yüz yakalama için bir webcam'i veya Live Link Face bağlayıcısı üzerinden bir iPhone'u okur; aynı yüz profili, daha üst seviye yüz yakalama için Unreal'in MetaHuman Animator'ıyla da uyumludur. Beden tarafında ise Rokoko gibi üçüncü taraf giysiler ve takip cihazları, kendi Motion LIVE eklentileri aracılığıyla aynı hatta bağlanır. Tüm bu yollar sonuçta standart bir hareket klibi (.rlMotion veya .iMotionPlus) ürettiğinden veya standart yüz kaydırıcılarını sürdüğünden, yakalanan performans bir kütüphane hareketiyle aynı şekilde önizlenebilir, kırpılabilir, bir CC5 karakterine uygulanabilir ve ardından başka Standard rigli karakterlere yeniden hedeflenebilir (retarget).",
    },
    whereToFind: {
      en: "Not set inside Character Creator itself; captured or imported through iClone's Motion LIVE, then applied to a CC5 character as a motion clip.",
      tr: "Character Creator'ın kendi içinde ayarlanmaz; iClone'un Motion LIVE'ı üzerinden yakalanır veya içe aktarılır, ardından CC5 karakterine bir hareket klibi olarak uygulanır.",
    },
    official: true,
  },
  {
    id: "rig-smart-hair-physics",
    category: "riggingAnimation",
    name: "Smart Hair Physics",
    subgroup: "Physics",
    summary: {
      en: "Motion-time physics for Smart Hair, using the same soft-body engine as garment Soft Cloth but with hair-specific presets for how strands and card clusters follow movement.",
      tr: "Kıyafetlerdeki Soft Cloth ile aynı yumuşak-cisim motorunu kullanan, ancak tellerin ve kart kümelerinin harekete nasıl eşlik edeceğine dair saça özel hazır ayarlara sahip, hareket anındaki Smart Hair fiziği.",
    },
    detail: {
      en: "Smart Hair physics is enabled per hair object from the Physics > Hair tab, and reuses Character Creator's soft-cloth simulation underneath rather than a separate hair-only engine, so the same weight-map logic (which parts move freely versus stay anchored) and friction/elasticity properties apply. Ready-made templates can be applied to a hairstyle with a double-click and previewed against embedded test motions before committing, which is faster than tuning every parameter by hand for a first pass. From there the Property panel exposes the underlying soft-cloth values for fine adjustment, the same set of controls covered in the Soft Cloth entry, just scoped to a hair object instead of a garment.",
      tr: "Smart Hair fiziği, her saç nesnesi için Physics > Hair sekmesinden açılır ve altyapıda ayrı bir saça özel motor yerine Character Creator'ın soft-cloth simülasyonunu yeniden kullanır; bu sayede aynı ağırlık haritası mantığı (hangi kısımların serbestçe hareket edeceği, hangilerinin sabit kalacağı) ile sürtünme/esneklik özellikleri burada da geçerlidir. Hazır şablonlar bir saç stiline çift tıklamayla uygulanabilir ve kesinleştirmeden önce gömülü test hareketlerine karşı önizlenebilir; bu da ilk geçiş için her parametreyi elle ayarlamaktan daha hızlıdır. Buradan sonra Property paneli, altta yatan soft-cloth değerlerini ince ayar için açığa çıkarır; Soft Cloth girdisinde anlatılan aynı kontrol seti, sadece bir kıyafet yerine bir saç nesnesine uygulanmış halidir.",
    },
    whereToFind: {
      en: "Modify panel > Physics > Hair tab, on a selected hair object.",
      tr: "Seçili bir saç nesnesinde, Modify paneli > Physics > Hair sekmesi.",
    },
    official: true,
  },
];
