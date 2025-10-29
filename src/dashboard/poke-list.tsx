'use client';
import React, { useEffect, useState } from 'react';
import PokeCard from './poke-card';
import { useQuery } from '@tanstack/react-query';

const PokeList = () => {
  const {results} = useQuery({
    queryKey: ['pokeList'],
    queryFn: async () => {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
      const { results } = await res.json();
      return
    },
  });
  return (
    <div>
      <div className="m-2 flex flex-wrap max-w-screen h-screen">
        {pokeList.length > 0 && pokeList.map((entry) => <PokeCard key={entry.name} data={entry} />)}
      </div>
    </div>
  );
};

export default PokeList;
