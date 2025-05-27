import { useMutation } from "@tanstack/react-query";
import { requestOtpVerify } from "../services";
import { TOtpVerifyPayload, TOtpVerifyResponse } from "../types";
import { useAuth } from "@/lib/auth";

export const useOtpVerify = () => {
  const { setAuthFromOtp } = useAuth();
  const {
    mutate: verifyOtpMutate,
    data,
    isPending,
    error,
  } = useMutation<TOtpVerifyResponse, unknown, TOtpVerifyPayload>({
    mutationFn: requestOtpVerify,
    onSuccess: (tokens) => {
      setAuthFromOtp(tokens);
    },
  });

  return {
    verifyOtpMutate,
    data,
    isPending,
    error,
  };
};
