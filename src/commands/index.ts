import { BarcodeFieldDefault } from "./BacodeFieldDefault";
import { BarcodeFieldCode128 } from "./BarcodeFieldCode128";
import { BarcodeFieldCode39 } from "./BarcodeFieldCode39";
import { BarcodeFieldQRCode } from "./BarcodeFieldQRCode";
import { ChangeAlphaDefaultFont } from "./ChangeAlphaDefaultFont";
import { FieldBlock } from "./FieldBlock";
import { FieldData } from "./FieldData";
import { FieldOrigin } from "./FieldOrigin";
import { FieldReversePrint } from "./FieldReversePrint";
import { FieldSeparator } from "./FieldSeparator";
import { GraphicBox } from "./GraphicBox";
import { GraphicCircle } from "./GraphicCircle";
import { LabelReversePrint } from "./LabelReversePrint";

export const AllCommands = [
  BarcodeFieldCode128,
  BarcodeFieldDefault,
  BarcodeFieldQRCode,
  BarcodeFieldCode39,
  FieldReversePrint,
  FieldSeparator,
  FieldOrigin,
  FieldData,
  ChangeAlphaDefaultFont,
  GraphicBox,
  GraphicCircle,
  FieldBlock,
  LabelReversePrint,
];
export type Commands = (typeof AllCommands)[number]["command"];
export type Command = InstanceType<(typeof AllCommands)[number]>;

export const CommandMap = AllCommands.reduce((map, command) => {
  map[command.command] = command;
  return map;
}, {} as Record<Commands, (typeof AllCommands)[number]>);
