import { useQuery } from "@tanstack/react-query";
import { getVendorMe } from "../services";

export const useVendorMe = (key: string | number) => {
  const {
    data,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["vendorMe", key],
    queryFn: getVendorMe,
  });

  return {
    data,
    isLoading,
    error,
    refetch,
  };
}; 