import { useState } from "react";
import axios from "axios";
import PokemonCard from "../../components/PokemonCard";
import "./index.css";

function Identify() {
  const [pokemonType, setPokemonType] = useState("");
  const [pokemonList, setPokemonList] = useState([]);

  const getPokemonList = async (description) => {
    try {
      if (pokemonType) {
        setPokemonList([]);
        const { data } = await axios.get(
          `/api/${description}/${
            pokemonType[0].toUpperCase() + pokemonType.slice(1)
          }`
        );
        setPokemonList(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setPokemonType(e.target.value);
  };

  return (
    <div className="identify">
      <div className="form">
        <input
          placeholder="Please fill with Pokemon type"
          onChange={(e) => handleChange(e)}
        />
        <button onClick={() => getPokemonList("strong")}>Strenth</button>
        <button onClick={() => getPokemonList("weak")}>Weakness</button>
      </div>
      <div className="list">
        {pokemonList &&
          pokemonList.map((pokemon) => (
            <div key={pokemon._id} className="item">
              <PokemonCard pokemon={pokemon} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Identify;
