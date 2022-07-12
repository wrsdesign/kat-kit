import liveReload from 'vite-plugin-live-reload'
import { resolve } from 'path'

const cwd = process.cwd()

// Docs: https://vitejs.dev/config/
export default ({ mode }) => ({
  root: 'src',
  base: mode === 'development' ? '/' : '/assets/',
  resolve: {
    alias: [
      { find: '@utils', replacement: resolve(cwd, 'src/js/utils') },
      { find: '@components', replacement: resolve(cwd, 'src/js/components') },
      { find: '@vendors', replacement: resolve(cwd, 'src/js/vendors') },
    ],
  },
  server: {
    port: 3000,
    strictPort: true,
    cors: true,
  },
  build: {
    target: 'es2017',
    assetsDir: '.',
    outDir: resolve(cwd, 'assets'),
    rollupOptions: {
      input: resolve(cwd, 'src/app.js'),
    },
    manifest: true,
    emptyOutDir: true,
  },
  plugins: [
    liveReload([
      resolve(cwd, 'app/(templates|snippets|controllers|models)/**/*.php'),
      resolve(cwd, 'storage/content/**/*'),
    ]),
  ],
})
