import { useLocalized } from "../../hooks/useLocalized";
import type { Shortcut } from "../../data/types";

export function ShortcutCard({ shortcut }: { shortcut: Shortcut }) {
  const localize = useLocalized();

  return (
    <article className="shortcut-row">
      <kbd className="shortcut-keys">{shortcut.keys}</kbd>
      <div className="shortcut-body">
        <p className="shortcut-action">{localize(shortcut.action)}</p>
        {shortcut.context && <p className="shortcut-context">{localize(shortcut.context)}</p>}
      </div>
    </article>
  );
}
