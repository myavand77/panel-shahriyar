import { Vendor } from "../types";
import { getService } from "@/services";

export const getVendorInfo = async (): Promise<Vendor> => {
  const { data } = await getService("vendors/me");
  return data;
};
