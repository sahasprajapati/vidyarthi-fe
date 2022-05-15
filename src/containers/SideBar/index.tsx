import React from 'react';
import { MdSpaceDashboard } from 'react-icons/md';
import { BsBookFill } from 'react-icons/bs';
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';
import { SideBarRow } from 'components';

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
          {!responsive && <h3>logi</h3>}
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
          Icon={MdSpaceDashboard}
          path="/"
          responsive={responsive}
        />
        <SideBarRow
          title="Course"
          Icon={BsBookFill}
          path="/aa"
          responsive={responsive}
        />
        <SideBarRow
          title="Dashboard"
          Icon={MdSpaceDashboard}
          path="/dd"
          responsive={responsive}
        />
        <SideBarRow
          title="Dashboard"
          Icon={MdSpaceDashboard}
          path="/gg"
          responsive={responsive}
        />
        <SideBarRow
          title="Dashboard"
          Icon={MdSpaceDashboard}
          path="/ee"
          responsive={responsive}
        />
        <SideBarRow
          title="Dashboard"
          Icon={MdSpaceDashboard}
          path="/rr"
          responsive={responsive}
        />
      </div>
    </div>
  );
};

export default React.memo(SideBar);
