import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { getProfileService } from "@/services/profile-service";
import { STORAGE_KEYS } from "@/constants/storage";
import { User } from "@/types";

export function useProfile(access_token?: string | null) {
  const [profile, setProfile] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      if (!access_token) {
        setLoading(false);
        return;
      }
      try {
        const data = await getProfileService();
        setProfile(data);
        Cookies.set(STORAGE_KEYS.USER_PROFILE, JSON.stringify(data), {
          expires: 7,
          secure: process.env.NODE_ENV === "production",
          sameSite: "strict",
          path: "/",
        });
      } catch (error) {
        console.log(error);
        setProfile(null);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [access_token]);

  return { profile, loading };
}
