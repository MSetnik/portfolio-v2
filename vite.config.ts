import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    resolve(),
    react({
      jsxImportSource: 'react', // ensure React is imported from 'react'
      jsxRuntime: 'classic', // disable the automatic JSX transform if it's causing issues
    }),
    commonjs()
  ],
  esbuild: {
    jsx: "automatic",
    jsxImportSource: "react"
  },
  optimizeDeps: {
    force: true, // Forces Vite to re-optimize dependencies on each build
  },

})

