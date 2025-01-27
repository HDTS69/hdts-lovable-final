import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: true,
    hmr: {
      host: 'localhost',
      path: '/hmr/',
      timeout: 30000
    },
    watch: {
      usePolling: true
    }
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: 'esnext',
    minify: 'esbuild',
    cssCodeSplit: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Core vendor dependencies
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'react-vendor';
            if (id.includes('@heroicons')) return 'icons-vendor';
            if (id.includes('framer-motion')) return 'animation-vendor';
            return 'vendor';
          }
          // Route-based code splitting
          if (id.includes('/pages/')) {
            const page = id.split('/pages/')[1].split('/')[0];
            return `page-${page}`;
          }
          // Feature-based code splitting
          if (id.includes('/features/')) {
            const feature = id.split('/features/')[1].split('/')[0];
            return `feature-${feature}`;
          }
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
      }
    },
    reportCompressedSize: false,
    chunkSizeWarningLimit: 1000
  },
  optimizeDeps: {
    include: [
      'react', 
      'react-dom', 
      'react-router-dom',
      'framer-motion'
    ],
    exclude: ['@/components/ui']
  },
  clearScreen: false,
  envPrefix: 'VITE_'
}));