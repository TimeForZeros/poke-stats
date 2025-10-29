import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PokeDetails from './poke-details';
import PokeList from './poke-list';

const client = new QueryClient();
const PokeContainer = () => {
  return (
    <QueryClientProvider client={client}>
      <PokeDetails />
      <PokeList />
    </QueryClientProvider>
  );
};

export default PokeContainer;
