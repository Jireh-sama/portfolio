import path from 'path'
import { execFileSync } from 'child_process'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Short hash of the commit being built, shown in the footer. Hosts like Vercel
// expose it as an env var; locally we ask git; otherwise fall back to "dev".
function commitHash() {
  const fromEnv = process.env.VERCEL_GIT_COMMIT_SHA ?? process.env.COMMIT_SHA
  if (fromEnv) return fromEnv.slice(0, 7)
  try {
    return execFileSync('git', ['rev-parse', '--short', 'HEAD']).toString().trim()
  } catch {
    return 'dev'
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    tailwindcss(),
  ],
  define: {
    __COMMIT_HASH__: JSON.stringify(commitHash()),
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
