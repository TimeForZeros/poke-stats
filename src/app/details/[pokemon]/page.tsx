import { Params } from 'next/dist/server/request/params';
import React from 'react';
import { getPokemonDetails } from './actions';
import {
  SectionHeader,
  PokeAbilityComponent,
  PokeTypeButton,
  PokemonStatsComponent,
} from '@/components/pokemon';

interface PokemonParams extends Params {
  pokemon: string;
}

const DetailsComponent = async ({ params }: { params: PokemonParams }) => {
  const { pokemon } = await params;
  const pokeDetails = await getPokemonDetails(pokemon);
  console.log(pokeDetails);
  return (
    <div className="w-screen">
      <div className="mx-auto w-1/2 flex justify-center">
        <h1 className="text-4xl">{pokeDetails.name}</h1>
      </div>
    </div>
  );
};

export default DetailsComponent;
