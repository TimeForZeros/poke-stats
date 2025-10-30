import PokeList from './poke-list';
import { Suspense } from 'react';
const Dashboard = () => {
  return (
    <main>
      <h1>test</h1>
      <Suspense fallback={'loading...'}>
        <PokeList />
      </Suspense>
    </main>
  );
};

export default Dashboard;
