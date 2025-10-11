# Copilot Instructions for AI Coding Agents

## Project Overview

**ZPLr** is a TypeScript library for parsing and rendering ZPL label files. It's designed to work in both Node.js and web environments, converting ZPL strings into rendered canvas outputs.

## Library Architecture

This is a **library project** (not an application). The public API surface is:

- **`parse(zpl: string)`**: Parses ZPL string into command objects (`src/helper/labelParsing/parse.ts`)
- **`render(commands, width, height)`**: Renders commands to a Canvas (`src/helper/rendering/render.ts`)

## Core Architecture

### Command Pattern

Each ZPL command (e.g., `^FO`, `^GB`, `^BC`) is a class implementing `CommandClass` interface:

- **Static property**: `static readonly command = "XY"` (the ZPL command code)
- **Constructor**: Parses parameter string (e.g., `"100,200,3"`)
- **`applyToContext(context: RenderContext)`**: Mutates render context or draws to canvas

Example: `FieldOrigin` (^FO) sets `context.fieldX/fieldY`, while `GraphicBox` (^GB) draws directly.

### Parser Flow (`src/helper/labelParsing/parse.ts`)

1. Scans ZPL string for command markers (`^` or `~`, customizable via `^CC`)
2. Extracts command name (2-char code like `FO`, `GB`) and parameter string
3. Looks up command class in `CommandMap` (from `src/commands/index.ts`)
4. Instantiates command with parameter string
5. Returns arrays of commands per label (supports multiple labels via `^XA`/`^XZ`)

### Renderer Flow (`src/helper/rendering/render.ts`)

1. Creates canvas with specified dimensions (uses `skia-canvas` for Node/web compatibility)
2. Initializes `RenderContext` with mutable state (position, font, barcode defaults)
3. Iterates commands, calling `applyToContext()` for each
4. Special handling: barcode commands set `context.barcodeCommand`, which `FieldSeparator` triggers to render

## Developer Workflows

- **Dependencies**: Managed with `pnpm` (not npm/yarn)
- **Dev/Test**: `pnpm dev` (runs `src/examples.ts` with tsx watch mode)
- **Testing**: `pnpm test` (vitest) - tests in `src/helper/labelParsing/parse.test.ts`
- **Path Aliases**: `@/*` resolves to `src/*` (configured in `tsconfig.json`)

## Project-Specific Conventions

### Adding a ZPL Command

1. Create `src/commands/NewCommand.ts` with:
   ```typescript
   export class NewCommand implements CommandClass {
     static readonly command = "XY"; // ZPL code
     constructor(paramString: string) {
       /* parse params */
     }
     applyToContext(context: RenderContext): void {
       /* apply/draw */
     }
   }
   ```
2. Add to `AllCommands` array in `src/commands/index.ts`
3. Use parsing helpers from `src/helper/parsing/`:
   - `parseNumber(arg, default, min, max)` - extracts/validates numbers
   - `enumValOrDefault(arg, values, default)` - validates enum values
   - `parseOrientation(arg)` - parses rotation values (N/R/I/B)
   - `yesNoDefault(arg, default)` - parses Y/N flags

### Barcode Commands

Implement `BarcodeCommand` interface (extends `CommandClass` with `render()` method). Examples: `BarcodeFieldCode128`, `BarcodeFieldQRCode`. These:

1. Set `context.barcodeCommand = this` in `applyToContext()`
2. Implement `render(context)` to draw barcode using `context.fieldData`
3. Get triggered by `FieldSeparator` (^FS) which calls `barcodeCommand.render()`

### RenderContext State Machine

`RenderContext` (`src/types/RenderContext.ts`) holds mutable state:

- **Field positioning**: `fieldX/fieldY` set by `FieldOrigin` (^FO)
- **Font state**: `fontKey`, `charHeight/charWidth` set by `ChangeAlphaDefaultFont` (^CF/^CFA)
- **Barcode state**: `barcodeCommand` set by barcode commands, `barcodeDefaults` for module width/height
- **Field data**: `fieldData` set by `FieldData` (^FD), consumed by barcode/text rendering

## Key Integration Points

- **Canvas**: Uses `skia-canvas` (Node/web compatible) - context is `CanvasRenderingContext2D`
- **Barcode libs**: `jsbarcode` (Code128/39), `qrcode` (QR codes)
- **Examples**: `examples/*.zpl` files with corresponding `.zpl.png` outputs for visual regression testing

## Common Pitfalls

- **Always register new commands** in `src/commands/index.ts` `AllCommands` array
- **Barcode rendering is deferred** - `applyToContext()` sets state, `FieldSeparator` triggers actual drawing
- **Parameter parsing is strict** - use helper functions, they handle defaults/validation/edge cases
