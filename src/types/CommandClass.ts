import { RenderContext } from "./RenderContext";

export interface CommandClass {
  applyToContext(context: RenderContext): void;
  /**
   * Start position in the source ZPL string (inclusive)
   */
  sourceStart?: number;
  /**
   * End position in the source ZPL string (exclusive)
   */
  sourceEnd?: number;
}

export interface BarcodeCommand extends CommandClass {
  render(context: RenderContext): Promise<void> | void;
}
