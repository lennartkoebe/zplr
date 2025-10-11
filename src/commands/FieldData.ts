import { CommandClass } from "@/types/CommandClass";
import { RenderContext } from "@/types/RenderContext";

/**
 * FD - Field Data
 *
 * ^FD
 */
export class FieldData implements CommandClass {
  static readonly command = "FD";

  /**
   * Default Value: NONE, MUST BE SPECIFIED
   * */
  public data: string;

  constructor(paramString: string) {
    this.data = paramString;
  }

  applyToContext(context: RenderContext): void {
    context.fieldData = this.data;
  }
}
