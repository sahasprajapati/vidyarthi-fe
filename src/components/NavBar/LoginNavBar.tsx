import { VidyarthiLogo, VidyarthiWhiteLogo } from 'assets/images';
import Icon from 'assets/svg/Icon';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

interface Props {
  imageUrl: string;
  variant?: 'white' | 'black';
}

const LoginNavBar: React.FC<Props> = ({ imageUrl, variant }) => {
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
        <NavLink
          to="/"
          className={`pointer mx-4 ${
            variant === 'white' ? 'nav__link__white' : 'nav__link'
          }`}
        >
          About Us
        </NavLink>
        <NavLink
          to="/"
          className={`pointer mx-4 ${
            variant === 'white' ? 'nav__link__white' : 'nav__link'
          }`}
        >
          Course
        </NavLink>
        <NavLink
          to="/"
          className={`pointer mx-4 ${
            variant === 'white' ? 'nav__link__white' : 'nav__link'
          }`}
        >
          Contact Us
        </NavLink>
        <div className="position-relative ms-5 pointer">
          <Icon
            name="wish-list"
            fill={variant === 'white' ? '#FFFFFF' : '#120D26'}
          />
          <div className="wishlist__badge">3</div>
        </div>
        <div className="position-relative mx-5 pointer">
          <Icon
            name="cart"
            fill={variant === 'white' ? '#FFFFFF' : '#120D26'}
          />
          <div className="wishlist__badge">23</div>
        </div>

        <img
          src={imageUrl}
          alt="profile-logo"
          className="login__profile__img"
        />
      </ul>
    </nav>
  );
};

export default React.memo(LoginNavBar);
