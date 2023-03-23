import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      routes: [{ path: '(.*)', component: '/src/App.jsx' }]
    })
  ],
  resolve: {
    alias: {
      components: "/src/components",
      assets: "/src/assets",
      constants: "/src/constants",
      api: "/src/api",
      pages: "/src/pages",
      routes: "/src/routes",
      shared: "/src/shared",
      store: "/src/store",
      utils: "/src/utils",
      hooks: "/src/hooks",
      context: "/src/context",
    }
  },
  // server: {
  //   port: 3000,
  //   strictPort: true,
  //   hmr: {
  //     clientPort: 3000,
  //     port: 3001,
  //   },
  // },

})
