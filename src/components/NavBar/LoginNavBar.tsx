import { VidyarthiLogo } from 'assets/images';
import Icon from 'assets/svg/Icon';
import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  imageUrl: string;
}

const LoginNavBar: React.FC<Props> = ({ imageUrl }) => {
  return (
    <div className="flex-between py-5">
      <Link to="/home">
        <img src={VidyarthiLogo} alt="main-logo" />
      </Link>
      <div className="navlist__mobile__menu">
        <Icon name="menu" />
      </div>
      <ul className="flex navbar__list">
        <li className="mx-4 nav__link pointer">About Us</li>
        <li className="mx-4 nav__link pointer">Course</li>
        <li className="mx-4 nav__link pointer">Contact us</li>
        <div className="position-relative ms-5">
          <Icon name="wish-list" fill="#120D26" />
          <div className="wishlist__badge">3</div>
        </div>
        <div className="position-relative mx-5">
          <Icon name="cart" fill="#120D26" />
          <div className="wishlist__badge">23</div>
        </div>

        <img
          src={imageUrl}
          alt="profile-logo"
          className="login__profile__img"
        />
      </ul>
    </div>
  );
};

export default React.memo(LoginNavBar);
