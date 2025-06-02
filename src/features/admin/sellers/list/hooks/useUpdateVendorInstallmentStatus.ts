import { useQueryClient, useMutation } from "@tanstack/react-query";
import { updateVendorInstallmentStatus } from "../services";

export const VENDORS_QUERY_KEY = ["vendors"] as const;

export const useUpdateVendorInstallmentStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      vendorId,
      installmentStatus,
    }: {
      vendorId: string;
      installmentStatus: "ACTIVE_CASH" | "ACTIVE_INSTALLMENT";
    }) => updateVendorInstallmentStatus(vendorId, installmentStatus),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: VENDORS_QUERY_KEY });
    },
  });
};
