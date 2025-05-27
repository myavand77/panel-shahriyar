/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosRequestConfig, AxiosResponse } from "axios";
import axiosInstance from "./config";

const onSuccess = (response: AxiosResponse<any, any>) => {
  return response.data;
};

const onError = (error: any) => {
  return Promise.reject(error.response);
};

export async function getService(
  path: string,
  config?: AxiosRequestConfig<any>
) {
  try {
    const response = await axiosInstance.get(path, config);
    return onSuccess(response);
  } catch (error) {
    return onError(error);
  }
}
export async function postService(
  path: string,
  data?: unknown,
  config?: AxiosRequestConfig<any>
) {
  try {
    const response = await axiosInstance.post(path, data, config);
    return onSuccess(response);
  } catch (error) {
    return onError(error);
  }
}

export async function putService(
  path: string,
  data?: unknown,
  config?: AxiosRequestConfig<any>
) {
  try {
    const response = await axiosInstance.put(path, data, config);
    return onSuccess(response);
  } catch (error) {
    return onError(error);
  }
}

export async function delete_(path: string, config?: AxiosRequestConfig<any>) {
  try {
    const response = await axiosInstance.delete(path, config);
    return onSuccess(response);
  } catch (error) {
    return onError(error);
  }
}

export * from "./refreshToken";
