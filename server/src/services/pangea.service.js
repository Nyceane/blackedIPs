const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const config = require('../config/config');
const axios = require('axios');
const { PangeaConfig, IPIntelService, EmbargoService, VaultService, PangeaErrors, AuthNService, Vault, AuthN } = require("pangea-node-sdk");

const token = config.pangea.token;
const pangeaconfig = new PangeaConfig({ domain: config.pangea.domain });
const embargo = new EmbargoService(token, pangeaconfig);
const ipIntel = new IPIntelService(token, pangeaconfig);
const vault = new VaultService(token, pangeaconfig);
const authn = new AuthNService(token, pangeaconfig);

const createUser = async (email, password, name, stripeId) => {
  try
  {
    const createResp = await authn.user.create(
      email,
      password,
      AuthN.IDProvider.PASSWORD,
      { profile: {name:name, stripeId:stripeId} }
    );
    console.log("Create user success. Result: ", createResp.result);
    return createResp.result.id;
  }
  catch(e)
  {
    console.log(e)
  }
  return null;
}

const login = async (email, password) => {
  try
  {
    const loginResp = await authn.user.login.password(
      email,
      password
    );
    const userToken = loginResp.result.active_token?.token || "";
    return userToken;
  }
  catch(e)
  {
    console.log(e)
  }
  return null;
}


const updateUser = async (email, password, newPassword) => {
  try
  {
    console.log("\n\nLogin...");
    const loginResp = await authn.user.login.password(
      email,
      password
    );
    const userToken = loginResp.result.active_token?.token || "";
    console.log("Login success. Result: ", loginResp.result);

    // Update password
    console.log("\n\nUpdate user password...");
    const passUpdateResp = await authn.client.password.change(
      userToken,
      password,
      newPassword
    );
    console.log("Update user password success.");
  }
  catch(e)
  {
    console.log(e)
  }
  return null;
}

const retrieveCryptoWalletKey = async (privateKey) => {
  try
  {
    const encryptResponse = await vault.getItem(privateKey,
    {
      version: 1,
      version_state: Vault.ItemVersionState.ACTIVE,
      verbose: true,
    });
    if(encryptResponse.result && encryptResponse.result.current_version && encryptResponse.result.current_version.secret )
    {
      return encryptResponse.result.current_version.secret;
    }

  }
  catch(e)
  {
    console.log(e)
  }
  return null;
}

const storeCryptoWalletKey = async (publicKey, privateKey, userid) => {
  try
  {
    const encryptResponse = await vault.secretStore(privateKey, publicKey + userid.toString());
    if(encryptResponse.result && encryptResponse.result.id)
    {
      return encryptResponse.result.id;
    }

  }
  catch(e)
  {
    console.log(e)
  }
  return null;
}

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
    console.log(result)
    if(result && result.sanctions && result.sanctions.length > 0)
    {
      ret.isBlocked = true;
      ret.reason = "Embargo";
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
  createUser,
  login,
  updateUser,
  retrieveCryptoWalletKey,
  storeCryptoWalletKey,
  checkEmbargo,
  checkIPReputation,
  checkIPVPNorProxy,
};
