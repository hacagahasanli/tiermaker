import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: "/src/components",
      assets: "/src/assets",
      constants: "/src/constants",
      client: "/src/client",
      pages: "/src/pages",
      routes: "/src/routes",
      shared: "/src/shared",
      store: "/src/store",
      utils: "/src/utils",
    }
  },
  //  server: {
  //   port: 3000,
  //   strictPort: true,
  //   hmr: {
  //     clientPort: 3000,
  //     port: 3001,
  //   },
  // },

})
