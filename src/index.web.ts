import { Command } from "./commands/index";
import { parse as parseZPL } from "./helper/labelParsing/parse";
import { render as renderInternal } from "./helper/rendering/render.web";

// Re-export parse
export { parse } from "./helper/labelParsing/parse";

/**
 * Render ZPL commands to a canvas using web browser APIs
 *
 * @param commands - Array of parsed ZPL commands from the parse() function
 * @param width - Width of the canvas in pixels
 * @param height - Height of the canvas in pixels
 * @returns Promise resolving to the rendered HTMLCanvasElement
 *
 * @example
 * import { parse, render } from "zplr/web";
 *
 * const commands = parse("^XA^FO100,100^FDHello^FS^XZ");
 * const canvas = await render(commands[0], 400, 600);
 *
 * // Append to document
 * document.body.appendChild(canvas);
 */
export async function render(
  commands: Command[],
  width: number,
  height: number
): Promise<HTMLCanvasElement> {
  return renderInternal(commands, width, height);
}

/**
 * Convenience function to parse and render ZPL in one call
 *
 * @param zpl - ZPL string to parse and render
 * @param width - Width of the canvas in pixels
 * @param height - Height of the canvas in pixels
 * @returns Promise resolving to array of HTMLCanvasElement instances (one per label)
 *
 * @example
 * import { parseAndRender } from "zplr/web";
 *
 * const canvases = await parseAndRender("^XA^FO100,100^FDHello^FS^XZ", 400, 600);
 * document.body.appendChild(canvases[0]);
 */
export async function parseAndRender(
  zpl: string,
  width: number,
  height: number
): Promise<HTMLCanvasElement[]> {
  const labels = parseZPL(zpl);
  const canvases: HTMLCanvasElement[] = [];

  for (const commands of labels) {
    const canvas = await render(commands, width, height);
    canvases.push(canvas);
  }

  return canvases;
}

/**
 * Convenience function to parse, render, and export ZPL as PNG data URLs
 *
 * @param zpl - ZPL string to parse and render
 * @param width - Width of the canvas in pixels
 * @param height - Height of the canvas in pixels
 * @returns Promise resolving to array of PNG data URLs (one per label)
 *
 * @example
 * import { parseAndRenderPNG } from "zplr/web";
 *
 * const pngDataUrls = await parseAndRenderPNG("^XA^FO100,100^FDHello^FS^XZ", 400, 600);
 * 
 * // Use in an img tag
 * const img = document.createElement('img');
 * img.src = pngDataUrls[0];
 * document.body.appendChild(img);
 */
export async function parseAndRenderPNG(
  zpl: string,
  width: number,
  height: number
): Promise<string[]> {
  const canvases = await parseAndRender(zpl, width, height);
  return canvases.map(canvas => canvas.toDataURL("image/png"));
}

// Export types
export type { CommandClass } from "./types/CommandClass";
export type { Orientation } from "./types/Orientation";
export type { RenderContext } from "./types/RenderContext";
