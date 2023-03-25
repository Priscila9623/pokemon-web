import React from 'react';

import { Navigate } from 'react-router-dom';

import { auth } from '@services/firebase/firebase';

import { PrivateRouteProps } from './types';

function PrivateRoute({ children }: PrivateRouteProps) {
  const user = auth.currentUser;

  if (!user) {
    // user is not authenticated
    return <Navigate to="/login" />;
  }
  return children;
}

export default PrivateRoute;
