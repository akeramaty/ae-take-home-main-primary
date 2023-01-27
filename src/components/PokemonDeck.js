
import React, { useState, useEffect } from 'react';
import PokemonCard from './PokemonCard';


function PokemonDeck({selectedPokemon, removeFromDeck}) {
   const [savedDeck, setSavedDeck] = useState([]);
    useEffect(() => {
      const savedDeck = JSON.parse(localStorage.getItem("savedPokemon"));
      if (savedDeck) {
        setSavedDeck(selectedPokemon);
      } else {
        setSavedDeck(selectedPokemon);
      }
    }, []);

   const handleSave = () => {
        if (selectedPokemon.length > 5) {
          setSavedDeck(selectedPokemon.slice(0, 5));
        }
        localStorage.setItem("savedPokemon", JSON.stringify(selectedPokemon));
      };
     
 return (
        <div className="deck">
          <div className="deck-cards">
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
          <button className="save-button" onClick={handleSave}>
            Save Deck
          </button>
        </div>
      );
    }

export default PokemonDeck;

