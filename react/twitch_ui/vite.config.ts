import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  base: `https://lordrampanthump.github.io/react/twitch_ui/build/`,
 
})
