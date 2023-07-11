const { BigQuery } = require('@google-cloud/bigquery');
const fs = require('fs');

let bigquery;

const validateCredentials = () => {
  const credentialPath = process.env.GOOGLE_APPLICATION_CREDENTIALS;

  if (!credentialPath) {
    throw new Error('The GOOGLE_APPLICATION_CREDENTIALS environment variable is not set.');
  }

  if (!fs.existsSync(credentialPath)) {
    throw new Error(`The credential file does not exist: ${credentialPath}`);
  }

  const credentials = require(credentialPath);

  if (!credentials.private_key || !credentials.client_email) {
    throw new Error('Invalid credentials file: Missing required properties');
  }

  bigquery = new BigQuery();
};

validateCredentials();

const insertIntoBigQuery = async (data) => {
  const datasetId = process.env.BIGQUERY_DATASET_ID;
  const tableId = process.env.BIGQUERY_TABLE_ID;

  if (!datasetId || !tableId || !data) {
    throw new Error('BIGQUERY_DATASET_ID, BIGQUERY_TABLE_ID environment variables and data are required');
  }

  // Insert data into a table
  await bigquery
    .dataset(datasetId)
    .table(tableId)
    .insert(data);
};

module.exports = {
  insertIntoBigQuery
};
