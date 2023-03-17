import React from 'react';

import { Outlet } from 'react-router-dom';

import pokemonWaterFrame from '@assets/pokemon-water-frame.svg';
import LogOut from '@components/log-out';

import './style.scss';

function MainLayout() {
  return (
    <>
      <div className="Main-layout">
        <div className="Main-layout__pokemon">
          <img src={pokemonWaterFrame} alt="pokemon-bg" />
        </div>
        <div className="Main-layout__log-out">
          <LogOut />
        </div>
      </div>
      <Outlet />
    </>
  );
}
export default MainLayout;
