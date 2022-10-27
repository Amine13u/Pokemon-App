import { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";

function Fight() {
  const [pokemonList, setPokemonList] = useState([]);
  const [myPokemon, setMyPokemon] = useState("Bulbasaur");
  const [enemyPokemon, setEnemyPokemon] = useState("Bulbasaur");
  const [result, setResult] = useState("");

  useEffect(() => {
    getPokemonList();
  }, []);

  const getPokemonList = async () => {
    try {
      const { data } = await axios.get("/api");
      setPokemonList(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFight = async (req, res) => {
    const { data } = await axios.post("/api/fight", {
      myPokemon,
      enemyPokemon,
    });

    setResult(data.message);
  };

  const handleSelect = (e) => {
    if (e.target.id === "mypokemon") {
      setMyPokemon(e.target.value);
    } else {
      setEnemyPokemon(e.target.value);
    }
  };

  return (
    <div className="fight">
      <div className="contender">
        <label>My Pokemon : </label>
        <select
          name="mypokemon"
          id="mypokemon"
          onChange={(e) => handleSelect(e)}
        >
          {pokemonList &&
            pokemonList.map((pokemon) => (
              <option value={pokemon} key={pokemon}>
                {pokemon}
              </option>
            ))}
        </select>
      </div>
      <div className="contender">
        <label>Enemy Pokemon : </label>
        <select
          name="enemypokemon"
          id="enemypokemon"
          onChange={(e) => handleSelect(e)}
        >
          {pokemonList &&
            pokemonList.map((pokemon) => (
              <option value={pokemon} key={pokemon}>
                {pokemon}
              </option>
            ))}
        </select>
      </div>
      <button className="btn" onClick={handleFight}>
        Fight
      </button>
      <span className="result">{result}</span>
    </div>
  );
}

export default Fight;
