import React from 'react';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from 'react-router-dom';

import Home from '@pages/home';
import Login from '@pages/login';
import NoPage from '@pages/no-page';
import PokemonDetail from '@pages/pokemon-detail';
import Pokemons from '@pages/pokemons';
import TeamDetail from '@pages/team-detail';
import Teams from '@pages/teams';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="teams" element={<Teams />} />
      <Route path="teams/:teamId" element={<TeamDetail />} />
      <Route path="teams/new" element={<TeamDetail />} />
      <Route path="pokemons" element={<Pokemons />} />
      <Route path="pokemons/:pokemonId" element={<PokemonDetail />} />
      <Route path="login" element={<Login />} />
      <Route path="*" element={<NoPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
