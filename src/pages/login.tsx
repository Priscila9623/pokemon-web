import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import LoginContent from '@components/login';
import { auth } from '@services/firebase/firebase';

function Login() {
  const user = auth.currentUser;
  const navigate = useNavigate();

  const redirect = () => {
    if (user) navigate('/', { replace: true });
  };

  useEffect(() => {
    redirect();
  }, [user]);

  return <LoginContent />;
}
export default Login;
