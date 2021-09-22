import liveReload from 'vite-plugin-live-reload'
import { resolve } from 'path'

// TODO: auto reload on change (currently doesn't work), notes:
// 1. see liveReload plugin below,
// 2. works here: https://github.com/arnoson/kirby-vite-multi-page-kit

// Docs: https://vitejs.dev/config/

export default ({ mode }) => ({
  root: 'resources',
  base: mode === 'development' ? '/' : '/dist/',
  /* TODO: test if works */
  resolve: {
    alias: {
      '@utils': resolve(__dirname, 'resources/js/utils'),
      '@components': resolve(__dirname, 'resources/js/components'),
      '@vendors': resolve(__dirname, 'resources/js/vendors'),
    },
  },
  server: {
    port: 3000,
    hmr: { host: 'localhost' },
    strictPort: true,
    cors: true
  },
  build: {
    target: 'es2015',
    outDir: resolve(process.cwd(), 'public/dist'),
    rollupOptions: {
      input: resolve(process.cwd(), 'resources/index.js')
    },
    manifest: true,
    emptyOutDir: true
  },
  plugins: [
    liveReload([
      'app/**/*.php',
      'resources/**',
      'storage/content/**/*'
    ])
  ]
})
