import { postService } from "@/services";
import { TOtpRequestResponse } from "../types";
import { TOtpRequestPayload } from "../types";
import { TOtpVerifyPayload } from "../types";
import { TOtpVerifyResponse } from "../types";

export const requestOtp = async (
  payload: TOtpRequestPayload
): Promise<TOtpRequestResponse> => {
  const url = "/api/v1/auth/otp/request";
  return await postService(url, payload);
};

export const requestOtpVerify = async (
  payload: TOtpVerifyPayload
): Promise<TOtpVerifyResponse> => {
  const url = "/api/v1/auth/otp/verify";
  return await postService(url, payload);
};
