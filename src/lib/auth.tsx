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

// Types
export type UserRole = "Admin" | "Provider" | "User";

export interface UserData {
  id: string;
  email: string;
  role: UserRole;
  name: string;
}

interface AuthContextType {
  user: UserData | null;
  loading: boolean;
  setUser: (user: UserData | null) => void;
  setLoading: (loading: boolean) => void;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

// Default values
const defaultAuthContext: AuthContextType = {
  user: null,
  loading: true,
  setUser: () => null,
  setLoading: () => Boolean,
  login: async () => {},
  logout: () => {},
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
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const initAuth = async () => {
      const storedUser = localStorage.getItem("userData");
      if (storedUser) {
        try {
          const userData = JSON.parse(storedUser);
          setUser(userData);
        } catch (error) {
          console.error("Error parsing stored user data:", error);
          localStorage.removeItem("userData");
        }
      } else {
        // Mock user data for development
        const mockUser: UserData = {
          id: "1",
          email: "mock@example.com",
          role: "Provider",
          name: "Mock User",
        };
        setUser(mockUser);
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

      // Store user data
      localStorage.setItem("userData", JSON.stringify(userData));
      Cookies.set("userData", JSON.stringify(userData), cookieOptions);
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

  const logout = () => {
    localStorage.removeItem("userData");
    Cookies.remove("userData");
    setUser(null);
    router.push("/login");
  };

  const value = {
    user,
    loading,
    setUser,
    setLoading,
    login,
    logout,
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
