import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/Nicolas_Bamamou_Career_Chinese/' : '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.pdf'],
  build: {
    minify: 'terser',
    chunkSizeWarningLimit: 1000, // Increase the limit to 1000kb
    terserOptions: {
      format: {
        comments: false,
      },
    },
    rollupOptions: {
      output: {
        format: 'iife'
      }
    }
  }
})