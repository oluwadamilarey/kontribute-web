/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 *
 * All configuration related things are here
 *
 * This is configuration file
 */

module.exports = {
  /* Your site config here */
  pathPrefix: "/kontribute-web",
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "zxx",
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -120,
      },
    },
  ],
}
