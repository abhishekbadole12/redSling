import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["5806-103-183-91-79.ngrok-free.app","650d-103-183-91-79.ngrok-free.app"],
  }
})
