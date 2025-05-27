"use client";
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { useRouter, usePathname } from "next/navigation";
import Cookies from "js-cookie";
import { logoutUser } from "./logout";
import { STORAGE_KEYS } from "@/constants/storage";
import { useProfile } from "@/hooks/useProfile";
import { AuthContextType, AuthTokens } from "@/types";

const defaultAuthContext: AuthContextType = {
  access_token: null,
  setAuthFromOtp: () => {},
  logout: () => {},
  loading: true,
  user: null,
};

const AuthContext = createContext<AuthContextType>(defaultAuthContext);

interface AuthProviderProps {
  children: ReactNode;
}

const cookieOptions = {
  expires: 7,
  secure: process.env.NODE_ENV === "production",
  sameSite: "strict" as const,
  path: "/",
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [access_token, setAccessToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();
  const { profile: user, loading: profileLoading } = useProfile(access_token);

  // Check token on mount and on route change
  useEffect(() => {
    const token = Cookies.get(STORAGE_KEYS.TOKEN);
    if (!token) {
      if (!pathname.startsWith("/auth")) {
        router.replace("/auth/login");
      }
      setAccessToken(null);
    } else {
      setAccessToken(token);
    }
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Set token from OTP response
  const setAuthFromOtp = (tokens: AuthTokens) => {
    if (tokens.access_token) {
      Cookies.set(STORAGE_KEYS.TOKEN, tokens.access_token, cookieOptions);
      if (tokens.refresh_token) {
        Cookies.set(
          STORAGE_KEYS.REFRESH_TOKEN,
          tokens.refresh_token,
          cookieOptions
        );
      }
      setAccessToken(tokens.access_token);
    }
  };

  // Logout clears token and redirects
  const logout = () => {
    logoutUser();
  };

  const value = {
    access_token,
    setAuthFromOtp,
    logout,
    loading: loading || profileLoading,
    user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
