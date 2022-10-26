const Pokemon = require("../models/pokemonModel");

const getPokemons = async (req, res) => {
  try {
    const pokemons = await Pokemon.find();
    res.status(200).json(pokemons.map((pokemon) => pokemon.name));
  } catch (error) {
    console.error(error);
  }
};

const getPokemonByName = async (req, res) => {
  try {
    const pokemon = await Pokemon.findOne({
      name: req.params.name,
    });

    if (!pokemon) {
      res.status(400).json({ message: "Pokemon not found !" });
    }

    const { img, type, spawnChance } = pokemon;

    res.status(200).json({ img, type, spawnChance });
  } catch (error) {
    console.error(error);
  }
};

const getWeakPokemons = async (req, res) => {
  try {
    const pokemons = await Pokemon.find();
    const weakPokemons = pokemons.filter((pokemon) =>
      pokemon.weaknesses.includes(req.params.type)
    );

    if (weakPokemons.length === 0) {
      res
        .status(400)
        .json({ message: "Any Pokemon was found for such weakness !" });
    } else {
      res.status(200).json(weakPokemons);
    }
  } catch (error) {
    console.error(error);
  }
};

const getStrongPokemon = async (req, res) => {
  try {
    const pokemons = await Pokemon.find();
    const strongPokemons = pokemons.filter((pokemon) =>
      pokemon.type.includes(req.params.type)
    );

    if (strongPokemons.length === 0) {
      res
        .status(400)
        .json({ message: "Any Pokemon was found for such strength !" });
    } else {
      res.status(200).json(strongPokemons);
    }
  } catch (error) {
    console.error(error);
  }
};

const getFightResult = async (req, res) => {
  try {
    const { myPokemon, enemyPokemon } = req.body;
    const { type: myPokemonStrength, weaknesses: myPokemonWeakness } =
      await Pokemon.findOne({
        name: myPokemon,
      });
    const { type: enemyPokemonStrength, weaknesses: enemyPokemonWeakness } =
      await Pokemon.findOne({
        name: enemyPokemon,
      });

    for (strength of myPokemonStrength) {
      if (enemyPokemonWeakness.includes(strength)) {
        res.json({ message: "You Win" });
      }
    }

    for (strength of enemyPokemonStrength) {
      if (myPokemonWeakness.includes(strength)) {
        res.json({ message: "You Lose !!" });
      }
    }

    if (enemyPokemonWeakness.length > myPokemonWeakness.length) {
      res.json({ message: "You Win" });
    } else if (enemyPokemonWeakness.length < myPokemonWeakness.length) {
      res.json({ message: "You Lose !!" });
    } else {
      res.json({ message: "It's a Draw" });
    }
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getPokemons,
  getPokemonByName,
  getWeakPokemons,
  getStrongPokemon,
  getFightResult,
};
