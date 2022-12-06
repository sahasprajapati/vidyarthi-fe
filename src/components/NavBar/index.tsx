import React from 'react';
import { Profile } from 'assets/images';
import LoginNavBar from './LoginNavBar';
import NotLoginNavBar from './NotLoginNavBar';
import { useSelector } from 'react-redux';

interface Props {
  variant?: 'white' | 'black';
}

const NavBar: React.FC<Props> = ({ variant }) => {
  const userData = useSelector((state: any) => state.auth);
  const login = userData?.authenticate ? true : false;

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
