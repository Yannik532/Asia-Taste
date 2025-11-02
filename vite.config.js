import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { optimizeHTML } from './vite-build-plugin.js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), optimizeHTML()],
  base: '/Asia-Taste/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'lottie-vendor': ['lottie-react'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    cssCodeSplit: true,
    minify: 'esbuild',
    sourcemap: false,
    cssMinify: true,
    // Optimize asset handling
    assetsInlineLimit: 4096, // Inline small assets (< 4KB)
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
})


