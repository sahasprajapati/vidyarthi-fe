import React from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
  title: string;
  path: string;
  Icon: any;
  responsive: boolean;
}

const SideBarRow: React.FC<Props> = ({ title, Icon, path, responsive }) => {
  return (
    <div className="flex-center mt-4">
      <NavLink
        to={path}
        className="flex sidebar__list"
        style={({ isActive }) => ({
          color: isActive ? '#ffffff' : 'black',
          background: isActive ? 'green' : '#ffff',
          borderRadius: 8,
        })}
      >
        <Icon className="sidebar__icon" />
        <h6
          className={`${
            responsive ? 'd-none' : 'sidebar__list__title ms-3 mt-2'
          }`}
        >
          {title}
        </h6>
      </NavLink>
    </div>
  );
};

export default React.memo(SideBarRow);
