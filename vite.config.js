import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Serve the root directory as public so /assets/images/* paths resolve
  publicDir: 'public',
  server: {
    port: 5173,
    fs: {
      // Allow serving files from project root
      allow: ['..'],
    },
  },
})
