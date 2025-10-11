import { getFont } from "@/helper/rendering/font";
import { CommandClass } from "@/types/CommandClass";
import { RenderContext } from "@/types/RenderContext";
import { FieldBlock } from "./FieldBlock";
import { fontParams } from "@/helper/rendering/fontOptimizing";

/**
 * FS - Field Separator
 *
 * ^FS
 */
export class FieldSeparator implements CommandClass {
  static readonly command = "FS";

  constructor() {}

  async applyToContext(context: RenderContext): Promise<void> {
    context.ctx.font = getFont(context);
    if (context.fieldData) {
      if (context.barcodeCommand) {
        await context.barcodeCommand.render(context);
      } else {
        // render text as FieldBlock
        const text = context.fieldData
          .replace(/-/g, "\uff0d")
          .replace("\\&", "\n");

        // Initialize starting x position
        let currX = context.fieldX;
        if (context.fieldBlock) {
          const textMetrics = context.ctx.measureText(text);
          const textWidth = textMetrics.width;
          switch (context.fieldBlock.justificaftion) {
            case "C":
              currX =
                context.fieldX + (context.fieldBlock.width - textWidth) / 2;
              break;
            case "R":
              currX = context.fieldX + (context.fieldBlock.width - textWidth);
              break;
            case "L":
            case "J": // Last line of justified text is left-justified
            default:
              currX = context.fieldX;
              break;
          }
        }
        for (let letter of text) {
          let fontSize = context.charHeight * 0.75;
          if (context.fontKey === "0") {
            fontSize = fontSize * fontParams.fontSize;
          }
          let letterWidth = context.ctx.measureText(letter).width;
          if (context.fontKey === "0") {
            // letterWidth = letterWidth * fontParams.letterStretchX;
          }

          context.ctx.fillText(
            letter,
            currX,
            context.fieldY + context.charHeight * 0.73,
            // context.charWidth ? context.charWidth : undefined
            letterWidth
          );
          // currX += context.ctx.measureText(letter).width * 0.995;
          // const letterWidth = context.ctx.measureText(letter).width;
          currX += letterWidth * 0.995;

          if (context.fontKey === "0") {
            currX += context.charHeight * fontParams.letterSpacingMultiplier;
            currX += letterWidth * fontParams.letterWidthToSpacingMultiplier;
          } else {
            // currX += context.ctx.measureText(letter).width * 0.995 ;
          }
          // currX += context.ctx.measureText(letter).width * 1.05;
        }
      }
    }
    // reset field
    context.fieldData = undefined;
    context.barcodeCommand = undefined;
    context.fieldBlock = new FieldBlock("");
    context.fieldX = 0;
    context.fieldY = 0;
    context.ctx.fillStyle = "black";
    context.ctx.strokeStyle = "black";
    context.ctx.lineWidth = 1;
    context.ctx.filter = "none";
    context.ctx.globalCompositeOperation = "source-over";
  }
}
