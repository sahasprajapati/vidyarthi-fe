import Service from 'setup/network';
import { authConstant, LogoutConstant } from './user-constant';

export const authAction = (user: any) => {
  return async (dispatch: any) => {
    try {
      const { data } = await Service.post('/auth/login', user);
      // if (data?.data?.accessToken) {
      //   const { data: resData } = await axiosInstance.get('/auth/profile', {
      //     headers: {
      //       Authorization: `Bearer ${data?.data?.accessToken}`,
      //     },
      //   });
      //   window.localStorage.setItem(
      //     'accessToken',
      //     JSON.stringify(data?.data?.accessToken)
      //   );
      //   window.localStorage.setItem(
      //     'refreshToken',
      //     JSON.stringify(data?.data?.refreshToken)
      //   );
      //   window.localStorage.setItem('role', JSON.stringify(data?.data?.role));
      //   window.localStorage.setItem('user', JSON.stringify(resData?.data));

      //   dispatch({
      //     type: authConstant.LOGIN_SUCCESS,
      //     payload: {
      //       data,
      //     },
      //   });
      // }
      let profile;
      if (data?.data?.accessToken) {
        profile = await fetchProfile(data?.data);
        dispatch({
          type: authConstant.LOGIN_SUCCESS,
          payload: {
            data: {
              ...data?.data,
              user: profile,
            },
          },
        });
      }
    } catch (err: any) {
      dispatch({
        type: authConstant.LOGIN_FAILED,
        payload: err?.response?.data?.message,
      });
    }
  };
};

export const authRegisterAction = (user: any) => {
  return async (dispatch: any) => {
    try {
      const { data } = await Service.post('/auth/register', user);
      // if (response?.data?.status === 'success') {
      let profile;
      if (data?.data?.accessToken) {
        profile = await fetchProfile(data?.data);
        dispatch({
          type: authConstant.LOGIN_SUCCESS,
          payload: {
            data: {
              ...data?.data,
              user: profile,
            },
          },
        });
      }
    } catch (err: any) {
      dispatch({
        type: authConstant.LOGIN_FAILED,
        payload: err?.response?.data?.message,
      });
    }
  };
};

export const socialLoginAction = (data: {
  accessToken: string;
  refreshToken: string;
  role: string;
}) => {
  return async (dispatch: any) => {
    try {
      // if (response?.data?.status === 'success') {
      let profile;
      if (data) {
        profile = await fetchProfile(data);
        dispatch({
          type: authConstant.LOGIN_SUCCESS,
          payload: {
            data: {
              ...data,
              user: profile,
            },
          },
        });
      }
    } catch (err: any) {
      dispatch({
        type: authConstant.LOGIN_FAILED,
        payload: err?.response?.data?.message,
      });
    }
  };
};
export const fetchProfile = async (data: {
  accessToken: string;
  refreshToken: string;
  role: string;
}) => {
  const { data: resData } = await Service.get('/auth/profile', {
    headers: {
      Authorization: `Bearer ${data?.accessToken}`,
    },
  });
  window.localStorage.setItem('accessToken', data?.accessToken);
  window.localStorage.setItem('refreshToken', data?.refreshToken);
  window.localStorage.setItem('role', data?.role);
  window.localStorage.setItem('user', JSON.stringify(resData?.data));

  return resData?.data;
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
