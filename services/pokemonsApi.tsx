import axios from 'axios';

export const pokemonInstance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon',
});

export const getPokemonsFromCurrentPage = () =>
  pokemonInstance.get().then(async res => {
    let allPokemonInfo = [];

    const allPokemon = res.data.results;
    for (let i = 0; i < allPokemon.length; i++) {
      let pokemonDetail = await fetch(allPokemon[i].url).then(pokemon =>
        pokemon.json(),
      );
      allPokemon[i] = {...pokemonDetail};
      allPokemonInfo.push(allPokemon[i]);
    }

    return allPokemonInfo;
  });
