import { yesNoDefault } from "@/helper/parsing/yesNoDefault";
import { CommandClass } from "@/types/CommandClass";
import { RenderContext } from "@/types/RenderContext";

/**
 * LR - Label Reverse Print
 *
 * ^LRa
 *
 * The ^LR command reverses the printing of all fields in the label format.
 * It is used to reverse the entire label from black on white to white on black.
 */
export class LabelReversePrint implements CommandClass {
  static readonly command = "LR";

  /**
   * Reverse print
   *
   * Accepted Values: Y (yes) or N (no)
   * Default Value: Y
   */
  public reversePrint: boolean;

  constructor(paramString: string) {
    const args = paramString.split(",");
    this.reversePrint = yesNoDefault(args[0], true);
  }

  applyToContext(context: RenderContext): void {
    context.labelReversePrint = this.reversePrint;

    if (this.reversePrint) {
      context.ctx.filter = "invert(1)";
      context.ctx.globalCompositeOperation = "difference";
    } else {
      // Reset to normal printing
      context.ctx.filter = "none";
      context.ctx.globalCompositeOperation = "source-over";
    }
  }
}
