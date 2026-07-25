import type { MouseEvent } from "react";

export const openExternalProfile = (url: string) => (event: MouseEvent<HTMLAnchorElement>) => {
  event.preventDefault();
  event.stopPropagation();
  window.open(url, "_blank", "noopener,noreferrer");
};