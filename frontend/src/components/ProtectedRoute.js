
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const ProtectedRoute = () => {
  const { user } = useAuth();

  // If user is logged in → show the protected page
  if (user) {
    return <Outlet />;
  }

  // If NOT logged in → redirect to login (with return url)
  return <Navigate to="/login" replace />;
};

export default ProtectedRoute;