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
              <IconChevronRight
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
          <button
            @click="editorOpen = true"
            class="rounded-full cursor-pointer flex font-semibold py-1 px-3 text-sm/6 text-zinc-900 items-center dark:text-white hover:bg-black/5"
          >
            <IconTextBoxEdit class="mr-2 inline-block" />
            live editor
          </button>
        </div>
      </div>
      <div
        class="flex mx-auto mt-16 max-w-2xl sm:mt-24 lg:flex-none lg:max-w-none lg:mt-0 lg:mr-0 lg:ml-10 xl:ml-32"
      >
        <div class="flex-none max-w-3xl sm:max-w-5xl lg:max-w-none">
          <img
            :src="renderedExampleBase64"
            alt="App screenshot"
            @click="handleCanvasClick"
            @mousemove="handleCanvasMouseMove"
            :style="{ cursor: canvasCursor }"
            width="2432"
            height="1442"
            class="bg-zinc-50 rounded-3xl shadow-xl w-120"
          />
        </div>
      </div>
    </div>
  </div>
  <TransitionRoot as="template" :show="editorOpen">
    <Dialog class="z-10 relative" @close="editorOpen = false">
      <div class="bg-black/5 inset-0 fixed" />

      <div class="inset-0 fixed overflow-hidden">
        <div class="inset-0 absolute overflow-hidden">
          <div
            class="flex inset-0 pointer-events-none fixed"
          >
            <TransitionChild
              as="template"
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enter-from="opacity-0"
              enter-to="opacity-100"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leave-from="opacity-100"
              leave-to="opacity-0"
            >
              <DialogPanel class="w-screen h-screen pointer-events-auto">
                <div
                  class="bg-white flex flex-col h-screen shadow-xl relative overflow-hidden dark:bg-gray-800"
                >
                  <div class="px-4 py-4 sm:px-6 border-b border-gray-200 dark:border-gray-700">
                    <div class="flex items-start justify-between">
                      <DialogTitle
                        class="font-semibold text-base text-gray-900 dark:text-white"
                      >
                        Live Editor
                      </DialogTitle>
                      <div class="flex h-7 ml-3 items-center">
                        <button
                          type="button"
                          class="rounded-md text-gray-400 relative hover:text-gray-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:hover:text-white dark:focus-visible:outline-indigo-500"
                          @click="editorOpen = false"
                        >
                          <span class="-inset-2.5 absolute" />
                          <span class="sr-only">Close editor</span>
                          <IconClose class="size-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="flex-1 flex overflow-hidden">
                    <!-- Left side: Code Editor -->
                    <div class="flex-1 flex flex-col overflow-hidden">
                      <MonacoEditor
                        v-model="baseExample"
                        :cursor-position="editorCursorPosition"
                        :highlight-range="highlightRange"
                        @update:cursor-position="handleEditorCursorChange"
                        class="h-full w-full"
                      />
                    </div>
                    <!-- Right side: Canvas Preview -->
                    <div class="flex-1 flex flex-col px-4 py-4 overflow-auto sm:px-6 bg-gray-50 dark:bg-gray-900">
                      <div class="flex items-center justify-center h-full">
                        <img
                          :src="renderedExampleBase64"
                          alt="ZPL Preview"
                          @click="handleCanvasClick"
                          @mousemove="handleCanvasMouseMove"
                          @mouseleave="handleCanvasMouseLeave"
                          :style="{ cursor: canvasCursor }"
                          class="max-w-full max-h-full object-contain bg-white rounded-lg shadow-lg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
<script setup lang="ts">
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { IconClose, IconTextBoxEdit } from "@iconify-prerendered/vue-mdi";
import { ref, watch } from "vue";
import packageJSON from "../package.json";
import {
  parseAndRender,
  findCommandAtPosition,
  findCommandAtCoordinate,
  parse,
  type HighlightRegion,
  parseAndRenderAdvanced
} from "../src/index.web";
import { IconChevronRight } from "@iconify-prerendered/vue-mdi";
import MonacoEditor from "./components/MonacoEditor.vue";

