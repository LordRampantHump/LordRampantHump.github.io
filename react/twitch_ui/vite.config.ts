import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import lightningcss from "vite-plugin-lightningcss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: 
  [
    react(), 
    svgr(),
    lightningcss({
      browserslist: "last 2 versions",
    }),
  ],
  base: `https://lordrampanthump.github.io/react/twitch_ui/build/`,
  build:{
    cssMinify:'lightningcss',
    outDir: '../dist',
    emptyOutDir: true,
  }
 
})
