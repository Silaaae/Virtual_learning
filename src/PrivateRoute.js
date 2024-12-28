// src/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useGlobalState } from './context/GlobalState';

const PrivateRoute = ({ children }) => {
  const { user } = useGlobalState();

  return user && user.token ? children : <Navigate to="/auth" />;
};

export default PrivateRoute;
