// exports.createPages = async function ({ actions, graphql }) {
//   const { data } = await graphql(`
//     query {
//       allMarkdownRemark {
//         edges {
//           node {
//             frontmatter {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `)
//   data.allMarkdownRemark.edges.forEach(edge => {
//     const slug = edge.node.frontmatter.slug
//     actions.createPage({
//       path: slug,
//       component: require.resolve(`./src/templates/PageContent.jsx`),
//       context: { slug: slug },
//     })
//   })
// }
const webpack = require("webpack");
exports.onCreateWebpackConfig = ({stage, actions}) => {
    actions.setWebpackConfig({
        resolve: {
            fallback: {"crypto": require.resolve("crypto-browserify")},
            // modules: [path.resolve(__dirname, "src"), "node_modules"],
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
