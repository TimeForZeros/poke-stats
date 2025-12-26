import { useSuspenseQuery } from '@tanstack/react-query';
import ditto from './ditto.json';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../components/ui/card';
import { capitalize } from '../lib/utils';
import { data } from 'react-router';
import { useState } from 'react';
const PokemonStat = ({ stat }) => {
  return (
    <div>
      <span>{stat.stat.name} </span>
      <progress className="rounded-2xl" value={stat.base_stat} max={255} />
    </div>
  );
};

const PokemonStatContainer = ({ stats }) => {
  return (
    <div>
      {stats.map((stat) => (
        <PokemonStat key={stat.stat.name} stat={stat} />
      ))}
    </div>
  );
};

const PokeDetails = () => {
  const [altText, setAltText] = useState('');
  const { data: pokemon } = useSuspenseQuery({
    queryKey: ['pokemon'],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return ditto;
    },
  });
  return (
    <Card className="max-w-[80%] mx-auto h-full">
      <CardHeader>
        <CardTitle className="text-center text-5xl">{capitalize(pokemon.name)}</CardTitle>
        {/* <CardDescription></CardDescription> */}
      </CardHeader>
      <CardContent className="w-[80%] mx-auto">
        <div className="w-full flex justify-center">
          <img
            className="w-[200px] h-[200px]"
            src={pokemon.sprites.front_default}
            onLoad={() => setAltText(pokemon.name)}
            onError={() => setAltText(pokemon.name)}
            alt={altText}
          />
          <PokemonStatContainer stats={pokemon.stats} />
        </div>
        <div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem Ipsum
          </p>
        </div>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};

export default PokeDetails;
