// This file was automatically added by layer0 init.
// You should commit this file to source control.
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

const sentryWebpackPluginOptions = {
    // Additional config options for the Sentry Webpack plugin. Keep in mind that
    // the following options are set automatically, and overriding them is not
    // recommended:
    //   release, url, org, project, authToken, configFile, stripPrefix,
    //   urlPrefix, include, ignore

    silent: true, // Suppresses all logs
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options.
};

// Ensures that sentry isn't initialized if auth token isn't set
let _sentryExport = _initialExport;
if (process.env.NEXT_PUBLIC_ENVIRONMENT === 'production' || process.env.SENTRY_AUTH_TOKEN)
    _sentryExport = withSentryConfig(_initialExport, sentryWebpackPluginOptions);

// eslint-disable-next-line no-unused-vars
module.exports = (phase, config) =>
    withLayer0(
        withServiceWorker({
            // Output sourcemaps so that stack traces have original source filenames and line numbers when tailing
            // the logs in the Layer0 developer console.
            layer0SourceMaps: true,

            ..._sentryExport
        })
    )
