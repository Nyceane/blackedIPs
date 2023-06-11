const httpStatus = require('http-status');
const config = require('../config/config');
const mongoose = require("mongoose");
const opensearch = require('../opensearch');
const sageMakerService = require('./sagemaker.service');
const pangeaService = require('./pangea.service');
const userService = require('./user.service');
const spaceandtimeService = require('./spaceandtime.service');
const abiService = require('./abi.service');
const { BlacklistIP, BlacklistFingerprint, Visit } = require('../models');
const Web3 = require('web3'); 
require('events').EventEmitter.defaultMaxListeners = 20; // or another number that suits your needs

const addVisit = async (userid, ip, fingerprint) => {
  let ret = {};
  await Visit.create({user: mongoose.Types.ObjectId(userid), ip:ip, fingerprint:fingerprint})

  try
  {
    spaceandtimeService.insertData(ip, fingerprint);
  }
  catch(e)
  {

  }
  //Optionally insert into opensearch for AWS, which is used for training additional data
  //opensearch.addVisitData({user: userid, ip:ip, fingerprint:fingerprint})

  let fingerprintBlacklisted = await BlacklistFingerprint.findOne({fingerprint:fingerprint});
  if(fingerprintBlacklisted)
  {
    ret.status = "blocked";
    return ret;
  }

  const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);

  const result = await Visit.aggregate([
    {
      $match: {
        fingerprint: fingerprint,
        createdAt: { $gte: oneDayAgo }
      }
    },
    {
      $group: {
        _id: '$ip'
      }
    },
    {
      $count: 'count'
    }
  ]);

  const ipCount = result.length > 0 ? result[0].count : 0;


  if(ip === "127.0.0.1")
  {
    ret.status = "localhost";
  }
  else
  {
    const reg = /^(\d{1,3}\.){3,3}\d{1,3}$/;
      
    let aiResult = await sageMakerService.validateThroughAI(ipCount);
    if(aiResult && aiResult.bot_detected)
    {
      ret.status = "bot";
      BlacklistFingerprint.create({user: mongoose.Types.ObjectId(userid), fingerprint:fingerprint, type:'blackedips'})

      if (reg.test(ip)) {
        let vpnproxy = await pangeaService.checkIPVPNorProxy(ip);
        if(vpnproxy.isBlocked)
        {
          BlacklistIP.create({user: mongoose.Types.ObjectId(userid), ip:ip, type:'botProxy'})
        }
      }
    }
    else
    {
      if (reg.test(ip)) {
        try
        {
          let reputation = await pangeaService.checkIPReputation(ip);
          if(reputation.isBlocked)
          {
            BlacklistIP.create({user: mongoose.Types.ObjectId(userid), ip:ip, type:'malicious'})
            BlacklistFingerprint.create({user: mongoose.Types.ObjectId(userid), fingerprint:fingerprint, type:'malicious'})
            ret.status = "blocked"
          }
        }
        catch(e)
        {
          console.log(e)
        }

        try
        {
          let embargo = await pangeaService.checkEmbargo(ip);
          if(embargo.isBlocked)
          {
            BlacklistIP.create({user: mongoose.Types.ObjectId(userid), ip:ip, type:'blackedips'})
            BlacklistFingerprint.create({user: mongoose.Types.ObjectId(userid), fingerprint:fingerprint, type:'blackedips'})
            ret.status = "blocked"
          }
        }
        catch(e)
        {
          console.log(e)
        }
      }
      if(ipCount > 3)
      {
        ret.status = "risky";
      }

    }

  }
  console.log(ret);
  return ret;
}

