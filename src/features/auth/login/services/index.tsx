import { postService } from "@/services";
import { TOtpRequestResponse } from "../types";
import { TOtpRequestPayload } from "../types";
import { TOtpVerifyPayload } from "../types";
import { TOtpVerifyResponse } from "../types";

export const requestOtp = async (
  payload: TOtpRequestPayload
): Promise<TOtpRequestResponse> => {
  const url = "otp/send";
  return await postService(url, payload);
};

export const requestOtpVerify = async (
  payload: TOtpVerifyPayload
): Promise<TOtpVerifyResponse> => {
  const url = "otp/verify";
  return await postService(url, payload);
};
