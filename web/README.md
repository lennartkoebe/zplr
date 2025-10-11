# Web Example - Modern Tailwind UI

A beautiful, modern web interface for the ZPLr ZPL parser built with Vue 3, Vite, and Tailwind CSS.

## Features

### 🎨 Modern Design

- Beautiful gradient backgrounds
- Tailwind CSS styling
- Responsive layout
- Smooth animations and transitions
- Glass morphism effects

### ⚡ Live Rendering

- **Auto-render mode**: Automatically renders as you type (with 500ms debounce)
- **Manual render**: Click "Render Now" button for on-demand rendering
- Real-time feedback with performance metrics

### 📝 Code Editor

- 5 pre-built example templates
- Syntax-highlighted code editor
- Adjustable canvas dimensions
- Clear canvas functionality

### 🎯 Key Features

- Live preview with auto-render toggle
- Performance timing (shows render time in ms)
- Download rendered labels as PNG
- Error handling with clear messages
- Success notifications

## Running the Web App

From the project root:

```bash
# Install dependencies (if not already done)
pnpm install

# Start development server
pnpm dev:web

# Build for production
pnpm build:web

# Preview production build
pnpm preview:web
```

The app will be available at `http://localhost:5173/`

## Project Structure

```
zplr/
├── index.html           # Root HTML entry point
├── web/                 # Web app source
│   ├── main.js         # Vue app initialization
│   ├── style.css       # Tailwind directives
│   ├── App.vue         # Main Vue component
│   └── browser-stubs/  # Browser-compatible stubs
│       └── skia-canvas.js
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind configuration
└── postcss.config.js   # PostCSS configuration
```

## How It Works

### Auto-Render Mode

When auto-render is enabled (default), the app watches for changes to:

- ZPL code content
- Canvas width
- Canvas height

Changes trigger a debounced render (500ms delay) to provide smooth live preview without overwhelming the renderer.

### Browser Compatibility

The app uses a browser stub for `skia-canvas` that provides a native `HTMLCanvasElement` instead of the Node.js Canvas implementation. This is configured in `vite.config.js`:

```javascript
alias: {
  'skia-canvas': fileURLToPath(new URL('./web/browser-stubs/skia-canvas.js', import.meta.url))
}
```

## Tailwind Styling

The app uses a modern Tailwind design with:

- Gradient backgrounds (`from-indigo-500 via-purple-500 to-pink-500`)
- Glass morphism effects (`backdrop-blur-md`)
- Smooth transitions and hover effects
- Responsive grid layout
- Custom color schemes for different states

## Technology Stack

- **Vue 3** - Composition API with `<script setup>` and TypeScript
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool with HMR
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing with Autoprefixer
- **ZPLr** - ZPL parsing and rendering (from parent directory)

## TypeScript Configuration

The web app uses a dedicated `tsconfig.web.json` configuration:

- Supports Vue Single File Components (.vue files)
- Uses ESNext module syntax for modern JavaScript features
- Includes DOM types for browser APIs
- Type declarations in `env.d.ts` for Vue SFCs

## Development Commands

```bash
# Start development server
pnpm run dev:web

# Type check without emitting files
pnpm run typecheck:web

# Build for production with type checking
pnpm run build:web

# Preview production build
pnpm run preview:web
```

## Development Tips

### Customizing Styles

Edit `web/App.vue` to customize the component styles. All styles use Tailwind utility classes.

### Adding Examples

Add new examples to the `examples` array in `App.vue`:

```javascript
{
  name: 'My Example',
  icon: '🎉',
  code: `^XA
^FO100,100^FDMy ZPL^FS
^XZ`
}
```

### Adjusting Auto-Render Delay

Change the debounce timeout in the watcher (currently 500ms):

```javascript
renderTimeout = setTimeout(() => {
  renderZPL();
}, 500); // Adjust this value
```

## Browser Support

Works in all modern browsers that support:

- ES6+ JavaScript
- HTML5 Canvas
- CSS Grid
- CSS Flexbox