const getVisits = async (userId) => {
  const oneMonthAgo = new Date(Date.now() - 730 * 60 * 60 * 1000);
  const result = await Visit.aggregate([
    {
      $match: {
        user: userId, // Match by userId
        createdAt: { $gte: oneMonthAgo }
      }
    },
    {
      $group: {
        _id: "$fingerprint", // Group by fingerprint
        ips: { $addToSet: "$ip" }, // add unique ips to the ips set
        lastVisit: { $max: "$createdAt" } // get the latest createdAt date
      }
    },
    {
      $project: {
        _id: 1, // keep the _id in the output (it contains the fingerprint)
        ipCount: { $size: "$ips" }, // add the size of the ips set to the output as ipCount
        lastVisit: 1 // add the latest createdAt date to the output as lastVisit
      }
    },
    {
      $sort: {
        lastVisit: -1 // sort by lastVisit in descending order
      }
    }
  ]);

  return result;
}

const getVisitDataByUserId = async (userId) => {
  const oneMonthAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);

  const days = Array.from({ length: 30 }, (v, i) => {
    const d = new Date(Date.now() - i * 24 * 60 * 60 * 1000);
    return d.toISOString().split('T')[0];
  }).reverse();

  // Get daily visit IP count
  const visitIpCounts = await Visit.aggregate([
    {
      $match: {
        user: userId,
        createdAt: { $gte: oneMonthAgo }
      }
    },
    {
      $project: {
        day: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
        ip: 1
      }
    },
    {
      $group: {
        _id: "$day",
        ips: { $addToSet: "$ip" }
      }
    },
    {
      $project: {
        _id: 0,
        day: "$_id",
        visitIpCount: { $size: "$ips" }
      }
    }
  ]);

  // Get daily blacklisted IP count
  const blacklistedIpCounts = await BlacklistIP.aggregate([
    {
      $match: {
        user: userId,
        createdAt: { $gte: oneMonthAgo }
      }
    },
    {
      $project: {
        day: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
        ip: 1
      }
    },
    {
      $group: {
        _id: "$day",
        ips: { $addToSet: "$ip" }
      }
    },
    {
      $project: {
        _id: 0,
        day: "$_id",
        blacklistedIpCount: { $size: "$ips" }
      }
    },
    {
      $sort: {
        day: 1
      }
    }
  ]);

  // Combine the results
  const dailyIpCounts = days.map(day => {
    const startOfDay = new Date(day);
    const endOfDay = new Date(new Date(day).setHours(23, 59, 59, 999));
    
    const visitData = visitIpCounts.find(v => {
      const vDate = new Date(v.day);
      return vDate >= startOfDay && vDate <= endOfDay;
    }) || { visitIpCount: 0 };
    
    const blacklistData = blacklistedIpCounts.find(b => {
      const bDate = new Date(b.day);
      return bDate >= startOfDay && bDate <= endOfDay;
    }) || { blacklistedIpCount: 0 };
    
    return {
      day: `${day}T00:00:00.000Z`,
      visitIpCount: visitData.visitIpCount,
      blacklistedIpCount: blacklistData.blacklistedIpCount
    };
  });
  
  return dailyIpCounts;
};

const checkipfingerprint = async (ip, fingerprint) => {
  let ret = {};

  let fingerprintBlacklisted = await BlacklistFingerprint.findOne({fingerprint:fingerprint});
  console.log(fingerprintBlacklisted)
  if(fingerprintBlacklisted)
  {
    ret.status = "blocked";
    return ret;
  }

  let ipBlacklisted = await BlacklistIP.findOne({ip:ip});
  console.log(ipBlacklisted)
  if(ipBlacklisted)
  {
    ret.status = "blocked";
    return ret;
  }

  const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
  const result = await Visit.aggregate([
    {
      $match: {
        fingerprint: fingerprint,
        createdAt: { $gte: oneDayAgo }
      }
    },
    {
      $group: {
        _id: '$ip'
      }
    },
    {
      $count: 'count'
    }
  ]);

  const ipCount = result.length > 0 ? result[0].count : 0;


  if(ip === "127.0.0.1")
  {
    ret.status = "localhost";
  }
  else
  {
    let aiResult = await sageMakerService.validateThroughAI(ipCount);
    console.log(aiResult);
    if(aiResult && aiResult.bot_detected)
    {
      ret.status = "bot";
    }
    else
    {
      const reg = /^(\d{1,3}\.){3,3}\d{1,3}$/;
      if (reg.test(ip)) {
        try
        {
          let reputation = await pangeaService.checkIPReputation(ip);
          if(reputation.isBlocked)
          {
            BlacklistIP.create({user: mongoose.Types.ObjectId('63fbf1ee85e65d6dff3b9313'), ip:ip, type:'malicious'})
            ret.status = "blocked"
          }
        }
        catch(e)
        {
          console.log(e)
        }

        try
        {
          let embargo = await pangeaService.checkEmbargo(ip);
          if(embargo.isBlocked)
          {
            BlacklistIP.create({user: mongoose.Types.ObjectId('63fbf1ee85e65d6dff3b9313'), ip:ip, type:'blackedips'})
            ret.status = "blocked"
          }
        }
        catch(e)
        {
          console.log(e)
        }
      }

      if(ipCount > 3)
      {
        ret.status = "risky";
      }
    }
  }
  console.log(ret);
  return ret;
}

