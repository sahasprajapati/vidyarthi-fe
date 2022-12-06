import axiosInstance from 'config/network';
import { authConstant, LogoutConstant } from './user-constant';

export const authAction = (user: any) => {
  return async (dispatch: any) => {
    try {
      const { data } = await axiosInstance.post('/login', user);
      window.localStorage.setItem('accessToken', JSON.stringify(data.token));
      window.localStorage.setItem('user', JSON.stringify(data.user));
      dispatch({
        type: authConstant.LOGIN_SUCCESS,
        payload: {
          data,
        },
      });
    } catch (err: any) {
      dispatch({
        type: authConstant.LOGIN_FAILED,
        payload: err?.response?.data?.message,
      });
    }
  };
};
export const isUserLoggedIn = () => {
  return async (dispatch: any) => {
    const accessToken = window.localStorage.getItem('accessToken');
    if (accessToken) {
      dispatch({
        type: authConstant.LOGIN_SUCCESS,
        payload: accessToken,
      });
    }
  };
};
export const logoutAction = () => {
  return async (dispatch: any) => {
    window.localStorage.clear();
    dispatch({
      type: LogoutConstant,
      payload: 'Logout Successfull',
    });
  };
};
