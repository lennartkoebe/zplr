import { parseNumber } from "@/helper/parsing/parseNumber";
import { CommandClass } from "@/types/CommandClass";
import { RenderContext } from "@/types/RenderContext";

/**
 * CF - Change Alpha Default Font
 *
 * ^CFf,h,w
 */
export class ChangeAlphaDefaultFont implements CommandClass {
  static readonly command = "CF";

  /**
   * Accepted Values: A through Z and 0 to 9
   *
   * Initial Value: A
   * */
  public fontKey: string;

  /**
   * Accepted Values: 0 to 32000
   *
   * Initial Value: 9
   * */
  public charHeight: number;

  /**
   * Accepted Values: 0 to 32000
   *
   * Initial Value: 5 or last permanent saved value
   * */
  public charWidth: number;

  constructor(paramString: string) {
    const args = paramString.split(",");

    this.fontKey = /[A-Z0-9]/.exec(args[0])?.[0] || "A";
    this.charHeight = parseNumber(args[1], 9, 0, 32000);
    this.charWidth = parseNumber(args[2], 5, 0, 32000);
  }

  applyToContext(context: RenderContext): void {
    context.fontKey = this.fontKey;
    context.charHeight = this.charHeight;
    context.charWidth = this.charWidth;
  }
}
