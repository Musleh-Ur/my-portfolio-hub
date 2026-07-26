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
    const copied = await copyToClipboard(url);
    const name = label ?? "link";

    if (copied) {
      toast.success(`${name} opening in a new tab. URL copied as a backup.`);
      return;
    }

    toast.info(`${name} opening in a new tab. If it is blocked, visit: ${url}`);
  };
