import { Profile } from 'assets/images';
import React from 'react';
import LoginNavBar from './LoginNavBar';
import NotLoginNavBar from './NotLoginNavBar';

const NavBar: React.FC = () => {
  const login = true;

  return <>{login ? <LoginNavBar imageUrl={Profile} /> : <NotLoginNavBar />}</>;
};

export default React.memo(NavBar);
