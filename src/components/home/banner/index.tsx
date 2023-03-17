import React from 'react';

import pikachuGreeting from '@assets/pikachu-greeting.png';
import Brand from '@components/brand';

import './style.scss';

function Banner() {
  return (
    <div className="Home-banner">
      <div className="Home-banner__greeting">
        <Brand />
        <div className="Home-banner__greeting__title">
          Hola!
          <br /> ¿Qué quieres hacer hoy?
        </div>
      </div>
      <img src={pikachuGreeting} alt="Pikachu is saying hello!" />
    </div>
  );
}
export default Banner;
