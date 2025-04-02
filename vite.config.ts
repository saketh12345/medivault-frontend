import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Use dynamic import for ESM compatibility
let componentTagger;
(async () => {
  const module = await import("lovable-tagger");
  componentTagger = module.componentTagger;
})();

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger ? componentTagger() : null,
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));