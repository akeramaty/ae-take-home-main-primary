import React from 'react';

function PokemonCard({pokemon, addToDeck, onRemove, selectable, isPokemonDeck}) {
    const { id, name, types, sprite } = pokemon;

    return (
      <div className="card" onClick={selectable ? () => addToDeck(pokemon) : undefined}>
           {isPokemonDeck && 
           // Render a remove button only if the card is in the Pokemon Deck
           <button className="remove-btn" onClick={() => onRemove(pokemon)}>X</button>}
            <div className='card-image'>
            <img src={sprite} alt={name} /> </div>
            <div className="card-content">
           <h2>{name}</h2>
            <p>Types: 
          {types.map((type, index) => (
            <span key={index}>{type.type.name},</span>
          ))}
      </p>
      </div>
        </div>
    );
}

export default PokemonCard;
