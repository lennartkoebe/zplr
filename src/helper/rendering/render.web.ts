import { Command } from "@/commands";
import { FieldBlock } from "@/commands/FieldBlock";
import { FieldSeparator } from "@/commands/FieldSeparator";
import { RenderContext } from "@/types/RenderContext";
import { createCanvas, drawCanvasToCanvas } from "./canvas.web";

/**
 * Render ZPL commands to a canvas using web browser APIs
 *
 * @param commands Array of parsed ZPL commands
 * @param width Canvas width in pixels
 * @param height Canvas height in pixels
 * @returns Promise resolving to the rendered HTMLCanvasElement
 */
export async function render(
  commands: Command[],
  width: number,
  height: number
): Promise<HTMLCanvasElement> {
  const canvas = createCanvas(width, height) as HTMLCanvasElement;
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    throw new Error("Could not get context from canvas");
  }

  const renderContext: RenderContext = {
    ctx,
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
