import Icon from 'assets/svg/Icon';
import Button from 'components/button';
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
  const user = JSON.parse(localStorage.getItem('user') ?? 'null');
  return (
    <div
      className={`${
        responsive ? 'responsive__header__container' : 'header__container'
      }`}
    >
      <div
        className="flex-between mt-3"
        style={
          responsive
            ? {
                marginLeft: '5em',
              }
            : {}
        }
      >
        <div className="flex rounded header__search__container ">
          <Icon name="search" />
          <input
            type="text"
            name=""
            id=""
            placeholder="Search for courses..."
            className="form-control shadow-none bg-transparent outline-none border-none"
          />
        </div>
        <div
          className="flex"
          onClick={() => {
            switch (user?.role?.name) {
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
        >
          <Icon name="bell" />
          <Icon name="down-arrow" />
          <span className="mx-3">{user?.name ?? 'Jane Cooper'}</span>
          <div className="header__image me-4">
            <img
              src="https://www.bradford-theatres.co.uk/uploads/images/crop/550/373/store/products/p1drtc61ou1lgc1so9179v1gi31d04.jpg"
              alt="logo"
            />
          </div>

          <Button
            variant="outline"
            type="button"
            isValid={true}
            onClick={() => {
              handleLogout();
            }}
          >
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Header);