const testChainLink = async (userid, ip, fingerprint) => {
  let user = await userService.getUserById(mongoose.Types.ObjectId(userid));

  if (!user.walletPublicKey || !user.walletPrivateKey) {
    throw new Error("wallet not present, please go to settings and update wallet");
  }

  // Contract details.
  const abi = abiService.checkIPFingerprintABI;
  const contractAddress = '0x04D28C52920E650ddfD3F88eCC50701171522cF1';

  // Account details.
  const accountAddress = user.walletPublicKey;
  const privateKey = await pangeaService.retrieveCryptoWalletKey(user.walletPrivateKey);
  const web3 = new Web3(new Web3.providers.WebsocketProvider('wss://sepolia.infura.io/ws/v3/8df545e71d7640ba80eee40d96bea508'));

  // Create the contract instance.
  const IpFingerprintCheck = new web3.eth.Contract(abi, contractAddress);

  // Call checkIPFingerprint.
  const transaction = IpFingerprintCheck.methods.checkIPFingerprint(ip, fingerprint);

  const [gas, gasPrice, nonce] = await Promise.all([
    transaction.estimateGas({ from: accountAddress }),
    web3.eth.getGasPrice(),
    web3.eth.getTransactionCount(accountAddress)
  ]);

  // Create a raw transaction object.
  const rawTransaction = {
    from: accountAddress,
    gasPrice: web3.utils.toHex(gasPrice),
    gasLimit: web3.utils.toHex(gas),
    to: contractAddress,
    data: transaction.encodeABI(),
    nonce: web3.utils.toHex(nonce)
  };

  // Create an account object from the private key.
  const account = web3.eth.accounts.privateKeyToAccount(privateKey);

  // Sign the transaction.
  const signedTransaction = await account.signTransaction(rawTransaction);

  // Send the transaction and return the promise.
  const transactionResult = web3.eth.sendSignedTransaction(signedTransaction.rawTransaction);

  // Return a promise that resolves when the RequestData event is emitted.
  return new Promise((resolve, reject) => {
    transactionResult.on('transactionHash', async () => {
      IpFingerprintCheck.events.RequestData({
        fromBlock: 'latest'
      }, async function (error, event) {
        if (error) {
          console.log('error');
          console.log(error);
          reject(error);
        } else {
          // Get result using requestId
          console.log('got this!');
          console.log(event.returnValues);
          const isBlocked = await IpFingerprintCheck.methods.getResult(event.returnValues.requestId).call();
          console.log("Result: " + JSON.stringify(isBlocked, null, 2));
          resolve({
            message: "IsBlocked:" + isBlocked,
            url: "https://sepolia.etherscan.io/tx/" + event.transactionHash
          });
        }
      });
    });
  });
}


module.exports = {
  addVisit,
  checkipfingerprint,
  getVisitDataByUserId,
  getVisits,
  testChainLink
};
