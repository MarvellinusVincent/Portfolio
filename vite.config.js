import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  assetsInclude: ['**/*.JPG', '**/*.jpg'],
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['next/navigation'],
    },
    chunkSizeWarningLimit: 1600,
    cssCodeSplit: false,
    sourcemap: true
  },
  optimizeDeps: {
    include: ['framer-motion']
  }
})
