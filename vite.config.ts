import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    postcss: './postcss.config.js',
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
    target: ['es2015', 'safari12', 'chrome64'],
    polyfillModulePreload: true,
  },
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    hmr: {
      host: 'localhost',
      port: 5173,
      path: '/hmr/',
      timeout: 30000,
      protocol: 'ws'
    },
    watch: {
      usePolling: true
    },
    headers: {
      'Content-Security-Policy': [
        "default-src 'self' https:",
        "connect-src 'self' ws: wss: https://*.googleapis.com https://*.supabase.co https://graph.instagram.com https://www.instagram.com https://mdfmjrcznydyyboergpx.supabase.co",
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
        "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://maps.googleapis.com https://*.googleapis.com",
        "img-src 'self' data: blob: https: *",
        "font-src 'self' data: https://fonts.gstatic.com https://*.cdninstagram.com"
      ].join('; ')
    }
  },
  preview: {
    port: 3000,
    strictPort: true,
    host: true
  },
});