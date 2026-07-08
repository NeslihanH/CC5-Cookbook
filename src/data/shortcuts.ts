import type { Shortcut } from "./types";

// Keyboard shortcuts and panel/UI reference, sourced from the CC5 manual's
// General Toolbar and Editor Mode Shortcuts pages. Scoped to the
// unambiguous, general-purpose shortcuts; several panel-specific keys (e.g.
// single letters that mean different things per Modify panel tab) were left
// out rather than risk stating them incorrectly.
export const shortcuts: Shortcut[] = [
  {
    id: "shortcut-undo",
    category: "shortcut",
    keys: "Ctrl + Z",
    action: { en: "Undo the last action", tr: "Son işlemi geri al" },
    context: { en: "Global", tr: "Genel" },
  },
  {
    id: "shortcut-redo",
    category: "shortcut",
    keys: "Ctrl + Y",
    action: { en: "Redo the last undone action", tr: "Geri alınan son işlemi yinele" },
    context: { en: "Global", tr: "Genel" },
  },
  {
    id: "shortcut-camera-pan",
    category: "shortcut",
    keys: "Alt + Left Mouse Drag",
    action: { en: "Pan the viewport camera", tr: "Viewport kamerasını kaydır (pan)" },
    context: { en: "Viewport, in Move/Rotate/Scale mode", tr: "Viewport, Move/Rotate/Scale modundayken" },
  },
  {
    id: "shortcut-camera-orbit",
    category: "shortcut",
    keys: "Alt + Right Mouse Drag",
    action: { en: "Orbit/rotate the viewport camera", tr: "Viewport kamerasını döndür (orbit)" },
    context: { en: "Viewport, in Move/Rotate/Scale mode", tr: "Viewport, Move/Rotate/Scale modundayken" },
  },
  {
    id: "shortcut-camera-zoom",
    category: "shortcut",
    keys: "Alt + Both Mouse Buttons Drag",
    action: { en: "Zoom the viewport camera", tr: "Viewport kamerasıyla yakınlaş/uzaklaş (zoom)" },
    context: { en: "Viewport, in Move/Rotate/Scale mode", tr: "Viewport, Move/Rotate/Scale modundayken" },
  },
  {
    id: "shortcut-rename",
    category: "shortcut",
    keys: "F2",
    action: { en: "Rename the selected object", tr: "Seçili nesneyi yeniden adlandır" },
    context: { en: "Content Manager", tr: "Content Manager" },
  },
  {
    id: "shortcut-content-manager-view",
    category: "shortcut",
    keys: "Ctrl + 1",
    action: {
      en: "Cycle the Content Manager view between Small Thumbnail, Large Thumbnail and Details",
      tr: "Content Manager görünümünü Small Thumbnail, Large Thumbnail ve Details arasında değiştir",
    },
    context: { en: "Content Manager", tr: "Content Manager" },
  },
  {
    id: "shortcut-multiselect",
    category: "shortcut",
    keys: "Ctrl + Click",
    action: {
      en: "Add or remove an item from the current multi-selection",
      tr: "Güncel çoklu seçime bir öğe ekle veya çıkar",
    },
    context: { en: "Content Manager and other selection lists", tr: "Content Manager ve diğer seçim listeleri" },
  },
  {
    id: "shortcut-modify-panel-section-nav",
    category: "shortcut",
    keys: "Ctrl + Page Up / Ctrl + Page Down",
    action: {
      en: "Jump to the previous or next section of the Modify panel",
      tr: "Modify panelinin bir önceki veya bir sonraki bölümüne atla",
    },
    context: { en: "Modify panel", tr: "Modify paneli" },
  },
  {
    id: "shortcut-modify-panel-expand-collapse",
    category: "shortcut",
    keys: "Ctrl + Plus / Ctrl + Minus",
    action: {
      en: "Expand or collapse every section of the Modify panel at once",
      tr: "Modify panelinin tüm bölümlerini tek seferde aç veya kapat",
    },
    context: { en: "Modify panel", tr: "Modify paneli" },
  },
  {
    id: "shortcut-bone-visibility",
    category: "shortcut",
    keys: "Ctrl + B",
    action: { en: "Toggle bone visibility", tr: "Kemik görünürlüğünü aç/kapat" },
    context: { en: "Skin Weight Editor", tr: "Skin Weight Editor" },
  },
  {
    id: "shortcut-wireframe-toggle",
    category: "shortcut",
    keys: "W",
    action: { en: "Toggle wireframe display", tr: "Wireframe görünümünü aç/kapat" },
    context: { en: "Skin Weight Editor", tr: "Skin Weight Editor" },
  },
  {
    id: "shortcut-bone-cycle",
    category: "shortcut",
    keys: "Up Arrow / Down Arrow",
    action: {
      en: "Select the previous or next bone in the hierarchy",
      tr: "Hiyerarşideki bir önceki veya bir sonraki kemiği seç",
    },
    context: { en: "Skin Weight Editor", tr: "Skin Weight Editor" },
  },
];
