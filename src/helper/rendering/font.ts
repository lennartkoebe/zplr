import { RenderContext } from "@/types/RenderContext";
import { fontParams } from "./fontOptimizing";

export function getFont(context: RenderContext): string {
  const size = context.charHeight;

  let prefix = "";
  let family = "Arial";
  switch (context.fontKey) {
    case "0":
      prefix = "bold ";
      // family = " Triumvirate Cond";
      // family = "Archivo Narrow";
      family = "Arial Narrow, Liberation Sans Narrow";
      // family = "News Cycle";
      break;
    case "A":
      // family = "PrimaSansMono BT";
      family =
        "Prima Sans Mono BT, DejaVu Sans Mono, Liberation Mono, Consolas, Menlo";
      break;
  }

  return `${prefix}${
    Math.round(size * (fontParams.fontSize || 1) * 100) / 100
  }px ${family}`;
}
