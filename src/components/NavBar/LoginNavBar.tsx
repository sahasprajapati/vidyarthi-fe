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
        <li className="mx-3 nav__link">About Us</li>
        <li className="mx-3 nav__link">Course</li>
        <li className="mx-3 nav__link">Contact us</li>
        <div className="" data-badge="20">
          <Icon name="wish-list" fill="#120D26" />
        </div>

        <div className="wishlist__badge">3</div>
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
