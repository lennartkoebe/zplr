import { CommandClass } from "@/types/CommandClass";
import { RenderContext } from "@/types/RenderContext";

/**
 * FR - Field Reverse Print
 *
 * ^FR
 */
export class FieldReversePrint implements CommandClass {
  static readonly command = "FR";

  constructor() {}

  applyToContext(context: RenderContext): void {
    context.ctx.filter = "invert(1)";

    context.ctx.globalCompositeOperation = "difference";
  }
}
