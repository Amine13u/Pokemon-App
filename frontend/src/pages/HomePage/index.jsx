import { useEffect, useState } from "react";
import axios from "axios";
import PokemonCard from "../../components/PokemonCard";
import "./index.css";

function HomePage() {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemon, setPokemon] = useState(null);

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

  const handleClick = async (pokemonName) => {
    const { data } = await axios.get(`/api/${pokemonName}`);
    setPokemon(data);
  };

  return (
    <div className="home-page">
      <div className="left">
        <PokemonCard pokemon={pokemon} />
      </div>
      <div className=" right">
        <ul>
          {pokemonList &&
            pokemonList.map((pokemonName) => (
              <li
                className="pokemon"
                key={pokemonName}
                onClick={() => handleClick(pokemonName)}
              >
                {pokemonName}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
