# ZPLr Usage Guide

## Installation

```bash
npm install zplr
# or
pnpm add zplr
```

### Additional Dependencies

**For Node.js**, you need `skia-canvas`:

```bash
npm install skia-canvas
# or
pnpm add skia-canvas
```

**For Web**, no additional dependencies are needed (uses native browser Canvas).

---

## API Overview

The library exposes three main functions:

1. **`parse(zpl: string): Command[][]`** - Parse ZPL into command arrays
2. **`render(commands: Command[], options: RenderOptions): Promise<CanvasLike>`** - Render commands to canvas
3. **`parseAndRender(zpl: string, options: RenderOptions): Promise<CanvasLike[]>`** - Convenience function combining both

---

## Node.js Usage

### Basic Example

```typescript
import { Canvas } from "skia-canvas";
import { parse, render } from "zplr";

const zpl = "^XA^FO100,100^FDHello World^FS^XZ";

// Parse ZPL
const labels = parse(zpl);

// Render to canvas
const canvas = await render(labels[0], {
  width: 400,
  height: 600,
  canvas: Canvas, // Pass the Canvas constructor
});

// Save to file (skia-canvas feature)
await canvas.saveAs("output.png");
```

### Multiple Labels

```typescript
import { Canvas } from "skia-canvas";
import { parseAndRender } from "zplr";

const zpl = `
^XA
^FO50,50^FDLabel 1^FS
^XZ
^XA
^FO50,50^FDLabel 2^FS
^XZ
`;

// Parse and render all labels
const canvases = await parseAndRender(zpl, {
  width: 400,
  height: 600,
  canvas: Canvas,
});

// Save each label
for (let i = 0; i < canvases.length; i++) {
  await (canvases[i] as Canvas).saveAs(`label-${i + 1}.png`);
}
```

### Using an Existing Canvas Instance

```typescript
import { Canvas } from "skia-canvas";
import { parse, render } from "zplr";

// Create canvas first (maybe you want to pre-configure it)
const myCanvas = new Canvas(400, 600);

const zpl = "^XA^FO100,100^FDCustom Canvas^FS^XZ";
const labels = parse(zpl);

// Render to existing canvas
await render(labels[0], {
  width: 400,
  height: 600,
  canvas: myCanvas, // Pass the instance
});

await myCanvas.saveAs("custom.png");
```

---

## Web (Browser) Usage

### With Existing Canvas Element

```typescript
import { parse, render } from "zplr";

// Get canvas from DOM
const canvas = document.getElementById("myCanvas") as HTMLCanvasElement;

const zpl = "^XA^FO100,100^FDWeb Rendering^FS^XZ";
const labels = parse(zpl);

await render(labels[0], {
  width: 400,
  height: 600,
  canvas: canvas, // Pass the canvas element
});

// Canvas is now rendered!
```

### With Dynamic Canvas Creation

```typescript
import { parse, render } from "zplr";

const zpl = "^XA^FO100,100^FDDynamic Canvas^FS^XZ";
const labels = parse(zpl);

// Create a new canvas element
const canvas = document.createElement("canvas");
document.body.appendChild(canvas);

await render(labels[0], {
  width: 400,
  height: 600,
  canvas: canvas,
});
```

### Complete Web Example

A modern, beautiful web interface built with Vue 3, Vite, and Tailwind CSS:

```bash
# From project root
pnpm dev:web
```

Open `http://localhost:5173/`

**Features:**

- Clean shadcn-inspired design
- Real-time ZPL parsing and rendering
- Live auto-render as you type
- Multiple example templates
- Adjustable canvas dimensions
- Download rendered labels as PNG
- Responsive layout

See `web/README.md` for more details.

---

## Building for Web

---

## Building for Web

<button onclick="renderZPL()">Render</button>
<canvas id="output"></canvas>

  <script type="module">
    import { parse, render } from './path/to/zplr/dist/index.js';

    window.renderZPL = async function() {
      const zpl = document.getElementById('zpl-input').value;
      const canvas = document.getElementById('output');
      
      try {
        const labels = parse(zpl);
        await render(labels[0], {
          width: 400,
          height: 600,
          canvas: canvas
        });
      } catch (error) {
        console.error('Rendering error:', error);
      }
    };
  </script>
</body>
</html>
```

---

## TypeScript Types

### RenderOptions

```typescript
interface RenderOptions {
  width: number; // Canvas width in pixels
  height: number; // Canvas height in pixels
  canvas?: CanvasLike | CanvasConstructor;
}
```

### CanvasLike

Any object with these properties:

```typescript
interface CanvasLike {
  width: number;
  height: number;
  getContext(contextId: "2d"): any;
}
```

This matches:

- `HTMLCanvasElement` (browser)
- `Canvas` from skia-canvas (Node.js)
- Any custom canvas implementation

### CanvasConstructor

A constructor function that creates canvas instances:

```typescript
interface CanvasConstructor {
  new (width: number, height: number): CanvasLike;
}
```

---

## Architecture Benefits

This design provides several advantages:

1. **Environment Agnostic**: Same API works in Node.js and browsers
2. **Flexible**: Use existing canvas or let the library create one
3. **Type Safe**: Full TypeScript support with proper inference
4. **No Platform-Specific Imports**: The library doesn't hardcode `skia-canvas` or browser APIs
5. **Tree Shakeable**: Import only what you need

---

## Migration from Internal render()

If you have code using the old internal `render()` function from `src/helper/rendering/render.ts`:

**Before:**

```typescript
import { render } from "@/helper/rendering/render";
const canvas = await render(commands, 400, 600);
```

**After (Node.js):**

```typescript
import { Canvas } from "skia-canvas";
import { render } from "zplr";
const canvas = await render(commands, {
  width: 400,
  height: 600,
  canvas: Canvas,
});
```

**After (Web):**

```typescript
import { render } from "zplr";
const canvas = document.getElementById("myCanvas");
await render(commands, { width: 400, height: 600, canvas });
```

---

## Building for Web

To use this library in a web application, you'll need a bundler (Vite, Webpack, etc.):

### Using Vite

```bash
npm create vite@latest my-zpl-app -- --template vanilla-ts
cd my-zpl-app
npm install zplr
```

Then in your code:

```typescript
import { parse, render } from "zplr";
// Use the library as shown in examples above
```

### Notes on skia-canvas

The `skia-canvas` dependency is optional and only needed for Node.js. Modern bundlers will tree-shake it away when building for the web, or you can mark it as an external dependency in your build configuration.

---

## Examples

See the following files for complete working examples:

- `src/examples.ts` - Node.js examples
- `web/App.vue` - Modern web interface with Vue/Tailwind
- `examples/*.zpl` - Sample ZPL files for testing
