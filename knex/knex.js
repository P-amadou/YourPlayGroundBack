const environment = process.env.ENVIRONMENT || 'development'
const config = require('../knexfile.js')[environment];
module.exports = require('knex')(config);
const knexDataApiClient = require('knex-aurora-data-api-client');
const knex = require('knex')({
  client: knexDataApiClient.postgres,
  connection: {
    secretArn: 'secret-arn', // Required
    resourceArn: 'db-resource-arn', // Required
    database: 'db-name',
    region: 'eu-west-2',
  },
});