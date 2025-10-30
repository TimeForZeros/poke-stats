import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import './index.css';
import Dashboard from './dashboard/dashboard';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
]);
const client = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={client}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
);
