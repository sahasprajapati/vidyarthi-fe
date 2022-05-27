import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

interface Props {
  allowedRoutes: any[];
}

const PrivateRoute: React.FC<Props> = ({ allowedRoutes }) => {
  const token: any = window.localStorage.getItem('accessToken');
  const checkRole = JSON.parse(token);
  const location = useLocation();
  return checkRole.roles.find((role: never) => allowedRoutes.includes(role)) ? (
    <Outlet />
  ) : checkRole.accessToken ? (
    <Navigate to={'/login'} state={{ from: location }} replace />
  ) : (
    <Navigate to={'/login'} state={{ from: location }} replace />
  );
};
export default React.memo(PrivateRoute);
