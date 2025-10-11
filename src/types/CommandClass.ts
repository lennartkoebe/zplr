import { RenderContext } from "./RenderContext";

export interface CommandClass {
  applyToContext(context: RenderContext): void;
}

export interface BarcodeCommand extends CommandClass {
  render(context: RenderContext): Promise<void> | void;
}
