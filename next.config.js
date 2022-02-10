
const {withLayer0, withServiceWorker} = require('@layer0/next/config')

const _initialExport = {
    eslint: {
        ignoreDuringBuilds: true,
    },
};

// This file sets a custom webpack configuration to use your Next.js app
// with Sentry.
// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

const {withSentryConfig} = require('@sentry/nextjs');

// module.exports = _sentryExport
// eslint-disable-next-line no-unused-vars
const _layer0Export =  withLayer0(
        withServiceWorker(_initialExport),
    )

console.log('_layer0Export', typeof _layer0Export, (_layer0Export));

// Ensures that sentry isn't initialized if auth token isn't set
let _sentryExport = _layer0Export;
if (process.env.NEXT_PUBLIC_ENVIRONMENT === 'production' || process.env.NEXT_PUBLIC_SENTRY_DSN)
    _sentryExport = withSentryConfig(_layer0Export);

console.log('_sentryExport', typeof _sentryExport, (_sentryExport));

module.exports = _sentryExport;
