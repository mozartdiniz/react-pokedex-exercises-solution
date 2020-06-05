import React, { useState } from "react";

function CaughtPokemon(props) {
  const [totalCaught, setTotalCaught] = useState([]);
  const [pokemonNameInput, setPokemonNameInput] = useState("");

  function catchPokemon() {
    if (!pokemonNameInput.length) return;

    setTotalCaught(totalCaught.concat(pokemonNameInput));
    setPokemonNameInput("");
  }

  function handleInputChange(event) {
    setPokemonNameInput(event.target.value);
  }

  return (
    <div>
      Caught Pokemon on {props.date}:
      <ul>
        {totalCaught.map((caughtPokemon, index) => {
          return <li key={index}>{caughtPokemon}</li>;
        })}
      </ul>
      <input
        type="text"
        value={pokemonNameInput}
        onChange={handleInputChange}
      />
      <button onClick={catchPokemon}>Catch Pokemon</button>
    </div>
  );
}

export default CaughtPokemon;
