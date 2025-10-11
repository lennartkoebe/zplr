export function stripWhitespace(text: string): string {
  if (!text) {
    return text;
  }
  return text.replace(/\s/g, "");
}
