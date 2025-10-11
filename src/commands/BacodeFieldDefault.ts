import { parseNumber } from "@/helper/parsing/parseNumber";
import { CommandClass } from "@/types/CommandClass";
import { RenderContext } from "@/types/RenderContext";

/**
 * BY - Barcode Field Default
 *
 * ^BYw,r,h
 */
export class BarcodeFieldDefault implements CommandClass {
  static readonly command = "BY";

  /**
   * Accepted Values: 1 to 10
   *
   * Initial Value at power-up: 2
   * */
  public width?: number;
  /**
   * Accepted Values: 2 to 3
   *
   * Initial Value at power-up: 2
   * */
  public ratio?: number;
  /**
   * Initial Value at power-up: 10
   * */
  public height?: number;

  constructor(paramString: string) {
    const args = paramString.split(",");

    this.width = parseNumber(args[0], 2, 1, 10);
    this.ratio = parseNumber(args[1], 3, 2, 3);
    this.height = parseNumber(args[2], 10);
  }

  applyToContext(context: RenderContext): void {
    if (this.width) {
      context.barcodeDefaults.moduleWidth = this.width;
    }
    if (this.ratio) {
      context.barcodeDefaults.ratio = this.ratio;
    }
    if (this.height) {
      context.barcodeDefaults.height = this.height;
    }
  }
}
