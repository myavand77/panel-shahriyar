"use client";
import axios from "axios";
import Cookies from "js-cookie";
import { logoutUser } from "@/lib/logout";
import { STORAGE_KEYS } from "@/constants/storage";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// Add a request interceptor to attach the token from cookies
axiosInstance.interceptors.request.use(
  (config) => {
    const token = Cookies.get(STORAGE_KEYS.TOKEN);
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      logoutUser();
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
