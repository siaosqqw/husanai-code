// Preload: mock bun:bundle for dev mode
// In production builds, bun:bundle is resolved at compile time.
// For dev mode (bun run dev), we need this mock.
import { plugin } from 'bun'

plugin({
  name: 'bun-bundle-mock',
  setup(build) {
    build.module('bun:bundle', () => {
      return {
        exports: {
          feature: (_name: string) => false,
        },
        loader: 'object',
      }
    })
    // Also mock 'bundle' for files that import from 'bundle'
    build.module('bundle', () => {
      return {
        exports: {
          feature: (_name: string) => false,
        },
        loader: 'object',
      }
    })
  },
})
