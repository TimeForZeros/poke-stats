import { pokedex } from '@/lib/utils';
import {
  APIResource,
  Meta,
  Move,
  MoveElement,
  NamedAPIResource,
  StatChange,
} from 'pokedex-promise-v2';

interface PokeMove {
  name: string;
  type: NamedAPIResource;
  damageClass: NamedAPIResource;
  accuracy: number | null;
  effectChance: number | null;
  target: NamedAPIResource;
  power: number | null;
  pp: number | null;
  priority: number;
  statChanges: StatChange[];
  meta: Meta | null,
}

export const getPokemonDetails = async (name: string) => {
  const pokemon = await pokedex.getPokemonByName(name);
  return pokemon;
};

export const getPokemonMoves = async (movesList: MoveElement[]) => {
  const moveNames = movesList.map((moveEl) => moveEl.move.name);
  const movesData = await pokedex.getMoveByName(moveNames);
  const movesDetails = movesData.map<PokeMove>((move) => ({
    name: move.name,
    type: move.type,
    damageClass: move.damage_class,
    accuracy: move.accuracy,
    effectChance: move.effect_chance,
    target: move.target,
    power: move.power,
    pp: move.pp,
    priority: move.priority,
    statChanges: move.stat_changes,
    meta: move.meta,
  }));
  return movesDetails;
};
