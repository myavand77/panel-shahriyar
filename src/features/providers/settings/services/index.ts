import { getService, putService } from "@/services";
import { TVendorMeResponse, TUpdateVendorRequest } from "../types";

export const getVendorMe = async (): Promise<TVendorMeResponse> => {
  const url = "/vendors/me";
  return await getService(url);
};

export const updateVendor = async (
  id: string | number,
  data: TUpdateVendorRequest
): Promise<TVendorMeResponse> => {
  const url = `/vendors/${id}`;
  return await putService(url, data);
};
