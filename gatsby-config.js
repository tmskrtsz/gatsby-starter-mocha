module.exports = {
  siteMetadata: {
    title: 'Gatsby Starter Mocha',
    author: 'Tamás Kertész',
    description: 'Gatsby starter with MDX and styled-components supported out of the box',
    keywords: ['gatsby', 'mdx', 'styled-components', 'react', 'gatsby starter'],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/templates/layout.js`),
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
          layout: require.resolve(`./src/templates/layout.js`),
        },
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['IBM Plex Sans: 400,700'],
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
        icon: `./src/images/logo.png`, // Site logo
      },
    },
  ],
}
