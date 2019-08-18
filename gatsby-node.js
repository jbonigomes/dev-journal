const path = require(`path`)

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/components/post/index.js`)

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw new Error('Something went wrong')
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      context: {},
      path: node.frontmatter.path,
      component: blogPostTemplate,
    })
  })
}
