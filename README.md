# ZPLr

A TypeScript library for parsing and rendering ZPL label files. Works in both Node.js and web environments with separate optimized entry points.

## Installation

```bash
npm install zplr
# or
pnpm install zplr
```

For Node.js usage, you'll also need `skia-canvas`:

```bash
npm install skia-canvas
# or
pnpm install skia-canvas
```

## Usage

### Node.js

```typescript
import { parse, render } from "zplr/node";

// Parse ZPL string
const zpl = "^XA^FO100,100^FDHello World^FS^XZ";
const labels = parse(zpl); // Returns array of command arrays (one per label)

// Render first label to canvas
const canvas = await render(labels[0], 400, 600);

// Save to file (skia-canvas feature)
await canvas.saveAs("output.png");
```

### Web (Browser)

```typescript
import { parse, render } from "zplr/web";

// Parse and render
const zpl = "^XA^FO100,100^FDHello World^FS^XZ";
const labels = parse(zpl);

// Render to canvas
const canvas = await render(labels[0], 400, 600);

// Append to document or use as needed
document.body.appendChild(canvas);
```

### Convenience Function

Both entry points provide a `parseAndRender` convenience function:

```typescript
// Node.js
import { parseAndRender } from "zplr/node";
const canvases = await parseAndRender("^XA^FO100,100^FDHello^FS^XZ", 400, 600);
await canvases[0].saveAs("label.png");

// Web
import { parseAndRender } from "zplr/web";
const canvases = await parseAndRender("^XA^FO100,100^FDHello^FS^XZ", 400, 600);
document.body.appendChild(canvases[0]);
```

## API

### `parse(zpl: string): Command[][]`

Parses a ZPL string into command arrays. Returns an array of arrays, where each inner array represents one label (multiple labels are separated by `^XA`/`^XZ` pairs).

### Node.js: `render(commands: Command[], width: number, height: number): Promise<Canvas>`

Renders parsed ZPL commands to a skia-canvas Canvas.

**Parameters:**

- `commands`: Array of parsed ZPL commands
- `width`: Canvas width in pixels
- `height`: Canvas height in pixels

**Returns:** A skia-canvas Canvas instance with `saveAs()` and other Node.js features

### Web: `render(commands: Command[], width: number, height: number): Promise<HTMLCanvasElement>`

Renders parsed ZPL commands to an HTMLCanvasElement.

**Parameters:**

- `commands`: Array of parsed ZPL commands
- `width`: Canvas width in pixels
- `height`: Canvas height in pixels

**Returns:** An HTMLCanvasElement ready to use in the browser

### `parseAndRender(zpl: string, width: number, height: number): Promise<Canvas[] | HTMLCanvasElement[]>`

Convenience function that parses and renders in one call. Returns an array of canvas instances, one per label.

## Supported ZPL Commands

- `^FO` - Field Origin (positioning)
- `^FD` - Field Data (text content)
- `^FS` - Field Separator
- `^CF`/`^CFA` - Change Alphanumeric Default Font
- `^GB` - Graphic Box
- `^GC` - Graphic Circle
- `^BC` - Code 128 Barcode
- `^B3` - Code 39 Barcode
- `^B4` - Code 49 Barcode
- `^BQ` - QR Code
- `^FB` - Field Block (text wrapping)
- `^FR` - Field Reverse Print
- And more...

## Examples

### Node.js Example

```bash
# Run the Node.js examples
pnpm examples
```

### Web Example

A modern, beautiful web interface built with Vue 3, Vite, and Tailwind CSS:

```bash
# Start the web development server
pnpm dev:web
```

Then open your browser to `http://localhost:5173`

**Features:**

- 🎨 Modern Tailwind UI with gradient backgrounds
- ⚡ Live auto-render as you type
- 📝 5 pre-built example templates
- 💾 Download rendered labels as PNG
- 📊 Real-time performance metrics

See `web/README.md` for more details.

## Development

```bash
# Install dependencies
pnpm install

# Run dev mode (watches src/examples.ts)
pnpm dev

# Run tests
pnpm test

# Build the library
pnpm build
```

## Architecture

This library uses a command pattern where each ZPL command is a class that:

1. Parses its parameters in the constructor
2. Implements `applyToContext(context)` to either modify state or draw to canvas

See `.github/copilot-instructions.md` for detailed architecture documentation.

## License

ISC
