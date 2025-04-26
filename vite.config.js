import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: 'LoanOptions', // 👈 IMPORTANT: Add your repo name here
  plugins: [react()],
})
