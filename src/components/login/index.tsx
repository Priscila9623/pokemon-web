import React from 'react';

import LoginLeftSide from './left-side';
import LoginRightSide from './right-side';
import './style.scss';

function Login() {
  return (
    <div className="Login">
      <div className="Login__container">
        <LoginLeftSide />
      </div>
      <div className="Login__separator" />
      <div className="Login__container Login__container--right">
        <LoginRightSide />
      </div>
    </div>
  );
}
export default Login;
