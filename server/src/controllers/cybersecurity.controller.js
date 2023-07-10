const httpStatus = require('http-status');
const config = require('../config/config');
const querystring = require("querystring");
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { cybersecurityService } = require('../services');
const requestIp = require('request-ip');

const addVisit = catchAsync(async (req, res) => {

  let ip;

  const clientIp = requestIp.getClientIp(req); 
  console.log(clientIp);

  if(req.headers['x-forwarded-for'] || req.socket.remoteAddress)
  {
    console.log('X-Forwarded-For:' + req.headers['X-Forwarded-For'])
    console.log('remote:' + req.socket.remoteAddress)
    ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    ip = convertIpv6ToIpv4(ip);
  }

  let ret = await cybersecurityService.addVisit(req.params.userid, ip, req.params.key);

  res.status(httpStatus.OK).send(ret);
});

const getVisits = catchAsync(async (req, res) => {
  let ret = {};
  console.log(req.user);
  ret.results = await cybersecurityService.getVisits(req.user._id);
  console.log(ret);
  res.status(httpStatus.OK).send(ret);
});

const getVisitDashboard = catchAsync(async (req, res) => {
  let ret = {};
  ret.dailyResults = await cybersecurityService.getVisitDataByUserId(req.user._id);
  res.status(httpStatus.OK).send(ret);
});


const checkipfingerprint = catchAsync(async (req, res) => {
  let result = await cybersecurityService.checkipfingerprint(req.query.ip, req.query.fingerprint);
  console.log(result);
  let ret = {};
  ret.isBlocked = false;
  if(result.status)
  {
    ret.isBlocked = true;
  }
  res.status(httpStatus.OK).send(ret);
});

const testChainLink = catchAsync(async (req, res) => {
  let result = await cybersecurityService.testChainLink(req.user._id, req.body.ip, req.body.fingerprint);
  console.log(result);
  res.status(httpStatus.OK).send(result);
});

function convertIpv6ToIpv4(ipv6) {
    if (ip.includes('.')) { // It's an IPv4 address or a mapped IPv4 address
        return ip.split(':').pop();
    }
    const reg = /^(\d{1,3}\.){3,3}\d{1,3}$/;
    if (reg.test(ipv6)) {
        return ipv6;
    }

    console.log(ipv6);
    // Handle the localhost case:
    if (ipv6 === '::1') {
        return '127.0.0.1';
    }

    // For other addresses, try to match the IPv4-mapped IPv6 format:
    const ipv4Regex = /::ffff:(\d+\.\d+\.\d+\.\d+)/;
    const match = ipv6.match(ipv4Regex);

    if (match) {
        return match[1];
    }
    
    throw new Error('The provided IPv6 address does not appear to be in the IPv4-mapped IPv6 format.');
}

module.exports = {
  addVisit,
  checkipfingerprint,
  getVisitDashboard,
  getVisits,
  testChainLink
};
