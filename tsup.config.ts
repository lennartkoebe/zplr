import { defineConfig } from "tsup";

export default defineConfig([
  // Node.js build
  {
    entry: ["src/index.node.ts"],
    format: ["esm"],
    dts: true,
    outDir: "dist",
    sourcemap: true,
    clean: true,
    // Keep native modules external
    external: ["skia-canvas", "canvas"],
    target: "node18",
    splitting: false,
  },
  // Web/Browser build
  {
    entry: ["src/index.web.ts"],
    format: ["esm"],
    dts: true,
    outDir: "dist",
    sourcemap: true,
    platform: "browser",
    target: "es2020",
    splitting: false,
    // Bundle all dependencies for the browser
    noExternal: ["qrcode", "jsbarcode"],
  },
]);
