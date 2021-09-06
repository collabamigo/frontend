const path = require(`path`)

const webpack = require("webpack");
exports.onCreateWebpackConfig = ({stage, actions}) => {
    actions.setWebpackConfig({
        resolve: {
            fallback: {"crypto": require.resolve("crypto-browserify")},
            modules: [path.resolve(__dirname, "src"), "node_modules"]
        },
        plugins: [
            new webpack.ProvidePlugin({
                process: 'process/browser',
            }),
            ],
    })
}
exports.onCreatePage = async ({page, actions}) => {
    const {createPage} = actions

    // page.matchPath is a special key that's used for matching pages
    // only on the client.
    if (page.path.match(/^\/app/)) {
        page.matchPath = `/app/*`

        // Update the page.
        createPage(page)
    }
}
