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
      manualChunks: (id) => {
        // React vendor chunk
        if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) {
          return 'react-vendor'
        }
        // Lottie vendor chunk
        if (id.includes('node_modules/lottie')) {
          return 'lottie-vendor'
        }
        // QR Code vendor chunk
        if (id.includes('node_modules/qrcode')) {
          return 'qrcode-vendor'
        }
        // Split large component chunks
        if (id.includes('Features')) {
          return 'features-chunk'
        }
        if (id.includes('Testimonials')) {
          return 'testimonials-chunk'
        }
      },
      },
    },
    chunkSizeWarningLimit: 800,
    cssCodeSplit: true,
    minify: 'esbuild',
    sourcemap: false,
    cssMinify: true,
    // Optimize asset handling - smaller limit for mobile
    assetsInlineLimit: 2048, // Inline small assets (< 2KB)
    // Improve compression
    reportCompressedSize: false, // Speeds up build slightly
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
})


