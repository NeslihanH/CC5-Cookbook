import type { BestPractice } from "./types";

// Beginner / Intermediate / Expert tips. Builds on facts already documented
// in M2-M6; no new research beyond what those milestones verified.
export const bestPractices: BestPractice[] = [
  {
    id: "practice-standard-classification",
    category: "practice",
    skillLevel: "beginner",
    title: {
      en: "Confirm Standard Classification Before Heavy Customization",
      tr: "Yoğun Özelleştirmeden Önce Standard Sınıflandırmasını Doğrula",
    },
    rule: {
      en: "Before investing time customizing a character, confirm it is classified Standard, not Humanoid or Creature.",
      tr: "Bir karakteri özelleştirmeye zaman ayırmadan önce, karakterin Humanoid veya Creature değil Standard olarak sınıflandırıldığını doğrula.",
    },
    detail: {
      en: "Only Standard characters get full facial-expression editing and swappable clothing; Humanoid characters can reuse motion but not swap parts, and Creature characters keep their own skeleton with no facial or part editing at all. This matters most for imported or scanned models: after running AccuRIG and characterizing the result, check which category it landed in before building out SkinGen layers, Smart Hair or an outfit, since discovering the classification is wrong after hours of customization means redoing that work on a properly classified character.",
      tr: "Yalnızca Standard karakterler tam yüz ifadesi düzenleme ve değiştirilebilir kıyafet desteği alır; Humanoid karakterler hareketi yeniden kullanabilir ama parça değiştiremez, Creature karakterler ise kendi iskeletini korur ve hiç yüz veya parça düzenlemesi almaz. Bu özellikle içe aktarılan veya taranmış modellerde önemlidir: AccuRIG'i çalıştırıp sonucu characterize ettikten sonra, SkinGen katmanları, Smart Hair veya bir kıyafet kurmadan önce hangi kategoriye düştüğünü kontrol et; sınıflandırmanın yanlış olduğunu saatlerce özelleştirmeden sonra fark etmek, o işi doğru sınıflandırılmış bir karakterde tekrarlamak anlamına gelir.",
    },
    official: true,
  },
  {
    id: "practice-skingen-layers",
    category: "practice",
    skillLevel: "beginner",
    title: {
      en: "Build Skin Through SkinGen Layers, Not Manual Texture Fixes",
      tr: "Cildi Elle Doku Düzeltmesiyle Değil SkinGen Katmanlarıyla Kur",
    },
    rule: {
      en: "Adjust skin and makeup with SkinGen's layer stack and sliders instead of opening the flattened texture in an image editor to fix small issues.",
      tr: "Cilt ve makyajı, küçük sorunları düzeltmek için düzleştirilmiş dokuyu bir görüntü editöründe açmak yerine, SkinGen'in katman yığını ve kaydırıcılarıyla ayarla.",
    },
    detail: {
      en: "A quick fix painted directly onto a baked texture is invisible to SkinGen's layer stack, so it silently breaks the moment a layer above or below it is toggled, reordered or adjusted, and it does not travel if the skin setup is reused on another character. Staying inside SkinGen's layers keeps every adjustment editable and reusable, at the cost of a small learning curve compared to just painting over a problem.",
      tr: "Pişirilmiş bir dokunun üzerine doğrudan boyanan hızlı bir düzeltme, SkinGen'in katman yığını için görünmezdir; bu yüzden üstündeki veya altındaki bir katman açılıp kapatıldığında, sıralaması değiştirildiğinde ya da ayarlandığında sessizce bozulur, ayrıca cilt kurulumu başka bir karakterde yeniden kullanılırsa bu düzeltme oraya taşınmaz. SkinGen katmanlarının içinde kalmak, bir sorunun üzerini boyamaya kıyasla küçük bir öğrenme eğrisi pahasına, her ayarı düzenlenebilir ve yeniden kullanılabilir tutar.",
    },
    official: false,
  },
  {
    id: "practice-physics-preview-motion",
    category: "practice",
    skillLevel: "beginner",
    title: {
      en: "Preview Physics Against a Motion Clip, Not Just a Static Pose",
      tr: "Fiziği Yalnızca Statik Bir Pozda Değil Bir Hareket Klibine Karşı Önizle",
    },
    rule: {
      en: "Before finalizing a weight map for Soft Cloth or Smart Hair physics, preview it against an actual motion clip, not just the character standing still.",
      tr: "Soft Cloth veya Smart Hair fiziği için bir ağırlık haritasını kesinleştirmeden önce, karakter sadece dururken değil gerçek bir hareket klibine karşı önizle.",
    },
    detail: {
      en: "Physics settings that look correct on a static or idle pose routinely reveal problems only once the character moves: cloth clipping through the body on a big step, a cape over-swinging on a turn, or hair losing its shape during a run. Catching this during setup, using the embedded test motions available for Smart Hair or any library motion clip for garments, is far cheaper than discovering it in a final render.",
      tr: "Statik veya boşta duran bir pozda doğru görünen fizik ayarları, çoğunlukla ancak karakter hareket ettiğinde sorun çıkarır: büyük bir adımda kumaşın bedene girmesi, bir dönüşte pelerinin aşırı sallanması ya da koşarken saçın şeklini kaybetmesi gibi. Bunu kurulum aşamasında, Smart Hair için gömülü test hareketlerini ya da kıyafetler için herhangi bir kütüphane hareket klibini kullanarak yakalamak, bunu final render'da fark etmekten çok daha ucuzdur.",
    },
    official: true,
  },
  {
    id: "practice-subdivision-intent",
    category: "practice",
    skillLevel: "intermediate",
    title: {
      en: "Match Subdivision Level to What You Actually Need to Sculpt",
      tr: "Subdivision Seviyesini Gerçekte Heykeltıraşlaman Gerekene Göre Ayarla",
    },
    rule: {
      en: "Raise a character's subdivision level only as far as the detail you are adding actually requires, instead of maxing it out by default.",
      tr: "Bir karakterin subdivision seviyesini varsayılan olarak en üste çekmek yerine, eklediğin detayın gerçekten gerektirdiği kadar yükselt.",
    },
    detail: {
      en: "Higher subdivision means a heavier mesh to work with inside Character Creator and a larger round trip every time the character goes to ZBrush through GoZ, since morphs and sculpted detail are tracked per subdivision level. A character that only needs HD Morphs-level anatomical detail does not benefit from being pushed to the highest subdivision available; save that for characters that are genuinely getting a ZBrush pass for pores, scars or other fine sculpted detail.",
      tr: "Daha yüksek subdivision, Character Creator içinde çalışılacak daha ağır bir mesh ve karakter GoZ ile ZBrush'a her gittiğinde daha büyük bir gidiş-dönüş anlamına gelir, çünkü morflar ve heykeltıraşlanan detay subdivision seviyesi başına takip edilir. Yalnızca HD Morphs seviyesinde anatomik detaya ihtiyaç duyan bir karakter, mevcut en yüksek subdivision'a çekilmekten fayda görmez; bunu gözenekler, yara izleri veya başka ince heykeltıraşlık detayları için gerçekten bir ZBrush geçişi alacak karakterler için sakla.",
    },
    official: false,
  },
  {
    id: "practice-fbx-fallback",
    category: "practice",
    skillLevel: "intermediate",
    title: {
      en: "Know the Plain FBX Path, Even If You Usually Use Auto Setup",
      tr: "Genelde Auto Setup Kullansan Bile Düz FBX Yolunu Bil",
    },
    rule: {
      en: "Learn Character Creator's native FBX export settings even if an Auto Setup plugin normally handles a given target application.",
      tr: "Bir Auto Setup eklentisi belirli bir hedef uygulamayı genelde hallese bile, Character Creator'ın yerel FBX dışa aktarım ayarlarını öğren.",
    },
    detail: {
      en: "Auto Setup plugins are free but external: they can lag behind a new Character Creator or destination-app version, or simply not exist for a tool outside Reallusion's supported list. Every Auto Setup plugin and DCC bridge ultimately builds on the same FBX export described in the Pipeline & Export entries, so understanding FBX Options (Mesh vs Motion vs both, subdivided-mesh export, texture settings) means a missing or broken plugin is an inconvenience, not a blocker.",
      tr: "Auto Setup eklentileri ücretsizdir ama harici araçlardır: yeni bir Character Creator veya hedef uygulama sürümünün gerisinde kalabilir, ya da Reallusion'ın desteklediği listenin dışındaki bir araç için hiç var olmayabilir. Her Auto Setup eklentisi ve DCC köprüsü sonuçta Pipeline & Export girdilerinde anlatılan aynı FBX dışa aktarımının üzerine kuruludur; bu yüzden FBX Options'ı (Mesh mi Motion mu yoksa ikisi birden mi, subdivided-mesh dışa aktarımı, doku ayarları) anlamak, eksik veya bozuk bir eklentiyi bir engelleyici değil sadece bir rahatsızlık haline getirir.",
    },
    official: false,
  },
  {
    id: "practice-license-before-export",
    category: "practice",
    skillLevel: "intermediate",
    title: {
      en: "Check the Content License Before Planning an External Export",
      tr: "Harici Bir Dışa Aktarım Planlamadan Önce İçerik Lisansını Kontrol Et",
    },
    rule: {
      en: "Before building a project around ActorCore or Content Store assets that will leave the Reallusion ecosystem, confirm those assets carry a Standard License, not just an iContent License.",
      tr: "Reallusion ekosisteminin dışına çıkacak bir proje ActorCore veya Content Store varlıkları etrafında kurulmadan önce, bu varlıkların yalnızca iContent Lisansı değil Standard Lisans taşıdığını doğrula.",
    },
    detail: {
      en: "An iContent License covers rendering and working inside iClone or Character Creator, previsualization and concept work at a reduced cost, but it does not permit exporting that content to an external engine or DCC; only the Standard License does. Finding this out after a project is already built around iContent-licensed assets means either relicensing them or replacing them, so it is worth checking the license tier at purchase time if the project's destination is Unreal, Unity, Blender or similar.",
      tr: "iContent Lisansı, iClone veya Character Creator içinde render almayı ve çalışmayı, ön görselleştirmeyi ve konsept çalışmasını indirimli bir fiyata kapsar, ama bu içeriği harici bir motora veya DCC'ye dışa aktarmaya izin vermez; buna yalnızca Standard Lisans izin verir. Bunu proje zaten iContent lisanslı varlıklar etrafında kurulduktan sonra fark etmek, ya onları yeniden lisanslamak ya da değiştirmek anlamına gelir; bu yüzden projenin hedefi Unreal, Unity, Blender veya benzeriyse lisans katmanını satın alma anında kontrol etmekte fayda var.",
    },
    official: true,
  },
  {
    id: "practice-zbrush-substance-last-resort",
    category: "practice",
    skillLevel: "expert",
    title: {
      en: "Reach for ZBrush or Substance Painter Only After Parametric Options Are Exhausted",
      tr: "ZBrush veya Substance Painter'a Yalnızca Parametrik Seçenekler Tükendiğinde Başvur",
    },
    rule: {
      en: "Push HD Morphs and SkinGen as far as they go before dropping into a ZBrush or Substance Painter round trip for the same detail.",
      tr: "Aynı detay için bir ZBrush veya Substance Painter gidiş-dönüşüne inmeden önce, HD Morphs ve SkinGen'i gidebildiği kadar zorla.",
    },
    detail: {
      en: "HD Morphs sliders and SkinGen layers stay parametric and non-destructive: they can be adjusted, toggled or reused on another character at any time. Detail sculpted in ZBrush or painted in Substance Painter comes back as baked texture maps, which is exactly what makes it look great, but it also means revising that detail later means going back through the round trip rather than nudging a slider. Reserving the round trip for detail the sliders genuinely cannot produce keeps the character's setup easier to revise for as long as possible.",
      tr: "HD Morphs kaydırıcıları ve SkinGen katmanları parametrik ve yıkıcı olmayan kalır: istediğin zaman ayarlanabilir, açılıp kapatılabilir veya başka bir karakterde yeniden kullanılabilir. ZBrush'ta heykeltıraşlanan veya Substance Painter'da boyanan detay, pişirilmiş doku haritaları olarak geri döner; bu onu harika gösteren şeyin ta kendisidir, ama aynı zamanda o detayı daha sonra revize etmenin bir kaydırıcıyı oynatmak yerine gidiş-dönüşü tekrar baştan geçmek anlamına geldiği anlamına da gelir. Gidiş-dönüşü kaydırıcıların gerçekten üretemediği detaya saklamak, karakterin kurulumunu mümkün olduğunca uzun süre revize etmesi kolay tutar.",
    },
    official: false,
  },
  {
    id: "practice-characterize-once",
    category: "practice",
    skillLevel: "expert",
    title: {
      en: "Invest in a Clean Characterization Once, Reuse It on Every Future Motion",
      tr: "Temiz Bir Characterization'a Bir Kez Yatırım Yap, Sonraki Her Harekette Kullan",
    },
    rule: {
      en: "When AccuRIG's automatic joint guess is slightly off on a custom or scanned model, take the time to correct it by hand during characterization rather than accepting a rough auto-rig.",
      tr: "AccuRIG'in özel veya taranmış bir modeldeki otomatik eklem tahmini biraz kapalıysa, kaba bir auto-rig'i kabul etmek yerine characterization sırasında onu elle düzeltmek için zaman ayır.",
    },
    detail: {
      en: "A characterization error (a joint placed slightly wrong, a proportion mismatch) does not just affect the first motion applied to a character; it resurfaces on every future retargeted motion as subtle foot sliding, twisted limbs or a facial rig that does not quite line up. Because characterization is a one-time setup step per character, the time spent getting it right up front pays off across every clip, mocap session or Auto Setup export that character goes through afterward.",
      tr: "Bir characterization hatası (biraz yanlış yerleştirilmiş bir eklem, bir oran uyuşmazlığı) yalnızca karaktere uygulanan ilk hareketi etkilemez; sonraki her retarget edilen harekette ince bir ayak kayması, bükülmüş uzuvlar veya tam hizalanmayan bir yüz rig'i olarak tekrar tekrar ortaya çıkar. Characterization karakter başına tek seferlik bir kurulum adımı olduğundan, baştan doğru yapmaya harcanan zaman, o karakterin sonrasında geçtiği her klip, mocap oturumu veya Auto Setup dışa aktarımında kendini öder.",
    },
    official: false,
  },
  {
    id: "practice-metahuman-pipeline-decision",
    category: "practice",
    skillLevel: "expert",
    title: {
      en: "Decide on MetaHuman-Level Fidelity Early, Not After the Pipeline Is Built",
      tr: "MetaHuman Seviyesinde Netlik Kararını Pipeline Kurulduktan Sonra Değil Baştan Ver",
    },
    rule: {
      en: "Before committing to a CC5-to-Unreal pipeline, decide upfront whether the project actually needs MetaHuman-level facial fidelity or a simpler Auto Setup/Control Rig pipeline is enough.",
      tr: "Bir CC5'ten Unreal'e pipeline'a bağlanmadan önce, projenin gerçekten MetaHuman seviyesinde yüz netliğine mi ihtiyacı olduğuna, yoksa daha basit bir Auto Setup/Control Rig pipeline'ının yeterli olup olmadığına baştan karar ver.",
    },
    detail: {
      en: "CC5 characters carry a MetaHuman-compatible skeleton and facial rig by default, but actually leaning on that (MetaHuman Animator capture, MetaHuman's body mocap pipeline, audio-to-face lipsync) assumes a specific Unreal-side setup built around it. Retrofitting that decision after a project is already animating through the simpler Auto Setup/Control Rig path costs more than choosing it at the start, since assets, motion libraries and shot workflows built around one path do not automatically carry over to the other.",
      tr: "CC5 karakterleri varsayılan olarak MetaHuman-uyumlu bir iskelet ve yüz rig'i taşır, ama buna gerçekten yaslanmak (MetaHuman Animator yakalama, MetaHuman'ın beden mocap hattı, ses-yüz lipsync) etrafında kurulmuş özel bir Unreal tarafı kurulumunu varsayar. Bu kararı, proje zaten daha basit Auto Setup/Control Rig yolu üzerinden animasyon almaya başladıktan sonra sonradan uygulamak, baştan seçmekten daha maliyetlidir, çünkü bir yol etrafında kurulan varlıklar, hareket kütüphaneleri ve çekim iş akışları otomatik olarak diğerine taşınmaz.",
    },
    official: false,
  },
];
