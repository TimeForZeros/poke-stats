import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { PokemonEntry } from './pokeTable';
import PokeCard from './poke-card';
import PokeDetails from './poke-details';
import { getPokeList } from './actions';
import PokeList from './poke-list';

const Dashboard = async () => {
  const pokeList = await getPokeList();
  return (
    <div>
      <span>test</span>
      <PokeDetails />
      <Suspense fallback={'Loading....'}>
        <PokeList pokeList={pokeList} />
      </Suspense>
    </div>
  );
};

export default Dashboard;
