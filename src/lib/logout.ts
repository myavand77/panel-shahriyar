import Cookies from "js-cookie";
import { STORAGE_KEYS } from "@/constants/storage";

export function logoutUser() {
  Cookies.remove(STORAGE_KEYS.TOKEN);
  Cookies.remove(STORAGE_KEYS.REFRESH_TOKEN);
  // Use window.location.replace to force a reload and redirect
  if (typeof window !== "undefined") {
    window.location.replace("/auth/login");
  }
}
