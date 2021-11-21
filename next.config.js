// This file was automatically added by layer0 init.
// You should commit this file to source control.
const { withLayer0, withServiceWorker } = require('@layer0/next/config')

const _preLayer0Export = {
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
};;

module.exports = (phase, config) =>
  withLayer0(
    withServiceWorker({
      // Output sourcemaps so that stack traces have original source filenames and line numbers when tailing
      // the logs in the Layer0 developer console.
      layer0SourceMaps: true,

      ..._preLayer0Export
    })
  )
