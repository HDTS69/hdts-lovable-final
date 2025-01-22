import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://localhost:8082',
        changeOrigin: true,
        rewrite: (path) => path
      },
    },
    fs: {
      strict: true,
    },
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: 'es2015',
    minify: mode === 'development' ? false : 'terser',
    cssMinify: mode === 'development' ? false : true,
    sourcemap: mode === 'development',
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react/') || id.includes('react-dom/')) {
              return 'vendor';
            }
            if (id.includes('@radix-ui/react-')) {
              return 'radix';
            }
            if (id.includes('@tanstack/react-query') || id.includes('framer-motion')) {
              return 'utils';
            }
          }
        },
        assetFileNames: (assetInfo) => {
          if (!assetInfo?.name) return 'assets/[name]-[hash][extname]';
          
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          if (/woff|woff2/.test(ext)) {
            return `assets/fonts/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
      },
    },
    assetsDir: 'assets',
    chunkSizeWarningLimit: 1000,
    terserOptions: {
      compress: {
        drop_console: mode === 'production',
        drop_debugger: mode === 'production',
        pure_funcs: mode === 'production' ? ['console.log'] : [],
      },
      format: {
        comments: false,
      },
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
    exclude: ['@tanstack/react-query'],
  },
}));