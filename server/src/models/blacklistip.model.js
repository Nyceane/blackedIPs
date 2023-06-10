const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const blacklistIPSchema = mongoose.Schema(
  {
        user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
    ip: {
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
blacklistIPSchema.plugin(toJSON);

/**
 * @typedef BlacklistIP
 */
const BlacklistIP = mongoose.model('BlacklistIP', blacklistIPSchema);

module.exports = BlacklistIP;
