import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import PokeDetails from './poke-details';
import { useDetailsStore } from './details-store';

const PokeCard = ({ data }) => {
  return (
    <Card className="w-[12rem] h-[15rem]">
      <CardHeader>
        <CardTitle>{data.name}</CardTitle>
        <CardDescription>Card Description</CardDescription>
        <CardAction>Card Action</CardAction>
      </CardHeader>
      <CardContent >
        <Image data-pokemon-name={data.name} className="cursor-pointer" src={data.sprites.front_default} alt={data.name} height={100} width={100} />
      </CardContent>
    </Card>
  );
};

export default PokeCard;
