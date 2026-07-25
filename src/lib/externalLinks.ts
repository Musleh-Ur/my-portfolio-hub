import type { MouseEvent } from "react";
import { toast } from "sonner";

const copyToClipboard = async (url: string) => {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(url);
      return true;
    }
  } catch {
    // fall through
  }
  try {
    const textarea = document.createElement("textarea");
    textarea.value = url;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    return true;
  } catch {
    return false;
  }
};

export const openExternalProfile =
  (url: string, label?: string) => async (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    event.stopPropagation();

    const win = window.open(url, "_blank", "noopener,noreferrer");
    const blocked = !win || win.closed || typeof win.closed === "undefined";

    const copied = await copyToClipboard(url);
    const name = label ?? "link";

    if (blocked) {
      toast.info(
        copied
          ? `Popup blocked. ${name} URL copied — paste it in a new tab.`
          : `Popup blocked. Visit: ${url}`
      );
    } else if (copied) {
      toast.success(`${name} opening in a new tab. URL also copied as a backup.`);
    }
  };
