import React, { useState, useEffect } from "react";

function BestPokemonSelector() {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemonURL, setSelectedPokmemonURL] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=100`)
      .then((res) => res.json())
      .then((data) => {
        setPokemons(data.results);
      });
  }, []);

  function handleChange(e) {
    setSelectedPokmemonURL(e.target.value);
  }

  return (
    <div>
      Select Pokemon:
      <select onChange={handleChange}>
        {pokemons.map((pokemon) => (
          <option value={pokemon.url} key={pokemon.url}>
            {pokemon.name}
          </option>
        ))}
      </select>
      {selectedPokemonURL ? (
        <BestPokemonFetcher pokemonURL={selectedPokemonURL} />
      ) : null}
    </div>
  );
}

const BestPokemon = (props) => {
  return (
    <div>
      <p>My favourite Pokemon is Squirtle</p>
      <ul>
        {props.pokemon.abilities.map((ability, index) => {
          return <li key={index}>{ability.ability.name}</li>;
        })}
      </ul>

      <div>
        <h5>Sprites:</h5>

        {props.pokemon.sprites.back_default ? (
          <img src={props.pokemon.sprites.back_default} alt="Back Default" />
        ) : null}
        {props.pokemon.sprites.back_female ? (
          <img src={props.pokemon.sprites.back_female} alt="Back Female" />
        ) : null}
        {props.pokemon.sprites.back_shiny ? (
          <img src={props.pokemon.sprites.back_shiny} alt="Back Shiny" />
        ) : null}
        {props.pokemon.sprites.back_shiny_female ? (
          <img
            src={props.pokemon.sprites.back_shiny_female}
            alt="Back Shiny Female"
          />
        ) : null}
        {props.pokemon.sprites.front_default ? (
          <img src={props.pokemon.sprites.front_default} alt="Front Default" />
        ) : null}
        {props.pokemon.sprites.front_shiny ? (
          <img src={props.pokemon.sprites.front_shiny} alt="Back Shiny" />
        ) : null}
        {props.pokemon.sprites.front_shiny_female ? (
          <img
            src={props.pokemon.sprites.front_shiny_female}
            alt="Front Shiny Female"
          />
        ) : null}
      </div>
    </div>
  );
};

function BestPokemonFetcher(props) {
  const [bestPokemon, setBestPokemon] = useState(null);

  useEffect(() => {
    if (!props.pokemonURL) {
      return;
    }

    fetch(props.pokemonURL)
      .then((res) => res.json())
      .then((data) => setBestPokemon(data));
  }, [props.pokemonURL]);

  return bestPokemon ? <BestPokemon pokemon={bestPokemon} /> : null;
}

export default BestPokemonSelector;
