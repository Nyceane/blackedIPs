/* eslint-disable no-console */

const axios = require('axios');
const config = require('../config/config');
const httpStatus = require('http-status');
const fs = require('fs');
const SpaceAndTimeSDK = require("./spaceandtimesdk.js");
const Utils = require('../utils/utils-functions.js');    
const SQLOperation = require('./BiscuitConstants.js');    
const { ED25519PublicKeyUint, ED25519PrivateKeyUint, b64PrivateKey, b64PublicKey, hexEncodedPrivateKey, hexEncodedPublicKey, biscuitPrivateKey } = require("../utils/keygen.js");
//const { biscuit, block, authorizer, Biscuit, KeyPair, Fact, PrivateKey } = require('@biscuit-auth/biscuit-wasm');

const initSDK = SpaceAndTimeSDK.init();

let userId = config.space_and_time.userId;
let biscuit = config.space_and_time.biscuit;


// Reading access and refresh tokens from the file
const fileContents = fs.readFileSync('session.txt','utf8');
const fileLines = fileContents.split(/\r?\n/);

let accessToken = fileLines[0];
let refreshToken = fileLines[1];


let accessTokenValue = accessToken;

let scope = "ALL";
let namespace = "BLACKEDIPS";
let owned = true;
let column = "BLOCK_NUMBER";
let tableName = "IPFINGERPRINTTRACK";

const init = async () => {
  if(accessToken) {
      let [ validAccessTokenResponse, validAccessTokenError ] = await initSDK.validateToken();
      if(validAccessTokenResponse) {
          console.log('Valid access token provided.');
          console.log('Valid User ID: ', validAccessTokenResponse);
      }
      else {
         let [ refreshTokenResponse, refreshTokenError ] = await initSDK.refreshToken();
         console.log('Refreshed Tokens: ', refreshTokenResponse);

         if(!refreshTokenResponse) {
              let [ tokenResponse, tokenError ] = await initSDK.AuthenticateUser();
              if(!tokenError) console.log(tokenResponse); 
              else {
              console.log('Invalid User Tokens Provided');
              console.log(tokenError);
            }
         }
      }
  }
  else {

      let [ tokenResponse, tokenError ] = await initSDK.AuthenticateUser();
      if(!tokenError) console.log(tokenResponse); 
      else {
          console.log('Invalid User Tokens Provided');
          console.log(tokenError);
      }
  }
}

const ifTableExist = async() => {
  let [getTableResponse, getTableError] = await initSDK.getTables(scope,namespace);
  if(getTableResponse && getTableResponse.length > 0)
  {
    console.log(getTableResponse);
    return true;
  }
  return false;
}

const insertData = async (ip, fingerprint) => {
  //await auth();
  try {
      const biscuit = config.space_and_time.biscuit
      const biscuitTokens = []; // replace with your actual biscuitTokens value if necessary
      if(!await ifTableExist())
      {
        let createSchemaSQLText = "CREATE SCHEMA BLACKEDIPS";

          let [ createSchemaResponse, createSchemaError ] = await initSDK.CreateSchema(createSchemaSQLText);
          console.log(createSchemaResponse, createSchemaError);

          const sqlText = "CREATE TABLE BLACKEDIPS.IPFINGERPRINT (ID INT, IP VARCHAR, FINGERPRINT VARCHAR, PRIMARY KEY (ID))";
          const accessType = "public_append"; // replace with the actual access type
          const publicKey = config.space_and_time.public_key; // replace with the actual public key
          let [CreateTableResponse, CreateTableError] = await initSDK.CreateTable(sqlText, accessType, publicKey, biscuit, biscuitTokens);
      }
      let resourceId = 'BLACKEDIPS.IPFINGERPRINT';
      let insertSqlText = `INSERT INTO BLACKEDIPS.IPFINGERPRINT VALUES(IP, FINGERPRINT) VALUES ('${ip}', '${fingerprint}')`;
      let [DMLResponse, DMLError] = await initSDK.DML(resourceId, insertSqlText, biscuit, biscuitTokens);
      console.log(DMLResponse, DMLError);

    } catch (error) {
      console.log(error);
      throw new Error(error);
    }


};

init();

module.exports = {
  insertData
};