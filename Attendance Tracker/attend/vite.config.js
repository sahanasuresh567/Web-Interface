import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rollup/plugin-babel'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/Web-Interface/',
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})
