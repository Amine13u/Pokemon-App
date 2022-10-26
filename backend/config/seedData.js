const axios = require("axios");
const mongoose = require("mongoose");
const Pokemon = require("../model/pokemonModel");
const connectDB = require("./db");
require("dotenv").config();

connectDB();

const pokemonURL =
  "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json";

const seedData = async () => {
  const res = await axios.get(pokemonURL);

  const pokemons = res.data.pokemon.map((pokemon) => ({
    name: pokemon.name,
    img: pokemon.img,
    type: pokemon.type,
    spawnChance: pokemon.spawn_chance,
    weaknesses: pokemon.weaknesses,
  }));

  await Pokemon.deleteMany({});
  await Pokemon.insertMany(pokemons);
};

seedData().then(() => {
  mongoose.connection.close();
});
