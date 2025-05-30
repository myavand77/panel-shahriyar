import { postService } from "@/services";
import { TVendorCreationPayload, TVendorCreationResponse } from "../types";

export const createVendor = async (
  payload: TVendorCreationPayload
): Promise<TVendorCreationResponse> => {
  const url = "vendors";
  return await postService(url, payload);
};
