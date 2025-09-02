'use client';
import React from 'react';
import PokeCard from './poke-card';
import { useDetailsStore } from './details-store';
import type { Pokemon } from 'pokedex-promise-v2';

const PokeList = ({ pokeList }: { pokeList: Pokemon[] }) => {
  const store = useDetailsStore();
  const handleClick = (evt: React.MouseEvent<HTMLImageElement>) => {
    const pokemon = pokeList.find(
      (pokemon) => pokemon.name === (evt.target as HTMLImageElement).alt,
    );
    if (!pokemon) return;
    store.setDetails(pokemon);
    store.setIsOpen(true);
  };
  return (
    <div>
      <div onClick={handleClick} className="m-2 flex flex-wrap max-w-screen h-screen">
        {pokeList.map((entry) => (
          <PokeCard key={entry.name} data={entry} />
        ))}
      </div>
    </div>
  );
};

export default PokeList;
