import { BarcodeCommand } from "./CommandClass";
import { FieldBlock } from "@/commands/FieldBlock";

export interface RenderContext {
  ctx: CanvasRenderingContext2D;
  x: number;
  y: number;
  fieldX: number;
  fieldY: number;
  barcodeCommand: BarcodeCommand | undefined;
  barcodeDefaults: {
    moduleWidth: number;
    ratio: number;
    height: number;
  };
  fieldBlock: FieldBlock;
  fieldData: string | undefined;
  fontKey: string;
  charHeight: number;
  charWidth: number | undefined;
  rotation: number;
  // Platform-specific canvas factory for creating temporary canvases
  createCanvas: (width?: number, height?: number) => any;
  // Platform-specific method to draw canvas to canvas
  drawCanvasToCanvas: (
    targetCtx: CanvasRenderingContext2D,
    sourceCanvas: any,
    x: number,
    y: number
  ) => void;
}
