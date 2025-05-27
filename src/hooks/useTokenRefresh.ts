import { useEffect, useState } from "react";
import { useRefreshTokenMutation } from "./useRefreshTokenMutation";
import { handleApiError } from "@/lib/error";
import { STORAGE_KEYS } from "@/constants/storage";
import Cookies from "js-cookie";


export const useTokenRefresh = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [refreshToken] = useRefreshTokenMutation();

  const refreshAccessToken = async () => {
    if (isRefreshing) return;

    const storedRefreshToken = Cookies.get(
      STORAGE_KEYS.REFRESH_TOKEN
    );
    if (!storedRefreshToken) return;

    setIsRefreshing(true);
    try {
      const response = await refreshToken(storedRefreshToken);

      // Update tokens
      Cookies.set(STORAGE_KEYS.TOKEN, response.access_token);
      Cookies.set(
        STORAGE_KEYS.REFRESH_TOKEN,
        response.refresh_token
      );
    } catch (error) {
      handleApiError(error, "مهلت اعتبار لاگین به اتمام رسیده است");
      // Clear tokens on refresh failure
      Cookies.remove(STORAGE_KEYS.TOKEN);
      Cookies.remove(STORAGE_KEYS.REFRESH_TOKEN);
      Cookies.remove(STORAGE_KEYS.SELECTED_STORE_ID);
    } finally {
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    // Refresh token every 4 minutes (access token expires in 5 minutes)
    const intervalId = setInterval(() => {
      refreshAccessToken();
    }, 2 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  return { refreshAccessToken, isRefreshing };
};
