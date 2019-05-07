const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'Mdx') {
    const filePathName = createFilePath({ node, getNode })

    createNodeField({
      name: 'slug',
      node,
      value: `blog${ filePathName }`,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const template = path.resolve(`src/templates/page.js`)

  return graphql(`
    {
      allMdx(limit: 1000) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.error) throw res.error

    res.data.allMdx.edges.map(edge => {
      createPage({
        path: edge.node.fields.slug,
        component: template,
        context: {},
      })
    })
  })
}
