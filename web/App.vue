<template>
  <div class="bg-white relative isolate overflow-hidden dark:bg-zinc-900">
    <svg
      class="inset-0 stroke-zinc-200 -z-10 absolute size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] dark:stroke-white/10"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
          width="200"
          height="200"
          x="50%"
          y="-1"
          patternUnits="userSpaceOnUse"
        >
          <path d="M.5 200V.5H200" fill="none" />
        </pattern>
      </defs>
      <svg
        x="50%"
        y="-1"
        class="fill-zinc-50 overflow-visible dark:fill-zinc-800/20"
      >
        <path
          d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
          stroke-width="0"
        />
      </svg>
      <rect
        width="100%"
        height="100%"
        stroke-width="0"
        fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
      />
    </svg>
    <div
      class="transform-gpu top-10 left-[calc(50%-4rem)] -z-10 absolute blur-3xl sm:left-[calc(50%-18rem)] lg:top-[calc(50%-30rem)] lg:left-48 xl:left-[calc(50%-24rem)]"
      aria-hidden="true"
    >
      <div
        class="bg-linear-to-r from-black to-black opacity-20 w-277 aspect-1108/632"
        style="
          clip-path: polygon(
            73.6% 51.7%,
            91.7% 11.8%,
            100% 46.4%,
            97.4% 82.2%,
            92.5% 84.9%,
            75.7% 64%,
            55.3% 47.5%,
            46.5% 49.4%,
            45% 62.9%,
            50.3% 87.2%,
            21.3% 64.1%,
            0.1% 100%,
            5.4% 51.1%,
            21.4% 63.9%,
            58.9% 0.2%,
            73.6% 51.7%
          );
        "
      />
    </div>
    <div
      class="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:py-40 lg:px-8 lg:justify-between"
    >
      <div class="mx-auto max-w-2xl shrink-0 lg:mx-0 lg:pt-8">
        <img class="h-16" src="./assets/logo.svg" alt="ZPLr Logo" />
        <div class="space-x-6 mt-24 inline-flex sm:mt-32 lg:mt-16">
          <a
            href="https://github.com/lennartkoebe/zplr"
            class="space-x-6 inline-flex"
          >
            <span
              class="rounded-full flex flex-row font-semibold bg-zinc-50 ring-inset py-1 px-3 ring-1 ring-zinc-600/20 text-sm/6 text-zinc-600 items-center whitespace-nowrap dark:bg-zinc-500/10 dark:ring-zinc-500/25 dark:text-zinc-400"
            >
              <svg
                class="h-4 mr-2 w-4 inline-block"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                />
              </svg>
              <span>GitHub</span></span
            >
          </a>
          <a
            href="https://www.npmjs.com/package/zplr"
            class="space-x-6 inline-flex"
          >
            <span
              class="font-medium space-x-2 text-sm/6 text-zinc-600 inline-flex items-center dark:text-zinc-300"
            >
              <span>v{{ currentPackageVersion }}</span>
              <ChevronRightIcon
                class="text-zinc-400 size-5 dark:text-zinc-500"
                aria-hidden="true"
              />
            </span>
          </a>
        </div>
        <h1
          class="font-extrabold mt-10 text-pretty tracking-tight text-5xl text-zinc-900 sm:text-7xl dark:text-white"
        >
          ZPLr
        </h1>
        <p
          class="font-medium mt-8 text-lg text-pretty text-zinc-500 sm:text-xl/8 dark:text-zinc-400"
        >
          TypeScript library for parsing and rendering ZPL label files
        </p>
        <div class="flex mt-10 gap-x-6 items-center">
          <a
            href="#"
            class="rounded-md font-semibold bg-zinc-600 text-sm text-white py-2.5 px-3.5 shadow-2xs dark:bg-zinc-500 hover:bg-zinc-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-600 dark:hover:bg-zinc-400 dark:focus-visible:outline-zinc-500"
            >Get started</a
          >
          <a
            href="#"
            class="font-semibold text-sm/6 text-zinc-900 dark:text-white"
            >live editor <span aria-hidden="true">→</span></a
          >
        </div>
      </div>
      <div
        class="flex mx-auto mt-16 max-w-2xl sm:mt-24 lg:flex-none lg:max-w-none lg:mt-0 lg:mr-0 lg:ml-10 xl:ml-32"
      >
        <div class="flex-none max-w-3xl sm:max-w-5xl lg:max-w-none">
          <img
            :src="renderedExampleBase64"
            alt="App screenshot"
            width="2432"
            height="1442"
            class="bg-zinc-50 rounded-3xl shadow-xl w-120"
          />
        </div>
      </div>
    </div>
  </div>
  <div class="bg-background min-h-screen">
    <!-- Header -->

    <!-- Main Content -->
    <main class="container py-6">
      <div class="grid gap-6 lg:grid-cols-2">
        <!-- Editor Panel -->
        <div class="space-y-6">
          <div class="bg-card border rounded-lg shadow-xs text-card-foreground">
            <div class="flex flex-col space-y-1.5 p-6 pb-4">
              <h3 class="font-semibold leading-none tracking-tight text-2xl">
                Editor
              </h3>
              <p class="text-sm text-muted-foreground">
                Enter or select ZPL code to render
              </p>
            </div>
            <div class="space-y-4 p-6 pt-0">
              <!-- Example Templates -->
              <div>
                <label class="font-medium text-sm leading-none mb-2 block"
                  >Quick Examples</label
                >
                <div class="flex flex-wrap gap-2">
                  <button
                    v-for="example in examples"
                    :key="example.name"
                    @click="loadExample(example)"
                    class="rounded-md font-medium h-9 text-sm px-3 transition-colors inline-flex items-center justify-center focus-visible:outline-hidden focus-visible:ring-ring focus-visible:ring-2 disabled:opacity-50 disabled:pointer-events-none"
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
                  class="bg-background border border-input rounded-md flex font-mono ring-offset-background text-sm min-h-[400px] w-full py-2 px-3 placeholder:text-muted-foreground resize-none focus-visible:outline-hidden focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Enter your ZPL code here..."
                  spellcheck="false"
                ></textarea>
                <div
                  class="flex space-x-2 right-3 bottom-3 absolute items-center"
                >
                  <span
                    v-if="autoRender"
                    class="bg-secondary rounded-md font-medium text-xs text-secondary-foreground py-1 px-2 inline-flex items-center"
                  >
                    Live Preview
                  </span>
                </div>
              </div>

              <!-- Controls -->
              <div class="flex flex-wrap gap-2 items-center">
                <button
                  @click="renderZPL"
                  :disabled="rendering"
                  class="bg-primary rounded-md font-medium h-10 ring-offset-background text-sm text-primary-foreground py-2 px-4 transition-colors inline-flex items-center justify-center hover:bg-primary/90 focus-visible:outline-hidden focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"
                >
                  <span v-if="!rendering" class="flex items-center">
                    <svg
                      class="h-4 mr-2 w-4"
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
                      class="h-4 mr-2 -ml-1 animate-spin w-4"
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
                  class="bg-background border border-input rounded-md font-medium h-10 ring-offset-background text-sm py-2 px-4 transition-colors inline-flex items-center justify-center hover:bg-accent hover:text-accent-foreground focus-visible:outline-hidden focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"
                >
                  <svg
                    class="h-4 mr-2 w-4"
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

                <label class="cursor-pointer flex space-x-2 items-center">
                  <input
                    v-model="autoRender"
                    type="checkbox"
                    class="border border-primary rounded-sm h-4 ring-offset-background w-4 peer shrink-0 focus-visible:outline-hidden focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <span
                    class="font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >Auto-render</span
                  >
                </label>
              </div>

              <!-- Canvas Size Controls -->
              <div class="bg-muted border rounded-lg p-4">
                <label class="font-medium text-sm leading-none mb-3 block"
                  >Canvas Size</label
                >
                <div class="grid gap-4 grid-cols-2">
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
                      class="bg-background border border-input rounded-md flex h-10 ring-offset-background text-sm w-full py-2 px-3 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground file:border-0 focus-visible:outline-hidden focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
                      class="bg-background border border-input rounded-md flex h-10 ring-offset-background text-sm w-full py-2 px-3 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground file:border-0 focus-visible:outline-hidden focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                </div>
              </div>

              <!-- Messages -->
              <div
                v-if="error"
                class="border rounded-lg bg-destructive/10 border-destructive/50 p-4"
              >
                <div class="flex gap-3 items-start">
                  <svg
                    class="h-5 mt-0.5 text-destructive w-5 shrink-0"
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

              <div v-if="info" class="bg-muted border rounded-lg p-4">
                <div class="flex gap-3 items-start">
                  <svg
                    class="h-5 mt-0.5 w-5 shrink-0"
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
          <div class="bg-card border rounded-lg shadow-xs text-card-foreground">
            <div class="flex flex-col space-y-1.5 p-6 pb-4">
              <div class="flex items-center justify-between">
                <div>
                  <h3
                    class="font-semibold leading-none tracking-tight text-2xl"
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
                  class="bg-background border border-input rounded-md font-medium h-9 ring-offset-background text-sm py-2 px-4 transition-colors inline-flex items-center justify-center hover:bg-accent hover:text-accent-foreground focus-visible:outline-hidden focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"
                >
                  <svg
                    class="h-4 mr-2 w-4"
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
                class="border rounded-md flex bg-muted/30 min-h-[600px] p-8 relative items-center justify-center"
              >
                <canvas
                  ref="canvas"
                  :width="canvasWidth"
                  :height="canvasHeight"
                  class="bg-white border rounded-md h-auto max-w-full shadow-xs"
                  :class="{ 'opacity-50': rendering }"
                ></canvas>

                <div
                  v-if="!hasRendered && !rendering"
                  class="flex inset-0 absolute items-center justify-center"
                >
                  <div class="space-y-3 text-center">
                    <svg
                      class="mx-auto h-16 text-muted-foreground/40 w-16"
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
                      <p class="font-medium text-sm text-muted-foreground">
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
                class="border rounded-lg flex bg-muted/50 mt-4 p-3 items-center justify-between"
              >
                <div class="flex text-sm items-center">
                  <svg
                    class="h-4 mr-2 w-4"
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
                <span class="font-mono text-xs text-muted-foreground"
                  >{{ renderTime }}ms
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, watch, type Ref, watchEffect } from "vue";
import { parse, parseAndRenderPNG, render } from "../src/index.web";
import packageJSON from "../package.json";

