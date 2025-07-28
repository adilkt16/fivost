import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Set base path for GitHub Pages - matches your repository name 'fivost'
  base: mode === 'production' ? '/fivost/' : '/',
  
  // Development server configuration
  server: {
    host: "::",
    port: 8080,
  },
  
  // Build configuration optimized for GitHub Pages
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false, // Disable sourcemaps for smaller build size
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu'],
        },
      },
    },
  },
  
  // Plugins configuration
  plugins: [
    react(),
    // Only use componentTagger in development
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  
  // Path resolution
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  
  // Preview server configuration (for npm run preview)
  preview: {
    port: 4173,
    host: true,
  },
}));