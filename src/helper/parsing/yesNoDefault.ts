export function yesNoDefault(value: string, def: boolean): boolean {
  if (!value) return def;

  if (value.includes("Y")) {
    return true;
  } else if (value.includes("N")) {
    return false;
  } else {
    return def;
  }
}
