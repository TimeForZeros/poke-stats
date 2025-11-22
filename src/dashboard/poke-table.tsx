import React from 'react';

const PokeRow = ({ pokemon, number }) => {
  return (
    <tr>
      <td>{number}</td>
      <td>{pokemon.name}</td>
    </tr>
  );
};

const PokeTable = ({ data }) => {
  const pokemonList = data.results;
  return (
    <table className='w-[50vw]'>
      <thead>
        <tr>
          <th align='left'>number</th>
          <th align='left'>name</th>
        </tr>
      </thead>
      <tbody>
        {pokemonList.map((pokemon, idx) => (
          <PokeRow key={pokemon} pokemon={pokemon} number={idx +1} />
        ))}
      </tbody>
    </table>
  );
};

export default PokeTable;
