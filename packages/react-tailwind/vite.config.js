import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

const root = path.join(process.cwd(), 'src')

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: []
    }
  },
  optimizeDeps: {
    entries: []
  },
  resolve: {
    alias: {
      $components: path.resolve(__dirname, 'src/components'),
      $tools: path.resolve(__dirname, 'src/tools')
    }
  },
  plugins: [
    react({
      babel: {
        plugins: ['@babel/plugin-transform-react-jsx']
      }
    })
  ]
})
