// pokemon.service.js
import pokemonData from './../pokemon.json';

const getPokemon = () => {
    return new Promise((resolve, reject) => {
        try {
            const pokemonArray = pokemonData.map(pokemon => {
                return {
                    id: pokemon.id,
                    name: pokemon.name,
                    types: pokemon.types,
                    sprite: pokemon.sprites.front_default
                }
            });
            resolve(pokemonArray);
        } catch (err) {
            reject(err);
        }
    });
};

export default getPokemon;
