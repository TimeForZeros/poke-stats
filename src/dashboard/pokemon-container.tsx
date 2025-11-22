import { useSuspenseQuery } from '@tanstack/react-query';
import { PokemonClient } from 'pokenode-ts'; // Import the Client
import PokeTable from './poke-table';

const api = new PokemonClient({});

const PokemonContainer = () => {
  const { data } = useSuspenseQuery({
    queryKey: ['pokemon'],
    queryFn: async ({ queryKey }) => {
      return api.listPokemons(0, 100000);
    },
  });
  return (
    <div>
      <PokeTable data={data} />
    </div>
  );
};

export default PokemonContainer;
