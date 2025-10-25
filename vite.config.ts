import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: Replace <YOUR_REPOSITORY_NAME> with your actual GitHub repo name
  base: '/<YOUR_REPOSITORY_NAME>/',
})
