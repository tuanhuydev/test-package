import { resolve } from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name:'main',
      fileName: 'main',
    },
    rollupOptions: {
      external:['react', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'react'
        }
      }
    }
  }
})
