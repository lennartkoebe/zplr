import { Orientation } from "../../types/Orientation";
import { enumValOrDefault } from "./enumValOrDefault";

export function parseOrientation(
  value: string,
  def?: Orientation
): Orientation {
  return enumValOrDefault(value, ["N", "R", "I", "B"], def || "N");
}
