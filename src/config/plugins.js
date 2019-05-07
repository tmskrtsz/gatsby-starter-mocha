const path = require('path')
const theme = require('../theme/index')

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'mdx',
        path: path.join(__dirname, `../content`),
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`../templates/layout.js`),
      },
    },
    {
      resolve: `gatsby-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1024,
              sizeByPixelDensity: true,
              linkImagesToOriginal: false,
            },
          },
        ],
        defaultLayouts: {
          layout: require.resolve(`../templates/layout.js`),
        },
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: [`${ theme.text.fontFamily }:${ theme.text.fontWeights }`],
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-mocha`,
        short_name: `mocha`,
        start_url: `/`,
        background_color: `#F4DAAD`,
        theme_color: `#F4DAAD`,
        display: `minimal-ui`,
        icon: require.resolve(`../images/logo.png`), // Site logo
      },
    },
  ],
}
