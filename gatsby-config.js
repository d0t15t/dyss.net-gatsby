module.exports = {
  siteMetadata: {
    title: `DYSSEMBLER / Isaac Bigsby Trogdon`,
    siteUrl: `https://www.dyss.net`
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: [
          "G-WRR3VLQ2FD"
        ],
        pluginConfig: {
          head: true
         //respectDNT: true,
         // Avoids sending pageview hits from custom paths
         //exclude: ["/preview/**", "/do-not-track/me/too/"],
        }
      }
    },
    "gatsby-plugin-styled-components", 
    //{
    ///  resolve: 'gatsby-plugin-google-analytics',
    //  options: {
    //    "trackingId": " UA-26808845-1"
    //  }
    //}, 
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
	short_name: "DYSS / IBT",
	name: "DYSSEMBLER / Isaac Bigsby Trogdon",
	start_url: "/",
	display: "standalone",
        icon: "src/images/favicon.ico",
        //"icon": "src/images/icon.png"
	include_favicon: false,
      }
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
  ]
};
