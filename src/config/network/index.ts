import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://vidyarthinepal.com/api/',
  headers: {
    //
  },
});

export default axiosInstance;
