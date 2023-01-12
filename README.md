## Getting started

To start the site there are a few things to set up initially. First ensure that there is a `.env.development` file at the projects root directory with the variables:
- CONTENTFUL_API_KEY: Contentful access token
- CONTENTFUL_SPACE: Contentful space for data to be source from
- CONTENTFUL_ENV: contentful environment you wanted your data sourced from

From here you can then run `npm ci` to install dependencies.

### Start site locally

Then to start the site locally you can run `npm run dev` for development mode

### Test production build

In order to test a production build you can run `npm run build`. After that command exits successfully you can then use a local python http server to host the static pages via `python -m http.server -d ./public` if you have python 3. The `public` folder being the default locaiton of the build pages for Gatsby.

## Deployment

This site is built as a collection of static pages and deployed via Github pages. This is accomplished during every pull request merge made into the `main` branch as well as a webhook dispacth made from Contentful. For reference on how this is achieved take a look atthe `./.github/workflows/deploy_static_site.yml` to see the jobs that are ran. 

