import React, { useState } from 'react';
import PokemonCard from './PokemonCard';

function PokemonDeck({selectedPokemon, removeFromDeck}) {
  // Initialize state for saved deck, which will be stored in local storage
  const [setSavedDeck] = useState([]);

  // Function to handle saving the current selectedPokemon to local storage
  const handleSave = () => {
    // If the selectedPokemon deck is greater than 5, slice to keep only the first 5
    if (selectedPokemon.length > 5) {
      setSavedDeck(selectedPokemon.slice(0, 5));
    }
    // Save selectedPokemon to local storage
    localStorage.setItem("savedPokemon", JSON.stringify(selectedPokemon));
  };

  return (
    <div className="deck">
      <div className="deck-cards">
        {/* Map through the selectedPokemon, slicing to show only the first 5, and render a PokemonCard for each */}
        {selectedPokemon.slice(0, 5).length > 0 && selectedPokemon.slice(0, 5).map((pokemon, index) => (
          <PokemonCard
            key={index}
            pokemon={pokemon}
            onRemove={removeFromDeck}
            selectable={false}
            isPokemonDeck={true}
          />
        ))}
      </div>
      {/* Save button to trigger handleSave function */}
      <button className="save-button" onClick={handleSave}>
        Save Deck
      </button>
    </div>
  );
}

export default PokemonDeck;
