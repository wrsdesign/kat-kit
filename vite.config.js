import liveReload from 'vite-plugin-live-reload'
import { resolve } from 'path'
import WindiCSS from 'vite-plugin-windicss'

// Docs: https://vitejs.dev/config/

export default ({ mode }) => ({
  root: 'src',
  base: mode === 'development' ? '/' : '/dist/',
  resolve: {
    alias: [
      { find: '@utils', replacement: resolve(__dirname, 'src/js/utils') },
      { find: '@components', replacement: resolve(__dirname, 'src/js/components') },
      { find: '@vendors', replacement: resolve(__dirname, 'src/js/vendors') }
    ],
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
    ]),
    WindiCSS()
  ]
})
