/**
 * Platform-agnostic canvas interface
 *
 * This interface abstracts the differences between skia-canvas (Node.js)
 * and HTMLCanvasElement (web) to provide a unified API.
 */
export interface CanvasLike {
  width: number;
  height: number;
  getContext(contextId: "2d"): CanvasRenderingContext2D | null;
}

/**
 * A function that creates a new canvas instance
 */
export type CanvasFactory = (width?: number, height?: number) => CanvasLike;

/**
 * Platform-specific context interface that extends standard CanvasRenderingContext2D
 * with methods that may differ between platforms (like drawCanvas for skia-canvas)
 */
export interface ExtendedCanvasRenderingContext2D
  extends CanvasRenderingContext2D {
  // skia-canvas specific method for drawing another canvas
  drawCanvas?(canvas: CanvasLike, x: number, y: number): void;
}
