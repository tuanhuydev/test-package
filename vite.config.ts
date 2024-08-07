import { resolve } from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.js'),
      name:'testPackage',
      fileName: 'test-package'
    },
    rollupOptions: {
      external:['react'],
      output: {
        globals: {
          react: 'react'
        }
      }
    }
  }
})
