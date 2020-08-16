require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Portafolio & blog @flaex_ | Freddy Polanía",
    titleTemplate: "%s · @flaex_",
    description:
      "Portfolio showcase and blog about graphic design and web tecenologies",
    keywords:
      "Logo print web typography design CMS themes front-end web development",
    author: "Freddy Polania",
    siteUrl: "https://flaex.netlify.com",
    image: "/seo-img.jpg",
    twitterUsername: "@Flaex_",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.API_URL || "http://localhost:1337",
        contentTypes: [
          // List of the Content Types you want to be able to request from Gatsby.
          "profile", 
          "location", 
          "skill",
          "link",         
          "user",        
        ],
        queryLimit: 1000,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "@flaex_",
        short_name: "flaex",
        start_url: "/",
        background_color: "#fff",
        theme_color: "#fff",
        display: "standalone",
        icon: "src/images/favicon.png", // This path is relative to the root of the site.
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-offline",
    "gatsby-plugin-less",
  ],
}
