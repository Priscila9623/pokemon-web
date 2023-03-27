import React, { useEffect, useState } from 'react';

import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import pikachuRunning from '@assets/pokemon-pikachu-running.gif';
import { signOut } from '@services/firebase/auth';
import { auth } from '@services/firebase/firebase';

import './style.scss';

function AuthStateLayout() {
  const [initializing, setInitializing] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const closeSession = () => {
    try {
      signOut();
      navigate('/login', { replace: true });
    } catch (error) {
      // something wrong
    }
  };

  const persistSession = () => {
    if (location.pathname === '/login') {
      navigate('/', { replace: true });
    }
  };

  const onAuthStateChanged = (user: any) => {
    if (!user) closeSession();
    else persistSession();
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
