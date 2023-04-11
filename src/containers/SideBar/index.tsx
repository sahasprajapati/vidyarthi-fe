import React from 'react';
import { SideBarRow } from 'components';
import Icon from 'assets/svg/Icon';
import { VidyarthiLogo2 } from 'assets/images';
import { useNavigate } from 'react-router-dom';

interface Props {
  responsive: boolean;
  setResponsive: (values: boolean) => void;
}

const SideBar: React.FC<Props> = ({ responsive, setResponsive }) => {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem('user') ?? 'null');
  let route = '';
  //   const token: any = window.localStorage.getItem('accessToken');
  switch (userData?.role?.name) {
    case 'instructor':
      route = '/teacher';
      break;
    case 'student':
      route = '/dashboard';

      break;
    case 'super':
      route = '/admin';

      break;
  }
  return (
    <aside className="flex-col">
      <div
        className={`${
          responsive ? 'sidebar__container__responsive' : 'sidebar__container'
        }`}
      >
        <div className="sidebar__top flex-between mx-3 my-3">
          {!responsive && (
            <img
              onClick={() => {
                navigate('/');
              }}
              src={VidyarthiLogo2}
              alt="main-logo"
              style={{
                height: '50px',
                width: '200px',
                objectFit: 'cover',
                marginBottom: '20px',
                marginTop: '20px',
              }}
            />
          )}
          <div className="pointer" onClick={() => setResponsive(!responsive)}>
            <Icon name="menu" />
          </div>
        </div>

        <SideBarRow
          title="Dashboard"
          Icon={<Icon name="dashboard" />}
          path={route}
          responsive={responsive}
        />

        {['super', 'student'].includes(userData?.role?.name) && (
          <SideBarRow
            title="Course"
            Icon={<Icon name="course" />}
            path={
              userData?.role?.name === 'student'
                ? '/student-course'
                : '/admin-course'
            }
            responsive={responsive}
          />
        )}

        {['student'].includes(userData?.role?.name) && (
          <SideBarRow
            title="Achievements"
            Icon={<Icon name="star" />}
            path={'/achievements'}
            responsive={responsive}
          />
        )}

        {['student'].includes(userData?.role?.name) && (
          <SideBarRow
            title="Cart"
            Icon={<Icon name="cart" />}
            path={'/student-cart'}
            responsive={responsive}
          />
        )}

        {['super', 'instructor'].includes(userData?.role?.name) && (
          <SideBarRow
            title="Transaction"
            Icon={<Icon name="transaction" />}
            path={
              userData?.role?.name === 'super'
                ? '/admin-transaction'
                : '/teacher-transaction'
            }
            responsive={responsive}
          />
        )}
        <SideBarRow
          title="Settings"
          Icon={<Icon name="setting" />}
          path="/setting"
          responsive={responsive}
        />
      </div>
    </aside>
  );
};

export default React.memo(SideBar);
