import { enumValOrDefault } from "@/helper/parsing/enumValOrDefault";
import { BarcodeCommand } from "@/types/CommandClass";
import { RenderContext } from "@/types/RenderContext";
import QRCode, { QRCodeErrorCorrectionLevel } from "qrcode";

type QRModel = "1" | "2";
type QRReliability = "H" | "Q" | "M" | "L";
type QREncoding = "N" | "A" | "B" | "K";

/**
 * BQ - Barcode Field (QR Code)
 *
 * ^BQa,b,c,d,e
 *
 * a = field orientation (fixed as normal)
 * b = model (1=original, 2=enhanced)
 * c = magnification factor (1-10)
 * d = reliability level (H,Q,M,L)
 * e = encoding (N,A,B,K) values 1-7
 */
export class BarcodeFieldQRCode implements BarcodeCommand {
  static readonly command = "BQ";

  public model: QRModel;
  public magnification: number;
  public reliability: QRReliability;
  public encoding: QREncoding;

  constructor(paramString: string) {
    const args = paramString.split(",");

    // a is fixed as normal orientation
    this.model = enumValOrDefault(args[1], ["1", "2"], "2");
    this.magnification = args[2]
      ? Math.min(Math.max(parseInt(args[2]), 1), 10)
      : this.getDefaultMagnification();
    this.reliability = enumValOrDefault(args[3], ["H", "Q", "M", "L"], "Q");
    this.encoding = enumValOrDefault(args[4], ["N", "A", "B", "K"], "A");
  }

  private getDefaultMagnification(): number {
    // TODO: Implement DPI detection
    return 2; // Assuming 300 DPI
  }

  applyToContext(context: RenderContext): void {
    context.barcodeCommand = this;
  }

  async render(context: RenderContext): Promise<void> {
    if (!context.fieldData) return;

    const fieldData = context.fieldData.slice(4);
    const errorCorrectionLevel: QRCodeErrorCorrectionLevel = enumValOrDefault(
      context.fieldData.slice(0, 1),
      ["H", "Q", "M", "L"],
      "Q"
    );
    const inputMode = context.fieldData.slice(1, 2);
    const characterMode = context.fieldData.slice(3, 4);

    const nextCanvas = context.createCanvas();
    const size = 50 * this.magnification; // Base size * magnification
    // nextCanvas.width = size;
    // nextCanvas.height = size;

    try {
      // Generate QR code onto canvas
      console.log("Generated QR code:", fieldData);
      await QRCode.toCanvas(nextCanvas, fieldData, {
        // errorCorrectionLevel: errorCorrectionLevel,
        // version: this.model === "1" ? 1 : 2, // Force version 1 for model 1
        // margin: 0,
        // // width: size,
        // scale: this.magnification,
        errorCorrectionLevel: errorCorrectionLevel,
        scale: this.magnification,
        margin: 0,
        version: 1,
        maskPattern: 7,
        // maskPattern: 1,
      });

      // Draw the QR code canvas onto the main canvas
      context.drawCanvasToCanvas(
        context.ctx,
        nextCanvas,
        context.fieldX,
        context.fieldY + 10
      );

      const commandIndex =
        context.highlight.currentFieldStartIndex ??
        context.highlight.currentCommandIndex;
      context.highlight.regions.push({
        type: "barcode",
        commandIndex: commandIndex,
        x: context.fieldX,
        y: context.fieldY + 10,
        width: nextCanvas.width,
        height: nextCanvas.height,
      });
    } catch (error) {
      console.error("Failed to generate QR code:", error);
    }
  }
}
