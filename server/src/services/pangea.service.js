const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const config = require('../config/config');
const axios = require('axios');
const { PangeaConfig, IPIntelService, EmbargoService, PangeaErrors } = require("pangea-node-sdk");

const token = config.pangea.token;
const pangeaconfig = new PangeaConfig({ domain: config.pangea.domain });
const embargo = new EmbargoService(token, pangeaconfig);
const ipIntel = new IPIntelService(token, pangeaconfig);


const checkIPReputation = async (ip) => {
  let ret = {};
  ret.isBlocked = false;
  console.log("Checking IP...");

  const options = { provider: "crowdstrike", verbose: true, raw: true };
  try {
    const response = await ipIntel.reputation(ip, options);
    let result = response.result;
      console.log(result)

    if(result && result.data && result.data.verdict === "malicious")
    {
      ret.isBlocked = true;
      ret.reason = "Malicious";
    }
  } catch (e) {
    if (e instanceof PangeaErrors.APIError) {
      console.log("Error", e.summary, e.errors);
    } else {
      console.log("Error: ", e);
    }
  }
  return ret;
}


const checkEmbargo = async (ip) => {
  let ret = {};
  ret.isBlocked = false;
  try {
    const response = await embargo.ipCheck(ip);
    let result = response.result;
    if(result && result.sanctions && result.sanctions.length > 0)
    {
      ret.isBlocked = true;
      ret.reason = "Embargo";
    }
    console.log(response);
  } catch (e) {
    if (e instanceof PangeaErrors.APIError) {
      console.log("Error", e.summary, e.errors);
    } else {
      console.log("Error: ", e);
    }
  }
  return ret;
}

const checkIPVPNorProxy = async (ip) => {
  let ret = {};
  ret.isBlocked = false;

  const options = { provider: "digitalelement", verbose: true, raw: true };
  try {
    const proxyresponse = await ipIntel.isProxy(ip, options);
    if (proxyresponse && proxyresponse.result && proxyresponse.result.data && proxyresponse.result.data.is_proxy === true) {
      ret.isBlocked = true;
      ret.reason = "Proxy";
    }

    const vpnresponse = await ipIntel.isVPN(ip, options);
    console.log(vpnresponse.result)
    if (vpnresponse && vpnresponse.result && vpnresponse.result.data && vpnresponse.result.data.is_vpn === true) {
      ret.isBlocked = true;
      ret.reason = "VPN";
    }
  } catch (e) {
    if (e instanceof PangeaErrors.APIError) {
      console.log("Error", e.summary, e.errors);
    } else {
      console.log("Error: ", e);
    }
  }

  console.log(ret);
  return ret;
}

module.exports = {
  checkEmbargo,
  checkIPReputation,
  checkIPVPNorProxy,
};
