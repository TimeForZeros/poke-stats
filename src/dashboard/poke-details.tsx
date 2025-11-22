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

const PokemonStat = ({ stat }) => {
  console.log(stat);
  return (
    <div>
      <span>{stat.stat.name} </span>
      <progress className='rounded-2xl' value={stat.base_stat} max={255} />
    </div>
  );
};

const PokemonStatContainer = ({ stats }) => {
  console.log(stats);
  return (
    <div>
      {stats.map((stat) => (
        <PokemonStat key={stat.stat.name} stat={stat} />
      ))}
    </div>
  );
};

const PokeDetails = () => {
  const pokemon = ditto;
  return (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle className="text-center">{pokemon.name}</CardTitle>
        {/* <CardDescription></CardDescription> */}
      </CardHeader>
      <CardContent>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <PokemonStatContainer stats={pokemon.stats} />
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};

export default PokeDetails;
