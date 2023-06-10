const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const blacklistFingerprintSchema = mongoose.Schema(
  {
        user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
    fingerprint: {
      type: String,
      required: true,
      trim: true,
    },
    type:{
      type: String,
      required: true,
      trim: true,
    },
  },
    {
      timestamps: true  
    }
);

// add plugin that converts mongoose to json
blacklistFingerprintSchema.plugin(toJSON);

/**
 * @typedef BlacklistFingerprint
 */
const BlacklistFingerprint = mongoose.model('BlacklistFingerprint', blacklistFingerprintSchema);

module.exports = BlacklistFingerprint;
