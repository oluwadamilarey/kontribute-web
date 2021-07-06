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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "MyKontribute",
        short_name: "Kontribute",
        start_url: "/",
        display: "standalone",
        icon: "src/assets/images/kontribute.svg",
      },
    },
  ],
}
