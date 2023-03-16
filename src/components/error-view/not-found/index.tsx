import React from 'react';

import pokeball from '@assets/open-pokeball.png';

import ErrorView from '../template';

import './style.scss';

function NotFound() {
  return (
    <ErrorView message="Oops, parece que tomamos la ruta equivocada">
      <div className="Not-found">
        <div className="Not-found__title">4</div>
        <img src={pokeball} alt="pokeball-open" />
        <div className="Not-found__title">4</div>
      </div>
    </ErrorView>
  );
}
export default NotFound;
