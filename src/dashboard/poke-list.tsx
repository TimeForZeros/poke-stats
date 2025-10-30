import PokeCard from './poke-card';
import { useSuspenseQuery } from '@tanstack/react-query';
const PokeList = () => {
  const { data: pokeList } = useSuspenseQuery({
    queryKey: ['pokeList'],
    queryFn: async () => {
      const offset = 0;
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`);
      const { results } = await res.json();
      return await Promise.all(
        results.map(async (pokeItem) => {
          const res = await fetch(pokeItem.url);
          const data = await res.json();
          return data;
        }),
      );
    },
  });

  return (
    <div>
      <div className="m-2 flex flex-wrap max-w-screen h-screen">
        {pokeList.length > 0 && pokeList.map((entry) => <PokeCard key={entry.name} data={entry} />)}
      </div>
    </div>
  );
};

export default PokeList;
