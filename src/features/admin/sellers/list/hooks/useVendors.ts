import { useQuery } from "@tanstack/react-query";
import { getVendors } from "../services";
import { Vendor } from "../types";

export const VENDORS_QUERY_KEY = ["vendors"] as const;

export const useVendors = () => {
  return useQuery<Vendor[]>({
    queryKey: VENDORS_QUERY_KEY,
    queryFn: getVendors,
  });
}; 