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
        "default-src 'self'",
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
        "script-src 'self' 'unsafe-inline' https://maps.googleapis.com https://*.googleapis.com",
        "img-src 'self' data: https://*.googleapis.com https://*.cdninstagram.com",
        "connect-src 'self' ws: wss: https://*.googleapis.com https://*.supabase.co https://graph.instagram.com https://www.instagram.com https://mdfmjrcznydyyboergpx.supabase.co",
        "font-src 'self' https://fonts.gstatic.com https://*.cdninstagram.com"
      ].join('; ')
    }
  },
  preview: {
    port: 3000,
    strictPort: true,
    host: true
  },
});