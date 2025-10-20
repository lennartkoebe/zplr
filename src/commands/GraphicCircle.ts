import { enumValOrDefault } from "@/helper/parsing/enumValOrDefault";
import { parseNumber } from "@/helper/parsing/parseNumber";
import { CommandClass } from "@/types/CommandClass";
import { RenderContext } from "@/types/RenderContext";

/**
 * GC - Graphic Circle
 *
 * ^GCd,t,c
 */
export class GraphicCircle implements CommandClass {
  static readonly command = "GC";

  /**
   * Accepted Values: 3 to 4095 (larger values are replaced with 4095)
   *
   * Default Value: 3
   * */
  public diameter: number;
  /**
   * Accepted Values: 2 to 4095
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

  constructor(paramString: string) {
    const args = paramString.split(",");

    this.thickness = parseNumber(args[2], 1, 1, 32000);

    this.diameter = parseNumber(args[0], 3, 3, 4095);
    this.thickness = parseNumber(args[1], 1, 1, 32000);
    this.color = enumValOrDefault(args[2], ["B", "W"], "B");
  }

  applyToContext(context: RenderContext): void {
    const ctx = context.ctx;
    const color = this.color === "B" ? "black" : "white";

    ctx.strokeStyle = color;
    ctx.lineWidth = this.thickness;
    ctx.fillStyle = color;

    const radius = this.diameter / 2;

    ctx.beginPath();
    ctx.arc(
      context.fieldX + radius,
      context.fieldY + radius,
      radius,
      0,
      2 * Math.PI
    );
    ctx.save();
    ctx.clip();
    ctx.lineWidth *= 2;
    ctx.stroke();
    ctx.restore();

    // Register bounding box for highlighting
    context.highlight.regions.push({
      type: "circle",
      commandIndex: context.highlight.currentCommandIndex,
      x: context.fieldX + radius,
      y: context.fieldY + radius,
      radius: radius,
    });
  }
}
