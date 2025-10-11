import { enumValOrDefault } from "@/helper/parsing/enumValOrDefault";
import { parseNumber } from "@/helper/parsing/parseNumber";
import { CommandClass } from "@/types/CommandClass";
import { RenderContext } from "@/types/RenderContext";

/**
 * FB - Field Block
 *
 * ^FBw,l,s,j,h
 */
export class FieldBlock implements CommandClass {
  static readonly command = "FB";

  /**
   * Accepted Values: 0 to the width of the label
   *
   * Default Value: 0
   * If the value is less than font width or not specified, text does not print.
   * */
  public width: number;

  /**
   * Accepted Values: 1 to 9999
   *
   * Default Value: 1
   * Text exceeding the maximum number of lines overwrites the last line.
   * Changing the font size automatically increases or decreases the size of the block.
   * */
  public maxLines: number;

  /**
   * Accepted Values: -9999 to 9999
   *
   * Default Value: 0
   * Numbers are considered to be positive unless preceded by a minus sign.
   * Positive values add space; negative values delete space.
   * */
  public space: number;

  /**
   * Accepted Values:
   * L = left
   * C = center
   * R = right
   * J = justified
   *
   * Default Value: L
   * If J is used the last line is left-justified.
   */
  public justificaftion: "L" | "C" | "R" | "J";

  /**
   * Accepted Values: 0 to 9999
   *
   * Default Value: 0
   */
  public hangingIndent: number;

  constructor(paramString: string) {
    const args = paramString.split(",");

    this.width = parseNumber(args[0], 0, 0);
    this.maxLines = parseNumber(args[1], 1, 1, 9999);
    this.space = parseNumber(args[2], 0, -9999, 9999);
    this.justificaftion = enumValOrDefault(args[3], ["L", "C", "R", "J"], "L");
    this.hangingIndent = parseNumber(args[4], 0, 0, 9999);
  }

  applyToContext(context: RenderContext): void {
    context.fieldBlock = this;
  }
}
