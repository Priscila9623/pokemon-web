import React from 'react';

import { Navigate } from 'react-router-dom';

import { PrivateRouteProps } from './types';

// const user = undefined;
const user = {};

function PrivateRoute({ children }: PrivateRouteProps) {
  if (!user) {
    // user is not authenticated
    return <Navigate to="/login" />;
  }
  return children;
}

export default PrivateRoute;
