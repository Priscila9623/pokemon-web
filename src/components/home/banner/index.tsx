import React from 'react';

import pikachuGreeting from '@assets/pikachu-greeting.png';
import pokeball from '@assets/pokeball.png';

import './style.scss';

function Banner() {
  return (
    <div className="Home-banner">
      <div className="Home-banner__greeting">
        <div className="Home-banner__greeting__pokemon">
          <img src={pokeball} alt="Pokeball" />
          <div className="Home-banner__greeting__pokemon__text"> Pokemon</div>
        </div>
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
