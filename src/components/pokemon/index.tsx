import type { APIResource, StatElement } from 'pokedex-promise-v2';
import { Button } from '../ui/button';

export const SectionHeader = ({ text }: { text: string }) => <h3 className="text-2xl">{text}</h3>;

export const PokeTypeButton = ({ type }: { type: APIResource }) => (
  <Button data-type-url={type.url} className="mx-0.5">
    {type.name}
  </Button>
);
export const PokeAbilityComponent = ({ ability }: { ability: APIResource }) => (
  <div data-ability-url={ability.url}>{ability.name}</div>
);

export const PokemonStatsComponent = ({ stats }: { stats: StatElement[] }) => {
  const statObject: Record<string, number> = {};
  stats.forEach((stat) => {
    statObject[stat.stat.name] = stat.base_stat;
  });
  return (
    <div>
      <SectionHeader text={'Stats'} />
      <div>HP: {statObject.hp} </div>
      <div>Attack: {statObject.attack}</div>
      <div>Defense: {statObject.defense}</div>
      <div>Special Attack: {statObject['special-attack']}</div>
      <div>Special Defense: {statObject['special-defense']}</div>
      <div>Speed: {statObject.speed}</div>
    </div>
  );
};
