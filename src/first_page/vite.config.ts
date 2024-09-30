import path from 'path'
import 'dotenv/config'
import { defineConfig } from 'vite'

export default defineConfig({
  root: 'src/first_page',
  build: {
    outDir: path.resolve(__dirname, '../../www'),
    target: process.env.VITE_BUILD_TARGET?.split(','),
    lib: {
      entry: 'main.ts',
      formats: ['iife'],
      name: 'Base',
      fileName: () => 'first_page.js'
    }
  }
})
