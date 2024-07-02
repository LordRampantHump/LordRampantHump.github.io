import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: `https://lordrampanthump.github.io/react/twitch_ui/build/`,
  server: {
    proxy: {
      '/': {
        target: 'https://lordrampanthump.github.io/react/twitch_ui/build/'
      }
    }
  }
})
