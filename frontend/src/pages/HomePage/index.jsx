import { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";

function HomePage() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    getPokemonList();
  }, [pokemonList]);

  const getPokemonList = async () => {
    try {
      const { data } = await axios.get("/api");
      setPokemonList(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="home-page">
      <div className="left"></div>
      <div className=" right">
        <ul>
          {pokemonList &&
            pokemonList.map((pokemon) => (
              <li className="pokemon">{pokemon}</li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
