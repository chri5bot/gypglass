const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const detailsTemplate = path.resolve(`src/templates/product.js`)
    graphql(
      `
        {
          allProductsJson {
            edges {
              node {
                slug
              }
            }
          }
        }
      `
    )
      .then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        result.data.allProductsJson.edges.forEach(({ node }) => {
          createPage({
            path: `/${node.slug}`,
            component: detailsTemplate,
            context: {
              slug: node.slug,
            },
          })
        })

        resolve()
      })
      .catch(error => console.log(error))
  })
}
