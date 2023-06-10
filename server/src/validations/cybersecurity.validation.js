const Joi = require('joi');

const addVisit = {
  params: Joi.object().keys({
    userid: Joi.string().required(),
    key: Joi.string().required(),
  }),
};

const checkipfingerprint = {
  query: Joi.object().keys({
    ip: Joi.string().required(),
    fingerprint: Joi.string().required(),
  }),
};

const testChainLink = {
  body: Joi.object().keys({
    ip: Joi.string().required(),
    fingerprint: Joi.string().required(),
  }),
};

module.exports = {
  addVisit,
  checkipfingerprint,
  testChainLink
};
