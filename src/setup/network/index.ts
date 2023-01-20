import axios from 'axios';

const Service = axios?.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    Accept: 'application/json',
  },
});

Service.interceptors.request.use(
  (config: any) => {
    const accessToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY3NDE0MTYxMSwiZXhwIjoxNjc0MjI4MDExfQ.E2WNRDt3vYR6O4c53kseXmXXOP27iGPGPcLq0TTB4zY';
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
