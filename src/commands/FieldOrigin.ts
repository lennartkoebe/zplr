import { parseNumber } from "@/helper/parsing/parseNumber";
import { CommandClass } from "@/types/CommandClass";
import { RenderContext } from "@/types/RenderContext";

/**
 * FO - Field Origin
 *
 * ^FOx,y
 */
export class FieldOrigin implements CommandClass {
  static readonly command = "FO";

  /**
   * Accepted Values: 0 to 32000
   *
   * Default Value: 0
   * */
  public x: number;
  /**
   * Accepted Values: 0 to 32000
   *
   * Default Value: 0
   * */
  public y: number;

  constructor(paramString: string) {
    const args = paramString.split(",");

    this.x = parseNumber(args[0], 0, 0, 32000);
    this.y = parseNumber(args[1], 0, 0, 32000);
  }

  applyToContext(context: RenderContext): void {
    context.fieldX = this.x;
    context.fieldY = this.y;
  }
}
