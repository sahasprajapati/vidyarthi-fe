import React, { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
// import { ReactComponent as Hamburger } from '../../assets/icons/hamburger.svg';
// import { ReactComponent as Brand } from '../../assets/icons/logo.svg';
import { VidyarthiLogo2, VidyarthiWhiteLogo2 } from 'assets/images';
import Icon from 'assets/svg/Icon';

import './navbar.css';
import Button from 'components/button';

interface Props {
  variant?: 'white' | 'black';
}
const SidenavNotLogin: React.FC<Props> = ({ variant }) => {
  const [showNavbar, setShowNavbar] = useState(false);
  const userData = JSON.parse(localStorage.getItem('user') ?? 'null');

  const navigate = useNavigate();
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  //   <nav className="flex-between py-5 ">
  //     <Link to="/">
  //       <img
  //         src={variant === 'white' ? VidyarthiWhiteLogo2 : VidyarthiLogo2}
  //         alt="main-logo"
  //         style={{
  //           height: '50px',
  //           width: '200px',
  //           marginLeft: '-1em',
  //           objectFit: 'cover',
  //         }}
  //       />
  //     </Link>
  //     <div className="navlist__mobile__menu">
  //       <Icon name="menu" />
  //     </div>
  //     <ul className="flex navbar__list">
  //       <NavLink
  //         to="/about-us"
  //         className={`pointer mx-4 ${
  //           variant === 'white' ? 'nav__link__white' : 'nav__link'
  //         }`}
  //       >
  //         About Us
  //       </NavLink>
  //       <NavLink
  //         to="/course"
  //         className={`pointer mx-4 ${
  //           variant === 'white' ? 'nav__link__white' : 'nav__link'
  //         }`}
  //       >
  //         Course
  //       </NavLink>
  //       <NavLink
  //         to="/contact-us"
  //         className={`pointer mx-4 ${
  //           variant === 'white' ? 'nav__link__white' : 'nav__link'
  //         }`}
  //       >
  //         Contact Us
  //       </NavLink>
  //       {/* <div className="position-relative ms-5 pointer">
  //           <Icon
  //             name="wish-list"
  //             fill={variant === 'white' ? '#FFFFFF' : '#120D26'}
  //           />
  //           <div className="wishlist__badge">3</div>
  //         </div> */}
  //       <div
  //         className="position-relative mx-5 pointer"
  //         onClick={() => {
  //           navigate('/student-cart');
  //         }}
  //       >
  //         <Icon name="cart" fill={variant === 'white' ? '#FFFFFF' : '#120D26'} />
  //         <div className="wishlist__badge">
  //           {userData?.cart?.course?.length ?? 0}
  //         </div>
  //       </div>

  //       <img
  //         src={imageUrl}
  //         alt="profile-logo"
  //         className="login__profile__img"
  //         onClick={() => {
  //           switch (userData?.role?.name) {
  //             case 'instructor':
  //               navigate('/teacher');
  //               break;
  //             case 'student':
  //               navigate('/dashboard');
  //               break;
  //             case 'super':
  //               navigate('/admin');
  //               break;
  //           }
  //         }}
  //       />
  //     </ul>
  //   </nav>;

  return (
    <nav className={`navbar ${windowWidth > 996 ? 'flex-between py-5' : ''}`}>
      <div
        className="container"
        style={{ paddingLeft: '1.5em', paddingRight: '1.5em' }}
      >
        <Link to="/">
          <img
            src={variant === 'white' ? VidyarthiWhiteLogo2 : VidyarthiLogo2}
            alt="main-logo"
            style={{
              height: '50px',
              width: '200px',
              objectFit: 'cover',
            }}
          />
        </Link>
        <div className="menu-icon " onClick={handleShowNavbar}>
          {/* <Hamburger /> */}
          <Icon name="menu" />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul className="flex navbar__list">
            <div className="menu-icon " onClick={handleShowNavbar}>
              {/* <Hamburger /> */}
              <Icon name="cross" />
            </div>
            <li>
              <NavLink
                to="/about-us"
                className={`pointer mx-4 ${
                  variant === 'white' ? 'nav__link__white' : 'nav__link'
                }`}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/course"
                className={`pointer mx-4 ${
                  variant === 'white' ? 'nav__link__white' : 'nav__link'
                }`}
              >
                Course
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact-us"
                className={`pointer mx-4 ${
                  variant === 'white' ? 'nav__link__white' : 'nav__link'
                }`}
              >
                Contact Us
              </NavLink>
            </li>
            <li
              style={{
                marginLeft: '1em',

                marginRight: '1em',
              }}
            >
              <Link to="/login" className="mx-3">
                <Button type="button" variant="outline" isValid={true}>
                  <span className="p-3">Login</span>
                </Button>
              </Link>
            </li>
            <li
              style={{
                marginLeft: '1em',
              }}
            >
              <Link to="/register" className="mx-3">
                <Button type="button" variant="primary" isValid={true}>
                  <span className="p-2">Register</span>
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default SidenavNotLogin;
