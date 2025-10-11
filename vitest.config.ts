/// <reference types="vitest/config" />

// Configure Vitest (https://vitest.dev/config/)

import { defineConfig } from "vitest/config";
import viteTSConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [viteTSConfigPaths()],
  test: {
    /* for example, use global to avoid globals imports (describe, test, expect): */
    // globals: true,
  },
});
