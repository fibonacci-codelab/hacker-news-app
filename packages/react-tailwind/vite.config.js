import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: []
    }
  },
  optimizeDeps: {
    entries: [],
  },
  plugins: [react({
    babel: {
      plugins: ['@babel/plugin-transform-react-jsx'],
    }
  })]
})
