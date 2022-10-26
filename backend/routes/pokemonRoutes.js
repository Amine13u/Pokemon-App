const express = require("express");
const router = express.Router();
const {
  getPokemons,
  getPokemonByName,
  getWeakPokemons,
  getStrongPokemon,
  getFightResult,
} = require("../controllers/pokemonController");

router.get("/", getPokemons);

router.get("/:name", getPokemonByName);

router.get("/weak/:type", getWeakPokemons);

router.get("/strong/:type", getStrongPokemon);

router.post("/fight", getFightResult);

module.exports = router;
