import React, { useState, useEffect } from "react";

const BestPokemon = (props) => {
  return (
    <div>
      <p>My favourite Pokemon is Squirtle</p>
      <ul>
        {props.pokemon.abilities.map((ability, index) => {
          return <li key={index}>{ability.ability.name}</li>;
        })}
      </ul>
    </div>
  );
};

function BestPokemonFetcher() {
  const [bestPokemon, setBestPokemon] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/1/")
      .then((res) => res.json())
      .then((data) => {
        setBestPokemon(data);
      });
  }, []);

  return bestPokemon ? <BestPokemon pokemon={bestPokemon} /> : null;
}

export default BestPokemonFetcher;
