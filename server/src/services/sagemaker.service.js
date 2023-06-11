const axios = require('axios');
const config = require('../config/config');
const httpStatus = require('http-status');

//Your own lambda to SageMaker URL
const LAMBDA_SAGEMAKER_URL = `YOUR-LAMBDA-ENDPOINT-THATS-CONNECTED-TO-SAGEMAKER`;

const validateThroughAI = async (ip_count) => {
  /** To use sagemaker, please train using the training data. **/

  if(ip_count >= 5)
  {
    return {bot_detected:true};
  }
  else return {bot_detected:false};

  //Use your sage maker instead of the code above, lamdba code is under this project
  let options = {};
  options.headers = {'Accept':'application/json'};

  let bodyParameters = {};
  bodyParameters.ip_count = ip_count;

  var result =await axios.post( 
          LAMBDA_SAGEMAKER_URL,
          bodyParameters,
          options
          ).then((res) => {
            
            return res.data;
          }).catch((e) =>{
            console.log(e);
            return false;
          });

  let ret = {};
  if(result)
  {
    ret = result;
  }

  return ret;
};

module.exports = {
  validateThroughAI
};