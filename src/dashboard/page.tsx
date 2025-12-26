import PokeDetails from './poke-details';
import { Suspense } from 'react';
const Dashboard = () => {
  return (
    <main className="w-screen h-screen">
      <Suspense>
        <PokeDetails />
      </Suspense>
    </main>
  );
};

export default Dashboard;
