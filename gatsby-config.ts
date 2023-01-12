import type { GatsbyConfig } from "gatsby";
import { config as envConfig } from "dotenv";

envConfig({
  path: `.env.${process.env.NODE_ENV}`,
});

const { CONTENTFUL_API_KEY, CONTENTFUL_SPACE } = process.env;

const config: GatsbyConfig = {
  siteMetadata: {
    title: `gatsby-blog`,
    siteUrl: `https://www.yourdomain.tld`
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", 
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        additionalData: `@use "./src/styles/mixins" as *;`,
        // `@use "${path.normalize(`${__dirname}/src/styles/mixins/index.scss`)}" as mixins;`,
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: CONTENTFUL_SPACE,
        accessToken: CONTENTFUL_API_KEY,
      }
    }
  ]
};

export default config;
