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

type CardProps = {
  name: string;
  url: string;
};

const PokeCard = async ({ name, url }: CardProps) => {
  const data = await fetch(url);
  const pokemon = await data.json();
  return (
    <Card className='w-[12rem] h-[15rem]'>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>Card Description</CardDescription>
        <CardAction>Card Action</CardAction>
      </CardHeader>
      <CardContent className=''>
        <Image src={pokemon.sprites.front_default} alt={name} height={100} width={100} />
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};

export default PokeCard;
