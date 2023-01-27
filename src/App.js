import React, { useState, useEffect } from 'react';
import getPokemon from './services/pokemon.service';
import PokedexGrid from './components/PokedexGrid';
import PokemonDeck from './components/PokemonDeck';

function App() {
  // State to hold the list of all Pokemon fetched from the API
  const [pokemonArray, setPokemonArray] = useState([]);
  // State to hold the list of selected Pokemon for the deck
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  useEffect(() => {
    // Retrieve saved pokemon from local storage when the component mounts
    const savedPokemon = JSON.parse(localStorage.getItem('savedPokemon')) || [];
    setSelectedPokemon(savedPokemon);
  }, []);

  useEffect(() => {
    // Fetch all Pokemon from the API when the component mounts
    getPokemon()
      .then(data => setPokemonArray(data))
      .catch(err => console.log(err));
  }, []);

  // Function to add a Pokemon to the selected Pokemon list
  const addToDeck = (pokemon) => {
    if (selectedPokemon.length < 5) {
        const isPokemonAlreadyInDeck = selectedPokemon.find(p => p.id === pokemon.id);
        if (!isPokemonAlreadyInDeck) {
            setSelectedPokemon([...selectedPokemon, pokemon]);
        } else {
            alert('Pokemon already in deck');
        }
    }
    else{
      alert("too many pokemon in deck");
    }
}

  
  // Function to remove a Pokemon from the selected Pokemon list
  const removeFromDeck = (pokemon) => {
    const updatedPokemon = selectedPokemon.filter((p) => p !== pokemon);
    setSelectedPokemon(updatedPokemon);
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
