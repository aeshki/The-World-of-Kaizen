import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  base: '/the-world-of-kaizen/',
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@', replacement: resolve(__dirname, 'src')
      }
    ],
  }
});