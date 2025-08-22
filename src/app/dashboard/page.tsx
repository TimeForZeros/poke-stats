import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { PokemonEntry } from './pokeTable';

const POKE_API = 'https://pokeapi.co/api/v2/pokemon?limit=151';

const PokeTable = dynamic(() => import('./pokeTable'));

const Dashboard = async () => {
  const res = await fetch(POKE_API);
  const data: PokemonEntry[] = (await res.json()).results;
  return (
    <div>
      <div>test</div>
      <Suspense fallback={'Loading....'}>
        <PokeTable data={data} />
      </Suspense>
    </div>
  );
};

export default Dashboard;
