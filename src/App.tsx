import React from 'react';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from 'react-router-dom';

import PrivateRoute from '@auth/private-route';
import MainLayout from '@layout/main-layout';
import Home from '@pages/home';
import Login from '@pages/login';
import NoPage from '@pages/no-page';
import Pokemons from '@pages/pokemons';
import TeamDetail from '@pages/team-detail';
import Teams from '@pages/teams';
import TeamsByRegion from '@pages/teams-by-region';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route element={<MainLayout />}>
        <Route
          index
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="region/:regionId"
          element={
            <PrivateRoute>
              <TeamsByRegion />
            </PrivateRoute>
          }
        />
        <Route
          path="region/:regionId/teams/:teamId"
          element={
            <PrivateRoute>
              <TeamDetail />
            </PrivateRoute>
          }
        />
        <Route
          path="region/:regionId/teams/new"
          element={
            <PrivateRoute>
              <TeamDetail />
            </PrivateRoute>
          }
        />
        <Route
          path="region/:regionId/pokemons"
          element={
            <PrivateRoute>
              <Pokemons />
            </PrivateRoute>
          }
        />
        <Route
          path="teams"
          element={
            <PrivateRoute>
              <Teams />
            </PrivateRoute>
          }
        />
      </Route>
      <Route path="login" element={<Login />} />
      <Route
        path="*"
        element={
          <PrivateRoute>
            <NoPage />
          </PrivateRoute>
        }
      />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
