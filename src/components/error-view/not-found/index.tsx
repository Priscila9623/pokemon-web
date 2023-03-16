import React from 'react';

import { Button } from 'antd';
import { Link } from 'react-router-dom';

import pokeball from '@assets/open-pokeball.png';

import './style.scss';

function NotFound() {
  return (
    <div className="Not-found">
      <div className="Not-found__container">
        <div className="Not-found__container__status">
          <div className="Not-found__container__status__title">4</div>
          <img src={pokeball} alt="pokeball-open" />
          <div className="Not-found__container__status__title">4</div>
        </div>
        <div className="Not-found__container__message">
          Oops, parece que tomamos la ruta equivocada
        </div>
        <Button danger type="primary" shape="round">
          <Link to="/">Ir a inicio</Link>
        </Button>
      </div>
    </div>
  );
}
export default NotFound;
