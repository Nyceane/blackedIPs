const { client, indexName } = require("./opensearch.config");


const logBody = (error, result) => {
    if (error) {
        console.error(error);
    } else {
        console.log(result.body);
    }
};

/**
 * Indexing data from json file with recipes.
 * Format: action \n document \n action \n document ...
 * run-func index injectData
 */
const addVisitData = async (data) => {
  // Create an index with non-default settings.
  var response = await client.index({
    index: indexName,
    body: data,
    refresh: true,
  });
};


module.exports = {
  addVisitData
};