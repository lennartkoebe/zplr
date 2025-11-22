import { CommandClass } from "@/types/CommandClass";
import { RenderContext } from "@/types/RenderContext";

/**
 * FX - Comment
 *
 * ^FXc
 */
export class Comment implements CommandClass {
  static readonly command = "FX";

  constructor(paramString: string) {
    // Ignore parameters
  }

  applyToContext(context: RenderContext): void {
    // Do nothing
  }
}
