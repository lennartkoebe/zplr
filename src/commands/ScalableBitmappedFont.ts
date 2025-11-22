import { parseNumber } from "@/helper/parsing/parseNumber";
import { parseOrientation } from "@/helper/parsing/parseOrientation";
import { CommandClass } from "@/types/CommandClass";
import { RenderContext } from "@/types/RenderContext";

/**
 * A - Scalable/Bitmapped Font
 *
 * ^Afo,h,w
 */
export class ScalableBitmappedFont implements CommandClass {
  static readonly command = "A";

  public font: string;
  public orientation: string;
  public height: number;
  public width: number;

  constructor(paramString: string) {
    const args = paramString.split(",");
    
    const fontAndOrientation = args[0] || "A";
    this.font = fontAndOrientation.charAt(0) || "A";
    const orientationChar = fontAndOrientation.charAt(1);
    
    this.orientation = parseOrientation(orientationChar, "N");
    
    this.height = parseNumber(args[1], 0, 0, 32000);
    this.width = parseNumber(args[2], 0, 0, 32000);
  }

  applyToContext(context: RenderContext): void {
    context.fontKey = this.font;
    
    switch (this.orientation) {
      case "N": context.rotation = 0; break;
      case "R": context.rotation = 90; break;
      case "I": context.rotation = 180; break;
      case "B": context.rotation = 270; break;
    }
    
    if (this.height > 0) context.charHeight = this.height;
    if (this.width > 0) context.charWidth = this.width;
  }
}
