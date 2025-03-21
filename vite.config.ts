
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react({
      jsxImportSource: undefined,
      tsDecorators: false,
      plugins: []
    }),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Optimize build for animations and UI
  build: {
    target: "es2019", // Better browser compatibility
    cssCodeSplit: true, // Split CSS for better caching
    chunkSizeWarningLimit: 600, // Increased limit for larger chunks
    minify: "terser", // Use Terser for better minification
    terserOptions: {
      compress: {
        // Optimize animations and event handlers
        passes: 2,
        ecma: 2019,
        keep_infinity: true,
      },
    },
    // Optimize chunk size to reduce load time
    rollupOptions: {
      output: {
        manualChunks: {
          framer: ["framer-motion"],
          react: ["react", "react-dom"],
          reactRouter: ["react-router-dom"],
          lucide: ["lucide-react"],
        },
      },
    },
  },
}));
