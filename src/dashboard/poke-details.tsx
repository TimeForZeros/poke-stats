import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

import { Button } from '@/components/ui/button';
import { useDetailsStore } from './details-store';
import { capitalize } from '@/lib/utils';
import {
  SectionHeader,
  PokeAbilityComponent,
  PokeTypeButton,
  PokemonStatsComponent,
} from '@/components/pokemon';

const PokeDetails = () => {
  const store = useDetailsStore();
  if (!store.details) return;
  return (
    <Dialog open={store.isOpen} onOpenChange={() => store.setIsOpen(false)}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-3xl">{capitalize(store.details.name)}</DialogTitle>
        </DialogHeader>
        <SectionHeader text={'Types'} />
        <div>
          {store.details.types.map((pokeType) => (
            <PokeTypeButton key={`${pokeType.slot}-${pokeType.type.name}`} type={pokeType.type} />
          ))}
        </div>
        <SectionHeader text={'Abilities'} />
        <div>
          {store.details.abilities.map((pokeAbility) => (
            <PokeAbilityComponent
              key={`${pokeAbility.slot}-${pokeAbility.ability.name}`}
              ability={pokeAbility.ability}
            />
          ))}
        </div>
        <PokemonStatsComponent stats={store.details.stats} />
        <Button variant="link">
          <a href={`/details/${store.details.name}`}>More Details</a>
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default PokeDetails;
