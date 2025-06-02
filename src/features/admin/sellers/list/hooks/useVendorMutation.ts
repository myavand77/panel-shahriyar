import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getVendors } from "../services";

export const VENDORS_QUERY_KEY = ["vendors"] as const;

export const useVendors = () => {
  return useQuery({
    queryKey: VENDORS_QUERY_KEY,
    queryFn: getVendors,
  });
};

export const useVendorMutation = () => {
  const queryClient = useQueryClient();

  const invalidateVendors = () => {
    queryClient.invalidateQueries({ queryKey: VENDORS_QUERY_KEY });
  };

  return {
    invalidateVendors,
  };
};
