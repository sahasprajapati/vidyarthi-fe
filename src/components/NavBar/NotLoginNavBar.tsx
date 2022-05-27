import { VidyarthiLogo } from 'assets/images';
import Button from 'components/Button';
import React from 'react';
import { Link } from 'react-router-dom';

const NotLoginNavBar: React.FC = () => {
  return (
    <div className="flex-between py-5">
      <Link to="/home">
        <img src={VidyarthiLogo} alt="main-logo" />
      </Link>

      <ul className="flex">
        <li className="mx-3 nav__link">About Us</li>
        <li className="mx-3 nav__link">Course</li>
        <li className="mx-3 nav__link">Contact us</li>

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
    </div>
  );
};

export default React.memo(NotLoginNavBar);