const baseExample = ref(`^XA

^FX Change Encoding
^CI28

^FX Borders
^FO20,20^GB570,770,8,,1^FS
^FO20,270^GB570,,8^FS
^FO20,470^GB570,,8^FS
^FO220,270^GB,200,8^FS
^FO20,570^GB570,,8^FS
^FO25,470^GB100,100,50^FS
^FO20,670^GB570,,8^FS

^FX Weight and page number
^CF0,30
^FO0,50^FB609,1,0,C^FD6,4 kg^FS
^CF0,20
^FO40,60^FB529,1,0,R^FD1 von 1^FS

^FX From Address
^CFA,20
^FO60,80^FDACME Inc.^FS
^FO60,100^FDCompany Street 5^FS
^FO60,120^FD32584 Löhne^FS

^FX To Address
^CF0,20
^FO60,165^FDSHIP TO:^FS
^CFA,20
^FO80,195^FDMax Mustermann^FS
^FO80,215^FDTeststraße 6^FS
^FO80,235^FD86152 Augsburg^FS

^FX Fragile
^FO365,180^GB200,70,8,,1^FS
^CF0,50
^FO380,195^FDFRAGILE^FS

^FX QR-Code
^FO40,280
^BQN,2,8
^FDMM,ALENNART KOEBE^FS

^FX Barcode Code 39
^FO260,350^BY3^B3,N,80,Y,Y^FD1234^FS

^FX Shipping Company Logo
^FO40,490^GB70,10,10,W,4^FS
^FO40,505^GB50,10,10,W,4^FS
^FO95,505^GB15,10,10,W,4^FS
^FO40,520^GB30,10,10,W,4^FS
^FO75,520^GB35,10,10,W,4^FS
^FO40,535^GB15,10,10,W,4^FS
^FO60,535^GB50,10,10,W,4^FS
^FO40,550^GB70,10,10,W,4^FS

^FX Shipping Company Details
^CF0,30
^FO150,500^FDZPLr^FS
^CFA,20
^FO150,535^FDThe open source ZPL renderer^FS

^FX Barcode Code 128
^FO40,590^BY3^BCN,70,N,N,N^FD0123456789ABC^FS

^FX Bottom infos
^CF0,20
^FO60,700^FB489,1,0,L^FDReferences:^FS
^CFA,20
^FO60,740^FB489,1,0,L^FDInvoice nr.^FS
^FO60,740^FB489,1,0,C^FD54321^FS
^FO60,740^FB489,1,0,R^FD02/01/2019^FS

^XZ`);
const renderedExampleBase64 = ref<string>();

watchEffect(async () => {
  renderedExampleBase64.value = (
    await parseAndRenderPNG(baseExample.value, 610, 810)
  )[0];
});

const currentPackageVersion = packageJSON.version;

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
