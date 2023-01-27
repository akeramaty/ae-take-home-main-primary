// pokemon.service.js
import pokemonData from './../pokemon.json';

const getPokemon = () => {
    // Returns a new promise that will resolve or reject based on the try/catch block
    return new Promise((resolve, reject) => {
        try {
            // Map over the pokemonData and return a new object with the desired properties
            const pokemonArray = pokemonData.map(pokemon => {
                return {
                    id: pokemon.id,
                    name: pokemon.name,
                    types: pokemon.types,
                    sprite: pokemon.sprites.front_default
                }
            });
            // Resolve the new pokemonArray
            resolve(pokemonArray);
        } catch (err) {
            // Reject with the error if something goes wrong
            reject(err);
        }
    });
};

export default getPokemon;
