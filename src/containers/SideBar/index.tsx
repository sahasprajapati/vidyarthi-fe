import React from 'react';
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';
import { SideBarRow } from 'components';
import Icon from 'assets/svg/Icon';
import { VidyarthiLogo } from 'assets/images';

interface Props {
  responsive: boolean;
  setResponsive: (values: boolean) => void;
}

const SideBar: React.FC<Props> = ({ responsive, setResponsive }) => {
  return (
    <div className="flex-col">
      <div
        className={`${
          responsive ? 'sidebar__container__responsive' : 'sidebar__container'
        }`}
      >
        <div className="sidebar__top flex-between mx-3 my-3">
          {!responsive && <img src={VidyarthiLogo} alt="logo" />}
          {!responsive ? (
            <AiOutlineMenuUnfold
              size={35}
              className="pointer"
              onClick={() => setResponsive(!responsive)}
            />
          ) : (
            <AiOutlineMenuFold
              size={35}
              className="pointer"
              onClick={() => setResponsive(!responsive)}
            />
          )}
        </div>
        <SideBarRow
          title="Dashboard"
          Icon={<Icon name="dashboard" />}
          path="/"
          responsive={responsive}
        />
        <SideBarRow
          title="Course"
          Icon={<Icon name="course" />}
          path="/course"
          responsive={responsive}
        />
        <SideBarRow
          title="Transaction"
          Icon={<Icon name="transaction" />}
          path="/transaction"
          responsive={responsive}
        />
        <SideBarRow
          title="Settings"
          Icon={<Icon name="setting" />}
          path="/setting"
          responsive={responsive}
        />
      </div>
    </div>
  );
};

export default React.memo(SideBar);
