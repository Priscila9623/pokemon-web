import React from 'react';

import Brand from '@components/brand';

import './style.scss';

function LoginLeftSide() {
  return (
    <div className="Login-left-side">
      <Brand />
      <div className="Login-left-side__title">Inicia sesión</div>
    </div>
  );
}
export default LoginLeftSide;
