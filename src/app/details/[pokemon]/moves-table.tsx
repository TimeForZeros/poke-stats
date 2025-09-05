import React from 'react';
import type { MoveElement, Pokemon, VersionGroup } from 'pokedex-promise-v2';

const MoveCell = (moveEl: MoveElement) => {
  const name = moveEl.move.name;
  const gen = moveEl.version_group_details;
};
const MovesTable = ({ pokeMoves, genName }: { pokeMoves: MoveElement[]; genName: string }) => {
  const versionMoves = pokeMoves.filter((moveEl) =>
    moveEl.version_group_details.find(
      (versionGroupDetail) => versionGroupDetail.version_group.name === genName,
    ),
  );
  console.log(versionMoves)
  return (
    <div>
      {versionMoves.map((pokeMove) => (
        <div>{pokeMove.move.name}</div>
      ))}
    </div>
  );
};

export default MovesTable;
