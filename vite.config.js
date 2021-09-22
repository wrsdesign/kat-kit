import liveReload from 'vite-plugin-live-reload'
import { resolve } from 'path'

// Docs: https://vitejs.dev/config/

export default ({ mode }) => ({
  root: 'src',
  base: mode === 'development' ? '/' : '/dist/',
  resolve: {
    alias: {
      '@utils': resolve(__dirname, 'src/js/utils'),
      '@components': resolve(__dirname, 'src/js/components'),
      '@vendors': resolve(__dirname, 'src/js/vendors'),
    },
  },
  server: {
    port: 3000,
    strictPort: true,
    cors: true
  },
  build: {
    target: 'es2015',
    outDir: resolve(process.cwd(), 'public/dist'),
    rollupOptions: {
      input: resolve(process.cwd(), 'src/index.js')
    },
    manifest: true,
    emptyOutDir: true
  },
  plugins: [
    liveReload([
      resolve(process.cwd(), 'app/(templates|snippets|controllers|models)/**/*.php'),
      resolve(process.cwd(), 'storage/content/**/*')
    ])
  ]
})
