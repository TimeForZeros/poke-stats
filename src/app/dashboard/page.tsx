import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { PokemonEntry } from './pokeTable';
import PokeCard from './poke-card';
import PokeDetails from './poke-details';
import { getPokeList } from './actions';
import PokeList from './poke-list';

const POKE_API = 'https://pokeapi.co/api/v2/pokemon?limit=100';

const Dashboard = async () => {
  const pokeList = await getPokeList();
  return (
    <div>
      <Suspense fallback={'Loading....'}>
        <PokeList>
          {pokeList.map((entry) => (
            <PokeCard key={entry.name} data={entry} />
          ))}
        </PokeList>
      </Suspense>
    </div>
  );
};

export default Dashboard;
