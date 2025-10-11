import { BarcodeFieldDefault } from "@/commands/BacodeFieldDefault";
import { BarcodeFieldCode128 } from "@/commands/BarcodeFieldCode128";
import { FieldData } from "@/commands/FieldData";
import { FieldOrigin } from "@/commands/FieldOrigin";
import { FieldSeparator } from "@/commands/FieldSeparator";
import { describe, expect, it } from "vitest";
import {
  getCommandEnd,
  getCommandInfo,
  parse,
  skipToCommandStart,
} from "./parse";

describe("skip to start", () => {
  it("skips correctly to caret", () => {
    const input = "foo  ^TEst~";
    const skipped = skipToCommandStart(input, "^", "~");
    expect(skipped).eq("^TEst~");
  });

  it("skips correctly to tilde", () => {
    const input = "foo  ~TEst^";
    const skipped = skipToCommandStart(input, "^", "~");
    expect(skipped).eq("~TEst^");
  });
});

describe("getCommandEnd", () => {
  it("gets correct end for caret", () => {
    const input = "^TEst~";
    const end = getCommandEnd(input, "^", "~");
    expect(end).eq(5);
  });

  it("gets correct end for tilde", () => {
    const input = "~TEst^";
    const end = getCommandEnd(input, "^", "~");
    expect(end).eq(5);
  });

  it("gets correct end for empty command", () => {
    const input = "^BC^FD123";
    const end = getCommandEnd(input, "^", "~");
    expect(end).eq(3);
  });
});

describe("getCommandInfo", () => {
  it("gets correct command info", () => {
    const input = "^FO100,100^FDHello, World!^FS";
    const info = getCommandInfo(input, "^", "~");
    expect(info).toEqual({
      name: "FO",
      paramText: "100,100",
      remaining: "^FDHello, World!^FS",
    });
  });
  it("gets correct command info for FieldData", () => {
    const input = "^FDHello, World!^FS";
    const info = getCommandInfo(input, "^", "~");
    expect(info).toEqual({
      name: "FD",
      paramText: "Hello, World!",
      remaining: "^FS",
    });
  });
  it("gets correct command info for empty commands", () => {
    const input = "^BC^FD123";
    const info = getCommandInfo(input, "^", "~");
    expect(info).toEqual({
      name: "BC",
      paramText: "",
      remaining: "^FD123",
    });
  });
});

describe("parse", () => {
  it("parses simple commands", () => {
    const input = "^XA^FO100,100^FDHello, World!^FS^XZ";
    const parsed = parse(input);
    expect(parsed).toEqual([
      [
        new FieldOrigin("100,100"),
        new FieldData("Hello, World!"),
        new FieldSeparator(),
      ],
    ]);
  });

  it("parses a barcode command", () => {
    const input = `^BY5,2,270
^FO100,550^BC^FD12345678^FS`;
    const parsed = parse(input);
    expect(parsed).toEqual([
      [
        new BarcodeFieldDefault("5,2,270"),
        new FieldOrigin("100,550"),
        new BarcodeFieldCode128(""),
        new FieldData("12345678"),
        new FieldSeparator(),
      ],
    ]);
  });
});
