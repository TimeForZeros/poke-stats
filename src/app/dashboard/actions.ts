import { PokemonEntry } from './pokeTable';
import Pokedex from 'pokedex-promise-v2';

const pokedex = new Pokedex();

export const getPokeList = async () => {
  const pokemonList = await pokedex.getPokemonsList({ limit: 25 })
  const pokemonNamesList = pokemonList.results.map((data) => data.name);
  const list = await pokedex.getPokemonByName(pokemonNamesList);
  return list;
};
