import { VidyarthiLogo } from 'assets/images';
import Icon from 'assets/svg/Icon';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutAction } from 'redux/actions/auth.action';

interface Props {
  responsive: boolean;
}

const Header: React.FC<Props> = ({ responsive }) => {
  const dispatch: any = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logoutAction());
    navigate('/');
  };
  return (
    <div
      className={`${
        responsive ? 'responsive__header__container' : 'header__container'
      }`}
    >
      <div className="flex-between mt-3">
        <div className="flex rounded header__search__container">
          <div className="">
            {responsive && (
              <img src={VidyarthiLogo} alt="logo" className="me-5" />
            )}
          </div>
          <Icon name="search" />
          <input
            type="text"
            name=""
            id=""
            placeholder="Search for courses..."
            className="form-control shadow-none bg-transparent outline-none border-none"
          />
        </div>
        <div className="flex">
          <Icon name="bell" />
          <Icon name="down-arrow" />
          <span className="mx-3">Jane Cooper</span>
          <div className="header__image me-4">
            <img
              src="https://www.bradford-theatres.co.uk/uploads/images/crop/550/373/store/products/p1drtc61ou1lgc1so9179v1gi31d04.jpg"
              alt="logo"
            />
          </div>
          <p onClick={handleLogout}>Logout</p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Header);