import React, { useEffect, useState } from 'react';

import { Outlet } from 'react-router-dom';

import pikachuRunning from '@assets/pokemon-pikachu-running.gif';
import { auth } from '@services/firebase/firebase';

import './style.scss';

function AuthStateLayout() {
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = () => {
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth.onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (!initializing) return <Outlet />;

  return (
    <div className="Auth-state-layout">
      <img
        src={pikachuRunning}
        alt="Pikachu is running"
        className="Auth-state-layout__img"
      />
      <div className="Auth-state-layout__text">Cargando...</div>
    </div>
  );
}
export default AuthStateLayout;
