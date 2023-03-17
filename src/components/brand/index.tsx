import React from 'react';

import pokeball from '@assets/pokeball.png';

import './style.scss';

function Brand() {
  return (
    <div className="Brand">
      <img src={pokeball} alt="Pokeball" />
      <div className="Brand__text"> Pokemon</div>
    </div>
  );
}
export default Brand;
