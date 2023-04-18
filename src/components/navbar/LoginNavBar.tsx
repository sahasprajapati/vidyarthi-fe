import { VidyarthiLogo2, VidyarthiWhiteLogo2 } from 'assets/images';
import Icon from 'assets/svg/Icon';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { CourseReducer } from 'redux/reducers/course.reducer';
import Sidenav from './SideNav';

interface Props {
  imageUrl: string;
  variant?: 'white' | 'black';
}

const LoginNavBar: React.FC<Props> = ({ imageUrl, variant }) => {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem('user') ?? 'null');

  return (
    <>
      <Sidenav imageUrl={imageUrl} variant={variant} />
      <div
        style={{
          height: '13vh',
          minHeight: '170px',
        }}
      ></div>
    </>
  );
};

export default React.memo(LoginNavBar);
