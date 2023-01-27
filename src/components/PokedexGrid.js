import React from 'react';
import PokemonCard from './PokemonCard';

// PokedexGrid component that renders a grid of PokemonCard components
function PokedexGrid({pokemonArray, addToDeck}) {
    return (
        <div className="pokedex-grid">
            {/* Map through the pokemonArray and render a PokemonCard component for each element */}
            {pokemonArray.map(pokemon => (
                <PokemonCard 
                  key={pokemon.id} 
                  pokemon={pokemon} 
                  addToDeck={() => addToDeck(pokemon)} 
                  selectable= {true} 
                  isPokemonDeck={false}  
                />
            ))}
        </div>
    );
}

export default PokedexGrid;
