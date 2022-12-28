import React from 'react';
import { Link } from 'react-router-dom';
import { VidyarthiLogo, VidyarthiWhiteLogo } from 'assets/images';
import Button from 'components/Button';
import Icon from 'assets/svg/Icon';

interface Props {
  variant?: 'white' | 'black';
}

const NotLoginNavBar: React.FC<Props> = ({ variant }) => {
  return (
    <nav className="flex-between py-5">
      <Link to="/home">
        <img
          src={variant === 'white' ? VidyarthiWhiteLogo : VidyarthiLogo}
          alt="main-logo"
        />
      </Link>
      <div className="navlist__mobile__menu">
        <Icon name="menu" />
      </div>

      <ul className="flex navbar__list">
        <li
          className={`pointer mx-4 ${
            variant === 'white' ? 'nav__link__white' : 'nav__link'
          }`}
        >
          About Us
        </li>
        <li
          className={`pointer mx-4 ${
            variant === 'white' ? 'nav__link__white' : 'nav__link'
          }`}
        >
          Course
        </li>
        <li
          className={`pointer mx-4 ${
            variant === 'white' ? 'nav__link__white' : 'nav__link'
          }`}
        >
          Contact Us
        </li>

        <Link to="/login" className="mx-3">
          <Button type="button" variant="outline">
            <span className="p-3">Login</span>
          </Button>
        </Link>
        <Link to="/register" className="mx-3">
          <Button type="button" variant="primary">
            <span className="p-2">Register</span>
          </Button>
        </Link>
      </ul>
    </nav>
  );
};

export default React.memo(NotLoginNavBar);
