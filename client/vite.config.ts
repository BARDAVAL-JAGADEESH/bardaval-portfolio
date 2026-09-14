import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages project site: https://BARDAVAL-JAGADEESH.github.io/Bardaval-portfolio/
export default defineConfig({
  base: '/Bardaval-portfolio/',
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:5050',
        changeOrigin: true,
      },
    },
  },
})
