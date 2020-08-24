module.exports = {
  siteMetadata: {
    title: `Oleg Bazylnikov`,
    description: `personal website of a software engineer Oleg Bazylnikov in Atlanta, GA. Created used starer GatsbyJS`,
    author: `Oleg Bazylnikov`,
  },
  plugins: [
    {resolve: `gatsby-plugin-chakra-ui`,
  options:{
      isUsingColorMode:false,
  }},
  `gatsby-plugin-emotion`,
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
        name: `oleg bazylnikov personal website`,
        short_name: `olegesan`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `chakra-ui`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
