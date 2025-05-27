import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateVendor } from "../services";
import { TUpdateVendorRequest, TVendorMeResponse } from "../types";

export const useUpdateVendor = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation<
    TVendorMeResponse,
    unknown,
    { id: string | number; data: TUpdateVendorRequest }
  >({
    mutationFn: ({
      id,
      data,
    }: {
      id: string | number;
      data: TUpdateVendorRequest;
    }) => updateVendor(id, data),
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ["vendorMe", variables.id] });
    },
  });

  return {
    mutate: mutation.mutate,
    isLoading: mutation.isPending,
    error: mutation.error,
    data: mutation.data,
  };
};
