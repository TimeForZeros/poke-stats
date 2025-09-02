import { pokedex } from "@/lib/utils";

export const getPokemonDetails = async (name: string) => {
  const pokemon = await pokedex.getPokemonByName(name);
  return pokemon;
}