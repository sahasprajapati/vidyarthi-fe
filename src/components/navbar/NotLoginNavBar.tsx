import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { VidyarthiLogo2, VidyarthiWhiteLogo2 } from 'assets/images';
import Button from 'components/button';
import Icon from 'assets/svg/Icon';

interface Props {
  variant?: 'white' | 'black';
}

const NotLoginNavBar: React.FC<Props> = ({ variant }) => {
  return (
    <>
      <nav className="flex-between py-5 sticky">
        <Link to="/">
          <img
            src={variant === 'white' ? VidyarthiWhiteLogo2 : VidyarthiLogo2}
            alt="main-logo"
            style={{
              height: '50px',
              width: '200px',
              marginLeft: '-1em',
              objectFit: 'cover',
            }}
          />
        </Link>
        <div className="navlist__mobile__menu">
          <Icon name="menu" />
        </div>

        <ul className="flex navbar__list">
          <NavLink
            to="/about-us"
            className={`pointer mx-4 ${
              variant === 'white' ? 'nav__link__white' : 'nav__link'
            }`}
          >
            About Us
          </NavLink>
          <NavLink
            to="/course"
            className={`pointer mx-4 ${
              variant === 'white' ? 'nav__link__white' : 'nav__link'
            }`}
          >
            Course
          </NavLink>
          <NavLink
            to="/contact-us"
            className={`pointer mx-4 ${
              variant === 'white' ? 'nav__link__white' : 'nav__link'
            }`}
          >
            Contact Us
          </NavLink>

          <Link to="/login" className="mx-3">
            <Button type="button" variant="outline" isValid={true}>
              <span className="p-3">Login</span>
            </Button>
          </Link>
          <Link to="/register" className="mx-3">
            <Button type="button" variant="primary" isValid={true}>
              <span className="p-2">Register</span>
            </Button>
          </Link>
        </ul>
      </nav>
      <div style={{ height: '200px' }}>sa</div>
    </>
  );
};

export default React.memo(NotLoginNavBar);
