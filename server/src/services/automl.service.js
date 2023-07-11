const {PredictionServiceClient} = require('@google-cloud/automl').v1;
const httpStatus = require('http-status');

const projectId = 'YOUR_PROJECT_ID';
const modelId = 'YOUR_MODEL_ID';
const location = 'us-central1';

const client = new PredictionServiceClient();

const validateThroughAI = async (ip_count) => {
  if(ip_count >= 5)
  {
    return {bot_detected:true};
  }
  else return {bot_detected:false};

  //use below when you have ML trained, through the folder training
  const request = {
    name: client.modelPath(projectId, location, modelId),
    payload: {
      row: {
        values: [ip_count],
      },
    },
  };

  const [response] = await client.predict(request);

  let ret = {};
  if(response && response.payload && response.payload.length > 0) {
    ret = { bot_detected: response.payload[0].classification.score >= 0.5 };
  }

  return ret;
};

module.exports = {
  validateThroughAI
};
