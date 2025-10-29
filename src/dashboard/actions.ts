import { pokedex } from '@/lib/utils';

export const getPokeList = async () => {
  const pokemonList = await pokedex.getPokemonsList({ limit: 25 });
  const pokemonNamesList = pokemonList.results.map((data) => data.name);
  const list = await pokedex.getPokemonByName(pokemonNamesList);
  return list;
};
