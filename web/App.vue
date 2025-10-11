<template>
  <div class="min-h-screen bg-background">
    <!-- Header -->
    <header
      class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div class="container flex h-14 items-center">
        <div class="mr-4 flex">
          <a class="mr-6 flex items-center space-x-2" href="/">
            <svg
              class="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
              />
            </svg>
            <span class="font-bold">ZPLr</span>
          </a>
          <nav
            class="hidden md:flex items-center space-x-6 text-sm font-medium"
          >
            <span class="text-foreground/60">ZPL Parser & Renderer</span>
          </nav>
        </div>
        <div class="flex flex-1 items-center justify-end space-x-2">
          <a
            href="https://github.com"
            target="_blank"
            class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground h-9 w-9"
          >
            <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              />
            </svg>
          </a>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="container py-6">
      <div class="grid gap-6 lg:grid-cols-2">
        <!-- Editor Panel -->
        <div class="space-y-6">
          <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div class="flex flex-col space-y-1.5 p-6 pb-4">
              <h3 class="text-2xl font-semibold leading-none tracking-tight">
                Editor
              </h3>
              <p class="text-sm text-muted-foreground">
                Enter or select ZPL code to render
              </p>
            </div>
            <div class="p-6 pt-0 space-y-4">
              <!-- Example Templates -->
              <div>
                <label class="text-sm font-medium leading-none mb-2 block"
                  >Quick Examples</label
                >
                <div class="flex flex-wrap gap-2">
                  <button
                    v-for="example in examples"
                    :key="example.name"
                    @click="loadExample(example)"
                    class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 px-3"
                    :class="
                      currentExample === example.name
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                        : 'border border-input bg-background hover:bg-accent hover:text-accent-foreground'
                    "
                  >
                    <span class="mr-1.5">{{ example.icon }}</span>
                    {{ example.name }}
                  </button>
                </div>
              </div>

              <!-- Code Editor -->
              <div class="relative">
                <textarea
                  v-model="zplCode"
                  @input="onCodeChange"
                  class="flex min-h-[400px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-mono ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                  placeholder="Enter your ZPL code here..."
                  spellcheck="false"
                ></textarea>
                <div
                  class="absolute bottom-3 right-3 flex items-center space-x-2"
                >
                  <span
                    v-if="autoRender"
                    class="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    Live Preview
                  </span>
                </div>
              </div>

              <!-- Controls -->
              <div class="flex flex-wrap items-center gap-2">
                <button
                  @click="renderZPL"
                  :disabled="rendering"
                  class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                >
                  <span v-if="!rendering" class="flex items-center">
                    <svg
                      class="mr-2 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                    Render
                  </span>
                  <span v-else class="flex items-center">
                    <svg
                      class="animate-spin -ml-1 mr-2 h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        class="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        stroke-width="4"
                      ></circle>
                      <path
                        class="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Rendering...
                  </span>
                </button>

                <button
                  @click="clearCanvas"
                  class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                >
                  <svg
                    class="mr-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                  Clear
                </button>

                <label class="flex items-center space-x-2 cursor-pointer">
                  <input
                    v-model="autoRender"
                    type="checkbox"
                    class="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <span
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >Auto-render</span
                  >
                </label>
              </div>

              <!-- Canvas Size Controls -->
              <div class="rounded-lg border bg-muted p-4">
                <label class="text-sm font-medium leading-none mb-3 block"
                  >Canvas Size</label
                >
                <div class="grid grid-cols-2 gap-4">
                  <div class="space-y-2">
                    <label class="text-xs text-muted-foreground"
                      >Width (px)</label
                    >
                    <input
                      v-model.number="canvasWidth"
                      type="number"
                      min="100"
                      max="2000"
                      step="50"
                      class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                  <div class="space-y-2">
                    <label class="text-xs text-muted-foreground"
                      >Height (px)</label
                    >
                    <input
                      v-model.number="canvasHeight"
                      type="number"
                      min="100"
                      max="2000"
                      step="50"
                      class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                </div>
              </div>

              <!-- Messages -->
              <div
                v-if="error"
                class="rounded-lg border border-destructive/50 bg-destructive/10 p-4"
              >
                <div class="flex items-start gap-3">
                  <svg
                    class="h-5 w-5 text-destructive flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p class="text-sm text-destructive">{{ error }}</p>
                </div>
              </div>

              <div v-if="info" class="rounded-lg border bg-muted p-4">
                <div class="flex items-start gap-3">
                  <svg
                    class="h-5 w-5 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p class="text-sm">{{ info }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Canvas Panel -->
        <div class="space-y-6">
          <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div class="flex flex-col space-y-1.5 p-6 pb-4">
              <div class="flex items-center justify-between">
                <div>
                  <h3
                    class="text-2xl font-semibold leading-none tracking-tight"
                  >
                    Preview
                  </h3>
                  <p class="text-sm text-muted-foreground">
                    Rendered ZPL output
                  </p>
                </div>
                <button
                  v-if="hasRendered"
                  @click="downloadCanvas"
                  class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
                >
                  <svg
                    class="mr-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Download PNG
                </button>
              </div>
            </div>
            <div class="p-6 pt-0">
              <div
                class="relative flex items-center justify-center rounded-md border bg-muted/30 p-8 min-h-[600px]"
              >
                <canvas
                  ref="canvas"
                  :width="canvasWidth"
                  :height="canvasHeight"
                  class="max-w-full h-auto border rounded-md shadow-sm bg-white"
                  :class="{ 'opacity-50': rendering }"
                ></canvas>

                <div
                  v-if="!hasRendered && !rendering"
                  class="absolute inset-0 flex items-center justify-center"
                >
                  <div class="text-center space-y-3">
                    <svg
                      class="w-16 h-16 mx-auto text-muted-foreground/40"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <div class="space-y-1">
                      <p class="text-sm font-medium text-muted-foreground">
                        No preview yet
                      </p>
                      <p class="text-xs text-muted-foreground/60">
                        Select an example or click Render
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                v-if="renderTime && hasRendered"
                class="mt-4 flex items-center justify-between rounded-lg border bg-muted/50 p-3"
              >
                <div class="flex items-center text-sm">
                  <svg
                    class="mr-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span class="font-medium">Rendered successfully</span>
                </div>
                <span class="text-xs font-mono text-muted-foreground"
                  >{{ renderTime }}ms</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, type Ref } from "vue";
