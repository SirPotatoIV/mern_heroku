const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const trainerSchema = new Schema({
  username: { type: String, required: true },
  hometown: { type: String, required: true },
  badgeCount: { type: Number, required: true, default: 0 },
});

module.exports = mongoose.model('Trainer', trainerSchema);
