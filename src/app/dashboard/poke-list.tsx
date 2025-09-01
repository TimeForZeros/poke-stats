'use client';
import React from 'react';
import PokeCard from './poke-card';
import { useDetailsStore } from './details-store';

const PokeList = ({ pokeList }) => {
  const store = useDetailsStore();
  const handleClick = (evt: React.MouseEvent<HTMLImageElement>) => {
    if (!(evt.target instanceof HTMLImageElement)) return;
    store.setDetails({ name: evt.target.alt });
    store.setIsOpen(true);
    console.log(evt.target.alt);
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
