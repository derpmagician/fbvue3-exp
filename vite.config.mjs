import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // base: process.env.NODE_ENV === 'production' ? '/fbvue3-exp/' : './',
  base: import.meta.env.MODE === 'production' ? '/fbvue3-exp/' : './',
  minify: false,
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
