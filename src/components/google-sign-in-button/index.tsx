import React from 'react';

import googleLogo from '@assets/google-logo.svg';
import { signInWithGoogle } from '@services/firebase/auth';

import './style.scss';

function GoogleSignInButton() {
  const onClick = () => {
    try {
      signInWithGoogle();
    } catch (error) {
      // error happened
    }
  };

  return (
    <div>
      <div className="Google-sign-in-button">
        <button
          type="button"
          onClick={onClick}
          className="Google-sign-in-button__inner-box"
        >
          <img
            src={googleLogo}
            alt="Google logo"
            className="Google-sign-in-button__icon"
          />
          <div className="Google-sign-in-button__text">Acceder con Google</div>
        </button>
      </div>
    </div>
  );
}
export default GoogleSignInButton;
