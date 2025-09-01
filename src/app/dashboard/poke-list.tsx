'use client';
import React from 'react';
import PokeCard from './poke-card';
import { useDetailsStore } from './details-store';

const PokeList = ({ children }: React.PropsWithChildren) => {
  const store = useDetailsStore();
  const handleClick = (evt: React.MouseEvent<HTMLImageElement>) => {
    if (!(evt.target instanceof HTMLImageElement)) return;
    console.log(evt.target.alt);
  };
  return (
    <div>
      <div onClick={handleClick} className="m-2 flex flex-wrap max-w-screen h-screen">
        {children}
      </div>
    </div>
  );
};

export default PokeList;
