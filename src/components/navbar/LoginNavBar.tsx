import { VidyarthiLogo2, VidyarthiWhiteLogo2 } from 'assets/images';
import Icon from 'assets/svg/Icon';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { CourseReducer } from 'redux/reducers/course.reducer';

interface Props {
  imageUrl: string;
  variant?: 'white' | 'black';
}

const LoginNavBar: React.FC<Props> = ({ imageUrl, variant }) => {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem('user') ?? 'null');

  return (
    <nav className="flex-between py-5 ">
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
        {/* <div className="position-relative ms-5 pointer">
          <Icon
            name="wish-list"
            fill={variant === 'white' ? '#FFFFFF' : '#120D26'}
          />
          <div className="wishlist__badge">3</div>
        </div> */}
        <div
          className="position-relative mx-5 pointer"
          onClick={() => {
            navigate('/student-cart');
          }}
        >
          <Icon
            name="cart"
            fill={variant === 'white' ? '#FFFFFF' : '#120D26'}
          />
          <div className="wishlist__badge">
            {userData?.cart?.course?.length ?? 0}
          </div>
        </div>

        <img
          src={imageUrl}
          alt="profile-logo"
          className="login__profile__img"
          onClick={() => {
            switch (userData?.role?.name) {
              case 'instructor':
                navigate('/teacher');
                break;
              case 'student':
                navigate('/dashboard');
                break;
              case 'super':
                navigate('/admin');
                break;
            }
          }}
        />
      </ul>
    </nav>
  );
};

export default React.memo(LoginNavBar);
