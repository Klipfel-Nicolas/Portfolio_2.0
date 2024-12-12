const Prismic = require('@prismicio/client');
const PrismicH = require('@prismicio/helpers');
const fetch = require('node-fetch');

// Initialize the prismic.io api
module.exports.initApi = (req) => {
  return Prismic.createClient(process.env.PRISMIC_ENDPOINT, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    req,
    fetch,
  });
};