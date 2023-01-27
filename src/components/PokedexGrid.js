import React from 'react';
import PokemonCard from './PokemonCard';

function PokedexGrid({pokemonArray, addToDeck}) {
    return (
        <div className="pokedex-grid">
            {pokemonArray.map(pokemon => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} addToDeck={() => addToDeck(pokemon)} selectable= {true} isPokemonDeck={false}  />
            ))}
        </div>
    );
}

export default PokedexGrid;