// Helper function to draw highlights on a canvas
function drawHighlights(
  ctx: CanvasRenderingContext2D,
  regions: HighlightRegion[],
  highlightedCommandIndex: number | undefined
) {
  if (highlightedCommandIndex === undefined) return;

  for (const region of regions) {
    if (region.commandIndex === highlightedCommandIndex) {
      ctx.save();
      ctx.fillStyle = "rgba(255, 165, 0, 0.3)";
      ctx.strokeStyle = "rgba(255, 165, 0, 0.8)";
      ctx.lineWidth = 2;

      switch (region.type) {
        case "box":
          if (region.width && region.height) {
            ctx.fillRect(region.x, region.y, region.width, region.height);
            ctx.strokeRect(region.x, region.y, region.width, region.height);
          }
          break;
        case "circle":
          if (region.radius) {
            ctx.beginPath();
            ctx.arc(region.x, region.y, region.radius, 0, 2 * Math.PI);
            ctx.fill();
            ctx.stroke();
          }
          break;
        case "barcode":
        case "text":
          if (region.width && region.height) {
            ctx.fillRect(region.x, region.y, region.width, region.height);
            ctx.strokeRect(region.x, region.y, region.width, region.height);
          }
          break;
        case "origin":
          // Draw crosshair at origin
          const size = 20;
          ctx.beginPath();
          ctx.moveTo(region.x - size, region.y);
          ctx.lineTo(region.x + size, region.y);
          ctx.moveTo(region.x, region.y - size);
          ctx.lineTo(region.x, region.y + size);
          ctx.stroke();

          // Draw circle at origin point
          ctx.fillStyle = "rgba(255, 165, 0, 0.5)";
          ctx.beginPath();
          ctx.arc(region.x, region.y, 5, 0, 2 * Math.PI);
          ctx.fill();
          ctx.stroke();
          break;
      }
      ctx.restore();
    }
  }
}

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
const renderedExampleCanvas = ref<HTMLCanvasElement | null>(null);
const baseCanvas = ref<HTMLCanvasElement | null>(null); // Cache base rendering
const highlightRegions = ref<HighlightRegion[]>([]);
const editorCursorPosition = ref<number>(0);
const highlightRange = ref<{ start: number; end: number } | undefined>(undefined);
const highlightedCommandIndex = ref<number | undefined>(undefined);
const hoveredCommandIndex = ref<number | undefined>(undefined);
const canvasCursor = ref<string>("default");
const editorOpen = ref(false);

// Update cursor position and find highlighted command (from editor)
function handleEditorCursorChange(position: number) {
  editorCursorPosition.value = position;
  const commandIndex = findCommandAtPosition(baseExample.value, position);
  highlightedCommandIndex.value = commandIndex;
  hoveredCommandIndex.value = undefined; // Clear hover when editing
  
  // Update highlight range based on command
  updateHighlightRange(commandIndex);
}

// Update highlight range for the Monaco Editor decoration
function updateHighlightRange(commandIndex: number | undefined) {
  if (commandIndex !== undefined) {
    const commands = parse(baseExample.value)[0];
    if (commands && commands[commandIndex]) {
      const cmd = commands[commandIndex];
      if (cmd.sourceStart !== undefined && cmd.sourceEnd !== undefined) {
        highlightRange.value = { start: cmd.sourceStart, end: cmd.sourceEnd };
        return;
      }
    }
  }
  highlightRange.value = undefined;
}

