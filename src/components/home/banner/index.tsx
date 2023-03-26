import React, { useMemo } from 'react';

import pikachuGreeting from '@assets/pikachu-greeting.png';
import Brand from '@components/brand';
import { auth } from '@services/firebase/firebase';

import './style.scss';

function Banner() {
  const user = auth.currentUser;
  const name = useMemo(() => user?.displayName?.split(' ')[0], []);

  return (
    <div className="Home-banner">
      <div className="Home-banner__greeting">
        <Brand />
        <div className="Home-banner__title">
          Hola {name}!
          <br /> ¿Qué quieres hacer hoy?
        </div>
      </div>
      <img src={pikachuGreeting} alt="Pikachu is saying hello!" />
    </div>
  );
}
export default Banner;
