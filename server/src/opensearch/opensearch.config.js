const { Client } = require("@opensearch-project/opensearch");

const OPENSEARCH_URI = 'https://yoururl'

/**
 * Client performs requests on our behalf
 * Additionally, when creating a client you can also specify `ssl configuration`, `bearer token`, `CA fingerprint` and other authentication details depending on protocols you use.
 */
module.exports.client = new Client({
    node: OPENSEARCH_URI
});


module.exports.indexName = "blackedips";
