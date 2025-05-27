import axiosInstance from "./config";

export async function refreshTokenService(refreshToken: string) {
  const response = await axiosInstance.post(
    `auth/refresh?refresh_token=${encodeURIComponent(refreshToken)}`,
    {}
  );
  return response.data;
}
