'use client';
import axios from 'axios';
import Cookies from 'js-cookie';
import { sessionKey } from '.';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

// Add a request interceptor to attach the token from cookies
axiosInstance.interceptors.request.use(
  (config) => {
    const token = Cookies.get(sessionKey);
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
export default axiosInstance;
