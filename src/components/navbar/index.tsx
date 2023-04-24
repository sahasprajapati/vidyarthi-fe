import React from 'react';
import { Profile } from 'assets/images';
import LoginNavBar from './LoginNavBar';
import NotLoginNavBar from './NotLoginNavBar';
import { useSelector } from 'react-redux';

interface Props {
  variant?: 'white' | 'black';
}

const NavBar: React.FC<Props> = ({ variant }) => {
  const userData: any = useSelector((state: any) => state.auth);

  const login = userData?.authenticate ? true : false;
  const profile =
    localStorage.getItem('user') &&
    JSON.parse(localStorage.getItem('user') ?? 'null');

  return (
    <header className="container">
      {login ? (
        <LoginNavBar imageUrl={profile?.image ?? Profile} variant={variant} />
      ) : (
        <NotLoginNavBar variant={variant} />
      )}
    </header>
  );
};

export default React.memo(NavBar);
