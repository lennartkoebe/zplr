import { Command } from "@/commands";
import { FieldBlock } from "@/commands/FieldBlock";
import { FieldSeparator } from "@/commands/FieldSeparator";
import { RenderContext } from "@/types/RenderContext";
import { Canvas } from "skia-canvas";
import { createCanvas, drawCanvasToCanvas } from "./canvas-node";

/**
 * Render ZPL commands to a canvas using Node.js (skia-canvas)
 *
 * @param commands Array of parsed ZPL commands
 * @param width Canvas width in pixels
 * @param height Canvas height in pixels
 * @returns Promise resolving to the rendered Canvas
 */
export async function render(
  commands: Command[],
  width: number,
  height: number
): Promise<Canvas> {
  const canvas = new Canvas(width, height);
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    throw new Error("Could not get context from canvas");
  }

  const renderContext: RenderContext = {
    ctx: ctx as any,
    barcodeCommand: undefined,
    fieldData: "",
    fieldBlock: new FieldBlock(""),
    barcodeDefaults: {
      moduleWidth: 5,
      ratio: 2,
      height: 20,
    },
    charHeight: 12,
    charWidth: 12,
    fontKey: "0",
    rotation: 0,
    x: 0,
    y: 0,
    fieldX: 0,
    fieldY: 0,
    createCanvas,
    drawCanvasToCanvas,
  };

  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  if (!commands || commands.length === 0) return canvas;

  // Ensure we have a field separator at the end
  commands.push(new FieldSeparator());

  for (let command of commands) {
    await command.applyToContext(renderContext);
  }

  return canvas;
}
