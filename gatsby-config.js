module.exports = {
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images-carousel-homepage',
        path: `${__dirname}/src/image-carousel-data/homepage`,
      },
    },
  ],
  // pathPrefix: `/satimata`,
};
