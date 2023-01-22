import axios from 'axios';

const Service = axios?.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    Accept: 'application/json',
  },
});

Service.interceptors.request.use(
  (config: any) => {
    const accessToken = JSON.parse(
      localStorage.getItem('accessToken') ?? 'null'
    );
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    Promise?.reject(error.response || error?.message);
  }
);
export default Service;
