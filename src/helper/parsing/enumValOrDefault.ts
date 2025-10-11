import { stripWhitespace } from "./stripWhitespace";

export function enumValOrDefault<T>(value: string, enumValues: T[], def: T): T {
  const stripped = stripWhitespace(value);
  if (enumValues.includes(stripped as T)) {
    return stripped as T;
  } else {
    return def;
  }
}
