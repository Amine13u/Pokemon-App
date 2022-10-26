const mongoose = require("mongoose");

const pokemonSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  type: {
    type: [String],
    required: true,
  },
  spawnChance: {
    type: Number,
    required: true,
  },
  weaknesses: {
    type: [String],
    required: true,
  },
});

module.exports = mongoose.model("Pokemon", pokemonSchema);
