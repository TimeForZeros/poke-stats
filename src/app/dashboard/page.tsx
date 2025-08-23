import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { PokemonEntry } from './pokeTable';
import PokeCard from './poke-card';

const POKE_API = 'https://pokeapi.co/api/v2/pokemon?limit=100';

// const PokeTable = dynamic(() => import('./pokeTable'));

const Dashboard = async () => {
  const res = await fetch(POKE_API);
  const data: PokemonEntry[] = (await res.json()).results;
  return (
    <div>
      <div>test</div>
        <div className='m-2 flex flex-wrap max-w-screen h-screen'>
      <Suspense fallback={'Loading....'}>
        {data.map((entry) => (
          <PokeCard key={entry.name} name={entry.name} url={entry.url} />
        ))}
        {/* <PokeTable data={data} /> */}
      </Suspense>
        </div>
    </div>
  );
};

export default Dashboard;
