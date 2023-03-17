import React from 'react';

import pikachuHello from '@assets/pokemon-pikachu-hello.png';

import './style.scss';

function LoginRightSide() {
  return (
    <div className="Login-right-side">
      <img src={pikachuHello} alt="Pikachu saying you hello" />
    </div>
  );
}
export default LoginRightSide;
