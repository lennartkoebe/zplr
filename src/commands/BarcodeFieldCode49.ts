import { enumValOrDefault } from "@/helper/parsing/enumValOrDefault";
import { parseOrientation } from "@/helper/parsing/parseOrientation";
import { yesNoDefault } from "@/helper/parsing/yesNoDefault";
import { BarcodeCommand } from "@/types/CommandClass";
import { Orientation } from "@/types/Orientation";
import { RenderContext } from "@/types/RenderContext";

type Code49Mode = "0" | "1" | "2" | "3" | "4" | "5" | "A";
type InterpretationLine = "N" | "A" | "B";

/**
 * B4 - Barcode Field (Code 49)
 *
 * ^B4o,h,f,m
 *
 * o = orientation (N,R,I,B)
 * h = height multiplier of individual rows (1 to label height)
 * f = print interpretation line (N,A,B)
 * m = starting mode (0-5,A)
 */
export class BarcodeFieldCode49 implements BarcodeCommand {
  static readonly command = "B4";

  public orientation?: Orientation;
  public heightMultiplier?: number;
  public interpretationLine: InterpretationLine;
  public startingMode: Code49Mode;

  constructor(paramString: string) {
    const args = paramString.split(",");

    this.orientation = parseOrientation(args[0]);
    this.heightMultiplier = args[1] ? parseInt(args[1]) : undefined;
    this.interpretationLine = enumValOrDefault(args[2], ["N", "A", "B"], "N");
    this.startingMode = enumValOrDefault(
      args[3],
      ["0", "1", "2", "3", "4", "5", "A"],
      "A"
    );
  }

  applyToContext(context: RenderContext): void {
    context.barcodeCommand = this;
  }

  render(context: RenderContext): void {
    // Create new canvas for barcode
    const nextCanvas = context.createCanvas();

    // TODO: Implement Code 49 rendering
    // Currently there's no readily available JS library for Code 49
    // Would need to either:
    // 1. Implement the encoding algorithm
    // 2. Find/create a Code 49 library
    // 3. Use a more generic barcode library that supports Code 49

    context.drawCanvasToCanvas(
      context.ctx,
      nextCanvas,
      context.fieldX,
      context.fieldY
    );
  }
}
