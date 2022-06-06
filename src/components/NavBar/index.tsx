import React from 'react';
import { Profile } from 'assets/images';
import LoginNavBar from './LoginNavBar';
import NotLoginNavBar from './NotLoginNavBar';

interface Props {
  variant?: 'white' | 'black';
}

const NavBar: React.FC<Props> = ({ variant }) => {
  const login = true;

  return (
    <header>
      {login ? (
        <LoginNavBar imageUrl={Profile} variant={variant} />
      ) : (
        <NotLoginNavBar variant={variant} />
      )}
    </header>
  );
};

export default React.memo(NavBar);
