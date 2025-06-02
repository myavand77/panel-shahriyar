import { VendorsResponse } from "../types";
import { getService, putService } from "@/services";

export const getVendors = async (): Promise<VendorsResponse> => {
  const response = await getService("vendors");
  return response;
};

export const updateVendorInstallmentStatus = async (
  vendorId: string,
  installmentStatus: "ACTIVE_CASH" | "ACTIVE_INSTALLMENT"
) => {
  const { data } = await putService(
    `vendors/${vendorId}/installment-status?installment_status=${installmentStatus}`
  );
  return data;
};

export const updateVendorShopStatus = async (
  vendorId: string,
  shopStatus: "ENABLE" | "DISABLE"
) => {
  const { data } = await putService(
    `vendors/${vendorId}/shop-status?shop_status=${shopStatus}`
  );
  return data;
};
