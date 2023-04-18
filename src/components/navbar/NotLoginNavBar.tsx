import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { VidyarthiLogo2, VidyarthiWhiteLogo2 } from 'assets/images';
import Button from 'components/button';
import Icon from 'assets/svg/Icon';
import SidenavNotLogin from './SideNavNotLogin';

interface Props {
  variant?: 'white' | 'black';
}

const NotLoginNavBar: React.FC<Props> = ({ variant }) => {
  return (
    <>
      <SidenavNotLogin variant={variant} />
      <div
        style={{
          height: '13vh',
          minHeight: '170px',
        }}
      ></div>
    </>
  );
};

export default React.memo(NotLoginNavBar);
