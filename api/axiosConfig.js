import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api', // remember to adjust by back-end API address
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