// Handle canvas mouse move (hover highlighting)
function handleCanvasMouseMove(event: MouseEvent) {
  if (!renderedExampleCanvas.value) return;
  
  const rect = (event.target as HTMLImageElement).getBoundingClientRect();
  const scaleX = renderedExampleCanvas.value.width / rect.width;
  const scaleY = renderedExampleCanvas.value.height / rect.height;
  const x = (event.clientX - rect.left) * scaleX;
  const y = (event.clientY - rect.top) * scaleY;
  
  const commandIndex = findCommandAtCoordinate(highlightRegions.value, x, y);
  hoveredCommandIndex.value = commandIndex;
  canvasCursor.value = commandIndex !== undefined ? "pointer" : "default";
  
  // Update highlight range when hovering
  if (editorOpen.value) {
    updateHighlightRange(commandIndex);
  }
}

// Handle canvas mouse leave (clear hover)
function handleCanvasMouseLeave() {
  hoveredCommandIndex.value = undefined;
  canvasCursor.value = "default";
  
  // Restore highlight to current cursor position when leaving canvas
  if (editorOpen.value) {
    updateHighlightRange(highlightedCommandIndex.value);
  }
}

// Handle canvas click (select code in editor)
function handleCanvasClick(event: MouseEvent) {
  if (!renderedExampleCanvas.value) {
    // If canvas not ready, just open the editor
    editorOpen.value = true;
    return;
  }
  
  if (!editorOpen.value) {
    // If editor closed, open it
    editorOpen.value = true;
    return;
  }
  
  const rect = (event.target as HTMLImageElement).getBoundingClientRect();
  const scaleX = renderedExampleCanvas.value.width / rect.width;
  const scaleY = renderedExampleCanvas.value.height / rect.height;
  const x = (event.clientX - rect.left) * scaleX;
  const y = (event.clientY - rect.top) * scaleY;
  
  const commandIndex = findCommandAtCoordinate(highlightRegions.value, x, y);
  
  if (commandIndex !== undefined) {
    const commands = parse(baseExample.value)[0];
    if (commands && commands[commandIndex]) {
      const cmd = commands[commandIndex];
      if (cmd.sourceStart !== undefined) {
        // Move cursor to the command position in the editor
        editorCursorPosition.value = cmd.sourceStart;
        highlightedCommandIndex.value = commandIndex;
        hoveredCommandIndex.value = undefined;
        
        // Update highlight range
        updateHighlightRange(commandIndex);
      }
    }
  }
}

// Render base ZPL (without highlights) - only when code changes
watch(
  baseExample,
  async () => {
    const result = (await parseAndRenderAdvanced(baseExample.value, 610, 810))[0];
    
    if (result) {
      baseCanvas.value = result.canvas;
      highlightRegions.value = result.highlightRegions;
      
      // Trigger initial composite with current highlight
      updateDisplayCanvas();
    }
  },
  { immediate: true }
);

// Update display canvas with highlights - called when highlight changes
function updateDisplayCanvas() {
  if (!baseCanvas.value) return;
  
  // Create or reuse display canvas
  if (!renderedExampleCanvas.value) {
    renderedExampleCanvas.value = document.createElement('canvas');
    renderedExampleCanvas.value.width = baseCanvas.value.width;
    renderedExampleCanvas.value.height = baseCanvas.value.height;
  }
  
  const ctx = renderedExampleCanvas.value.getContext('2d');
  if (!ctx) return;
  
  // Clear and draw base canvas
  ctx.clearRect(0, 0, renderedExampleCanvas.value.width, renderedExampleCanvas.value.height);
  ctx.drawImage(baseCanvas.value, 0, 0);
  
  // Draw highlights on top
  const activeHighlight = hoveredCommandIndex.value ?? highlightedCommandIndex.value;
  drawHighlights(ctx, highlightRegions.value, activeHighlight);
  
  // Update data URL for display
  renderedExampleBase64.value = renderedExampleCanvas.value.toDataURL("image/png");
}

// Watch for highlight changes and update display
watch([hoveredCommandIndex, highlightedCommandIndex], () => {
  updateDisplayCanvas();
});

const currentPackageVersion = packageJSON.version;
</script>
