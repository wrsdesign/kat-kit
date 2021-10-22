import liveReload from 'vite-plugin-live-reload'
import { resolve } from 'path'
import WindiCSS from 'vite-plugin-windicss'

// Docs: https://vitejs.dev/config/

const cwd = process.cwd()

export default ({ mode }) => ({
  root: 'src',
  base: mode === 'development' ? '/' : '/assets/',
  resolve: {
    alias: [
      { find: '@utils', replacement: resolve(cwd, 'src/js/utils') },
      { find: '@components', replacement: resolve(cwd, 'src/js/components') },
      { find: '@vendors', replacement: resolve(cwd, 'src/js/vendors') }
    ],
  },
  server: {
    port: 3000,
    strictPort: true,
    cors: true
  },
  build: {
    target: 'es2015',
    assetsDir: '.',
    outDir: resolve(cwd, 'www/public/assets'),
    rollupOptions: {
      input: resolve(cwd, 'src/index.js')
    },
    manifest: true,
    emptyOutDir: true,
  },
  plugins: [
    liveReload([
      resolve(cwd, 'www/app/(templates|snippets|controllers|models)/**/*.php'),
      resolve(cwd, 'www/storage/content/**/*')
    ]),
    WindiCSS({
      config: resolve(cwd, 'windi.config.js'),
      scan: {
        dirs: [
          resolve(cwd, 'www/app/templates'),
          resolve(cwd, 'www/app/snippets'),
          resolve(cwd, 'src')
        ],
        fileExtensions: ['php', 'js'],
      }
    })
  ]
})
