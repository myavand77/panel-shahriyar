import { useMutation } from "@tanstack/react-query";
import { createVendor } from "../services";
import { TVendorCreationPayload, TVendorCreationResponse } from "../types";

export const useCreateVendor = () => {
  const {
    mutate: createVendorMutate,
    data,
    isPending,
    error,
  } = useMutation<TVendorCreationResponse, unknown, TVendorCreationPayload>({
    mutationFn: createVendor,
  });

  return {
    createVendorMutate,
    data,
    isPending,
    error,
  };
}; 