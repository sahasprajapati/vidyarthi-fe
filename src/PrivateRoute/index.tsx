import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

interface Props {
  allowedRoutes: any[];
}

const PrivateRoute: React.FC<Props> = ({ allowedRoutes }) => {
  const token: any = localStorage.getItem('accessToken');
  const role = localStorage.getItem('role');
  const location = useLocation();
  return allowedRoutes.includes(role) ? (
    <Outlet />
  ) : (
    <Navigate to={'/login'} state={{ from: location }} replace />
  );
};
export default React.memo(PrivateRoute);
