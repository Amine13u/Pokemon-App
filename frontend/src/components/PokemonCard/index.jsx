import React from "react";
import "./index.css";

function PokemonCard({ pokemon }) {
  return (
    <>
      {pokemon && (
        <div className="card">
          <img src={pokemon.img} alt={pokemon.name} width="250" height="250" />
          <div className="informations">
            {pokemon.name && (
              <span className="name">
                <strong>{pokemon.name}</strong>
              </span>
            )}
            <div className="ability">
              <span>
                <strong>Abilities : </strong>
              </span>
              <ul>
                {pokemon.type &&
                  pokemon.type.map((typeItem) => (
                    <li key={typeItem}>{typeItem}</li>
                  ))}
              </ul>
            </div>
            {pokemon.weaknesses && (
              <div className="weaknesses">
                <span>
                  <strong>Weaknesses : </strong>
                </span>
                <ul>
                  {pokemon.weaknesses &&
                    pokemon.weaknesses.map((weaknessItem) => (
                      <li key={weaknessItem}>{weaknessItem}</li>
                    ))}
                </ul>
              </div>
            )}
            <span>
              <strong>Spawn Chance : </strong> {pokemon.spawnChance}
            </span>
          </div>
        </div>
      )}
    </>
  );
}

export default PokemonCard;