import { parse, render } from "../src/index.web";

// Types
interface ZPLExample {
  name: string;
  icon: string;
  code: string;
}

// State
const zplCode: Ref<string> = ref("");
const canvasWidth: Ref<number> = ref(400);
const canvasHeight: Ref<number> = ref(600);
const canvas: Ref<HTMLCanvasElement | null> = ref(null);
const rendering: Ref<boolean> = ref(false);
const error: Ref<string> = ref("");
const info: Ref<string> = ref("");
const hasRendered: Ref<boolean> = ref(false);
const renderTime: Ref<number> = ref(0);
const autoRender: Ref<boolean> = ref(true);
const currentExample: Ref<string> = ref("");

let renderTimeout: ReturnType<typeof setTimeout> | null = null;

// Example ZPL codes
const examples: ZPLExample[] = [
  {
    name: "Text",
    icon: "📝",
    code: `^XA
^FO100,100^FDHello World^FS
^FO100,150^FDThis is ZPL on the web!^FS
^FO100,200^FDZPLr Library Demo^FS
^XZ`,
  },
  {
    name: "Graphics",
    icon: "📦",
    code: `^XA
^FO50,50^GB300,200,5^FS
^FO100,100^GC100,5^FS
^FO180,130^FDBox & Circle^FS
^XZ`,
  },
  {
    name: "Label",
    icon: "🏷️",
    code: `^XA
^FO50,50^GB350,500,3^FS
^FO100,100^FDProduct Name^FS
^FO100,150^FDPrice: $19.99^FS
^FO100,200^FDSKU: 12345^FS
^FO100,300^GB250,2,2^FS
^FO100,350^FDMade with ZPLr^FS
^XZ`,
  },
  {
    name: "Barcode",
    icon: "🔲",
    code: `^XA
^FO100,100^BCN,100,Y,N,N^FD123456^FS
^FO100,250^FDBarcode: 123456^FS
^XZ`,
  },
  {
    name: "QR Code",
    icon: "📱",
    code: `^XA
^FO150,150^BQN,2,4^FDHELLO WORLD^FS
^FO150,350^FDQR Code Example^FS
^XZ`,
  },
];

// Load the first example on mount
onMounted(() => {
  loadExample(examples[0]);
});

// Watch for auto-render
watch([zplCode, canvasWidth, canvasHeight], () => {
  if (autoRender.value) {
    // Debounce rendering
    if (renderTimeout) {
      clearTimeout(renderTimeout);
    }
    renderTimeout = setTimeout(() => {
      renderZPL();
    }, 500);
  }
});

// Load example
function loadExample(example: ZPLExample): void {
  zplCode.value = example.code;
  currentExample.value = example.name;
  error.value = "";
  info.value = "";
  if (autoRender.value) {
    renderZPL();
  }
}

// Handle code change
function onCodeChange(): void {
  // Handled by watcher
}

// Render ZPL
async function renderZPL(): Promise<void> {
  if (!zplCode.value.trim()) {
    error.value = "Please enter some ZPL code";
    return;
  }

  rendering.value = true;
  error.value = "";
  info.value = "";

  try {
    const startTime = performance.now();

    // Parse ZPL
    const labels = parse(zplCode.value);

    if (!labels || labels.length === 0) {
      throw new Error("No labels parsed from ZPL code");
    }

    // Render to canvas
    const renderedCanvas = await render(
      labels[0],
      canvasWidth.value,
      canvasHeight.value
    );

    // Copy the rendered canvas to our display canvas
    if (canvas.value && renderedCanvas) {
      const ctx = canvas.value.getContext("2d");
      if (ctx) {
        ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);
        ctx.drawImage(renderedCanvas, 0, 0);
      }
    }

    const endTime = performance.now();
    renderTime.value = Math.round(endTime - startTime);

    hasRendered.value = true;
    info.value = `Successfully rendered ${labels[0].length} commands`;
  } catch (err) {
    console.error("Rendering error:", err);
    error.value = (err as Error).message || "Failed to render ZPL";
    hasRendered.value = false;
  } finally {
    rendering.value = false;
  }
}

// Clear canvas
function clearCanvas(): void {
  const ctx = canvas.value?.getContext("2d");
  if (ctx) {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvasWidth.value, canvasHeight.value);
  }
  hasRendered.value = false;
  info.value = "";
  error.value = "";
  renderTime.value = 0;
}

// Download canvas as PNG
function downloadCanvas(): void {
  if (!canvas.value) return;

  const link = document.createElement("a");
  link.download = "zpl-label.png";
  link.href = canvas.value.toDataURL("image/png");
  link.click();
}
</script>
