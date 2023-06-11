const axios = require('axios');
const config = require('../config/config');
const httpStatus = require('http-status');

const clientUrl = 'https://client-blackedips.bunnyenv.com/';
const serverUrl = 'https://server-blackedips.bunnyenv.com/v1/cs?ip=test&fingerprint=test';

//EC2 have problems capturing IP addresses due to VPC, dont have time to fix it at hackathon
const keepBunnyShellAlive = async () => {
  try
  {
    let server = await axios.get( serverUrl);
    console.log(server)
  }
  catch(e)
  {
    console.log(e)
  }
  
    try
  {
    let client = await axios.get( clientUrl);
    console.log(result);
  }
  catch(e)
  {
    console.log(e)
  }
  
};

module.exports = {
  keepBunnyShellAlive
};