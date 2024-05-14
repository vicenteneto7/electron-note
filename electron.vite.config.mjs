import path, { resolve, normalize, dirname } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'

import { main } from './package.json'


const [nodeModules, devFolder] = normalize(dirname(main)).split(/\/|\\/g)
const devPath = [nodeModules, devFolder].join('/')


export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],

    publicDir: path.resolve('resources'),

    build: {
      rollupOptions: {
        input: {
          index: resolve('src/main/index.js'),
        },

        output: {
          dir: resolve(devPath),
        },
      },
    },
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    css: {
      postcss: {
        plugins: [
          tailwindcss({
            config: './src/renderer/tailwind.config.js'
          })
        ]
      },
    },
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src')
      }
    },
    plugins: [react()]
  }
})
