const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const visitSchema = mongoose.Schema(
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
    fingerprint: {
      type: String,
      required: true,
      trim: true,
    }
  },
  {
    timestamps: true  
  }
);

// add plugin that converts mongoose to json
visitSchema.plugin(toJSON);
visitSchema.index({ fingerprint: 1, createdAt: 1 });
/**
 * @typedef Visit
 */
const Visit = mongoose.model('Visit', visitSchema);

module.exports = Visit;
