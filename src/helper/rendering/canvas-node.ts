import { Canvas } from "skia-canvas";
import {
  CanvasFactory,
  CanvasLike,
  ExtendedCanvasRenderingContext2D,
} from "./canvas";

/**
 * Node.js canvas factory using skia-canvas
 */
export const createCanvas: CanvasFactory = (
  width = 300,
  height = 150
): CanvasLike => {
  return new Canvas(width, height) as any as CanvasLike;
};

/**
 * Type guard to check if context has skia-canvas specific methods
 */
export function hasDrawCanvas(
  ctx: any
): ctx is ExtendedCanvasRenderingContext2D & {
  drawCanvas: (canvas: CanvasLike, x: number, y: number) => void;
} {
  return typeof ctx.drawCanvas === "function";
}

/**
 * Draw one canvas onto another using the platform-appropriate method
 * For Node.js with skia-canvas, uses the drawCanvas method
 */
export function drawCanvasToCanvas(
  targetCtx: CanvasRenderingContext2D,
  sourceCanvas: CanvasLike,
  x: number,
  y: number
): void {
  const ctx = targetCtx as ExtendedCanvasRenderingContext2D;

  if (hasDrawCanvas(ctx)) {
    // Use skia-canvas specific method
    ctx.drawCanvas(sourceCanvas, x, y);
  } else {
    // Fallback - should not happen in Node.js, but included for type safety
    throw new Error("Canvas drawing not supported in this context");
  }
}
