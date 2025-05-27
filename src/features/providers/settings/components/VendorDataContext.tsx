import React, { createContext, useContext, useState, useCallback } from "react";
import { useVendorMe } from "../hooks/useVendorMe";
import { useUpdateVendor } from "../hooks/useUpdateVendor";
import { TVendorMeResponse, TUpdateVendorRequest } from "../types";

// Context type
type VendorDataContextType = {
  vendor: TVendorMeResponse | null;
  isLoading: boolean;
  updateVendor: (data: TUpdateVendorRequest) => Promise<void>;
  refetchVendor: () => void;
};

const VendorDataContext = createContext<VendorDataContextType | undefined>(undefined);

export const VendorDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // For demo, use a static key (e.g., 1). Replace with actual vendor id if needed.
  const vendorId = 1;
  const { data, isLoading, refetch } = useVendorMe(vendorId);
  const [vendor, setVendor] = useState<TVendorMeResponse | null>(null);

  React.useEffect(() => {
    if (data) setVendor(data);
  }, [data]);

  const { mutate, isLoading: isUpdating } = useUpdateVendor();

  const updateVendor = useCallback(
    async (update: TUpdateVendorRequest) => {
      if (!vendor) return;
      return new Promise<void>((resolve, reject) => {
        mutate(
          { id: vendor.id, data: update },
          {
            onSuccess: (updated) => {
              setVendor(updated);
              resolve();
            },
            onError: reject,
          }
        );
      });
    },
    [vendor, mutate]
  );

  return (
    <VendorDataContext.Provider value={{ vendor, isLoading: isLoading || isUpdating, updateVendor, refetchVendor: refetch }}>
      {children}
    </VendorDataContext.Provider>
  );
};

export const useVendorData = () => {
  const ctx = useContext(VendorDataContext);
  if (!ctx) throw new Error("useVendorData must be used within VendorDataProvider");
  return ctx;
}; 