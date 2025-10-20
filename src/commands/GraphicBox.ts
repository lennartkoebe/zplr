import { enumValOrDefault } from "@/helper/parsing/enumValOrDefault";
import { parseNumber } from "@/helper/parsing/parseNumber";
import { CommandClass } from "@/types/CommandClass";
import { RenderContext } from "@/types/RenderContext";

/**
 * GB - Graphic Box
 *
 * ^GBw,h,t,c,r
 */
export class GraphicBox implements CommandClass {
  static readonly command = "GB";

  /**
   * Accepted Values: value of t to 32000
   *
   * Default Value: value used for thickness (t) or 1
   * */
  public width: number;
  /**
   * Accepted Values: value of t to 32000
   *
   * Default Value: value used for thickness (t) or 1
   * */
  public height: number;
  /**
   * Accepted Values:  1 to 32000
   *
   * Default Value: 1
   * */
  public thickness: number;
  /**
   * Accepted Values: B, W
   *
   * Default Value: B
   */
  public color: "B" | "W";
  /**
   * Accepted Values: 0 (no rounding) to 8 (heaviest rounding)
   *
   * Default Value: 0
   */
  public rounding: number;

  constructor(paramString: string) {
    const args = paramString.split(",");

    this.thickness = parseNumber(args[2], 1, 1, 32000);

    this.width = parseNumber(args[0], this.thickness, 0, 32000);
    this.height = parseNumber(args[1], this.thickness, 0, 32000);
    this.color = enumValOrDefault(args[3], ["B", "W"], "B");
    this.rounding = parseNumber(args[4], 0, 0, 8);
  }

  applyToContext(context: RenderContext): void {
    const ctx = context.ctx;
    const color = this.color === "B" ? "black" : "white";

    ctx.strokeStyle = color;
    ctx.lineWidth = this.thickness;
    ctx.fillStyle = color;

    ctx.beginPath();
    const shorter = Math.min(this.width, this.height);
    const radius = (this.rounding / 8) * (shorter / 2);
    ctx.roundRect(
      context.fieldX,
      context.fieldY,
      this.width,
      this.height,
      radius
    );
    ctx.save();
    ctx.clip();
    ctx.lineWidth *= 2;
    ctx.stroke();
    ctx.restore();

    // Register bounding box for highlighting
    context.highlight.regions.push({
      type: "box",
      commandIndex: context.highlight.currentCommandIndex,
      x: context.fieldX,
      y: context.fieldY,
      width: this.width,
      height: this.height,
    });
  }
}
