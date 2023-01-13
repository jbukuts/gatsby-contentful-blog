## Getting started

In order to run this site you'll need a Contentful account set up with the relavant data. This site pulls data in from a Contentful content model called a `BlogPost` that contains only a string field called `Title` and a rich text field for `Content`.

Once you have that setup, in order to start the site there are a few environment variables to setup locally. First ensure that there is a `.env.development` file at the projects root directory with the variables:
- CONTENTFUL_API_KEY: Contentful access token
- CONTENTFUL_SPACE: Contentful space for data to be source from
- CONTENTFUL_ENV: contentful environment you wanted your data sourced from

From here you can then run `npm ci` to install dependencies.

### Start site locally

Then to start the site locally you can run `npm run dev` for development mode

### Test production build

In order to test a production build you can run `npm run build`. After that command exits successfully you can then use a local python http server to host the static pages via `python -m http.server -d ./public` if you have python 3 or in the built-in `npm run serve` to test a production build. 

## Deployment

This site is built as a collection of static pages and deployed via Github pages. This is accomplished during every pull request merge made into the `main` branch as well as a webhook dispacth made from Contentful. For reference on how this is achieved take a look atthe `./.github/workflows/deploy_static_site.yml` to see the jobs that are ran. 

