import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const shimPaths = {
  "vite-plugin-node-polyfills/shims/buffer": path.resolve(
    __dirname,
    "node_modules/vite-plugin-node-polyfills/shims/buffer/dist/index.js"
  ),
  "vite-plugin-node-polyfills/shims/global": path.resolve(
    __dirname,
    "node_modules/vite-plugin-node-polyfills/shims/global/dist/index.js"
  ),
  "vite-plugin-node-polyfills/shims/process": path.resolve(
    __dirname,
    "node_modules/vite-plugin-node-polyfills/shims/process/dist/index.js"
  ),
};

// Custom plugin to fix vite-plugin-node-polyfills shim resolution for Vite 7.
// The nodePolyfills plugin injects shim imports during transform, but Vite 7's
// load-fallback can't resolve the bare specifiers. This plugin intercepts them.
function resolvePolyfillShims() {
  return {
    name: "resolve-polyfill-shims",
    enforce: "pre",
    resolveId(source) {
      if (shimPaths[source]) {
        return shimPaths[source];
      }
      return null;
    },
  };
}

export default defineConfig({
  plugins: [
    resolvePolyfillShims(),
    react(),
    tailwindcss(),
    wasm(),
    topLevelAwait(),
    nodePolyfills({
      protocolImports: true,
      globals: {
        Buffer: true,
        process: true,
      },
    }),
  ],
  define: {
    global: "globalThis",
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});