module.exports = {
  siteMetadata: {
    author: `Jose B. Gomes`,
    title: `jbonigomes Dev Journal`,
    description: `jbonigomes dev learning joural`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        start_url: `/`,
        display: `minimal-ui`,
        short_name: `starter`,
        theme_color: `#663399`,
        background_color: `#663399`,
        name: `gatsby-starter-default`,
        icon: `src/images/favicon.png`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-prismjs`,
        ]
      }
    }
  ],
}
