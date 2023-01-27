import React, { useState, useEffect } from 'react';
import getPokemon from './services/pokemon.service';
import PokedexGrid from './components/PokedexGrid';
import PokemonDeck from './components/PokemonDeck';

function App() {
  //array to fill grid
  const [pokemonArray, setPokemonArray] = useState([]);
  //array to fill deck
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  useEffect(() => {
    // Retrieve saved pokemon from local storage
    const savedPokemon = JSON.parse(localStorage.getItem('savedPokemon')) || [];
    setSelectedPokemon(savedPokemon);
  }, []);

  useEffect(() => {
    getPokemon()
      .then(data => setPokemonArray(data))
      .catch(err => console.log(err));
  }, []);

  const addToDeck = (pokemon) => {
  if (selectedPokemon.length < 5 && !selectedPokemon.includes(pokemon)) {
    setSelectedPokemon([...selectedPokemon, pokemon]);
  
  }
  else
  alert("item already in deck or deck is full");
}
const removeFromDeck = (pokemon) => {
  const updatedPokemon = selectedPokemon.filter((p) => p !== pokemon);
  setSelectedPokemon(updatedPokemon);
 // localStorage.setItem('savedDeck', JSON.stringify(updatedPokemon));
};



  return (
    <div className="app">
        <h1>Pokedex</h1>
       <PokemonDeck selectedPokemon={selectedPokemon} removeFromDeck={removeFromDeck} />
       <hr/>
      <PokedexGrid pokemonArray={pokemonArray} addToDeck={addToDeck} />
    </div>
  );
}

export default App;
