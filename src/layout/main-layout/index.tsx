import React from 'react';

import { Outlet } from 'react-router-dom';

import pokemonWaterFrame from '@assets/pokemon-water-frame.svg';

import './style.scss';

function MainLayout() {
  return (
    <>
      <div className="Main-layout">
        <div className="Main-layout__pokemon">
          <img
            src={pokemonWaterFrame}
            alt="pokemon-bg"
            width="300"
            height="300"
          />
        </div>
      </div>
      <Outlet />
    </>
  );
}
export default MainLayout;
