import { postService } from "@/services";
import { TVendorCreationPayload, TVendorCreationResponse } from "../types";

export const createVendor = async (
  payload: TVendorCreationPayload
): Promise<TVendorCreationResponse> => {
  const url = "/api/v1/vendors";
  return await postService(url, payload);
};
