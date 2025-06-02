import { useQueryClient, useMutation } from "@tanstack/react-query";
import { updateVendorShopStatus } from "../services";

export const VENDORS_QUERY_KEY = ["vendors"] as const;

export const useUpdateVendorShopStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      vendorId,
      shopStatus,
    }: {
      vendorId: string;
      shopStatus: "ENABLE" | "DISABLE";
    }) => updateVendorShopStatus(vendorId, shopStatus),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: VENDORS_QUERY_KEY });
    },
  });
}; 