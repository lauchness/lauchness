const path = require("path")
const config = require("./config/website")

const here = (...p) => path.join(__dirname, ...p)

module.exports = {
  siteMetadata: {
    siteUrl: config.siteUrl,
    title: config.siteTitle,
    twitterHandle: config.twitterHandle,
    description: config.siteDescription,
    keywords: [
      "Software Engineer",
      "Musician",
      "JavaScript Training",
      "Learn Music",
    ],
    canonicalUrl: config.siteUrl,
    author: {
      name: config.author,
      minibio: config.minibio,
    },
    organization: {
      name: config.organization,
      url: config.siteUrl,
    },
    social: {
      twitter: config.twitterHandle,
      fbAppID: "",
    },
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
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/blog`,
        name: "devBlog",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/music`,
        name: "music",
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: here("./src/components/Layout/index.js"),
        },
        extensions: [".mdx"],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              backgroundColor: "#FFFFFF",
              maxWidth: 800,
            },
          },
          {
            resolve: `gatsby-remark-embedder`,
          },
          {
            resolve: `gatsby-remark-highlight-code`,
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-twitter`,
    `gatsby-plugin-emotion`,
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        description: config.siteDescription,
        start_url: config.pathPrefix,
        lang: config.lang,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: "standalone",
        icon: `src/images/poke-lauchness.png`,
        icons: [
          {
            src: "/favicons/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/favicons/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "www.lauchness.com",
      },
    },
    `gatsby-plugin-offline`,
  ],
}
