import { useMutation } from "@tanstack/react-query";
import { requestOtp } from "../services";
import { TOtpRequestResponse, TOtpRequestPayload } from "../types";

export const useOtpRequest = () => {
  const {
    mutate: requestOtpMutate,
    data,
    isPending,
    error,
  } = useMutation<TOtpRequestResponse, unknown, TOtpRequestPayload>({
    mutationFn: requestOtp,
  });

  return {
    requestOtpMutate,
    data,
    isPending,
    error,
  };
};
