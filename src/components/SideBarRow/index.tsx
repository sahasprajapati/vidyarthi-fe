import React from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
  title: string;
  path: string;
  Icon: JSX.Element;
  responsive: boolean;
}

const SideBarRow: React.FC<Props> = ({ title, Icon, path, responsive }) => {
  return (
    <div className="flex-center mt-4">
      {responsive ? (
        <NavLink to={path} className="flex sidebar__list">
          {Icon}
          <h6
            className={`${
              responsive ? 'd-none' : 'sidebar__list__title ms-3 mt-2'
            }`}
          >
            {title}
          </h6>
        </NavLink>
      ) : (
        <NavLink
          to={path}
          className="flex sidebar__list"
          style={({ isActive }) => ({
            color: isActive ? '#ffffff' : 'red',
            background: isActive ? '#6b8e4e' : '#ffff',
            borderRadius: 10,
            boxShadow: isActive
              ? '0px 20px 50px rgba(55, 69, 87, 0.1)'
              : 'none',
          })}
        >
          {Icon}
          <h6
            className={`${
              responsive ? 'd-none' : 'sidebar__list__title ms-3 mt-2'
            }`}
          >
            {title}
          </h6>
        </NavLink>
      )}
    </div>
  );
};

export default React.memo(SideBarRow);
