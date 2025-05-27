"use client";
import React from "react";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { sessionKey } from "@/services";
import { showToast } from "@/lib/toast";

// Types
export type UserRole = "Admin" | "Provider" | "User";

export interface UserData {
  id: string;
  email: string;
  role: UserRole;
  name: string;
}

export interface AuthTokens {
  access_token: string;
  refresh_token?: string;
  expires_in?: number;
  [key: string]: any;
}

interface AuthContextType {
  user: UserData | null;
  loading: boolean;
  setUser: (user: UserData | null) => void;
  setLoading: (loading: boolean) => void;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  access_token: string | null;
  setAuthFromOtp: (tokens: AuthTokens) => void;
}

// Default values
const defaultAuthContext: AuthContextType = {
  user: null,
  loading: true,
  setUser: () => null,
  setLoading: () => Boolean,
  login: async () => {},
  logout: () => {},
  access_token: null,
  setAuthFromOtp: () => {},
};

// Create context
const AuthContext = createContext<AuthContextType>(defaultAuthContext);

// Auth provider props
interface AuthProviderProps {
  children: ReactNode;
}

// Cookie options
const cookieOptions = {
  expires: 7, // Cookie expires in 7 days
  secure: process.env.NODE_ENV === "production",
  sameSite: "strict" as const,
  path: '/', // Ensure cookie is available to server and all routes
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [access_token, setAccessToken] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const initAuth = async () => {
      const storedUser = localStorage.getItem("userData");
      const storedToken = Cookies.get(sessionKey);
      if (storedUser) {
        try {
          const userData = JSON.parse(storedUser);
          setUser(userData);
        } catch (error) {
          showToast({ text: "خطا در خواندن اطلاعات کاربر. لطفا دوباره وارد شوید.", type: "error" });
          localStorage.removeItem("userData");
        }
      }
      if (storedToken) {
        setAccessToken(storedToken);
      }
      setLoading(false);
    };
    initAuth();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      // TODO: Replace with your actual API call
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) {
        throw new Error("Login failed");
      }
      const data = await response.json();
      const userData = data.user;
      const token = data.access_token;
      // Store user data
      localStorage.setItem("userData", JSON.stringify(userData));
      Cookies.set("userData", JSON.stringify(userData), cookieOptions);
      if (token) {
        Cookies.set(sessionKey, token, cookieOptions);
        setAccessToken(token);
      }
      setUser(userData);
      // Redirect based on role
      if (userData.role === "Admin") {
        router.push("/admin");
      } else {
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  // New method for OTP login
  const setAuthFromOtp = (tokens: AuthTokens) => {
    if (tokens.access_token) {
      Cookies.set(sessionKey, tokens.access_token, cookieOptions);
      setAccessToken(tokens.access_token);
    }
    // Optionally store refresh_token, etc. if needed
  };

  const logout = () => {
    localStorage.removeItem("userData");
    Cookies.remove("userData");
    Cookies.remove(sessionKey);
    setUser(null);
    setAccessToken(null);
    router.push("/login");
  };

  const value = {
    user,
    loading,
    setUser,
    setLoading,
    login,
    logout,
    access_token,
    setAuthFromOtp,
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
