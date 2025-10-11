import {
  CanvasFactory,
  CanvasLike,
  ExtendedCanvasRenderingContext2D,
} from "./canvas";

/**
 * Web browser canvas factory using HTMLCanvasElement
 */
export const createCanvas: CanvasFactory = (
  width = 300,
  height = 150
): CanvasLike => {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  return canvas;
};

/**
 * Draw one canvas onto another using the platform-appropriate method
 * For web browsers, uses the standard drawImage method
 */
export function drawCanvasToCanvas(
  targetCtx: CanvasRenderingContext2D,
  sourceCanvas: CanvasLike,
  x: number,
  y: number
): void {
  // In the browser, canvas is HTMLCanvasElement and we use drawImage
  targetCtx.drawImage(sourceCanvas as HTMLCanvasElement, x, y);
}
