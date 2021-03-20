const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pokemonSchema = new Schema({
  name: { type: String, required: true },
  lvl: { type: Number, required: true, default: 1 },
  hp: { type: Number, required: true, default: 10 },
});

module.exports = mongoose.model('Pokemon', pokemonSchema);
