import React from 'react';

import { QueryClient, QueryClientProvider } from 'react-query';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from 'react-router-dom';

import AuthStateLayout from '@layout/auth-state-layout';
import MainLayout from '@layout/main-layout';
import Home from '@pages/home';
import Login from '@pages/login';
import NoPage from '@pages/no-page';
import Pokemons from '@pages/pokemons';
import TeamDetail from '@pages/team-detail';
import Teams from '@pages/teams';
import TeamsByRegion from '@pages/teams-by-region';

const queryClient = new QueryClient();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AuthStateLayout />}>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="region/:regionId" element={<TeamsByRegion />} />
        <Route path="region/:regionId/teams/:teamId" element={<TeamDetail />} />
        <Route path="region/:regionId/teams/new" element={<TeamDetail />} />
        <Route path="region/:regionId/pokemons" element={<Pokemons />} />
        <Route path="teams" element={<Teams />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="*" element={<NoPage />} />
    </Route>
  )
);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
