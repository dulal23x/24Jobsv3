import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000', // Django default port
        changeOrigin: true,
      }
    },
    watch: {
      // Prevent watching backend files to avoid unnecessary reloads
      ignored: [
        // Ignore the virtual environment folder (relative path from frontend dir)
        path.resolve(__dirname, '../venv/**'),
        // Ignore the SQLite database file (relative path from frontend dir)
        path.resolve(__dirname, '../db.sqlite3'),
        // Ignore backend python files etc. to be safe
        path.resolve(__dirname, '../backend/**'),
        path.resolve(__dirname, '../api/**'),
        path.resolve(__dirname, '../manage.py'),
      ]
    }
  }
}) 