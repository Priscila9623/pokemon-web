import React from 'react';

import Brand from '@components/brand';
import GoogleSignInButton from '@components/google-sign-in-button';

import './style.scss';

function LoginLeftSide() {
  return (
    <div className="Login-left-side">
      <Brand />
      <div className="Login-left-side__title">Inicia sesión</div>
      <GoogleSignInButton />
    </div>
  );
}
export default LoginLeftSide;
