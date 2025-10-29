import { Pokemon } from 'pokedex-promise-v2';
import { create } from 'zustand';

type PokeLink = {
  name: string;
  url: string;
};

type TypeEntry = {
  slot: string;
  type: PokeLink;
};

type Details = {
  abilities: PokeLink[];
  moves: PokeLink[];
  stats: PokeLink[];
  types: TypeEntry[];
};

type DamageRelations = {
  doubleDamageFrom: TypeEntry[];
  doubleDamageTo: TypeEntry[];
  halfDamageFrom: TypeEntry[];
  halfDamageTo: TypeEntry[];
  noDamageFrom: TypeEntry[];
  noDamageTo: TypeEntry[];
};

type PokeType = {
  name: string;
  damageRelations: DamageRelations;
  pastDamageRelations: DamageRelations[];
  generation: TypeEntry;
  moveDamageClass: TypeEntry;
  moves: TypeEntry[];
  pokemon: TypeEntry[];
};

type DetailsProps = {
  isOpen: boolean;
  details: Pokemon | null;
};
type DetailsActions = {
  setIsOpen: (open: boolean) => void,
  setDetails: (newDetails: any) => void,
}

type DetailsStore = DetailsProps & DetailsActions

export const useDetailsStore = create<DetailsStore>((set) => ({
  isOpen: false,
  details: null,
  setIsOpen: (open) => set({ isOpen: open }),
  setDetails: (newDetails) => set({ details: newDetails }),
}));
