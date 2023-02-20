import axios from 'axios';
import { toast } from 'react-toastify';

const Service = axios?.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    Accept: 'application/json',
  },
});

Service.interceptors.request.use(
  (config: any) => {
    const token = localStorage.getItem('accessToken');
    const accessToken = token;
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    Promise?.reject(error.response || error?.message);
  }
);
Service.interceptors.response.use(
  (response: any) => {
    return response;
  },
  (error) => {
    toast.error(error.response.data.message ?? error.message);
    if (error?.response?.status === 401) {
      localStorage.clear();
      if (!error.request.responseURL.includes('auth/login')) {
        location.href = '/';
      }
    }
    Promise?.reject(error.response || error?.message);
  }
);
export default Service;
