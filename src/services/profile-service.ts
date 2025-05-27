import { getService } from "./index";

export const getProfileService = async () => {
  return await getService("auth/profile");
};
