/* eslint-disable @typescript-eslint/no-explicit-any */
import {cookies} from 'next/headers';
import {AxiosRequestConfig, AxiosResponse} from 'axios';
import axiosInstance from './config';
import {sessionKey} from '.';

const getServerCookieByName = async (name: string) => {
  const cookieStore = await cookies();
  return cookieStore.get(name);
};

const onSuccess = (response: AxiosResponse<any, any>) => {
  return response.data;
};

const onError = (error: any) => {
  return Promise.reject(error.response);
};

export async function get(path: string, config?: AxiosRequestConfig<any>) {
  try {
    const token = getServerCookieByName(sessionKey);
    let temp = { ...config };
    if (token) {
      temp = { ...config, headers: { Authorization: `Bearer ${token}` } };
    }
    const response = await axiosInstance.get(path, temp);
    return onSuccess(response);
  } catch (error) {
    return onError(error);
  }
}
