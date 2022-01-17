import { nextRoutes } from '@layer0/next';
import { Router } from '@layer0/core/router';
import { NEXT_CACHE_HANDLER, SSR_CACHE_HANDLER } from './cache.js'

// Create a new router
const router = new Router()

// router.prerender([
//   // Cache handler
//   NEXT_CACHE_HANDLER,
//   SSR_CACHE_HANDLER,
//
// ])

// Serve service worker
router.get('/service-worker.js', ({ serviceWorker }) => {
  return serviceWorker('.next/static/service-worker.js')
})

router.get('/event/:eventId', ({cache}) => {
  cache({
    browser: {
      maxAgeSeconds: 0,
    },
    edge: {
      maxAgeSeconds: 10,
      staleWhileRevalidateSeconds: 60 * 60,
    },
  })
})
    // Products - getServerSideProps
    .get('/_next/data/:__build__/event/:eventId.json', ({cache}) => {
      cache({
        browser: {
          maxAgeSeconds: 0,
          serviceWorkerSeconds: 10,
        },
        edge: {
          maxAgeSeconds: 10,
          staleWhileRevalidateSeconds: 60 * 60,
        },
      })
    })

// SSR Cache Handler
// router.match('/', SSR_CACHE_HANDLER)
// router.match('/show/:path*', SSR_CACHE_HANDLER)

// Cache fonts
// router.match('/fonts/:file', ({ cache, serveStatic }) => {
//   cache(assetCache)
//   serveStatic('public/fonts/:file')
// })
// router.match('/assets/:file', ({ cache, serveStatic }) => {
//   cache(assetCache)
//   serveStatic('public/assets/:file')
// })
// router.match('/image/:path*', ({ cache, setResponseHeader, proxy }) => {
//   cache(assetCache)
//   setResponseHeader('cache-control', 'public, max-age=86400')
//   proxy('image', { path: ':path*' })
// })
// router.match('/_next/image/:path*', ({ cache, setResponseHeader, removeUpstreamResponseHeader }) => {
//   removeUpstreamResponseHeader('set-cookie')
//   setResponseHeader('cache-control', 'public, max-age=86400')
//   cache(assetCache)
// })

// Next Cache Handler
// router.match('/_next/data/:build/index.json', NEXT_CACHE_HANDLER)
// router.match('/_next/data/:build/show/:name.json', NEXT_CACHE_HANDLER)

// Default Next.js Routes
router.use(nextRoutes)

// eslint-disable-next-line no-undef
module.exports = router
