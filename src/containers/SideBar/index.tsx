import React from 'react';
import { SideBarRow } from 'components';
import Icon from 'assets/svg/Icon';
import { VidyarthiLogo } from 'assets/images';

interface Props {
  responsive: boolean;
  setResponsive: (values: boolean) => void;
}

const SideBar: React.FC<Props> = ({ responsive, setResponsive }) => {
  //   const token: any = window.localStorage.getItem('accessToken');
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
              src={VidyarthiLogo}
              alt="main-logo"
              style={{
                height: '50px',
                width: '200px',
                objectFit: 'cover',
                marginBottom: '20px',
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
          path="/dashboard"
          responsive={responsive}
        />

        <SideBarRow
          title="Course"
          Icon={<Icon name="course" />}
          path="/admin-course"
          responsive={responsive}
        />

        <SideBarRow
          title="Transaction"
          Icon={<Icon name="transaction" />}
          path="/admin-transaction"
          responsive={responsive}
        />
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
